
import { ShaderChunk } from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////


export function rabbitDruidVert(){
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
    ${ShaderChunk[ "skinning_pars_vertex" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( cross( cross( normal, vec3(.0, 1.0, .0) ), vec3(.0, 1.0, .0) ) );
      objectTangent = normalize( objectTangent );
      
      
      vec3 blendPos = color.rgb;
      transformed = mix( transformed, blendPos, eyeBlink.x );
      
      
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
      ${ShaderChunk[ "skinbase_vertex" ]}
      ${ShaderChunk[ "skinnormal_vertex" ]}
      ${ShaderChunk[ "skinning_vertex" ]}
      /*********************************/
      /** End of THREE Shader Includes **/
      /*********************************/
      
      // TODO : Pullrequest this to Three.js
      objectNormal = normalize(objectNormal);
      objectTangent = normalize( objectTangent );
      
      
      vTan =  objectTangent;
      vN =  objectNormal;
      vPos = transformed;
      
      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      
      }`;
      return ret;
    }
    
    
    export function rabbitDruidFrag(){
      //let ret=shaderHeader();
      let ret=`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    uniform vec2 lightScalar;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "lightmap_pars_fragment" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vTan;
    
    varying float vFlicker;
    
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
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "packing" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      outCd = diffCd;
      
      
      vec2 animUv = vUv*.005;
      animUv.y -= time.x*.05;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //

      float lightContrib = 1.0-clamp( dot( vN, normalize( vPos ))*1.5, 0.0, 1.0 );
      
      vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
      int x=0;
      for( x=0; x < NUM_POINT_LIGHTS; ++x ) {
          vec3 lightVector = normalize( pointLights[x].position - vPos) + vec3( -0.50, .10, -0.50 ) ;
          //vec3 refTan = vec3( (dot( normalize(lightVector)- nCd.xyz, vN )*.5+.5) * (dot(normalize(pointLights[x].position), vN)*.5+.5) );
          vec3 refTan = reflect( normalize(lightVector) - nCd.xyz*.3, vTan );
          //refTan = normalize( refTan + vec3(-.10, -max(nCd.x,nCd.y)*.3 , -.10) );
          
          vec3 lightInf=  clamp( (dot(refTan, vN )+.15)*(1.65+areCd.g*.7)+.5, 0.0, 1.0) * pointLights[x].color;
          lights.rgb += lightInf * lightContrib;
      }
      outCd.rgb *= lights.rgb*.8+.2;
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;
      
      // Read from Point Lights
      //lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[0].shadowMapSize, pointLightShadows[0].shadowBias, pointLightShadows[0].shadowRadius, vPointShadowCoord[0], pointLightShadows[0].shadowCameraNear, pointLightShadows[0].shadowCameraFar );
      //shadowInf = max( lShadow, shadowInf);
      //outCd.rgb*=shadowInf;
      
      // CampFire Light Magnitude; Ambient Light Mask
      float lMag = min(1.0, max(0.0,length( lights.rgb )-.3)*.35 + max(0.0,-vN.y));
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      for( x=0; x < NUM_DIR_LIGHTS; ++x ) {
          vec3 lightInf=  max(0.0, dot(directionalLights[x].direction, vN  )) * directionalLights[x].color ;
          lights.rgb += lightInf ;
      }
      outCd.rgb = mix(outCd.rgb, outCd.rgb+vec3(1.0, .75, .75) * (outCd.rgb*.5) * lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g * lightScalar.x;

      
      // Add some ambient color to the back rim of the object
      float d = clamp( dot( normalize(vec3(2.80, 1.2, -1.20)), vTan )*1.+.15, 0.0, 1.0) * lightContrib * (1.0-lMag*.5);
      // Blend light contribution areas with dot product of back facing normals; masked by light agregation
      outCd.rgb += vec3(.0, .10, .60) * d  ;
  

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}














// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
    

export function envGroundVert(){
  let ret=shaderHeader();
  ret+=`
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying float vUpFit;
    varying float vRockyMask;
    varying float vFarMask;
    varying float vPitMask;
    
    void main(){
        vUv=uv;
        
        vLocalPos = (modelMatrix * vec4(position,1.0)).xyz;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        float pLen = length(position.xyz);
        vRockyMask = clamp( (0.985-normal.y)*20.0, 0.0, 1.0);
        vRockyMask = clamp( (vRockyMask * (1.0-normal.y)*10.0 - .3)*5.0, 0.0, 1.0);
        vFarMask = 1.0 - min(1.0, max(0.0, 1.0-pLen*.0065 )*1.7 );

        vPitMask = ( max(0.0, 1.0-pLen*.015 )*1.35 );
        vPitMask *= vPitMask;
    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D dirtDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
        
    uniform sampler2D crackedDirtDiffuse;
    uniform sampler2D hillDiffuse;
    uniform sampler2D mossDiffuse;
    uniform sampler2D dataDiffuse;

    uniform vec2 time;
    uniform vec3 fogColor;
    
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
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
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
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- 
        // -- UV & Color Noise  -- --
        // -- -- -- -- -- -- -- -- -- --
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb);
        vec3 animCd=(texture2D(noiseTexture,uv).rgb);
        //uv = ( uv.yx+nCd.rg*.1 );
        //nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
        
        // -- -- --
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*nCd.b*.2));
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        float baseDirtNoise = dirtNoise;
        dirtNoise = dirtNoise*.7+.3;
        
        
        // Set campfire pit mask and distance hill masking
        float campfireMask = (dataCd.b * vPitMask);
        float campfireMaskInv = 1.0 - campfireMask;
        float hillMask = (dataCd.b * vFarMask); // --
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- --
        // -- World Space Texturing - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --
        
        // World Space Texture UVs;  Disrupt uniformity by adding model-space normal.xz
        //   Helps curvature disrupt noticable tiling
        // Masking the fire pit since there is too much variation in normals
        
        vec2 subUv = fract( pos.xz*1.5 + vLocalN.xz*campfireMaskInv*baseDirtNoise );
        
        // Read world-uv'ed textures
        vec3 crackDirtCd = texture2D(crackedDirtDiffuse,subUv).rgb ;
        vec3 mossCd = texture2D(mossDiffuse,subUv*1.1).rgb ;
        
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
        float mossMix = clamp( dataCd.g + mossCd.g*step(0.01,dataCd.g), 0.0, 1.0);
        Cd.rgb = mix( Cd.rgb, mossCd, mossMix);
        
        // Add rocky hill sides, reduce region around campfire, remove pit itself
        Cd.rgb = mix( Cd.rgb, rockyHillCd, vRockyMask*(1.0-vPitMask)*campfireMaskInv);
        
        // Darken the center pit
        //   Gotta add that ash!
        float ashMask = max(0.0, dataCd.b*vPitMask-.53);
        ashMask = 1.0 - min( 1.0, ashMask*ashMask*3.5)*.95;
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
        
        // -- -- -- -- -- -- -- --
        // -- Firepit Flicker - -- --
        // -- -- -- -- -- -- -- -- -- --
        
        float animWarpFit = max( animWarpCd.r, max(animWarpCd.g,animWarpCd.b) )*.8 -.2;
        
        // Main Pit
        Cd.rgb += (firePitColor + firePitColor*animWarpFit) * (campfireMask*1.1-.1) * .25 * ashMask;
        
        // Region around Pit and Druid Rabbit
        Cd.rgb += (fireGlowColor + fireGlowColor*animWarpFit) * vPitMask * vPitMask * .15 * ashMask;
        
        // -- -- --

        // -- -- -- -- -- -- -- -- -- -- -- --
        // -- Final shading and fog color - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --

        float shade = clamp(dot(vN, reflect( normalize(vPos), vN ))+depthFade, 0.0, 1.0 );
        shade = max( lights.r, shade * (1.0 - (vFarMask*.1+max(0.0,depth-.1))) );
        shade +=  length( lights ) ;
        shade *= dataCd.r;
        Cd.rgb=  mix( Cd.rgb*shade, fogColor, depth );
        
        
        gl_FragColor=Cd;
    }`;
  return ret;
}






// -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //





export function campfireLogVert(){
  let ret=shaderHeader();
  ret += `
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
        vec4 pos = vec4(position, 1.0);
        
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
        vPos = pos.xyz;// mvPos.xyz;
        vPosW = position.xyz;
        
    }`;
  return ret;
}

export function campfireLogFrag(){
  let ret=shaderHeader();
  ret += `
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
    
    
    void main(){
        float timer = time.x*0.05;
        vec3 pos = vPos*0.3;
        vec2 uv = vUv*.9;
        uv.x = fract( pos.x+timer );
        uv.y = fract( pos.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        uv.x = fract( pos.x+timer*1.2 + nCd.x + nCd.z );
        uv.y = fract( pos.z-timer*2.1  + nCd.y - nCd.x )*5.0; 
        nCd=(texture2D(noiseTexture,uv*.31).rgb-.5)*15.3;
        vec3 vertCd=vCd + nCd;
        
        vec4 Cd=vec4( vertCd, 1.0 );
        
        vec4 baseCd=texture2D(baseTexture,vUv);
        vec4 midEmberCd=texture2D(midEmberTexture,vUv);
        vec4 heavyEmberCd=texture2D(heavyEmberTexture,vUv);
        vec4 dataTexCd=texture2D(dataTexture,vUv);
        
        float blender = max(0.0, dataTexCd.g * (1.0 + nCd.x * nCd.y * nCd.z*5.0) + (dataTexCd.z*40.0));
        float centerMass = length(vPos)*.29;
        centerMass = 1.0-(centerMass*centerMass);
        blender =  clamp((blender * clamp((centerMass*3.5), 0.0, 1.0 ) + centerMass*(.1-nCd.y*nCd.x*nCd.z)), 0.0, 1.0 );
        Cd.rgb = mix( midEmberCd.rgb, heavyEmberCd.rgb, blender );
        Cd.rgb = mix( baseCd.rgb, Cd.rgb, clamp((centerMass+centerMass)*(1.0-blender),0.0,1.0) );
        //Cd.rgb = vec3(blender);
        
        gl_FragColor=Cd;
    }`;
  return ret;
}






// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
    





export function grassClusterVert(){
  //let ret=shaderHeader();
  let ret=`
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
    varying float vCampfireInf;
    
    void main(){
    
        vec4 pos = vec4( position, 1.0 );
        
        // Running texture reads first
        float timer = (-time.x*.005);
        vec2 waveUv = vec2( .5, uv.y*.05 + (-time.x*.005));
        vec3 nCd = texture2D(noiseTexture,waveUv).rgb;
        waveUv = vec2( .5, uv.y*.01 + (-time.x*.015));
        vec3 flickerCd = texture2D(noiseTexture,waveUv).rgb;

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

        // -- -- -- -- -- -- -- -- -- --
        // -- Campfire Flicker Mask - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --

        //  Isolate the Point Light influence
        vCampfireInf = 1.0-min(1.0, length( vPos )*.015);
        vCampfireInf = min( 1.0, vCampfireInf*vCampfireInf * 1.85 );

        float flickerInf = vCampfireInf * ( flickerCd.r * max( flickerCd.g, flickerCd.b ));
        vCampfireInf = mix( vCampfireInf, vCampfireInf*vCampfireInf, flickerInf*flickerInf );
    }`;
  return ret;
}

export function grassClusterFrag(){
  //let ret=shaderHeader();
  let ret=`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;

    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying vec3 vFogColor;
    varying float vCampfireInf;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    
    void main(){
    
        vec4 Cd = texture2D(diffuse,vUv);
        
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- --
        // -- Depth Calculations - -- --
        // -- -- -- -- -- -- -- -- -- -- --

        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .002 );
        depth *= depth*.5+.5;
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- -- -- -- --
        // -- Animated Radial Campfire Flicker -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        // Animated Noise UVs of the campefire flicker on the ground
        float timer = (-time.x*.02);
        vec2 animWarpUV = (vUv-.5)*.5;
        animWarpUV += animWarpUV*min(1.0,length(vPos)*.001);
        animWarpUV = vec2(.45,  length(animWarpUV)*.04 - timer );
        vec3 animWarpCd = texture2D(noiseTexture,animWarpUV).rgb * depthFade;
        
        
        // -- -- --
        

        // Match general color ambiance of scene
        Cd.rgb *= .23 + vCampfireInf*.25 * vCd.y;
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lnCd = texture2D(noiseTexture,lnUv).r;
          float lightNoise = lnCd;

          vec3 lights = vec3(0.0, 0.0, 0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)));
          //
          Cd.rgb += Cd.rgb*lights*.6;
        #endif
        
        // -- -- --
        
        // -- -- -- -- -- -- -- -- 
        // -- Campfire Flicker  -- --
        // -- -- -- -- -- -- -- -- -- --

        Cd.rgb += Cd.rgb * (animWarpCd.r*3.0+.20) * vCampfireInf;
        Cd.rgb=  mix( Cd.rgb, vFogColor, depth );
        Cd.a=1.0;
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}






// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- --
    
    



export function campfireVert(){
  let ret=shaderHeader();
  ret+=`
  uniform vec2 time;
  uniform sampler2D noiseTexture;
  uniform sampler2D smoothNoiseTexture;
  uniform sampler2D webNoise;
          
  attribute vec4 color;
    
  varying vec2 vUv;
  varying vec4 vCd;
  varying vec3 vPos;
  varying vec3 vCamPos;
  varying vec3 vN;
  varying float vInf;
  varying vec3 vShift;
  varying float vShiftDist;
  varying float vBBY;
  varying float vInnerFlame;
  
  
  vec3 noiseLayerInf = vec3(0.85, 1.5, 1.15) ;
  vec3 layerPush = vec3(0.0140, 0.35, 2.15) ;
    
  void main(){
    vUv=uv;
    
    vN = normal;
    vCamPos = cameraPosition;
    
    vec3 pos = position;
    
    float facingCam = dot(vN, normalize( vCamPos - pos));
    float camInf = 1.0-abs( facingCam );
    camInf *= camInf*camInf;
    vInnerFlame = camInf;
    
    // Time & base noise influence
    float t = time.x * .085;
    float nYDot = clamp( dot( normal, vec3(.0, 1.0, .0))*1.50, 0.0, 0.9 );
    float inf = clamp( (pos.y-0.5), 0.0, 1.0 ) * nYDot;
    vec3 nInfv = noiseLayerInf * inf;
    
    // Base Shape Noise; Central spiky moving
    vec2 nUv = fract( vUv*.1 + vec2(t*(.3+pos.y*.09)) + pos.yy * inf  );
    vec4 nCd=texture2D( noiseTexture, nUv );
    nCd.y += .2;
    nCd = (nCd-.5)*nInfv.x;
    
    inf *= max(0.0, 1.0-length( pos.xz * nCd.x*inf ) );
    vInf = inf;
    
    nUv = fract( vUv*.1 + vec2(t*.1) * pos.xz*.1  * pos.yy*.1 + nCd.xy*.01 );
    vec4 snCd=texture2D( smoothNoiseTexture, nUv );
    snCd = -(snCd-.5)*nInfv.y;
    snCd.y *= 1.6;
    //snCd *= sin( t );
    
    nUv = fract( vUv + vec2(t*.1 + nCd.x*.01, t*.15 + snCd.z*.01 ));
    vec4 webCd=texture2D( webNoise, nUv );
    webCd = (webCd-.5) * nInfv.z;
    
    vec3 infv = vec3(  inf  );
    infv.xz *= .1  ; 
    vShift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerPush;
    vShift -= webCd.rgb * nInfv.z * infv.z;
    vShift *= vec3(inf, 1.0, inf) * min(1.0,pos.y*pos.y);
    
    vec3 shiftOffset = vShift + vec3( 0.0, length( vShift.xz )*.3, 0.0);
    shiftOffset.xz *= .2;
    pos += shiftOffset;
    vPos = pos;
    vBBY = max( 0.0, pos.y );
    
    vCd = color + color*min(1.0,max(0.0,(vShift.y)*5.0));
    
    vec3 delta = pos-position;
    pos.y += color.r * inf;
    vShiftDist = length( pos*vec3(1.0, .0, 1.0) - position );
    
    
    vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    
  }`;
  return ret;
}
export function campfireFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform sampler2D noiseTexture;
    uniform sampler2D smoothNoiseTexture;
    uniform sampler2D webNoise;
    
    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vN;
    varying float vInf;
    varying vec3 vShift;
    varying float vShiftDist;
    varying float vBBY;
    varying float vInnerFlame;
    
    #define CD_BASE_MID_BLEND .3
    #define CD_MID_TIP_BLEND .85
    const vec3 cd_base = vec3(0.45,.22,0.0);
    const vec3 cd_mid = vec3(0.57, 0.24, 0.0);
    const vec3 cd_bodyCenter = vec3(0.74, 0.4, 0.0);
    const vec3 cd_tip = vec3(0.44,.24,.0);
    
    const float finalColorBoost = .2;
    
    
    void main() {
    
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      
      float t = time.x*1.0 ;
      float inf = vInf*.8+.2;
      
      
      vec3 nInfv = vec3(1.8, 1.2, 2.15) * inf;
      vec3 layerInf = vec3(0.0140, 0.25, -1.15) ;
      
      vec3 shift = layerInf;
      
      
      // Base Shape Noise; Central spiky moving
      vec2 uvSqueeze = vec2( 30.0, 1.0);
      vec2 nUv = fract( vUv*uvSqueeze + vec2(0.0, t*(1.64+vInf*.9 * vUv.x) ) + vShift.yy * inf  );
      vec4 nCd=texture2D( noiseTexture, nUv );
      nCd = (nCd-.4)*nInfv.x;
      
      // Adds a slight haze on the bottom inside of the flame
      nCd.y = clamp( nCd.y + 6.2, 0.0, 1.0 );
      
      
      nUv = fract( vUv + vec2(-t*.2, t*1.5 * vShiftDist) * vShiftDist  * vShift.yy*.01 + nCd.xz*.2 );
      vec4 snCd=texture2D( smoothNoiseTexture, nUv );
      snCd = -(snCd-.5)*nInfv.y;
      
      nUv = fract( (vUv*vec2(0.40,0.25)+vec2(0.0, vBBY))*vec2(.20, 0.300)*uvSqueeze - vec2(t*.20 + nCd.x, t*1.5 + snCd.z - vShiftDist*(vBBY*1.7+.5)*.1 ));
      vec4 webCd=texture2D( webNoise, nUv );
      webCd = (webCd-.5) * .85 * nInfv.z;
      
      vec3 infv = vec3(  inf  );
      infv.xz *= .1 ; 
      
      
      shift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerInf;
      shift -= webCd.rgb * nInfv.z * infv.z;
      shift.xz *= inf;
      
      
      float toCam = clamp( dot( vN, normalize( vCamPos - vPos ) )*0.85, 0.0, 1.0 );
      
      vec3 baseCd = cd_base * (1.0 + nCd.rgb + webCd.rgb + (1.0-vShiftDist)*.5);
      vec3 midCd = cd_mid ;
      vec3 tipCd = cd_tip * (webCd.rgb*.2+.8);
      
      
      outCd.rgb = vec3(shift.xyz) * outCd.rgb;
      float shiftLen = length( shift.xyz )*.5+.45;
      shiftLen = 1.0-vInf * shiftLen;
      
      float cdLen = length(outCd.rgb * shiftLen) ;
      outCd.a = min( cdLen+.1 + shiftLen,  shiftLen );
      
      float blender =  (vBBY+vShiftDist+cdLen)-CD_BASE_MID_BLEND - vShiftDist*toCam;
      blender = clamp( blender * snCd.x  * nCd.y * webCd.z + (1.0-vInnerFlame), 0.0, 1.0 );
      vec3 blendedCd = mix( baseCd, midCd, blender ) ;
      
      blender = min(1.0, max(0.0, vBBY - CD_MID_TIP_BLEND) + vShiftDist * vBBY);
      blender *= blender*blender;
      blendedCd = mix( blendedCd, tipCd, blender ) ;
      
      blender = clamp( toCam*(.8*webCd.x*webCd.y*webCd.z*snCd.x*snCd.y*snCd.z + .1 + vBBY*.3 + (.80-vInnerFlame) ), 0.0, 1.0);
      blendedCd = mix( blendedCd, cd_bodyCenter, blender ) ;
      
      outCd.rgb = blendedCd;
      outCd.rgb = mix( outCd.rgb, normalize(outCd.rgb), finalColorBoost );
      outCd.a *= min(1.0, max( 0.0, vShiftDist + max(0.0,1.0-length(outCd.rgb)) )) * .55;
      outCd.a = max(outCd.a + (1.0-vBBY)*.3, webCd.z*webCd.y*(snCd.x*.5+1.0)+outCd.a );
      outCd.a += toCam*.4*webCd.z*(1.0-vBBY);
      outCd.a *= min(1.0,vCd.g*2.0);
      
      gl_FragColor = outCd;
    }`;
  return ret;
}