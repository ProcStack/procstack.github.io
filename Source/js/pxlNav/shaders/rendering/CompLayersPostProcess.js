// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function compLayersPostProcess(){
  // Frag; Composer Shader Pass
  let retFrag='';//shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D mtDiffuse;
    uniform sampler2D sceneDepth;
    uniform sampler2D noiseTexture;
    uniform float exposure;
    uniform vec2 camRotPitch;
    uniform vec2 time;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*exposure;
      vec4 mBlurCd=texture2D(mtDiffuse,vUv)*exposure;
      vec4 depth=texture2D(sceneDepth,vUv);
      
  ////////////////////////
  /*
      vec2 uv=vUv;
      float pi=3.14159265358979;
      float t=-time.x*.007;
      float pitch=camRotPitch.y;//depth.w*2.0-1.0;
      float yaw=camRotPitch.x;
      
      float distMult=depth.x*2.0;
      vec2 noiseUV=vec2(fract(uv.x*distMult+t+yaw), fract(uv.y*distMult+pitch));
      vec3 noiseCd=texture2D(noiseTexture,noiseUV).rgb;
      noiseUV=vec2(fract(uv.x*distMult+t*.5+yaw), fract(uv.y*.5*distMult+t*.25+pitch));
      noiseCd.g=texture2D(noiseTexture,noiseUV).g;
      noiseUV=vec2(fract(uv.x*.8*distMult+t*1.3+yaw), fract(uv.y*.3*distMult+t*.5+ pitch + depth.x*2.0));
      noiseCd.b=texture2D(noiseTexture,noiseUV).b;
      float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
      mult*=max(0.0, 1.0-depth.x) + (1.0-depth.z*.6);
      
      float bg=length(depth.rgb)<.02 ? 0.0 : 1.0;
      float bval=length(bloomCd.rgb);
      mult= mult*(bg+bval) ;//*(1.0-depth.z);
      Cd.rgb= mix( Cd.rgb, vec3(mult*.2), mult );
      */
      
      Cd.rgb+=mBlurCd.rgb;
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}
