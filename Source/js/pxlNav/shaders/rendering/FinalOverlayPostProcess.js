// TODO : Implement Gamma Correction, 2.2 -> 1.8
// Windows 2.2
// Mobile / Mac 1.8
// float gamma = 2.2
// float gamma = 1.8
// pow(texture(Cd, vUv).rgb, vec3(gamma));

// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 

export function finalOverlayBlendedShader(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D rDiffuse;
    uniform sampler2D bloomTexture;
    uniform sampler2D sceneDepth;
    uniform sampler2D scenePos;
    uniform sampler2D noiseTexture;
    uniform vec2 time;
    uniform vec2 fogMult;
    uniform vec2 proximityMult;
    uniform vec2 lookAtPerc;
    uniform vec2 resUV;
    uniform float ratio;
    uniform float exposure;
    varying vec2 vUv;


    void main() {
      vec4 Cd=texture2D(rDiffuse,vUv);
      vec4 depth=texture2D(sceneDepth,vUv);
      
      vec3 worldPos = texture2D(scenePos,vUv).rgb;
      float wpDist = worldPos.x+worldPos.z*2.0;
      float t = -time.x*.003;
      
      vec2 noiseUV = vec2( ((t*.5+wpDist*.60)), (worldPos.y*.7+t*.25 ));
      vec3 noiseBaseCd = texture2D(noiseTexture,noiseUV).rgb;
      noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
      noiseBaseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
      noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
      noiseBaseCd.b=texture2D(noiseTexture,noiseUV).b;
      float baseDist=noiseBaseCd.r;
      vec3 noiseCd;
      
      /*float dist = 5.0;
      vec2 baseUV=vUv;
      const int runCount=8;
      vec2 runDir[runCount];
      runDir[0]=vec2(1.0, 0.0);
      runDir[1]=vec2(1.0, 1.0);
      runDir[2]=vec2(0.0, 1.0);
      runDir[3]=vec2(-1.0, 1.0);
      runDir[4]=vec2(-1.0, 0.0);
      runDir[5]=vec2(-1.0, -1.0);
      runDir[6]=vec2(0.0, -1.0);
      runDir[7]=vec2(1.0, -1.0);
      vec2 curUV;
      vec3 curCd;
      float curDist;
      vec3 minCd = worldPos;
      float minDist = baseDist;
      for(int s=0; s<runCount; ++s){
        curUV = baseUV+runDir[s]*(resUV*dist);
        curCd = texture2D(scenePos,curUV).rgb;
        wpDist = curCd.x+curCd.z*2.0;
        noiseUV=vec2( ((t*.5+wpDist*.60)), (curCd.y*.7+t*.25 ));
        noiseCd=texture2D(noiseTexture,noiseUV).rgb;
        curDist = noiseCd.r;
        if(curDist>minDist){
          minDist = curDist;
          minCd = curCd;
        }
      }
      
      worldPos= minCd;
      wpDist = worldPos.x+worldPos.z*2.0;
      
      noiseCd.r=baseDist;//minDist;
      noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
      noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
      noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
      noiseCd.b=texture2D(noiseTexture,noiseUV).b;
      noiseCd=mix( noiseCd, noiseBaseCd, step( length(noiseCd), length(noiseBaseCd) ) );
      */
      noiseCd=noiseBaseCd;
      
      float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
      //mult*=max(0.0, 1.0-depth.x) + min(1.0,(1.0-depth.z)*1.8) * max(0.0, (worldPos.y-0.10)*2.0);
      mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x;
      
      vec4 bloomCd=texture2D(bloomTexture,vUv);
      
      Cd.rgb= mix( Cd.rgb*(1.0-depth.z), vec3(mult), mult )-mult*.5;
      
      float cdMult=max(0.0, 1.0-length(Cd.rgb)*.65);
      Cd.rgb+= bloomCd.rgb* cdMult;// * step(blmDepth, bDepth);
      Cd.rgb*=exposure;
      //Cd.rgb=vec3(mult);

            // Proximity Draw Over
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            float proxWarp=max(0., cos(( vUv.x-.5 )*1.6*ratio)*.0013);
            float prox=(depth.x);
            prox= min(1.0, (-prox*.5+.48645+proxWarp)*400.);
            prox=(1.0-prox)*yProxMult*step(.0,prox);
            //prox*=prox;
            vec3 proxCd = (vec3(.6,.6,0.35)*prox)*.75;//*max(0., 1.0-length(Cd.rgb)) ;
            proxCd *= proxCd * proximityMult.x ;
            Cd.rgb+=proxCd;
            
      Cd.a=1.0;
      gl_FragColor = Cd;
    }`;
  
  return retFrag;
}
export function finalOverlayHeavyShader(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform sampler2D scenePos;
        uniform sampler2D noiseTexture;
        uniform vec3 camPos;
        uniform vec2 time;
        uniform vec2 fogMult;
        uniform vec2 proximityMult;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        vec3 fogValue( vec3 worldPos, float time ){
            float wpDist = worldPos.x+worldPos.z*2.0;
            vec2 noiseUV = vec2( ((time*.5+wpDist*.60)), (worldPos.y*.7+time*.25 ));
            vec3 noiseCd = texture2D(noiseTexture,noiseUV).rgb;
            noiseUV=vec2( ((time*.3+wpDist*.55)), (worldPos.x*.5+time*.35 ));
            noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,time)).g;
            noiseUV=vec2( ((time*1.2+wpDist*.83)), (worldPos.y+time*.15  ));
            noiseCd.b=texture2D(noiseTexture,noiseUV).b;
            
            return noiseCd;
        }

        #define PROX_WARP 3.14159265358979*.45
        
        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            float depth=texture2D(sceneDepth,vUv).r;
            
            vec3 worldPos = texture2D(scenePos,vUv).rgb;
            float t = -time.x*.003;
            vec3 baseNoiseCd=fogValue( worldPos, t );
            
            float mult=0.0;
            vec3 noiseCd;
            vec3 curNoiseCd;
            vec3 samplePos;
            float samples=4.3;//+sin(time.x*.001);
            float blender;
            float blenderMax=0.0;
            for( int x=0; x<=3; ++x){
                blender=( float(x+1) / samples );
                samplePos=worldPos*blender;
                curNoiseCd=fogValue( samplePos, t );
                noiseCd=max(noiseCd, curNoiseCd * blender );
                blenderMax+=blender;
            }
            noiseCd += baseNoiseCd*.2;
            mult= noiseCd.x*noiseCd.y*noiseCd.z*1.2;
            //mult*=mult;
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            float fogDap= max(0.0, 1.0-mDepth);
            fogDap=1.0-fogDap*fogDap;
            mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x * fogDap ;
            
            
            Cd.rgb= mix( Cd.rgb, vec3(mult*.7), mult)-mult*.35;
 
            vec3 bloomCd=texture2D(bloomTexture,vUv).rgb;
            Cd.rgb+= bloomCd;
            Cd.rgb*=exposure;
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            dProx*= dProx* yProxMult * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd*mult;
            
            Cd.a=1.0;
            gl_FragColor = Cd;
    }`;
  
  return retFrag;
}

