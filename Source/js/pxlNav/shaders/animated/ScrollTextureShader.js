// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Scrolling Texture LED Screens            //
/////////////////////////////////////////////////////////

export function scrollingTextureVert(){
  let ret=shaderHeader();
  ret+=`
  uniform vec2 time;
  uniform float speed;
  varying vec2 vUv;
  void main(){
    vUv=uv+vec2(time.x*speed, 0.0);
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
  }`;
  return ret;
}

export function scrollingTextureFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
  uniform sampler2D scrollTexture;
  varying vec2 vUv;
  
  void main(){
    vec4 Cd=texture2D(scrollTexture,vUv);
    gl_FragColor=Cd;
  }`;
  return ret;
}


export function scrollingEntranceFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
  uniform sampler2D scrollTexture;
  varying vec2 vUv;
  
  void main(){
        vec2 rUv=gl_FrontFacing ? vUv : vUv * vec2(-1.0, 1.0);
        vec4 Cd=texture2D(scrollTexture,rUv);
        Cd.a=Cd.r;
        Cd.rgb=vec3(1.0,.0,.0)*(gl_FrontFacing ? 1.0 : .25);
        gl_FragColor=Cd;
  }`;
  return ret;
}

