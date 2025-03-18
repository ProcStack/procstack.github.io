import { ShaderChunk } from "../../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


// -- -- -- -- -- -- -- -- -- -- -- //


export function envGroundVert(){
	let ret=shaderHeader();
	ret += `
    attribute vec3 color;
    
    varying vec3 vCd;
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vModelPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "shadowmap_pars_vertex" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    
    void main(){
        vUv=uv;
        vCd = color;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vModelPos = (modelMatrix * vec4(position,1.0)).xyz;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        vCamPos = gl_Position.xyz;
        
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
        ${ShaderChunk[ "worldpos_vertex" ]}
        ${ShaderChunk[ "shadowmap_vertex" ]}
      /*********************************/
      /** End of THREE Shader Includes **/
      /*********************************/
        
    }`;
	return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag( pointLightCount ){
	let ret=shaderHeader();
	ret += `
        
  uniform sampler2D diffuse;
  uniform vec3 ambientLightColor;
    
  uniform sampler2D dirtDiffuse;
  uniform sampler2D crackedDirtDiffuse;
  uniform sampler2D hillDiffuse;
  uniform sampler2D grassDiffuse;
  uniform sampler2D mossDiffuse;
  uniform sampler2D dataTexture;
  
  uniform sampler2D noiseTexture;
  uniform sampler2D uniformNoise;
      
  uniform vec2 time;
  uniform vec3 fogColor;
  
  varying vec3 vCd;
  varying vec2 vUv;
  varying vec3 vPos;
  varying vec3 vCamPos;
  varying vec3 vModelPos;
  varying vec3 vN;
  varying vec3 vLocalN;
  varying vec3 vShading;
  
  #define PI 3.1415926535897932384626
  #define EPSILON 1e-6
    
  // Three.js Light Structs
  
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
  
  #if NUM_SPOT_LIGHTS > 0
    struct SpotLight {
      vec3 position;
      vec3 direction;
      vec3 color;
      float distance;
      float decay;
      float coneCos;
      float penumbraCos;
    };
  uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
  #endif
    
    
  void main(){
      float timer = time.x*.3;
      vec3 pos = vModelPos*.0001;
      vec2 uv = vUv;

      float screenSpaceX = abs((vCamPos.x / vCamPos.z))*.45;
      float depth = min(1.0, max(0.0, gl_FragCoord.z / gl_FragCoord.w  * .00015 )) * step( .930, gl_FragCoord.z );
      depth = depth + ( screenSpaceX * screenSpaceX )*min(1.0, depth*2.0);
      depth = pow( depth, 1.0-depth);

      float depthFade = clamp( 2.-(depth*depth), 0.0, 1.0);
      depthFade *= depthFade*depthFade;
      
      //Ease patch noise, dirt / path / woods / grass
      
      vec4 baseCd = texture2D(diffuse,vUv) ;
      vec3 dataCd = texture2D(dataTexture,vUv).rgb ;

      pos = vModelPos*.01;
      uv.x = ( pos.x + pos.y*.05 + baseCd.r + baseCd.r*0.50);
      uv.y = ( pos.z + pos.y*.05 + baseCd.g + baseCd.g*0.65);
      
      // -- -- -- -- -- -- -- -- -- -- -- -- --
      // -- Texture Offset by Position atan  -- --
      // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
      
      vec2 atanVec = normalize( vec2( vModelPos.x + vModelPos.y*.5, vModelPos.z + vModelPos.y*.1 ) );
      float deg = atan( atanVec.y, atanVec.x );
      
      // -- -- -- -- -- -- -- -- 
      // -- UV & Color Noise  -- --
      // -- -- -- -- -- -- -- -- -- --
      
      vec3 nCd=(texture2D(noiseTexture,uv).rgb)*.5-.25;
      vec3 scnCd=(texture2D(noiseTexture,uv*0.05).rgb)-.5;
      
      vec3 animCd=(texture2D(noiseTexture,uv).rgb);
      //uv = ( uv.yx+nCd.rg*.1 );
      //nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
      
      // -- -- --
      
      vec2 detailUv = abs(pos.xz + nCd.rg*(.15+nCd.b) );
      float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
      float dirtNoise = texture2D(uniformNoise,detailUv).r;
      dirtNoise = dirtNoise*.5+.5;
      float baseDirtNoise = dirtNoise;
      
      
      // -- -- -- -- -- -- -- -- -- --
      // -- World Space Texturing - -- --
      // -- -- -- -- -- -- -- -- -- -- -- --
      
      // World Space Texture UVs;  Disrupt uniformity by adding model-space normal.xz
      //   Helps curvature disrupt noticable tiling
      // Masking the fire pit since there is too much variation in normals
      
      //vec2 subUv = fract( pos.xz + baseDirtNoise );
      vec2 subUv = pos.xz;
      
      // Read world-uv'ed textures
      vec3 crackDirtCd = texture2D( crackedDirtDiffuse, subUv ).rgb ;
      
      vec2 uvNoiseOffset = (scnCd.rg * scnCd.b );
      vec3 mossCd = texture2D( mossDiffuse, pos.xz*2.25 + uvNoiseOffset ).rgb ;
      vec3 grassCd = texture2D( grassDiffuse, pos.xz*2.0 + uvNoiseOffset ).rgb ;
      
      // Shift the rocky hill texture so it reads it more horizontally
      vec2 hillLayerUv =  vec2( pos.x*0.1885 + pos.z*0.836 + deg*9.17,  vModelPos.y*.007 ) ;  
      vec3 rockyHillCd = texture2D(hillDiffuse,hillLayerUv).rgb ;
      
      // -- -- --
      
      // -- -- -- -- -- -- -- --
      // -- Dirt Color Mixing -- --
      // -- -- -- -- -- -- -- -- -- --
      
      // Dark Dirt Patch Color
      vec2 dirtUv = fract(pos.xz*.9);
      dirtNoise = min(1.0, texture2D(uniformNoise,dirtUv).r*.3+.7);
      
      dirtUv = fract(pos.xz*.2);
      vec3 dirtCdBase = texture2D(dirtDiffuse,dirtUv).rgb;
      
      vec3 dirtCd = dirtCdBase * detailMult*(1.0-depth) + depth*.2;
      
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
      
      float waterMix = dataCd.b * step( 0.115,  dataCd.b ); // Protect from JPEG artifacts in blue
      float waterLightInf = 1.0 - dataCd.b*.45;
      float mossMix = max(0.0, dataCd.g-waterMix*.5 );
      float rockyMix = max(0.0, dataCd.r-waterMix*.85 );
      rockyMix = clamp( (rockyMix-.75)*3.0, 0.0, 1.0 );
      
      // Mix base Dirt color --
      float baseCdMix = clamp( dot( normalize(baseCd.rgb), normalize(vCd.rgb) ) * vCd.r * vCd.g * vCd.b * 10.0, 0.0, 1.0 );
      //vec4 Cd = vec4( mix( dirtCd, baseCd.rgb*dirtNoise, cNoise*baseCdMix ), 1.0);
      vec4 Cd = vec4( mix( baseCd.rgb, dirtCd, cNoise*baseCdMix )*dirtNoise, 1.0);
      
      // Add rocky hill sides, reduce region around campfire, remove pit itself
      rockyHillCd = mix( dirtCd, rockyHillCd, rockyMix );
      Cd.rgb = mix( Cd.rgb, rockyHillCd, rockyMix);
      
      // Mix'n'add Moss & Grass colors
      float mossGrassMix = clamp( (mossMix-.5)*2.0, 0.0, 1.0 );
      vec3 mossGrassCd = mix( mossCd, grassCd, mossGrassMix );
      Cd.rgb = mix( Cd.rgb, mossGrassCd, mossMix);
      
      
      // Mix in under water colors
      vec3 waterTintCd = vec3( 0.7, 0.75, 0.85 );
      Cd.rgb = mix( Cd.rgb, Cd.rgb * waterTintCd, waterMix );
      
      // -- -- --
      
      
      vec3 lights = vec3(0.0, 0.0, 0.0);
      float attenuation = 0.0;
    #if NUM_POINT_LIGHTS > 0
      for(int x = 0; x < NUM_POINT_LIGHTS; ++x) {
          vec3 lightDelta = (vPos - pointLights[x].position);
          vec3 lightVector = normalize(lightDelta);
          float lightNormDot = clamp(dot(-lightVector, vN), 0.0, 1.0);
          
          // Calculate distance attenuation
          float lightDistFit =  min( 1.0, length(lightDelta) / pointLights[x].distance ) ;
          attenuation = 1.0 / (1.0 + pointLights[x].decay * lightDistFit  );
          
          // Calculate light intensity
          float lightDist = max(0.0, (0.50*waterLightInf - lightDistFit )) * attenuation;
          lights += pointLights[x].color * lightDist * attenuation ;
      }
      Cd.rgb *= max( ambientLightColor * waterLightInf, lights);
    #else
      Cd.rgb *= ambientLightColor * waterLightInf;
    #endif

      float lightMag = length( lights );
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;
      int i = 0;
      float dp=0.0;
      float shadowRadius=0.0;
      
      pos = vPos;
      lights = vec3(0.0, 0.0, 0.0);
    #if NUM_DIR_LIGHTS > 0
      for( int x = 0; x < NUM_DIR_LIGHTS; ++x ) {
          vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, vN))) * directionalLights[x].color;
          lights += lightInf;
      }
      // 'baseDirtNoise' is acting as bump map here, sorta
      Cd.rgb += Cd.rgb * lights * baseDirtNoise;
    #endif
      


    /*
    #if NUM_SPOT_LIGHTS > 0
      for( int x = 0; x < NUM_SPOT_LIGHTS; ++x ) {

        lights = vec3(0.0, 0.0, 0.0);

        //vec3 lVector = spotLights[x].position - vCamPos;
        vec3 lVector = spotLights[x].position - vModelPos;
        vec3 lightToPos = normalize( lVector );
    
        float angleCos = dot( normalize( lVector ), spotLights[x].direction );
        float spotAttenuation = smoothstep( spotLights[x].coneCos, spotLights[x].penumbraCos, angleCos );
    
    
        float lightDistance = length( lVector );

        // -- -- -- -- -- -- -- -- -- -- --
        // From Three.js ShaderChunk/lights_pars_begin.glsl.js --
        // based upon Frostbite 3 Moving to Physically-based Rendering
        // page 32, equation 26: E[window1]
        // https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
        float distanceFalloff = 1.0 / max( pow( lightDistance, spotLights[x].decay ), 0.01 );

        // Added epsilon for pxlNav
        float cutoffDistance = spotLights[x].distance + EPSILON;

        distanceFalloff *= pow( clamp( 1.0 - pow( lightDistance / cutoffDistance, 4.0 ), 0.0, 1.0 ), 2.0 );
        //
        // -- -- -- -- -- -- -- -- -- -- --
        
        vec3 curLight = spotLights[x].color * spotAttenuation;
        curLight *= distanceFalloff;

        lights += curLight;
        lights = vec3(lightDistance * .0004);

      }

      Cd.rgb += Cd.rgb * lights ;

    #endif
    */


      float fogMix = clamp( depth - lightMag*(1.0-depth*1.5), 0.0, 1.0 );
      Cd.rgb =  mix( Cd.rgb, fogColor, fogMix );

      gl_FragColor=Cd;
  }`;
	return ret;
}
