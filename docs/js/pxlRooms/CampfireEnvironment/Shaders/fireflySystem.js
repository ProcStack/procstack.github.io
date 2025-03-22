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

export function fireflyVert(){
  let ret=`
    // Fade-Out Influence multiplier
    const float WanderInf = 1.0;
    const float WanderRate = 0.85;
    const float WanderFrequency = 2.0;
    const float WanderYMult = 1.85;
    const float FireflyBlinkRate = 1.85;

// -- -- --

`;
ret += shaderHeader();
ret +=`

// -- -- --

  uniform sampler2D noiseTexture;
  uniform vec2 time;
  uniform float rate;
  uniform vec2 pointScale;
  
  attribute vec4 seeds;
  attribute vec2 atlas;
  
  varying vec2 vAtlas;
  varying vec2 vRot;
  varying float vAlpha;
  
  
  // -- -- --
  
  vec3 randomVec( vec3 seed ) {
    return vec3(
      fract( dot(seed,vec3(12.9898, 78.233, 45.164)) * 43758.5453 ),
      fract( dot(seed,vec3(93.9898, 67.345, 12.345)) * 43758.5453 ),
      fract( dot(seed,vec3(54.123, 98.765, 32.123)) * 43758.5453 )
    )*2.0-1.0;
  }
  
  // -- -- --
  
  void main(){
      vAtlas=atlas;
      
      float rot=seeds.z+time.x*(seeds.z*2.);
      vRot=vec2( sin(rot), cos(rot) );
      
      // -- -- --
      
      vec3 pos= position ;
      
      vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*2.1) ).rgb-.5;
      vec3 noiseCdb=texture2D(noiseTexture, sin((1.0-pos.xz)*.05+seeds.yw+time.x*.1) ).rgb-.5;
      
      // -- -- --
      
      // Meandering points
      
      
      vec3 randDirA = randomVec( seeds.xyz );
      vec3 randDirB = randomVec( seeds.wyz );
      vec3 randDirC = randomVec( seeds.zxy );
      vec3 randDirBlend = mix( randDirA, randDirB, sin( randDirC * time.x * WanderFrequency ) ) * WanderInf;
      
      randDirBlend.y *= WanderYMult;

      // -- -- --
      
      pos += randDirBlend * sin( seeds.x+seeds.z+noiseCd.r*noiseCd.g*seeds.y+noiseCdb.b + (time.x+seeds.y*10.) * WanderRate * seeds.w*noiseCdb.g ) * WanderRate * ( 5. + seeds.z );
  
      pos += (noiseCd * noiseCdb ) * ( (seeds.w+.75)*4.);
  
      
      float aMult = min(1.0, (seeds.x*.5+.7) );
      vAlpha = aMult * clamp( sin( time.x * (FireflyBlinkRate + (1.0 + seeds.w + seeds.y)) + seeds.x + seeds.y )*5.-2.5, 0.0, 1.0 );
  
  
      float pScale = pointScale.x * (seeds.w*.3+1.0);
  
      gl_PointSize = pScale;
      
      vec4 mvPos=modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix*mvPos;
  }`;
  return ret;
}

    
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


export function fireflyFrag(){

  let ret = shaderHeader();
  ret +=`
    uniform sampler2D atlasTexture;
    uniform sampler2D atlasAlphaTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec3 tint;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    
    void main(){

        if( vAlpha < 0.01 ){
          discard;
        }

        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;

      
        vec4 dustCd=vec4(
                        texture2D(atlasTexture,rotUV).rgb * tint, // rgb
                        texture2D(atlasAlphaTexture,rotUV).r // alpha
                      ); 

        dustCd.rgb = min( dustCd.rgb, vec3(1.0) ); // clamp to avoid overbright

        float alpha = min(1.0, dustCd.a*2.0) * vAlpha ;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
  return ret;
}
