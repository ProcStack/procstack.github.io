
import {shaderHeader} from "../core/ShaderHeader.js";

///////////////////////////////////////////////////////////
// Geometry Shaders                                     //
/////////////////////////////////////////////////////////

export function pxlPrincipledVert(){
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
    
    ${THREE.ShaderChunk[ "common" ]}
    ${THREE.ShaderChunk[ "shadowmap_pars_vertex" ]}
    
    
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
        
        ${THREE.ShaderChunk[ "worldpos_vertex" ]}
        ${THREE.ShaderChunk[ "shadowmap_vertex" ]}
        
    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function pxlPrincipledFrag(){
  //let ret=shaderHeader();
  let ret=`
        
    uniform sampler2D noiseTexture;
    uniform sampler2D detailTexture;
        
    uniform vec2 time;
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
    
    // uniform sampler2D pointShadowMap[ 4 ];
    // varying vec4 vPointShadowCoord[ 4 ];
    // struct PointLightShadow {
      // float shadowBias;
      // float shadowNormalBias;
      // float shadowRadius;
      // vec2 shadowMapSize;
      // float shadowCameraNear;
      // float shadowCameraFar;
    // };
    // uniform PointLightShadow pointLightShadows[ 4 ];
    
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
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer*.1 ); 
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec3 vertCd= vCd ;
        vec3 lightCd = vec3(1., .3,.3) * (sin(nCd.r + nCd.g+nCd.b )*.3+1.);

        
        
        vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightVector = normalize(vPos - pointLights[i].position);
            vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[i].color;
            lightInf = mix( lightInf, 1.0-(1.0-lightInf)*(1.0-lightInf), .2);
            lightInf *=  1.0-min(1.0, length(vPos - pointLights[i].position) * pointLights[i].decay*.01 );
            lights.rgb += lightInf;
        }
        
        //vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= max(0.0, dot(directionalLights[i].direction, vN)*.65+.35) * directionalLights[i].color;
            lights.rgb += lightInf;
        }
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );
        
        Cd.rgb *= lights.rgb;
        //Cd.rgb = vShading;
        
        
        pos = vLocalPos*.1;
        uv.x = fract( pos.x + pos.z );
        uv.y = fract( pos.y ); 
        nCd=(texture2D(noiseTexture,uv).rgb-.5)*.3;
        vec2 detailUv = vec2( fract((vLocalPos.x + vLocalN.z + nCd.r*1.2)*.01), 0.0);
        detailUv.y =  fract((vLocalPos.y + nCd.y*2.)*.01);
        float detailMult = (texture2D(detailTexture,detailUv).r-.2)*3.0;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        int i = 2;
        float lShadow = getPointShadow( pointShadowMap[2], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
        shadowInf = max( lShadow, shadowInf);
        
        i=3;
        lShadow = getPointShadow( pointShadowMap[3], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
        shadowInf = max( lShadow, shadowInf);
        shadowInf = shadowInf*.85+.15;
        Cd.rgb*=shadowInf+detailMult*shadowInf;
        
        
        
        gl_FragColor=Cd;
    }`;
  return ret;
}