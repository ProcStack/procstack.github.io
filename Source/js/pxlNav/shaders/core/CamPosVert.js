
import {shaderHeader} from "./ShaderHeader.js";

export function camPosVert(){
  let ret=shaderHeader();
  ret+=`
  varying vec3 camPos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
  }`;
  return ret;
}
