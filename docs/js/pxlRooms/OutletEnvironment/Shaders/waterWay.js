import { pxlShaders }  from "../../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

export function waterWayVert(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D noiseTexture;
    
    attribute vec3 color;

    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vN;
    varying vec3 vToCam;
    
    
    void main(){
        vUv=uv;
        vCd=color;
        vN = normal;
        
        float timer = time.x*.01;
        vec3 np = position*.001;
        vec2 nuv = uv;
        nuv.x = fract( np.x+timer );
        nuv.y = fract( np.z+timer ); 
        vec3 nCd=(texture2D(noiseTexture,nuv).rgb-.5)*10.;
        vec4 pos = vec4(position, 1.0);
        
        vec4 mvPos=modelViewMatrix * pos;
        gl_Position = projectionMatrix*mvPos;
        
        vToCam =   cameraPosition - position ;
        vPos = pos.xyz;
        vWorldPos = mvPos.xyz;
    }`;
  return ret;
}

export function waterWayFrag(){
  let ret = `
  // Water surface settings --

  const float coastLinePow = 1.923; 
  const float rippleTimeMult = 0.0176;
  
  const float rippleCrestWidthFreq = 3.192; // Higher is smaller crest peaks
  const float rippleTextureOffsetU = 0.9468;

  const float rippleAmplitudeMult = 1.43; 
  const float rippleFrequencyMult = 0.5564; // Lower is higher frequency
  
  const float whiteCapShift = .1498; 
  const float whiteCapNoise = .541; 

  const float pointToCamRolloff = .005;
  const float rolloffTighten = 2.35;
  
  
// -- -- --

  `;
  ret += shaderHeader();
  ret += `

// -- -- --
        
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D dataTexture;
    uniform sampler2D coastLineTexture;
    uniform sampler2D rippleTexture;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    uniform vec3 sliders;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vWorldPos;
    varying vec3 vN;
    varying vec3 vToCam;

    // -- -- --
    
    
    void main(){
    
        float timer = time.x*0.01;
        vec3 pos = vPos*0.001;
        vec2 uv = vUv;
        
        vec3 dataCd = texture2D( dataTexture, vUv ).rgb;
        
        uv.x = ( pos.x*1.2-timer*.19 );
        uv.y = ( pos.z*1.9+timer*.9 );  
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        
        uv.x = ( pos.x*10.81-timer*17.1 + nCd.x*dataCd.r + nCd.z + dataCd.b );
        uv.y = ( pos.z*7.51+timer*10.1  + nCd.y*1.50 - nCd.x + dataCd.g ); 
        nCd = texture2D( noiseTexture, uv*.0135 ).rgb*.65+.35;
        
        // -- -- --
        
        
        // Sample Coast Line Distance texture
        vec2 sampleOffset = vec2( .001  );
        uv = vUv + (nCd.rg-.5)*.001;
        vec3 rippleUVs= texture2D( coastLineTexture, uv ).rgb *.5 +
                        texture2D( coastLineTexture, uv + sampleOffset ).rgb * .25 + 
                        texture2D( coastLineTexture, uv - sampleOffset ).rgb * .25 ;
                        
        // Ripple & White-cap influence
        rippleUVs.rg = abs(rippleUVs.rg-.5) * rippleAmplitudeMult;
        float coastInf= pow( clamp( (length( rippleUVs.rg )), 0.0, 1.0), coastLinePow);
        float coastInfInv = (1.0-coastInf); 
        
        nCd *= (1.0-coastInf*.5);
        
        // -- -- --
        
        // Calculate Alpha
        float alpha = clamp(((nCd.x*nCd.y*nCd.z)*.15)+.85, 0.0, 1.0) ;
        alpha =  min(1.0,alpha +  (dataCd.r*vCd.b)* min(1.0,vCd.r*2.0)) ;
        vec4 Cd=vec4( .226,.27,.43, alpha );
        
        
        
        // -- -- --
        
        // Generate coastal ripples / white caps
        //   'rUVOffset.y' subtraction changes frequency between the wave crests
        vec2 rUVOffset = vec2( rippleUVs.b * rippleCrestWidthFreq  + rippleTextureOffsetU + rippleUVs.z,
                               -time*rippleTimeMult - rippleUVs.y * ( rippleFrequencyMult )
                          );
        
        rippleUVs.xy = ( rippleUVs.xy*vec2(1.0,.65*(coastInf*.6+.65)) + rUVOffset ) ;
        float rippleInf = texture2D( rippleTexture, rippleUVs.xy ).r * coastInf;
        

        // -- -- --
        
        
        float angleInf = clamp( (1.0-min(1.0, length( vToCam ) * pointToCamRolloff )) * rolloffTighten, 0.0, 1.0 );
        //angleInf *= angleInf;
        float angleIncidence = 1.0 - clamp( dot( normalize( vToCam ), normalize(vN * nCd) )*3.50-.015, 0.0, 1.0)*(1.0-coastInf-nCd.g*.4) * angleInf ;
        
        
        // -- -- --
        
        
        // Color + Coastal Mix
        
        Cd.rgb *= mix(  max(nCd.g*(nCd.r*.5+(1.0-coastInf))*.7*coastInfInv+.3,nCd.b*alpha)*.9*coastInfInv+.1,
                        rippleInf*.35+0.75,
                        min(1.0,(nCd.g*nCd.b)+coastInf+rippleInf*.35 + (1.0-angleIncidence) ) 
                     ); 
                     
        //Cd.rgb += vec3( min( 1.0, max( 0.0, rippleInf-( 0.18 + nCd.x*0.2 ) )*6.0 ));
        Cd.rgb += vec3( min( 1.0, max( 0.0, rippleInf-( whiteCapShift + nCd.x*whiteCapNoise ) )*6.0 ));
        
        
        alpha = clamp( mix(Cd.a*angleIncidence, Cd.a-min(1.0, (1.0-rippleInf)*.035)*(1.0-angleIncidence), (coastInf+rippleInf)  ), 0.0, 1.0);
        alpha *= min(1.0,vCd.r*10.0);
        Cd.a=alpha;
        
        // -- -- --
        
        
        gl_FragColor=Cd;
    }`;
  return ret;
}
