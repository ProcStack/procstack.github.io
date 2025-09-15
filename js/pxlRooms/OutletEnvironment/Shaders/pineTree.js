import { ShaderChunk } from "three";
import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;


// -- -- -- -- -- -- -- -- -- -- -- //


export function pineTreeVert(){
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
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLightN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
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
        vec3 lightN = pos.xyz;
        #ifdef USE_INSTANCING
          lightN = mat3(instanceMatrix) * normalize(pos.xyz*vec3(1.0, .0, 1.0));
          pos = instanceMatrix * pos;
        #endif
        vLightN = normalize( mat3(modelViewMatrix) * lightN * vec3(1.0, 0.0, 1.0) );
        
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

export function pineTreeFrag( settings={} ){

  let defaults = {
    'buildAlpha' : false,
    'addShimmer' : false,
    'zFitScalar' : 0.45,
    'depthScalar' : .0001,
    'alphaTest' : 0.5,
  }
  let shaderSettings = Object.assign( defaults, settings );

  let ret=`
  // Plants surface settings --
    const float DepthScalar = ${shaderSettings.depthScalar};
    const float ScreenWarpColorFix = 3.521;
    const float ShadowTighten = 2.94;
    const float FogDepthMult = 0.05;
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
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLightN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    
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

          if( Alpha < ${shaderSettings.alphaTest} ){
            discard;
          }
          `;
        }
        ret+=`
        
        // -- -- --

        // -- -- -- -- -- -- -- -- --
        // -- Depth Calculations - -- --
        // -- -- -- -- -- -- -- -- -- -- --
        
        float screenSpaceX = abs((vCamPos.x / vCamPos.z))*${shaderSettings.zFitScalar};
        float depth = min(1.0, max(0.0, gl_FragCoord.z / gl_FragCoord.w * DepthScalar )) * step( .930, gl_FragCoord.z );
        depth = depth + ( screenSpaceX * screenSpaceX )*min( 1.0, depth * ScreenWarpColorFix );
        depth = pow( depth, 1.0-depth);
        
        float depthFade = max(0.0, 1.0-depth);
        //depthFade *= depthFade*depthFade;
        
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
        
        // -- -- -- -- -- -- -- -- -- -- 
        // -- Point Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
        float lightMag = 0.0;
        vec3 lightNormal = normalize( vN*.5 + vLightN );
      #if NUM_POINT_LIGHTS > 0
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightDelta = (vWorldPos - pointLights[i].position);
            vec3 lightVector = normalize(lightDelta);
            
            // Calculate distance attenuation
            float lightDistFit = max( 1.0, length(lightDelta) / pointLights[i].distance ) * .65;
            float attenuation = 1.0 / (1.0 + pointLights[i].decay * lightDistFit * lightDistFit);
            
            // Calculate light intensity
            float lightDist = max(0.0, (  1. - lightDistFit )) * attenuation;
            
            // Not really helping with current DoubleSided defaults--
            float lightNormDot = dot(-lightVector, lightNormal)*.5+.5;
            lights += pointLights[i].color * lightNormDot * lightDist;

            //lights += pointLights[i].color * lightDist;
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
        
          float rDot = dot(directionalLights[x].direction, lightNormal );
          float cdLength = length(directionalLights[x].color);
          //cdLength *= cdLength;
          rDot = 1.0 - ( (1.0-rDot) * cdLength * .23017 );
          
          vec3 lightInf= min( directionalLights[x].color, (max(0.0, rDot) * directionalLights[x].color));
          lights += lightInf * vertlightInf;
          
        }
        // Add a fake bump map to the lighting
        lights = lights*min(1.0, 1.0-vCd.x-depth);
        lightMag = length(lights);

        Cd.rgb += Cd.rgb*lights;
        //  
      #endif
      
      // -- -- -- -- -- -- -- -- --
      // -- Match Scene Tone  -- -- --
      // -- -- -- -- -- -- -- -- -- -- --

      float gCd = luma( Cd.rgb );
    `;
    if( shaderSettings.addShimmer ){
      ret+=`
        Cd.rgb = Cd.rgb * (vCd.z*.15*(1.0-(gCd*gInf*2.0))-depth*1.1+.45) * (vCd.x*depthFade + 0.9-gCd*depthFade);
      `;
    }else{
      ret+=`
        //Cd.rgb = Cd.rgb * (1.0+vCd.r*depth);
        //Cd.rgb = Cd.rgb * (vCd.z*.25*(1.0-gCd)-depth*.1+.45) * (vCd.x*depthFade + 1.0-gCd*depthFade);
        Cd.rgb = Cd.rgb * ((1.0-gCd)-depth*.1+.045) * (Cd.rgb*depthFade + 1.0-gCd*depthFade);
      `;
    }
    if( shaderSettings.addShimmer ){
    ret+=`
        Cd.rgb = mix( Cd.rgb, vec3( gCd*3.4 ), depth );
      `;
    }
    ret+=`
        
        float fogMix =  clamp( depth * (depth+1.5)  - lightMag*.1*(1.0-depth * FogDepthMult), 0.0, 1.0 ) ;
        
        vec3 toFogColor = fogColor * (gCd*.2 + .9);
        Cd.rgb=  mix( Cd.rgb, toFogColor, fogMix );
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}

