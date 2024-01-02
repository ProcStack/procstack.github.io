
import {shaderHeader} from "../../pxlBase/gl/pxlShaders/shaderHeader.js";
import * as THREE from "../../../libs/three/build/three.module.js";

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
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



// -- -- -- -- -- -- -- -- -- -- -- //


export function envGroundVert(){
	//let ret=shaderHeader();
	let ret=`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${THREE.ShaderChunk[ "common" ]}
    ${THREE.ShaderChunk[ "shadowmap_pars_vertex" ]}
    
    
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
        ${THREE.ShaderChunk[ "shadowmap_vertex" ]}
        
    }`;
	return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag(){
	//let ret=shaderHeader();
	let ret=`
        
    uniform sampler2D diffuse;
    uniform sampler2D dirtDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
    uniform sampler2D crossNoise;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    
    #define PI 3.1415926535897932384626
    
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
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
        
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        //Ease patch noise, dirt / path / woods / grass
        
        pos = vLocalPos*.03;
        uv.x = ( pos.x );
        uv.y = ( pos.z ); 
        
        // UV & Color Noise
        vec3 nCd=(texture2D(noiseTexture,uv).rgb);
        uv = ( uv.yx+nCd.rg*.1 );
        nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*nCd.b*.2));
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        float baseDirtNoise = dirtNoise;
        dirtNoise = dirtNoise*.7+.3;
        
        
        // Dirt Base Color
        vec2 dirtUv = vUv;
        vec4 Cd = texture2D(diffuse,dirtUv) ;
        Cd.rgb *= dirtNoise;
        
        // Dirt Patch Color
        dirtUv = fract(pos.xz);//vUv*20.0);
        dirtNoise = min(1.0, texture2D(uniformNoise,dirtUv).r*.3+.7);
        dirtUv = fract(pos.xz*.1);
        vec3 dirtCd = texture2D(dirtDiffuse,dirtUv).rgb;
        //dirtCd += dirtNoise*.05;
        dirtCd *= detailMult*(1.0-depth) + depth*.65;
        
        
        // Region Blending
        vec2 unUv = uv;
        float uniNoise = texture2D(uniformNoise,unUv).r*depthFade;
        vec2 cnUv = pos.xz*.05;
        float cNoise = texture2D(crossNoise,cnUv).r;
        cNoise = cNoise*cNoise;
        cNoise = mix( cNoise*cNoise, 1.0-(1.0-cNoise)*(1.0-cNoise), cNoise );
        
        Cd.rgb = mix( dirtCd, Cd.rgb, cNoise );
        
        
        vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        #pragma unroll_loop_start
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightVector = normalize(vPos - pointLights[i].position);
            vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[i].color;
            lightInf *=  1.0-min(1.0, length(vPos - pointLights[i].position) * pointLights[i].decay*.006 );
            lights.rgb += lightInf;
        }
				#pragma unroll_loop_end
        Cd.rgb *= lights.rgb*.8+.2;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        
        #pragma unroll_loop_start
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            lShadow = getPointShadow( pointShadowMap[i], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
            shadowInf = max( lShadow, shadowInf);
        }
				#pragma unroll_loop_end
        
        Cd.rgb*=(shadowInf*.7+.3);
        
        pos = vPos;
        #pragma unroll_loop_start
        lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, reflect( normalize(pos), vN ) ))*.65) * directionalLights[i].color;
            lights.rgb += lightInf*.3;
        }
				#pragma unroll_loop_end
        Cd.rgb += lights.rgb*baseDirtNoise;
        
        float shade = clamp(dot(vN, reflect( normalize(vPos), vN ))+depthFade, 0.0, 1.0 );
        Cd.rgb=  mix( Cd.rgb*shade, fogColor, depth );
        
        gl_FragColor=Cd;
    }`;
	return ret;
}



// -- -- -- -- -- -- -- -- -- -- -- //






export function dustVert( lightCount ){
	let ret=shaderHeader();
	ret+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    uniform vec3[${lightCount}] lightPos;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX 120.0
    #define LAND 10.0
    
    #define LIGHT_COUNT ${lightCount}
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        float t=time.x*rate;
        
        vec3 pOff=seeds.xyz * vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.x);
        //pOff.y+=cameraPosition.y; 
        pOff.x+=-time.x; 
        vec3 pos= pOff ;
        
        vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*.1)*.5+.5 ).rgb-.5;
        
        pos.y = (pos.y-.1)*.45;
        pos.y+=sin(seeds.x+seeds.z+noiseCd.r*noiseCd.g+noiseCd.b+time.x*.2)*2.;//+noiseCd.r*noiseCd.g*noiseCd.b*20.;

        pos.xz+=(noiseCd.rg*noiseCd.b)*seeds.w*10.;
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        
        float lightInf = 1.0;
        for(int i = 0; i < LIGHT_COUNT; i++) {
            vec3 lightVector = normalize(pos - lightPos[i]);
            lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
        }
        vAlpha*=(1.0-lightInf)*.8+.2;


        vScalar = pScalar ;
        float pScale = pointScale * seeds.w * pScalar + 1.0;
        pScale = ( atlas.x>.5 ? pScale : 10.0 );
        
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function dustFrag(){
	let ret=shaderHeader();
	ret+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha; // *vScalar;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
	return ret;
}
    
    
    

// -- -- -- -- -- -- -- -- -- -- -- //






