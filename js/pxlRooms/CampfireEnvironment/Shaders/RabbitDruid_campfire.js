
import { ShaderChunk } from "../../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

///////////////////////////////////////////////////////////
// Rabbit Druit Shaders                                 //
/////////////////////////////////////////////////////////


export function rabbitDruidVert(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);

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
  `;  
  if( settings.shadows ) {
    ret += `
    ${ShaderChunk[ "shadowmap_pars_vertex" ]}
    `;
  }
  ret += `
    
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 transformedNormal = objectNormal;
      vec3 objectTangent = vec3( cross( cross( normal, vec3(.0, 1.0, .0) ), vec3(.0, 1.0, .0) ) );
      objectTangent = normalize( objectTangent );
      
      
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
      
      `;
      if( settings.shadows ) {
        ret += `
          // -- -- -- -- -- -- -- --
          // -- Three.js imports  -- --
          // -- -- -- -- -- -- -- -- -- --
          ${ShaderChunk[ "worldpos_vertex" ]}
          ${ShaderChunk[ "shadowmap_vertex" ]}
          // -- -- -- -- -- -- -- -- -- --
          // -- End Three.js - -- -- --
          // -- -- -- -- -- -- -- --
        `;
      }
      ret += `
      
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


export function rabbitDruidFrag(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);

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
    

    `;
    if( settings.shadows ) {
      ret += `
    // -- -- -- -- -- -- -- --
    // -- Three.js imports  -- --
    // -- -- -- -- -- -- -- -- -- --
    // -- Shadow modified from Three.js --
    
        ${ShaderChunk[ "packing" ]}
        
    #if NUM_POINT_LIGHT_SHADOWS > 0
      uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
      varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
      struct PointLightShadow {
        float shadowIntensity;
        float shadowBias;
        float shadowNormalBias;
        float shadowRadius;
        vec2 shadowMapSize;
        float shadowCameraNear;
        float shadowCameraFar;
      };
      uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
    #endif
    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
    }
    vec2 cubeToUV( vec3 v, float texelSizeY ) {
      vec3 absV = abs( v );
      float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
      absV *= scaleToCube;
      v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
      vec2 planar = v.xy;
      float almostATexel = 1.5 * texelSizeY;
      float almostOne = 1.0 - almostATexel;
      if ( absV.z >= almostOne ) {
        if ( v.z > 0.0 )
          planar.x = 4.0 - v.x;
      } else if ( absV.x >= almostOne ) {
        float signX = sign( v.x );
        planar.x = v.z * signX + 2.0 * signX;
      } else if ( absV.y >= almostOne ) {
        float signY = sign( v.y );
        planar.x = v.x + 2.0 * signY + 2.0;
        planar.y = v.z * signY - 2.0;
      }
      return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
    }
    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
      vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
      vec3 lightToPosition = shadowCoord.xyz;
      float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
        dp += shadowBias;
      vec3 bd3D = normalize( lightToPosition );
      #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
        vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
        return mix( 1.0, (
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
          texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
        ) * .11111111111 * (1.0-dp), shadowIntensity );
      #else
        return mix( 1.0, texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) * (1.0-dp), shadowIntensity );
      #endif
    }
    // -- -- -- -- -- -- -- -- -- --
    // -- End Three.js - -- -- --
    // -- -- -- -- -- -- -- --
      `;
    }
    ret += `



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
      vec3 reflectNorm = reflect( normalize(vPos), vN );
      float lightContrib = 1.0-clamp( dot( reflectNorm, vTan)*.5, 0.0, 1.0 );
      float lMag = 0.0;
  
      vec3 lights = vec3(0.0, 0.0, 0.0);
      int x=0;
    #if NUM_POINT_LIGHTS > 0
      for( x=0; x < NUM_POINT_LIGHTS; ++x ) {
          vec3 lightVector = normalize( pointLights[x].position - vPos) + vec3( -0.50, .10, -0.50 ) ;
          vec3 refTan = reflect( normalize(lightVector) - nCd.xyz*.3, vTan );
          
          vec3 lightInf=  clamp( (dot(refTan, vN )+.15)*(1.65+areCd.g*.7)+.5, 0.0, 1.0) * pointLights[x].color;
          lights += lightInf * lightContrib;
      }
      outCd.rgb *= lights;

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

    `;
    if( settings.shadows ) {
      ret+=`
    #if NUM_POINT_LIGHT_SHADOWS > 0
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;

      int i = 0;
      for( i = 0; i < NUM_POINT_LIGHT_SHADOWS; ++i ) {
          lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowIntensity, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
          shadowInf = max( lShadow, shadowInf);
      }
      shadowInf = shadowInf*.875+.125;
      outCd.rgb *= shadowInf;
    #endif
      `;
    }
    ret += `
      
      // Add some ambient color to the back rim of the object
      float d = clamp( dot( normalize(vec3(2.80, 1.2, -1.20)), vTan )*1.+.15, 0.0, 1.0) * lightContrib * (1.0-lMag*.5);
      // Blend light contribution areas with dot product of back facing normals; masked by light agregation
      outCd.rgb += vec3(.0, .10, .60) * d  ;
  

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}


