// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
export function motionBlurPostProcess(sres,mobileBool){
  // Frag; Composer Shader Pass
  let retFrag=shaderHeader();
  retFrag+=`
    uniform sampler2D tDiffuse;
    uniform sampler2D rDiffuse;
    uniform sampler2D noiseTexture;
    
    uniform float exposure;
    uniform vec2 time;
    uniform vec3 camRotXYZ;
    uniform vec2 blurDirCur;
    uniform vec2 blurDirPrev;
    varying vec2 vUv;

    vec4 getTexture( sampler2D texelToLinearTexture ) {
      return mapTexelToLinear( texture2D( texelToLinearTexture , vUv ) );
    }
    
    vec3 directionalBlur(vec3 origCd, sampler2D tex, vec2 uv, vec2 dir, vec2 deltaDir, float dist, float thresh){
      float perc;
      float curPerc=1.0;
      vec2 curUV;
      float origLength=length(origCd.rgb);
      vec3 curCd;
      vec3 retCd=origCd;
      float delta;
      float threshTrigger=1.0;
      float dropoff;
      float percCurve;
      float d=dot(dir,deltaDir)*.5+.5;
      for(int r=0; r<10; ++r){
        perc=(float(r)/10.0);
        percCurve=perc*.5;
        dropoff=(dist*float(r))*perc*d;
        curUV=uv+normalize(deltaDir*percCurve+dir*(1.0-percCurve))*dropoff;
        //curUV=uv+dir*dropoff;
        curCd=texture2D(tex,curUV).rgb;
        delta=length(curCd.rgb);
        delta=origLength<delta?1.0-perc*perc:0.0;
        //delta=1.0-perc*perc;
        retCd+=curCd.rgb*delta;
        curPerc+=delta;
        
        percCurve*=percCurve;
        curUV=uv-normalize(-deltaDir*percCurve+dir*(1.0-percCurve))*dropoff*.4;
        //curUV=uv-dir*dropoff*.4;
        curCd=texture2D(tex,curUV).rgb;
        delta=length(curCd.rgb);
        delta=origLength<delta?1.0-perc*perc:0.0;
        //delta=1.0-perc*perc;
        retCd+=curCd.rgb*delta;
        curPerc+=delta;
        
      }
      return retCd /curPerc;
    }

    void main() {
      
      
      vec4 bloomCd=getTexture( rDiffuse );
      float noise=sin(time.x*1.8+vUv.x*length(bloomCd.rgb)*12.523+cos(time.x*.4+vUv.y*length(bloomCd.rgb)*2.352)*1.9)*.4+.8;
      noise=1.0-min(1.0, max(0.0, noise*sin(time.x*.4+24.512)*3.0+1.0));
      vec2 noiseUV=vUv*0.1;//+vec2(camRotXYZ.x+time.x*.05,-camRotXYZ.y);
      vec4 noiseCd=texture2D(noiseTexture,noiseUV);
      float blurDist=length(blurDirCur);
      blurDist=min(1.0,blurDist*15.0);
      //blurDist=(1.0-(1.0-blurDist)*(1.0-blurDist));
      vec2 blurDir=normalize(blurDirCur);//+(vUv-.5)*2.0);`;
      if(!mobileBool){ retFrag+=`
        blurDir=normalize( blurDir + (noiseCd.gb-.5)*(dot(blurDir,noiseCd.gb)*.5+.5) );
      `;}

      retFrag+=`
      vec2 deltaDir=normalize(blurDirPrev);
      deltaDir.x+=sin((blurDir.x-deltaDir.x));
      deltaDir.y+=sin((blurDir.y-deltaDir.y));
      
      vec4 bloomAdd=vec4( directionalBlur(bloomCd.rgb, rDiffuse, vUv, blurDir, deltaDir, `+sres.y+`*`+(mobileBool?'3.0':'5.0')+`*(1.5)*blurDist, .5)*(1.0+exposure*.4), 1.0);
      vec4 Cd= bloomAdd* ( 0.50+bloomCd)*exposure;//getTexture( rDiffuse ) + bloomAdd;//+ vec4( 1.0 ) * bloomCd + bloomAdd;
      //Cd.a=bloomAdd.a-bloomCd.a;
      
      Cd.a=1.0;
      gl_FragColor = Cd;
      
    }`;
  
  return retFrag;
}

