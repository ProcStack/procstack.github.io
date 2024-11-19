// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function iZoomPostProcess(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D tDiffusePrev;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform vec2 ratio;
    varying vec2 vUv;

        #define PI 3.14159265358979
        
    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
            vec4 pCd=texture2D( tDiffusePrev, vUv );
            vec3 dCd=Cd.rgb-pCd.rgb;
            vec3 b1Cd= texture2D( tDiffuse, vUv-vec2( dCd.rg*.1 ) ).rgb;
            vec3 b2Cd= texture2D( tDiffusePrev, vUv+vec2( dCd.rg*.1 ) ).rgb;
            b1Cd=mix( b1Cd, b2Cd, step( length(b1Cd), length(b2Cd) ) );
            
            vec4 outCd=vec4(1.0);
            outCd.rgb= mix(  Cd.rgb, b1Cd, length(dCd) );
            
      vec3 noiseCd=texture2D( noiseTexture, fract( vUv*50.0+dCd.rg*.1 + length(Cd.rgb*30.0) + time.x) ).rgb;

            outCd.rgb= mix( vec3(length(outCd.rgb)*.333-length(noiseCd)*.1), outCd.rgb, min(1.0,length(dCd))*.5+.5 );
            outCd.rgb+= dCd.gbr;
            
            
            
      outCd.a=1.0;
      gl_FragColor = outCd;
    }`;
  
  return retFrag;
}

