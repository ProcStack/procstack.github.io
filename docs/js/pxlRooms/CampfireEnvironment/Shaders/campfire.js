// Campfire Flame Shader
//   Written by Kevin Edzenga; 2024,2025
// -- -- -- -- -- -- -- -- -- -- -- --
//
//

import { pxlShaders }  from "../../../pxlNav.module.js";
const shaderHeader = pxlShaders.core.shaderHeader;


export function campfireVert(){
  let ret=shaderHeader();
  ret+=`
  uniform vec2 time;
  uniform sampler2D noiseTexture;
  uniform sampler2D smoothNoiseTexture;
  uniform sampler2D webNoise;
          
  attribute vec4 color;
    
  varying vec2 vUv;
  varying vec4 vCd;
  varying vec3 vPos;
  varying vec3 vCamPos;
  varying vec3 vN;
  varying float vInf;
  varying vec3 vShift;
  varying float vShiftDist;
  varying float vBBY;
  varying float vInnerFlame;
  
  
  vec3 noiseLayerInf = vec3(0.85, 1.5, 1.15) ;
  vec3 layerPush = vec3(0.0140, 0.35, 2.15) ;
    
  void main(){
    vUv=uv;
    
    vN = normal;
    vCamPos = cameraPosition;
    
    vec3 pos = position;
    
    float facingCam = dot(vN, normalize( vCamPos - pos));
    float camInf = 1.0-abs( facingCam );
    camInf *= camInf*camInf;
    vInnerFlame = camInf;
    
    // Time & base noise influence
    float t = time.x * .085;
    float nYDot = clamp( dot( normal, vec3(.0, 1.0, .0))*1.50, 0.0, 0.9 );
    float inf = clamp( (pos.y-0.5), 0.0, 1.0 ) * nYDot;
    vec3 nInfv = noiseLayerInf * inf;
    
    // Base Shape Noise; Central spiky moving
    vec2 nUv = fract( vUv*.1 + vec2(t*(.3+pos.y*.09)) + pos.yy * inf  );
    vec4 nCd=texture2D( noiseTexture, nUv );
    nCd.y += .2;
    nCd = (nCd-.5)*nInfv.x;
    
    inf *= max(0.0, 1.0-length( pos.xz * nCd.x*inf ) );
    vInf = inf;
    
    nUv = fract( vUv*.1 + vec2(t*.1) * pos.xz*.1  * pos.yy*.1 + nCd.xy*.01 );
    vec4 snCd=texture2D( smoothNoiseTexture, nUv );
    snCd = -(snCd-.5)*nInfv.y;
    snCd.y *= 1.6;
    //snCd *= sin( t );
    
    nUv = fract( vUv + vec2(t*.1 + nCd.x*.01, t*.15 + snCd.z*.01 ));
    vec4 webCd=texture2D( webNoise, nUv );
    webCd = (webCd-.5) * nInfv.z;
    
    vec3 infv = vec3(  inf  );
    infv.xz *= .1  ; 
    vShift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerPush;
    vShift -= webCd.rgb * nInfv.z * infv.z;
    vShift *= vec3(inf, 1.0, inf) * min(1.0,pos.y*pos.y);
    
    vec3 shiftOffset = vShift + vec3( 0.0, length( vShift.xz )*.3, 0.0);
    shiftOffset.xz *= .2;
    pos += shiftOffset;
    vPos = pos;
    vBBY = max( 0.0, pos.y );
    
    vCd = color + color*min(1.0,max(0.0,(vShift.y)*5.0));
    
    vec3 delta = pos-position;
    pos.y += color.r * inf;
    vShiftDist = length( pos*vec3(1.0, .0, 1.0) - position );
    
    
    vec4 modelViewPosition=modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix*modelViewPosition;
    
  }`;
  return ret;
}


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --


