
import {shaderHeader} from "./ShaderHeader.js";

///////////////////////////////////////////////////////////
// Default Shaders                                      //
/////////////////////////////////////////////////////////

export function defaultShiftVert(){
  let ret=shaderHeader();
  ret+=`
  varying vec2 vUv;
  varying vec2 vUvShift;
  void main(){
    vUv=uv;
        vUvShift=uv-.5;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`;
  return ret;
}
