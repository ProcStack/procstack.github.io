
import {
  AdditiveBlending,
  DoubleSide,
  NearestFilter,
  NearestMipmapNearestFilter
} from "../../../libs/three/three.module.min.js";

import ParticleBase from './ParticleBase.js';
import { emberWispsVert, emberWispsFrag } from './shaders/EmberWisps.js';

// The fire embers wisping into the air from a fire

export class EmberWisps extends ParticleBase{
  constructor( room=null, systemName='emberWisps' ){
    super( room, systemName );
    this.name=systemName;
    this.room=room;
  }
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  // 'atlasRes' - Sprite Texture Width Count (Square atlas' only)
  // 'atlasPicks' - Atlas Pick's Origin Array
  //                  Starting corners from upper left of image
  //                    Sprite texture size given - 1/atlasRes
  build( vertexCount=30, pScale=6, atlasRes=4, atlasPicks=null ){
    
    if( !atlasPicks ){
      atlasPicks=super.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
    }
    
    let dustUniforms={
      atlasTexture:{type:"t",value: null },
      noiseTexture:{type:"t",value: null },
      time:{type:"f",value: this.room.msRunner },
      pointScale:{type:"f",value: this.pscale },
      intensity:{type:"f",value:1.0},
      rate:{type:"f",value:5.5}
    };
        //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowFallVert( true ), snowFallFrag() );
    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, emberWispsVert(), emberWispsFrag() );
    mtl.side=DoubleSide;
    mtl.transparent=true;
    // mtl.blending=AdditiveBlending;
    mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    mtl.uniforms.noiseTexture.value = this.room.softNoiseTexture;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    this.room.materialList[ this.name ]=mtl;

    super.addToScene( vertexCount, pScale, mtl, atlasRes, atlasPicks );
  }
}