
import {shaderHeader} from "./shaderHeader.js";

///////////////////////////////////////////////////////////
// Scrolling Texture LED Screens						//
/////////////////////////////////////////////////////////

export function superficialCircleGateVert(){
	let ret=shaderHeader();
	ret+=`
    varying vec3 vCamPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying float vDist;
    
    void main(){
        vec4 modelPosition=modelMatrix * vec4(position, 1.0);
        vec4 modelViewPosition=viewMatrix * modelPosition;
        
        vec3 pWorldDelta=projectionMatrix[3].xyz;
        vCamPos=cameraPosition;
        
        mat4 mRot=modelMatrix ;
        mRot[3]=vec4(.0, .0, .0, 1.0);
        vec3 worldNormal= normalize(( mRot * vec4( normal, 1.0)).xyz);
        vWorldNormal=worldNormal;
        
        vDist = (1.0-min(1.,length(pWorldDelta)*.004))*.3;
        
        vWorldPos=modelPosition.xyz;
        gl_Position = projectionMatrix*modelViewPosition;
    }`;
	return ret;
}

export function superficialCircleGateFrag(){ // ## set gl common variables to defines
	let ret=shaderHeader();
	ret+=`
    uniform float bloomBoost;
    varying vec3 vCamPos;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPos;
    varying float vDist;
    
    void main(){
        vec4 Cd=vec4( 1.);
        vec3 camPos=normalize(vCamPos-vWorldPos);
        float wDot=max(0., dot(camPos, vWorldNormal));
        wDot=1.0-(1.0-wDot)*(1.0-wDot);
        wDot*=.8;
        
        vec3 distCd=vec3(.7,.0,.0)* mix( vDist, .3, bloomBoost);
        vec3 faceCd=vec3(.5,.0,.0);
        vec3 backCd=vec3(.4,.2,.2);
        
        Cd.rgb=mix( backCd, faceCd, wDot)+(distCd+distCd)*(1.0-bloomBoost*.5)*wDot;
        
        Cd.rgb*=Cd.rgb*wDot+.05*bloomBoost;
        Cd.rgb*=(1.-bloomBoost*.33);
        gl_FragColor=Cd;
    }`;
	return ret;
}


export function superficialCircleGateGlowFrag(){ // ## set gl common variables to defines
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

