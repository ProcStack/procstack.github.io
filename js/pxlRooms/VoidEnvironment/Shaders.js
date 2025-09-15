
import { pxlShaders }  from "../../pxlNav.module.js";
const shaderHeader = pxlShaders.core.shaderHeader;

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////

// Void Base Geometry

export function voidBaseVert(){
	let ret=shaderHeader();
	ret+=`
    attribute vec3 color;

    varying vec3 vLocalPos;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    
    void main(){
        vUv=uv;
        vN = normal;
        vCd = color;
        
        vLocalPos = position;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function voidBaseFrag(){
	let ret=shaderHeader();
	ret+=`
        
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec3 vLocalPos;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    
    void main(){

      float toCenter = 1.0-length( vUv-.5 )*.840;
      float shift = clamp( (1.0-((1.0-vN.y)*.710)) * 1.0 , 0.0, 1.0 );
      float shiftInner = 1.0 - clamp( (toCenter-.22)*.20, 0.0, 1.0 );
      
      // High freq noise warp--
      vec4 Cd=vec4( texture2D(noiseTexture, vUv*3.1 + vec2( time.x * .01,  -time.x*.01) ).rgb * shift, vCd.r );
      // Second frequency noise warp --
      vec3 baseCd = texture2D(noiseTexture, vUv*.31 + vec2( time.x * .02,  time.x*.001) * (shift*Cd.b) - time.x*.1).rgb;
      
      vec2 nUv = vUv*2.4 + vec2( baseCd.r * 0.1779 + time.x*.1,  (-time.x*.002 + Cd.r + baseCd.x*2.) * .16 * max(baseCd.g, baseCd.b) );
      vec3 nCd = texture2D(noiseTexture, nUv).rgb;
      
      
      float cdScalar = clamp( ( length(min(Cd.rgb,nCd-.61)) - 0.2) * 3.274, 0.0,1.0) * shiftInner  ;

      // -- -- --
      
      Cd.rgb = min( vec3( clamp( max(Cd.z, (Cd.r)*shift )+.5, 0.0, 1. ) ), (1.0-nCd*.2) );
      Cd.rgb = min( Cd.rgb, length(baseCd)*.3+(1.-shift*.4) );
      
      
      // -- -- --
      
      float depth = gl_FragCoord.z / gl_FragCoord.w *.0003;
      Cd.rgb=  mix( Cd.rgb, fogColor, depth );
      
      cdScalar = ( cdScalar * shift )  * cdScalar;
      Cd.a =   Cd.a + cdScalar  * Cd.a;
      Cd.a =  clamp( (Cd.a*Cd.a)*1.5, 0.0, 1.0);
      

      gl_FragColor=Cd;
    }`;
	return ret;
}




