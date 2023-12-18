
import {shaderHeader} from "../../pxlBase/gl/pxlShaders/shaderHeader.js";

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////

// Void Base Geometry

export function voidBaseVert(){
	let ret=shaderHeader();
	ret+=`
    uniform float baseCd;
    uniform vec3 light0Cd;
    uniform vec3 light0Rot;
    uniform vec3 light1Cd;
    uniform vec3 light1Rot;
    
    attribute vec3 color;
    attribute vec4 tangent;

    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vView;
    varying vec3 vL0Rot;
    varying vec3 vL1Rot;
    varying vec3 vNormal;
    varying vec4 vTangent;
    varying float vAlpha;
    
    void main(){
        vUv=uv;
        vNormal = normalize( normalMatrix *  normal );
        vL0Rot = normalize( normalMatrix *  light0Rot );
        vL1Rot = normalize( normalMatrix *  light1Rot );
        vTangent = tangent;
        vAlpha=color.r;
        
        vec3 vertCd=vec3(baseCd);
        vec3 flipN= normal*vec3(1,1,-1);
        float lDot= dot(flipN, light0Rot) ;
        vertCd += light0Cd*lDot;
        
        lDot= dot(flipN, light1Rot) ;
        vertCd += light1Cd*lDot;
        vCd=vertCd;
        
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        vView=-mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function voidBaseFrag(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D snowNormal;
    uniform float baseCd;
    uniform vec3 light0Cd;
    uniform vec3 light0Rot;
    uniform vec3 light1Cd;
    uniform vec3 light1Rot;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vView;
    varying vec3 vL0Rot;
    varying vec3 vL1Rot;
    varying vec3 vNormal;
    varying vec4 vTangent;
    varying float vAlpha;
    
    

    vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {
        vec2 normalScale = vec2(1.0,1.0);

        vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
        vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
        vec2 st0 = dFdx( vUv.st );
        vec2 st1 = dFdy( vUv.st );

        float scale = sign( st1.t * st0.s - st0.t * st1.s );

        vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
        vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
        vec3 N = normalize( surf_norm );
        mat3 tsn = mat3( S, T, N );

        vec3 mapN = texture2D( snowNormal, vUv ).xyz * 2.0 - 1.0;
        return ( tsn * mapN );
    }
    
    
    void main(){
        vec3 nCd=texture2D(snowNormal,vUv).rgb*2.0-1.0;
        vec3 norm = perturbNormal2Arb( vView, vNormal );
        
        vec3 vertCd=vec3(vCd);
        float lDot= dot(norm, vL0Rot)*.5-.1 ;
        vertCd += light0Cd*lDot;
        
        lDot= dot(norm, vL1Rot)*.5-.5 ;
        vertCd += light1Cd*lDot;

        vec4 Cd=vec4( vertCd, vAlpha );
        float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );

        gl_FragColor=Cd;
    }`;
	return ret;
}
/*
export function voidBaseVert(){
	let ret=shaderHeader();
	ret+=`
    uniform float baseCd;
    uniform vec3 light0Cd;
    uniform vec3 light0Rot;
    uniform vec3 light1Cd;
    uniform vec3 light1Rot;
    
    attribute vec3 color;

    varying vec3 vCd;
    varying float vAlpha;
    
    void main(){
        vAlpha=color.r;
        
        
        vec3 vertCd=vec3(baseCd);
        float lDot= dot(normal, light0Rot) ;
        vertCd += light0Cd*lDot;
        
        lDot= dot(normal, light1Rot) ;
        vertCd += light1Cd*lDot;
        vertCd = max(vec3(0.0), min(vec3(1.0), vertCd ));
        
        vCd=vertCd;
        
        vec4 mvPos=viewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function voidBaseFrag(){
	let ret=shaderHeader();
	ret+=`
    uniform vec3 fogColor;
    
    varying vec3 vCd;
    varying float vAlpha;
    
    void main(){
        vec4 Cd=vec4( vCd, vAlpha );

        float depth = gl_FragCoord.z / gl_FragCoord.w *.0003;
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );
        gl_FragColor=Cd;
    }`;
	return ret;
}
*/





    
    
    
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
