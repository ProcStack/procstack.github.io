
import {shaderHeader} from "../../js/pxlNav/shaders/core/ShaderHeader.js";
import * as THREE from "../../js/libs/three/three.module.js";

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////


export function envGroundVert(){
  let ret=shaderHeader();
  ret+=`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${THREE.ShaderChunk[ "common" ]}
    
    void main(){
        vUv=uv;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        ${THREE.ShaderChunk[ "worldpos_vertex" ]}
        
    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag(){
  let ret=shaderHeader();
  ret+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
    uniform sampler2D crossNoise;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    
    #define PI 3.1415926535897932384626
    
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        vec4 Cd = texture2D(diffuse,vUv);
        Cd.a=1.0;
        gl_FragColor=Cd;
    }`;
  return ret;
}


// -- -- -- -- -- -- -- -- -- -- -- //
