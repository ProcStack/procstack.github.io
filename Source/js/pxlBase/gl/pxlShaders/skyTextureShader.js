
import {shaderHeader} from "./shaderHeader.js";

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
        vec4 modelViewPosition=projectionMatrix * viewMatrix * vec4(normalize(position)*camFar, 1.0);
        gl_Position = modelViewPosition;
        
        vWorldPos = modelViewPosition;
        
    }`;
	return ret;
}
// Sky Fragment Shader
export function skyObjectFrag(){
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
        float t = time.x*.6;
        
        vec2 nUv = fract( vec2(vUv.x*2.0, vUv.y - t*.01) );
        vec3 noiseCd = texture2D( noiseTexture, nUv ).rgb;
        nUv = fract( nUv+noiseCd.rg*(noiseCd.b-.5));
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
        for(int s=0; s<7; ++s){
            uvShift = mix(noiseCd.r, noiseCd.g, noiseCd.b)*15.0;
            curUV = baseUV+vec2(0.0,resUV.y*-(dist+uvShift) );
            curDepth = texture2D(envDiffuse,curUV).x ;
            curDepth = fitDepth( curDepth );
            curPerc = step( .3, (1.0-curDepth)*7.0 );
            reachDepth += min(1.0,curDepth)*curPerc;
            blend += blendStep*curPerc;
            dist+=dist*dot(noiseCd.rgb, vec3(0.0,0.0,1.0));
        }
        reachDepth *= blend*stencil;
        
        vec3 normPos = normalize(vLocalPos);
        normPos.y = 1.0-min(1.0,(normPos.y)*2.0);
        normPos.y = normPos.y*normPos.y*normPos.y;
        depth = clamp(reachDepth+normPos.y, 0.0, 1.0);
        
        vec3 baseColor = fogColor+(sin(noiseCd.r*PI+t+uv.x)*.008)*max(0.0,1.0-depth);
        baseColor = (baseColor);//+Cd.rgb*.2);
        Cd.rgb = mix(Cd.rgb, baseColor, depth);
        
        gl_FragColor=Cd;
    }`;
	return ret;
}


export function skyTextureVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec3 worldPos;
	varying vec3 pos;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		worldPos=(projectionMatrix*modelMatrix*vec4(position,1.)).xyz;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
		pos=gl_Position.xyz;
	}`;
	return ret;
}
// Sky Fragment Shader
export function skyTextureFrag(){
	let ret=shaderHeader();
	ret+=`
	uniform sampler2D diffuse;
	uniform vec2 time;
	//uniform vec2 intensity;
	uniform float rate;
    uniform float fogIntensity;
    uniform float fogDensity;
    uniform vec3 skyColor;
    uniform vec3 fogColor;
	varying vec2 vUv;
	varying vec3 worldPos;
	float pi=3.14159265358979;
    
	
	void main(){
		vec2 uv=vUv+vec2(time.x*rate,0.0);
		uv.x=mod(uv.x,1.0);
		vec4 Cd=texture2D(diffuse,uv);
		Cd.rgb=Cd.rgb*skyColor;
		Cd.rgb*=(min(1.0,worldPos.y*.0001));
		//Cd.rgb*=intensity.y;
		gl_FragColor=Cd;
        float fogMult= min(1.0, max(0.0, 1.0+worldPos.y*fogDensity));
        
              float depth = gl_FragCoord.z / gl_FragCoord.w;
              float fogFactor = smoothstep( 1000.0, 12000.0, depth )*(1.0-uv.y);
              gl_FragColor.rgb = mix( Cd.rgb, fogColor, fogFactor*fogIntensity )*fogMult;

        
	}`;
	return ret;
}



export function skyPlaneVert(){
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
export function skyPlaneFrag(){
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