// RGB + Alpha Map Shaders
//   Written by Kevin Edzenga; 2025
// -- -- -- -- -- -- -- -- -- -- -- --
//
// Pass RGB Map & Alpha Map to create a surface with simple depth based fog.
//   Fog is influenced by the luminance of the texture color
//     and the screen space warp of the camera.
// Screen de-warp is `pow( screenPos.x / screenPos.z * settings.screenWarp, 2 )`

import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

export function rgbaMapVert(){
  let ret=shaderHeader();
  ret+=`
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vCamPos;

    void main(){

      vUv=uv;
      vN=normal;

      vec4 pos = vec4( position, 1.0 );

      // Shift position to Instance position-
      #ifdef USE_INSTANCING
        pos = instanceMatrix * pos;
        vN =  mat3(instanceMatrix) * normal ;
      #endif

      vec4 mvPos=modelViewMatrix * pos;
      gl_Position = projectionMatrix*mvPos;
      vCamPos = gl_Position.xyz;
    }
  `;
  return ret;
}

    
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


export function rgbaMapFrag( settings ){
  let defaults = {
    'alphaTest' : 0.2,
    'fog' : true,
    'nearDepthStep' : 0.930,
    'depthScalar' : 0.004,
    'screenWarp' : 0.45, 
    'screenWarpTintDepth' : 3.521,
    'fogDepth' : 0.05
  }
  let shaderSettings = Object.assign( defaults, settings );

  let ret=`
  // Plants surface settings --
    const float AlphaTest = ${shaderSettings.alphaTest};
    const float DepthScalar = ${shaderSettings.depthScalar};
    const float NearDepthStep = ${shaderSettings.nearDepthStep};
    const float ScreenWarp = ${shaderSettings.screenWarp};
    const float ScreenWarpTintDepth = ${shaderSettings.screenWarpTintDepth};
    const float FogDepthMult = ${shaderSettings.fogDepth};
  `;
  ret += shaderHeader();
  ret +=`
    uniform sampler2D rgbMap;
    uniform sampler2D alphaMap;
    uniform float intensity;
    uniform vec3 fogColor;

    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vCamPos;

    // -- -- --
    
    // Human Eye Adjusted Luminance
    //   https://en.wikipedia.org/wiki/Grayscale
    float luma(vec3 color) {
      return dot( color, vec3(0.2126, 0.7152, 0.0722) );
    }
      
      
    // -- -- --
    
    void main(){
        
      float alpha=texture2D( alphaMap, vUv ).r;

      // Reading 'alpha' would have memory read latency
      //   I wonder if I should move the Cd read above the alpha check here
      if( alpha < AlphaTest ){
        discard;
      }
      
      vec3 Cd=texture2D( rgbMap, vUv ).rgb;
      
      // -- -- --
      
      // Depth based fog and screen space warp

      // Get "de-warp" of screen space
      float screenSpaceX = abs((vCamPos.x / vCamPos.z)) * ScreenWarp;

      // To prevent "too close to camera" depth artifacts, 'step()' is locking near depth 
      float depth = min(1.0, max(0.0, gl_FragCoord.z / gl_FragCoord.w * DepthScalar )) * step( NearDepthStep, gl_FragCoord.z );
      depth = depth + ( screenSpaceX * screenSpaceX )*min( 1.0, depth * ScreenWarpTintDepth );
      depth = min(1.0, pow( depth, 1.0-depth*.65) );
      
      // -- -- --

      vec4 outCd = vec4( Cd, alpha );

      float fogMix =  clamp( depth * (depth*2.501+.1), 0.0, 0.9 ) ;
      
      // Mix in texture color's luminance to fog color
      vec3 toFogColor = fogColor * ( luma( Cd.rgb ) * .4 + .7 );
      
      float shade = (abs(dot( vN, normalize(vCamPos) ))*.3+.7 ) * intensity;
      outCd.rgb=  mix( outCd.rgb * shade, toFogColor, fogMix );
      
      
      gl_FragColor = outCd;
    }
  
  `;
  return ret;
}
