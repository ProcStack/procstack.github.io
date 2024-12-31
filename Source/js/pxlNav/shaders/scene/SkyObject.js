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
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    void main(){
        vUv=uv;
        vLocalPos=position;
        
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
    varying vec3 vLocalPos;
    varying vec4 vWorldPos;
    
    #define PI 3.14159265358979323

    float fitDepth( float zDepth ){
        float viewZ = ( camNear * camFar ) / ( ( camFar - camNear ) * zDepth - camFar );
        return ( viewZ + camNear ) / ( camNear - camFar );
    }
    
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

        vec2 nUv =  vec2(vUv.x*0.20, vUv.y - t*.0065  - lPos.y );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = ( nUv+noiseCd.rg*(noiseCd.b) + t*.02);
        noiseCd = texture2D( noiseTexture, nUv ).rgb;
        noiseCd.rg = noiseCd.rg*2.0-1.0;
        
        float zFrag = texture2D( envDiffuse, screenUV ).x;
        float depth = fitDepth( zFrag );
        float stencil = zFrag==1.0 ? 1.0 : 0.0;
        
        float reachDepth = 0.0 ;
        

        vec2 baseUV=screenUV;
        vec2 curUV=vec2(0.0);
        float curDepth=0.0;
        float curPerc = 0.0;
        float dist = 11.0;
        float blendStep = .4;
        float blend = 0.0;
        float uvShift=0.0;
        for(int s=0; s<5; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, (noiseCd.b+float(s)*193.5247))*15.0;
            curUV = baseUV+vec2(0.0,resUV.y*-(dist+uvShift)  - t*.005 );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = fitDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.00 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep;
            dist+=dist*dot(noiseCd.rgb, vec3(0.0,0.0,1.0));
        }
        reachDepth *= blend*stencil*3.0;

        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*2.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        depth = clamp(reachDepth+normPos.y, 0.0, 1.0)*.1;
        
        float fogMixer = (Cd.r+Cd.g+Cd.b) - (fogColor.r+fogColor.g+fogColor.b) ;
        vec3 toFogColor = mix( fogColor, Cd.rgb, step(0.0, fogMixer) );
        float blender = (sin(noiseCd.r*PI+t+uv.x))*max(0.0,1.0-(depth+fogMixer))*.1 ;
        vec3 baseColor = (toFogColor-min(1.0,blender+ depth*10.0)) ;
        
        
        Cd.rgb = mix(Cd.rgb, baseColor, depth);

    `;
  }
  ret+=`

        gl_FragColor=Cd;
    }`;
  return ret;
}
