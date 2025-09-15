import { pxlShaders }  from "pxlNav";
const shaderHeader = pxlShaders.core.shaderHeader;

export function creekWaterVert(){
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
    varying vec3 vN;
    
    
    void main(){
        vUv=uv;
        vCd=color;
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
        
        vPos = pos.xyz;
    }`;
  return ret;
}

export function creekWaterFrag(){
  let ret=shaderHeader();
  ret += `
    uniform vec2 time;
    uniform float intensity;
    uniform float rate;
    uniform sampler2D dataTexture;
    uniform sampler2D rippleTexture;
    uniform sampler2D noiseTexture;
    uniform vec3 fogColor;
    
    varying vec2 vUv;
    varying vec3 vCd;
    varying vec3 vPos;
    varying vec3 vN;
    
    
    
    void main(){
        float timer = time.x*0.01;
        vec3 pos = vPos*0.001;
        vec2 uv = vUv;
        vec3 dataCd=texture2D(dataTexture,vUv).rgb;
        
        //uv.x = fract( pos.x*1.0 );
        //uv.y = fract( pos.z*1.4+timer ); 
        uv.x = fract( uv.x*1.0 );
        uv.y = fract( uv.y*1.4+timer ); 
        
        
        vec3 nCd=(texture2D(noiseTexture,uv).rgb-.5);
        uv.x = fract( pos.x-timer*5.1 + nCd.x + nCd.z );
        uv.y = fract( pos.z-timer*2.1  + nCd.y - nCd.x )*2.0; 
        nCd=(texture2D(noiseTexture,uv*.01).rgb);
        vec3 vertCd= nCd;
        
        float alpha = clamp(((nCd.x*nCd.y*nCd.z)*.15)+.85, 0.0, 1.0)  * min(1.0,vCd.r * 2.0 * (dataCd.b*.82+.18));
        vec4 Cd=vec4( .3,.38,.6, alpha );
        Cd.rgb = Cd.rgb*(nCd.g*.65+.4);
        //vec4 rippleCd=texture2D(rippleTexture,vUv);
        gl_FragColor=Cd;
    }`;
  return ret;
}
