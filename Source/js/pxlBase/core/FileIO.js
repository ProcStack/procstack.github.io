// Core File IO Helper Utilities

// TODO : There shouldn't be a need for a constructor
//          Remove external dependencies



import * as THREE from "../../../libs/three/build/three.module.js";
import { FBXLoader } from './FBXLoader.js';

export class FileIO{
	constructor(pxlUtils, pxlQuality, pxlTimer, assetRoot="images/assets/", guiRoot="images/GUI/", roomRoot="images/rooms/", vidRoot="images/screenContent/"){
		this.pxlTimer=pxlTimer;
		this.pxlUtils=pxlUtils;
		this.pxlQuality=pxlQuality;
		this.pxlVideo=null;
		this.pxlCamera=null;
		this.pxlAutoCam=null;
		this.pxlUser=null;
		this.pxlEnv=null;
		this.pxlDevice=null;
		this.pxlShaders=null;
		
		this.runDebugger=false;
		
		this.assetRoot=assetRoot;
		this.guiRoot=guiRoot;
		this.roomRoot=roomRoot;
		this.vidRoot=vidRoot;
		
    this.workerList=[];
	}
	
	log(...logger){
		if( this.runDebugger ){
			logger= logger.length<2 ? logger[0] : logger;
			console.log(logger);
		}
	}
	
  // Check for UserData on the Mesh
  // envObj = Environment Class Object
  // envScene = Environment ThreeJS Scene Object
  // mesh = Current Object To Check For UserData Entries
  checkForUserData( envObj, envScene, mesh ){
    if( mesh.hasOwnProperty("userData") ){
      // Add to Glow render pass; ran by blurComposer
      if( mesh.userData.hasOwnProperty("GlowPass") && mesh.userData.GlowPass ){
        if( !envObj.geoList['GlowPass'] ){
          envObj.geoList['GlowPass'] = [];
        }
        envObj.geoList['GlowPass'].push(mesh);
      }
      if( mesh.userData.hasOwnProperty("GlowPassMask") && mesh.userData.GlowPass ){
        if( !envObj.geoList['GlowPassMask'] ){
          envObj.geoList['GlowPassMask'] = [];
        }
        envObj.geoList['GlowPassMask'].push(mesh);
      }
      
      if( mesh.userData.hasOwnProperty("castShadow") && mesh.userData.castShadow ){
        mesh.castShadow=true;
      }
      if( mesh.userData.hasOwnProperty("receiveShadow") && mesh.userData.receiveShadow ){
        mesh.receiveShadow=true;
      }
      if( mesh.userData.hasOwnProperty("Shader") && mesh.userData.Shader!="" ){
        let toShader = mesh.userData.Shader.trim()
        if( !envObj.shaderGeoList ) {
          envObj.shaderGeoList={};
        }
        envObj.shaderGeoList[mesh.name]=mesh;
      }
      
      if( mesh.userData.hasOwnProperty("Emitter") && mesh.userData.Emitter != "" ){
        if( !envObj.emitterList ) {
          envObj.emitterList={};
        }
        if( !envObj.emitterList[mesh.userData.Emitter] ) {
          envObj.emitterList[mesh.userData.Emitter]={};
          envObj.emitterList[mesh.userData.Emitter]['Emitter']=[];
          envObj.emitterList[mesh.userData.Emitter]['Particles']=[];
        }
        envObj.emitterList[mesh.userData.Emitter]['Emitter'].push( mesh );
      }
      
      //Hoverable Object
      if( mesh.userData.hasOwnProperty("Hover") && mesh.userData.Hover ){
        envObj.hoverableExists=true;
        envObj.hoverableList.push(mesh);
      }
      if( mesh.userData.hasOwnProperty("Click") && mesh.userData.Click ){
        envObj.clickableExists=true;
        envObj.clickableList.push(mesh);
      }
      
      this.checkObjectInstancing( envObj, envScene, mesh );
      
      // The Scripted UserData system needs fixing...
      //   Nested Objects should be handled in the main loader
      //   Objects in general should get Parent Transforms by default
      //     Meaning no reason for Scripted outside of storing the group for future use
      if( mesh.userData.hasOwnProperty("Scripted") ){
        //envScene.add( mesh );
        
        if( !envObj.geoList.hasOwnProperty('Scripted') ){
          envObj.geoList['Scripted']={}
        }
        envObj.geoList['Scripted'][mesh.name]=mesh;
        
        let scriptChildren = mesh.children;
        scriptChildren.forEach( (g)=>{
          if( g.name.includes("Geo") ){
            let pos = mesh.position;
            let rot = mesh.rotation;
            let sc = mesh.scale;
            g.position.set( pos.x, pos.y, pos.z )
            g.rotation.set( rot.x, rot.y, rot.z )
            g.scale.set( sc.x, sc.y, sc.z )
            //g.rotation = mesh.rotation.clone() 
            //g.scale  = mesh.scale.clone()
            //g.material.side=THREE.FrontSide;
            //mesh.add(g);
            
            g.updateMatrix();
            
            // Check for child UserData
            let gChildren = g.children
            gChildren.forEach( (c)=>{
              this.checkForUserData( envObj, envScene, c )
              if( c.type == "Group" ){
              // g.add(c);
                c.position.set( pos.x+c.position.x, pos.y+c.position.y, pos.z+c.position.z )
                c.rotation.set( rot.x, rot.y, rot.z )
                c.scale.set( sc.x, sc.y, sc.z )
              }
              c.updateMatrix();
            });
            
            
          }else if( g.name.includes("Colliders") ){
            let pos = mesh.position;
            let rot = mesh.rotation;
            let sc = mesh.scale;
            //g.position.set( pos.x, pos.y, pos.z )
            //g.rotation.set( rot.x, rot.y, rot.z )
            //g.scale.set( sc.x, sc.y, sc.z )
            g.position.set( pos.x, pos.y, pos.z )
            g.rotation.set( rot.x, rot.y, rot.z )
            g.scale.set( sc.x, sc.y, sc.z )
            g.updateMatrix();
            g.visible=false;
            //mesh.add(g);
          }
        });
      }
    }
  }
  
