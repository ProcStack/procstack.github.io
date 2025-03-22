import { ShaderChunk } from "../../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


// -- -- -- -- -- -- -- -- -- -- -- //



export function instPlantsVert(settings={}){
  const defaultSettings = {
    'shadows': false, // Set to true to enable shadow mapping
  };
  settings = Object.assign({}, defaultSettings, settings);
  let ret=shaderHeader();
  ret=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    
    attribute vec3 color;

    
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
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
    
        vec4 pos = vec4( position, 1.0 );
        
        // Main Settings
        vUv=uv;
        vCd=color;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelMatrix * vec4(normal, 0.0)).xyz;
        
        // -- -- --

        // For three shadowing --
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
        // -- -- --

        vec4 noiseMaskPos = pos*.3;
        vec3 nSeed = vec3( 1.0, 1.0, 1.0 );
        #ifdef USE_INSTANCING
          noiseMaskPos = instanceMatrix * noiseMaskPos;
          nSeed = instanceMatrix[3].xyz;
          vLocalN = (instanceMatrix * vec4(vLocalN, 0.0)).xyz;
        #endif

        // Running texture reads first
        float timer = (-time.x*.005);
        vec2 waveUv = vec2( (nSeed.x+nSeed.z)*.001, nSeed.y*.001  + timer);
        vec3 nCd = texture2D(noiseTexture,waveUv).rgb;

        waveUv = vec2( nSeed.x*.01+noiseMaskPos.x*.0005, nSeed.z+nSeed.y*.01 - timer);
        vec3 nMaskCd = texture2D(noiseTexture,waveUv).rgb;
        
        // -- -- --
    
        
        // -- -- --

        // Local Wind Sway
        vec3 offset = (nCd-.5) * 1.5 ;

        
        // -- -- --

        // Mask Wind with Noise Peaks
        //   This visually looks like wind gusts in clusters moving through the scene
        float nMask = max(nMaskCd.x, max(nMaskCd.y, nMaskCd.z) );
        nMask = clamp( nMask*2.3-.2, 0.0, 1.0 );
        
        // -- -- --

        // Add offset position in Model Space, pre-instance positioning
        pos.xyz += offset * nMask * color.y;
        
        // -- -- --
        
        // Shift position to Instance position-
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        // Global Wind
        pos.z += max(offset.x, max(offset.y, offset.z)) * nMask;
        
        // -- -- --

        // -- -- -- -- -- -- --
        // -- Position Out - -- --
        // -- -- -- -- -- -- -- -- --
        
        vPos = pos.xyz;
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vCamPos = gl_Position.xyz;
        
        // -- -- --

    }`;
  return ret;
}



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --



export function instPlantsFrag( settings={} ){

  let defaults = {
    'buildAlpha' : false,
    'addShimmer' : false,
    'addCampfire' : false,
    'depthScalar' : .0001,
    'fogDepthScalar' : .05,
    'shadows': false, // Set to true to enable shadow mapping
  }
  let shaderSettings = Object.assign( defaults, settings );

  let ret=`
  // Plants surface settings --
    const float DepthScalar = ${shaderSettings.depthScalar};
    const float ScreenWarpColorFix = 3.521;
    const float ShadowTighten = 2.94;
    const float ShadowFlickerRate = 0.25;
    const float FogDepthMult = ${shaderSettings.fogDepthScalar};
  `;
  if( shaderSettings.addShimmer ){
    ret+=`
  // Shimmer Settings --
  //   Mid-to-long distance ambient movement in grass + foliage
    const float ShimmerInf = 0.40;
    const float ShimmerBrightness = .4;
    const float ShimmerStartMul = 42.0;
    const float ShimmerStartRolloff = 1.30;
    const float ShimmerEndMult = 4.5;
    const float ShimmerEndRolloff = 1.30;
    `;
  }
  ret +=`
  // -- -- --
  `;
  ret += shaderHeader();
  ret +=`
  // -- -- --
  
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform vec3 fogColor;

    uniform sampler2D diffuse;
  `;
  if( shaderSettings.buildAlpha ){
    ret+=`
    uniform sampler2D alphaMap;
    `;
  }
  ret+=`
    uniform sampler2D cloudTexture;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    
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
    
    
    // -- -- --
    
    // Human Eye Adjusted Luminance
    //   https://en.wikipedia.org/wiki/Grayscale
    float luma(vec3 color) {
      return dot( color, vec3(0.2126, 0.7152, 0.0722) );
    }
      
      
    // -- -- --
      
    
    void main(){
    
        vec4 Cd = texture2D(diffuse,vUv);
        `;
        if( shaderSettings.buildAlpha ){
          ret+=`
          float Alpha = texture2D(alphaMap,vUv).r;

          if( Alpha < .5 ){
            discard;
          }
          `;
        }
        ret+=`
        
        // -- -- --

        // -- -- -- -- -- -- -- -- --
        // -- Depth Calculations - -- --
        // -- -- -- -- -- -- -- -- -- -- --
        
        float screenSpaceX = abs((vCamPos.x / vCamPos.z))*.45;
        float depth = min(1.0, max(0.0, gl_FragCoord.z / gl_FragCoord.w * DepthScalar )) * step( .930, gl_FragCoord.z );
        depth = depth + ( screenSpaceX * screenSpaceX )*min( 1.0, depth * ScreenWarpColorFix );
        depth = pow( depth, 1.0-depth);
        
        float depthFade = clamp( 1.1-depth*1.4, 0.0, 1.0);
        depthFade *= depthFade*depthFade;
        
        `;
    if( shaderSettings.addShimmer ){
      ret+=`

        float gInf = min( 1.0, max( 0.0, 1.0-depth * ShimmerEndMult ) * ShimmerEndRolloff );
        float shimmerInf = ( 1.0 - min(1.0, max( 0.0, 1.0-depth * ShimmerStartMul * ShimmerBrightness ) * ShimmerStartRolloff )) * gInf;
        
        float timer = time.x*(1.85+vCd.x*1.1) + .2*(vCd.y) + vPos.z*.01*vCd.y*vCd.z;
        
        float vertlightInf = (sin(vCd.x+timer*(1.0+vCd.y*.001))*.4*ShimmerInf+(1.00-ShimmerInf*.2))  * min( 1.0, vCd.x*ShadowTighten );
        vertlightInf = min(1.0, (ShimmerInf) - (1.0-vertlightInf) );
        `;
    }else{
      ret+=`
        float gInf = min( 1.0, max( 0.0, 1.0-depth ) * 2.0 ) ;
        float vertlightInf = vCd.x * min( 1.0, vCd.x*ShadowTighten );
      `;
    }

      ret+=`
        
        // -- -- --
        
    `;
    if( shaderSettings.addCampfire ){
      ret+=`
        // -- -- -- -- -- -- -- -- -- -- -- -- --
        // -- Animated Radial Campfire Flicker -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        // Animated Noise UVs of the campefire flicker on the ground
        timer = (-time.x*.015);
        vec2 animWarpUV = (vUv-.5)*.5;
        animWarpUV += animWarpUV*min(1.0,length(vPos)*.0005);
        animWarpUV = vec2(.45,  length(animWarpUV)*.01 - timer );
        vec3 animWarpCd = texture2D(noiseTexture,animWarpUV).rgb *  min(1.0, depthFade*depthFade*1.3 ) + max(0.0, 0.5-depthFade)*.15;

        animWarpUV = ( vec2( vPos.xz*.01 + vec2(.235,.39) * time.x * ShadowFlickerRate ) );
        vec3 nCd = texture2D(cloudTexture,animWarpUV).rgb ;

        // -- -- --

      `;
    }
    ret+=`
        // -- -- -- -- -- -- -- -- -- -- 
        // -- Point Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
        float lightMag = 0.0;
      #if NUM_POINT_LIGHTS > 0
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightDelta = (vPos - pointLights[i].position);
            vec3 lightVector = normalize(lightDelta);
            
            // Calculate distance attenuation
            float lightDistFit = max( 1.0, length(lightDelta) / pointLights[i].distance ) * .48;
            float attenuation = 1.0 / (1.0 + pointLights[i].decay * lightDistFit * lightDistFit);
            
            // Calculate light intensity
            float lightDist = max(0.0, (  1. - lightDistFit )) * attenuation;
            
            // Not really helping with current DoubleSided defaults--
            //  float lightNormDot = abs(dot(-lightVector, vLocalN));
            //  lights += pointLights[i].color * lightNormDot * lightDist;

            lights += pointLights[i].color * lightDist;
        }
        Cd.rgb *=  min(vec3(1.0),lights);
        lightMag = length( lights );
      #endif
        

        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --

        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vPos;
          lights = vec3(0.0, 0.0, 0.0);

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
          
            float rDot = dot(directionalLights[x].direction, vLocalN );
            float cdLength = length(directionalLights[x].color);
            //cdLength *= cdLength;
            rDot = 1.0 - ( (1.0-rDot) * cdLength * .23017 );
            
            vec3 lightInf= min( directionalLights[x].color, (max(0.0, rDot) * directionalLights[x].color));
            lights += lightInf * vertlightInf;
            
          }
          // Add a fake bump map to the lighting
          lights = lights*min(1.0, 1.0-(vCd.x*vCd.z)-depth);
          lightMag = length(lights);

          Cd.rgb += Cd.rgb*lights;
          //  
        #endif
        
      `;
      if( settings.shadows ) {
        ret+=`
        // -- -- -- -- -- -- -- -- --
        // -- Shadow Influence  -- -- --
        // -- -- -- -- -- -- -- -- -- -- --
        float shadowInf = 0.0;

        #if NUM_POINT_LIGHT_SHADOWS > 0
          
          float detailInf = 0.0;
          float lShadow = 0.0;
  
          float shadowMix = length(vPos)*.1;
          
          float shadowMixFit = max(0.0,min(1.0, shadowMix*shadowMix*.03)*1.5-.45);
          float shadowRadius = max(0.0,min(1.0, 1.0-shadowMixFit*1.5));
          
          float biasShift;
          for( int x = 0; x < NUM_POINT_LIGHT_SHADOWS; ++x ){
            biasShift =  nCd.x*0.5 + nCd.y*nCd.z *.4 + .1;
            biasShift = pointLightShadows[x].shadowRadius * ( nCd.x*nCd.y* biasShift +.5*max(nCd.x,nCd.y) );
            biasShift += shadowMixFit*5.0;
            lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[x].shadowMapSize, pointLightShadows[x].shadowIntensity * shadowRadius, pointLightShadows[x].shadowBias+shadowMixFit*.3, biasShift, vPointShadowCoord[x], pointLightShadows[x].shadowCameraNear, pointLightShadows[x].shadowCameraFar );
            shadowInf = max( lShadow, shadowInf);
          }
          shadowInf = shadowInf*.875+.125;
          Cd.rgb *= shadowInf;
        #endif
          `;
        }else{
          ret+=`
          float shadowInf = 1.0;
          `;
        }
        ret += `

        // -- -- -- -- -- -- -- -- --
        // -- Match Scene Tone  -- -- --
        // -- -- -- -- -- -- -- -- -- -- --

        float gCd = luma( Cd.rgb );
    `;
    if( shaderSettings.addShimmer ){
      ret+=`
        float shadowShimmer = mix( 1.0, gInf*2.0, shadowInf );
        Cd.rgb = Cd.rgb * intensity * (vCd.z*.15*(1.0-(gCd* shadowShimmer ))-depth*1.1+.45) * (vCd.x*depthFade + 0.9-gCd*depthFade);
      `;
    }else{
      ret+=`
        //Cd.rgb = Cd.rgb * (1.0+vCd.r*depth);
        Cd.rgb = Cd.rgb * intensity * (vCd.z*.25*(1.0-gCd)-depth*.1+.45) * (vCd.x*depthFade + 1.0-gCd*depthFade);
      `;
    }
    if( shaderSettings.addShimmer ){
    ret+=`
        Cd.rgb = mix( Cd.rgb, vec3( gCd*1.85 ), depth*.85 );
      `;
    }
    if( shaderSettings.addCampfire ){
      ret+=`
      
        // -- -- --

        // Add Campfire Flicker
        Cd.rgb += Cd.rgb * (animWarpCd.r*2.5+.15) * clamp( 1. - min(1.0, length( vPos )*0.015)*1.5, 0.0, 1.0 ) * shadowInf ;

        // -- -- --

      `;
    }
    ret+=`
        float fogMix =  clamp( depth * (depth*2.2501)  - lightMag*(1.0-depth * FogDepthMult), 0.0, 0.9 ) ;
        
        vec3 toFogColor = fogColor * (gCd*.4 + .7 + gInf*.3);
        Cd.rgb=  mix( Cd.rgb, toFogColor, fogMix );
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}

