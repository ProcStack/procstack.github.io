
import * as THREE from "../../../libs/three/three.module.js";

import ParticleBase from './ParticleBase.js';
import { smokeVert, smokeFrag } from '../../shaders/particles/Smoke.js';

// Campfire's spiralling smoke sprites

export class BillowSmoke extends ParticleBase{
  constructor( room=null, systemName='billowSmoke' ){
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
  build( vertexCount=50, pScale=56, atlasRes=4, atlasPicks=null ){
    // Starting corners from the upper left for the given 1/atlasRes
    if( !atlasPicks ){
      atlasPicks = [...super.dupeArray([0.0,0.],4), ...super.dupeArray([0.25,0.],4),
                    ...super.dupeArray([0.5,0.0],2), ...super.dupeArray([0.5,0.25],2),
                    ...super.dupeArray([0.5,0.5],2), ...super.dupeArray([0.5,0.75],2),
                    ...super.dupeArray([0.75,0.75],4), ...super.dupeArray([0.75,0.25],3),
                    ...super.dupeArray([0.75,0.25],3) ];
    }
    
    
    let dustUniforms={
      atlasTexture:{type:"t",value: null },
      noiseTexture:{type:"t",value: null },
      time:{type:"f",value: this.room.msRunner },
      pointScale:{type:"f",value: this.pscale },
      intensity:{type:"f",value:0.8},
      rate:{type:"f",value:2.0}
    };
    
    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, smokeVert(), smokeFrag() );
    mtl.side=THREE.DoubleSide;
    mtl.transparent=true;
    // mtl.blending=THREE.AdditiveBlending;
    mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} );
    mtl.uniforms.noiseTexture.value = this.room.softNoiseTexture;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    this.room.textureList[ this.name ]=mtl;
    
    super.addToScene( vertexCount, pScale, mtl, atlasRes, atlasPicks );

  }
}
