// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function directionalBlurPass( source, xyDir, blurCounts, stepRate ){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
  
        #define PI 3.14159265358979
        
        void main() {
          
          float dist = 2.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
            
          const int blurCount=${blurCounts};
          const int runCount=2;
          vec2 runDir[runCount];
          runDir[0]=vec2(${xyDir[0]}.0, ${xyDir[1]}.0);
          runDir[1]=vec2(-${xyDir[0]}.0, -${xyDir[1]}.0);
          vec2 curUV;
          vec4 curCd;
          vec4 blurCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.0 + float(b)*${stepRate};
            fade = (1.0-float(b+1)/float(blurCount+2));
            //fade = 1.- (1.-fade)*(1.-fade);
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curUV = min( vec2(1.), max( vec2(0.), curUV ));
              curCd = texture2D(${source},curUV);
              curCd.a *= fade*(length(curCd.rgb)*.6);
              blurCd.r = max( blurCd.r, curCd.r );
              blurCd.g = max( blurCd.g, curCd.g );
              blurCd.b = max( blurCd.b, curCd.b );
              //blurCd.rgb += curCd.rgb;
              blurCd.a = max( blurCd.a, curCd.a );
            }
          }
          vec4 Cd=blurCd;
          //Cd.a=.01;
          gl_FragColor = Cd;
        }`;
  
  return retFrag;
}


export function mixBlurShaderPass(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;
        
        #define PI 3.14159265358979
        
        void main() {

          float dist = 3.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
          const int blurCount=3;
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
          vec4 curCd;
          vec4 scatterCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 1.5*(1.0+float(b));
            fade = .1*(1.0-float(b)/float(blurCount));
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curCd = texture2D(pDiffuse,curUV);
              curCd.a *= fade;
              scatterCd.rgb += curCd.rgb;
              scatterCd.a = max( scatterCd.a, curCd.a );
            }
          }
          vec4 Cd=scatterCd;
          
          vec4 blurCd=texture2D(tDiffuse,vUv);
          blurCd.rgb = normalize( blurCd.rgb );
          
          Cd = mix( blurCd, Cd, Cd.a);
          Cd = texture2D(tDiffuse,vUv);
          //Cd.a=.01;
          gl_FragColor = Cd;
        }`;
  
  return retFrag;
}