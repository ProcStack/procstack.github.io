
import { ShaderChunk } from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


// -- -- -- -- -- -- -- -- -- -- -- //


export function envGroundVert(){
	//let ret=shaderHeader();
	let ret=`
    attribute vec3 color;
    
    varying vec3 vCd;
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vLocalPos;
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
        
        
        vLocalPos = (modelMatrix * vec4(position,1.0)).xyz;
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
	//let ret=shaderHeader();
	let ret=`
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
  uniform sampler2D crossNoise;
      
  uniform vec2 time;
  uniform vec3 fogColor;
  
  varying vec3 vCd;
  varying vec2 vUv;
  varying vec3 vPos;
  varying vec3 vCamPos;
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
     
    
  #if NUM_POINT_LIGHTS > 0
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
  #endif
  #if NUM_DIR_LIGHTS > 0
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
  #endif
    
    
        
    void main(){
        float timer = time.x*.3;
        vec3 pos = vLocalPos*.0001;
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

        pos = vLocalPos*.01;
        uv.x = ( pos.x + pos.y*.05 + baseCd.r + baseCd.r*0.50);
        uv.y = ( pos.z + pos.y*.05 + baseCd.g + baseCd.g*0.65);
        
        // -- -- -- -- -- -- -- -- 
        // -- UV & Color Noise  -- --
        // -- -- -- -- -- -- -- -- -- --
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb)*.5-.25;
        vec3 animCd=(texture2D(noiseTexture,uv).rgb);
        //uv = ( uv.yx+nCd.rg*.1 );
        //nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
        
        // -- -- --
        
        vec2 detailUv = abs(pos.xz + nCd.rg*(.15+nCd.b) );
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        dirtNoise = dirtNoise*.5+.5;
        float baseDirtNoise = dirtNoise;
        
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- --
        // -- World Space Texturing - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        // World Space Texture UVs;  Disrupt uniformity by adding model-space normal.xz
        //   Helps curvature disrupt noticable tiling
        // Masking the fire pit since there is too much variation in normals
        
        //vec2 subUv = fract( pos.xz + baseDirtNoise );
        vec2 subUv = ( pos.xz*.9 );
        
        // Read world-uv'ed textures
        vec3 crackDirtCd = texture2D( crackedDirtDiffuse, subUv ).rgb ;
        vec3 mossCd = texture2D( mossDiffuse,( pos.xz*1.5 + (nCd.rg*.1) )).rgb ;
        vec3 grassCd = texture2D( grassDiffuse, pos.xz*2.0 ).rgb ;
        
        // Shift the rocky hill texture so it reads it more horizontally
        vec2 hillLayerUv =  vec2( subUv.x+subUv.y*.35,  vLocalPos.y*.01 ) ;
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
        
        float waterMix = dataCd.b;
        float waterLightInf = 1.0 - dataCd.b*.45;
        float mossMix = max(0.0, dataCd.g-waterMix*.5 );
        float rockyMix = max(0.0, dataCd.r-waterMix*.85 );
        
        // Mix base Dirt color --
        float baseCdMix = clamp( dot( normalize(baseCd.rgb), normalize(vCd.rgb) ) * vCd.r * vCd.g * vCd.b * 10.0, 0.0, 1.0 );
        //vec4 Cd = vec4( mix( dirtCd, baseCd.rgb*dirtNoise, cNoise*baseCdMix ), 1.0);
        vec4 Cd = vec4( mix( baseCd.rgb, dirtCd, cNoise*baseCdMix )*dirtNoise, 1.0);
        
        // Add rocky hill sides, reduce region around campfire, remove pit itself
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
      #if NUM_POINT_LIGHTS > 0
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightDelta = (vPos - pointLights[i].position);
            vec3 lightVector = normalize(lightDelta);
            float lightNormDot = clamp(dot(-lightVector, vN), 0.0, 1.0);
            
            // Calculate distance attenuation
            float lightDistFit = max( 1.0, length(lightDelta) / pointLights[i].distance ) * .001;
            float attenuation = 1.0 / (1.0 + pointLights[i].decay * lightDistFit * lightDistFit);
            
            // Calculate light intensity
            float lightDist = max(0.0, (0.50*waterLightInf - lightDistFit )) * attenuation;
            lights += pointLights[i].color * lightNormDot * lightDist ;
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
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            //float lDirN = dot( directionalLights[i].direction, vN );
            //vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, reflect(vN, normalize(vPos-vCamPos ))))) * lDirN * directionalLights[i].color;
            vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, vN))) * directionalLights[i].color;
            lights += lightInf;
        }
        // 'baseDirtNoise' is acting as bump map here, sorta
        Cd.rgb += Cd.rgb * lights * baseDirtNoise;
      #endif
        
        float fogMix = clamp( depth - lightMag*(1.0-depth*1.5), 0.0, 1.0 );
        Cd.rgb =  mix( Cd.rgb, fogColor, fogMix );
        
        gl_FragColor=Cd;
    }`;
	return ret;
}




// -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- //



export function grassClusterVert(){
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
        #endif

        // Running texture reads first
        float timer = (-time.x*.005);
        vec2 waveUv = vec2( (nSeed.x+nSeed.z)*.001, nSeed.y*.001  + timer);
        vec3 nCd = texture2D(noiseTexture,waveUv).rgb;

        waveUv = vec2( nSeed.x*.01+noiseMaskPos.x*.0005, nSeed.z+nSeed.y*.01 - timer);
        vec3 nMaskCd = texture2D(noiseTexture,waveUv).rgb;
        
        // -- -- --
    
        // Main Settings
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        
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
        pos.xyz += offset * nMask * color.r;
        
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


    
        /***********************************/
        /** Start of THREE Shader Includes **/
        /***********************************/
        ${ShaderChunk[ "worldpos_vertex" ]}
        /*********************************/
        /** End of THREE Shader Includes **/
        /*********************************/


    }`;
  return ret;
}

