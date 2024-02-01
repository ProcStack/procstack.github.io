// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/shaderHeader.js";
 
///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////
/*
export function dustVert( mobile=false ){
    let colCalcs=!mobile;
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX 400.0
    #define LAND 50.0
    
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
        
        float t=time.x*rate;
        
        vec3 pOff=vec3( seeds.x, (seeds.y-.5)*.3, seeds.z)* vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.x);
        //pOff.y+=cameraPosition.y; 
        pOff.x+=-time.x; 
        vec3 pos= pOff ;
        
        vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*.1)*.5+.5 ).rgb-.5;
        
        pos.y+=sin(seeds.x+seeds.z+noiseCd.r*noiseCd.g+noiseCd.b+time.x*.2)*2.;//+noiseCd.r*noiseCd.g*noiseCd.b*20.;
        pos.xz+=(noiseCd.rg*noiseCd.b)*((seeds.w+.75)*4.);
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.008)  );
        vec3 lightPos=vec3( -61,20, 51 );
        vAlpha = ( max( 0., (1.-length(pos-lightPos )*0.02) )+.1 )*5.;

        
        
        vScalar = pScalar ;
        float pScale = pointScale * ((seeds.w+.75)*.5) * pScalar;
        gl_PointSize = pScale+ ( atlas.x>.5 ? 20.0 : 1.2 );
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}
*/
export function dustVert( lightCount ){
	let ret=shaderHeader();
	ret+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3[${lightCount}] lightPos;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX 120.0
    #define LAND 10.0
    
    #define LIGHT_COUNT ${lightCount}
    
    
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
        
        float t=time.x*rate;
        
        vec3 pOff=seeds.xyz * vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.x);
        //pOff.y+=cameraPosition.y; 
        pOff.x+=-time.x; 
        vec3 pos= pOff ;
        
        vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*.1)*.5+.5 ).rgb-.5;
        
        pos.y = (pos.y-.1)*.45;
        pos.y+=sin(seeds.x+seeds.z+noiseCd.r*noiseCd.g+noiseCd.b+time.x*.2)*2.;//+noiseCd.r*noiseCd.g*noiseCd.b*20.;

        pos.xz+=(noiseCd.rg*noiseCd.b)*((seeds.w+.75)*4.);
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        
        float lightInf = 1.0;
        for(int i = 0; i < LIGHT_COUNT; i++) {
            vec3 lightVector = normalize(pos - lightPos[i]);
            lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
        }
        vAlpha*=(1.0-lightInf)*.8+.2;


        vScalar = pScalar ;
        float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        pScale = ( atlas.x>.5 ? pScale : 10.0 );
        
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function dustFrag(){
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
