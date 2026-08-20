// Just a tweak from the main CampfireEnvironment rabbitDruid shader
//   I added more of a blue tint to appear like sky reflections
// I need to implement a shared asset + shader tweak system for animation assets

import {
  ShaderChunk
} from "three";
import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;


export function rabbitDruidVert(){
  let ret=shaderHeader();
  ret+=`
    
    #define USE_TANGENT
    #define USE_ENVMAP
    #define USE_SKINNING

    uniform vec2 time;
    uniform vec2 eyeBlink;
    uniform vec2 inspectBlend;

    attribute vec4 color;

    #ifdef USE_TANGENT
      attribute vec4 tangent;
    #endif


    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec4 vWorldPos;
    varying vec3 vN;
    varying vec3 vObjN;
    
    /***********************************/
    /** Start of THREE Shader Includes **/
    /***********************************/
    ${ShaderChunk[ "common" ]}
    //-- -- --//
    ${ShaderChunk[ "morphtarget_pars_vertex" ]}
    //-- -- --//
    ${ShaderChunk[ "skinning_pars_vertex" ]}
    /*********************************/
    /** End of THREE Shader Includes **/
    /*********************************/
    
    void main(){
      vUv=uv;
      vCd=color;
      
      vec3 transformed = vec3( position );
      vec3 objectNormal = vec3( normal );
      vec3 objectTangent = vec3( tangent.xyz );
      vec3 transformedNormal = objectNormal;
      
      
      /***********************************/
      /** Start of THREE Shader Includes **/
      /***********************************/
      ${ShaderChunk[ "morphnormal_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "morphtarget_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinbase_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinnormal_vertex" ]}
      //-- -- --//
      ${ShaderChunk[ "skinning_vertex" ]}
      /*********************************/
      /** End of THREE Shader Includes **/
      /*********************************/
      
      // TODO : Pullrequest this to Three.js
      objectNormal = normalize(objectNormal);
      objectTangent = normalize( objectTangent );
      
      
      //vTan =  objectTangent;
      vN =  objectNormal;
      vPos = transformed;
      
      //vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
      vN = (modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

      // -- -- --

      vec4 mvPos=modelViewMatrix * vec4(transformed, 1.0);
      gl_Position = projectionMatrix*mvPos;
      
      vWorldPos = gl_Position;
      
      
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
    uniform sampler2D edgeTexture;
    uniform vec2 inspectBlend;
    uniform vec2 inspectRunner;
    uniform vec2 texelRatio;
    

    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec4 vWorldPos;
    varying vec3 vN;
    
    varying float vFlicker;
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };
     
  #if NUM_DIR_LIGHTS > 0
    uniform DirLight directionalLights[NUM_DIR_LIGHTS];
  #endif
    
    
    float biasOne( float val ){
      return 1.0 - (1.0-val) * (1.0-val);
    }
        
    
    void main(){
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      vec4 diffCd=texture2D(diffuseTexture,vUv);
      vec4 areCd=texture2D(areTexture,vUv);
      vec4 edgeCd=texture2D(edgeTexture,vUv);
      outCd = diffCd;
      
      float relTime = inspectRunner.x*.1;
      
      vec2 animUv = vUv*.01;
      animUv.y -= time.x*.1;
      vec4 nCd=texture2D(noiseTexture,animUv);
      
      // -- -- -- //
      
      vec4 snCd = vec4( 1.0 );
      float depth = 1.0;
      vec2 ssuv = vec2( 1.0 );
      
      if( inspectBlend.x > 0.0 ){
        depth = max(0.0, 1.0 - max(0.0,(vWorldPos.z / vWorldPos.w )-.90)*20.0);
        ssuv = (gl_FragCoord.xy / gl_FragCoord.z * .001)*.07;
        snCd = texture2D(noiseTexture,ssuv+vec2(depth,-depth)*.1);
      }
            
      // -- -- -- //

      vec4 lights = vec4(0.0, 0.0, 0.0, 1.0);
      

      
    #if NUM_DIR_LIGHTS > 0
      for(int i = 0; i < NUM_DIR_LIGHTS; i++) {
          int shadowIndex = i;
          vec3 refNorm = reflect(  normalize(vPos),  vN );
          float lightDot = clamp( dot(directionalLights[shadowIndex].direction,  refNorm )*.5+.5, 0.0, 1.0 );
          lightDot *= lightDot;
          vec3 lightInf= lightDot * directionalLights[shadowIndex].color;
          
          lights.rgb += lightInf * (areCd.g*areCd.g+1.0);
      }
      float lMag = length( lights.rgb );
      outCd.rgb = mix(outCd.rgb, outCd.rgb+(outCd.rgb*.35)*lights.rgb, lMag );
      outCd.rgb += lights.rgb * areCd.g*.5;
    #endif
      
      // Add some ambient color to the back rim of the object
      float d = dot( normalize(vec3(0.250, 1.0, 0.50)), -vN )*.7+.3;
      outCd.rgb = mix( outCd.rgb, vec3(.05, .18, .35), d);

      float upSurface = max(0.0, vN.y*.7+.10) * 0.4 * areCd.r;
      float downSurface = max( 0.0, -vN.y*.8+.2 ) * 0.6 * areCd.r;
      
      downSurface = downSurface*downSurface;
      
      vec3 lightEnvCdInf = lights.rgb*.5+.5;
      outCd.rgb = mix( outCd.rgb, vec3(0.4, 0.44, 0.7) * lightEnvCdInf, upSurface );
      outCd.rgb = mix( outCd.rgb, vec3(.7, 0.72, 0.75) * lightEnvCdInf, downSurface );
      outCd.rgb *= areCd.r*0.2 + 0.8;
      
      if( inspectBlend.x > 0.0 ){
        float waveBlend = fract(max(0.0,(ssuv.x-ssuv.y + relTime + lightEnvCdInf.r*.07 + depth*.15 + ((snCd.y-0.5)*snCd.z*0.03) )))*7.0;
        float difBlend = min(1.0,waveBlend);
        float aBlend = min(1.0,max(0.0,waveBlend-2.0)*7.0);
        float dBlend = min(1.0,max(0.0,waveBlend-3.0)*7.0);
        float eBlend = min(1.0,max(0.0,waveBlend-4.0)*7.0);
        float nBlend = min(1.0,max(0.0,waveBlend-5.0)*7.0);
        float lBlend = min(1.0,max(0.0,waveBlend-6.0)*7.0);
        
        // Tighten the gray blending values
        aBlend = biasOne( aBlend*aBlend );
        dBlend = biasOne( dBlend*dBlend );
        eBlend = biasOne( eBlend*eBlend );
        nBlend = biasOne( nBlend*nBlend );
        lBlend = biasOne( lBlend*lBlend );
        
        // Blend base Albedo & A(O)RM
        areCd.r = max(0.0, areCd.r-areCd.b );
        vec3 waveCd = mix( diffCd.xyz, areCd.rgb, dBlend );
        
        // Blend in Edges
        waveCd = mix( waveCd, edgeCd.rgb, eBlend );

        // Blend in Normal
        waveCd = mix( waveCd, abs(vN), nBlend );
        
        // Blend in Lights
        waveCd = mix( waveCd, lights.rgb, lBlend ); 
        
        // Blend in Final Color
        waveCd = mix( outCd.rgb, waveCd, aBlend * min(1.0,max(0.0, inspectBlend.x)*10.0) ); 
        
        outCd.rgb = waveCd;
      }
        
      // -- -- -- //

      gl_FragColor=vec4( outCd.rgb, 1.0 );
    }`;
  return ret;
}