export function grassClusterFrag( buildAlpha=false ){
  let ret=shaderHeader();
  ret=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform vec3 fogColor;

    uniform sampler2D diffuse;
  `;
  if( buildAlpha ){
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
    
    
        
    
    void main(){
    
        vec4 Cd = texture2D(diffuse,vUv);
        `;
        if( buildAlpha ){
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
        float depth = min(1.0, max(0.0, gl_FragCoord.z / gl_FragCoord.w  * .00008 )) * step( .930, gl_FragCoord.z );
        depth = depth + ( screenSpaceX * screenSpaceX )*min(1.0, depth*5.0);
        depth = pow( depth, 1.0-depth);
        
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // -- -- --

        // -- -- -- -- -- -- -- -- -- -- 
        // -- Point Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
        float lightMag = 0.0;
      /*
      #if NUM_POINT_LIGHTS > 0
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightDelta = (vPos - pointLights[i].position);
            vec3 lightVector = normalize(lightDelta);
            float lightNormDot = clamp(dot(-lightVector, vN), 0.0, 1.0);
            
            // Calculate distance attenuation
            float lightDistFit = max( 1.0, length(lightDelta) / pointLights[i].distance ) * .001;
            float attenuation = 1.0 / (1.0 + pointLights[i].decay * lightDistFit * lightDistFit);
            
            // Calculate light intensity
            float lightDist = max(0.0, (0.50 - lightDistFit )) * attenuation;
            lights += pointLights[i].color * lightNormDot * lightDist;
        }
        Cd.rgb *=  lights;
        lightMag = length( lights );
      #endif
      */
        

        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --

        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(((1.0-vCd.g)));
          lightMag = length(lights);
          //
        #endif
        
        Cd.rgb += Cd.rgb*lights;

        // -- -- --
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        
        // -- -- -- -- -- -- -- -- --
        // -- Match Scene Tone  -- -- --
        // -- -- -- -- -- -- -- -- -- -- --

        float fogMix =  clamp( depth - lightMag*(1.0-depth*1.5), 0.0, 1.0 );
        Cd.rgb=  mix( Cd.rgb * (vCd.y*.5+.4), fogColor, fogMix );

        `;
        if( buildAlpha ){
          ret+=`
          Cd.a = Alpha;
          `;
        }else{
          ret+=`
          Cd.a = 1.0;
          `;
        }
        ret+=`
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}





// -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- //


export function creekWaterVert(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vN;
    
    
    void main(){
        vUv=uv;
        vCd=color;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec4 pos = vec4(position, 1.0);
        
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
        vPos = pos.xyz;
    }`;
  return ret;
}

export function creekWaterFrag(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D dataTexture;
    uniform sampler2D rippleTexture;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vN;
    
    
    
    void main(){
        float timer = time.x*0.01;
        vec3 pos = vPos*0.001;
        vec2 uv = vUv;
        vec3 dataCd=texture2D(dataTexture,vUv).rgb;
        
        //uv.x = fract( pos.x*1.0 );
        //uv.y = fract( pos.z*1.4+timer ); 
        uv.x = fract( uv.x*1.0 );
        uv.y = fract( uv.y*1.4+timer ); 
        
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        uv.x = fract( pos.x-timer*5.1 + nCd.x + nCd.z );
        uv.y = fract( pos.z-timer*2.1  + nCd.y - nCd.x )*2.0; 
        nCd=(texture2D(noiseTexture,uv*.01).rgb);
        vec3 vertCd= nCd;
        
        float alpha = clamp(((nCd.x*nCd.y*nCd.z)*.15)+.85, 0.0, 1.0)  * min(1.0,vCd.r * 2.0 * (dataCd.b*.82+.18));
        vec4 Cd=vec4( .3,.38,.6, alpha );
        Cd.rgb = Cd.rgb*(nCd.g*.65+.4);
        //vec4 rippleCd=texture2D(rippleTexture,vUv);
        gl_FragColor=Cd;
    }`;
  return ret;
}



export function pondWaterVert(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vN;
    varying vec3 vToCam;
    
    
    void main(){
        vUv=uv;
        vCd=color;
        vN = normal;
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec4 pos = vec4(position, 1.0);
        
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
        vToCam =   cameraPosition - position ;
        vPos = pos.xyz;
        vWorldPos = mvPos.xyz;
    }`;
  return ret;
}

export function pondWaterFrag(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D dataTexture;
    uniform sampler2D coastLineTexture;
    uniform sampler2D rippleTexture;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vN;
    varying vec3 vToCam;
    
    
    void main(){
        float timer = time.x*0.01;
        vec3 pos = vPos*0.001;
        vec2 uv = vUv;
        
        vec3 dataCd = texture2D( dataTexture, vUv ).rgb;
        
        uv.x = ( pos.x*1.2-timer*.19 );
        uv.y = ( pos.z*1.9+timer*.9 );  
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        
        uv.x = ( pos.x*10.81-timer*17.1 + nCd.x*dataCd.r + nCd.z + dataCd.b );
        uv.y = ( pos.z*7.51+timer*10.1  + nCd.y*1.50 - nCd.x + dataCd.g ); 
        nCd = texture2D( noiseTexture, uv*.0135 ).rgb*.65+.35;
        
        // -- -- --
        
        // Sample Coast Line Distance texture
        vec2 sampleOffset = vec2( .0015  );
        float coastInf= ( texture2D( coastLineTexture, vUv ).r + 
                        texture2D( coastLineTexture, vUv + sampleOffset + nCd.rg*.015 ).r + 
                        texture2D( coastLineTexture, vUv - sampleOffset ).r ) * .3333333333;
        
        uv = vec2( pos.x*.1 - coastInf*.1, pos.z*.10-timer*.05-coastInf*.05 );
        vec3 vertCd = ( texture2D(noiseTexture,uv).rgb*.5 +
                      texture2D(noiseTexture,uv+sampleOffset).rgb*.25 +
                      texture2D(noiseTexture,uv-sampleOffset).rgb*.15 );
        
        // -- -- --
        
        // Calculate Alpha
        float alpha = clamp(((nCd.x*nCd.y*nCd.z)*.15)+.85, 0.0, 1.0) ;
        alpha =  min(1.0,alpha +  (dataCd.r*vCd.b)* min(1.0,vCd.r*2.0)) ;
        alpha *= min(1.0,vCd.r*3.7);
        vec4 Cd=vec4( .29,.35,.55, alpha );
        
        
        // -- -- --
        
        // Generate coastal ripples
        coastInf = max( 0.0, coastInf*coastInf*coastInf  - (vertCd.r+vertCd.g+vertCd.b)*coastInf*0.28 );
        vec2 rippleUV = vec2( coastInf ) ;
        rippleUV = fract( rippleUV + (-time.x*0.06 ) );
        
        
        rippleUV = ( rippleUV * coastInf);
        float rippleInf=texture2D( rippleTexture, rippleUV ).r * coastInf * coastInf *.5 ;
        

        // -- -- --
        
        // Color + Coastal Mix
        
        Cd.rgb *= mix(  max(nCd.g*(nCd.r*.5+1.0)*.7+.3,nCd.b*alpha)*.8+.1,
                        rippleInf+0.50,
                        min(1.0,(coastInf*.5+.5)+rippleInf) 
                     ); 
                     
        float angleInf = clamp( (1.0-min(1.0, length( vToCam )*.00135 ))*1.85, 0.0, 1.0 );
        angleInf *= angleInf;
        float angleIncidence = 1.0 - clamp( dot( normalize( vToCam ), normalize(vN * nCd) )*3.50-.5, 0.0, 1.0)*(1.0-coastInf*.3-nCd.g*.3) * angleInf ;
                     
        Cd.a = mix(Cd.a*angleIncidence, Cd.a-min(1.0, (1.0-rippleInf)*.35), coastInf*.35  );
        
        
        gl_FragColor=Cd;
    }`;
  return ret;
}


// -- -- --


export function pondDockVert(){
	let ret=shaderHeader();
	ret+=`
    attribute vec3 color;

    varying vec3 vPos;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    varying vec3 vTangent;
    varying vec3 vBitangent;
    varying float vAlpha;
    
    void main(){
        vUv=uv;
        vN = normalize( normalMatrix * normal );
        vTangent = normalize( normalMatrix * vec3( 1.0, 0.0, 0.0 ) );
        vBitangent = normalize( normalMatrix * vec3( 0.0, 1.0, 0.0 ) );

        vAlpha=color.r;
        
        vCd=color;
        
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        vPos = mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;


    }`;
	return ret;
}

export function pondDockFrag(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D normalMap;
    uniform vec3 fogColor;
    
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

    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "lightmap_pars_fragment" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/

    varying vec3 vPos;
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vN;
    varying vec3 vTangent;
    varying vec3 vBitangent;
    varying float vAlpha;
    

    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "packing" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/

    void main(){
        vec3 nCd=normalize( texture2D( normalMap,vUv ).rgb * 2.0 - 1.0 );
        vec3 Cd= texture2D( diffuse,vUv ).rgb * vCd;
        
        mat3 tbnMatrix = mat3( vTangent, vBitangent, vN );
        
        // -- -- --

        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00035 ) * step( .930, gl_FragCoord.z );
        depth = pow( depth, 1.5+depth);
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;

        // -- -- --
        
        vec3 normal = normalize( tbnMatrix * nCd );
        Cd.rgb = Cd.rgb * (Cd.rgb*.3+.1); 
        
        // -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
          
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        float dp=0.0;
        float shadowRadius=0.0;
        
      #if NUM_DIR_LIGHTS > 0
        lights = vec3(0.0, 0.0, 0.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= directionalLights[i].color * dot(directionalLights[i].direction, vN );
            lights += lightInf;
        }

        Cd.rgb += lights* min(vec3(1.0),(Cd.rgb)*9.0+.25) ;
      #endif
        
        float fogMix = clamp( depth - length( lights )*(1.0-depth*1.5), 0.0, 1.0 );
        Cd.rgb =  mix( Cd.rgb, fogColor, fogMix );

        // -- -- --
        
        vec4 outCd = vec4( Cd, 1.0 );
        gl_FragColor = outCd;
    }`;
	return ret;
}