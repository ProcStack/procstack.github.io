
import Defaults from "./defaults.js" ;


function directionalBlurPass( source, xyDir, blurCounts, stepRate ){
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
          outCd = Cd;
        }`;
	
	return retFrag;
}

export default { directionalBlurPass }