export function smokeVert(){
	let ret=shaderHeader();
	ret+=`
		uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    
    #define PROX 6.0
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) ;
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float t=time.x*rate;
        float shiftY= mod( t+t*seeds.x+seeds.z*24.0+noiseCd.r+noiseCd.b+(seeds.x+seeds.y)*2.0, 14.0);
        float life = max(0.0,(shiftY-seeds.x)*0.07142857142857142)*.8+.1;
        life = 1.0-(1.0-life)*(1.0-life);
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y*.1)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.b)*seeds.w*10.*(life*seeds.zy);
        
        float pScalar = 1.0-min( 1.0, (length(pos-cameraPosition )*0.004) );
        pScalar=1.0-(pScalar*pScalar);
        float aMult = min(1.0, pScalar*2.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        vAlpha=(1.0-life)*min(1.0,life*3.0);
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.5+vec2(seeds.y,pos.y)).rgb ;
        pos.xz=(pos.xz*seeds.xy+doubleCd.rb*20.0)*min(1.0,life+seeds.y);
        
        pScalar = 1.0-(1.0-pScalar)*.7*(1.0-pScalar);
        vScalar = pScalar ;
        float pScale = pointScale * seeds.w * 0.0005 * pScalar + (200.0+125.0*life*pScalar)*(1.0-pScalar);
        pScale += 150.0*(clamp(-(pScalar-.45)*10.0,0.0,1.0));

        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function smokeFrag(){
	let ret=shaderHeader();
	ret+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha; // *vScalar;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
	return ret;
}
    
    
    


export function emberWispsVert(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX 60.0
    #define LAND 10.0
    
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) * vec3(PROX);
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float t=time.x*rate;
        float shiftY= mod( t+t*seeds.x+seeds.z*8.0+noiseCd.r+noiseCd.b+(seeds.x+seeds.y)*4.0, 8.0);
        float life = 1.0-max(0.0,abs(shiftY*.5-seeds.x)*seeds.z);
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y*.1)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.b)*seeds.w*10.*(life*seeds.zy);
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        vAlpha=life;
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.3+vec2(0.0,pos.y)).rgb*2.0 ;
        pos.xz+=doubleCd.rb;
        
        
        vScalar = pScalar ;
        float pScale = pointScale * seeds.w * pScalar + 2.0;
        
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
	return ret;
}

export function emberWispsFrag(){
	let ret=shaderHeader();
	ret+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha; // *vScalar;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
	return ret;
}
    
    
    
// -- -- -- -- -- -- -- -- -- -- --







    
    
export function campfireLogVert(){
	//let ret=shaderHeader();
	let ret=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying float vFlicker;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    
    
    void main(){
        vUv=uv;
        
        vCd=color;
        
        vLocalN = normal;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec3 pos = position;
        
        vec4 mvPos=modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        vPos = mvPos.xyz;
        vPosW = position.xyz;
        
    }`;
	return ret;
}

export function campfireLogFrag(){
	//let ret=shaderHeader();
	let ret=`
    
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D baseTexture;
    uniform sampler2D midEmberTexture;
    uniform sampler2D heavyEmberTexture;
    uniform sampler2D dataTexture;
    uniform sampler2D noiseTexture;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vCam;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    varying float vFlicker;
    
    #define PI 3.14159265358979
    
    void main(){
        float timer = time.x*.01;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer*.1 ); 
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec3 vertCd=vCd + nCd;
        
        vec4 Cd=vec4( vertCd, 1.0 );
        
        
        gl_FragColor=Cd;
    }`;
	return ret;
}














// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
    
    
export function forceFieldVert(){
	//let ret=shaderHeader();
	let ret=`
    uniform vec2 time;
    uniform float baseCd;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying float vFlicker;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    
    
    void main(){
        vUv=uv;
        
        vec3 vertCd=vec3(baseCd);
        vCd=color;
        
        vLocalN = normal;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec3 pos = position;
        pos += normal*length(nCd);
        
        vec4 mvPos=modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        vPos = mvPos.xyz;
        vPosW = position.xyz;
        
    }`;
	return ret;
}

export function forceFieldFrag(){
	//let ret=shaderHeader();
	let ret=`
    
    uniform sampler2D noiseTexture;
        
    uniform vec2 time;
    uniform float baseCd;
    
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vCam;
    varying vec3 vPosW;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
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
      float distance;
    };
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    void main(){
        float timer = time.x*.01;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer*.1 ); 
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec3 vertCd=vCd + nCd;
        
        vec4 Cd=vec4( vertCd, 1.0 );
        
        
        pos=vPosW*.01;
        timer*=2.0;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer*.1 ); 
        vec3 warpNoise=(texture2D(noiseTexture,fract(uv+nCd.rg*1.0)).rgb)-.2;
        float edgeNoise = dot( normalize( cameraPosition - vPosW + warpNoise*30.0  ), normalize(vLocalN+warpNoise.bgr) );
        float outerEdge =  max(0.0, 1.0-max(0.0, edgeNoise*2.));
        edgeNoise= (1.0-max(0.0, edgeNoise*1.5)) - outerEdge;
        Cd.a = edgeNoise ;
        
        float dist = length( cameraPosition - vPos);
        dist = (1.0-min(1.0, dist*.003));
        dist = 1.0 - (1.0-dist)*(1.0-dist);
        Cd.a *= dist*warpNoise.g;
        
        gl_FragColor=Cd;
    }`;
	return ret;
}

