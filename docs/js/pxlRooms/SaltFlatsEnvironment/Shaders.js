
import {
  ShaderChunk
} from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
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
        float timer = time.x*.01;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .0035 );
        float depthFade = max(0.0, min(1.0, 1.1-depth ));
        depthFade *= depthFade*depthFade;
        
        float crystalGlow = max(0.0,vCd.b-.25);
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        vec2 nUv = fract( vec2( (pos.x*2.+pos.z*1.5 +  + timer*crystalGlow )*(1.0+ vCd.g*2.5) , pos.y*vCd.g ) );
        float nCd = texture2D(noiseTexture,nUv).r;
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
            vec3 lightInf= ( max(0.0, dot(normalize(directionalLights[x].direction+nCd*.65), reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
            lights += lightInf;
          }
          
          lights = lights*(((1.0-vCd.g-vCd.r)*.5+.5)+ .5);
        #endif
        
        lights = mix( vec3(0.0), lights, max( 0.0, nCd*vCd.g*.75 + vCd.r*.5 ) );
        
        // Add blue lighting around some of the crystals
        lights += vec3( 0.4038, 0.643, 0.779 ) * (crystalGlow * nCd  );
        
        Cd.rgb += Cd.rgb * lights * (depthFade*.5+.5) ;
        
        gl_FragColor=Cd;
    }`;
  return ret;
}


// -- -- -- -- -- -- -- -- -- -- -- //




export function salioaPlantVert(){
  let ret=shaderHeader();
  ret+=`
    #define USE_INSTANCING

    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vAlphaAdd;
    
    void main(){
        vUv=uv;
        vCd=color.rgb;
        
        vAlphaAdd = max(0.0, position.y);
        vAlphaAdd = min(1.0, vAlphaAdd*vAlphaAdd*.014 + max(0.0,1.0-vAlphaAdd*1.3 ) );
        vCd.g = 1.0-vCd.g;
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN =  normal;

        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
          vN = (modelViewMatrix * instanceMatrix * vec4(normal, 0.0)).xyz;
          vLocalN = ( instanceMatrix * vec4(normal, 0.0)).xyz;
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
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D cloudTexture;
        
    uniform vec2 time;
    uniform vec3 fogColor;
     
    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vAlphaAdd;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    void main(){
        float timer = time.x*.01;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .0035 );
        float depthFade = max(0.0, min(1.0, 1.1-depth ));
        depthFade *= depthFade*depthFade;
        
        float crystalGlow = max(0.0,vCd.b*vCd.b-.05);
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        vec2 nUv = fract( vec2( (pos.x*2.+pos.z*1.5 + timer*crystalGlow )*(1.0+ vCd.g*2.5) , pos.y*vCd.g ) );
        float nCd = texture2D(noiseTexture,nUv).r;
        
        vec2 cnUv = fract( vec2( (pos.x*2.+pos.z*5.5 + fract(vCd.b-timer) )*(1.0+ vCd.g*2.5), pos.y*vCd.g ) );
        vec2 cnMixUv =  vec2( fract(pos.x*.1) , fract(pos.z*.15)+.1 *nCd*2.2  );
        float cnCrystal = clamp( crystalGlow*crystalGlow*2.0,0.0,1.0);
        cnUv = mix( cnMixUv, cnUv,  cnCrystal );
        vec3 cnCd = texture2D(noiseTexture,cnUv).rgb;
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
            vec3 lightInf= ( max(0.0, dot(normalize(directionalLights[x].direction+nCd*.65), reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
            lights += lightInf;
          }
          
          lights = lights*(((1.0-vCd.g-vCd.r)*.5+.5)+ .5);
        #endif
        
        lights = mix( vec3(0.0), lights, max( 0.0, nCd*vCd.g*.75 + vCd.r*.5 ) );
        
        // Add blue lighting around some of the crystals
        lights += vec3( 0.3038, 0.3643, 0.679 ) * (crystalGlow * nCd  );
        
        
        Cd.rgb = vec3( 0.4545, 0.8138, 1.0 ) * cnCrystal * vAlphaAdd;
        
        Cd.rgb += vec3(0.3122, .3683,.4011) * ( min(.8, (nCd) * (1.0+cnCrystal*cnCd.g) )+0.75);
        Cd.rgb += Cd.rgb * lights * (depthFade*.5+.5) ;
        
        
        float alpha = abs(dot( normalize(-vWorldPos), vLocalN ))*.35 * (cnCd.x * cnCd.y * cnCd.z+.5) ;
        Cd.a=abs(.5-min(1.0,vCd.x*vN.z))+.5;
        alpha = clamp( alpha*cnCd.x + vAlphaAdd, 0.0, 0.5 )+.5;
        Cd.a = clamp( Cd.a*alpha + .2, 0.0, 1.0 );
        
        gl_FragColor=Cd;
    }`;
  return ret;
}