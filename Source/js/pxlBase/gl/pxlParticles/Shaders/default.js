
import {shaderHeader} from "../../pxlShaders/shaderHeader.js";

///////////////////////////////////////////////////////////
// Geometry Shaders                                     //
/////////////////////////////////////////////////////////

export function defaultVert(){
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

export function defaultShiftVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec2 vUv;
    varying vec2 vUvShift;
	void main(){
		vUv=uv;
        vUvShift=uv-.5;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}`;
	return ret;
}

export function camPosVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec3 camPos;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
		camPos=(modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
	}`;
	return ret;
}

export function discardFrag(){
	let ret=shaderHeader();
	ret+=`
	void main(){
		discard;
		gl_FragColor=vec4(.0,.0,.0,0.0);
	}`;
	return ret;
}