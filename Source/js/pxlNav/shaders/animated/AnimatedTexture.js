// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function animTextureVert(){
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

// RGB Data packed Texture
//  _Red - Intensity
//  _Green - Frequency
//  _Blue - Glow Pulse Intensity
//  _Alpha - Intensity 2 (for some reason...)

export function animTextureFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
  uniform vec2 time;
  uniform float rate;
  uniform float freq;
  uniform float intensity;
  uniform vec3 glowColor;
  uniform sampler2D glowTexture;
  varying vec2 vUv;
  float pi=3.14159265358979;
  
  void main(){
    vec4 glowCd=texture2D(glowTexture, vUv);
    vec4 Cd=vec4(glowColor,1.0);
    Cd.rgb*=(cos(glowCd.g*pi*freq+time.x*rate)*.5+.5)*(1.0-glowCd.b)*intensity+glowCd.b;
    Cd.rgb*=glowCd.r*glowCd.a;
    gl_FragColor=Cd;
  }`;
  return ret;
}

