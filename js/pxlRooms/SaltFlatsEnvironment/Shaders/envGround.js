import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;


export function envGroundVert( useNormalMap=true ){
  let ret=shaderHeader();
  ret+=`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        
    #define USE_INSTANCING

    attribute vec4 color;

    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    
    varying mat3 vTBN;

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
        vPos = mvPos.xyz;
    `;
    if( useNormalMap ) {
      ret+=`
        // -- -- -- -- -- -- -- --
        // -- TBN Matrix Calc  -- --
        // -- -- -- -- -- -- -- -- -- --
        // Create TBN Matrix for normal mapping
        vec3 tangent =  normalize( mat3(modelMatrix) * vec3(1.0, 0.0, 0.0) );
        vec3 bitangent = ( cross( vLocalN, tangent ) );
        vTBN = mat3( tangent, bitangent, vLocalN );
        `;
    }
    ret+=`
    }`;
  return ret;
}

// Shadow Map Code Used From Three.JS; shadowmap_pars_fragment
export function envGroundFrag( useNormalMap=true ){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D diffuse;
    uniform sampler2D normalTexture;
    uniform sampler2D noiseTexture;
    uniform sampler2D smoothNoiseTexture;
    uniform sampler2D cloudTexture;
    
        
    uniform vec2 time;
    uniform vec3 fogColor;
     
    varying vec2 vUv;
    varying vec3 vPos;
    varying vec3 vLocalPos;
    varying vec3 vN;
    varying vec3 vLocalN;
    varying vec3 vCd;
    varying mat3 vTBN;
    
    
    struct DirLight {
      vec3 color;
      vec3 direction;
    };

    #if NUM_DIR_LIGHTS > 0
      uniform DirLight directionalLights[NUM_DIR_LIGHTS];
    #endif
    
    #define EPSILON 0.00001
    
    void main(){
        float timer = time.x*.02;
        vec3 pos = vPos*0.006666666666666; // Loop point is 150 units
        vec2 uv = vUv;
        float depth = min(1.0, gl_FragCoord.z / gl_FragCoord.w * .0035 );
        float depthFade = max(0.0, min(1.0, 1.1-depth ));
        depthFade *= depthFade*depthFade;
        
        float plantGrowth = mix( 0.0, pow(vCd.z, 1.0 / 2.2), step( EPSILON, vCd.z));
        float crystalGlow = clamp( max(0.0,plantGrowth*plantGrowth*.8-.15), 0.0,1.0);
        
        // Initial color read
        vec4 Cd = texture2D(diffuse,vUv);
        
        vec2 nUv = fract( vec2( (pos.x*2.+pos.z*1.5 +  + timer*crystalGlow )*(1.0+ vCd.g*2.5) , pos.y*vCd.g ) );
        float nCd = texture2D(noiseTexture,nUv).r;
        nUv = fract( vec2( (pos.x*1.+pos.z*.5 +  + timer + plantGrowth )*(1.0+ vCd.g*2.5) , pos.y*vCd.g ) );
        vec3 snCd = texture2D(smoothNoiseTexture,nUv).rgb;
        vec3 snCdFit = texture2D(smoothNoiseTexture,nUv).rgb*2.0-1.0;
        
        float glowInf = vCd.g*vCd.g*vCd.g;
        
        
        // -- -- -- -- -- -- -- --
        // -- Normal Map Calc - -- --
        // -- -- -- -- -- -- -- -- -- --

      `;
      if( useNormalMap ) {
        ret+=`
        // Normal map enabled
        //vec3 nMap = (texture2D(normalTexture, vUv).xyz-.5) * 1.5 + .5;
        vec3 nMap = (texture2D(normalTexture, vUv).xyz);// * 2.0 - 1.0;
        //nMap = normalize( vTBN * nMap );
        `;
      } else {
        ret+=`
        // Normal map not enabled
        //   Using normals with some noise perturbation
        vec3 nMap = normalize( vLocalN + snCdFit * 0.25 );
        `;
      }
      ret+=`

        // -- -- -- -- -- -- -- --
        // -- Direction Lights  -- --
        // -- -- -- -- -- -- -- -- -- --

        vec3 lights = vec3(0.0, 0.0, 0.0);
        #if NUM_DIR_LIGHTS > 0
          vec3 lightInf=vec3(0.0);
          for(int x = 0; x < NUM_DIR_LIGHTS; ++x) {
            vec3 lightInf=  max(0.0, dot(normalize(directionalLights[x].direction), reflect( -normalize(vPos), nMap ) )*.5+.5) * directionalLights[x].color;
            //lightInf= ( max(0.0, dot(normalize(directionalLights[x].direction),  nMap ))) * directionalLights[x].color;
            lights += lightInf;
            //lights = max(lights, vec3(dot( directionalLights[x].direction, nMap)*.5+.5 + plantGrowth));
          }
        #endif
        
        // Lighting Influence based on surface normals
        float facingDown = dot( normalize( nMap ), vec3(0.0,1.0,0.0) ) *.45 +.55;
        facingDown = clamp( (facingDown*facingDown)*1.4, 0.0, 1.0 );
        
        //lights = mix( vec3(0.0), lights*facingDown, max( 0.0, nCd*glowInf*.75 + vCd.r*.5 ) );
        
        // Add blue lighting around some of the crystals
        crystalGlow *= (nCd);
        lights = (lights + vec3( 0.4038, 0.643, 0.779 ) * (crystalGlow * nCd  )) * 1.5;
        
        float scalar = sin( plantGrowth*2. + time.x*1.5 + vPos.z*.2 + vPos.x*.2 - vPos.y*.2*glowInf + snCd.x*2. + snCd.y*4. + snCd.z*5. )+1.0;
        scalar = cos( scalar*2. - time.x*.3 + vPos.y*glowInf + snCd.x + snCd.y + snCd.z )*0.5 + scalar;
        scalar =  clamp( (scalar*scalar*snCd.r+.5) * plantGrowth * 2. * glowInf, 0.0, 1.0);
        Cd.rgb += vec3( 0.4038, 0.643, 0.779 ) * ( (depthFade*.85)* scalar) ;
        
        gl_FragColor=Cd;
    }`;
  return ret;
}
