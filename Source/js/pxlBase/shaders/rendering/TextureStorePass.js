// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/shaderHeader.js";
 
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

