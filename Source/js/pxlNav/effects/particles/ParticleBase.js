// Base Particle Class for pxlNav
//   Written by Kevin Edzenga; 2024

import {
  Points,
  Float32BufferAttribute,
  Vector2,
  Vector3,
  DoubleSide,
  NearestFilter,
  NearestMipmapNearestFilter,
  BufferGeometry
} from "../../../libs/three/three.module.min.js";

import { dustVert, dustFrag } from './shaders/FloatingDust.js';

export default class ParticleBase{
  constructor( room=null, systemName='particles' ){
    this.name=systemName;
    this.room=room;
    
    this.geometry = null;
    this.material = null;
    
    this.points = null;
    this.count = -1;
    this.pscale = new Vector2(0,0);
    this.position = new Vector3(0,0,0);
    
    // Default atlas texture file path
    this.atlasPath = "sprite_dustLiquid.png";
    this.atlasPath = "sprite_dustAtlas.png";
  }
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  // 'atlasRes' - Sprite Texture Width Count (Square atlas' only)
  // 'atlasPicks' - Atlas Pick's Origin Array
  //                  Starting corners from upper left of image
  //                    Sprite texture size given - 1/atlasRes
  build( vertexCount=30, pScale=6, atlasRes=4, atlasPicks=null ){
    
    if( !atlasPicks ){
      atlasPicks = this.elementDuplicator([ [0.0,0.75], [0.0,0.5], [0.25,0.75], [0.25,0.5] ],4);
    }
    
    this.addToScene( vertexCount, pScale, atlasRes, atlasPicks );
  }

  setPosition( ...args ){
    if( args.length === 1 ){
      this.position = args[0];
    }else{
      this.position = new Vector3( ...args );
    }
    if( this.points ){
      this.points.position.copy( this.position );
    }
  }
  
  // -- -- -- -- -- -- -- --
  // -- Add To Scene Function  -- --
  // -- -- -- -- -- -- -- -- -- --
  
  // 'vertexCount' - Point Count
  // 'pScale' - Point Base Scale
  addToScene( vertexCount=30, pScale=6, atlasMtl=null, atlasRes=4, atlasPicks=[[0.0,0.0]], randomRanges=false ){
    
    
    this.count = vertexCount;
    this.pscale.x = pScale * this.room.pxlEnv.pxlQuality.screenResPerc ;
    
    this.isInternalTexture = false;

    let atlasPicker=null;
    // Set random/list atlas picking function as variable 
    if( randomRanges ){
      atlasPicker = this.atlasRandomGen;
      atlasPicks = atlasRes;
    }else{
      atlasPicker = this.atlasArrayPicker;
    }
    
    if( !atlasMtl ){
      atlasMtl = this.newMaterial();
    }
    
    let verts = [];
    let seeds = [];
    let atlasId = [];
    

    for( let x=0; x<vertexCount; ++x ){
      verts.push( 0,0,0 );
      seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*2-1) );
      atlasId.push( ...atlasPicker( atlasPicks ) );
    }

    let posAttribute = new Float32BufferAttribute( verts, 3 );
    let seedAttribute = new Float32BufferAttribute( seeds, 4 );
    let atlasAttribute = new Float32BufferAttribute( atlasId, 2 );
    //let idAttribute = new Uint8BufferAttribute( pId, 1 ); // ## would only be 0-65536; set up vector array for ids
    let geo = new BufferGeometry();
    geo.setAttribute( 'position', posAttribute );
    geo.setAttribute( 'seeds', seedAttribute );
    geo.setAttribute( 'atlas', atlasAttribute );
    //geo.setAttribute( 'id', idAttribute );

    let psystem = new Points( geo, atlasMtl );
    psystem.sortParticles = false;
    psystem.frustumCulled = false;
    this.room.scene.add( psystem );
    psystem.layers.set(1);
    psystem.pBaseScale=pScale;
    this.room.geoList[ this.name ]=psystem;
    
    this.geometry = geo;
    this.material = atlasMtl;
    this.points = psystem;

    psystem.position.copy( this.position );
    
    return psystem;
  }
  
  // -- -- -- -- -- -- -- --
  // -- Helper Functions  -- --
  // -- -- -- -- -- -- -- -- -- --
  
  setUserHeight( val ){
    this.pxlEnv.pxlCamera.userScale = val;
  }
  
  atlasRandomGen( atlasRes=4, dSize=2 ){
    let atlasDiv = 1.0/atlasRes;
    return Array.from({length:dSize}).map(()=>{
      return Math.floor( (Math.random() * 648405.710 ) % atlasRes )*atlasDiv;
    });
  }
  
  // !!
  atlasRandomList( count=4, res=4, size=2 ){
    return Array.from({length:count}).map((c)=>{
      return this.atlasRandomGen( res, size );
    });
  }
  
  atlasArrayPicker( arr ){
    return arr[Math.floor( (Math.random() * 92314.75) % arr.length )];
  }
  
  dupeArray( val, count ){
    return Array.from({length:count}).fill(val);
  }
  
  elementDuplicator( arr, count=4 ){
    return arr.map((c)=>{
      return this.dupeArray( c, count );
    }).flat(1);
  }
  
  // -- -- --
    
  findLightPositions(){
    let lightPos=[];
    let lightCount=0;
    if( this.room.lightList.hasOwnProperty("PointLight") ){
      lightCount = this.room.lightList.PointLight.length;
      this.room.lightList.PointLight.forEach( (l)=>{
        lightPos.push( l.position.clone() );
      })
    }
    return lightPos;
  }
  
  // Set image path
  setAtlasPath( path ){
    this.atlasPath = path;
    this.isInternalTexture = false;
  }

  useInternalAsset( asset ){
    this.atlasPath = asset;
    this.isInternalTexture = true;
  }
  
  // -- -- --
  
  newMaterial(setSystemMtl=true){
    let lightPosArr = this.findLightPositions();
    let dustUniforms={
      atlasTexture:{type:"t",value: null },
      noiseTexture:{type:"t",value: null },
      time:{type:"f",value: this.room.msRunner },
      pointScale:{type:"f",value: this.pscale },
      intensity:{type:"f",value:1.0},
      rate:{type:"f",value:0.035},
      lightPos:{value:lightPosArr},
    };
        //let mtl = this.pxlFile.pxlShaderBuilder( snowUniforms, snowVert( true ), snowFrag() );
    let mtl = this.room.pxlFile.pxlShaderBuilder( dustUniforms, dustVert( lightPosArr.length ), dustFrag() );
    mtl.side=DoubleSide;
    mtl.transparent=true;
    // mtl.blending=AdditiveBlending;
    if( this.isInternalTexture ){
      mtl.uniforms.atlasTexture.value = this.room.pxlEnv.getAssetTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    }else{
      mtl.uniforms.atlasTexture.value = this.room.pxlUtils.loadTexture( this.atlasPath, 4, {"magFilter":NearestFilter, "minFilter":NearestMipmapNearestFilter} );
    }
    mtl.uniforms.noiseTexture.value = this.room.softNoiseTexture;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    if( setSystemMtl ){
      this.room.materialList[ this.name ]=mtl;
    }
    return mtl;
  }
}
