
import {shaderHeader} from "./shaderHeader.js";

export function lKingPostProcess(){
	// Frag; Composer Shader Pass
	let retFrag=shaderHeader();
	retFrag+=`
		uniform sampler2D tDiffuse;
		uniform sampler2D noiseTexture;
		uniform vec2 time;
		uniform vec2 ratio;
		varying vec2 vUv;

        #define PI 3.14159265358979
        
		void main() {
			vec4 Cd=texture2D( tDiffuse, vUv )*.2;
			vec4 noiseCd= (texture2D( noiseTexture, vec2( fract(vUv.x*.2-time.x*.02+sin(time.x*.1+vUv.y*PI+Cd.r+Cd.g)),fract( vUv.y*.2+time.x*.01+cos(-time.x*.2+1.15+vUv.x*PI+Cd.g+Cd.b)) ) )-.5)*.025;
			
			vec2 bUv=vUv+noiseCd.rg;
			vec2 rUv=vUv+noiseCd.gb;
			vec2 gUv=vUv+noiseCd.br;
			vec4 rCd=texture2D( tDiffuse, rUv );
			vec4 gCd=texture2D( tDiffuse, gUv );
			vec4 bCd=texture2D( tDiffuse, bUv );
			
			Cd.rgb=vec3( rCd.r, gCd.g, bCd.b );
			Cd.a=1.0;
			gl_FragColor = Cd;
		}`;
	
	return retFrag;
}

export function sFieldPostProcessVert(){
	// Frag; Composer Shader Pass
	let retFrag=shaderHeader();
	retFrag+=`
    uniform vec2 time;
    varying vec2 vUv;
    varying vec2 vUvShift;
    varying vec2 starUv;
    varying float vTimer;

    void main(){
        vUv=uv;
        vUvShift=uv-.5;
        
        vec2 rUv=vUvShift*0.7071067811865476;
        vec2 tmpUv=rUv;
        float rot=time.x*.1;
        vec2 sinCos=vec2( sin(rot), cos(rot) );
        rUv.x=sinCos.x*tmpUv.x + sinCos.y*tmpUv.y;
        rUv.y=sinCos.y*tmpUv.x - sinCos.x*tmpUv.y;
        rUv=(rUv+.5);
        
        float starTimer=sin(time.x*.2)*.1+.1;
        starUv=mix( vUv, rUv, starTimer);
        
        vTimer=time.x*.5;
        
        vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*modelViewPosition;
    }`;
	
	return retFrag;
}
export function sFieldPostProcessFrag(){
	// Frag; Composer Shader Pass
	let retFrag=shaderHeader();
	retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D starTexture;
        varying vec2 vUv;
        varying vec2 vUvShift;
        varying vec2 starUv;
        varying float vTimer;

        #define PI 3.14159265358979
        
        void main() {
            float uvDist=length(vUvShift);
            
            vec3 starCd=texture2D( starTexture, starUv ).rgb*uvDist;
            
            float blender=uvDist*starCd.b * abs((fract(starCd.b*PI+vTimer))*2.0-1.0)*.5;
            vec2 starBlendUV=starCd.rg*blender;
            
            vec2 cdUv = vUv+starBlendUV;
            vec4 Cd=texture2D( tDiffuse, cdUv );
            
            vec3 negCd= mix( Cd.brg, Cd.gbr, length(Cd.rgb-Cd.rgb) );
            float cdBlender=step(.015,starBlendUV.x*uvDist)+starCd.b;
            Cd.rgb= mix( Cd.rgb, negCd, cdBlender );
            
            gl_FragColor = Cd;
        }`;
	
	return retFrag;
}


export function textureStorePass(){
	// Frag; Composer Shader Pass
	let retFrag=shaderHeader();
	retFrag+=`
		uniform sampler2D tDiffuse;
		uniform sampler2D tDiffusePrev;
		uniform sampler2D tDiffusePrevRoom;
		uniform float roomComposer;
		varying vec2 vUv;
        
		void main() {
			vec4 Cd=texture2D( tDiffusePrev, vUv );
            Cd.rgb=mix( Cd.rgb, texture2D( tDiffusePrevRoom, vUv ).rgb, roomComposer);
            Cd.rgb=Cd.rgb + texture2D( tDiffusePrevRoom, vUv ).rgb;
            Cd.a=1.0;
			gl_FragColor = Cd;
		}`;
	
	return retFrag;
}


export function iZoomPostProcess(){
	// Frag; Composer Shader Pass
	let retFrag=shaderHeader();
	retFrag+=`
		uniform sampler2D tDiffuse;
		uniform sampler2D tDiffusePrev;
		uniform sampler2D noiseTexture;
		uniform vec2 time;
		uniform vec2 ratio;
		varying vec2 vUv;

        #define PI 3.14159265358979
        
		void main() {
			vec4 Cd=texture2D( tDiffuse, vUv );
            vec4 pCd=texture2D( tDiffusePrev, vUv );
            vec3 dCd=Cd.rgb-pCd.rgb;
            vec3 b1Cd= texture2D( tDiffuse, vUv-vec2( dCd.rg*.1 ) ).rgb;
            vec3 b2Cd= texture2D( tDiffusePrev, vUv+vec2( dCd.rg*.1 ) ).rgb;
            b1Cd=mix( b1Cd, b2Cd, step( length(b1Cd), length(b2Cd) ) );
            
            vec4 outCd=vec4(1.0);
            outCd.rgb= mix(  Cd.rgb, b1Cd, length(dCd) );
            
			vec3 noiseCd=texture2D( noiseTexture, fract( vUv*50.0+dCd.rg*.1 + length(Cd.rgb*30.0) + time.x) ).rgb;

            outCd.rgb= mix( vec3(length(outCd.rgb)*.333-length(noiseCd)*.1), outCd.rgb, min(1.0,length(dCd))*.5+.5 );
            outCd.rgb+= dCd.gbr;
            
            
            
			outCd.a=1.0;
			gl_FragColor = outCd;
		}`;
	
	return retFrag;
}

