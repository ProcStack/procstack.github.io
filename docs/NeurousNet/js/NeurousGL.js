// Neurous.Net; WebGL 2024 rewrite, 2014-2025
//   Written by Kevin Edzenga ( ProcStack / Trancor )
//     https://procstack.github.io/
//
// TODO :
//  - Move Mesh / Vertex / GL Program creation and buffer transformations to EmitterBase
//  - Convert Background Canvas to a 2-tri plane at far clipping via shader
//   |- Set vert colors as base in Cd Uniforms
//   |- Add animation to Background
//  - Pushing forward with WebGL2 means no backwards compatability, create fallback

import * as THREE from "../libs/three/build/three.module.js" 
import { EffectComposer } from  '../libs/three/postprocessing/EffectComposer.js' 
import { RenderPass } from  '../libs/three/postprocessing/RenderPass.js' 
import { ShaderPass } from  '../libs/three/postprocessing/ShaderPass.js' 
import { UnrealBloomPass } from '../libs/three/postprocessing/UnrealBloomPass.js'

import Shaders from  "./Shaders/Shaders.js" 


class NeurousGL{
  constructor(NeurousCore, target, source, settings={}){
    this.NeurousCore = NeurousCore
    this._isWebGL2 = null
    this._glContext = null
    this.canvas = target
    this.source = source // During dev only!! The source of the current HTML5 Canvas draw
    
    this.engine = null
    this.composer = null
    this.scene = null
    
    this.resWH = null;
    this.resUV = null;
    
    // Time is set to THREE.Vector2;
    //   Easy universal shader updates by updating the Vector2's X/Y
    //   Particle systems still set manually from 'this.time.x'
    this.time=null;

    this.settings = Object.assign({
      verbose: false
    },settings);

    
    this.textureLoader = null
    this.textures = {}
    
    this.pointSystems = {}
    this.pointTexture = null
    
    this.shaderPasses = {}
    
    this.cameraOptions = {
      fov : 70,
      aspect : 1,
      clipping : {
        near : .1,
        far : 10
      }
    }
  }
  
  // Returns - { Is WebGL2 Supported Bool, WebGL Context }
  isWebGL2(){
    if( this._isWebGL2 == null ){
      let glCtx = this.canvas.getContext( 'webgl2', { antialias: false } )
      this._isWebGL2 = !!glCtx
      
      if( !glCtx ){
        glCtx = this.canvas.getContext( 'webgl', { antialias: false } ) // WebGL1 fallback
      }
      this._glContext = glCtx
    }
    return { isWebGL2 : this._isWebGL2,  glContext : this._glContext }
  }
  
  init(){
    let { isWebGL2, glContext } = this.isWebGL2()
    if( !isWebGL2 ){
      // TODO : Fallback to "frame buffer objects" and corresponding id look up?
      //        Means rending the object twice, more or less...
      //        Once to an image, then again reading from the image to render the final
      console.log( "WebGL2 is not supported by your browser." )
    }
    
    // Rederer
    this.engine=new THREE.WebGLRenderer({
      canvas: this.canvas,
      context: glContext,
      alpha:true,
      antialias: false,
      sortObjects:false,
      depth:false,
      //logarithmicDepthBuffer:true, // TODO : Use it when depth is turned on
    });
    var options = {
      format : THREE.RGBAFormat,
      antialias: false,
      sortObjects:false,
      alpha:true,
      type : /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? THREE.HalfFloatType : THREE.FloatType
    };
    this.engine.autoClear=true;
      
    this.time = new THREE.Vector2(0,0);
    
    let bgCd=0x000000;
    let bgCdHex="#000000";
    this.engine.setClearColor(bgCd, 0);
    this.engine.setPixelRatio(1);
    
    let cnW = this.canvas.width
    let cnH = this.canvas.height
    
    this.resWH = new THREE.Vector2( cnW, cnH );
    this.resUV = new THREE.Vector2( 1/cnW, 1/cnH );
    
    this.engine.setSize( cnW, cnH );
    this.engine.outputEncoding=THREE.GammaEncoding;
    
    this.scene=new THREE.Scene();
      
    this.scene.background = new THREE.Color(bgCdHex);//pxlEnv.fogColor;
    this.scene.renderTarget=new THREE.WebGLRenderTarget( cnW*.5, cnH*.5, options);
    this.scene.renderTarget.texture.format=THREE.RGBAFormat;
    this.scene.renderTarget.texture.minFilter=THREE.LinearFilter; // THREE.NearestFilter;
    this.scene.renderTarget.texture.magFilter=THREE.LinearFilter; // THREE.NearestFilter;
    this.scene.renderTarget.texture.generateMipmaps=false;
    
    
    this.camera=new THREE.PerspectiveCamera( this.cameraOptions.fov, this.cameraOptions.aspect, this.cameraOptions.clipping.near, this.cameraOptions.clipping.far);

      
    // this.camera.position.set(-20,0,15);
    // this.cameraAimTarget=new THREE.Object3D();
    // this.scene.add(pxlCamera.cameraAimTarget);
    
    
    //this.camera.layers.enable(0);
      
      
      
    // Texture needs
    this.textureLoader=new THREE.ImageLoader();
    
    //cloud3dTexture=this.textureLoader.loadTexture(assetRoot+"cloud3d.jpg");
    ////cloud3dTexture.wrapS=THREE.RepeatWrapping;
    ////cloud3dTexture.wrapT=THREE.RepeatWrapping;
    // cloud3dTexture.wrapS=THREE.MirroredRepeatWrapping;
    // cloud3dTexture.wrapT=THREE.MirroredRepeatWrapping;
    // cloud3dTexture.repeat.set(5,5);
    
    // cloud3dTexture.minFilter=THREE.LinearFilter;
    // cloud3dTexture.magFilter=THREE.LinearFilter;
    // this.cloud3dTexture=cloud3dTexture;
    
    this.pointTexture = new THREE.CanvasTexture(this.source);
    this.pointTexture.needsUpdate = true;
    this.pointTexture.format=THREE.RGBAFormat;
    
    this.buildComposers()
  }
  
