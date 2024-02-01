
import {shaderHeader} from "./shaderHeader.js";

export function discardFrag(){
	let ret=shaderHeader();
	ret+=`
	void main(){
		discard;
		gl_FragColor=vec4(.0,.0,.0,0.0);
	}`;
	return ret;
}