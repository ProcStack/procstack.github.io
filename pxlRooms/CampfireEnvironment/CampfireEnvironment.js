import*as l from"../../js/three.module.js";function g(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}import*as S from"../../js/three.module.js";function A(){let r=g();return r+=`
    
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
    /** Start of THREE Shader Includs **/
    /***********************************/
    ${S.ShaderChunk.common}
    ${S.ShaderChunk.skinning_pars_vertex}
    /*********************************/
    /** End of THREE Shader Includs **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( tangent.xyz );
      vec3 transformedNormal = objectNormal;
      
      
      vec3 blendPos = color.rgb;
      transformed = mix( transformed, blendPos, eyeBlink.x );
      
      
      /***********************************/
      /** Start of THREE Shader Includs **/
      /***********************************/
      ${S.ShaderChunk.skinbase_vertex}
      ${S.ShaderChunk.skinnormal_vertex}
      ${S.ShaderChunk.skinning_vertex}
      /*********************************/
      /** End of THREE Shader Includs **/
      /*********************************/
      
      
      vTan = objectTangent;
      vObjN = objectNormal;
      
      vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
      vLocalPos = transformed;
      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      vPos = mvPos.xyz;
      
      
      }`,r}function H(){return`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    uniform vec2 lightScalar;
    
      /***********************************/
      /** Start of THREE Shader Includs **/
      /***********************************/
    ${S.ShaderChunk.common}
    ${S.ShaderChunk.lightmap_pars_fragment}
      /*********************************/
      /** End of THREE Shader Includs **/
      /*********************************/

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    varying vec3 vObjN;
    
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
      /** Start of THREE Shader Includs **/
      /***********************************/
    ${S.ShaderChunk.packing}
      /*********************************/
      /** End of THREE Shader Includs **/
      /*********************************/
    
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      outCd = diffCd;
      
      vec2 animUv = vUv*.01;
      animUv.y -= time.x*.1;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //

      vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
      for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 lightVector = normalize(vPos - pointLights[shadowIndex].position);
          vec3 lightInf= clamp(dot(-lightVector, vN), 0.0, 1.0) * pointLights[shadowIndex].color;
          lightInf *=  1.0-min(1.0, length(vPos - pointLights[shadowIndex].position) * pointLights[shadowIndex].decay );
          lights.rgb += lightInf*.9;
      }
      //outCd.rgb *= lights.rgb;
      
      float shadowInf = 0.0;
      float detailInf = 0.0;
      float lShadow = 0.0;
      int i = 0;
      
      // Read from Point Lights
      //lShadow = getPointShadow( pointShadowMap[0], pointLightShadows[0].shadowMapSize, pointLightShadows[0].shadowBias, pointLightShadows[0].shadowRadius, vPointShadowCoord[0], pointLightShadows[0].shadowCameraNear, pointLightShadows[0].shadowCameraFar );
      //shadowInf = max( lShadow, shadowInf);

      
      //outCd.rgb*=shadowInf;
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refTan = reflect( normalize(vLocalPos), vTan ) * (dot(normalize(vec3(.1, -0.5, .30)), vObjN));
          refTan = normalize( refTan + vec3(.0, 0.45*(nCd.x*nCd.y*nCd.z*.5+.25) , -0.50+areCd.g) );
          vec3 refNorm = 1.0-reflect(  vObjN, normalize(vPos) );
          refNorm = min( refNorm, refTan );
          //refTan = vec3(1.0, 1.0, 1.0);
          //refNorm = vec3(1.0, 1.0, 1.0);
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction, refTan * refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+lightScalar.x);
      }
      float lMag = length( lights.rgb )*1.5;
      outCd.rgb = mix(outCd.rgb*(1.0-(1.0-outCd.rgb)), outCd.rgb+vec3(1.0, .85, .70) * (outCd.rgb*.5+.5)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g * lightScalar.x;

      
      // Add some ambient color to the back rim of the object
      float d = dot( vec3(1.0, 0.0, 0.0), -vObjN )*.5+.25;
      outCd.rgb = mix( outCd.rgb, vec3(.0, .10, .50), d*lMag);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`}function z(){let r=g();return r+=`
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
    }`,r}function B(){let r=g();return r+=`
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

    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
        
    // Campfire ground glow colors
    const vec3 firePitColor = vec3( .80, .50, .30);
    const vec3 fireGlowColor = vec3( .80, .50, .30);
    
    void main(){
        // Get base colors early to allow for memory reads before the data is required below
        
        // Dirt Base Color
        vec4 Cd = texture2D(diffuse,vUv) ;
        vec3 dataCd = texture2D(dataDiffuse,vUv).rgb ;
        
        vec3 pos = vPos*.0001;
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
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            int shadowIndex = i;
            vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction, reflect( normalize(vPos), vN ) ))*.65) * directionalLights[shadowIndex].color;
            lights += lightInf*.4;
        }
        // Add a fake bump map to the lighting
        lights = lights*baseDirtNoise;
        //
        Cd.rgb += Cd.rgb*lights;
        
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
    }`,r}function O(){let r=g();return r+=`
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
        
    }`,r}function V(){let r=g();return r+=`
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
    }`,r}function W(){return`
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
        vec2 waveUv = vec2( .5, uv.y*.1 + (-time.x*.005));
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

        // -- -- -- -- -- -- -- -- -- --
        // -- Campfire Flicker Mask - -- --
        // -- -- -- -- -- -- -- -- -- -- -- --

        //  Isolate the Point Light influence
        vCampfireInf = 1.0-min(1.0, length( vPos )*.015);
        vCampfireInf = min( 1.0, vCampfireInf*vCampfireInf * 1.5 );
        
    }`}function G(){return`
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
        Cd.rgb *= .4 + vCampfireInf*.25 * vCd.y;
        
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
    }`}function j(){let r=g();return r+=`
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
    vCd = color;
    
    vN = normal;
    vCamPos = cameraPosition;
    
    vec3 pos = position;
    
    float facingCam = dot(vN, normalize( vCamPos - pos));
    float camInf = 1.0-abs( facingCam );
    camInf *= camInf*camInf;
    vInnerFlame = camInf;
    
    
    float t = time.x * .085;
    float inf = clamp( (pos.y-0.5), 0.0, 1.0 )*.9;
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
    
    vec3 delta = pos-position;
    pos.y += color.r * inf;
    vShiftDist = length( pos*vec3(1.0, .0, 1.0) - position );
    
    
    vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    
  }`,r}function $(){let r=g();return r+=`
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
    }`,r}import*as b from"../../js/three.module.js";var w=b.Vector2,T=b.Vector3;var ie={NONE:0,ERROR:1,WARN:2,INFO:3},ae={OFF:0,LOW:1,MEDIUM:2,HIGH:3},le={verbose:ie.NONE,staticCamera:!1,autoCamera:!1,antiAliasing:ae.LOW,LoadEnvAssetFile:!1};import*as p from"../../js/three.module.js";import*as P from"../../js/three.module.js";function Y(r=!1){let e=`
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
    `;return r&&(e+=`
        ${P.ShaderChunk.common}
        ${P.ShaderChunk.shadowmap_pars_vertex}
      `),e+=`
    
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
        
        `,r&&(e+=`
            ${P.ShaderChunk.worldpos_vertex}
            ${P.ShaderChunk.shadowmap_vertex}
          `),e+=`
    }`,e}function X(r,e,i,t,s,o){let a=!1,v=1;r.hasOwnProperty("Specular")&&r.Specular>0&&(a=!0,v=r.Specular);let d=!1;r.PointColor&&(d=!0);let h=!0,u="1.0";r.hasOwnProperty("SurfaceNoise")&&(r.SurfaceNoise%1==0&&(u=r.SurfaceNoise+".0"),u=="0.0"&&(h=!1));let n=`
        `;if(e||(n+="uniform sampler2D dTexture;"),n+=`
    
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
    `,t&&(n+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),s&&(n+=`
      
      ${P.ShaderChunk.packing}
      
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
      `),n+=`
    void main(){
      `,d)n+="vec3 vertCd = vCd;";else if(e){let m=F=>F%1==0?F+".0":F+"",I=m(e.r),ee=m(e.g),te=m(e.b);n+=`vec3 vertCd = vec3( ${I}, ${ee}, ${te} ) ;`}else n+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";n+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,i&&(n+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let y="",c="",f="";if(h&&(u!="1.0"&&(y="*"+u),n+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,c=`+detailMult * (shadowInf*.5+.5) ${y}`,f=`(detailMult+.5) ${y}`),t&&(n+=`
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
                `,a&&(n+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),n+=`
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
          `,a&&(n+=`
            Cd.rgb += vertCd * specular * ${v};
            `)),s){n+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let m=0;m<o;++m)n+=`
                i=${m};
                lShadow = getPointShadow( pointShadowMap[${m}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;n+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${c} ;
            `,h&&(n+=`
              #else
                Cd.rgb*=${f};
              `),n+=`
          #endif
          `}else h&&(n+=`
            Cd.rgb*=${f};
            `);return n+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,n}var M=class{constructor(e="CampfireEnvironment",i=null,t=null,s=null,o=null,a=null,v=null,d=null,h=null,u=null,n=null){this.roomName=e,this.pxlFile=t,this.pxlUtils=o,this.pxlAnim=s,this.pxlDevice=a,this.pxlEnv=v,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=i+"Assets/",this.mobile=a.mobile,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.envObjName="environmentGround",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new T(0,0,-30),this.camThumbLookAt=new T(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new T(0,0,0),this.cameraAimTarget=new p.Object3D(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV=this.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new p.Color(.01,.02,.05),this.fogExp=7e-4,this.fog=new p.FogExp2(this.fogColor,this.fogExp),this.userAvatarGroup=new p.Group,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new T(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new w(0,0),this.msRunner=d,this.camera=h,this.autoCamPaths={},this.scene=u,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.particleList={},this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=p.RepeatWrapping,this.cloud3dTexture.wrapT=p.RepeatWrapping,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=p.RepeatWrapping,this.smoothNoiseTexture.wrapT=p.RepeatWrapping}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x}stop(){}resize(e,i){}setUserHeight(e=1){this.pxlEnv.pxlCamera.userScale=e}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,i=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.textureList).forEach(t=>{e[t]=t}),e}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(e="",i=null){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(i||(i=new T),this.textureList[this.currentShader].uniforms.sliders.value=i,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.textureList[this.currentShader]}setShader(e,i,t){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(s=>{let o=s.material;o.vertexShader=i,o.fragmentShader=t,o.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=i,this.textureList[this.currentShader].fragmentShader=t,this.textureList[this.currentShader].needsUpdate=!0}castRay(e,i){if(!e&&!this.hoverableExists||e&&!this.clickableExists)return;let t=[];if(!e&&this.hoverableExists?t=this.hoverableList:e&&this.clickableExists&&(t=this.clickableList),t.length>0){let o=new w(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(o,this.pxlEnv.pxlCamera.camera);var s=[];s=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(t)}}toCameraPos(e){if(this.cameraBooted&&this.camLocation.hasOwnProperty(e)){let i=this.mobile?"PositionMobile":"Position",t=this.mobile?"LookAtMobile":"LookAt",s=this.camLocation[e][i],o=this.camLocation[e][t];o||(o=new T(0,0,1),o.addVectors(s,o)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[e][i],this.camLocation[e][t]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let e=0;if(this.lightList.hasOwnProperty("PointLight")&&(e=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(o=>{o.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let o=this.geoList.Sky_EqRect_Mesh.material;o.uniforms&&o.uniforms.envDiffuse&&(o.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var i=new p.AmbientLight(3158064);this.scene.add(i);let t=Object.keys(this.lightList);if(t.length>0&&t.forEach(o=>{this.lightList[o].forEach(a=>{o=="DirectionalLight"?a.castShadow=!1:o=="PointLight"&&(a.shadow.radius=5,a.shadow.receiveShadow=!0,a.shadow.mapSize.width=512,a.shadow.mapSize.height=512,a.shadow.camera.near=.5,a.shadow.camera.far=35,a.shadow.bias=.025,a.shadow.radius=5)})}),this.shaderGeoList)for(let o in this.shaderGeoList){let a=this.shaderGeoList[o];if(a.userData&&a.userData.Shader=="pxlPrincipled"){let v=p.UniformsUtils.merge([p.UniformsLib.common,p.UniformsLib.lights,p.UniformsLib.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var s={};s.USE_MAP="";let d={},h=!0,u=a.userData.castShadow==!0||a.userData.receiveShadow==!0,n=!0,y=!1;a.material.map||(y=a.material.color.clone()),a.userData.ShaderParms&&a.userData.ShaderParms!=""&&(d=JSON.parse(a.userData.ShaderParms));let c=this.pxlFile.pxlShaderBuilder(v,Y(u),X(d,y,n,h,u,e),s);c.transparent=!1,c.lights=!0,y||(c.uniforms.dTexture.value=a.material.map),c.uniforms.noiseTexture.value=this.cloud3dTexture,c.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,a.material=c,this.textureList[a.name]=c}}}animPostLoad(e,i){}build(){}onMessage(e,i){switch(console.log("Room : "+this.roomName+" - Message Received: "+e),console.log("Message : "+i),e=e.toLowerCase(),e){case"roomwarp":this.roomWarp=i;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+e),console.log("Message : "+i);break}}};import*as L from"../../js/three.module.js";import*as x from"../../js/three.module.js";function _(r,e=120){let i=g();return i+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,r>0&&(i+=`uniform vec3[${r}] lightPos;`),i+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${r}
    
    
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
        pOff.y+=cameraPosition.y ; 
        pOff.x+=time.x*windDir.x; 
        pOff.z+=time.x*windDir.y; 
        vec3 pos= pOff ;
        
        vec3 noiseCd=texture2D(noiseTexture, sin(pos.xz*.05+seeds.xz+time.x*.1)*.5+.5 ).rgb-.5;
        
        pos.y = (pos.y-.1)*.45;
        pos.y+=sin(seeds.x+seeds.z+noiseCd.r*noiseCd.g+noiseCd.b+time.x*.2)*2.;//+noiseCd.r*noiseCd.g*noiseCd.b*20.;

        pos.xz+=(noiseCd.rg*noiseCd.b)*((seeds.w+.75)*4.);
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*PROX_INV)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

  `,r>1?i+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:r==1&&(i+=`
        vec3 lightVector = normalize(pos - lightPos[0]);
        float lightInf = length(pos - lightPos[0]) *.02;
        vAlpha*=(1.0-lightInf)*.8+.2;
    `),i+=`
        vScalar = pScalar ;
        //float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        float pScale = pointScale.x * (seeds.w*.5+.5)*pScalar + 1.0;
        pScale *= step( .5, atlas.x )*.5+1.;
        //pScale = 10.0;
       
        gl_PointSize = pScale;
        
        pos+=positionOffset;
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,i}function k(){let r=g();return r+=`
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
    }`,r}var E=class{constructor(e=null,i="particles"){this.name=i,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new w(0,0),this.position=new T(0,0,0),this.atlasPath="sprite_dustLiquid.png",this.atlasPath="sprite_dustAtlas.png"}build(e=30,i=6,t=4,s=null){s||(s=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,i,t,s)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new T(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,i=6,t=null,s=4,o=[[0,0]],a=!1){this.count=e,this.pscale.x=i*this.room.pxlEnv.pxlQuality.screenResPerc,this.isInternalTexture=!1;let v=null;a?(v=this.atlasRandomGen,o=s):v=this.atlasArrayPicker,t||(t=this.newMaterial());let d=[],h=[],u=[];for(let I=0;I<e;++I)d.push(0,0,0),h.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),u.push(...v(o));let n=new x.Float32BufferAttribute(d,3),y=new x.Float32BufferAttribute(h,4),c=new x.Float32BufferAttribute(u,2),f=new x.BufferGeometry;f.setAttribute("position",n),f.setAttribute("seeds",y),f.setAttribute("atlas",c);let m=new x.Points(f,t);return m.sortParticles=!1,m.frustumCulled=!1,this.room.scene.add(m),m.layers.set(1),m.pBaseScale=i,this.room.geoList[this.name]=m,this.geometry=f,this.material=t,this.points=m,m.position.copy(this.position),m}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,i=2){let t=1/e;return Array.from({length:i}).map(()=>Math.floor(Math.random()*648405.71%e)*t)}atlasRandomList(e=4,i=4,t=2){return Array.from({length:e}).map(s=>this.atlasRandomGen(i,t))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,i){return Array.from({length:i}).fill(e)}elementDuplicator(e,i=4){return e.map(t=>this.dupeArray(t,i)).flat(1)}findLightPositions(){let e=[],i=0;return this.room.lightList.hasOwnProperty("PointLight")&&(i=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(t=>{e.push(t.position.clone())})),e}setAtlasPath(e){this.atlasPath=e,this.isInternalTexture=!1}useInternalAsset(e){this.atlasPath=e,this.isInternalTexture=!0}newMaterial(e=!0){let i=this.findLightPositions(),t={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:i}},s=this.room.pxlFile.pxlShaderBuilder(t,_(i.length),k());return s.side=x.DoubleSide,s.transparent=!0,this.isInternalTexture?s.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:x.NearestFilter,minFilter:x.NearestMipmapNearestFilter}):s.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:x.NearestFilter,minFilter:x.NearestMipmapNearestFilter}),s.uniforms.noiseTexture.value=this.room.softNoiseTexture,s.depthTest=!0,s.depthWrite=!1,e&&(this.room.textureList[this.name]=s),s}};function q(r=[8.7,8.4]){let e=g();return e+=` 
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    
    #define PROX 6.0
    
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
     
    
    // Attempted de-Magic-num-ification
    float baseSpread = 110.0;
    float innerBulster = -0.110;
    float smokeDensity = 0.25;
        
    void main(){
        vAtlas=atlas;
        
        float rot=seeds.z+time.x*(seeds.z*2.);
        vRot=vec2( sin(rot), cos(rot) );
        
        vec3 pOff=vec3(seeds.z, seeds.y, seeds.w) ;
        
        vec2 sinUV=abs(sin(pOff.xz*.5+seeds.zw+time.x*.1)*.5+.5);
        vec3 noiseCd=texture2D(noiseTexture, sinUV ).rgb*4.5 + 0.50;
        
        float t=time.x*rate;
        float shiftY= mod( t+t*seeds.x+seeds.z*24.0+noiseCd.r+noiseCd.b+(seeds.x+seeds.y)*2.0, 14.0);
        float life = max(0.0,(shiftY-seeds.x)*0.07142857142857142)*.9+.2;
        float alphaMult = (1.0-(1.0-life)*(1.0-life))*smokeDensity;
        
        pOff.y=shiftY*seeds.y*life - (1.0-life);
        
        pOff.y=(pOff.y*.5)+shiftY; 
        vec3 pos= pOff ;
        

        
        // Magic numbers!  Boo!!
        float tightenTip = max(0.0,life-.63)*1.3;
        tightenTip = 1.0 - (1.0-tightenTip) * (1.0-tightenTip);
        //tightenTip *= tightenTip;
        float tightenBase = max(0.0, (1.0-life)*innerBulster);
        float tightenMid = max(0.0, 0.60 - tightenTip - tightenBase - seeds.x*.2);
        
        baseSpread = baseSpread*tightenBase + baseSpread*tightenMid + baseSpread*tightenTip ;
        
        pos.xz=(noiseCd.rg*noiseCd.b)*seeds.w*baseSpread*(life*(seeds.zy*.6));
        
        // Wind -- Forces
        //   Magic numbers, yarb!
        float windInf = life * life * (life*.5+.5);
        vec2 windDir = vec2( windInf*${r[0]}, windInf * ${r[1]} );
        pos.xz += windDir + vec2(-.5, .0);
        
        
        // Alpha with cam distance inf
        float pScalar = 1.0-min( 1.0, (length(pos-cameraPosition )*0.004) );
        pScalar=1.0-(pScalar*pScalar);
        float aMult = min(1.0, pScalar*2.0);
        vAlpha = (seeds.x*.5+.7) * aMult;

        
        // Alpha from gettin' old
        vAlpha=(1.0-life)*min(1.0,alphaMult);
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.5+vec2(seeds.y,pos.y)).rgb ;
        pos.xz=(pos.xz*seeds.xy+doubleCd.rb*10.0)*min(1.0,life+seeds.y);
        
        
        // Draw size, particle scale
        pScalar = 1.0-(1.0-pScalar)*.75*(1.0-pScalar);
        float pScale = pointScale.x * seeds.w * 0.006 * pScalar + (200.0+125.0*life*pScalar)*(1.0-pScalar);
        pScale += 150.0*(clamp(-(pScalar-.45)*10.0,0.0,1.0));

        gl_PointSize = pScale;
        
        // Brightness multiplier
        vBrightness = 1.0-tightenMid*.81 - tightenTip + tightenBase;
        float originDelta = length(pos)*(-innerBulster);
        vBrightness *= max(0.0, 1.0-originDelta * life * 0.807);
        
        
        // Add Particle System position
        pos += modelMatrix[3].xyz;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        
    }`,e}function Z(){let r=g();return r+=`
        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha;
        vec4 Cd=vec4( dustCd.rgb, alpha );

        Cd.rgb *= vec3(vBrightness);
        
        gl_FragColor=Cd;
    }`,r}var R=class extends E{constructor(e=null,i="billowSmoke"){super(e,i),this.name=i,this.room=e}build(e=50,i=56,t=4,s=null){s||(s=[...super.dupeArray([0,0],4),...super.dupeArray([.25,0],4),...super.dupeArray([.5,0],2),...super.dupeArray([.5,.25],2),...super.dupeArray([.5,.5],2),...super.dupeArray([.5,.75],2),...super.dupeArray([.75,.75],4),...super.dupeArray([.75,.25],3),...super.dupeArray([.75,.25],3)]);let o={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:.8},rate:{type:"f",value:2.85}},a=this.room.pxlFile.pxlShaderBuilder(o,q(),Z());a.side=L.DoubleSide,a.transparent=!0,a.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:L.NearestFilter,minFilter:L.NearestMipmapNearestFilter}),a.uniforms.noiseTexture.value=this.room.softNoiseTexture,a.depthTest=!0,a.depthWrite=!1,this.room.textureList[this.name]=a,super.addToScene(e,i,a,t,s)}};import*as D from"../../js/three.module.js";function Q(r=[-.13,.15]){let e=g();return e+=`
        
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 sliders;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec3 vCd;
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    #define PROX 60.0
    #define LAND 10.0
    
    const vec2 windForce = vec2(${r[0]}, ${r[1]});
    
    const vec3 earlyCd = vec3( 1.0, 0.7, .1 );
    const vec3 oldCd = vec3( 0.634, 0.50, 0.20 );
    const float emberSpread = 15.0;
    const float emberFadeDistance = 0.04;
    const float baseSpeed = 0.47;
    
    
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
        
        float rateShift = (baseSpeed*(seeds.x*.4+.6));
        float t=time.x*rate*rateShift;
        float shiftY= mod( t+t*seeds.x+seeds.z*8.0+noiseCd.r*10.20*(seeds.y*2.0-1.0)+noiseCd.b+(-seeds.x+seeds.y)*4.0, 10.0);
        float life = 1.0-max(0.0,abs(shiftY-seeds.x*.1)*(1.0-(seeds.x*1.0)) );
        life = 1.0-((shiftY*.001-seeds.x*.2) );
        
        pOff.y=shiftY*seeds.y;
        
        pOff.y=(pOff.y)+shiftY; 
        vec3 pos= pOff ;
        

        pos.xz=(noiseCd.rg*noiseCd.r)*(seeds.x)*emberSpread*(life*seeds.zy*(seeds.w*4.0-2.));
        
        float yPush = ( life * (life*.5+.5))  * min(1.0,pos.y*.12) * 5.8;
        pos.xz += windForce * yPush * pos.y + vec2(1.25, .0);
        pos.y += yPush;
        
        
        
        float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.017)  );
        float aMult = min(1.0, pScalar*3.0);
        vAlpha = (seeds.x*.15+.7) * aMult;

        
        vAlpha=max(0.0, life*life-seeds.z-seeds.z);
        float distMult = ( length( pos )*emberFadeDistance );
        distMult = 1.0 - ( distMult * distMult );
        vAlpha *= distMult;
        
        vec3 doubleCd=texture2D(noiseTexture, sinUV+pos.xz*.3+vec2(0.0,pos.y)).rgb*2.0 ;
        pos.xz+=doubleCd.rb ;
        
        
        float pScale = pointScale.x * seeds.w * pScalar + 2.0;
        
        gl_PointSize = pScale;
        
        pos += modelMatrix[3].xyz - vec3(1.0, 0.50, 0.2);
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
        
        float cdAge = clamp( 1.0 - life, 0.0, 1.0);
    
    //earlyCd, oldCd
        vCd = mix( earlyCd, oldCd, cdAge )  ;
        vBrightness = 1.45;
        
    } `,e}function J(){let r=g();return r+=`        
    uniform sampler2D atlasTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec3 vCd;
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vAlpha;
    varying float vBrightness;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = (uv-.5)*.85;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 dustCd=texture2D(atlasTexture,rotUV);
        float alpha=dustCd.a*vAlpha;
        
        //dustCd.rgb = 1.0 - (1.0 - dustCd.rgb ) * vBrightness;
        dustCd.rgb *= vBrightness;
        
        vec4 Cd=vec4( dustCd.rgb * vCd * vBrightness, alpha );
        gl_FragColor=Cd;
    }`,r}var N=class extends E{constructor(e=null,i="emberWisps"){super(e,i),this.name=i,this.room=e}build(e=30,i=6,t=4,s=null){s||(s=super.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4));let o={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:5.5}},a=this.room.pxlFile.pxlShaderBuilder(o,Q(),J());a.side=D.DoubleSide,a.transparent=!0,a.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:D.NearestFilter,minFilter:D.NearestMipmapNearestFilter}),a.uniforms.noiseTexture.value=this.room.softNoiseTexture,a.depthTest=!0,a.depthWrite=!1,this.room.textureList[this.name]=a,super.addToScene(e,i,a,t,s)}};import*as C from"../../js/three.module.js";var U=class extends E{constructor(e=null,i="floatingDust"){super(e,i),this.name=i,this.room=e}build(e=1e3,i=7,t=120,s=[0,0,0],o=[0,1],a=[[0,0]],v=!0){let d=super.findLightPositions();o=new C.Vector2(o[0],o[1]),s=new C.Vector3(s[0],s[1],s[2]);let h={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:s},windDir:{type:"v",value:o},lightPos:{value:d}},u=this.room.pxlFile.pxlShaderBuilder(h,_(d.length,t),k());u.side=C.DoubleSide,u.transparent=!0,this.isInternalTexture?u.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:C.NearestFilter,minFilter:C.NearestMipmapNearestFilter}):u.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:C.NearestFilter,minFilter:C.NearestMipmapNearestFilter}),u.uniforms.noiseTexture.value=this.room.softNoiseTexture,u.depthTest=!0,u.depthWrite=!1,this.room.textureList[this.name]=u,super.addToScene(e,i,u,4,a,v)}};var K=class extends M{constructor(e="CampfireEnvironment",i=null,t=null,s=null,o=null,a=null,v=null,d=null,h=null,u=null,n=null){super(e,i,t,s,o,a,v,d,h,u,n),this.assetPath=i+"Assets/",this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animInitCycle="Sit_Idle",this.animRigName="RabbitDruidA",this.animSource={RabbitDruidA:{rig:this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",anim:{Sit_Idle:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_idle.fbx",Sit_Stoke:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_stoke.fbx",Sit_Look:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_sit_look.fbx"},stateConnections:{Sit_Idle:[...Array(6).fill("Sit_Idle"),...Array(6).fill("Sit_Stoke"),...Array(4).fill("Sit_Look")],Sit_Stoke:["Sit_Idle"],Sit_Look:["Sit_Idle"]}}},this.animMixer=null,this.envObjName="environmentGround",this.textureList={},this.particleList={},this.pxlCamFOV=a.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=1,this.pxlCamFarClipping=1e4,this.fogColor=new l.Color(.01,.02,.05),this.fogExp=7e-4,this.fog=new l.FogExp2(this.fogColor,this.fogExp),this.perspectiveInstances=160,this.eyeBlinkInf=new l.Vector2(0,0),this.eyeBlinkMinMaxDelay=[1,7],this.eyeBlinkMinMaxRate=[.06,.1],this.eyeBlinkNext=0,this.eyeBlinkAnim=0,this.eyeBlinkRate=0}init(){super.init()}start(){this.booted&&this.resetCamera();let e=this.animRigName;if(this.geoList.hasOwnProperty(e)&&this.geoList.Scripted.hasOwnProperty("Offset_loc")){let i=this.geoList.Scripted.Offset_loc,t=this.geoList[e],s=i.position.clone(),o=i.rotation.clone(),a=i.scale.clone()}this.pxlAnim&&this.pxlAnim.hasClip(e,this.animInitCycle)&&this.pxlAnim.playClip(e,this.animInitCycle),this.geoList.hasOwnProperty("Scripted")&&this.geoList.Scripted.hasOwnProperty("pokinStick_geo")&&(this.geoList.Scripted.pokinStick_geo.visible=!0)}step(){super.step(),this.animMixer&&(this.pxlAnim.step(this.animRigName),this.checkEyeBlink())}checkEyeBlink(){if(this.eyeBlinkAnim>0){this.eyeBlinkAnim-=this.eyeBlinkRate;let e=Math.max(0,(Math.min(.5,this.eyeBlinkAnim)-Math.max(0,this.eyeBlinkAnim-.5))*2);this.eyeBlinkInf.x=e,this.eyeBlinkAnim<=0&&(this.eyeBlinkNext=this.msRunner.x+this.pxlUtils.randomFloat(this.eyeBlinkMinMaxDelay[0],this.eyeBlinkMinMaxDelay[1]))}else this.eyeBlinkInf.x=0,this.msRunner.x>this.eyeBlinkNext&&(this.eyeBlinkRate=this.pxlUtils.randomFloat(this.eyeBlinkMinMaxRate[0],this.eyeBlinkMinMaxRate[1]),this.eyeBlinkAnim=1);this.textureList.RabbitDruidA.uniforms.eyeBlink.value=this.eyeBlinkInf}fbxPostLoad(){super.fbxPostLoad();let i=this.geoList.Scripted.ParticleSource_loc.position,t=Object.keys(this.geoList.InstanceObjects),s=t.length;if(t=t.filter(c=>c.includes("campfireLog")),t.length>0)for(let c=0;c<t.length;++c){let f=this.geoList.InstanceObjects[t[c]];f&&(f.renderOrder=c+1)}let o=this.geoList.Scripted.CampfireFlame_geo;o&&(o.renderOrder=s);let a=this.geoList.Scripted.Moon_geo;a&&(a.material.map.wrapS=l.ClampToEdgeWrapping,a.material.map.wrapT=l.ClampToEdgeWrapping,a.material.map.minFilter=l.NearestFilter,a.material.map.magFilter=l.NearestFilter);let v="billowSmoke",d=new R(this,v);this.particleList[v]=d;let h=this.assetPath+"sprite_dustLiquid.png";d.setAtlasPath(h),d.setPosition(i);let u=[...d.dupeArray([0,0],4),...d.dupeArray([.25,0],4),...d.dupeArray([.5,0],2),...d.dupeArray([.5,.25],2),...d.dupeArray([.5,.5],2),...d.dupeArray([.5,.75],2),...d.dupeArray([.75,.75],4),...d.dupeArray([.75,.25],3),...d.dupeArray([.75,.25],3)];d.build(600,56,4,u),v="emberWisps";let n=new N(this,v);this.particleList[v]=n,h=this.assetPath+"sprite_dustLiquid.png",n.setAtlasPath(h),n.setPosition(i);let y=n.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4);if(n.build(30,5,4,y),v="floatingDust",this.particleList[v]=new U(this,v),h=this.assetPath+"sprite_dustFloaters.png",this.particleList[v].setAtlasPath(h),this.particleList[v].build(1e3,7),this.geoList.hasOwnProperty("InstanceObjects")){for(let c in this.geoList.InstanceObjects)if(c.includes("campfireLog")){let f=null;if(this.textureList.hasOwnProperty("CampfireLogs"))f=this.textureList.CampfireLogs;else{let m={baseTexture:{type:"t",value:null},midEmberTexture:{type:"t",value:null},heavyEmberTexture:{type:"t",value:null},dataTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.msRunner},intensity:{type:"f",value:1},rate:{type:"f",value:.04}};f=this.pxlFile.pxlShaderBuilder(m,O(),V()),f.uniforms.baseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_charred.jpg",4,{magFilter:l.LinearFilter,minFilter:l.NearestMipmapLinearFilter}),f.uniforms.midEmberTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_charredEmberGlow.jpg",4,{magFilter:l.LinearFilter,minFilter:l.NearestMipmapLinearFilter}),f.uniforms.heavyEmberTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_diffuse_emberGlow.jpg",4,{magFilter:l.LinearFilter,minFilter:l.NearestMipmapLinearFilter}),f.uniforms.dataTexture.value=this.pxlUtils.loadTexture(this.assetPath+"log_dataMask.jpg",4,{magFilter:l.LinearFilter,minFilter:l.NearestMipmapLinearFilter}),f.uniforms.noiseTexture.value=this.smoothNoiseTexture,this.textureList.CampfireLogs=f}this.geoList.InstanceObjects[c].material=f}}this.setUserHeight(this.camInitPos.y),this.booted=!0}animPostLoad(e){if(this.pxlAnim.hasClip(e,this.animInitCycle)){let t=this.pxlAnim.getMixer(e);this.animMixer=t,this.pxlAnim.playClip(e,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");let i=this.pxlAnim.getMesh(e);if(i){let t=i.material;t.side=l.DoubleSide;let s=this.setSkinnedMaterial(i,A(),H());this.textureList.RabbitDruidA=s}if(this.geoList.Scripted.hasOwnProperty("pokinStick_geo")){let t=this.geoList.Scripted.pokinStick_geo.material;t.shininess=0}}setSkinnedMaterial(e,i=null,t=null){let s=l.UniformsUtils.merge([l.UniformsLib.common,l.UniformsLib.lights,{diffuseTexture:{type:"t",value:null},areTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},eyeBlink:{type:"v2",value:this.eyeBlinkInf},lightScalar:{type:"v2",value:null}}]);s.diffuseTexture.value=e.material.map,s.areTexture.value=this.pxlUtils.loadTexture(this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg"),s.noiseTexture.value=this.cloud3dTexture,s.lightScalar.value=this.pxlDevice.lightShift;let o=this.pxlFile.pxlShaderBuilder(s,i,t);return o.skinning=!0,o.side=l.DoubleSide,o.lights=!0,e.material=o,o}build(){let e=this.animRigName,i=this.pxlFile.loadAnimFBX(this,e,this.animSource[e].rig,this.animSource[e].anim,this.animSource[e].stateConnections),t=l.UniformsUtils.merge([l.UniformsLib.common,l.UniformsLib.lights,l.UniformsLib.shadowmap,{diffuse:{type:"t",value:null},dirtDiffuse:{type:"t",value:null},crackedDirtDiffuse:{type:"t",value:null},hillDiffuse:{type:"t",value:null},mossDiffuse:{type:"t",value:null},dataDiffuse:{type:"t",value:null},fogColor:{type:"c",value:null},noiseTexture:{type:"t",value:null},uniformNoise:{type:"t",value:null}}]);t.fogColor.value=this.fogColor,t.diffuse.value=this.pxlUtils.loadTexture(this.assetPath+"EnvGround_Diffuse.jpg"),t.dirtDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"Dirt_Diffuse.jpg"),t.crackedDirtDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"CrackedDirtGround_diffuse.jpg"),t.hillDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"RockLayerDirtHill_diffuse.jpg"),t.mossDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"MossyGround_diffuse.jpg"),t.dataDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"EnvGround_dataMask.jpg"),t.noiseTexture.value=this.cloud3dTexture,t.uniformNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let s=this.pxlFile.pxlShaderBuilder(t,z(),B(4));s.lights=!0,s.transparent=!1,t.uniformNoise.value.wrapS=l.RepeatWrapping,t.uniformNoise.value.wrapT=l.RepeatWrapping,t.dirtDiffuse.value.wrapS=l.RepeatWrapping,t.dirtDiffuse.value.wrapT=l.RepeatWrapping,t.crackedDirtDiffuse.value.wrapS=l.RepeatWrapping,t.crackedDirtDiffuse.value.wrapT=l.RepeatWrapping,t.hillDiffuse.value.wrapS=l.RepeatWrapping,t.hillDiffuse.value.wrapT=l.RepeatWrapping,t.mossDiffuse.value.wrapS=l.RepeatWrapping,t.mossDiffuse.value.wrapT=l.RepeatWrapping,t.dataDiffuse.value.wrapS=l.ClampToEdgeWrapping,t.dataDiffuse.value.wrapT=l.ClampToEdgeWrapping;let o=l.UniformsUtils.merge([{noiseTexture:{type:"t",value:null},smoothNoiseTexture:{type:"t",value:null},webNoise:{type:"t",value:null}}]);o.noiseTexture.value=this.cloud3dTexture,o.smoothNoiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg"),o.webNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_NCross.jpg");let a=this.pxlFile.pxlShaderBuilder(o,j(),$());a.side=l.DoubleSide,a.transparent=!0,a.lights=!1,a.depthTest=!1,a.depthWrite=!1,a.blending=l.AdditiveBlending;let v=l.UniformsUtils.merge([l.UniformsLib.lights,{noiseTexture:{type:"t",value:null},fogColor:{type:"c",value:this.fogColor}}]);v.noiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let d=this.pxlFile.pxlShaderBuilder(v,W(),G());return d.side=l.FrontSide,d.lights=!0,d.transparent=!1,this.textureList.EnvironmentGround_geo=s,this.textureList.CampfireFlame_geo=a,this.textureList.grassClusterA_geo=d,this.pxlFile.loadRoomFBX(this,this.sceneFile,this.envObjName,this.textureList)}};export{K as CampfireEnvironment};