export function finalOverlayShader(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform sampler2D scenePos;
        uniform sampler2D noiseTexture;
        uniform vec2 time;
        uniform vec2 fogMult;
        uniform vec2 proximityMult;
        uniform vec2 lookAtPerc;
        uniform vec2 resUV;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        #define PROX_WARP 3.14159265358979*.45

        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            float depth=texture2D(sceneDepth,vUv).r;
            
            vec3 worldPos = texture2D(scenePos,vUv).rgb;
            float wpDist = worldPos.x+worldPos.z*2.0;
            float t = -time.x*.003;
            
            vec2 noiseUV = vec2( ((t*.5+wpDist*.60)), (worldPos.y*.7+t*.25 ));
            vec3 noiseCd = texture2D(noiseTexture,noiseUV).rgb;
            noiseUV=vec2( ((t*.3+wpDist*.55)), (worldPos.x*.5+t*.35 ));
            noiseCd.g=texture2D(noiseTexture,noiseUV+vec2(0.0,t)).g;
            noiseUV=vec2( ((t*1.2+wpDist*.83)), (worldPos.y+t*.15  ));
            noiseCd.b=texture2D(noiseTexture,noiseUV).b;
            
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            float fogDap= max(0.0, 1.0-mDepth);
            fogDap=1.0-fogDap*fogDap;
            float mult=noiseCd.x*noiseCd.y*noiseCd.z*1.3;
            mult*=max(0.0, (worldPos.y-0.04)*1.65) * fogMult.x * fogDap;
            
            
            Cd.rgb= mix( Cd.rgb, vec3(mult), mult)-mult*.4;
 
            vec3 bloomCd=texture2D(bloomTexture,vUv).rgb;
            Cd.rgb+= bloomCd;
            Cd.rgb*=exposure;
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            float yProxMult= 1.0-min(1.0, max(0.0, (worldPos.y-.5 )*1000.));
            dProx*= dProx* yProxMult * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd*mult;
            
            Cd.a=1.0;
            gl_FragColor = Cd;
        }`;
  
  return retFrag;
}

export function finalOverlaySlimShader(){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
        uniform sampler2D tDiffuse;
        uniform sampler2D rDiffuse;
        uniform sampler2D bloomTexture;
        uniform sampler2D sceneDepth;
        uniform vec2 time;
        uniform vec2 proximityMult;
        uniform vec2 lookAtPerc;
        uniform vec2 resUV;
        uniform float ratio;
        uniform float exposure;
        varying vec2 vUv;

        #define PROX_WARP 3.14159265358979*.4
        #define PI 3.14159265358979
        
        vec3 boostHighs( vec3 Cd ){
            float sat=max(max(Cd.r,Cd.g),Cd.b) - min(min(Cd.r,Cd.g),Cd.b);
            sat=(1.0-sat);
            sat=1.0-sat*sat;
            Cd+=Cd*sat;
            return Cd;
        }
        
        vec3 boostMids( vec3 Cd ){
            float sat=max(max(Cd.r,Cd.g),Cd.b) - min(min(Cd.r,Cd.g),Cd.b);
            sat=sin( sat*PI );
            Cd+=Cd*sat;
            return Cd;
        }
        
        void main() {
            vec4 Cd=texture2D(rDiffuse,vUv);
            vec2 uv=vUv;
            
            vec3 bloomCd=texture2D(bloomTexture,uv).rgb;
            bloomCd= mix( boostHighs(Cd.rgb), bloomCd,  step( 0.01, length( bloomCd )) );
            
            Cd.rgb+= bloomCd;

            // Proximity Draw Over
            float depth=texture2D(sceneDepth,vUv).r;
            
            // Distance Mapping
            float proxWarp= cos(( vUv.x-.5 ) * PROX_WARP*ratio );
            float mDepth= pow( depth, 28.*proxWarp );
            
            // Proximity Draw Over
            float dProx=  ((mDepth-.5)*-10.);
            dProx= max(0.0, (1.0-dProx)*step( 0., dProx));
            dProx*= dProx * proximityMult.x;
            vec3 proxCd = (vec3(.5,.5,.2)*dProx)*.5;
            Cd.rgb+=proxCd;
            Cd.r=1.0;
            Cd.a=1.0;
            gl_FragColor = Cd;
        }`;
  
  return retFrag;
}