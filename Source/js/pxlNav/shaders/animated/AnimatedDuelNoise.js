// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";


export function animatedDuelNoiseFrag(){ // ## set gl common variables to defines
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D glowTexture;
    uniform sampler2D cloudNoise;
    uniform vec2 time;
    varying vec2 vUv;
    
    void main(){
        vec3 glowCd=texture2D(glowTexture,vUv).rgb;
        
        vec2 cUv=(vUv-.5);
        vec2 rUv=cUv;
        float rate=3.;
        rUv+=normalize(rUv)*(sin(time.x*.2+rUv*2.)*1.0+3.2)*.1;
        rUv=( rUv*vec2(1.5,1.5)*(length(vUv)-1.5*cUv) );
        vec3 noiseCd=texture2D(cloudNoise,rUv).rgb;
            
        vec4 Cd=vec4(1.0, 0.0, 0.0, 1.0);
        
        noiseCd.rgb=noiseCd.rgb-.5;
        Cd.a=glowCd.r*glowCd.r*.1+glowCd.g*.05+(noiseCd.r*noiseCd.g*noiseCd.b)*(1.-glowCd.b)*5.*glowCd.g;

        gl_FragColor=Cd;
    }`;
  return ret;
}
