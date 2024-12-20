import*as e from"../../three.module.js";function s(){return`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `}function l(){let r=s();return r+=`
    uniform float baseCd;
    uniform vec3 light0Cd;
    uniform vec3 light0Rot;
    uniform vec3 light1Cd;
    uniform vec3 light1Rot;
    
    attribute vec3 color;
    attribute vec4 tangent;

    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vView;
    varying vec3 vL0Rot;
    varying vec3 vL1Rot;
    varying vec3 vNormal;
    varying vec4 vTangent;
    varying float vAlpha;
    
    void main(){
        vUv=uv;
        vNormal = normalize( normalMatrix *  normal );
        vL0Rot = normalize( normalMatrix *  light0Rot );
        vL1Rot = normalize( normalMatrix *  light1Rot );
        vTangent = tangent;
        vAlpha=color.r;
        
        vec3 vertCd=vec3(baseCd);
        vec3 flipN= normal*vec3(1,1,-1);
        float lDot= dot(flipN, light0Rot) ;
        vertCd += light0Cd*lDot;
        
        lDot= dot(flipN, light1Rot) ;
        vertCd += light1Cd*lDot;
        vCd=vertCd;
        
        vec4 mvPos=modelViewMatrix * vec4(position, 1.0);
        vView=-mvPos.xyz;
        gl_Position = projectionMatrix*mvPos;
    }`,r}function n(){let r=s();return r+=`
    uniform sampler2D snowNormal;
    uniform float baseCd;
    uniform vec3 light0Cd;
    uniform vec3 light0Rot;
    uniform vec3 light1Cd;
    uniform vec3 light1Rot;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vView;
    varying vec3 vL0Rot;
    varying vec3 vL1Rot;
    varying vec3 vNormal;
    varying vec4 vTangent;
    varying float vAlpha;
    
    

    vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {
        vec2 normalScale = vec2(1.0,1.0);

        vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
        vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
        vec2 st0 = dFdx( vUv.st );
        vec2 st1 = dFdy( vUv.st );

        float scale = sign( st1.t * st0.s - st0.t * st1.s );

        vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
        vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
        vec3 N = normalize( surf_norm );
        mat3 tsn = mat3( S, T, N );

        vec3 mapN = texture2D( snowNormal, vUv ).xyz * 2.0 - 1.0;
        return ( tsn * mapN );
    }
    
    
    void main(){
        vec3 nCd=texture2D(snowNormal,vUv).rgb*2.0-1.0;
        vec3 norm = perturbNormal2Arb( vView, vNormal );
        
        vec3 vertCd=vec3(vCd);
        float lDot= dot(norm, vL0Rot)*.5-.1 ;
        vertCd += light0Cd*lDot;
        
        lDot= dot(norm, vL1Rot)*.5-.5 ;
        vertCd += light1Cd*lDot;

        vec4 Cd=vec4( vertCd, vAlpha );
        float depth = gl_FragCoord.z / gl_FragCoord.w *.0004;
        Cd.rgb=  mix( Cd.rgb, fogColor, depth );

        gl_FragColor=Cd;
    }`,r}var v=class{constructor(t="Void",i=null,o=null,d=null,a=null,c=null,h=null,u=null,m=null,g=null){this.roomName=t,this.pxlFile=o,this.pxlUtils=d,this.pxlDevice=a,this.pxlEnv=c,this.booted=!1,this.initScene=!0,this.active=!0,this.assetPath=i+"Assets/",this.envObjName="VoidBase",this.spiralizerUniforms={},this.textureList={},this.camInitPos=null,this.camInitLookAt=null,this.camThumbPos=new e.Vector3(0,0,-30),this.camThumbLookAt=new e.Vector3(0,35,-1e3),this.cameraBooted=!1,this.cameraPrevPos=new e.Vector3(0,0,0),this.cameraAimTarget=new e.Object3D(0,0,0),this.camHoldWarpPos=!0,this.pxlCamFOV=a.mobile?80:60,this.pxlCamZoom=1,this.pxlCamAspect=1,this.pxlCamNearClipping=5,this.pxlCamFarClipping=1e4,this.fogColor=new e.Color(0,0,0),this.fogExp=7e-4,this.fog=new e.FogExp2(this.fogColor,this.fogExp),this.userAvatarGroup=new e.Group,this.packedTextureMaterial=null,this.coreTextureMaterial=null,this.projectedMaterial=null,this.voidMaterial=null,this.holoMaterial=null,this.aspectRatio=null,this.flag=null,this.initPos=[],this.finalPos=[],this.midPos=new e.Vector3(0,30,-50),this.perspectiveInstances=160,this.startTime=0,this.runTime=new e.Vector2(0,0),this.msRunner=h,this.camera=u,this.autoCamPaths={},this.scene=m,this.geoList={},this.portalList={},this.collidersExist=!1,this.colliderActive=!1,this.colliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderActive=!1,this.antiColliderList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.antiColliderTopActive=!1,this.antiColliderTopList={noAxis:[],11:[],"01":[],10:[],"00":[]},this.roomWarp=[],this.warpPortalTexture=null,this.warpZoneRenderTarget=null,this.worldPosMaterial=null,this.worldPosRenderTarget=null,this.spiralizerPass=null,this.bloomPreState=!1,this.cloud3dTexture=null,this.smoothNoiseTexture=null,this.currentShader=null}init(){this.scene.fog=this.fog,this.scene.background=new e.Color(this.fogColor),this.smoothNoiseTexture=this.pxlEnv.softNoiseTexture}start(){}step(){this.runTime.x=this.msRunner.x}stop(){}resize(t,i){}prepPortalRender(){this.geoList.intro.visible=!1,this.geoList.MainRoomWarp.visible=!1}cleanupPortalRender(){this.geoList.intro.visible=!0,this.geoList.MainRoomWarp.visible=!0}setPortalTexture(t,i=null){this.geoList.MainRoomWarp.material.map=t}applyRoomPass(t=null){}getArtistInfo(){return null}getShaderList(){let t={};return Object.keys(this.textureList).forEach(o=>{t[o]=o}),t}getCurrentShader(){return this.currentShader||Object.keys(this.textureList)[0]}readShader(t=""){return this.currentShader!=null&&this.textureList[this.currentShader].hasOwnProperty("uniforms")&&(this.textureList[this.currentShader].uniforms.sliders.value=new e.Vector3,this.textureList[this.currentShader].needsUpdate=!0),this.currentShader=t,this.textureList[this.currentShader]}setShader(t,i,o){this.textureList[this.currentShader].vertexShader=i,this.textureList[this.currentShader].fragmentShader=o,this.textureList[this.currentShader].needsUpdate=!0}fbxPostLoad(){}build(){this.voidBaseUniforms={};let t=this.pxlFile.pxlShaderBuilder({},l(),n());t.side=e.FrontSide,this.textureList.VoidBase=t;let i=this.pxlFile.loadRoomFBX(this,this.assetPath+"VoidEnvironment.fbx","voidEnv",this.textureList);this.booted=!0}};export{v as VoidEnvironment};
