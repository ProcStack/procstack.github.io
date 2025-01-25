
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
    
  uniform sampler2D dirtDiffuse;
  uniform sampler2D crackedDirtDiffuse;
  uniform sampler2D hillDiffuse;
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
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "packing" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
        
    void main(){
        float timer = time.x*.3;
        vec3 pos = vLocalPos*.0001;
        vec2 uv = vUv;

        float screenSpaceX = abs((vCamPos.x / vCamPos.z))*.45;
        float depth = min(1.0, max(0.0, gl_FragCoord.z) / gl_FragCoord.w  * .00015 );
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
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*.05 ));
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
        
        vec2 subUv = fract( pos.xz + baseDirtNoise );
        
        // Read world-uv'ed textures
        vec3 crackDirtCd = texture2D(crackedDirtDiffuse,subUv).rgb ;
        vec3 mossCd = texture2D(mossDiffuse,fract( pos.xz*1.1 )).rgb ;
        
        // Shift the rocky hill texture so it reads it more horizontally
        vec2 hillLayerUv = fract( vec2( subUv.x,  vLocalPos.y*.01 ) );
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
        float baseCdMix = clamp( dot( normalize(baseCd.rgb), normalize(vCd.rgb) ) * vCd.r * vCd.g * vCd.b * 10.0, 0.0, 1.0 );
        //vec4 Cd = vec4( mix( dirtCd, baseCd.rgb*dirtNoise, cNoise*baseCdMix ), 1.0);
        vec4 Cd = vec4( mix( baseCd.rgb, dirtCd, cNoise*baseCdMix )*dirtNoise, 1.0);
        
        // Add moss
        //float mossMix = clamp( dataCd.g + mossCd.g*(1.0-min(1.0,dataCd.g*1.0)), 0.0, 1.0);
        float mossMix = clamp( dataCd.g, 0.0, 1.0);
        Cd.rgb = mix( Cd.rgb, mossCd, mossMix);
        
        // Add rocky hill sides, reduce region around campfire, remove pit itself
        Cd.rgb = mix( Cd.rgb, rockyHillCd, dataCd.r);
        
        // Mix in under water colors
        float waterMix = dataCd.b;
        vec3 waterTintCd = vec3( 0.7, 0.75, 0.85 );
        Cd.rgb = mix( Cd.rgb, Cd.rgb * waterTintCd, waterMix );
        
        // -- -- --
        
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
      #if NUM_POINT_LIGHTS > 0
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightDelta = (vPos - pointLights[i].position);
            vec3 lightVector = normalize(lightDelta);
            float lightNormDot = clamp(dot(-lightVector, vN), 0.0, 1.0);
            vec3 lightInf=  pointLights[i].color;
            float lightDist = max( 0.0, (1.0-length( lightDelta )*.0015) );
            lights *= vec3( pointLights[i].color * ( lightDist ) );
            lights += lightInf * lightNormDot;
            //float lightDist = max( 0.0, (1.0-length( lightDelta )*.001) );
            //float lightDist = pow( length( lightDelta ) / pointLights[i].distance, pointLights[i].decay);
            //lights += vec3( pointLights[i].color * ( lightDist ) ) * lightInf * lightNormDot   ;
        }
        Cd.rgb *= lights;
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
            vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, vN ))) * directionalLights[i].color;
            lights += lightInf;
        }
        // 'baseDirtNoise' is acting as bump map here, sorta
        Cd.rgb += lights * baseDirtNoise;
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
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying vec3 vFogColor;
    
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


        // Running texture reads first
        float timer = (-time.x*.005);
        vec2 waveUv = vec2( .5, uv.y*.05 + (-time.x*.005));
        vec3 nCd = texture2D(noiseTexture,waveUv).rgb;

        vec4 noiseMaskPos = pos;
        #ifdef USE_INSTANCING
          noiseMaskPos = instanceMatrix * noiseMaskPos;
        #endif
        waveUv = vec2( noiseMaskPos.x*.0005, noiseMaskPos.z*.0001 + (-time.x*.01));
        vec3 nMaskCd = texture2D(noiseTexture,waveUv).rgb;
        
        // -- -- --
    
        // Main Settings
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        vFogColor = fogColor;
        
        // -- -- --

        // Local Wind Sway
        vec3 offset = (nCd-.5) * color.y * 1.5 ;
        
        // -- -- --

        // Add some bounce to the sway, sudden anim shifts
        offset = mix(  offset, offset*2.5, min(0.0, offset.z) );
        offset.y=0.0;
        
        // -- -- --

        // Mask Wind with Noise Peaks
        //   This visually looks like wind gusts in clusters moving through the scene
        float nMask = max(nMaskCd.x, max(nMaskCd.y, nMaskCd.z) );
        nMask = clamp( nMask*2.7-.9, 0.0, 1.0 );
        
        // -- -- --

        // Add offset position in Model Space, pre-instance positioning
        pos.xyz += offset * nMask;
        
        // -- -- --
        
        // Shift position to Instance position-
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        // Global Wind
        pos.z += max(offset.x, max(offset.y, offset.z)) * .5 * nMask;
        
        // -- -- --

        // -- -- -- -- -- -- --
        // -- Position Out - -- --
        // -- -- -- -- -- -- -- -- --
        
        vPos = pos.xyz;
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
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

