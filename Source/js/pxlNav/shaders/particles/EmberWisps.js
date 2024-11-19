// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function emberWispsVert(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX 60.0
    #define LAND 10.0
    
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) * vec3(PROX);
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float t=time.x*rate;
        float shiftY= mod( t+t*seeds.x+seeds.z*8.0+noiseCd.r+noiseCd.b+(seeds.x+seeds.y)*4.0, 8.0);
        float life = 1.0-max(0.0,abs(shiftY*.5-seeds.x)*seeds.z);
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y*.1)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.b)*seeds.w*10.*(life*seeds.zy);
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        vAlpha=life;
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.3+vec2(0.0,pos.y)).rgb*2.0 ;
        pos.xz+=doubleCd.rb;
        
        
        vScalar = pScalar ;
        float pScale = pointScale.x * seeds.w * pScalar + 2.0;
        
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
  return ret;
}

export function emberWispsFrag(){
  let ret=shaderHeader();
  ret+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha; // *vScalar;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
  return ret;
}