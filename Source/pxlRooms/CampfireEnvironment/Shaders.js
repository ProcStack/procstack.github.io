
import {shaderHeader} from "../../js/pxlNav/shaders/core/ShaderHeader.js";
import * as THREE from "../../js/libs/three/three.module.js";

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
    /** Start of THREE Shader Includs **/
    /***********************************/
    ${THREE.ShaderChunk[ "common" ]}
    ${THREE.ShaderChunk[ "skinning_pars_vertex" ]}
    ${THREE.ShaderChunk[ "shadowmap_pars_vertex" ]}
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
      ${THREE.ShaderChunk[ "skinbase_vertex" ]}
      ${THREE.ShaderChunk[ "skinnormal_vertex" ]}
      ${THREE.ShaderChunk[ "skinning_vertex" ]}
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
      
      
      /***********************************/
      /** Start of THREE Shader Includs **/
      /***********************************/
      ${THREE.ShaderChunk[ "worldpos_vertex" ]}
      ${THREE.ShaderChunk[ "shadowmap_vertex" ]}
      /*********************************/
      /** End of THREE Shader Includs **/
      /*********************************/
      
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
    
      /***********************************/
      /** Start of THREE Shader Includs **/
      /***********************************/
    ${THREE.ShaderChunk[ "common" ]}
    ${THREE.ShaderChunk[ "lightmap_pars_fragment" ]}
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
    ${THREE.ShaderChunk[ "packing" ]}
      /*********************************/
      /** End of THREE Shader Includs **/
      /*********************************/
    
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
        return texture2D( pointShadowMap[0], cubeToUV( bd3D, texelSize.y )).rgb;
    }
        
    
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
          lights.rgb += lightInf;
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
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb )*1.5;
      outCd.rgb = mix(outCd.rgb*(1.0-(1.0-outCd.rgb)), outCd.rgb+vec3(1.0, .85, .70) * (outCd.rgb*.5+.5)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;

      
      // Add some ambient color to the back rim of the object
      float d = dot( vec3(1.0, 0.0, 0.0), -vObjN )*.5+.25;
      outCd.rgb = mix( outCd.rgb, vec3(.0, .10, .50), d*lMag);

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
    }`;
  return ret;
}






// -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //





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
        
        vPos = pos.xyz;// mvPos.xyz;
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
        Cd.rgb = mix( baseCd.rgb, Cd.rgb, (centerMass+centerMass)*(1.0-blender) );
        //Cd.rgb = vec3(blender);
        
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