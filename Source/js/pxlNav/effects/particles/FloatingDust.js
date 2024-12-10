
import * as THREE from "../../../libs/three/three.module.js";

import ParticleBase from './ParticleBase.js';
import { dustVert, dustFrag } from './shaders/FloatingDust.js';

// Free floaties in the environment
//   Dust balls & flakes

export class FloatingDust extends ParticleBase{
  constructor( room=null, systemName='floatingDust' ){
    super( room, systemName );
    this.name=systemName;
    this.room=room;
  }
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  build( vertexCount=1000, pScale=7, proxDist=120, pOffset=[0.0,0.0,0.0], wind=[0.0,1.0], atlasPicks=[[0.0,0.0]], randomAtlas=true ){
    let lightPosArr = super.findLightPositions();
    wind = new THREE.Vector2( wind[0], wind[1] );
    pOffset = new THREE.Vector3( pOffset[0], pOffset[1], pOffset[2] );
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
        //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, dustVert( lightPosArr.length, proxDist ), dustFrag() );
    mtl.side=THREE.DoubleSide;
    mtl.transparent=true;
    // mtl.blending=THREE.AdditiveBlending;
    mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} );
    mtl.uniforms.noiseTexture.value = this.room.softNoiseTexture;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    this.room.textureList[ this.name ]=mtl;

    super.addToScene( vertexCount, pScale, mtl, 4, atlasPicks, randomAtlas );
  }
}
