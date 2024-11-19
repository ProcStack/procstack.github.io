// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Snow Shaders                                         //
/////////////////////////////////////////////////////////

export function snowConfettiVert( mobile=false ){
    let colCalcs=!mobile;
  let ret=shaderHeader();
  ret+=`
    uniform vec2 time;
    uniform float rate;
    uniform float pointScale;
    uniform float confetti;
    
    attribute vec4 seeds;
    attribute vec2 atlas;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    
    #define PROX 1000.0
    #define LAND 50.0
    
    float colDetect( vec2 pos, vec2 pt, vec2 n1, vec2 n2 ){
        vec2 ref=pos-pt;
        float ret = step( dot( ref, n1 ), 0.0 );
        ret *= step( dot( ref, n2 ), 0.0 );
        
        return ret;
    }
    
    
    void main(){
        vAtlas=atlas;
        
        float confettiRotScalar = vAtlas.y < .5 ? 5. : 1.;
        float confettiScalar = vAtlas.y < .5 ? 2.*confetti : 1.;
        float rot=seeds.z+time.x*(seeds.z*2.)*confettiRotScalar;
        vRot=vec2( sin(rot), cos(rot) );
        
        float t=time.x*rate;
        
        vec3 pOff=vec3( seeds.x, 0, seeds.y)* vec3(PROX);
        
        // Loop point positions based on camera location
        float yFract=fract(t+seeds.z);
        pOff.y=PROX-yFract*(PROX+LAND); 
        vec3 pos= pOff ;
        vec2 camXZ=cameraPosition.xz;
        pos.xz= mod( pos.xz-camXZ, PROX) + camXZ - PROX*.5;
        
        
        // Get some roof tops working
        //   Using opposing points and 2 normals in xz space to determin y floor position
        // Find rooves from xz pos + dot products
        float floor=0.0;
    `;
    if( colCalcs ) {
        ret+=`
        // -- --
        vec2 lp1=vec2( -186.0, -1002.0 ); // Point 1
        vec2 l1n1=vec2(-.1,1.); // Normal 1
        vec2 l1n2=vec2(1.,-.1); // Normal 2
        vec2 lp2=vec2( -1101.0, -1720.0 ); // Point 2
        vec2 l2n1=vec2(.1,-1.1);
        vec2 l2n2=vec2(-1.,.1);
        floor = max( floor, 170.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // Lobby roof

        lp1=vec2( -217.0, 786.0 ); // Point 1
        l1n1=vec2(.2,-1.); // Normal 1
        l1n2=vec2(1.,.1); // Normal 2
        lp2=vec2( -940.0, 1293.0 ); // Point 2
        l2n1=vec2(-.2,1.);
        l2n2=vec2(-1.,-.1);
        floor = max( floor, 500.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // sunflower roof

        lp1=vec2( 204.028, 56.7629 ); // Point 1
        l1n1=vec2( 0.152344, -0.988327 ); // Normal 1
        l1n2=vec2( -0.999862, 0.0165819 ); // Normal 2
        lp2=vec2( 755.264, 754.843 ); // Point 2
        l2n1=vec2( -0.160366, 0.987058 );
        l2n2=vec2( 0.999849, 0.0173488 );
        floor = max( floor, 150.0*colDetect( pos.xz, lp1,l1n1,l1n2 ) * colDetect( pos.xz, lp2,l2n1,l2n2 ) ); // sunflower roof
        `;
    }
  ret+=`  
        // Prevent snow drifting after hitting the ground
        float yLimit=max( floor, pos.y ) * .08 * seeds.z;
        pos.xz+=vec2( sin(pos.x+yLimit*seeds.x), sin(pos.z+pos.x+yLimit*seeds.y) )*10.*confettiScalar; // Snow sway in the sky
        
        // Shift Y position per camera height
        pos.y+=cameraPosition.y-yFract*(cameraPosition.y); 
        pos.y=max( floor+1.5, pos.y );
        
        float melt=min(1.0, (pOff.y+LAND-floor)*.02);
        // float pScalar = max( 0., (1.-length(pos-cameraPosition )*0.001) * melt );
        float pScalar = max( 0., (1.-length((pos-cameraPosition)*vec3(2.,1.,2.) )*0.001) * melt );
        
        vScalar = pScalar;
        float pScale = pointScale * seeds.w * pScalar * confettiScalar;
        gl_PointSize = pScale;
        
        vec4 mvPos=viewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix*mvPos;
    }`;
  return ret;
}

export function snowConfettiFrag(){
  let ret=shaderHeader();
  ret+=`
    uniform sampler2D snowTexture;
    uniform vec2 time;
    uniform float rate;
    
    varying vec2 vAtlas;
    varying vec2 vRot;
    varying float vScalar;
    
    void main(){
        vec2 uv=gl_PointCoord;

        vec2 pos = uv-.5;

        vec2 rotUV;
        rotUV.x = vRot.y * pos.x - vRot.x * pos.y;
        rotUV.y = vRot.x * pos.x + vRot.y * pos.y;
        rotUV=(rotUV+.5)*.25+vAtlas;
        
        vec4 pCd=texture2D(snowTexture,rotUV);
        float alpha= pCd.a * vScalar;
        vec4 Cd=vec4( pCd.rgb, alpha );

        gl_FragColor=Cd;
    }`;
  return ret;
}