  resize(){
    let cnW = this.canvas.width
    let cnH = this.canvas.height
    //console.log(cnW,cnH)
    
    this.resWH.set( cnW, cnH );
    this.resUV.set( 1/cnW, 1/cnH );
    
    this.engine.setSize( cnW, cnH );
    this.scene.renderTarget.setSize( cnW*.5, cnH*.5);
    
    
    this.pointTexture = new THREE.CanvasTexture(this.source);
    this.pointTexture.needsUpdate = true;
    this.pointTexture.format=THREE.RGBAFormat;
    
    let shaderKeys = Object.keys( this.shaderPasses )
    shaderKeys.forEach( (s)=>{
      this.shaderPasses[s].material.uniforms.pDiffuse.value = this.pointTexture;
    })
  }
  
  
  // -- -- -- -- --
  
  
  buildComposers(){
    
		this.composer = new EffectComposer(this.engine);
    
		this.shaderPasses.blurXShaderPass = new ShaderPass(
			new THREE.ShaderMaterial( {
				uniforms: {
					time:{ value:this.time },
					tDiffuse: { value: null },
					pDiffuse: { value: this.pointTexture },
					resUV: { value: this.resUV },
				},
				vertexShader: Shaders.Defaults.vert(),
				fragmentShader: Shaders.BlurShaderPass.directionalBlurPass( "pDiffuse", [1,0], 20, 1.5 ),
				defines: {}
			} ), "tDiffuse"
		);
    this.shaderPasses.blurXShaderPass.material.transparent = true
		this.shaderPasses.blurXShaderPass.needsSwap = true;
		this.composer.addPass( this.shaderPasses.blurXShaderPass );
    
		this.shaderPasses.blurYShaderPass = new ShaderPass(
			new THREE.ShaderMaterial( {
				uniforms: {
					time:{ value:this.time },
					tDiffuse: { value: null },
					pDiffuse: { value: this.pointTexture },
					resUV: { value: this.resUV },
				},
				vertexShader: Shaders.Defaults.vert(),
				fragmentShader: Shaders.BlurShaderPass.directionalBlurPass( "tDiffuse", [0,1], 20, 1.5 ),
				defines: {}
			} ), "tDiffuse"
		);
    this.shaderPasses.blurYShaderPass.material.transparent = true
		this.shaderPasses.blurYShaderPass.needsSwap = true;
		this.composer.addPass( this.shaderPasses.blurYShaderPass );
    
    
		this.shaderPasses.scatterMixShaderPass = new ShaderPass(
			new THREE.ShaderMaterial( {
				uniforms: {
					time:{ value:this.time },
					tDiffuse: { value: null },
					pDiffuse: { value: this.pointTexture },
					resUV: { value: this.resUV },
				},
				vertexShader: Shaders.Defaults.vert(),
				fragmentShader: Shaders.BloomShaderPass.scatterMixShaderPass(),
				defines: {}
			} ), "tDiffuse"
		);
    this.shaderPasses.scatterMixShaderPass.material.transparent = true
		this.shaderPasses.scatterMixShaderPass.needsSwap = true;
		this.composer.addPass( this.shaderPasses.scatterMixShaderPass );
    
		
		// -- -- -- -- -- -- -- -- -- -- //
		
		
		//this.composer.addPass( this.shaderPasses.blurShaderPass );
		//this.shaderPasses.bloomShaderPass.enabled=true;
		//this.mapOverlayPass.autoClear=true;
		//this.mapOverlaySlimPass.enabled=false;
  }
  
  
  // -- -- -- -- --
  
