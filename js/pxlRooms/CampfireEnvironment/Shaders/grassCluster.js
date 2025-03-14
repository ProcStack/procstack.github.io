// Grass Cluster Shader
//   Written by Kevin Edzenga; 2025
// -- -- -- -- -- -- -- -- -- -- -- --
//
// Similar to The Outlet's grass shader,
//   With added campfire flicker influence.
//
import { ShaderChunk } from "../../../libs/three/three.module.min.js";

import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


export function grassClusterVert(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);
  let ret=shaderHeader();
  ret +=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    
    attribute vec3 color;

    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying vec3 vFogColor;
    varying float vCampfireInf;
  `;
  if( settings.shadows ) {
    ret += `
    // -- -- -- -- -- -- -- --
    // -- Three.js imports  -- --
    // -- -- -- -- -- -- -- -- -- --
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "shadowmap_pars_vertex" ]}
    // -- -- -- -- -- -- -- -- -- --
    // -- End Three.js - -- -- --
    // -- -- -- -- -- -- -- --
    `;
  }
  ret += `
    void main(){
    
        vec4 pos = vec4( position, 1.0 );
        
        // Running texture reads first
        float timer = (-time.x*.005);
        vec2 waveUv = vec2( .5, uv.y*.05 + (-time.x*.005));
        vec3 nCd = texture2D(noiseTexture,waveUv).rgb;
        waveUv = vec2( .5, uv.y*.01 + (-time.x*.015));
        vec3 flickerCd = texture2D(noiseTexture,waveUv).rgb;

        vec4 noiseMaskPos = pos;
        #ifdef USE_INSTANCING
          noiseMaskPos = instanceMatrix * noiseMaskPos;
        #endif
        waveUv = vec2( noiseMaskPos.x*.0005, noiseMaskPos.z*.0001 + (-time.x*.01));
        vec3 nMaskCd = texture2D(noiseTexture,waveUv).rgb;
        
        // -- -- --
    
        // Main Settings
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        vFogColor = fogColor;
        
        // -- -- --

        // Local Wind Sway
        vec3 offset = (nCd-.5) * color.y * 1.5 ;
        
        // -- -- --

        // Add some bounce to the sway, sudden anim shifts
        offset = mix(  offset, offset*2.5, min(0.0, offset.z) );
        offset.y=0.0;
        
        // -- -- --

        // Mask Wind with Noise Peaks
        //   This visually looks like wind gusts in clusters moving through the scene
        float nMask = max(nMaskCd.x, max(nMaskCd.y, nMaskCd.z) );
        nMask = clamp( nMask*2.7-.9, 0.0, 1.0 );
        
        // -- -- --

        // Add offset position in Model Space, pre-instance positioning
        pos.xyz += offset * nMask;
        
        // -- -- --
        
        // Shift position to Instance position-
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        // Global Wind
        pos.z += max(offset.x, max(offset.y, offset.z)) * .5 * nMask;
        
        // -- -- --

        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;

        `;
        if( settings.shadows ) {
          ret += `
            // -- -- -- -- -- -- -- --
            // -- Three.js imports  -- --
            // -- -- -- -- -- -- -- -- -- --
            ${ShaderChunk[ "worldpos_vertex" ]}
            ${ShaderChunk[ "shadowmap_vertex" ]}
            // -- -- -- -- -- -- -- -- -- --
            // -- End Three.js - -- -- --
            // -- -- -- -- -- -- -- --
          `;
        }
        ret += `

        // -- -- -- -- -- -- --
        // -- Position Out - -- --
        // -- -- -- -- -- -- -- -- --
        
        vPos = pos.xyz;
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
        // -- -- --

        // -- -- -- -- -- -- -- -- -- --
        // -- Campfire Flicker Mask - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --

        //  Isolate the Point Light influence
        vCampfireInf = 1.0-min(1.0, length( vPos )*.015);
        vCampfireInf = min( 1.0, vCampfireInf*vCampfireInf * 1.85 );

        float flickerInf = vCampfireInf * ( flickerCd.r * max( flickerCd.g, flickerCd.b ));
        vCampfireInf = mix( vCampfireInf, vCampfireInf*vCampfireInf, flickerInf*flickerInf );
    }`;
  return ret;
}


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


export function grassClusterFrag(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);

  let ret=shaderHeader();
  ret +=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;

    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying vec3 vFogColor;
    varying float vCampfireInf;
    
    `;
    if( settings.shadows ) {
      ret += `
    // -- -- -- -- -- -- -- --
    // -- Three.js imports  -- --
    // -- -- -- -- -- -- -- -- -- --
    // -- Shadow modified from Three.js --
    
        ${ShaderChunk[ "packing" ]}
        
    #if NUM_POINT_LIGHT_SHADOWS > 0
      uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
      varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
      struct PointLightShadow {
        float shadowIntensity;
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
        float shadowCameraNear;
        float shadowCameraFar;
      };
      uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
    #endif
    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
    }
    vec2 cubeToUV( vec3 v, float texelSizeY ) {
      vec3 absV = abs( v );
      float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
      absV *= scaleToCube;
      v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
      vec2 planar = v.xy;
      float almostATexel = 1.5 * texelSizeY;
      float almostOne = 1.0 - almostATexel;
      if ( absV.z >= almostOne ) {
        if ( v.z > 0.0 )
          planar.x = 4.0 - v.x;
      } else if ( absV.x >= almostOne ) {
        float signX = sign( v.x );
        planar.x = v.z * signX + 2.0 * signX;
      } else if ( absV.y >= almostOne ) {
        float signY = sign( v.y );
        planar.x = v.x + 2.0 * signY + 2.0;
        planar.y = v.z * signY - 2.0;
      }
      return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
    }
    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
      vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
      vec3 lightToPosition = shadowCoord.xyz;
      float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
        dp += shadowBias;
      vec3 bd3D = normalize( lightToPosition );
      #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
        vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
        return mix( 1.0, (
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
        ) * .11111111111 * (1.0-dp), shadowIntensity );
      #else
        return mix( 1.0, texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) * (1.0-dp), shadowIntensity );
      #endif
    }
    // -- -- -- -- -- -- -- -- -- --
    // -- End Three.js - -- -- --
    // -- -- -- -- -- -- -- --
      `;
    }
    ret += `

    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    
    void main(){
    
        vec4 Cd = texture2D(diffuse,vUv);
        
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- --
        // -- Depth Calculations - -- --
        // -- -- -- -- -- -- -- -- -- -- --

        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .002 );
        depth *= depth*.5+.5;
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- -- -- -- --
        // -- Animated Radial Campfire Flicker -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        // Animated Noise UVs of the campefire flicker on the ground
        float timer = (-time.x*.02);
        vec2 animWarpUV = (vUv-.5)*.5;
        animWarpUV += animWarpUV*min(1.0,length(vPos)*.001);
        animWarpUV = vec2(.45,  length(animWarpUV)*.04 - timer );
        vec3 animWarpCd = texture2D(noiseTexture,animWarpUV).rgb * depthFade;
        
        
        // -- -- --
        

        // Match general color ambiance of scene
        Cd.rgb *= .23 + vCampfireInf*.25 * vCd.y;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lnCd = texture2D(noiseTexture,lnUv).r;
          float lightNoise = lnCd;

          vec3 lights = vec3(0.0, 0.0, 0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)));
          //
          Cd.rgb += Cd.rgb*lights*.6;
        #endif
        
        // -- -- --
        
      `;
      if( settings.shadows ) {
        ret+=`
        float shadowInf = 0.0;
      #if NUM_POINT_LIGHT_SHADOWS > 0
        
        float detailInf = 0.0;
        float lShadow = 0.0;

        float shadowMix = length(vPos)*.1;
        
        float shadowMixFit = max(0.0,min(1.0, shadowMix*shadowMix*.04)*1.4-.4);
        float shadowRadius = max(0.0,min(1.0, 1.0-shadowMixFit*2.0));
        
        for( int x = 0; x < NUM_POINT_LIGHT_SHADOWS; ++x ) {
            lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[x].shadowMapSize, pointLightShadows[x].shadowIntensity * shadowRadius, pointLightShadows[x].shadowBias+shadowMixFit*.3, pointLightShadows[x].shadowRadius+shadowMixFit*30.0, vPointShadowCoord[x], pointLightShadows[x].shadowCameraNear, pointLightShadows[x].shadowCameraFar );
            shadowInf = max( lShadow, shadowInf);
        }
        shadowInf = shadowInf*.875+.125;
        Cd.rgb *= shadowInf;
      #endif
        `;
      }else{
        ret+=`
        float shadowInf = 1.0;
        `;
      }
      ret += `

        // -- -- -- -- -- -- -- -- 
        // -- Campfire Flicker  -- --
        // -- -- -- -- -- -- -- -- -- --

        float fogMix =  clamp( depth * (depth*2.2501), 0.0, 0.85 ) ;
        Cd.rgb += Cd.rgb * intensity * (animWarpCd.r*3.0+.20) * vCampfireInf;
        Cd.rgb=  mix( Cd.rgb, vFogColor, fogMix );
        Cd.a=1.0;
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}

