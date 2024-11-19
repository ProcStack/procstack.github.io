
import {shaderHeader} from "./ShaderHeader.js";

///////////////////////////////////////////////////////////
// Default Shaders                                      //
/////////////////////////////////////////////////////////

export function defaultVert(){
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
