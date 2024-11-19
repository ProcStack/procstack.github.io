
//import {shaderHeader} from "../core/ShaderHeader.js";
import * as THREE from "../../../libs/three/three.module.js";

///////////////////////////////////////////////////////////
// Geometry Shaders                                     //
/////////////////////////////////////////////////////////



// -- -- -- -- -- -- -- -- -- -- -- -- --
// -- pxlNav Principled Shader - -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

export function pxlPrincipledVert(shadows=false){
  //let ret=shaderHeader();
  let ret=`
    attribute vec3 color;
    attribute vec3 shading;

    varying float vFlicker;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    `;
    if( shadows ){
      ret += `
        ${THREE.ShaderChunk[ "common" ]}
        ${THREE.ShaderChunk[ "shadowmap_pars_vertex" ]}
      `;
    }
    ret += `
    
    void main(){
        vUv=uv;
        
        vShading=shading;
        
        vCd=color;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        `;
        if( shadows ){
          ret += `
            ${THREE.ShaderChunk[ "worldpos_vertex" ]}
            ${THREE.ShaderChunk[ "shadowmap_vertex" ]}
          `;
        }
        ret += `
    }`;
  return ret;
}


// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function pxlPrincipledFrag( ShaderParms, useColor, useFog, lights, shadows, pointLightCount ){
  
  let hasSpecular = false;
  let specularMult = 1.0;
  if( ShaderParms.hasOwnProperty("Specular") &&  ShaderParms.Specular > 0 ){ // Float
    hasSpecular = true;
    specularMult = ShaderParms.Specular;
  }
  
  let hasVertColor = false;
  if( ShaderParms.PointColor ){ // Boolean
    hasVertColor=true;
  }
  
  let hasSurfaceNoise = true;
  let surfaceNoiseMult = "1.0";
  if( ShaderParms.hasOwnProperty("SurfaceNoise") ){
    if( ShaderParms.SurfaceNoise%1 == 0 ){ // Boolean
      surfaceNoiseMult = ShaderParms.SurfaceNoise+".0";
    }
    if(surfaceNoiseMult=="0.0"){
      hasSurfaceNoise=false;
    }
  }
  
  
  //let ret=shaderHeader();
  let ret=`
        `;
    if(!useColor){
      ret+=`uniform sampler2D dTexture;`;
    }
    ret+=`
    
    uniform sampler2D noiseTexture;
    uniform sampler2D detailTexture;
        
    uniform vec2 time;
    uniform float cdMult;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    
    varying float vFlicker;
    
    #define PI 3.14159265358979
    
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
    `;
    if(lights){
      ret+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `;
    }
    if(shadows){
      ret+=`
      
      ${THREE.ShaderChunk[ "packing" ]}
      
      #if NUM_POINT_LIGHT_SHADOWS > 0
          uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
          varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
          struct PointLightShadow {
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
      float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
           dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
              vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
              return (
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
                  texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
              ) * ( .11111111111 ) * (1.0-dp);
          #else
              return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) * (1.0-dp);
          #endif
      }
    
      vec3 directionToLight( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar  ){
          vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
          vec3 lightToPosition = shadowCoord.xyz;
          float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );
          dp += shadowBias;
          vec3 bd3D = normalize( lightToPosition );
          vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
          return texture2D( pointShadowMap[1], cubeToUV( bd3D, texelSize.y )).rgb;
      }
      `;
    }
        
    ret+=`
    void main(){
      `;
        if(hasVertColor){
            ret+=`vec3 vertCd = vCd;`;
        }else{
          if(useColor){
            
            let toFloatStr = ( v )=>{
              if( v%1 == 0 ){
                return v+".0";
              }else{
                return v+"";
              }
            };
            
            let r= toFloatStr(useColor.r);
            let g= toFloatStr(useColor.g);
            let b= toFloatStr(useColor.b);
            ret+=`vec3 vertCd = vec3( ${r}, ${g}, ${b} ) ;`;
          }else{
            ret+=`vec3 vertCd = texture2D(dTexture,vUv).rgb ;`
          }
        }
        ret+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `;
        if( useFog ){
          ret+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `;
        }
        
        let surfaceNoiseBaseStr = "";
        let surfaceNoiseStr = "";
        let surfaceNoiseNoShadowStr = "";
        if(hasSurfaceNoise){
            if(surfaceNoiseMult!="1.0"){
              surfaceNoiseBaseStr = "*"+surfaceNoiseMult;
            }
            ret+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `;
            surfaceNoiseStr= `+detailMult * (shadowInf*.5+.5) ${surfaceNoiseBaseStr}`;
            surfaceNoiseNoShadowStr= `(detailMult+.5) ${surfaceNoiseBaseStr}`;
        }
        
        if(lights){
          ret+=`
          #if NUM_POINT_LIGHTS > 0 || NUM_DIR_LIGHTS > 0
            vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
          #endif
          
          #if NUM_POINT_LIGHTS > 0
            for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
                vec3 lightVector = normalize(vPos - pointLights[i].position);
                vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[i].color;
                //lightInf = mix( lightInf, 1.0-(1.0-lightInf)*(1.0-lightInf), .2);
                float distFalloff =  1.0-min(1.0, length(vPos - pointLights[i].position) * pointLights[i].decay*.008 );
                lightInf *=  distFalloff;
                lights.rgb += lightInf;
                `;
                if( hasSpecular ){
                  ret+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `;
                }
                ret+=`
            }
          #endif
            
          #if NUM_DIR_LIGHTS > 0
            for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
                vec3 lightInf= max(0.0, dot(directionalLights[i].direction, vN)*.65+.35) * directionalLights[i].color;
                lights.rgb += lightInf;
            }
          #endif
            
            
          #if NUM_POINT_LIGHTS > 0 || NUM_DIR_LIGHTS > 0
            Cd.rgb *= lights.rgb;
          #endif
          `;
          if( hasSpecular ){
            ret+=`
            Cd.rgb += vertCd * specular * ${specularMult};
            `;
          }
        }
        
        
        if(shadows){
          ret+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;
            
            for( let x=0; x<pointLightCount; ++x){
                ret+=`
                i=${x};
                lShadow = getPointShadow( pointShadowMap[${x}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;
            }
            ret+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${surfaceNoiseStr} ;
            `;
            if(hasSurfaceNoise){
              ret+=`
              #else
                Cd.rgb*=${surfaceNoiseNoShadowStr};
              `;
            }
            ret+=`
          #endif
          `;
        }else{
          if(hasSurfaceNoise){
            ret+=`
            Cd.rgb*=${surfaceNoiseNoShadowStr};
            `;
          }
        }
        ret+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`;
  return ret;
}
