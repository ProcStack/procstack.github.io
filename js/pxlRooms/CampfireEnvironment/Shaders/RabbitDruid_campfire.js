
import { ShaderChunk } from "../../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

///////////////////////////////////////////////////////////
// Rabbit Druit Shaders                                 //
/////////////////////////////////////////////////////////


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
    ${ShaderChunk[ "skinning_pars_vertex" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( cross( cross( normal, vec3(.0, 1.0, .0) ), vec3(.0, 1.0, .0) ) );
      objectTangent = normalize( objectTangent );
      
      
      vec3 blendPos = color.rgb;
      transformed = mix( transformed, blendPos, eyeBlink.x );
      
      
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
      ${ShaderChunk[ "skinbase_vertex" ]}
      ${ShaderChunk[ "skinnormal_vertex" ]}
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
      
      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      
      }`;
      return ret;
    }
    
    
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


export function rabbitDruidFrag(){
  let ret=shaderHeader();
  ret +=`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    uniform vec2 lightScalar;
    
    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vTan;
    
    varying float vFlicker;
    
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
    
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      outCd = diffCd;
      
      
      vec2 animUv = vUv*.005;
      animUv.y -= time.x*.05;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //

      float lightContrib = 1.0-clamp( dot( vN, normalize( vPos ))*1.5, 0.0, 1.0 );
      float lMag = 0.0;
  
      vec3 lights = vec3(0.0, 0.0, 0.0);
      int x=0;
    #if NUM_POINT_LIGHTS > 0
      for( x=0; x < NUM_POINT_LIGHTS; ++x ) {
          vec3 lightVector = normalize( pointLights[x].position - vPos) + vec3( -0.50, .10, -0.50 ) ;
          //vec3 refTan = vec3( (dot( normalize(lightVector)- nCd.xyz, vN )*.5+.5) * (dot(normalize(pointLights[x].position), vN)*.5+.5) );
          vec3 refTan = reflect( normalize(lightVector) - nCd.xyz*.3, vTan );
          //refTan = normalize( refTan + vec3(-.10, -max(nCd.x,nCd.y)*.3 , -.10) );
          
          vec3 lightInf=  clamp( (dot(refTan, vN )+.15)*(1.65+areCd.g*.7)+.5, 0.0, 1.0) * pointLights[x].color;
          lights += lightInf * lightContrib;
      }
      outCd.rgb *= lights*.8+.2;

      // CampFire Light Magnitude; Ambient Light Mask
      lMag = min(1.0, max(0.0,length( lights )-.3)*.35 + max(0.0,-vN.y));
      
    #endif
      
      
    #if NUM_DIR_LIGHTS > 0
      lights = vec3(0.0, 0.0, 0.0);
      for( x=0; x < NUM_DIR_LIGHTS; ++x ) {
          vec3 lightInf=  max(0.0, dot(directionalLights[x].direction, vN  )) * directionalLights[x].color ;
          lights += lightInf ;
      }
      outCd.rgb = mix(outCd.rgb, outCd.rgb+vec3(1.0, .75, .75) * (outCd.rgb*.5) * lights, lMag );
      outCd.rgb += lights * areCd.g * lightScalar.x;
    #endif

      
      // Add some ambient color to the back rim of the object
      float d = clamp( dot( normalize(vec3(2.80, 1.2, -1.20)), vTan )*1.+.15, 0.0, 1.0) * lightContrib * (1.0-lMag*.5);
      // Blend light contribution areas with dot product of back facing normals; masked by light agregation
      outCd.rgb += vec3(.0, .10, .60) * d  ;
  

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}


