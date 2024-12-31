
import { ShaderChunk } from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;


// -- -- -- -- -- -- -- -- -- -- -- //


export function envGroundVert(){
	//let ret=shaderHeader();
	let ret=`
    
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    
    ${ShaderChunk[ "common" ]}
    ${ShaderChunk[ "shadowmap_pars_vertex" ]}
    
    
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
        
        ${ShaderChunk[ "worldpos_vertex" ]}
        ${ShaderChunk[ "shadowmap_vertex" ]}
        
    }`;
	return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag( pointLightCount ){
	//let ret=shaderHeader();
	let ret=`
        
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
    
    ${ShaderChunk[ "packing" ]}
    
        
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
        float lightTotalInf = 0.0;
        for(int i = 0; i < NUM_POINT_LIGHTS; i++) {
            vec3 lightVector = (vPos - pointLights[i].position);
            float lightNormDot = clamp(dot(-normalize(lightVector), vN), 0.0, 1.0)*.8+.2;
            vec3 lightInf=  pointLights[i].color;
            float pointFalloff = (pointLights[i].distance * pointLights[i].decay * .001);
            lights.rgb *= vec3( pointLights[i].color * pointFalloff );
            lights.rgb += lightInf * lightNormDot;
            
            lightTotalInf = lightNormDot * max( 1.0 - length(lightVector)*.002, 0.0 );
        }
        Cd.rgb *= lights.rgb;
        lightTotalInf = max(0.0, 1.0 - (1.0-lightTotalInf)*(1.0-lightTotalInf)) * .75;
        
        float shadowInf = 0.0;
        float detailInf = 0.0;
        float lShadow = 0.0;
        int i = 0;
        float dp=0.0;
        float shadowRadius=0.0;
        
        pos = vPos;
        lights = vec4(0.0, 0.0, 0.0, 1.0);
        for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
            vec3 lightInf= ( max(0.0, dot(directionalLights[i].direction, reflect( normalize(pos), vN ) ))) * directionalLights[i].color;
            lights.rgb += lightInf;
        }
        Cd.rgb += lights.rgb*baseDirtNoise;
        
        Cd.rgb=  mix( Cd.rgb, fogColor, max(0.0, depth - lightTotalInf) );

        
        gl_FragColor=Cd;
    }`;
	return ret;
}




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
    /** Start of THREE Shader Includs **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    /*********************************/
    /** End of THREE Shader Includs **/
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
        /** Start of THREE Shader Includs **/
        /***********************************/
        ${ShaderChunk[ "worldpos_vertex" ]}
        /*********************************/
        /** End of THREE Shader Includs **/
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
     
    uniform PointLight pointLights[NUM_POINT_LIGHTS];
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

        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .0008 );
        float depthFade = max(0.0, 1.0-depth);
        
        
        // -- -- --

        // -- -- -- -- -- -- -- -- -- -- -- -- 
        // -- Directional Light Influence - -- --
        // -- -- -- -- -- -- -- -- -- -- -- -- -- --
        
        vec3 lights = vec3(0.0, 0.0, 0.0);

        #if NUM_DIR_LIGHTS > 0
          vec3 pos = vPos;
          vec2 lnUv = fract( vec2( (pos.x+pos.z )*(1.0+ vCd.y*2.5) , pos.y*vCd.y ) );

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
              vec3 lightInf= ( max(0.0, dot(directionalLights[x].direction, reflect( normalize(pos), vLocalN ) ))) * directionalLights[x].color;
              lights += lightInf;
          }
          // Add a fake bump map to the lighting
          lights = lights*(((1.0-vCd.g)));
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


        Cd.a=1.0;
        
        // -- -- --
        
        gl_FragColor=Cd;
    }`;
  return ret;
}