	buildShader( customUniforms, vertShader, fragShader ){
		var mat;
		var uniforms={
			diffuse:{ type:"t",value:null },
			time:{ value:this.time }
		};
		if(customUniforms!=null){
			uniforms=Object.assign({},uniforms,customUniforms);
		}
		
		mat=new THREE.ShaderMaterial({
			uniforms:uniforms,
			vertexShader:vertShader,
			fragmentShader:fragShader,
		});
		mat.transparent=true;
		mat.depthTest=true;
		
		return mat;
	}

  
  buildPoints(){
      //sprite = THREE.ImageUtils.loadTexture( "textures/sprites/disc.png" );

    let vertexCount = 200; // Point Count; Default
    let pScale = 12;  // Point Base Scale
    
    // In point for emiters to draw to vertex attribute arrays
    if( this.NeurousCore && this.NeurousCore.hasOwnProperty("emitters") && this.NeurousCore.emitters.hasOwnProperty("pointTrails") ){
      vertexCount = 0
      this.NeurousCore.emitters.pointTrails.forEach( (e)=>{
        vertexCount += e.count
      })
    }
    console.log(`Generated vertex count - ${vertexCount}`)

    let geo = new THREE.BufferGeometry();
    let pId = new Uint16Array( vertexCount );
    let pPos = new Float32Array( vertexCount * 4 );
    let pVel = new Float32Array( vertexCount * 4 );
    //let pScale = [];
    //let seeds = [];
    
    // Point nuclei have been removed, but leaving it during dev
    //   Might be needed for other particle systems
    //let atlasId = [];

    //let atlastGridSize = 4
    //let atlastSizeDiv = 1/atlastGridSize
    //const atlasGen=()=>{ return Math.floor( (Math.random() * 4000) % atlastGridSize ) * atlastSizeDiv; }

    for( let x=0; x<vertexCount; ++x ){
      pId[ x ] = x;
      //pScale.push( *FROM EMITTER* )
      // Position
      pPos[ x*4 ] = 0;
      pPos[ x*4 + 1 ] = 1;
      pPos[ x*4 + 2 ] = 2;
      pPos[ x*4 + 3 ] = 0;
      // Velocity
      pVel[ x*4 ] = .5;
      pVel[ x*4 + 1 ] = -.5;
      pVel[ x*4 + 2 ] = .3;
      pVel[ x*4 + 3 ] = 0;
      //seeds.push( (Math.random()),(Math.random()),(Math.random()*2-1), (Math.random()*.5+.5) );
      //atlasId.push( atlasGen(), atlasGen() );
    }

    //let idAttribute = new THREE.BufferAttribute( pId, 1, false, true ).setDynamic( false );
    let posAttribute = new THREE.BufferAttribute( pPos, 4 ).setDynamic( true );
    let velAttribute = new THREE.BufferAttribute( pVel, 4 ).setDynamic( true );
    //let pScaleAttribute = new THREE.Float32BufferAttribute( pScale, 1 );
    //let seedAttribute = new THREE.Float32BufferAttribute( seeds, 4 );
    //let atlasAttribute = new THREE.Float32BufferAttribute( atlasId, 2 );
    
    //THREE.Int16BufferAttribute
    
    //geo.setAttribute( 'id', idAttribute );
    //geo.setAttribute( 'pScale', pScaleAttribute );
    //geo.setAttribute( 'pos', posAttribute );
    //geo.setAttribute( 'vel', velAttribute );
    geo.setAttribute( 'pos', new THREE.BufferAttribute( pPos, 4 ).setDynamic( true ) );
    geo.setAttribute( 'vel', new THREE.BufferAttribute( pVel, 4 ).setDynamic( true ) );
    //geo.setAttribute( 'seeds', seedAttribute );
    //geo.setAttribute( 'atlas', atlasAttribute );
      
    let pointUniforms={
      //snowTexture:{type:"t",value: this.pxlUtils.loadTexture( this.pxlUtils.assetRoot+"snow.jpg", 1, {"magFilter":THREE.NearestFilter, "minFilter":THREE.NearestMipmapNearestFilter} ) },
      pointScale:{type:"f",value: pScale },
      //intensity:{type:"f",value:1.0},
      //rate:{type:"f",value:.035},
    };
    let mtl = this.buildShader( pointUniforms, Shaders.PointShaders_Trail.TrailRenderVert(), Shaders.PointShaders_Trail.TrailRenderFrag() );
    mtl.side=THREE.DoubleSide;
    mtl.transparent=true;
    mtl.blending=THREE.AdditiveBlending;
    mtl.depthTest=true;
    mtl.depthWrite=false;
    
    
    let gl = this.engine.getContext()
    let transformFeedback = gl.createTransformFeedback();

    let data = new Float32Array( vertexCount * 4 );
    for ( var i = 0, j = 0, l = data.length; i < l; i += 4, j += 1 ) {
      data[ i ] = 0.0;
      data[ i + 1 ] = 1.0;
      data[ i + 2 ] = 2.0;
      data[ i + 3 ] = 0.0;
    }



    let basePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, basePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, pPos, gl.STATIC_DRAW);
    
