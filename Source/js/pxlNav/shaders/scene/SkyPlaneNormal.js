// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 

export function skyPlaneNormalVert(){
  let ret=shaderHeader();
  ret+=`    
    uniform vec2 resUV;
    
    varying vec4 camPos;
    varying vec3 normPos;
    varying vec2 vUv;
    
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    
    void main(){
        vUv=uv;
        
        mat4 pvMat=projectionMatrix * viewMatrix;
        pvMat[3] = vec4(.0, .0, .0, 1.0);
        mat3 pvRot = inverse( mat3( pvMat ) );
        vCamNormal= pvRot * vec3( 0.0,0.0,1.0);
        vCamNormal.y = dot( vCamNormal, vec3(0.0,1.0,0.0) );
        vWorldNormal= normalize( pvRot[2] *vec3(1.,0.,1.));
        vWorldCross= normalize( pvRot[0]*vec3(1.,0.,1.));
        
        
        vec3 pos = position;
        vec4 modelViewPosition=vec4(vec3(uv*2.0-1.0,1.0), 1.0);
        gl_Position = modelViewPosition;
        
        normPos = normalize( vec3(modelViewPosition.xy*vec2(-1.0, .645), .0) );
        camPos = projectionMatrix*viewMatrix*modelViewPosition;
        
        mat4 pMat =  viewMatrix;
        pMat[3] = vec4(0.0,0.0,0.0,1.0);
    }`;
  return ret;
}
// Sky Fragment Shader
export function skyPlaneNormalFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D envDiffuse;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float camNear;
    uniform float camFar;
    uniform vec2 resUV;

    //uniform vec2 intensity;
    uniform float rate;
    uniform float fogIntensity;
    uniform float fogDensity;
    uniform vec3 skyColor;
    uniform vec3 fogColor;
    varying vec2 vUv;
    varying vec4 camPos;
    varying vec3 normPos;
    
    varying vec3 vCamNormal;
    varying vec3 vWorldNormal;
    varying vec3 vWorldCross;
    
    #define PI 3.14159265358979
    #define IPI 0.3183098861837907
    #define ITAU 0.15915494309189535

    float convertDepth( float zDepth ){
        float viewZ = ( camNear * camFar ) / ( ( camFar - camNear ) * zDepth - camFar );
        return ( viewZ + camNear ) / ( camNear - camFar );
    }
    
    void main(){
        vec2 uv=vUv;
        vec2 camRotUv=vUv;
        vec4 Cd=texture2D(diffuse,uv);
        
        vec2 nUv = fract( vec2(vUv.x, vUv.y - time.x*.02) );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = fract( nUv+noiseCd.rg*(noiseCd.b-.5));
        noiseCd = texture2D( noiseTexture, nUv ).rgb;
        noiseCd.rg = noiseCd.rg*2.0-1.0;
        float zFrag = texture2D( envDiffuse, vUv ).x;
        float depth = convertDepth( zFrag );

        
        float baseDepth = texture2D(envDiffuse,vUv).x;
        float stencil = baseDepth==1.0 ? 1.0 : 0.0;
        
        float reachDepth = 0.0 ;
        const int runCount=5;
        float runDir[runCount];
        runDir[0]= -1.0;
        runDir[1]= -2.0;
        runDir[2]= -3.0;
        runDir[3]= -4.0;
        runDir[4]= -5.0;
        vec2 baseUV=vUv;
        vec2 curUV=vec2(0.0);
        float curDepth=0.0;
        float curPerc = 0.0;
        float dist = 5.0;
        float blendStep = .3;
        float blend = 0.0;
        float uvShift=0.0;
        for(int s=0; s<5; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, noiseCd.b)*10.0;
            curUV = baseUV+vec2(0.0,resUV.y*runDir[s]*(dist+uvShift) );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = convertDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.0 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep*curPerc;//step( curDepth, .01 );
            dist+=5.0;
        }
        reachDepth *= blend*stencil;
        depth = reachDepth;
        Cd.rgb *= 1.0-depth;
        
        Cd.rgb = vec3(camRotUv.x,0.0,0.0);
        
        
        //float mixVal= min(1.0, (1.-(vWorldNormal.y*.5+.5)));
        //Cd.rgb= mix(vec3(0.0, .20, 1.0)+vWorldNormal.y, vec3(.0, .0, .0), mixVal);
        //Cd.rgb=mix( vec3(.0), Cd.rgb, vWorldNormal.y );
        //Cd.rgb=vec3(mix( vWorldNormal, vWorldCross, step(.4, vUv.x)));
        //Cd.rgb=vec3(mix( vWorldCross, Cd.rgb, step(vUv.y,.9)));
        
        vec2 screenUV=(vec2(camPos.xy/camPos.w));//* vec2(ratioU,1.0)*.5;
        //screenUV+=normPos.xy;
        
        vec2 hdrUV=vec2( screenUV.x*.25, screenUV.y*.25+.5 );
        Cd.rgb=vec3(screenUV, 0.0);//vec3(hdrUV+normPos.xy,0.0);//texture2D(hdrMap,hdrUV);
        
        //Cd.rgb = normPos;
        Cd.rgb = vec3(screenUV.xy*.5+.5,0.0);
        Cd.rgb = vec3(camPos.xy*.5+.5,0.0);
        
        vec3 camYawVec = normalize( vCamNormal * vec3(1.0,0.0,1.0));
        float camYaw = atan( camYawVec.x, camYawVec.z )*ITAU+.5;
        camYaw = fract(camYaw+normPos.x*.2);
        
        float camPitch = max(0.0,(1.0-vCamNormal.y)+normPos.y*.15);
        camPitch = ((max(0.0,(vCamNormal.y))-.5)*.8+.5)+normPos.y*.15;
        //camPitch = acos( camPitch*.92 + normPos.y*.15 ) * .5;
        Cd.rgb = vec3( 0.0, camPitch, 0.0);
        Cd=texture2D(diffuse, vec2( camYaw, camPitch ) );
        
        
        gl_FragColor=Cd;
        //float fogMult= min(1.0, max(0.0, 1.0+worldPos.y*fogDensity));
        // float depth = gl_FragCoord.z / gl_FragCoord.w;
        // float fogFactor = smoothstep( 1000.0, 12000.0, depth )*(1.0-uv.y);
        // gl_FragColor.rgb = mix( Cd.rgb, fogColor, fogFactor*fogIntensity )*fogMult;
    }`;
  return ret;
}
