// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function skyTextureVert(){
  let ret=shaderHeader();
  ret+=`
  varying vec3 worldPos;
  varying vec3 pos;
  varying vec2 vUv;
  void main(){
    vUv=uv;
    worldPos=(projectionMatrix*modelMatrix*vec4(position,1.)).xyz;
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    pos=gl_Position.xyz;
  }`;
  return ret;
}
// Sky Fragment Shader
export function skyTextureFrag(){
  let ret=shaderHeader();
  ret+=`
  uniform sampler2D diffuse;
  uniform vec2 time;
  //uniform vec2 intensity;
  uniform float rate;
    uniform float fogIntensity;
    uniform float fogDensity;
    uniform vec3 skyColor;
    uniform vec3 fogColor;
  varying vec2 vUv;
  varying vec3 worldPos;
  float pi=3.14159265358979;
    
  
  void main(){
    vec2 uv=vUv+vec2(time.x*rate,0.0);
    uv.x=mod(uv.x,1.0);
    vec4 Cd=texture2D(diffuse,uv);
    Cd.rgb=Cd.rgb*skyColor;
    Cd.rgb*=(min(1.0,worldPos.y*.0001));
    //Cd.rgb*=intensity.y;
    gl_FragColor=Cd;
        float fogMult= min(1.0, max(0.0, 1.0+worldPos.y*fogDensity));
        
              float depth = gl_FragCoord.z / gl_FragCoord.w;
              float fogFactor = smoothstep( 1000.0, 12000.0, depth )*(1.0-uv.y);
              gl_FragColor.rgb = mix( Cd.rgb, fogColor, fogFactor*fogIntensity )*fogMult;

        
  }`;
  return ret;
}


