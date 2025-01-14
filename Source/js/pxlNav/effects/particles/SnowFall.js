
import {
  Vector2,
  Vector3,
  DoubleSide,
  NearestFilter,
  NearestMipmapNearestFilter
} from "../../../libs/three/three.module.min.js";

import ParticleBase from './ParticleBase.js';
import { snowFallVert, snowFallFrag } from './shaders/SnowShader.js';

// Free floaties in the environment
//   Dust balls & flakes

export class SnowFall extends ParticleBase{
  constructor( room=null, systemName='snowFall' ){
    super( room, systemName );
    this.name=systemName;
    this.room=room;
  }
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  build( vertexCount=1000, pScale=7, proxDist=120, pOffset=[0.0,0.0,0.0], wind=[0.0,1.0], atlasPicks=null, randomAtlas=true ){
    
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
        //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowFallFrag( true ), snowFallFrag() );

    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, snowFallVert( false, proxDist ), snowFallFrag() );
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




buildSnow(){
  //sprite = ImageUtils.loadTexture( "textures/sprites/disc.png" );

  let vertexCount = 12000; // Point Count
  let pScale = 12;  // Point Base Scale

  let geo = new BufferGeometry();
  let verts = [];
  let seeds = [];
  let atlasId = [];

  const atlasGen=()=>{ return Math.floor( (Math.random() * 4000) % 4 )*.25; };

  for( let x=0; x<vertexCount; ++x ){
    verts.push( 0,0,0 );
    seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
    atlasId.push( atlasGen(), atlasGen() );
  }

  let posAttribute = new Float32BufferAttribute( verts, 3 );
  let seedAttribute = new Float32BufferAttribute( seeds, 4 );
  let atlasAttribute = new Float32BufferAttribute( atlasId, 2 );
  //let idAttribute = new Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
  geo.setAttribute( 'position', posAttribute );
  geo.setAttribute( 'seeds', seedAttribute );
  geo.setAttribute( 'atlas', atlasAttribute );
  //geo.setAttribute( 'id', idAttribute );
      
  let snowUniforms={
    snowTexture:{type:"t",value: this.pxlUtils.loadTexture( this.pxlUtils.assetRoot+"snow.jpg", 1, {"encoding":LinearSRGBColorSpace, "magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} ) },
    pointScale:{type:"f",value: pScale*this.pxlQuality.screenResPerc },
    intensity:{type:"f",value:1.0},
    rate:{type:"f",value:.035},
  };
  console.log(this.pxlShaders.particles)
  let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, this.pxlShaders.particles.snowFallVert( this.mobile ), this.pxlShaders.particles.snowFallFrag() );
  mtl.side=DoubleSide;
  mtl.transparent=true;
  mtl.blending=AdditiveBlending;
  mtl.depthTest=true;
  mtl.depthWrite=false;

  let snow = new Points( geo, mtl );
  snow.sortParticles = false;
  snow.frustumCulled = false;
  this.scene.add( snow );
  snow.layers.set(1);
  snow.pBaseScale=pScale;
  this.geoList['snow']=snow;
}