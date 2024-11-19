// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Background Render Plate Shaders                      //
/////////////////////////////////////////////////////////

export function mediaToggleVert(){
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

export function mediaToggleFrag(){
  let ret=shaderHeader();
  ret+=`
  void main(){
    discard;
    gl_FragColor=vec4(.0,.0,.0,0.0);
  }`;
  return ret;
}