// Campfire Ground Shader
//   Written by Kevin Edzenga; 2025
// -- -- -- -- -- -- -- -- -- -- -- --
//
// This was adapted from The Outlet environment's ground shader.
//   This is going to be converted to a more generic shader for the pxlNav package.
// Provide a R, G, & B data texture to blend between 6 textures.
//   Each channel is split up to-
//    Red, ~0.25-0.5  - Dark Dirt
//    Red, 0.5-1.0  - Rocky Hill
//    Green, ~0.25-0.5 - Moss
//    Green, 0.5-1.0 - Grass
//    Blue, 0.0-1.0 - "Wet" land
//    RGB of 0.0 - Diffuse texture + Noise
//
// To be fully converted to RGB -> 6 textures for pxlNav soon

import { ShaderChunk } from "../../../libs/three/three.module.min.js";

import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


export function envGroundVert(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);

  let ret=shaderHeader();
  if( settings.shadows ) {
    ret += `
    // -- -- -- -- -- -- -- --
    // -- Three.js imports  -- --
    // -- -- -- -- -- -- -- -- -- --
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "shadowmap_pars_vertex" ]}
    // -- -- -- -- -- -- -- -- -- --
    // -- End Three.js - -- -- --
    // -- -- -- -- -- -- -- --
    `;
  }
  ret += `
    
    attribute vec3 color;

    varying vec3 vCd;
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying float vUpFit;
    varying float vRockyMask;
    varying float vFarMask;
    varying float vPitMask;
    varying float vInnerPitMask;
    
    void main(){
        vCd = color;
        vUv = uv;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;

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

        vLocalPos = (modelMatrix * vec4(transformed,1.0)).xyz;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        float pLen = length(transformed.xyz + vec3(2.369, .0, -0.1274) );
        vRockyMask = clamp( (0.985-normal.y)*20.0, 0.0, 1.0);
        vRockyMask = clamp( (vRockyMask * (1.0-normal.y)*10.0 - .3)*5.0, 0.0, 1.0);
        vFarMask = 1.0 - min(1.0, max(0.0, 1.0-pLen*.0065 )*1.7 );

        vPitMask = ( max(0.0, 1.0-pLen*.02 )*1.35 );
        vInnerPitMask = max(0.0, 1.0 - ( max(0.0, 1.0-pLen*.225 )*1.35 )*2.);
        vPitMask *= vPitMask;


    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
    'shadowReach': 0.3, // How far the shadows reach from the light source
  };
  settings = Object.assign({}, defaultSettings, settings);

  let ret=`
  // Ground settings --
    const float ShadowFlickerRate = 0.250;
  
  // -- -- --

  `;
  ret += shaderHeader();
  ret+=`
  
  // -- -- --
  
    uniform sampler2D diffuse;
    uniform sampler2D dirtDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
        
    uniform sampler2D crackedDirtDiffuse;
    uniform sampler2D hillDiffuse;
    uniform sampler2D mossDiffuse;
    uniform sampler2D grassDiffuse;
    uniform sampler2D dataDiffuse;

    
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


    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec3 vCd;
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vShading;
    varying float vUpFit;
    varying float vRockyMask;
    varying float vFarMask;
    varying float vPitMask;
    varying float vInnerPitMask;
    
    
    #if NUM_POINT_LIGHTS > 0
      struct PointLight {
        vec3 color;
        float decay;
        float distance;
        vec3 position;
      };
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif

    #if NUM_DIR_LIGHTS > 0
      struct DirLight {
        vec3 color;
        vec3 direction;
      };
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
        
    // Campfire ground glow colors
    const vec3 firePitColor = vec3( .80, .50, .30);
    const vec3 fireGlowColor = vec3( .80, .50, .30);
    
    void main(){
        // Get base colors early to allow for memory reads before the data is required below
        
        // Dirt Base Color
        vec4 Cd = texture2D(diffuse,vUv) ;
        vec3 dataCd = texture2D(dataDiffuse,vUv).rgb ;
        
        vec3 pos = vLocalPos*.0001;
        vec2 uv = vUv;
        
        // -- -- --
        
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .002 );
        depth *= depth*.5+.5;
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        //Ease patch noise, dirt / path / woods / grass
        
        pos = vLocalPos*.03;
        uv.x = ( pos.x );
        uv.y = ( pos.z ); 
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- -- -- -- --
        // -- Animated Radial Campfire Flicker -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        // Animated Noise UVs of the campefire flicker on the ground
        float timer = (time.x*.02);
        vec2 animWarpUV = vUv-.5;
        animWarpUV = vec2(.45,  length(animWarpUV)*.04 - timer );
        vec3 animWarpCd = texture2D(uniformNoise,animWarpUV).rgb*depthFade;
        
        animWarpUV = ( vec2( vLocalPos.xz*.01 + vec2(.235,.39) * time.x * ShadowFlickerRate ) );
        vec3 animNoiseCd = texture2D(noiseTexture,animWarpUV).rgb ;

        // -- -- --
        
        // -- -- -- -- -- -- -- -- 
        // -- UV & Color Noise  -- --
        // -- -- -- -- -- -- -- -- -- --
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb);
        vec3 animCd=(texture2D(noiseTexture,uv).rgb);
        
        // -- -- --
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*nCd.b*.2));
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        float baseDirtNoise = dirtNoise;
        dirtNoise = dirtNoise*.7+.3;
        
        
        // Set campfire pit mask and distance hill masking
        float campfireMask = (vCd.r * vPitMask);
        float campfireMaskInv = 1.0 - campfireMask;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- --
        // -- World Space Texturing - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        // World Space Texture UVs;  Disrupt uniformity by adding model-space normal.xz
        //   Helps curvature disrupt noticable tiling
        // Masking the fire pit since there is too much variation in normals
        
        vec2 subUv = ( pos.xz*2.5  );
        
        // Read world-uv'ed textures
        vec3 crackDirtCd = texture2D(crackedDirtDiffuse,subUv).rgb ;
        vec3 mossCd = texture2D(mossDiffuse,subUv).rgb ;
        vec3 grassCd = texture2D(grassDiffuse,subUv).rgb ;
        
        // Shift the rocky hill texture so it reads it more horizontally
        vec2 hillLayerUv = fract( vec2( subUv.x, subUv.y + vLocalPos.y*.1*campfireMaskInv ) );
        vec3 rockyHillCd = texture2D(hillDiffuse,hillLayerUv).rgb ;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- --
        // -- Dirt Color Mixing -- --
        // -- -- -- -- -- -- -- -- -- --
        
        // Dark Dirt Patch Color
        vec2 dirtUv = fract(pos.xz*.9);
        dirtNoise = min(1.0, texture2D(uniformNoise,dirtUv).r*.3+.7);
        
        dirtUv = fract(pos.xz*.2);
        vec3 dirtCd = texture2D(dirtDiffuse,dirtUv).rgb;
        
        dirtCd *= detailMult*(1.0-depth) + depth*.65;
        
        // Dirt Region Blending
        vec2 unUv = uv*2.10;
        float uniNoise = texture2D(uniformNoise,unUv).r*depthFade;
        vec2 cnUv = pos.xz*.015 - .176 + vec2(pos.y*.01+uniNoise*.01, pos.y*.15);
        float cNoise = texture2D(uniformNoise,cnUv).r;
        cNoise = cNoise*(cNoise+(uniNoise-.5)*.5);
        
        dirtCd = mix( dirtCd, crackDirtCd, cNoise );
        
        // -- -- --

        // -- -- -- -- -- -- -- -- --
        // -- Texture Color Mixing -- --
        // -- -- -- -- -- -- -- -- -- -- --
        
        // Mix base Dirt color --
        Cd.rgb = mix( dirtCd, Cd.rgb*dirtNoise, cNoise );
        
        // Add moss
        float mossMix = dataCd.g;
        float mossGrassMix = max(0.0,mossMix*mossMix-mossMix*.35);
        vec3 mossGrassCd = mix( mossCd, grassCd, mossGrassMix ) * (depthFade*depthFade * 0.6 + 0.2);
        Cd.rgb = mix( Cd.rgb, mossGrassCd, mossMix);
        
        // Add rocky hill sides, reduce region around campfire, remove pit itself
        float rockMask = dataCd.r * vRockyMask *campfireMaskInv * (1.0-vPitMask);
        Cd.rgb = mix( Cd.rgb, rockyHillCd, rockMask);
        
        // Darken the center pit
        //   Gotta add that ash!
        float ashMask = 1.0 - clamp( min(1.0,vCd.r*1.1)*vPitMask*.92, 0.0, .85 );
        Cd.rgb = mix(  Cd.rrr*.4 + Cd.rgb*(.5+dirtNoise*.5), Cd.rgb, ashMask );
        
        // -- -- --

        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
      #if NUM_DIR_LIGHTS > 0
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            int shadowIndex = i;
            vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction, reflect( normalize(vPos), vN ) ))*.65) * directionalLights[shadowIndex].color;
            lights += lightInf*.4;
        }
        // Add a fake bump map to the lighting
        lights = lights*baseDirtNoise;
        //
        Cd.rgb += Cd.rgb*lights;
      #endif
        
        // -- -- --

        
      `;
      if( settings.shadows ) {
        ret+=`
        float shadowInf = 0.0;
      #if NUM_POINT_LIGHT_SHADOWS > 0
        
        float detailInf = 0.0;
        float lShadow = 0.0;

        float shadowMix = length(vPos)*.1;
        
        float shadowMixFit = max(0.0,min(1.0, shadowMix*shadowMix*.04)*1.4-.4);
        float shadowRadius = max(0.0, 1.0-shadowMixFit * ${settings.shadowReach});
        
        float biasShift;
        for( int x = 0; x < NUM_POINT_LIGHT_SHADOWS; ++x ) {
            biasShift =  animNoiseCd.x + animNoiseCd.y*animNoiseCd.z + .2;
            biasShift = pointLightShadows[x].shadowRadius * ( animNoiseCd.x*animNoiseCd.y* biasShift + max(animNoiseCd.x,animNoiseCd.y) );
            biasShift += shadowMixFit*5.0;
            lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[x].shadowMapSize, pointLightShadows[x].shadowIntensity * shadowRadius, pointLightShadows[x].shadowBias+shadowMixFit*.3, biasShift, vPointShadowCoord[x], pointLightShadows[x].shadowCameraNear, pointLightShadows[x].shadowCameraFar );
            shadowInf = max( lShadow, shadowInf);
        }
        shadowInf = shadowInf*.875+.125;
        Cd.rgb *= shadowInf;
      #endif
        `;
      }else{
        ret += `
        float shadowInf = 1.0;
        `;
      }
      ret += `


        // -- -- --
                
        // -- -- -- -- -- -- -- --
        // -- Firepit Flicker - -- --
        // -- -- -- -- -- -- -- -- -- --

        float animWarpFit = max( animWarpCd.r, max(animWarpCd.g,animWarpCd.b) )*.8 -.2;

        // Main Pit
        Cd.rgb += (firePitColor + firePitColor*animWarpFit) * (campfireMask*1.1-.1) * vInnerPitMask * .5 * ashMask * shadowInf;

        // Region around Pit and Druid Rabbit
        Cd.rgb += (fireGlowColor + fireGlowColor*animWarpFit) * vPitMask * vPitMask * .35 * ashMask * shadowInf;



        // -- -- -- -- -- -- -- -- -- -- -- --
        // -- Final shading and fog color - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --

        float shade = clamp(dot(vN, reflect( normalize(vPos), vN )) + depthFade, 0.0, 1.0 );
        shade = max( lights.r, shade * (1.0 - (vFarMask*.1+max(0.0,depth-.1))) );
        shade +=  length( lights ) ;
        shade *= dataCd.b*.35+.65*vInnerPitMask;
        shade = max( 0.0, shade-dataCd.r*(dataCd.r) * vPitMask );
        Cd.rgb=  mix( Cd.rgb*shade, fogColor, depth );
        
        gl_FragColor=Cd;
    }`;
  return ret;
}
