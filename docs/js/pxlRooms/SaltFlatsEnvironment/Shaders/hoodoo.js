// This is the shader for the crystals stickin out of the water
//   I wasn't sure what to make for a "plant" in a salty environment
//     With a little mysticism goin on
// I should call it a `Salioa Cluster`
//   But I gotta rename this "salt flats" environment anyway hahaha

import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;


export function hoodooVert(){
  let ret=shaderHeader();
  ret+=`
    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vAlphaAdd;
    
    void main(){
        vUv=uv;
        vCd=color.rgb;
        
        vAlphaAdd = max(0.0, position.y);
        vAlphaAdd = min(1.0, vAlphaAdd*vAlphaAdd*.035 + max(0.0,1.0-vAlphaAdd*1.3 ) );
        vCd.g = 1.0-vCd.g;
        
        vLocalPos = position;
        vN = (modelViewMatrix * vec4(normal, 0.0)).xyz;
        vLocalN =  normal;

        // Shift position to Instance position-
        vec4 pos = vec4( position, 1.0 );
        vPos = pos.xyz;

        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        vWorldPos = gl_Position.xyz;
        
        
    }`;
  return ret;
}

export function hoodooFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D noiseTexture;
    uniform sampler2D cloudTexture;
        
    uniform vec2 time;
    uniform vec3 fogColor;
     
    varying vec2 vUv;
    varying vec3 vWorldPos;
    varying vec3 vPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying float vAlphaAdd;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    void main(){
        float timer = time.x*.01;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .0035 );
        float depthFade = max(0.0, min(1.0, 1.1-depth ));
        depthFade *= depthFade*depthFade;
        
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        vec2 nUv = fract( vec2( (pos.x*2.+pos.z*1.5 + timer )*(1.0+ vCd.g*2.5) , pos.y*vCd.g ) );
        float nCd = texture2D(noiseTexture,nUv).r;
        
        
        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0

          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
            vec3 lightInf= ( max(0.0, dot(normalize(directionalLights[x].direction+nCd*.65), reflect( normalize(vPos), vN ) ))) * directionalLights[x].color;
            lights += lightInf;
          }
          
          lights = lights*(((1.0-vCd.g-vCd.r)*.5+.5)+ .5);
        #endif
        
        lights = mix( vec3(0.0), lights, max( 0.0, nCd*vCd.g*.75 + vCd.r*.5 ) );
        
        // Add blue lighting around some of the crystals
        lights += vec3( 0.3038, 0.3643, 0.679 ) * ( nCd*.2+.2  );
        
        
        
        Cd.rgb += Cd.rgb * lights * (depthFade*.5+.5) ;
        
        Cd.a = 1.0;
        
        gl_FragColor=Cd;
    }`;
  return ret;
}