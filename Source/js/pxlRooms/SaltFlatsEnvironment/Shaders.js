
import {
  ShaderChunk
} from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.js";
const shaderHeader = pxlShaders.core.shaderHeader;

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
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
      vec3 objectTangent = vec3( tangent.xyz );
      vec3 transformedNormal = objectNormal;
      
      
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
     
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    
        
    
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
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refNorm = reflect(  normalize(vPos),  vN );
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction,  refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb );
      outCd.rgb = mix(outCd.rgb, outCd.rgb+(outCd.rgb*.55)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;

      
      // Add some ambient color to the back rim of the object
      float d = dot( normalize(vec3(0.250, 1.0, 0.50)), -vN )*.5+.35;
      outCd.rgb = mix( outCd.rgb, vec3(.05, .18, .35), d);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}






// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --



export function envGroundVert(){
  let ret=shaderHeader();
  ret+=`
    #define USE_INSTANCING

    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    void main(){
        vUv=uv;
        vCd=color.rgb;
        vCd.g = 1.0-vCd.g;
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;

        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vPos = position;
        
    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag(){
  let ret=shaderHeader();
  ret+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vCd;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0
          vec2 nUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lightNoise = texture2D(noiseTexture,nUv).r;

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
        #endif
        
        
        Cd.rgb += Cd.rgb*lights;

        Cd.a=1.0;
        gl_FragColor=Cd;
    }`;
  return ret;
}


// -- -- -- -- -- -- -- -- -- -- -- //




export function salioaPlantVert(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vToCam;
    
    void main(){
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        
        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        vPos = pos.xyz;

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vWorldPos = gl_Position.xyz;
    }`;
  return ret;
}

export function salioaPlantFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;

    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vToCam;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    
    void main(){
        vec4 Cd = vec4( 0.4982, 0.65104, 0.69153, 1.0 );
        Cd.rgb *= vCd;
        
        float d = dot( vN, normalize( vWorldPos ) );
        Cd.rgb*=vec3(d*.2+.8);
        
        Cd.a=1.0-min(1.0,length(vCd)*.2 - (d*0.2-0.1));
        
        float time = -time.x*.2;
        vec2 nUv = fract( vec2( (vUv.x + vPos.x+vPos.z + time )* (1.0+vCd.y*2.5) , vUv.y + vPos.z + time ) );
        vec3 nCd = texture2D(noiseTexture,nUv).rgb;
        
        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vWorldPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lnCd = texture2D(noiseTexture,lnUv).r;
          float lightNoise = lnCd;

          vec3 lights = vec3(0.0, 0.0, 0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
          Cd.rgb += Cd.rgb*lights;
          Cd.a = min(1.0, Cd.a+length(lights)*0.5);
        #endif
        
        Cd.rgb += Cd.rgb*nCd*.5;
        Cd.a*= clamp( Cd.a * (2.0-min(nCd.r,min(nCd.g,nCd.b))), 0.0, 1.0 );
        
        
                        
        gl_FragColor=Cd;
    }`;
  return ret;
}