// pxlNav Shader
//  -- -- -- --
// Written by Kevin Edzenga; 2020; 2024

import {shaderHeader} from "../core/ShaderHeader.js";
 
///////////////////////////////////////////////////////////
// Aux Room Depth Shaders                               //
/////////////////////////////////////////////////////////
export function hdrRoomVert(){
  let ret=shaderHeader();
  ret+=`
        varying vec3 localPos;
        varying vec4 camPos;
        
        void main(){
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            camPos=(projectionMatrix * modelViewMatrix * vec4( position, 1.0 ));
            float rot=0.16;
            localPos=position+vec3(position.z*rot-2.5, 0.0, position.x*-rot);
            vec4 ident=vec4(0.0,0.0,0.0,1.0);
            gl_Position = projectionMatrix * mvPosition;
    }`;
  return ret;
}
export function hdrRoomFrag(){
  let ret=shaderHeader();
  ret+=`
        uniform sampler2D hdrMap;
        uniform vec2 camRotPitch;
        uniform float ratioU;
        uniform float cdMult;
        varying vec3 localPos;
        varying vec4 camPos;
        
        
        void main() {
            vec2 screenUV=(vec2(camPos.xy/camPos.w))* vec2(ratioU,1.0)*.5;
            screenUV+=screenUV*vec2(0.3,-.2);
            
            vec2 hdrUV=vec2( screenUV.x*.25+camRotPitch.x, screenUV.y*.25+.5+ camRotPitch.y*.4 );
            vec4 Cd=texture2D(hdrMap,hdrUV);
            Cd.rgb*=cdMult;
            
            float gridSize=7.209;
            float gridThickness=0.15;
            float grid=min(1.0, step( gridThickness, mod(localPos.x, gridSize))*step( gridThickness,mod(localPos.z,gridSize)) + camPos.w*.022 ) ;
            grid=min(1.0, grid+max(0.0,localPos.y-5.0) );
            Cd.rgb= mix(Cd.rgb*Cd.rgb, Cd.rgb, grid);
            gl_FragColor = Cd;
    }`;
  return ret;
}

/*
   vec4 pos    = gl_ModelViewMatrix * gl_Vertex;
   projCoord   = gl_TextureMatrix[0] * pos;
}


uniform sampler2D tex0;
varying vec4 projCoord;


void main()
{
  if( projCoord.q > 0.0 )
  { gl_FragColor = texture2DProj( tex0, projCoord ); }
  else
  { discard; }  
}*/