  canAppendChildren( envObj, mesh ){
    if( mesh.type != "Group" ){
      return false;
    }
    
    let ret = true;
    //if( mesh.hasOwnProperty("userData") && mesh.userData.hasOwnProperty("Scripted") && mesh.userData.Scripted ){
    if( envObj.geoList.hasOwnProperty('Scripted') && envObj.geoList.Scripted.hasOwnProperty(mesh.name) ){
      console.log(envObj.geoList.Scripted, envObj.geoList.Scripted.hasOwnProperty(mesh.name), mesh.name)
      ret=false;
    }
    return ret;
  }
  
  canAddToScene( envObj, mesh ){
    let valid = true;
    if( mesh.hasOwnProperty("userData")
        && mesh.userData.hasOwnProperty("Instance")
        && envObj.hasOwnProperty("baseInstancesNames")
        && envObj.baseInstancesNames.hasOwnProperty(mesh.userData.Instance) ){
      valid = false;
    }
    return valid;
  }
  
  
  // ## Make Instancing actually Instance
  //   Instancing is currently not actually instancing
  //   Object is cloned, raising ram/vram usage
  checkObjectInstancing( envObj, envScene, mesh ){
    if( !envObj.hasOwnProperty("baseInstancesNames") || !envObj.hasOwnProperty("baseInstancesList") ){
      return false;
    }

    if( mesh.hasOwnProperty("userData")
        && mesh.userData.hasOwnProperty("Instance")
        && envObj.baseInstancesList.hasOwnProperty(mesh.userData.Instance) ){
          
          let name = mesh.name;
					this.log("Generate Instance - ",name);
					
					if( !envObj.geoList.hasOwnProperty("InstancesObjects") ){
						envObj.geoList['InstancesObjects']={};
					}
          
          let instBase= envObj.baseInstancesList[ mesh.userData.Instance ];

          let curPos=mesh.position;
          let curRot=mesh.rotation;
          let curScale=mesh.scale;
          
          let dupe=instBase.clone();//new THREE.Mesh(instBase.geometry.clone());
          dupe.rotation.set(curRot.x,curRot.y,curRot.z);
          dupe.position.set(curPos.x,curPos.y,curPos.z);
          dupe.scale.set(curScale.x,curScale.y,curScale.z);
           
          dupe.visible=true;
          dupe.updateMatrix();
          
          let curSide = THREE.FrontSide;
          if(instBase.userData.doubleSided){
            curSide=THREE.DoubleSide;
          }
          dupe.material.side=curSide;
					dupe.name = name+"Geo";
            
					envObj.geoList['InstancesObjects'][name]=dupe;
          mesh.parent.add( dupe );
    }
  }
  
  
	// Apparently traversing FBX objects with no children on a leaf breaks
	//   Oh well... Just get it done
  
