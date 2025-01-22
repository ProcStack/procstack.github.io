
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

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
        vNormal = normalize( normalMatrix * normal );
        vL0Rot = normalize( normalMatrix * light0Rot );
        vL1Rot = normalize( normalMatrix * light1Rot );
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
        float lDot= dot(norm, vL1Rot)*.5+.3 ;

        vec4 Cd=vec4( vec3(lDot), vAlpha );
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



