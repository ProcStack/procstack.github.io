import*as n from"../../js/three.module.js";function I(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}import*as S from"../../js/three.module.js";function U(l=!1){let e=`
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
    `;return l&&(e+=`
        ${S.ShaderChunk.common}
        ${S.ShaderChunk.shadowmap_pars_vertex}
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
        
        `,l&&(e+=`
            ${S.ShaderChunk.worldpos_vertex}
            ${S.ShaderChunk.shadowmap_vertex}
          `),e+=`
    }`,e}function z(l,e,t,i,a,s){let r=!1,v=1;l.hasOwnProperty("Specular")&&l.Specular>0&&(r=!0,v=l.Specular);let c=!1;l.PointColor&&(c=!0);let u=!0,h="1.0";l.hasOwnProperty("SurfaceNoise")&&(l.SurfaceNoise%1==0&&(h=l.SurfaceNoise+".0"),h=="0.0"&&(u=!1));let o=`
        `;if(e||(o+="uniform sampler2D dTexture;"),o+=`
    
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
    `,i&&(o+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),a&&(o+=`
      
      ${S.ShaderChunk.packing}
      
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
      `),o+=`
    void main(){
      `,c)o+="vec3 vertCd = vCd;";else if(e){let d=L=>L%1==0?L+".0":L+"",C=d(e.r),_=d(e.g),H=d(e.b);o+=`vec3 vertCd = vec3( ${C}, ${_}, ${H} ) ;`}else o+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";o+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,t&&(o+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let p="",m="",g="";if(u&&(h!="1.0"&&(p="*"+h),o+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,m=`+detailMult * (shadowInf*.5+.5) ${p}`,g=`(detailMult+.5) ${p}`),i&&(o+=`
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
                `,r&&(o+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),o+=`
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
          `,r&&(o+=`
            Cd.rgb += vertCd * specular * ${v};
            `)),a){o+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let d=0;d<s;++d)o+=`
                i=${d};
                lShadow = getPointShadow( pointShadowMap[${d}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;o+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${m} ;
            `,u&&(o+=`
              #else
                Cd.rgb*=${g};
              `),o+=`
          #endif
          `}else u&&(o+=`
            Cd.rgb*=${g};
            `);return o+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,o}function O(){return`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${S.ShaderChunk.common}
    ${S.ShaderChunk.shadowmap_pars_vertex}
    
    
    void main(){
        vUv=uv;
        
        vec3 transformed = vec3( position );
        vec3 objectNormal = vec3( normal );
        vec3 transformedNormal = objectNormal;
        
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix*mvPos;
        vPos = mvPos.xyz;
        
        ${S.ShaderChunk.worldpos_vertex}
        ${S.ShaderChunk.shadowmap_vertex}
        
    }`}function F(l){let e=`
        
    uniform sampler2D diffuse;
    uniform sampler2D dirtDiffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D uniformNoise;
    uniform sampler2D crossNoise;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    ${S.ShaderChunk.packing}
    
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
        float timer = time.x*.3;
        vec3 pos = vPos*.0001;
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        //Ease patch noise, dirt / path / woods / grass
        
        pos = vLocalPos*.03;
        uv.x = ( pos.x );
        uv.y = ( pos.z ); 
        
        // UV & Color Noise
        vec3 nCd=(texture2D(noiseTexture,uv).rgb);
        uv = ( uv.yx+nCd.rg*.1 );
        nCd= (nCd+(texture2D(noiseTexture,uv).rgb))*.5;
        
        vec2 detailUv = fract(abs(pos.xz*.2 + nCd.rg*nCd.b*.2));
        float detailMult = (texture2D(dirtDiffuse,detailUv).r)*3.0 * depthFade;
        float dirtNoise = texture2D(uniformNoise,detailUv).r;
        float baseDirtNoise = dirtNoise;
        dirtNoise = dirtNoise*.7+.3;
        
        
        // Dirt Base Color
        vec2 dirtUv = vUv;
        vec4 Cd = texture2D(diffuse,dirtUv) ;
        Cd.rgb *= dirtNoise;
        
        // Dirt Patch Color
        dirtUv = fract(pos.xz);//vUv*20.0);
        dirtNoise = min(1.0, texture2D(uniformNoise,dirtUv).r*.3+.7);
        dirtUv = fract(pos.xz*.1);
        vec3 dirtCd = texture2D(dirtDiffuse,dirtUv).rgb;
        //dirtCd += dirtNoise*.05;
        dirtCd *= detailMult*(1.0-depth) + depth*.65;
        
        
        // Region Blending
        vec2 unUv = uv;
        float uniNoise = texture2D(uniformNoise,unUv).r*depthFade;
        vec2 cnUv = pos.xz*.05;
        float cNoise = texture2D(crossNoise,cnUv).r;
        cNoise = cNoise*cNoise;
        cNoise = mix( cNoise*cNoise, 1.0-(1.0-cNoise)*(1.0-cNoise), cNoise );
        
        Cd.rgb = mix( dirtCd, Cd.rgb, cNoise );
        
        
        vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightVector = normalize(vPos - pointLights[i].position);
            float lightNormDot = clamp(dot(-lightVector, vN), 0.0, 1.0)*.8+.2;
            vec3 lightInf=  pointLights[i].color;
            lights.rgb *= vec3( pointLights[i].color * (pointLights[i].distance * pointLights[i].decay * .001) );
            lights.rgb += lightInf * lightNormDot;
        }
        Cd.rgb *= lights.rgb;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        `;for(let t=0;t<l;++t)e+=`
            i=${t};
            lShadow = getPointShadow( pointShadowMap[${t}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias, pointLightShadows[i].shadowRadius, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
            shadowInf = max( lShadow, shadowInf);
            `;return e+=`
        
        Cd.rgb*=(shadowInf*.7+.3);
        
        pos = vPos;
        lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, reflect( normalize(pos), vN ) ))*.65) * directionalLights[i].color;
            lights.rgb += lightInf*.3;
        }
        Cd.rgb += lights.rgb*baseDirtNoise;
        
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );
        
        gl_FragColor=Cd;
    }`,e}import*as w from"../../js/three.module.js";var E=w.Vector2,b=w.Vector3;var W={NONE:0,ERROR:1,WARN:2,INFO:3},k={OFF:0,LOW:1,MEDIUM:2,HIGH:3},j={verbose:W.NONE,staticCamera:!1,autoCamera:!1,antiAliasing:k.LOW,LoadEnvAssetFile:!1};import*as f from"../../js/three.module.js";import*as P from"../../js/three.module.js";function A(l=!1){let e=`
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
    `;return l&&(e+=`
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
        
        `,l&&(e+=`
            ${P.ShaderChunk.worldpos_vertex}
            ${P.ShaderChunk.shadowmap_vertex}
          `),e+=`
    }`,e}function V(l,e,t,i,a,s){let r=!1,v=1;l.hasOwnProperty("Specular")&&l.Specular>0&&(r=!0,v=l.Specular);let c=!1;l.PointColor&&(c=!0);let u=!0,h="1.0";l.hasOwnProperty("SurfaceNoise")&&(l.SurfaceNoise%1==0&&(h=l.SurfaceNoise+".0"),h=="0.0"&&(u=!1));let o=`
        `;if(e||(o+="uniform sampler2D dTexture;"),o+=`
    
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
    `,i&&(o+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),a&&(o+=`
      
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
      `),o+=`
    void main(){
      `,c)o+="vec3 vertCd = vCd;";else if(e){let d=L=>L%1==0?L+".0":L+"",C=d(e.r),_=d(e.g),H=d(e.b);o+=`vec3 vertCd = vec3( ${C}, ${_}, ${H} ) ;`}else o+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";o+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,t&&(o+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let p="",m="",g="";if(u&&(h!="1.0"&&(p="*"+h),o+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,m=`+detailMult * (shadowInf*.5+.5) ${p}`,g=`(detailMult+.5) ${p}`),i&&(o+=`
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
                `,r&&(o+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),o+=`
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
          `,r&&(o+=`
            Cd.rgb += vertCd * specular * ${v};
            `)),a){o+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let d=0;d<s;++d)o+=`
                i=${d};
                lShadow = getPointShadow( pointShadowMap[${d}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;o+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${m} ;
            `,u&&(o+=`
              #else
                Cd.rgb*=${g};
              `),o+=`
          #endif
          `}else u&&(o+=`
            Cd.rgb*=${g};
            `);return o+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,o}var y=class{constructor(e="CampfireEnvironment",t=null,i=null,a=null,s=null,r=null,v=null,c=null,u=null,h=null,o=null){this.roomName=e,this.pxlFile=i,this.pxlUtils=s,this.pxlAnim=a,this.pxlDevice=r,this.pxlEnv=v,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=t+"Assets/",this.mobile=r.mobile,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.envObjName="environmentGround",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new b(0,0,-30),this.camThumbLookAt=new b(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new b(0,0,0),this.cameraAimTarget=new f.Object3D(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV=this.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new f.Color(.01,.02,.05),this.fogExp=7e-4,this.fog=new f.FogExp2(this.fogColor,this.fogExp),this.userAvatarGroup=new f.Group,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new b(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new E(0,0),this.msRunner=c,this.camera=u,this.autoCamPaths={},this.scene=h,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.particleList={},this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=f.RepeatWrapping,this.cloud3dTexture.wrapT=f.RepeatWrapping,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=f.RepeatWrapping,this.smoothNoiseTexture.wrapT=f.RepeatWrapping}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x}stop(){}resize(e,t){}setUserHeight(e=1){this.pxlEnv.pxlCamera.userScale=e}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,t=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.textureList).forEach(i=>{e[i]=i}),e}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(e="",t=null){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(t||(t=new b),this.textureList[this.currentShader].uniforms.sliders.value=t,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.textureList[this.currentShader]}setShader(e,t,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(a=>{let s=a.material;s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=t,this.textureList[this.currentShader].fragmentShader=i,this.textureList[this.currentShader].needsUpdate=!0}castRay(e,t){if(!e&&!this.hoverableExists||e&&!this.clickableExists)return;let i=[];if(!e&&this.hoverableExists?i=this.hoverableList:e&&this.clickableExists&&(i=this.clickableList),i.length>0){let s=new E(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(s,this.pxlEnv.pxlCamera.camera);var a=[];a=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}}toCameraPos(e){if(this.cameraBooted&&this.camLocation.hasOwnProperty(e)){let t=this.mobile?"PositionMobile":"Position",i=this.mobile?"LookAtMobile":"LookAt",a=this.camLocation[e][t],s=this.camLocation[e][i];s||(s=new b(0,0,1),s.addVectors(a,s)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[e][t],this.camLocation[e][i]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let e=0;if(this.lightList.hasOwnProperty("PointLight")&&(e=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(s=>{s.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let s=this.geoList.Sky_EqRect_Mesh.material;s.uniforms&&s.uniforms.envDiffuse&&(s.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var t=new f.AmbientLight(3158064);this.scene.add(t);let i=Object.keys(this.lightList);if(i.length>0&&i.forEach(s=>{this.lightList[s].forEach(r=>{s=="DirectionalLight"?r.castShadow=!1:s=="PointLight"&&(r.shadow.radius=5,r.shadow.receiveShadow=!0,r.shadow.mapSize.width=512,r.shadow.mapSize.height=512,r.shadow.camera.near=.5,r.shadow.camera.far=35,r.shadow.bias=.025,r.shadow.radius=5)})}),this.shaderGeoList)for(let s in this.shaderGeoList){let r=this.shaderGeoList[s];if(r.userData&&r.userData.Shader=="pxlPrincipled"){let v=f.UniformsUtils.merge([f.UniformsLib.common,f.UniformsLib.lights,f.UniformsLib.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var a={};a.USE_MAP="";let c={},u=!0,h=r.userData.castShadow==!0||r.userData.receiveShadow==!0,o=!0,p=!1;r.material.map||(p=r.material.color.clone()),r.userData.ShaderParms&&r.userData.ShaderParms!=""&&(c=JSON.parse(r.userData.ShaderParms));let m=this.pxlFile.pxlShaderBuilder(v,A(h),V(c,p,o,u,h,e),a);m.transparent=!1,m.lights=!0,p||(m.uniforms.dTexture.value=r.material.map),m.uniforms.noiseTexture.value=this.cloud3dTexture,m.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,r.material=m,this.textureList[r.name]=m}}}animPostLoad(e,t){}build(){}onMessage(e,t){switch(console.log("Room : "+this.roomName+" - Message Received: "+e),console.log("Message : "+t),e=e.toLowerCase(),e){case"roomwarp":this.roomWarp=t;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+e),console.log("Message : "+t);break}}};import*as x from"../../js/three.module.js";function M(l,e=120){let t=I();return t+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,l>0&&(t+=`uniform vec3[${l}] lightPos;`),t+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${l}
    
    
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

  `,l>1?t+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:l==1&&(t+=`
        vec3 lightVector = normalize(pos - lightPos[0]);
        float lightInf = length(pos - lightPos[0]) *.02;
        vAlpha*=(1.0-lightInf)*.8+.2;
    `),t+=`
        vScalar = pScalar ;
        //float pScale = pointScale.x * ((seeds.w+.75)*.5) * pScalar + 1.0;
        float pScale = pointScale.x * (seeds.w*.5+.5)*pScalar + 1.0;
        pScale *= step( .5, atlas.x )*.5+1.;
        //pScale = 10.0;
       
        gl_PointSize = pScale;
        
        pos+=positionOffset;
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`,t}function R(){let l=I();return l+=`
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
    }`,l}var N=class{constructor(e=null,t="particles"){this.name=t,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new E(0,0),this.position=new b(0,0,0),this.atlasPath="sprite_dustLiquid.png",this.atlasPath="sprite_dustAtlas.png"}build(e=30,t=6,i=4,a=null){a||(a=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,t,i,a)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new b(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,t=6,i=null,a=4,s=[[0,0]],r=!1){this.count=e,this.pscale.x=t*this.room.pxlEnv.pxlQuality.screenResPerc,this.isInternalTexture=!1;let v=null;r?(v=this.atlasRandomGen,s=a):v=this.atlasArrayPicker,i||(i=this.newMaterial());let c=[],u=[],h=[];for(let C=0;C<e;++C)c.push(0,0,0),u.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),h.push(...v(s));let o=new x.Float32BufferAttribute(c,3),p=new x.Float32BufferAttribute(u,4),m=new x.Float32BufferAttribute(h,2),g=new x.BufferGeometry;g.setAttribute("position",o),g.setAttribute("seeds",p),g.setAttribute("atlas",m);let d=new x.Points(g,i);return d.sortParticles=!1,d.frustumCulled=!1,this.room.scene.add(d),d.layers.set(1),d.pBaseScale=t,this.room.geoList[this.name]=d,this.geometry=g,this.material=i,this.points=d,d.position.copy(this.position),d}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,t=2){let i=1/e;return Array.from({length:t}).map(()=>Math.floor(Math.random()*648405.71%e)*i)}atlasRandomList(e=4,t=4,i=2){return Array.from({length:e}).map(a=>this.atlasRandomGen(t,i))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,t){return Array.from({length:t}).fill(e)}elementDuplicator(e,t=4){return e.map(i=>this.dupeArray(i,t)).flat(1)}findLightPositions(){let e=[],t=0;return this.room.lightList.hasOwnProperty("PointLight")&&(t=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{e.push(i.position.clone())})),e}setAtlasPath(e){this.atlasPath=e,this.isInternalTexture=!1}useInternalAsset(e){this.atlasPath=e,this.isInternalTexture=!0}newMaterial(e=!0){let t=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:t}},a=this.room.pxlFile.pxlShaderBuilder(i,M(t.length),R());return a.side=x.DoubleSide,a.transparent=!0,this.isInternalTexture?a.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:x.NearestFilter,minFilter:x.NearestMipmapNearestFilter}):a.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:x.NearestFilter,minFilter:x.NearestMipmapNearestFilter}),a.uniforms.noiseTexture.value=this.room.softNoiseTexture,a.depthTest=!0,a.depthWrite=!1,e&&(this.room.textureList[this.name]=a),a}};import*as T from"../../js/three.module.js";var D=class extends N{constructor(e=null,t="floatingDust"){super(e,t),this.name=t,this.room=e}build(e=1e3,t=7,i=120,a=[0,0,0],s=[0,1],r=[[0,0]],v=!0){let c=super.findLightPositions();s=new T.Vector2(s[0],s[1]),a=new T.Vector3(a[0],a[1],a[2]);let u={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:a},windDir:{type:"v",value:s},lightPos:{value:c}},h=this.room.pxlFile.pxlShaderBuilder(u,M(c.length,i),R());h.side=T.DoubleSide,h.transparent=!0,this.isInternalTexture?h.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:T.NearestFilter,minFilter:T.NearestMipmapNearestFilter}):h.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:T.NearestFilter,minFilter:T.NearestMipmapNearestFilter}),h.uniforms.noiseTexture.value=this.room.softNoiseTexture,h.depthTest=!0,h.depthWrite=!1,this.room.textureList[this.name]=h,super.addToScene(e,t,h,4,r,v)}};var G=class extends y{constructor(e="FieldEnvironment",t=null,i=null,a=null,s=null,r=null,v=null,c=null,u=null,h=null,o=null){super(e,t,i,a,s,r,v,c,u,h,o),this.assetPath=t+"Assets/",this.sceneFile=this.assetPath+"FieldEnvironment.fbx",this.envObjName="CabinEnv",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new n.Vector3(0,0,-30),this.camThumbLookAt=new n.Vector3(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new n.Vector3(0,0,0),this.cameraAimTarget=new n.Object3D(0,0,0),this.camHoldWarpPos=!0,this.pxlCamFOV=r.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new n.Color(.01,.02,.05),this.fogExp=7e-4,this.fog=new n.FogExp2(this.fogColor,this.fogExp),this.userAvatarGroup=new n.Group,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new n.Vector3(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new n.Vector2(0,0),this.msRunner=c,this.camera=u,this.autoCamPaths={},this.scene=h,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture}start(){}step(){this.runTime.x=this.msRunner.x}stop(){}resize(e,t){}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,t=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.textureList).forEach(i=>{e[i]=i}),e}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(e=""){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(this.textureList[this.currentShader].uniforms.sliders.value=new n.Vector3,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.textureList[this.currentShader]}setShader(e,t,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(a=>{let s=a.material;s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=t,this.textureList[this.currentShader].fragmentShader=i,this.textureList[this.currentShader].needsUpdate=!0}buildDust(){let e=1200,t=11,i="floatingDust",a=new D(this,i,200);a.useInternalAsset("sprite_dustAtlas.png"),a.build(e,t),this.particleList[i]=a}castRay(e,t){if(!e&&!this.hoverableExists||e&&!this.clickableExists)return;let i=[];if(!e&&this.hoverableExists?i=this.hoverableList:e&&this.clickableExists&&(i=this.clickableList),i.length>0){let s=new n.Vector2(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(s,this.pxlEnv.pxlCamera.camera);var a=[];a=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}}fbxPostLoad(){if(this.buildDust(),this.geoList.ForceField,this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(i=>{i.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let i=this.geoList.Sky_EqRect_Mesh.material;i.uniforms&&i.uniforms.envDiffuse&&(i.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var e=new n.AmbientLight(1052688);if(this.scene.add(e),this.shaderGeoList)for(let i in this.shaderGeoList){let a=this.shaderGeoList[i];if(a.userData&&a.userData.Shader=="pxlPrincipled"){let s=n.UniformsUtils.merge([n.UniformsLib.common,n.UniformsLib.lights,n.UniformsLib.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var t={};t.USE_MAP="";let r={},v=!0,c=a.userData.castShadow==!0||a.userData.receiveShadow==!0,u=!0,h=!1;a.material.map||(h=a.material.color.clone()),a.userData.ShaderParms&&a.userData.ShaderParms!=""&&(r=JSON.parse(a.userData.ShaderParms));let o=0;this.lightList.hasOwnProperty("PointLight")&&this.lightList.PointLight.forEach(m=>{m.castShadow&&o++});let p=this.pxlFile.pxlShaderBuilder(s,U(c),z(r,h,u,v,c,o),t);p.transparent=!1,p.lights=!0,h||(p.uniforms.dTexture.value=a.material.map),p.uniforms.noiseTexture.value=this.cloud3dTexture,p.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,a.material=p,this.textureList[a.name]=p}}this.setUserHeight(15),this.booted=!0}build(){let e=n.UniformsUtils.merge([n.UniformsLib.common,n.UniformsLib.lights,n.UniformsLib.shadowmap,{diffuse:{type:"t",value:null},dirtDiffuse:{type:"t",value:null},mult:{type:"f",value:1},fogColor:{type:"c",value:null},noiseTexture:{type:"t",value:null},uniformNoise:{type:"t",value:null},crossNoise:{type:"t",value:null}}]),t={wrapS:n.RepeatWrapping,wrapT:n.RepeatWrapping};e.fogColor.value=this.scene.fog.color,e.diffuse.value=this.pxlUtils.loadTexture(this.assetPath+"EnvGround_Diffuse.jpg"),e.dirtDiffuse.value=this.pxlUtils.loadTexture(this.assetPath+"Dirt_Diffuse.jpg"),e.noiseTexture.value=this.cloud3dTexture,e.uniformNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg"),e.crossNoise.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_NCross.jpg");let i=this.pxlFile.pxlShaderBuilder(e,O(),F(1));i.lights=!0,e.uniformNoise.value.wrapS=n.RepeatWrapping,e.uniformNoise.value.wrapT=n.RepeatWrapping,e.crossNoise.value.wrapS=n.RepeatWrapping,e.crossNoise.value.wrapT=n.RepeatWrapping,e.dirtDiffuse.value.wrapS=n.RepeatWrapping,e.dirtDiffuse.value.wrapT=n.RepeatWrapping,this.textureList.environmentGround=i;let a=this.pxlFile.loadRoomFBX(this,this.sceneFile,this.envObjName,this.textureList)}};export{G as FieldEnvironment};
