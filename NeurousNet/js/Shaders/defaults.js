
///////////////////////////////////////////////////////////
// Header and Quality Information                       //
/////////////////////////////////////////////////////////

// Header data for all shaders
// WebGL2 should use WebGL ES 300
function shaderHeader( setGL300=true ){
  let ret = '';
  if( setGL300 ){
    ret=`#version 300 es`;
  }
	ret += `
  
		#ifdef GL_FRAGMENT_PRECISION_HIGH
			precision highp float;
		#else
			precision mediump float;
		#endif
    `;
	return ret;
}


///////////////////////////////////////////////////////////
// Geometry Shaders                                     //
/////////////////////////////////////////////////////////

function vert(){
	let ret=shaderHeader();
	ret+=`
	varying vec2 vUv;
	void main(){
		vUv = uv;
		vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}`;
	return ret;
}

function shiftVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec2 vUv;
  varying vec2 vUvShift;
  
	void main(){
		vUv = uv;
    vUvShift = uv-.5;
		vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}`;
	return ret;
}

function camPosVert(){
	let ret=shaderHeader();
	ret+=`
	varying vec3 camPos;
	varying vec2 vUv;
  
	void main(){
		vUv=uv;
		vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
		camPos = (modelViewMatrix*vec4(0.0,0.0,1.0,1.0)).xyz;
	}`;
	return ret;
}

export function frag(){ // ## set gl common variables to defines
	let ret=shaderHeader();
	ret+=`
	varying vec2 vUv;
  
  out vec4 outCd;
  
	void main(){
		vec4 Cd = vec4( 0.5, 0.5, 0.0, 1.0 );
		outCd = Cd;
	}`;
	return ret;
}

const Defaults={ shaderHeader, vert, shiftVert, camPosVert, frag }
export default Defaults