  // Currently only used for loading core scene assets;
  //   Initial Camera Position, Avatar Geometry, Items
	// TODO : Convert into a set of agregate lists, to allow for non-scene structure settings.
  //          If a material has transparency & reflective settings, should be flagged "glass"	
	//            Even if its not in the "Scene" group.
	loadSceneFBX(objPath, imgPath, transList, verboseLoading,meshKey,addToScene){
		if(meshKey!=''){ // Prep for IsLoaded checks
			this.pxlEnv.geoLoadListComplete=0;
			this.pxlEnv.geoLoadList[meshKey]=0;
		}
		let addedGlow=0;
		
		var fbxLoader=new FBXLoader();
		fbxLoader.load( objPath, (curFbx)=>{
			let groups=curFbx.children;
			let groupTypes={};
			let groupNames=[];
			groups.forEach( (c,x) =>{ groupNames.push(c.name); groupTypes[c.name]=x; } );

			if(groupNames.indexOf('Camera')>-1){
				let ch=groups[groupTypes['Camera']].children;
				ch.forEach( (c,x)=>{
					c.matrixAutoUpdate=false;
					if(c.name=="Position"){
						let toPos=c.position.clone();
						this.pxlCamera.cameraPrevPos=toPos.clone();
						this.pxlCamera.camera.position.copy(toPos);
						this.pxlCamera.cameraPos.copy(toPos);
						this.pxlCamera.camera.updateMatrixWorld();
						this.pxlCamera.cameraBooted=true;
						this.pxlEnv.camInitPos=toPos;
						this.pxlEnv.camThumbPos=this.pxlEnv.camThumbPos.clone().add( toPos.clone() );
					}else if(c.name=="LookAt"){
						let toLookAt=c.position.clone();
						this.pxlCamera.cameraAimTarget.position.copy( toLookAt );
						this.pxlCamera.camera.lookAt(toLookAt);
						this.pxlCamera.camera.updateMatrixWorld();
						this.pxlCamera.cameraPrevLookAt=new THREE.Vector3();
						this.pxlEnv.camInitLookAt=toLookAt;
						this.pxlEnv.camThumbLookAt=this.pxlEnv.camThumbLookAt.clone().add( toLookAt.clone() );
					}else if(c.name=="ReturnPosition"){
						let toPos=c.position.clone();
						this.pxlEnv.camReturnPos=toPos;
					}else if(c.name=="ReturnLookAt"){
						let toPos=c.position.clone();
						this.pxlEnv.camReturnLookAt=toPos;
					}
				});
				this.pxlDevice.touchMouseData.initialQuat=this.pxlCamera.camera.quaternion.clone();
			}
			
			
			if(groupNames.indexOf('Items')>-1 && !this.pxlDevice.mobile){
				let ch=groups[groupTypes['Items']].children;
        let baseMtl=null;
        let lowGravMtl=null;
        let lizardKingMtl=null;
        let infinityZoomMtl=null;
        let starFieldMtl=null;
				while(ch.length>0){
					let g=ch.pop();
					//ch.push(...c.children);
					if(g.type == "Group"){
						let curChildren=g.children;
						curChildren.forEach( (c)=>{
							if(c.name == "Item"){
                if( g.name=="LowGravity" ){
                    if(lowGravMtl==null){
                        lowGravMtl=new THREE.ShaderMaterial({
                            uniforms:{
                                color:{value : c.material.emissive.clone() },
                                alphaMap:{type:'t',value : c.material.map },
                                cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture},
                                time:{ value:this.pxlTimer.msRunner },
                                intensity: {  type:"f", value: 1.5 },
                                rate: { type:"f", value: this.pxlUser.itemRotateRate }
                            },
                            vertexShader:this.pxlShaders.itemVert(),
                            fragmentShader:this.pxlShaders.itemFrag(),
                            transparent:true,
                            side:THREE.DoubleSide,
                            depthTest:true,
                            depthWrite:false,
                        });
                    }
                    c.material=lowGravMtl;
                }else if( g.name.includes("LizardKing") ){
                    if( lizardKingMtl==null ){
                        lizardKingMtl= c.material.clone();
                        lizardKingMtl.emissiveMap=lizardKingMtl.map;
                        lizardKingMtl.emissive=new THREE.Color( 0x808080 );
                    }
                    c.material=lizardKingMtl;
                }else if( g.name.includes("StarField") ){
                    //c.material.emissiveMap=c.material.map;
                    //c.material.emissive=new THREE.Color( 0x808080 );
                }else if( g.name.includes("InfinityZoom") ){
                    if(infinityZoomMtl==null){
                        infinityZoomMtl=new THREE.ShaderMaterial({
                            uniforms:{
                                color:{value : c.material.map },
                                cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture},
                                time:{ value:this.pxlTimer.msRunner },
                                intensity: {  type:"f", value: 1.0 },
                                rate: { type:"f", value: this.pxlUser.itemRotateRate }
                            },
                            vertexShader:this.pxlShaders.defaultVert(),
                            fragmentShader:this.pxlShaders.itemZoomFrag(),
                            transparent:true,
                            side:THREE.DoubleSide,
                            depthTest:true,
                            depthWrite:true,
                        });
                    }
                    c.material=infinityZoomMtl;
                }
								this.pxlUser.itemList[g.name]=c;
							}else if(c.name == "Base"){
                if(baseMtl==null){
                    baseMtl=new THREE.ShaderMaterial({
                        uniforms:{
                            color:{value : c.material.emissive.clone() },
                            alphaMap:{type:'t',value : c.material.map },
                            cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture},
                            time:{ value:this.pxlTimer.msRunner },
                            intensity: {  type:"f", value: 1.5 },
                            rate: { type:"f", value: this.pxlUser.itemBaseRotateRate }
                        },
                        vertexShader:this.pxlShaders.itemBaseVert(),
                        fragmentShader:this.pxlShaders.itemBaseFrag(),
                        transparent:true,
                        side:THREE.DoubleSide,
                        depthTest:true,
                        depthWrite:false,
                    });
                }
								c.material=baseMtl;
								this.pxlUser.itemBaseList.push(c);
							}
						});
						
						addToScene[0].add(g);
						this.pxlUser.itemGroupList[g.name]=g;
						this.pxlUser.itemListNames.push(g.name);
					}
				}
			}

			
			
