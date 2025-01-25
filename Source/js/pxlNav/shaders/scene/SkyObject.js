// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
import { SKY_HAZE } from '../../core/Enums.js';
 
export function skyObjectVert(){
  let ret=shaderHeader();
  ret+=`
    uniform float camFar;
    uniform vec2 resUV;
    
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    void main(){
        vUv=uv;
        vLocalPos=position;
        vN = normal;
        
        vec3 pos = position;
        vec4 modelViewPosition=projectionMatrix * vec4(mat3(viewMatrix)*normalize(pos)*camFar, 1.0);
        gl_Position = modelViewPosition;
        
        vWorldPos = modelViewPosition;
        
    }`;
  return ret;
}
// Sky Fragment Shader
export function skyObjectFrag( skyHazeValue=SKY_HAZE.OFF ){
  let ret=shaderHeader();
  ret+=`     
    uniform sampler2D diffuse;
    uniform sampler2D envDiffuse;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float camNear;
    uniform float camFar;
    uniform vec2 resUV;

    uniform float rate;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    #define PI 3.14159265358979323
    
    void main(){
        vec2 uv=vUv;
        vec2 screenUV=(vec2(vWorldPos.xy/vWorldPos.w))*.5+.5;
        vec4 Cd=texture2D(diffuse,uv);

  `;
  if( skyHazeValue == SKY_HAZE.VAPOR ){
    ret+=`

        vec3 lPos = vLocalPos;
        lPos.y = abs(lPos.y)*0.05;

        float t = time.x*.6;

        vec2 nUv =  vec2(vUv.x*0.40, vUv.y*.5 - t*.0065  - vN.y );
        vec3 noiseBaseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = ( nUv*vec2(1.0,.5)+noiseBaseCd.rg*(noiseBaseCd.b) + t*.02);
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        noiseCd.rg = noiseCd.rg*2.0-1.0;
        
        
        float reachDepth = 0.0 ;
        
        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*3.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        
        reachDepth =  min(1.0, (vN.y * 1. * noiseCd.x  * max(noiseCd.y, noiseCd.z))) ;

        float depth = clamp(reachDepth+normPos.y * max(.95, noiseBaseCd.x*noiseBaseCd.z+vN.y*.5), 0.0, 1.0)*.1;
        
        float fogMixer = (Cd.r+Cd.g+Cd.b) - (fogColor.r+fogColor.g+fogColor.b) ;
        vec3 toFogColor = mix(  Cd.rgb, fogColor,  fogMixer );
        float blender = (sin(noiseCd.r*PI+t+uv.x))*max(0.0,1.0-(depth+fogMixer))*.1 ;
        vec3 baseColor = (toFogColor-min(1.0,blender+ depth*10.0)) ;

        Cd.rgb = mix(Cd.rgb, baseColor, depth * step( -0.10, vN.y ));
    `;
  }
  ret+=`

        gl_FragColor=Cd;
    }`;
  return ret;
}
