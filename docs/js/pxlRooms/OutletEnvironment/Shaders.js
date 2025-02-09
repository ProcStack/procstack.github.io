
import { ShaderChunk } from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

import { envGroundVert, envGroundFrag } from "./Shaders/envGroundShaders.js";
import { waterWayVert, waterWayFrag } from "./Shaders/waterWay.js";
import { instPlantsVert, instPlantsFrag } from "./Shaders/instPlants.js";
import { creekWaterVert, creekWaterFrag } from "./Shaders/creekWater.js";
//import { woodenDockVert, woodenDockFrag } from "./Shaders/woodenDock.js";

export { envGroundVert, envGroundFrag, waterWayVert, waterWayFrag, instPlantsVert, instPlantsFrag, creekWaterVert, creekWaterFrag };


// -- -- -- -- -- -- -- -- -- -- -- //


export function woodenDockVert(){
	let ret=shaderHeader();
	ret+=`
    attribute vec3 color;

    varying vec3 vPos;  
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    varying vec3 vTangent;
    varying vec3 vBitangent;
    varying float vAlpha;
    
    void main(){
        vUv=uv;
        vN = normalize( normalMatrix * normal );
        vTangent = normalize( normalMatrix * vec3( 1.0, 0.0, 0.0 ) );
        vBitangent = normalize( normalMatrix * vec3( 0.0, 1.0, 0.0 ) );

        vAlpha=color.r;
        
        vCd=color;
        
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        vPos = mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;


    }`;
	return ret;
}

export function woodenDockFrag(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D normalMap;
    uniform vec3 fogColor;
    
    struct PointLight {
      vec3 color;
      float decay;
      float distance;
      vec3 position;
    };
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

  #if NUM_POINT_LIGHTS > 0
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
  #endif
  #if NUM_DIR_LIGHTS > 0
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
  #endif

    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "lightmap_pars_fragment" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/

    varying vec3 vPos;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    varying vec3 vTangent;
    varying vec3 vBitangent;
    varying float vAlpha;
    

    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "packing" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/

    void main(){
      vec3 nCd=normalize( texture2D( normalMap,vUv ).rgb * 2.0 - 1.0 );
      vec3 Cd= texture2D( diffuse,vUv ).rgb * vCd;
      
      mat3 tbnMatrix = mat3( vTangent, vBitangent, vN );
      
      // -- -- --

      float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00035 ) * step( .930, gl_FragCoord.z );
      depth = pow( depth, 1.5+depth);
      float depthFade = max(0.0, 1.0-depth);
      depthFade *= depthFade*depthFade;

      // -- -- --
      
      vec3 normal = normalize( tbnMatrix * vN );
      Cd.rgb = Cd.rgb * (Cd.rgb*.3+.1); 
      
      // -- -- --
      
      vec3 lights = vec3(0.0, 0.0, 0.0);
        
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;
      int i = 0;
      float dp=0.0;
      float shadowRadius=0.0;
      
    #if NUM_DIR_LIGHTS > 0
      lights = vec3(0.0, 0.0, 0.0);
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          vec3 lightInf= directionalLights[i].color * dot(directionalLights[i].direction, normal );
          lights += lightInf;
      }

      Cd.rgb += lights* min(vec3(1.0),(Cd.rgb)) ;
    #endif
      
      float fogMix = clamp( depth - length( lights )*(1.0-depth*1.5), 0.0, 1.0 );
      Cd.rgb =  mix( Cd.rgb, fogColor, fogMix );

      // -- -- --
      
      vec4 outCd = vec4( Cd, 1.0 );
      gl_FragColor = outCd;
    }`;
	return ret;
}