			if(meshKey!=''){
				this.pxlEnv.geoList[meshKey]=curFbx;
				this.pxlEnv.geoLoadList[meshKey]=1;
			}
			this.pxlEnv.geoLoadList[meshKey]=1;

		}, undefined, (err)=>{
			if(meshKey!=''){
				this.pxlEnv.geoLoadList[meshKey]=1;
			}
		});
		
		return fbxLoader;
	}


 // -- -- -- -- -- -- -- -- -- -- //
 // Environment FBX Loader        //
 // -- -- -- -- -- -- -- -- -- -- //

	loadRoomFBX( envObj, objPath, meshKey, textureList ){
		if(meshKey==''){ // Prep for IsLoaded checks
        meshKey = envObj.roomName;
    }
    this.pxlEnv.geoLoadListComplete=0;
    this.pxlEnv.geoLoadList[meshKey]=0;

		let addedGlow=0;
		let envScene=envObj.scene;
		
    // TODO : Do new FBXLoader objects really need to be created?
    //          Sounds like the potential for a memory leak if not handled correctly
		var fbxLoader=new FBXLoader();
		fbxLoader.load( objPath, (curFbx)=>{
			let groups=curFbx.children;
			let groupTypes={};
			let groupNames=[];
			
			groups.forEach( (c,x) =>{ groupNames.push(c.name); groupTypes[c.name]=x; } );

			let count=0;
			if(groupNames.indexOf('Camera')>-1){
				let ch=groups[groupTypes['Camera']].children;
				this.log("Camera - ",groups[groupTypes['Camera']]);
				
				ch.forEach( (c,x)=>{
					c.matrixAutoUpdate=false;
					if(c.name=="Position"){
						let toPos=c.position.clone();
						envObj.cameraBooted=true;
						envObj.camInitPos=toPos;
					}else if(c.name=="LookAt"){
						let toPos=c.position.clone();
						envObj.camInitLookAt=toPos;
					}else if(c.name=="ReturnPosition"){
						let toPos=c.position.clone();
						envObj.camReturnPos=toPos;
					}else if(c.name=="ReturnLookAt"){
						let toPos=c.position.clone();
						envObj.camReturnLookAt=toPos;
					}
				});
				//this.pxlDevice.touchMouseData.initialQuat=envObj.camera.quaternion.clone();
			}
			
			if(groupNames.indexOf('AutoCamPaths')>-1){
				let ch=groups[groupTypes['AutoCamPaths']].children;
				this.log("AutoCamPaths - ",groups[groupTypes['AutoCamPaths']]);
				
				this.pxlAutoCam.autoCamPaths[ envObj.roomName ]=[];
				while(ch.length>0){
					let g=ch.pop();
					//ch.push(...c.children);
					if(g.type == "Group"){
						let autoPathDict={};
						let curChildren=g.children;
						curChildren.forEach( (c)=>{
							c.matrixAutoUpdate=false;
							autoPathDict[ c.name ] = c;
						});
						g.visible=false;
						g.matrixAutoUpdate=false;
						envScene.add(g);
						this.pxlAutoCam.autoCamPaths[ envObj.roomName ].push( autoPathDict );
					}
				}
			}
			
			if(groupNames.indexOf('Instances')>-1 && this.pxlQuality.detailLimit == 0){
				let ch=[...groups[groupTypes['Instances']].children];
				this.log("Instances - ",groups[groupTypes['Instances']]);
				
        if( ch.length > 0 ){
          if( !envObj.hasOwnProperty("baseInstancesNames") ){
            envObj.baseInstancesNames = [];
          }
          if( !envObj.hasOwnProperty("baseInstancesList") ){
            envObj.baseInstancesList = {};
          }
          let chList = []
          ch.forEach( (c,x)=>{
            this.checkForUserData( envObj, envScene, c );
            envObj.baseInstancesNames.push( c );
            envObj.baseInstancesList[c.name]=c;
            if( c.material.name == "GemSprouts_Mtl" ){
              c.material.specular.r=.1;
              c.material.specular.g=.1;
              c.material.specular.b=.1;
              if( c.material.map ){
                c.material.specularMap=c.material.map;
              }
            }
          });
        }
			}
			
			
			if(groupNames.indexOf('Items')>-1){
				let ch=groups[groupTypes['Items']].children;
				this.log("Items - ",groups[groupTypes['Items']]);
				
				while(ch.length>0){
					let g=ch.pop();
					//ch.push(...c.children);
                    // ## Set up Environment Assets for Item List
					if(g.type == "Group"){
						let curChildren=g.children;
            if( curChildren.length > 0 ){
              curChildren.forEach( (c)=>{
                if(c.name == "Item"){
                  let curMat=new THREE.ShaderMaterial({
                      uniforms:{
                          color:{value : c.material.emissive.clone() },
                          alphaMap:{type:'t',value : c.material.map },
                          cloudNoise:{type : 't',value : this.cloud3dTexture},
                          time:{ value:this.pxlTimer.msRunner },
                          intensity: {  type:"f", value: 1.5 },
                          rate: { type:"f", value: this.pxlUser.itemRotateRate }
                      },
                      vertexShader:this.pxlShaders.itemVert(),
                      fragmentShader:this.pxlShaders.itemFrag(),
                      transparent:true,
                      side:THREE.DoubleSide,
                      depthTest:true,
                      depthWrite:false,
                  });
                  c.material=curMat;
                  this.pxlUser.itemList[g.name]=c;
                }else if(c.name == "Base"){
                  let curMat=new THREE.ShaderMaterial({
                      uniforms:{
                          color:{value : c.material.emissive.clone() },
                          alphaMap:{type:'t',value : c.material.map },
                          cloudNoise:{type : 't',value : this.cloud3dTexture},
                          time:{ value:this.pxlTimer.msRunner },
                          intensity: {  type:"f", value: 1.5 },
                          rate: { type:"f", value: this.pxlUser.itemBaseRotateRate }
                      },
                      vertexShader:this.pxlShaders.itemBaseVert(),
                      fragmentShader:this.pxlShaders.itemBaseFrag(),
                      transparent:true,
                      side:THREE.DoubleSide,
                      depthTest:true,
                      depthWrite:false,
                  });
                  c.material=curMat;
                  this.pxlUser.itemBaseList.push(c);
                }
              });
              
              envScene.add(g);
              this.pxlUser.itemGroupList[g.name]=g;
              this.pxlUser.itemListNames.push(g.name);
            }
					}
				}
			}
            
			if(groupNames.indexOf('Scripted')>-1){
				let ch=groups[groupTypes['Scripted']].children;
				this.log("Scripted - ",groups[groupTypes['Scripted']]);
				
				while(ch.length>0){
					let c=ch.pop();
					if(c.isMesh){
              envObj.geoList[c.name]=c;
              envScene.add(c);
          }
				}
			}
            
			// ## Restricted to only pxlNav's build
			if(groupNames.indexOf('Glass')>-1){
				let ch=groups[groupTypes['Glass']].children;
				this.log("Glass - ",groups[groupTypes['Glass']]);
				
        if( ch.length > 0 ){
            if(!envObj.glassGroup){
                let glassGrp=new THREE.Group();
                envObj.glassGroup=glassGrp;
                envScene.add(glassGrp);
            }
            while(ch.length>0){
                let c=ch.pop();
                ch.push(...c.children);
                if(c.isMesh){
            
                    this.checkForUserData( envObj, envScene, c );
          
                    let cBackMat=c.material.clone();
                    c.material=cBackMat;
                    c.material.transparent=true;
                    c.material.opacity=.5;
                    c.material.shininess=20;
                    c.material.specular=c.material.color.clone();
                    c.material.specular.r = c.material.specular.r*.5 +.1;
                    c.material.specular.g = c.material.specular.g*.5 +.1;
                    c.material.specular.b = c.material.specular.b*.5 +.1;
                    // Default glass attributes should be applied if non-existant
                    /*
                    c.material.color=new THREE.Color(.8,.8,.8);
                    //c.material.flatShading=true;
                    c.material.reflectivity=.35;
                    c.material.shininess=.25;
                    c.material.specular=new THREE.Color(.1,.1,.1);
                    c.recieveShadow=false;
                    c.castShadow=false;
                    */
                    //c.material.side=THREE.FrontSide;
                    //c.material.depthTest=true;
                    c.material.side=THREE.BackSide;
                    c.material.depthWrite=false;
                    c.matrixAutoUpdate=false;
                    c.renderOrder = 1;
                    envObj.glassList.push(c);
                    envObj.glassGroup.add(c);
                    
                    let cFrontGeo = c.geometry.clone()
                    let cFrontMat= c.material.clone();
                    cFrontMat.copy( c.material );
                    let cFrontMesh = new THREE.Mesh( cFrontGeo, cFrontMat );
                    cFrontMesh.material.shininess=40;
                    cFrontMesh.material.side=THREE.FrontSide;
                    cFrontMesh.matrixAutoUpdate=false;
                    cFrontMesh.renderOrder = 2;
                    
                    
                    let curPos=c.position;
                    let curRot=c.rotation;
                    let curScale=c.scale;
                    
                    cFrontMesh.rotation.set(curRot.x,curRot.y,curRot.z);
                    cFrontMesh.position.set(curPos.x,curPos.y,curPos.z);
                    cFrontMesh.scale.set(curScale.x,curScale.y,curScale.z);
                    cFrontMesh.updateMatrix();
                    
                    envScene.add( cFrontMesh )
                    envObj.glassList.push(cFrontMesh);
                    envObj.glassGroup.add(cFrontMesh);
                }
            }
				}
			}
			
            
			if(groupNames.indexOf('Sky')>-1){
				let ch=groups[groupTypes['Sky']].children;
				this.log("Sky - ",groups[groupTypes['Sky']]);
				
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
						let curMat=new THREE.ShaderMaterial({
							uniforms:{
								diffuse: { type:"t",value:c.material.map },
								envDiffuse: { type:"t",value:null },
								noiseTexture: { type:"t",value:this.pxlEnv.cloud3dTexture },
								fogColor:{ value: envScene.fog.color },
								time:{ value:this.pxlTimer.msRunner },
								camNear:{ type:"f", value: envObj.camera.near },
								camFar:{ type:"f", value: envObj.camera.far },
                resUV: { value: this.pxlDevice.screenRes },
							},
							vertexShader:this.pxlShaders.skyObjectVert(),
							fragmentShader:this.pxlShaders.skyObjectFrag()
						});
						c.geometry.computeFaceNormals();
						c.geometry.computeVertexNormals();
						c.material = curMat;
						c.matrixAutoUpdate = false;
            c.frustumCulled = false;
            c.layers.set( this.pxlEnv.renderLayerEnum.SKY )
						//c.material.depthTest=true;
						//c.material.depthWrite=true;
						envObj.geoList[ c.name ] = c;
            envObj.textureList[ c.name ] = curMat;
            //envObj.shaderGeoList[c.name]=c;
						envScene.add(c);
					}
				}
			}
			
			if(groupNames.indexOf('PortalExit')>-1){
				let ch=groups[groupTypes['PortalExit']].children;
				this.log("PortalExit - ",groups[groupTypes['PortalExit']]);
				
				while(ch.length>0){
					let c=ch.pop();
					c.matrixAutoUpdate=false;
					envObj.portalList[c.name]=c;
				}
			}
			
			if(groupNames.indexOf('Colliders')>-1){
				let colliderParent=groups[groupTypes['Colliders']];
				this.log("Colliders - ",groups[groupTypes['Colliders']]);
				
				let colliderGroups=colliderParent.children;
				envObj.collidersExist=colliderGroups.length>0;
				for(let x=0; x<colliderGroups.length; ++x){
					let pName=colliderGroups[x].name;
					let curChildren=colliderGroups[x].children;
					while(curChildren.length>0){
						let child=curChildren.pop();
						curChildren.push(...child.children);
						if(child.isMesh){
							child.visible=false;
							//child.material.depthTest=false;
							//child.material.depthWrite=true;
							let axisArray='noAxis';
							if( child.userData.checkX && child.userData.checkZ ){
								axisArray = ( ~~(child.userData.checkX>0)+"" ) + ( ~~(child.userData.checkZ>0)+"" );
							}
                            
							if( pName == "ColliderWalls"){
								envObj.antiColliderActive=true;
								envObj.antiColliderList[ axisArray ].push(child);
							}else if( pName == "ColliderTops"){
								envObj.antiColliderTopActive=true;
								envObj.antiColliderTopList[ axisArray ].push(child);
							}else{
								if( pName == "RoomWarpZone"){
									envObj.roomWarp.push(child);
								}
								envObj.colliderActive=true;
								envObj.colliderList[ axisArray ].push(child);
							}
							child.matrixAutoUpdate=false;
							envScene.add(child);
							envObj.geoList[child.name]=child;
						}
					}
				}
			}
            
            // This has become pretty specific to the Shadow Planet
            // Rework it
			if(groupNames.indexOf('UserScreens')>-1){
				let ch=groups[groupTypes['UserScreens']].children;
				this.log("UserScreens - ",groups[groupTypes['UserScreens']]);
				
				let userScreenSeed=0;
        // Run the mask layers outside shader calculations
        let maskArray=[ new THREE.Vector3(1,0,0), new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,1) ]
        let maskPaths=[this.assetRoot+"DJ_Vector_Masks_1.jpg", this.assetRoot+"DJ_Vector_Masks_2.jpg", this.assetRoot+"DJ_Vector_Masks_3.jpg"];
        let modMaskId=0;
        let modPathId=0;
        let modMax=maskArray.length;
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
						let curMat=new THREE.ShaderMaterial({
							uniforms:{
								camExists:{ type:'f',value:0.0 },
								time:{ value:this.pxlTimer.msRunner },
								seed:{ type:'f',value:userScreenSeed*1.1423 },
								alpha:{ type:'f',value:1.0 },
								boostPerc: { value: envObj.userScreenIntensity },
								scale:{ value:new THREE.Vector2(100,100)},
								ratio:{ value:new THREE.Vector2(1,1)},
								videoFeed:{type : 't',value:null},
								cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture},
								maskChannel:{value : maskArray[modMaskId] },
								maskMap:{type : 't',value : this.pxlUtils.loadTexture( maskPaths[modPathId] ) },
							},
							vertexShader:envObj.userScreenVert,
							fragmentShader:envObj.userScreenFrag,
							transparent:true,
							//side:THREE.DoubleSide,
							side:THREE.FrontSide,
							//depthTest:true,
							//depthWrite:true
						});
                        
						c.geometry.computeFaceNormals();
						c.geometry.computeVertexNormals();
						c.material=curMat;
						
						c.matrixAutoUpdate=false;
						envObj.pxlEnv.camScreenData.screenGeoList.push(c)
						
						envScene.add(c);
                        
            userScreenSeed += 1;
            modMaskId = userScreenSeed % modMax;
            modPathId = Math.floor(userScreenSeed/3) % modMax;
					}
				}
			}
			
			if(groupNames.indexOf('ScrollingTextures')>-1){
				let ch=groups[groupTypes['ScrollingTextures']].children;
				this.log("ScrollingTextures - ",groups[groupTypes['ScrollingTextures']]);
				
				let scrollScreenSeed=1;
				while(ch.length>0){
					scrollScreenSeed+=1;
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
            
            this.checkForUserData( envObj, envScene, c );
          
						let name=c.name;
						let speed=0.05;
						if(name.indexOf("_")>-1){
							speed=name.split("_")[1];
							speed=parseInt(speed)*.01;
						}
						let curMat=new THREE.ShaderMaterial({
							uniforms:{
								scrollTexture:{type : 't',value:c.material.map},
								//cloudNoise:{type : 't',value : this.cloud3dTexture},
								time:{ value:this.pxlTimer.msRunner },
								speed: { value: speed },
								seed:{ type:'f',value:scrollScreenSeed*1.1423 },
								boostPerc: { value: 1.0 },
							},
							vertexShader:this.pxlShaders.scrollingTextureVert(),
							fragmentShader:this.pxlShaders.scrollingTextureFrag(),
							transparent:true,
							//side:THREE.DoubleSide,
							side:THREE.FrontSide,
							//depthTest:true,
							//depthWrite:true
						});
						
						c.geometry.computeFaceNormals();
						c.geometry.computeVertexNormals();
						c.material=curMat;
						
						c.matrixAutoUpdate=false;
						envScene.add(c);
					}
				}
			}
			
			if(groupNames.indexOf('FlatColor')>-1){
				let ch=groups[groupTypes['FlatColor']].children;
				this.log("FlatColor - ",groups[groupTypes['FlatColor']]);
				
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
            
            this.checkForUserData( envObj, envScene, c );
          
						let mtl=new THREE.MeshBasicMaterial({
							color:c.material.color.clone()
						});
						//mtl.side=THREE.DoubleSide;	
						mtl.side=THREE.FrontSide;
						mtl.flatShading=true;
						c.material=mtl;
						c.matrixAutoUpdate=false;
						envScene.add(c);
						//addToScene[1].add(c.clone());
					}
				}
			}
			
			if(groupNames.indexOf('LambertColor')>-1){
				let ch=groups[groupTypes['LambertColor']].children;
				this.log("LambertColor - ",groups[groupTypes['LambertColor']]);
				
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
            
            this.checkForUserData( envObj, envScene, c );
          
						let mtl=new THREE.MeshLambertMaterial();
						if(c.material.map){
							let mtlMap=c.material.map.clone();
							mtl.map=mtlMap;
							//mtl.color=new THREE.Color( 0x888888 );
							mtl.emissiveMap=mtlMap;
							mtl.emissiveIntensity=.5;
							c.material=mtl;
						}else{
							mtl.color=c.material.color.clone();
							mtl.emissive=c.material.emissive.clone();
							//mtl.side=THREE.DoubleSide;
							mtl.side=THREE.FrontSide;
							mtl.flatShading=true;
							c.material=mtl;
						}
						
						c.matrixAutoUpdate=false;
						envScene.add(c);
						//addToScene[1].add(c.clone());
					}
				}
			}
			
			if(groupNames.indexOf('Clickable')>-1){
				let colliderParent=groups[groupTypes['Clickable']];
				this.log("Clickable - ",groups[groupTypes['Clickable']]);
				
				let colliderGroups=colliderParent.children;
				for(let x=0; x<colliderGroups.length; ++x){
					let pName=colliderGroups[x].name;
					let curChildren=colliderGroups[x].children;
					while(curChildren.length>0){
						let child=curChildren.pop();
						curChildren.push(...child.children);
						if(child.isMesh){
							let mtl=new THREE.MeshBasicMaterial();
							mtl.color=new THREE.Color( 0xffffff );
							//mtl.map=child.material.map.clone()
							child.material.emissive=new THREE.Color( 0x444444 );
							child.material.emissiveMap=child.material.map;
						
							child.matrixAutoUpdate=false;
						
							if(!envObj.objectClickableObjectList[child.name]){
								envObj.objectClickableObjectList[child.name]={};
							}
							envObj.objectClickableObjectList[child.name][pName]=child;
							envObj.objectClickable.push(child);
							envScene.add(child);
							
							if(pName=="Hover"){
								child.visible=false;
							}
						}
					}
				}
			}
			
			// Shader Overrides
			if(groupNames.indexOf('AnimatedTextures')>-1){
				let ch=groups[groupTypes['AnimatedTextures']].children;
				this.log("AnimatedTextures - ",groups[groupTypes['AnimatedTextures']]);
				
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					if(c.isMesh){
            
            this.checkForUserData( envObj, envScene, c );
          
						let uValues={
								time:{ value:this.pxlTimer.msRunner },
								glowTexture: { type:"t",value:c.material.map },
								cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture},
								glowColor: { value: new THREE.Vector3( .01,.35,.55 ) },
								intensity: { type:"f", value: .35 },
								rate: { type:"f", value: 2.0 },
								freq: { type:"f", value: 1.0 }
							};
						let vertShader=this.pxlShaders.glowTextureVert();
						let fragShader=this.pxlShaders.glowTextureFrag();
						
						let curMat=new THREE.ShaderMaterial({
							uniforms:uValues,
							vertexShader:vertShader,
							fragmentShader:fragShader,
							transparent:true,
							//depthTest:true,
							//depthWrite:true,
							//side:THREE.DoubleSide
							side:THREE.FrontSide
						});
						
						c.geometry.computeFaceNormals();
						c.geometry.computeVertexNormals();

						c.material=curMat;
						
						c.matrixAutoUpdate=false;
						envScene.add(c);
					}
				}
			}
			
            
			if(groupNames.indexOf('Lights')>-1){
				let ch=groups[groupTypes['Lights']].children;
				this.log("Lights - ",groups[groupTypes['Lights']]);
				
				while(ch.length>0){
					let c=ch.pop();
					ch.push(...c.children);
					
					if( c.type.includes("Light") ){
            if( !envObj.hasOwnProperty('lightList') ){
                envObj['lightList']={};
            }
            if( !envObj.geoList.hasOwnProperty('lights') ){
                envObj.geoList['lights']=[];
            }
            if( c.type == "PointLight" ){
              c.decay = 3;
              c.distance = 20 * c.intensity;
              c.intensity = 2;
            }
						
            if( !envObj.lightList.hasOwnProperty( c.type ) ){
              envObj.lightList[ c.type ] = [];
            }
						
            envObj.lightList[ c.type ].push( c );
            envObj.geoList['lights'].push( c );
            
						c.matrixAutoUpdate=false;
						envScene.add(c);
					}
				}
			}
      
			// Merged Geo, faster but more polies
			if(groupNames.includes('Scene') || groupNames.includes('MainScene')){
        let groupId = groupTypes['Scene'] || groupTypes['MainScene'];
				let ch = groups[groupId].children;
				this.log("MainScene - ",groups[groupId]);
        
				while(ch.length>0){
					let c=ch.pop();
          
          this.checkForUserData( envObj, envScene, c );

					if(c.isMesh){
            if( c.userData.hasOwnProperty("Show") && (!c.userData.Show || c.userData.Show == 0) ){
              c.visible = false;
            }
            
						envObj.geoList[c.name]=c;
              
            let curSide = THREE.FrontSide;
            if(c.userData.doubleSided){
              curSide=THREE.DoubleSide;
            }
						
            if( textureList.hasOwnProperty( c.name ) ){
							c.material= textureList[ c.name ];
							c.matrixAutoUpdate=false;
							//c.geometry.computeFaceNormals();
							//c.geometry.computeVertexNormals();
              //c.material.shading = THREE.SmoothShading;
							//envScene.add(c);
							envObj.geoList[c.name]=c;
							continue;
						}
            if( c.material.map ){
              if( c.material.emissive.r>0 ){
                c.material.emissiveIntensity=c.material.emissive.r;
                c.material.emissive=new THREE.Color( 0xFFFFFF );
                c.material.emissiveMap=c.material.map;
              }
              if( !c.material.specularMap && c.material.specular.r>0 ){
                c.material.specularMap=c.material.map;
              }
            }
            //c.material.depthWrite=true;
            c.material.side=curSide;
            //c.geometry.computeFaceNormals();
            //c.geometry.computeVertexNormals();
            c.matrixAutoUpdate=false;
            //envScene.add(c);
              
					}else{
            if( c.type.includes("Light") ){
                if( !envObj.lightList.hasOwnProperty( c.type ) ){
                  envObj.lightList[ c.type ] = [];
                }
                envObj.lightList[ c.type ].push( c );
						}else if( c.type == "Group" ){
                let addChildren = true;
                if( envObj.geoList.hasOwnProperty('Scripted') ){
                  let scriptedList = Object.keys(envObj.geoList['Scripted']);
                  //addChildren = false;
                }

                if( addChildren ){
                  envScene.add(c);
                  ch.push( ...c.children );
                }
            }
					}
				}
			}
			
			if(groupNames.indexOf('Markers')>-1){
				let ch=groups[groupTypes['Markers']].children;
				this.log("Markers - ",groups[groupTypes['Markers']]);
				
				while(ch.length>0){
					let c=ch.pop();
					envObj.marker[ c.name ]=c.position;
				}
			}

			this.pxlEnv.geoList[meshKey]=curFbx;
			this.pxlEnv.geoLoadList[meshKey]=1;

			envObj.fbxPostLoad();
			
		}, null, (err)=>{
			if(meshKey!=''){
				this.pxlEnv.geoLoadList[meshKey]=1;
			}
		});
		
		return fbxLoader;
	}


	pxlShaderBuilder( customUniforms, vertShader, fragShader, defines=null ){
		var mat;
		var uniforms={
			diffuse:{type:"t",value:null},
			time:{ value:this.pxlTimer.msRunner }
		};
		if(customUniforms!=null){
			uniforms=Object.assign({},uniforms,customUniforms);
		}
		
    let shaderOptions={
			uniforms:uniforms,
			vertexShader:vertShader,
			fragmentShader:fragShader
    }
    if( defines ){
      shaderOptions.defines = defines;
    }
    
		mat=new THREE.ShaderMaterial( shaderOptions );
		mat.transparent=true;
		mat.depthTest=true;
		
		return mat;
	}


	////////////////////////////////////////////////////

	removeChildren(curObj){
		var removedCount=0;
		var children=curObj.children;
		for(var x=0; x<children.length; ++x){
			if(children[x].type == "Group"){
				curObj.remove(children[x]);
				removedCount++;
			}
		}
		return removedCount;
	}

	findMesh(curObj){
		var ret=null;
		var children=curObj.children;
		for(var x=0; x<children.length; ++x){
			if(children[x].type == "Mesh"){
				ret=children[x];
				break;
			}
		}
		return ret;
	}

	// Used mainly for groups of objects rather than calculating bbox for an object itself
	getBBoxCentroid(curObj){
		try{
			var objBBox=new THREE.Box3().setFromObject(curObj);
			var min=objBBox.min;
			var max=objBBox.max;
			var objCentroid=new THREE.Vector3().addVectors(max,min).multiplyScalar(.5);
			curObj.userData={'bbox':objBBox, 'centroid':objCentroid};
			if(mapBookHelper != null){
				mapBookHelper.update();
			}
		}catch(err){
			console.log("- - - - - - - - ERROR - - - - - - - -");
			console.log("     Object does not exist.\n           - Error Info -");
			console.log(err);
			console.log("- - - - - - - - - - - - - - - - - - -");
		}
	}
	
	
    loadScript( url ){
        return new Promise( (resolve, reject)=>{
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            script.async = true;

            script.onreadystatechange = ()=>{ resolve(true); } ;
            script.onload = ()=>{ resolve(true); } ;

            document.head.appendChild(script);
        });
    }
    
    
    xmlHttp(){
        return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    }
    
	// ## Added for Google Drive doc reading
	//      Links open within the iframe and fail on header source origin issues
	static getURLContent(url){
		return new Promise( (resolve, reject)=>{
            //let xhrRequest= this.xmlHttp();
            let xhrRequest= window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
			/*xhrRequest.onreadystatechange=(e)=>{
				if(xhrRequest.readyState==4 && xhrRequest.status==200){
					return xhrRequest.responceText;
				}
			};*/
			xhrRequest.open("GET",url);//,false);
			xhrRequest.onload=(e)=>{
				if(xhrRequest.readyState==4 && ( xhrRequest.status>=200 && xhrRequest.status<300 ) ){
					resolve(xhrRequest.response);
				}else{
					resolve(xhrRequest.statusText);
				}
			}
			xhrRequest.onerror=()=>reject(xhrRequest.statusText);
			xhrRequest.send();
		});
	}

	getExternalHTML(url, callback){
		if(!window.XMLHttpRequest){
			window.open( url, '_blank' );
			return;
		}
        let xhrRequest= this.xmlHttp();
		xhrRequest.onreadystatechange=function(){
			if (this.readyState == 4 && this.status == 200) {
				if( callback && typeof( callback ) === 'function' ){
					callback( xhrRequest.responseText );
				}
			}
		}
		xhrRequest.open( 'GET', url, true );
		xhrRequest.responceType='document';
		xhrRequest.send();
	}

	fetchURLStatus(url, cmdRun, resolveDict){
        fetch( url, {
            method: 'HEAD'
        }).then( (resolve) =>{
            cmdRun(resolve.status, resolveDict);
        }).catch( (err)=>{
            cmdRun(404, resolveDict);
        });
	}
    
    
    urlExistsFallback( url ){
        return new Promise( (resolve, reject)=>{
            let xhrRequest= this.xmlHttp();
            xhrRequest.open('HEAD', url, true);
            xhrRequest.send();
            console.log( xhrRequest ) ;
            xhrRequest.onreadystatechange=function(){
                if( this.readyState == this.DONE ){
                    resolve( this.status<400 );
                }
            }
            xhrRequest.onerror=(err)=>{
                resolve( false );
            };
            xhrRequest.ontimeout=(err)=>{
                resolve( false );
            };
        });
    }
    
    urlExists(url){
        var worker;
        if( Worker ){
            worker = new Worker("js/pxlWorkers/FileWorkerIO.js");  
            //this.workerList.push( worker );
        }
        
        return new Promise( (resolve, reject)=>{
            if( worker ){
                worker.onmessage = function(event) {  
                    resolve( event.data.data );
                };
                worker.onerror = function(event) {  
                    resolve( false );
                };

                worker.postMessage( { type: "urlExists", data: url } );
            }else{
                let resp= this.urlExistsFallback( url ).then( (resp)=>{
                    resolve( resp );
                });
            }
        }).then( (resp)=>{
            if( worker ){
                worker.terminate();
            }
            return resp;
        }).catch( (err)=>{
            if( worker ){
                worker.terminate();
            }
            return false;
        });
    }
}