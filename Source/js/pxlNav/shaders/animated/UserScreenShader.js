// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Scrolling Texture LED Screens            //
/////////////////////////////////////////////////////////

export function userScreenVert(){
  let ret=shaderHeader();
  ret+=`
  uniform sampler2D videoFeed;
  varying vec2 vUv;
  varying float depth;
  void main(){
    vUv=uv;
    
    vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
    mat4 distMat=projectionMatrix;
    depth=max(0.0,1.0-length(distMat[3].xyz-(modelViewMatrix*vec4(position,1.0)).xyz)*.001);
    
    gl_Position = projectionMatrix*modelViewPosition;
  }`;
  return ret;
}

export function userScreenFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
  uniform vec2 time;
  uniform float seed;
  uniform float alpha;
  uniform float camExists;
  uniform vec2 scale;
  uniform vec2 ratio;
  uniform vec2 boostPerc;
  varying vec2 vUv;
  varying float depth;
  uniform sampler2D videoFeed;
  uniform sampler2D cloudNoise;
  float pi=3.14159265358979;
  
  void main(){
    float dotMult=5.0+2.0*depth;
    vec4 Cd=texture2D(videoFeed,vUv)*camExists + vec4(.45,.45,.45,1.0)*(1.0-camExists);
    //vec2 noiseUV = vec2(fract(vUv.x*.3*ratio.x+vUv.y*0.1),fract(vUv.y*5.0+time.x+seed*1.124+sin(vUv.y*2.0*ratio.y+time.x*fract(seed)+vUv.x*1.50+seed*1.52)*.5));
    vec2 noiseUV = vec2(fract(vUv.x*.3*ratio.x+vUv.y*0.1),fract(vUv.y*5.0+time.x+seed*1.124+sin(vUv.y*2.0*ratio.y+seed*1.52)*.5));
    vec4 noiseCd=texture2D(cloudNoise, noiseUV );

    float boost=boostPerc.y;
    //float ledDots=((sin(vUv.x*scale.x*ratio.x*dotMult)*.2+.8)*(sin(vUv.y*scale.y*ratio.y*dotMult)*.2+.8) + (noiseCd.r-.5)*(.6)+.3);
    float ledDots=((sin(vUv.x*scale.x*ratio.x*dotMult)*.2+.8) + (noiseCd.r-.5)*(.6)+.3);
    vec3 colorBoost=1.0-(1.0-Cd.rgb)*(1.0-Cd.rgb);
    //Cd.rgb=Cd.rgb*(1.0-boost) + (colorBoost)*(vec3(ledDots*.5+.6))*boost;
    float distToCenter=min(1.0, length(vUv-.5)*1.1);
    distToCenter=distToCenter*distToCenter;
    Cd.rgb*=max(0.0, 1.0-(distToCenter*(1.0-camExists*.5)*.5+.5) );
  Cd.rgb*=(boostPerc.x)+(ledDots*(min(1.0, depth))+(1.0-depth))*boost;
    //Cd.rgb*=(depth)+(1.0-depth);
  Cd.a*=(ledDots*(depth)+(1.0-depth))*alpha;
    //Cd.a*=alpha+(1.0-depth);
    //Cd.a*=length(Cd.rgb)*.333333;
    gl_FragColor=Cd;
  }`;
  return ret;
}

