// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function glowPassPostProcess(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D gDiffuse;
    uniform sampler2D rDiffuse;
    uniform sampler2D sceneDepth;
    uniform vec2 time;
    uniform vec2 ratio;
    varying vec2 vUv;

        #define PI 3.14159265358979
        
    void main() {
      vec4 Cd=texture2D( tDiffuse, vUv );
      vec4 gCd=texture2D( gDiffuse, vUv );
      vec4 rCd=texture2D( rDiffuse, vUv );
      
      Cd.rgb=gCd.rgb + gCd.rgb*length(gCd.rgb) + rCd.rgb  + Cd.rgb ;

      Cd.a=1.0;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}
