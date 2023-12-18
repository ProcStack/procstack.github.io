
import {shaderHeader} from "./shaderHeader.js";

///////////////////////////////////////////////////////////
// Background Render Plate Shaders                      //
/////////////////////////////////////////////////////////

export function bgScreenVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}`;
	return ret;
}

export function bgScreenFrag(){
	let ret=shaderHeader();
	ret+=`
	void main(){
		discard;
		gl_FragColor=vec4(.0,.0,.0,0.0);
	}`;
	return ret;
}