    let baseVelBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, baseVelBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, pVel, gl.STATIC_DRAW);

            
    let shaderProg = this.buildAttrFeedbackPoints()

    let pointMesh = new THREE.Points( geo, mtl );
    pointMesh.sortParticles = false;
    pointMesh.frustumCulled = false;
    this.scene.add( pointMesh );
    
    return { glEmitterMesh : pointMesh, glEmitterGeo : geo, glEmitterMtl : mtl, glEmitterProgram : shaderProg, glEmitterTransform : transformFeedback, glBuffers : { pos : basePosBuffer, vel : baseVelBuffer } }
  }

  
  buildAttrFeedbackPoints(){
    
    let gl = this.engine.getContext()
    //this.engine.getPrecision()
    
    let attributes = {
      pos: 0,
      vel: 1
    }

    if( this.settings.verbose ){
      console.log("build shader program attempt")
    }

    let vertexShader = gl.createShader( gl.VERTEX_SHADER )
    let fragmentShader = gl.createShader( gl.FRAGMENT_SHADER )

    let vertShaderValue = Shaders.PointShaders_Trail.TrailVertProg()
    let fragShaderValue = Shaders.PointShaders_Trail.TrailFragProg()
    
    gl.shaderSource( vertexShader, vertShaderValue )
    gl.shaderSource( fragmentShader, fragShaderValue )

    gl.compileShader( vertexShader )
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.error("Vertext Shader failed to compile", gl.getShaderInfoLog( vertexShader ))
      let printVal = vertShaderValue.split("\n");
      printVal = printVal.map( (v,x) => { return x+v; } ).join("\n");
      console.error( printVal )
      return null
    }

    gl.compileShader( fragmentShader )
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.error("Fragment Shader failed to compile", gl.getShaderInfoLog( fragmentShader ))
      let printVal = fragShaderValue.split("\n");
      printVal = printVal.map( (v,x) => { return x+v; } ).join("\n");
      console.error( printVal )
      return null
    }

    let prog = gl.createProgram()

    gl.attachShader( prog, vertexShader )
    gl.attachShader( prog, fragmentShader )

    gl.deleteShader( vertexShader )
    gl.deleteShader( fragmentShader )

    // ## Check attr data getting updates
    for( const [attr, location] of Object.entries( attributes ) ){
      gl.bindAttribLocation( prog, location, attr )
    }

    gl.transformFeedbackVaryings( prog, ["outPos", "outVel"], gl.SEPARATE_ATTRIBS )

    gl.linkProgram( prog )

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("Shader program failed to link", gl.getProgramInfoLog( prog ))
      gl.deleteProgram( prog )
      return null
    }


    // Fill uniform values
    var uniforms = {}
    var count = gl.getProgramParameter( prog, gl.ACTIVE_UNIFORMS )
    for (var i = 0; i < count; i++) {
        uniform = gl.getActiveUniform( prog, i )
        name = uniform.name.replace("[0]", "")
        uniforms[name] = gl.getUniformLocation( prog, name )
    }

      
    
    
    gl.useProgram( prog )
    gl.uniform1f( uniforms.time, this.time.x )
    
    
    return prog
  }
  
  
  // -- -- -- -- --
  
  buildUserSystem( userId ){
    let { glEmitterMesh, glEmitterGeo, glEmitterMtl, glEmitterProgram, glEmitterTransform, glBuffers } = this.buildPoints()
    let glEmitterGeoSwap = glEmitterGeo.clone()
    
    let userData = {
      swap : 0,
      mesh : glEmitterMesh,
      swapGeo : [ glEmitterGeo, glEmitterGeoSwap ],
      mtl : glEmitterMtl,
      program : glEmitterProgram,
      glBuffers : glBuffers,
      feedback : glEmitterTransform
    }
    this.pointSystems[ userId ] = userData
  }
  
  swapBufferGeo( userData ){
    let swapVal = userData.swap
    let fromGeo = userData.swapGeo[ swapVal ]
    
    swapVal = (userData.swap+1) % 2
    let toGeo = userData.swapGeo[ swapVal ]
    
    userData.swap = swapVal
    
    let gl = this.engine.getContext()
    

    const fromPosAttr = fromGeo.attributes['pos'];
    let fromVelAttr = fromGeo.attributes['vel'];
    let toPosAttr = toGeo.attributes['pos'];
    let toVelAttr = toGeo.attributes['vel'];

    let fromPosBuffer = this.engine.properties.get( fromPosAttr ).__webglBuffer;
    let fromVelBuffer = this.engine.properties.get( fromVelAttr ).__webglBuffer;
    let toPosBuffer = this.engine.properties.get( toPosAttr ).__webglBuffer;
    let toVelBuffer = this.engine.properties.get( toVelAttr ).__webglBuffer;

    if( fromPosBuffer && toPosBuffer ){
      
      gl.useProgram( userData.program );
      //gl.uniform1f( userData.mtl.uniforms.time, this.time.x );

      // Update Buffer Attribute Array; Position
      gl.enableVertexAttribArray( 0 ); // pos
      gl.bindBuffer( gl.ARRAY_BUFFER, fromPosBuffer );
      gl.vertexAttribPointer( 0, 4, gl.FLOAT, false, 16, 0 );

      // Update Buffer Attribute Array; Velocity
      gl.enableVertexAttribArray( 1 ); // vel
      gl.bindBuffer( gl.ARRAY_BUFFER, fromVelBuffer );
      gl.vertexAttribPointer( 1, 4, gl.FLOAT, false, 16, 0 );

      // Transform Buffer Feedback Data
      gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, userData.feedback );
      gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, 0, toPosBuffer );
      gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, 1, toVelBuffer );

      gl.enable( gl.RASTERIZER_DISCARD );
      gl.beginTransformFeedback( gl.POINTS );

      gl.drawArrays( gl.POINTS, 0, fromPosAttr.count );

      gl.endTransformFeedback();
      gl.disable( gl.RASTERIZER_DISCARD );

      // Release Transform Buffer; Allows next swap
      gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, 0, null );
      gl.bindBufferBase( gl.TRANSFORM_FEEDBACK_BUFFER, 1, null );

      gl.bindTransformFeedback( gl.TRANSFORM_FEEDBACK, null );
    }
    
    // Set the swapped geometry on the User's Emitter Mesh
    userData.mesh.geometry = toGeo
    
  }
  
  updateUserSystems(){
    for( const [id, userData] of Object.entries( this.pointSystems ) ){
      this.swapBufferGeo( userData );
      //console.log(id, userData)
      //this.pointSystems[ userId ] = this.buildPoints()
    }
  }
  
  // -- -- -- -- --
  
  // Dumb Renderer
  //   It expects to be called from the main loop
  //   There are no checks to see if it should be running
  render( time ){
    this.time.x = time

    this.pointTexture.needsUpdate = true; // Canvas Draw Texture
    
    this.updateUserSystems()
    
    this.composer.render()
  }
}

export default NeurousGL