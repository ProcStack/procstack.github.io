// Just a tweak from the main CampfireEnvironment rabbitDruid shader
//   I added more of a blue tint to appear like sky reflections
// I need to implement a shared asset + shader tweak system for animation assets

import {
  ShaderChunk
} from "three";
import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;


export function rabbitDruidVert(){
  let ret=shaderHeader();
  ret+=`
    
    #define USE_TANGENT
    #define USE_ENVMAP
    #define USE_SKINNING

    uniform vec2 eyeBlink;

    attribute vec4 color;

    #ifdef USE_TANGENT
      attribute vec4 tangent;
    #endif


    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    varying vec3 vObjN;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    //-- -- --//
    ${ShaderChunk[ "morphtarget_pars_vertex" ]}
    //-- -- --//
    ${ShaderChunk[ "skinning_pars_vertex" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( tangent.xyz );
      vec3 transformedNormal = objectNormal;
      
      
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
      ${ShaderChunk[ "morphnormal_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "morphtarget_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinbase_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinnormal_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinning_vertex" ]}
      /*********************************/
      /** End of THREE Shader Includes **/
      /*********************************/
      
      // TODO : Pullrequest this to Three.js
      objectNormal = normalize(objectNormal);
      objectTangent = normalize( objectTangent );
      
      
      vTan =  objectTangent;
      vN =  objectNormal;
      vPos = transformed;
      
      vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
      vLocalPos = transformed;
      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      
      
      
      }`;
      return ret;
    }
    
    
    export function rabbitDruidFrag(){
      //let ret=shaderHeader();
      let ret=`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    
    varying float vFlicker;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };
     
  #if NUM_DIR_LIGHTS > 0
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
  #endif
    
        
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      outCd = diffCd;
      
      
      vec2 animUv = vUv*.01;
      animUv.y -= time.x*.1;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //

      vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
      

      
      //outCd.rgb*=shadowInf;
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      
    #if NUM_DIR_LIGHTS > 0
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refNorm = reflect(  normalize(vPos),  vN );
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction,  refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb );
      outCd.rgb = mix(outCd.rgb, outCd.rgb+(outCd.rgb*.55)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;
    #endif
      
      // Add some ambient color to the back rim of the object
      float d = dot( normalize(vec3(0.250, 1.0, 0.50)), -vN )*.5+.35;
      outCd.rgb = mix( outCd.rgb, vec3(.05, .18, .35), d);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}