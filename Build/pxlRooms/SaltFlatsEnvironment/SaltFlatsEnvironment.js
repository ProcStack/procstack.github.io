import*as n from"../../../Source/js/libs/three/three.module.js";function E(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}import*as S from"../../../Source/js/libs/three/three.module.js";function _(){let a=E();return a+=`
    
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
      
      
      
      }`,a}function H(){return`
    
    uniform vec2 time;
    uniform sampler2D diffuseTexture;
    uniform sampler2D areTexture;
    uniform sampler2D noiseTexture;
    

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vTan;
    varying vec3 vObjN;
    
    varying float vFlicker;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };
     
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    
    
        
    
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
      

      
      //outCd.rgb*=shadowInf;
      
      lights = vec4(0.0, 0.0, 0.0, 1.0);
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refNorm = reflect(  normalize(vPos),  vN );
          vec3 lightInf= ( max(0.0, dot(directionalLights[shadowIndex].direction,  refNorm ))) * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb )*2.5;
      outCd.rgb = mix(outCd.rgb, outCd.rgb+(outCd.rgb*.5)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g;

      
      // Add some ambient color to the back rim of the object
      float d = dot( vec3(1.0, 0.0, 0.0), -vObjN )*.5+.15;
      outCd.rgb = mix( outCd.rgb, vec3(.05, .18, .35), d);

      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`}function U(){let a=E();return a+=`
    #define USE_INSTANCING

    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    void main(){
        vUv=uv;
        vCd=color.rgb;
        vCd.g = 1.0-vCd.g;
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = ( modelMatrix * vec4(normal, 0.0)).xyz;

        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vPos = position;
        
    }`,a}function A(){let a=E();return a+=`
        
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
        
    uniform vec2 time;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vCd;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    void main(){
        float timer = time.x*.3;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .00065 );
        float depthFade = max(0.0, 1.0-depth);
        depthFade *= depthFade*depthFade;
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        #if NUM_DIR_LIGHTS > 0
          vec2 nUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );
          float lightNoise = texture2D(noiseTexture,nUv).r;

          vec3 lights = vec3(0.0, 0.0, 0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
          Cd.rgb += Cd.rgb*lights;
        #endif
        

        Cd.a=1.0;
        gl_FragColor=Cd;
    }`,a}function F(){return`
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vToCam;
    
    void main(){
        vUv=uv;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vCd=color;
        
        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        #ifdef USE_INSTANCING
          pos = instanceMatrix * pos;
        #endif
        
        vec4 mvPos=modelViewMatrix * pos;
        vPos = mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;
        vWorldPos = gl_Position.xyz;
    }`}function k(){return`
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
    varying float vToCam;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    
    void main(){
        vec4 Cd = vec4( 0.4982, 0.65104, 0.69153, 1.0 );
        Cd.rgb *= vCd;
        
        float d = dot( vN, normalize( vWorldPos ) );
        Cd.rgb*=vec3(d*.2+.8);
        
        Cd.a=1.0-min(1.0,length(vCd)*.2 - (d*0.2-0.1));
        
        float time = time.x*.1;
        vec2 nUv = fract( vec2( (vUv.x + vWorldPos.x+vWorldPos.z + time )*(1.0+ vCd.y*2.5) , vUv.y + vPos.z + time ) );
        nUv.x*=.75;
        vec3 nCd = texture2D(noiseTexture,vUv).rgb;
        
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
          lights = lights*(lightNoise*.5*((1.0-vCd.g)*.5+.5)+.5);
          //
          Cd.rgb += Cd.rgb*lights;
          Cd.a = min(1.0, Cd.a+length(lights)*0.5);
        #endif
        
        Cd.rgb *= (1.0+nCd*.5);
        Cd.a*= clamp( Cd.a * (1.75-min(nCd.r,min(nCd.g,nCd.b))), 0.0, 1.0 );
        
        
        gl_FragColor=Cd;
    }`}import*as x from"../../../Source/js/libs/three/three.module.js";var L=x.Vector2,T=x.Vector3;var W={NONE:0,ERROR:1,WARN:2,INFO:3},j={OFF:0,LOW:1,MEDIUM:2,HIGH:3},Z={verbose:W.NONE,staticCamera:!1,autoCamera:!1,antiAliasing:j.LOW,LoadEnvAssetFile:!1};import*as d from"../../../Source/js/libs/three/three.module.js";import*as C from"../../../Source/js/libs/three/three.module.js";function z(a=!1){let e=`
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
    `;return a&&(e+=`
        ${C.ShaderChunk.common}
        ${C.ShaderChunk.shadowmap_pars_vertex}
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
        
        `,a&&(e+=`
            ${C.ShaderChunk.worldpos_vertex}
            ${C.ShaderChunk.shadowmap_vertex}
          `),e+=`
    }`,e}function O(a,e,t,i,o,s){let r=!1,f=1;a.hasOwnProperty("Specular")&&a.Specular>0&&(r=!0,f=a.Specular);let v=!1;a.PointColor&&(v=!0);let m=!0,h="1.0";a.hasOwnProperty("SurfaceNoise")&&(a.SurfaceNoise%1==0&&(h=a.SurfaceNoise+".0"),h=="0.0"&&(m=!1));let l=`
        `;if(e||(l+="uniform sampler2D dTexture;"),l+=`
    
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
    `,i&&(l+=`
    #if NUM_POINT_LIGHTS > 0
      uniform PointLight pointLights[NUM_POINT_LIGHTS];
    #endif
    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
      `),o&&(l+=`
      
      ${C.ShaderChunk.packing}
      
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
      `),l+=`
    void main(){
      `,v)l+="vec3 vertCd = vCd;";else if(e){let c=D=>D%1==0?D+".0":D+"",N=c(e.r),G=c(e.g),B=c(e.b);l+=`vec3 vertCd = vec3( ${N}, ${G}, ${B} ) ;`}else l+="vec3 vertCd = texture2D(dTexture,vUv).rgb ;";l+=`
        
        vec4 Cd=vec4( vertCd, 1.0 );
        float specular = 0.0;
        `,t&&(l+=`
          float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
          Cd.rgb=  mix( Cd.rgb, fogColor, depth );
          `);let y="",p="",b="";if(m&&(h!="1.0"&&(y="*"+h),l+=`
            float detailMult = (texture2D(detailTexture,vUv*4.0).r)*.5+.5;
            `,p=`+detailMult * (shadowInf*.5+.5) ${y}`,b=`(detailMult+.5) ${y}`),i&&(l+=`
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
                `,r&&(l+=`
                  distFalloff = (dot(vN, normalize(-vPos)) )*distFalloff;
                  specular += distFalloff;
                  `),l+=`
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
          `,r&&(l+=`
            Cd.rgb += vertCd * specular * ${f};
            `)),o){l+=`
          #if NUM_POINT_LIGHT_SHADOWS > 0
            
            float shadowInf = 0.0;
            float detailInf = 0.0;
            float lShadow = 0.0;
            int i = 0;
            `;for(let c=0;c<s;++c)l+=`
                i=${c};
                lShadow = getPointShadow( pointShadowMap[${c}], pointLightShadows[i].shadowMapSize, pointLightShadows[i].shadowBias*.1, pointLightShadows[i].shadowRadius*.5, vPointShadowCoord[i], pointLightShadows[i].shadowCameraNear, pointLightShadows[i].shadowCameraFar );
                shadowInf = max( lShadow, shadowInf);
                `;l+=`
            shadowInf = shadowInf;//*.75+.25;
            Cd.rgb*=shadowInf ${p} ;
            `,m&&(l+=`
              #else
                Cd.rgb*=${b};
              `),l+=`
          #endif
          `}else m&&(l+=`
            Cd.rgb*=${b};
            `);return l+=`
        Cd*=cdMult;
        gl_FragColor=Cd;
    }`,l}var P=class{constructor(e="CampfireEnvironment",t=null,i=null,o=null,s=null,r=null,f=null,v=null,m=null,h=null,l=null){this.roomName=e,this.pxlFile=i,this.pxlUtils=s,this.pxlAnim=o,this.pxlDevice=r,this.pxlEnv=f,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=t+"Assets/",this.mobile=r.mobile,this.sceneFile=this.assetPath+"CampfireEnvironment.fbx",this.animFile=this.assetPath+"Campfire_RabbitDruidA_anim.fbx",this.animClips={},this.animMixer=null,this.envObjName="environmentGround",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new T(0,0,-30),this.camThumbLookAt=new T(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new T(0,0,0),this.cameraAimTarget=new d.Object3D(0,0,0),this.camHoldWarpPos=!0,this.camLocation={},this.pxlCamFOV=this.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new d.Color(.01,.02,.05),this.fogExp=7e-4,this.fog=new d.FogExp2(this.fogColor,this.fogExp),this.userAvatarGroup=new d.Group,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new T(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new L(0,0),this.msRunner=v,this.camera=m,this.autoCamPaths={},this.scene=h,this.lightList={},this.geoList={},this.glassGroup=null,this.glassList=[],this.particleList={},this.portalList={},this.hoverableExists=!1,this.hoverableList=[],this.hoverableObj=null,this.clickableExists=!1,this.clickableList=[],this.clickableObj=null,this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=this.fogColor,this.cloud3dTexture=this.pxlEnv.cloud3dTexture,this.cloud3dTexture.wrapS=d.RepeatWrapping,this.cloud3dTexture.wrapT=d.RepeatWrapping,this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture,this.smoothNoiseTexture.wrapS=d.RepeatWrapping,this.smoothNoiseTexture.wrapT=d.RepeatWrapping}start(){this.booted&&this.resetCamera()}step(){this.runTime.x=this.msRunner.x}stop(){}resize(e,t){}setUserHeight(e=1){this.pxlEnv.pxlCamera.userScale=e}resetCamera(){this.pxlEnv.pxlCamera.setTransform(this.camInitPos,this.camInitLookAt)}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(e,t=null){this.geoList.MainRoomWarp.material.map=e}applyRoomPass(e=null){}getArtistInfo(){return null}setFog(e){}getShaderList(){let e={};return Object.keys(this.textureList).forEach(i=>{e[i]=i}),e}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(e="",t=null){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(t||(t=new T),this.textureList[this.currentShader].uniforms.sliders.value=t,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=e,this.textureList[this.currentShader]}setShader(e,t,i){this.emitterList&&this.emitterList[this.currentShader]&&this.emitterList[this.currentShader].Particles.length>0&&this.emitterList[this.currentShader].Particles.forEach(o=>{let s=o.material;s.vertexShader=t,s.fragmentShader=i,s.needsUpdate=!0}),this.textureList[this.currentShader].vertexShader=t,this.textureList[this.currentShader].fragmentShader=i,this.textureList[this.currentShader].needsUpdate=!0}castRay(e,t){if(!e&&!this.hoverableExists||e&&!this.clickableExists)return;let i=[];if(!e&&this.hoverableExists?i=this.hoverableList:e&&this.clickableExists&&(i=this.clickableList),i.length>0){let s=new L(this.pxlDevice.mouseX/this.pxlDevice.sW*2-1,-this.pxlDevice.mouseY/this.pxlDevice.sH*2+1);this.pxlEnv.pxlCamera.objRaycast.setFromCamera(s,this.pxlEnv.pxlCamera.camera);var o=[];o=this.pxlEnv.pxlCamera.objRaycast.intersectObjects(i)}}toCameraPos(e){if(this.cameraBooted&&this.camLocation.hasOwnProperty(e)){let t=this.mobile?"PositionMobile":"Position",i=this.mobile?"LookAtMobile":"LookAt",o=this.camLocation[e][t],s=this.camLocation[e][i];s||(s=new T(0,0,1),s.addVectors(o,s)),this.pxlEnv.pxlCamera.setTransform(this.camLocation[e][t],this.camLocation[e][i]),this.setUserHeight(this.camInitPos.y)}}fbxPostLoad(){this.toCameraPos("Default");let e=0;if(this.lightList.hasOwnProperty("PointLight")&&(e=this.lightList.PointLight.length),this.geoList.hasOwnProperty("GlowPass")&&this.geoList.GlowPass.length>0&&this.geoList.GlowPass.forEach(s=>{s.layers.set(this.pxlEnv.renderLayerEnum.GLOW)}),this.geoList.Sky_EqRect_Mesh){let s=this.geoList.Sky_EqRect_Mesh.material;s.uniforms&&s.uniforms.envDiffuse&&(s.uniforms.envDiffuse.value=this.scene.renderTarget.depthTexture)}var t=new d.AmbientLight(3158064);this.scene.add(t);let i=Object.keys(this.lightList);if(i.length>0&&i.forEach(s=>{this.lightList[s].forEach(r=>{s=="DirectionalLight"?r.castShadow=!1:s=="PointLight"&&(r.shadow.radius=5,r.shadow.receiveShadow=!0,r.shadow.mapSize.width=512,r.shadow.mapSize.height=512,r.shadow.camera.near=.5,r.shadow.camera.far=35,r.shadow.bias=.025,r.shadow.radius=5)})}),this.shaderGeoList)for(let s in this.shaderGeoList){let r=this.shaderGeoList[s];if(r.userData&&r.userData.Shader=="pxlPrincipled"){let f=d.UniformsUtils.merge([d.UniformsLib.common,d.UniformsLib.lights,d.UniformsLib.shadowmap,{dTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},detailTexture:{type:"t",value:null},cdMult:{type:"f",value:1},fogColor:{type:"c",value:this.scene.fog.color}}]);var o={};o.USE_MAP="";let v={},m=!0,h=r.userData.castShadow==!0||r.userData.receiveShadow==!0,l=!0,y=!1;r.material.map||(y=r.material.color.clone()),r.userData.ShaderParms&&r.userData.ShaderParms!=""&&(v=JSON.parse(r.userData.ShaderParms));let p=this.pxlFile.pxlShaderBuilder(f,z(h),O(v,y,l,m,h,e),o);p.transparent=!1,p.lights=!0,y||(p.uniforms.dTexture.value=r.material.map),p.uniforms.noiseTexture.value=this.cloud3dTexture,p.uniforms.detailTexture.value=this.pxlEnv.detailNoiseTexture,r.material=p,this.textureList[r.name]=p}}}animPostLoad(e,t){}build(){}onMessage(e,t){switch(console.log("Room : "+this.roomName+" - Message Received: "+e),console.log("Message : "+t),e=e.toLowerCase(),e){case"roomwarp":this.roomWarp=t;break;default:case"roommessage":console.log("-- Message Type Not Recognized -- "),console.log("Room : "+this.roomName),console.log("Message Received: "+e),console.log("Message : "+t);break}}};import*as u from"../../../Source/js/libs/three/three.module.js";function M(a,e=120){let t=E();return t+=`
                
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform float rate;
    uniform vec2 pointScale;
    uniform vec3 positionOffset;
    uniform vec2 windDir;
  `,a>0&&(t+=`uniform vec3[${a}] lightPos;`),t+=`
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    varying float vAlpha;
    
    #define PROX ${e.toFixed(3)}
    #define PROX_INV 1.0/${(e*1.8).toFixed(3)}
    
    #define LIGHT_COUNT ${a}
    
    
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

  `,a>1?t+=`
          float lightInf = 1.0;

          for(int i = 0; i < LIGHT_COUNT; i++) {
              vec3 lightVector = normalize(pos - lightPos[i]);
              lightInf = min(lightInf, length(pos - lightPos[i]) *.05 );
          }
          vAlpha*=(1.0-lightInf)*.8+.2;
    `:a==1&&(t+=`
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
    }`,t}function I(){let a=E();return a+=`
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
    }`,a}var R=class{constructor(e=null,t="particles"){this.name=t,this.room=e,this.geometry=null,this.material=null,this.points=null,this.count=-1,this.pscale=new L(0,0),this.position=new T(0,0,0),this.atlasPath="sprite_dustLiquid.png",this.atlasPath="sprite_dustAtlas.png"}build(e=30,t=6,i=4,o=null){o||(o=this.elementDuplicator([[0,.75],[0,.5],[.25,.75],[.25,.5]],4)),this.addToScene(e,t,i,o)}setPosition(...e){e.length===1?this.position=e[0]:this.position=new T(...e),this.points&&this.points.position.copy(this.position)}addToScene(e=30,t=6,i=null,o=4,s=[[0,0]],r=!1){this.count=e,this.pscale.x=t*this.room.pxlEnv.pxlQuality.screenResPerc,this.isInternalTexture=!1;let f=null;r?(f=this.atlasRandomGen,s=o):f=this.atlasArrayPicker,i||(i=this.newMaterial());let v=[],m=[],h=[];for(let N=0;N<e;++N)v.push(0,0,0),m.push(Math.random(),Math.random(),Math.random()*2-1,Math.random()*2-1),h.push(...f(s));let l=new u.Float32BufferAttribute(v,3),y=new u.Float32BufferAttribute(m,4),p=new u.Float32BufferAttribute(h,2),b=new u.BufferGeometry;b.setAttribute("position",l),b.setAttribute("seeds",y),b.setAttribute("atlas",p);let c=new u.Points(b,i);return c.sortParticles=!1,c.frustumCulled=!1,this.room.scene.add(c),c.layers.set(1),c.pBaseScale=t,this.room.geoList[this.name]=c,this.geometry=b,this.material=i,this.points=c,c.position.copy(this.position),c}setUserHeight(e){this.pxlEnv.pxlCamera.userScale=e}atlasRandomGen(e=4,t=2){let i=1/e;return Array.from({length:t}).map(()=>Math.floor(Math.random()*648405.71%e)*i)}atlasRandomList(e=4,t=4,i=2){return Array.from({length:e}).map(o=>this.atlasRandomGen(t,i))}atlasArrayPicker(e){return e[Math.floor(Math.random()*92314.75%e.length)]}dupeArray(e,t){return Array.from({length:t}).fill(e)}elementDuplicator(e,t=4){return e.map(i=>this.dupeArray(i,t)).flat(1)}findLightPositions(){let e=[],t=0;return this.room.lightList.hasOwnProperty("PointLight")&&(t=this.room.lightList.PointLight.length,this.room.lightList.PointLight.forEach(i=>{e.push(i.position.clone())})),e}setAtlasPath(e){this.atlasPath=e,this.isInternalTexture=!1}useInternalAsset(e){this.atlasPath=e,this.isInternalTexture=!0}newMaterial(e=!0){let t=this.findLightPositions(),i={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},lightPos:{value:t}},o=this.room.pxlFile.pxlShaderBuilder(i,M(t.length),I());return o.side=u.DoubleSide,o.transparent=!0,this.isInternalTexture?o.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:u.NearestFilter,minFilter:u.NearestMipmapNearestFilter}):o.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:u.NearestFilter,minFilter:u.NearestMipmapNearestFilter}),o.uniforms.noiseTexture.value=this.room.softNoiseTexture,o.depthTest=!0,o.depthWrite=!1,e&&(this.room.textureList[this.name]=o),o}};import*as g from"../../../Source/js/libs/three/three.module.js";var w=class extends R{constructor(e=null,t="floatingDust"){super(e,t),this.name=t,this.room=e}build(e=1e3,t=7,i=120,o=[0,0,0],s=[0,1],r=[[0,0]],f=!0){let v=super.findLightPositions();s=new g.Vector2(s[0],s[1]),o=new g.Vector3(o[0],o[1],o[2]);let m={atlasTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},time:{type:"f",value:this.room.msRunner},pointScale:{type:"f",value:this.pscale},intensity:{type:"f",value:1},rate:{type:"f",value:.035},positionOffset:{type:"v",value:o},windDir:{type:"v",value:s},lightPos:{value:v}},h=this.room.pxlFile.pxlShaderBuilder(m,M(v.length,i),I());h.side=g.DoubleSide,h.transparent=!0,this.isInternalTexture?h.uniforms.atlasTexture.value=this.room.pxlEnv.getAssetTexture(this.atlasPath,4,{magFilter:g.NearestFilter,minFilter:g.NearestMipmapNearestFilter}):h.uniforms.atlasTexture.value=this.room.pxlUtils.loadTexture(this.atlasPath,4,{magFilter:g.NearestFilter,minFilter:g.NearestMipmapNearestFilter}),h.uniforms.noiseTexture.value=this.room.softNoiseTexture,h.depthTest=!0,h.depthWrite=!1,this.room.textureList[this.name]=h,super.addToScene(e,t,h,4,r,f)}};var V=class extends P{constructor(e="SaltFlatsEnvironment",t=null,i=null,o=null,s=null,r=null,f=null,v=null,m=null,h=null,l=null){super(e,t,i,o,s,r,f,v,m,h,l),this.assetPath=t+"Assets/",this.sceneFile=this.assetPath+"SaltFlatsEnvironment.fbx",this.animInitCycle="Walk",this.animRigName="RabbitDruidASalt",this.animSource={RabbitDruidASalt:{rig:this.assetPath+"RabbitDruidA/RabbitDruidA_rig.fbx",anim:{Walk:this.assetPath+"RabbitDruidA/RabbidDruidA_anim_walk.fbx"},stateConnections:{Walk:["Walk"]}}},this.animMixer=null,this.envObjName="TerraceBasin_geo",this.textureList={},this.particleList={},this.pxlCamFOV=r.mobile?80:40,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=1,this.pxlCamFarClipping=1e4,this.fogColor=new n.Color(.33,.52,.65),this.fogExp=7e-4,this.fog=new n.FogExp2(this.fogColor,this.fogExp),this.perspectiveInstances=160,this.eyeBlinkInf=new n.Vector2(0,0),this.eyeBlinkMinMaxDelay=[1,7],this.eyeBlinkMinMaxRate=[.06,.1],this.eyeBlinkNext=0,this.eyeBlinkAnim=0,this.eyeBlinkRate=0}init(){super.init()}start(){this.booted&&this.resetCamera();let e=this.animRigName;if(this.geoList.hasOwnProperty(e)&&this.geoList.Scripted.hasOwnProperty("Offset_loc")){let t=this.geoList.Scripted.Offset_loc,i=this.geoList[e],o=t.position.clone(),s=t.rotation.clone(),r=t.scale.clone();i.position.set(o.x,o.y,o.z),i.rotation.set(s.x,s.y,s.z),i.scale.set(r.x,r.y,r.z)}this.pxlAnim&&this.pxlAnim.hasClip(e,this.animInitCycle)&&this.pxlAnim.playClip(e,this.animInitCycle),this.geoList.Scripted.hasOwnProperty("pokinStick_geo")&&(this.geoList.Scripted.pokinStick_geo.visible=!1)}step(){super.step(),this.animMixer&&(this.pxlAnim.step(this.animRigName),this.checkEyeBlink());let e=this.geoList.Scripted.MovingEng_grp;if(e){e.position.z=3.6*this.msRunner.x%150;let o=150-0;e.position.z>o&&(e.position.z-=o)}}checkEyeBlink(){if(this.eyeBlinkAnim>0){this.eyeBlinkAnim-=this.eyeBlinkRate;let e=(Math.min(.5,this.eyeBlinkAnim)-Math.max(0,this.eyeBlinkAnim-.5))*2;this.eyeBlinkInf.x=e,this.eyeBlinkAnim<=0&&(this.eyeBlinkNext=this.msRunner.x+this.pxlUtils.randomFloat(this.eyeBlinkMinMaxDelay[0],this.eyeBlinkMinMaxDelay[1]))}else this.eyeBlinkInf.x=0,this.msRunner.x>this.eyeBlinkNext&&(this.eyeBlinkRate=this.pxlUtils.randomFloat(this.eyeBlinkMinMaxRate[0],this.eyeBlinkMinMaxRate[1]),this.eyeBlinkAnim=1);this.textureList.RabbitDruidA.uniforms.eyeBlink.value=this.eyeBlinkInf}fbxPostLoad(){super.fbxPostLoad(),this.geoList.hasOwnProperty("lights")&&this.geoList.lights.forEach(o=>{o.name=="dirLight_key_lit"?o.castShadow=!0:o.castShadow=!1});let e="floatingDust";this.particleList[e]=new w(this,e);let t=this.assetPath+"sprite_dustLiquid.png";this.particleList[e].setAtlasPath(t),this.particleList[e].build(1e3,10,120,[-40,-10,0],[0,5],[[.25,0],[.25,.25]],!1);let i=this.textureList.TerraceBasin_geo;i&&i.uniforms.map&&(i.uniforms.map.minFilter=n.LinearFilter,i.uniforms.map.magFilter=n.LinearFilter,i.uniforms.map.value.encoding=n.sRGBEncoding,i.uniforms.map.value.encoding=n.LinearEncoding),this.booted=!0}animPostLoad(e){if(this.pxlAnim.hasClip(e,this.animInitCycle)){let i=this.pxlAnim.getMixer(e);this.animMixer=i,this.pxlAnim.playClip(e,this.animInitCycle)}else this.animInitCycle=fallback,this.log("No animation cycle '"+this.animInitCycle+"' found; Using '"+fallback+"' instead");let t=this.pxlAnim.getMesh(e);if(t){let i=t.material;i.side=n.DoubleSide;let o=this.setSkinnedMaterial(t,_(),H());this.textureList.RabbitDruidA=o}}setSkinnedMaterial(e,t=null,i=null){let o=n.UniformsUtils.merge([n.UniformsLib.common,n.UniformsLib.lights,{diffuseTexture:{type:"t",value:null},areTexture:{type:"t",value:null},noiseTexture:{type:"t",value:null},eyeBlink:{type:"v2",value:this.eyeBlinkInf},mult:{type:"f",value:1}}]);o.diffuseTexture.value=e.material.map,o.areTexture.value=this.pxlUtils.loadTexture(this.assetPath+"RabbitDruidA/RabbitDruidA_lowRes_ARE.jpg"),o.noiseTexture.value=this.cloud3dTexture,o.noiseTexture.value=this.cloud3dTexture;let s=this.pxlFile.pxlShaderBuilder(o,t,i);return s.skinning=!0,s.side=n.DoubleSide,s.lights=!0,e.material=s,s}build(){let e=this.animRigName,t=this.pxlFile.loadAnimFBX(this,e,this.animSource[e].rig,this.animSource[e].anim,this.animSource[e].stateConnections),i=n.UniformsUtils.merge([n.UniformsLib.lights,{noiseTexture:{type:"t",value:null},fogColor:{type:"c",value:this.fogColor}}]);i.noiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let o=this.pxlFile.pxlShaderBuilder(i,U(),A());o.side=n.FrontSide,o.lights=!0,this.textureList.TerraceBasin_geo=o;let s=n.UniformsUtils.merge([n.UniformsLib.lights,{noiseTexture:{type:"t",value:null}}]);s.noiseTexture.value=this.pxlUtils.loadTexture(this.assetPath+"Noise_UniformWebbing.jpg");let r=this.pxlFile.pxlShaderBuilder(s,F(),k());return r.side=n.DoubleSide,r.lights=!0,this.textureList.SalioaPlant_geo=r,this.pxlFile.loadRoomFBX(this,this.sceneFile,this.envObjName,this.textureList)}};export{V as SaltFlatsEnvironment};
