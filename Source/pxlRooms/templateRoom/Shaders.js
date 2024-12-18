// Template Vertex & Fragment Shaders
// Modify the shaders how you see below,
//   A return of the shader for your required WebGL stage

import {shaderHeader} from "../../js/pxlNav/shaders/core/ShaderHeader.js";


export function templateVert(){
  let ret=shaderHeader();
  ret+=`
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
  }`;
  return ret;
}


export function templateFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    
    void main() {
      vec4 Cd = texture2D( tDiffuse, vUv );
      gl_FragColor = Cd;
    }`;
  return ret;
}