export function campfireFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform sampler2D noiseTexture;
    uniform sampler2D smoothNoiseTexture;
    uniform sampler2D webNoise;
    
    varying vec2 vUv;
    varying vec4 vCd;
    varying vec3 vPos;
    varying vec3 vCamPos;
    varying vec3 vN;
    varying float vInf;
    varying vec3 vShift;
    varying float vShiftDist;
    varying float vBBY;
    varying float vInnerFlame;
    
    #define CD_BASE_MID_BLEND .3
    #define CD_MID_TIP_BLEND .85
    const vec3 cd_base = vec3(0.45,.22,0.0);
    const vec3 cd_mid = vec3(0.57, 0.24, 0.0);
    const vec3 cd_bodyCenter = vec3(0.74, 0.4, 0.0);
    const vec3 cd_tip = vec3(0.44,.24,.0);
    
    const float finalColorBoost = .2;
    
    
    void main() {
    
      vec4 outCd=vec4(.0, .0, .0, 1.0);
      
      float t = time.x*1.0 ;
      float inf = vInf*.8+.2;
      
      
      vec3 nInfv = vec3(1.8, 1.2, 2.15) * inf;
      vec3 layerInf = vec3(0.0140, 0.25, -1.15) ;
      
      vec3 shift = layerInf;
      
      
      // Base Shape Noise; Central spiky moving
      vec2 uvSqueeze = vec2( 30.0, 1.0);
      vec2 nUv = fract( vUv*uvSqueeze + vec2(0.0, t*(1.64+vInf*.9 * vUv.x) ) + vShift.yy * inf  );
      vec4 nCd=texture2D( noiseTexture, nUv );
      nCd = (nCd-.4)*nInfv.x;
      
      // Adds a slight haze on the bottom inside of the flame
      nCd.y = clamp( nCd.y + 6.2, 0.0, 1.0 );
      
      
      nUv = fract( vUv + vec2(-t*.2, t*1.5 * vShiftDist) * vShiftDist  * vShift.yy*.01 + nCd.xz*.2 );
      vec4 snCd=texture2D( smoothNoiseTexture, nUv );
      snCd = -(snCd-.5)*nInfv.y;
      
      nUv = fract( (vUv*vec2(0.40,0.25)+vec2(0.0, vBBY))*vec2(.20, 0.300)*uvSqueeze - vec2(t*.20 + nCd.x, t*1.5 + snCd.z - vShiftDist*(vBBY*1.7+.5)*.1 ));
      vec4 webCd=texture2D( webNoise, nUv );
      webCd = (webCd-.5) * .85 * nInfv.z;
      
      vec3 infv = vec3(  inf  );
      infv.xz *= .1 ; 
      
      
      shift = (nCd.rgb * nInfv.x + snCd.rgb * nInfv.y ) * layerInf;
      shift -= webCd.rgb * nInfv.z * infv.z;
      shift.xz *= inf;
      
      
      float toCam = clamp( dot( vN, normalize( vCamPos - vPos ) )*0.85, 0.0, 1.0 );
      
      vec3 baseCd = cd_base * (1.0 + nCd.rgb + webCd.rgb + (1.0-vShiftDist)*.5);
      vec3 midCd = cd_mid ;
      vec3 tipCd = cd_tip * (webCd.rgb*.2+.8);
      
      
      outCd.rgb = vec3(shift.xyz) * outCd.rgb;
      float shiftLen = length( shift.xyz )*.5+.45;
      shiftLen = 1.0-vInf * shiftLen;
      
      float cdLen = length(outCd.rgb * shiftLen) ;
      outCd.a = min( cdLen+.1 + shiftLen,  shiftLen );
      
      float blender =  (vBBY+vShiftDist+cdLen)-CD_BASE_MID_BLEND - vShiftDist*toCam;
      blender = clamp( blender * snCd.x  * nCd.y * webCd.z + (1.0-vInnerFlame), 0.0, 1.0 );
      vec3 blendedCd = mix( baseCd, midCd, blender ) ;
      
      blender = min(1.0, max(0.0, vBBY - CD_MID_TIP_BLEND) + vShiftDist * vBBY);
      blender *= blender*blender;
      blendedCd = mix( blendedCd, tipCd, blender ) ;
      
      blender = clamp( toCam*(.8*webCd.x*webCd.y*webCd.z*snCd.x*snCd.y*snCd.z + .1 + vBBY*.3 + (.80-vInnerFlame) ), 0.0, 1.0);
      blendedCd = mix( blendedCd, cd_bodyCenter, blender ) ;
      
      outCd.rgb = blendedCd;
      outCd.rgb = mix( outCd.rgb, normalize(outCd.rgb), finalColorBoost );
      outCd.a *= min(1.0, max( 0.0, vShiftDist + max(0.0,1.0-length(outCd.rgb)) )) * .55;
      outCd.a = max(outCd.a + (1.0-vBBY)*.3, webCd.z*webCd.y*(snCd.x*.5+1.0)+outCd.a );
      outCd.a += toCam*.4*webCd.z*(1.0-vBBY);
      outCd.a *= min(1.0,vCd.g*2.0);
      
      gl_FragColor = outCd;
    }`;
  return ret;
}