export function grassClusterFrag(pointLightCount){
  let ret=shaderHeader();
  ret=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform vec3 fogColor;

    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying vec3 vFogColor;
    
    
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
    
    ${ShaderChunk[ "packing" ]}
    
        
    
    void main(){
    
        vec4 Cd = texture2D(diffuse,vUv);
        
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- --
        // -- Depth Calculations - -- --
        // -- -- -- -- -- -- -- -- -- -- --
        
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00035 );
        depth = pow( depth, 1.5+depth);
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // -- -- --

        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);
        float lightMag = 0.0;

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

        Cd.rgb=  mix( Cd.rgb * (vCd.y*.55+.25), vFogColor, depth );

        float fogMix = clamp( depth - lightMag*(1.0-depth*1.5), 0.0, 1.0 );
        Cd.rgb =  mix( Cd.rgb, fogColor, fogMix );

        Cd.a=1.0;
        
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

export function pondWaterFrag(){
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
        
        uv.x = fract( pos.x*(1.0) );
        uv.y = fract( pos.z*1.4+timer ); 
        //uv.x = fract( uv.x*1.0 );
        //uv.y = fract( uv.y*1.4-timer ); 
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        uv.x = fract( pos.x-timer*5.1 + nCd.x*dataCd.g + nCd.z + dataCd.b );
        uv.y = fract( pos.z-timer*2.1  + nCd.y - nCd.x + dataCd.g ); 
        nCd=(texture2D(noiseTexture,uv*.01).rgb);
        vec3 vertCd= nCd;
        
        float alpha = clamp(((nCd.x*nCd.y*nCd.z)*.15)* (dataCd.r*.8+.5)+.85, 0.0, 1.0) 
             * min(1.0, vCd.g*.5+.75  ) + max(0.0, vCd.r-.5);
        alpha =  min(1.0,alpha +  (dataCd.r*vCd.b)* max(0.0,vCd.r-.5)*2.0) ;
        alpha *= min(1.0,vCd.r*2.0);
        vec4 Cd=vec4( .29,.35,.55, alpha );
        Cd.rgb = Cd.rgb*(max(nCd.g*nCd.r,nCd.b*alpha)*.8+.1);
        
        //vec4 rippleCd=texture2D(rippleTexture,vUv);
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
        vN = normalize( normalMatrix * normal );
        vTangent = normalize( normalMatrix * vec3( 1.0, 0.0, 0.0 ) );
        vBitangent = normalize( normalMatrix * vec3( 0.0, 1.0, 0.0 ) );

        vAlpha=color.r;
        
        vCd=color;
        
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        vPos = mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;


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

export function pondDockFrag(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D normalMap;
    uniform sampler2D aoTexture;
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

        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00035 );
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