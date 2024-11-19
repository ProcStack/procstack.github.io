// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
// Shader Generated Sky
export function bgScreenVert(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    
    varying vec2 vUv;
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    varying vec3 vSunPos;
    
    void main(){
        vUv=uv;
        
        mat4 pvMat=projectionMatrix * viewMatrix;
        pvMat[3] = vec4(.0, .0, .0, 1.0);
        mat3 pvRot = inverse( mat3( pvMat ) );
        vCamNormal= pvRot * vec3( position*.2 + vec3(.0, .0, 1.0));
        vWorldNormal= normalize( pvRot[2] *vec3(1.,0.,1.));
        vWorldCross= normalize( pvRot[0]*vec3(1.,0.,1.));
        
        float timeRate = time.x * .1;
        vec3 sunPos = normalize( vec3(.3, 1.0, 1.0) );
        vec3 sunRef = sunPos;
        sunPos.y= sin(timeRate) * sunRef.y + cos(timeRate)*sunRef.z;
        sunPos.z= sin(timeRate) * sunRef.z - cos(timeRate)*sunRef.y;
        sunPos.x = sin( timeRate ) * .1;
        
        vSunPos = normalize( sunPos );
        
        vec4 modelViewPosition= vec4(position*2.0 + vec3(.0, .0, 1.0), 1.0);
        gl_Position = modelViewPosition;
    }`;
  return ret;
}


    
export function bgScreenFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D noiseTexture;
    varying vec2 vUv;
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    varying vec3 vSunPos;
    
    void main(){
        vec4 Cd=vec4( vec3(1.0, .10, .10), 1.0);
        
        float sunDot = dot( vSunPos, vCamNormal )*.5 +.5;
        sunDot *= max(0.0, dot( vSunPos, vec3(.0, 1.0, .0)) );
        
        vec2 xOffset = vec2( .0, .0);
        vec3 nCd=texture2D(noiseTexture,vUv*.1+vSunPos.zy*vec2(.15,.22) + xOffset ).rgb;
        nCd*=texture2D(noiseTexture,vUv*.1+vSunPos.yx*.2).rgb;
        sunDot *= nCd.x*nCd.y*nCd.z;
        nCd= vec3( length( nCd ) );
        
        float mixVal= min(1.0, sunDot+(1.-(vWorldNormal.y*.5+.5)));
        Cd.rgb= mix(vec3(0.0, .20, 1.0)+nCd*vWorldNormal.y, vec3(.0, .0, .0), mixVal);
        Cd.rgb=mix( vec3(.0), Cd.rgb, vWorldNormal.y );
        Cd.rgb=vec3(mix( vWorldNormal, vWorldCross, step(.4, vUv.x)));
        Cd.rgb=vec3(mix( vWorldCross, Cd.rgb, step(vUv.y,.9)));
        gl_FragColor=Cd;
    }`;
  return ret;
}