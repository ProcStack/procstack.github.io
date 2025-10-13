
import Defaults from "./defaults.js" ;


///////////////////////////////////////////////////////////
// Point Trail Shaders                                  //
/////////////////////////////////////////////////////////


var TrailRenderVert = ()=>{
	let ret=Defaults.shaderHeader(false);
	ret+=`
    varying vec3 vPosition;

    void main() {
      vPosition = position;
      gl_PointSize = 1.0;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`;
	return ret;
}
var TrailRenderFrag = ()=>{
	let ret=Defaults.shaderHeader(false);
	ret+=`
    varying vec3 vPosition;

    void main() {
      float depth = smoothstep( 10.24, 1.0, gl_FragCoord.z / gl_FragCoord.w );
      gl_FragColor = vec4( (vec3(0.0, 0.03, 0.05) + (vPosition * 0.25)), depth );
    }`;
	return ret;
}


///////////////////////////////////////////////////////////
// Point Trail Transfer Buffer Shaders                  //
/////////////////////////////////////////////////////////

var TrailVertProg = ()=>{
	let ret=Defaults.shaderHeader();
	ret+=`
    uniform vec2 time;
    uniform float pointScale;
    
    in vec4 pos;
    in vec4 vel;
    in float vScalar;
    
    #define PROX 1000.0
    #define LAND 50.0
    
    out vec4 outPos;
    out vec4 outVel;
    
    void main(){
        gl_PointSize = 1.0;
        
        outPos = pos + vel;
        outVel = vel + vec4( normalize(-pos.xyz), 0.0);
    }`;
	return ret;
}

var TrailFragProg = ()=>{
	let ret=Defaults.shaderHeader();
	ret+=`
    uniform vec2 time;
    
    out vec4 fragColor;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = uv-.5;

        float alpha= 1.0;
        vec4 Cd=vec4( pos, 0.0, alpha );

        fragColor=Cd;
    }`;
	return ret;
}

const PointShaders_Trail = { TrailRenderVert, TrailRenderFrag, TrailVertProg, TrailFragProg }
export default PointShaders_Trail