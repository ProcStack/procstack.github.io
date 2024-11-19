// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Promo Bevel Shaders                                  //
/////////////////////////////////////////////////////////
export function boostColorsVert(){
  let ret=shaderHeader();
  ret+=`
    varying vec2 vUv;
    
    void main(){
            vUv=uv;
      vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix*modelViewPosition;
    }`;
  return ret;
}
export function boostColorsFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D tDiffuse;
    uniform vec3 intensity;
    uniform vec3 boost;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd=texture2D(tDiffuse,vUv);
            vec3 boost=Cd.rgb*boost.x* ( 1.0- max(0.0, min(1.0, dot( normalize(Cd.rgb-.5), normalize(vec3(.5)) )*2.0)) );

            
            Cd.rgb*=intensity.x;
            Cd.rgb+=boost* length(Cd.rgb);
      gl_FragColor = Cd;
    }`;
  return ret;
}


