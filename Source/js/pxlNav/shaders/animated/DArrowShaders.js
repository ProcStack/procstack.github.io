// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Direction Arrow Shaders                              //
/////////////////////////////////////////////////////////

export function dArrowVert(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    
    attribute vec3 color;
    
    varying vec3 wPos;
    varying vec3 vCd;
    varying vec2 vUv;
    varying float vDist;
    varying float vAnim;
    
    #define PI 3.14159265358979
    void main(){
        float rate=3.4;
        vCd=color;
        
        vUv=uv;
        vec3 pos=position;
        wPos=pos*vec3(.005,.01,.005)- fract(time.x*.04);
        
        float animSin= cos(time.x*rate-(color.r)*6.);
        float animTime=animSin*.3+.7;
        animTime*=animTime;
        
        vDist=min(1., length( pos-cameraPosition )*.003);
        float gMath=.3;
        float yOff= gMath*animTime*6.-2.;
        pos.y+=yOff+vDist*7.;
        vDist= max(0., 1.0-vDist*(.6+color.b));

        vAnim=(animSin*.4+.6)*.8+vDist;
             
        vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*modelViewPosition;
    }`;
  return ret;
}


export function dArrowFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    varying vec3 wPos;
    varying vec3 vCd;
    varying vec2 vUv;
    varying float vDist;
    varying float vAnim;
    
    void main(){
        vec3 noiseCd =texture2D(cloudNoise,fract(vUv+wPos.xz+wPos.y)).rgb;

        vec4 Cd=vec4( .35, .35, .7, 1.);
        Cd.rgb+=noiseCd*.2-.05;
        Cd+=Cd*vDist+vCd.g-vCd.b;
        Cd.a=vCd.g*vAnim*min(1., length(noiseCd)*.8*vDist);
        gl_FragColor=Cd;
    }`;
  return ret;
}

