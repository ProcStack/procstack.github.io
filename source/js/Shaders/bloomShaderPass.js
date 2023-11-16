
import Defaults from "./defaults.js" ;


function bloomPass(){
	// Frag; Composer Shader Pass
	let retFrag=Defaults.shaderHeader();
	retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D pDiffuse;
        uniform vec2 resUV;
        varying vec2 vUv;

        out vec4 outCd;
        
        #define PI 3.14159265358979
        
        void main() {

          vec4 Cd=texture2D(pDiffuse,vUv*.5);
            
          float dist = 5.0;
          float fade = 1.0;
          vec2 baseUV=vUv;
          const int blurCount=4;
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
          vec4 blurCd=vec4(.0);
          for(int b=0; b<blurCount; ++b){
            dist = 5.0*(1.0+float(b));
            fade = .1*(1.0-float(b)/float(blurCount));
            for(int s=0; s<runCount; ++s){
              curUV = baseUV+runDir[s]*(resUV*dist);
              curCd = texture2D(pDiffuse,curUV);
              curCd.a *= fade;
              blurCd+=curCd;
            }
          }
          Cd=blurCd;
          //Cd.a=.01;
          outCd = Cd;
        }`;
	
	return retFrag;
}


export default { bloomPass }