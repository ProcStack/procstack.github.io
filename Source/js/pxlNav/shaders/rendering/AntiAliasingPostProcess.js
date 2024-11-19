// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function boxAntiAliasPass(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

        #define AADIV 0.1

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
            float dist = 1.0;
      vec2 baseUV=vUv;
      const int runCount=8;
      vec2 runDir[runCount];
      runDir[0]=vec2(1.0, 0.0);
      runDir[1]=vec2(1.0, 1.0);
      runDir[2]=vec2(0.0, 1.0);
      runDir[3]=vec2(-1.0, 1.0);
      runDir[4]=vec2(-1.0, 0.0);
      runDir[5]=vec2(-1.0, -1.0);
      runDir[6]=vec2(0.0, -1.0);
      runDir[7]=vec2(1.0, -1.0);
      vec2 curUV;
      vec3 curCd;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV);//*dist);
        curCd = texture2D(tDiffuse,curUV).rgb;
                Cd.rgb+=curCd;
      }
      Cd.rgb=Cd.rgb*AADIV;
      Cd.a=1.0;
      
      //Cd.rgb = pow(Cd.rgb, vec3(gamma.x));
      Cd.rgb = vec3(1.0)-(vec3(1.0)-Cd.rgb)*gamma.y + Cd.rgb*(1.0-min(1.0,length(Cd.rgb)))*gamma.z;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}

export function crossAntiAliasPass(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform vec2 resUV;
    uniform float ratio;
    uniform vec3 gamma;
    varying vec2 vUv;

        #define AADIV 0.16666666666666666

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv)*2.0;
            
            float dist = 1.0;
      vec2 baseUV=vUv;
      const int runCount=4;
      vec2 runDir[runCount];
      runDir[0]=vec2(1.0, 1.0);
      runDir[1]=vec2(-1.0, 1.0);
      runDir[2]=vec2(-1.0, -1.0);
      runDir[3]=vec2(1.0, -1.0);
      vec2 curUV;
      vec3 curCd;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV);//*dist);
        curCd = texture2D(tDiffuse,curUV).rgb;
                Cd.rgb+=curCd;
      }
      Cd.rgb=Cd.rgb*AADIV;
      Cd.a=1.0;
      
      //Cd.rgb = pow(Cd.rgb, vec3(gamma.x));
      Cd.rgb = vec3(1.0)-(vec3(1.0)-Cd.rgb)*gamma.y + Cd.rgb*(1.0-min(1.0,length(Cd.rgb)))*gamma.z;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}
