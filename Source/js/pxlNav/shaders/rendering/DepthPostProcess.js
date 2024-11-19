// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Composer Post-Processing Shader Passes         //
/////////////////////////////////////////////////////////

export function depthPostProcess(){
  // Frag; Composer Shader Pass
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D sceneDepth;
    uniform sampler2D maskDepthA;
    uniform sampler2D maskDepthB;
    varying vec2 vUv;

    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv);
      
      float sceneDepth=texture2D(sceneDepth,vUv).r;
      float maDepth=texture2D(maskDepthA,vUv).r;
      float mbDepth=texture2D(maskDepthB,vUv).r;
      //float blend=max(maDepth,mbDepth);
      float blend=min(maDepth,mbDepth);
      //Cd.rgb*=step(blend, sceneDepth);
      Cd.rgb*=step(sceneDepth, blend);
      gl_FragColor = Cd;
    }`;
  return ret;
}

