
import {
  Vector2,
  Vector3,
  DoubleSide,
  NearestFilter,
  NearestMipmapNearestFilter
} from "../../../libs/three/three.module.min.js";

import ParticleBase from './ParticleBase.js';
import { dustVert, dustFrag } from './shaders/FloatingDust.js';

// Free floaties in the environment
//   Dust balls & flakes

export class FloatingDust extends ParticleBase{
  constructor( room=null, systemName='floatingDust', proxDist=120 ){
    super( room, systemName );
    this.name=systemName;
    this.room=room;

    this.proxDist = proxDist;
  }
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  build( vertexCount=1000, pScale=7, proxDist=null, pOffset=[0.0,0.0,0.0], wind=[0.0,1.0], atlasPicks=null, randomAtlas=true ){
    
    if( !proxDist ){
      proxDist = this.proxDist;
    }

    if( !atlasPicks ){
      atlasPicks = [...super.dupeArray([0.0,0.],4), ...super.dupeArray([0.25,0.],4),
                    ...super.dupeArray([0.5,0.0],2), ...super.dupeArray([0.5,0.25],2),
                    ...super.dupeArray([0.5,0.5],2), ...super.dupeArray([0.5,0.75],2),
                    ...super.dupeArray([0.75,0.75],4), ...super.dupeArray([0.75,0.25],3),
                    ...super.dupeArray([0.75,0.25],3) ];
    }


    let lightPosArr = super.findLightPositions();
    wind = new Vector2( wind[0], wind[1] );
    pOffset = new Vector3( pOffset[0], pOffset[1], pOffset[2] );
    let dustUniforms={
      atlasTexture:{type:"t",value: null },
      noiseTexture:{type:"t",value: null },
      time:{type:"f",value: this.room.msRunner },
      pointScale:{type:"f",value: this.pscale },
      intensity:{type:"f",value:1.0},
      rate:{type:"f",value:.035},
      positionOffset:{type:"v",value:pOffset},
      windDir:{type:"v",value:wind},
      lightPos:{value:lightPosArr}
    };
    //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowFallVert( true ), snowFallVert() );

    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, dustVert( lightPosArr.length, proxDist ), dustFrag() );
    mtl.side=DoubleSide;
    mtl.transparent=true;
    // mtl.blending=AdditiveBlending;
      
    if( this.isInternalTexture ){
      mtl.uniforms.atlasTexture.value = this.room.pxlEnv.getAssetTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    }else{
      mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    }

    //mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    mtl.uniforms.noiseTexture.value = this.room.softNoiseTexture;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    this.room.materialList[ this.name ]=mtl;

    super.addToScene( vertexCount, pScale, mtl, 4, atlasPicks, randomAtlas );
  }
}
