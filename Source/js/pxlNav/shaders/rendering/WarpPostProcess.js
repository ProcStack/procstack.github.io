// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function warpPostProcess(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D animTexture;
    uniform vec2 time;
    uniform vec2 fader;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
      vec4 animCd=texture2D( animTexture, vUv );
      float timer=time.x*.2;
      vec2 animUV=vec2( mod(animCd.r+Cd.r+Cd.g+timer, 1.0), mod(animCd.g+Cd.g+Cd.b+timer, 1.0) );
      animCd=texture2D( animTexture, animUV );
      
      vec2 noiseUV=animUV+animCd.rg;
      vec4 noiseCd=texture2D(noiseTexture,noiseUV);
      noiseCd.rgb=vec3( length( noiseCd.rgb )*.5-.25 );
      
      float blend=fader.x*fader.y;
      Cd=mix( Cd, noiseCd, blend);
      
      Cd.a=1.0;
      Cd.r=1.0;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}

