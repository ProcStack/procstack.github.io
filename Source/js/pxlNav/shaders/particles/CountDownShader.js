// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////

export function countDownVert(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D softNoiseTexture;
    uniform vec2 time;
    uniform vec2 tweener;
    uniform float rate;
    uniform float pointScale;
    
    uniform float fromWorldSpace;
    uniform float toWorldSpace;
    uniform mat4 worldMatrix;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    attribute vec3 From_P;
    attribute vec3 To_P;
    attribute float From_Alpha;
    attribute float To_Alpha;
    attribute vec3 From_N;
    attribute vec3 To_N;
    attribute float From_pscale;
    attribute float To_pscale;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vCamDot;
    varying vec3 vColor;
    
    #define PROX 1000.0
    #define LAND 50.0
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        float blender= tweener.x;
        vec3 fMVPos= (worldMatrix * vec4(From_P, 1.0)).xyz;
        fMVPos = mix( fMVPos, From_P, fromWorldSpace);
        vec3 tMVPos= (worldMatrix * vec4(To_P, 1.0)).xyz;
        tMVPos = mix( tMVPos, To_P, toWorldSpace);
        vec3 pos = mix( fMVPos, tMVPos, blender);
        
        vec3 noiseCd=texture2D(softNoiseTexture,seeds.xy+time.x*vec2( seeds.zx )*.1).rgb ;
        float noiseBlender= mix( fromWorldSpace, toWorldSpace, blender);
        pos += noiseCd*seeds.x*seeds.y*(40. * noiseBlender + 10.);
        vec4 mvPos = viewMatrix * vec4( pos, 1.0);
        
        vAlpha = mix( From_Alpha, To_Alpha, blender );
        vec3 n = mix( From_N, To_N, blender );
        n = mat3( worldMatrix ) * n;
        vCamDot=dot( normalize(n), normalize(mvPos.xyz-cameraPosition) )*.5+.5;
        
        vec3 cdMix=mix( vec3( .8, .1, .7 ), vec3( .9,.8,.9 ), seeds.x );
        cdMix=mix( vec3( .2,.2,.9 ), cdMix, vCamDot);
        vColor = cdMix;

        float pscaleMult=mix( From_pscale, To_pscale, blender );
        gl_PointSize = pointScale * vAlpha * pscaleMult * (sin( seeds.x + seeds.y + time.x*seeds.w*5. )*.4+1.); 
        
        gl_Position = projectionMatrix*mvPos;
    }`;
  return ret;
}

export function countDownFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D snowTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vCamDot;
    varying vec3 vColor;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = uv-.5;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        float alpha=texture2D(snowTexture,rotUV).r ;
        vec4 Cd=vec4( vColor, alpha );

        gl_FragColor=Cd;
    }`;
  return ret;
}