// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Glow Shaders                     //
/////////////////////////////////////////////////////////

export function wallBarrierVert(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform sampler2D cloudNoise;
    varying vec3 worldPos;
    varying vec2 vUv;
    varying float vCenter;
    void main(){
        vUv=uv;
        
        float rate=.02;
        float scalar=.00008;
        vec2 nUV=position.xy*scalar+vec2(time.x*rate*.1+position.z*scalar, time.x*rate*.1+position.z*scalar);
        vec4 noiseCd=( (texture2D(cloudNoise,nUV)-.5) + (texture2D(cloudNoise,nUV)-.5) );
        
        vec3 pos=position+(noiseCd.rgb )*vec3( 45.0, 10.0, 45.0);
        
        vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
        vec4 toPos=projectionMatrix*modelViewPosition;
        worldPos=toPos.xyz;
        gl_Position = toPos;
        vCenter=length(worldPos.xyz* vec3(cos(time.x+worldPos.x), 1.0, sin(time.x+worldPos.z)) )*.05+.05;
    }`;
  return ret;
}

export function wallBarrierFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D glowTexture;
    uniform vec3 glowColor;
    uniform vec2 time;
    uniform float freq;
    uniform float intensity;
    varying vec3 worldPos;
    varying vec2 vUv;
    varying float vCenter;
    
    void main(){
        float posDist=length(worldPos);
        
        float dist=min(1.0, max(0.0,posDist*0.001));
        dist=1.0-dist;
        
        vec4 Cd=texture2D(glowTexture, vUv);
        Cd.rgb=vec3(.05,.5,.85)+Cd.r*intensity;
        Cd.a=(Cd.r*1.2)*intensity*dist;
        gl_FragColor=Cd;
    }`;
  return ret;
}
