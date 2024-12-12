// Core File IO Helper Utilities
// -- -- -- --

import { Vector2, Vector3 } from "./Types.js";
import * as THREE from "../../libs/three/three.module.js";
import { FBXLoader } from "../../libs/three/FBXLoader.js";

export class FileIO{
  constructor( folderDict={}){
    this.pxlTimer=null;
    this.pxlUtils=null;
    this.pxlQuality=null;
    this.pxlVideo=null;
    this.pxlCamera=null;
    this.pxlAutoCam=null;
    this.pxlUser=null;
    this.pxlEnv=null;
    this.pxlAnim=null;
    this.pxlDevice=null;
    this.pxlShaders=null;
    
    // Turn on Verbose Logging to Javascript Console
    this.runDebugger = false;

    this.assetRoot = this.findInDict( folderDict, "assetRoot", "images/assets/" );
    this.guiRoot = this.findInDict( folderDict, "guiRoot", "images/GUI/" );
    this.roomRoot = this.findInDict( folderDict, "roomRoot", "images/rooms/" );
    this.vidRoot = this.findInDict( folderDict, "vidRoot", "images/screenContent/" );
    
    this.workerList = [];
  }
  
  setDependencies( pxlNav ){
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlUtils=pxlNav.pxlUtils;
    this.pxlQuality=pxlNav.pxlQuality;
    this.pxlVideo=pxlNav.pxlVideo;
    this.pxlCamera=pxlNav.pxlCamera;
    this.pxlAutoCam=pxlNav.pxlAutoCam;
    this.pxlUser=pxlNav.pxlUser;
    this.pxlEnv=pxlNav.pxlEnv;
    this.pxlAnim=pxlNav.pxlAnim;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlShaders=pxlNav.pxlShaders;
  }

  log(...logger){
    if( this.runDebugger ){
      console.log("---");
      logger.forEach( (l)=>{ console.log(l); } );
      //logger= logger.length<2 ? logger[0] : logger;
      //console.log(logger);
    }
  }
  
  findInDict( dict, key, def ){
    if( dict.hasOwnProperty(key) ){
      return dict[key];
    }else{
      dict[key]=def;
      return def;
    }
  }

  // Check for UserData on the Mesh
  // envObj = Environment Class Object
  // envScene = Environment ThreeJS Scene Object
  // mesh = Current Object To Check For UserData Entries
  checkForUserData( envObj, envScene, mesh ){
    if( mesh.hasOwnProperty("userData") ){
      if( mesh.hasOwnProperty("material") ){
        if( mesh.userData.hasOwnProperty("doubleSided") && mesh.userData.doubleSided ){
          mesh.material.side=THREE.DoubleSide;
        }else{
          mesh.material.side=THREE.FrontSide;
        }
      }

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
  
  checkIsGlassLiquid( envObj, envScene, mesh, matList ){

    let isGlass = false;
    if( mesh.userData.hasOwnProperty("isGlass") && mesh.userData.isGlass ){
      isGlass=true;
    }
    if( mesh.userData.hasOwnProperty("isLiquid") && mesh.userData.isLiquid ){
      isGlass=true;
    }

    if( !isGlass ){
      return false;
    }
    
    this.log("Glass Detected - ",mesh.name);


    if(!envObj.glassGroup){
      let glassGrp=new THREE.Group();
      envObj.glassGroup=glassGrp;
      envScene.add(glassGrp);
    }


    let cBackMat=mesh.material.clone();
    mesh.material=cBackMat;
    mesh.material.transparent=true;
    mesh.material.opacity=.5;
    mesh.material.shininess=20;
    mesh.material.specular=mesh.material.color.clone();
    mesh.material.specular.r = mesh.material.specular.r*.5 +.1;
    mesh.material.specular.g = mesh.material.specular.g*.5 +.1;
    mesh.material.specular.b = mesh.material.specular.b*.5 +.1;
    
    //mesh.material.side=THREE.FrontSide;
    //mesh.material.depthTest=true;
    mesh.material.side=THREE.BackSide;
    mesh.material.depthWrite=false;
    mesh.matrixAutoUpdate=false;
    mesh.renderOrder = 1;
    envObj.glassList.push(mesh);
    envObj.glassGroup.add(mesh);
    
    let cFrontGeo = mesh.geometry.clone()
    let cFrontMat= mesh.material.clone();
    cFrontMat.copy( mesh.material );
    let cFrontMesh = new THREE.Mesh( cFrontGeo, cFrontMat );
    cFrontMesh.name = mesh.name+"_Front";
    cFrontMesh.material.shininess=40;
    cFrontMesh.material.side=THREE.FrontSide;
    cFrontMesh.matrixAutoUpdate=false;
    cFrontMesh.renderOrder = 2;
    
    
    let curPos=mesh.position;
    let curRot=mesh.rotation;
    let curScale=mesh.scale;
    
    cFrontMesh.rotation.set(curRot.x,curRot.y,curRot.z);
    cFrontMesh.position.set(curPos.x,curPos.y,curPos.z);
    cFrontMesh.scale.set(curScale.x,curScale.y,curScale.z);
    cFrontMesh.updateMatrix();
    

    mesh.parent.add( cFrontMesh )
    envObj.glassList.push(cFrontMesh);
    envObj.glassGroup.add(cFrontMesh);


    return isGlass;
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
          
          if( !envObj.geoList.hasOwnProperty("InstanceObjects") ){
            envObj.geoList['InstanceObjects']={};
          }
          
          let curPos=mesh.position;
          let curRot=mesh.rotation;
          let curScale=mesh.scale;
          let instBase= envObj.baseInstancesList[ mesh.userData.Instance ];

          
          if( mesh.type == "Mesh" ){

            const instancedMesh = new THREE.InstancedMesh(instBase.geometry, instBase.material, mesh.geometry.attributes.position.count);
            instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            instancedMesh.name = name + "Geo";

            const matrix = new THREE.Matrix4();
            const position = new THREE.Vector3();
            const normal = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            const scale = new THREE.Vector3(1, 1, 1);
            const hasColor = mesh.geometry.attributes.hasOwnProperty("color");

            // Prevent dupelicate instances
            //   Verts are split, so neighboring polygons have stacked vertices
            //     'entry' checks those dupes
            let pointRecorder = {};
            for (let i = 0; i < mesh.geometry.attributes.position.count; i++) {
              position.fromBufferAttribute(mesh.geometry.attributes.position, i);
              let entry = position.toArray();
              entry = entry.join(",");
              if( !pointRecorder.hasOwnProperty(entry) ){
                normal.fromBufferAttribute(mesh.geometry.attributes.normal, i);
                let randomRot = new THREE.Euler( 0,Math.random() * 2 * Math.PI, 0);
                quaternion.setFromEuler(randomRot);
                
                let curScale = scale;
                if( hasColor ){
                  let curScalar = mesh.geometry.attributes.color.getX(i);
                  curScale = new THREE.Vector3(curScalar, curScalar, curScalar);
                }
                matrix.compose(position, quaternion, curScale);
                instancedMesh.setMatrixAt(i, matrix);
                pointRecorder[entry]=true;
              }
            }

            instancedMesh.visible = true;
            instancedMesh.updateMatrix();

            envObj.geoList['InstanceObjects'][name] = instancedMesh;
            mesh.parent.add(instancedMesh);
            mesh.visible = false;
            mesh.parent.remove(mesh);
          }else{
            // Clone the base instance; single instance
            const instancedMesh = new THREE.InstancedMesh(instBase.geometry, instBase.material, 1);
            instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
            instancedMesh.name = name+"Geo";

            let altInstPlacement = false;
            if( mesh.userData.hasOwnProperty("fixInstMatrix") ){
              altInstPlacement = !!mesh.userData.fixInstMatrix;
            }

            if( altInstPlacement ){
              instancedMesh.rotation.set(curRot.x,curRot.y,curRot.z);
              instancedMesh.position.set(curPos.x,curPos.y,curPos.z);
              instancedMesh.scale.set(curScale.x,curScale.y,curScale.z);
            }else{
              const matrix = new THREE.Matrix4();
              matrix.compose(curPos, new THREE.Quaternion().setFromEuler(curRot), curScale);
              instancedMesh.setMatrixAt(0, matrix);
            }

            instancedMesh.visible=true;
            instancedMesh.updateMatrix();

            envObj.geoList['InstanceObjects'][name] = instancedMesh;
            mesh.parent.add(instancedMesh);
            mesh.visible=false;
            mesh.parent.remove(mesh);
          }
           

          /*
          // Dupe the base object; single dupe
          
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
            
          envObj.geoList['InstanceObjects'][name]=dupe;
          mesh.parent.add( dupe );
          */
    }
  }
  
  
 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
  
  // TODO : Apparently traversing FBX objects with no children on a leaf breaks
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
    let pingCount=0;
    
    var fbxLoader=new FBXLoader();
    fbxLoader.load( objPath, (curFbx)=>{
      let groups=curFbx.children;
      let groupTypes={};
      let groupNames=[];
      groups.forEach( (c,x) =>{ groupNames.push(c.name); groupTypes[c.name]=x; } );
      groupNames.forEach( (curName) =>{
        if(curName.includes('Camera')){
          let ch=groups[groupTypes[curName]].children;
          ch.forEach( (c,x)=>{
            c.matrixAutoUpdate=false;
            if(c.name.includes("Position")){
              let toPos=c.position.clone();
              this.pxlCamera.cameraPrevPos=toPos.clone();
              this.pxlCamera.camera.position.copy(toPos);
              this.pxlCamera.cameraPos.copy(toPos);
              this.pxlCamera.camera.updateMatrixWorld();
              this.pxlCamera.cameraBooted=true;
              this.pxlEnv.camInitPos=toPos;
              this.pxlEnv.camThumbPos=this.pxlEnv.camThumbPos.clone().add( toPos.clone() );
            }else if(c.name.includes("LookAt")){
              let toLookAt=c.position.clone();
              this.pxlCamera.cameraAimTarget.position.copy( toLookAt );
              this.pxlCamera.camera.lookAt(toLookAt);
              this.pxlCamera.camera.updateMatrixWorld();
              this.pxlCamera.cameraPrevLookAt=new Vector3();
              this.pxlEnv.camInitLookAt=toLookAt;
              this.pxlEnv.camThumbLookAt=this.pxlEnv.camThumbLookAt.clone().add( toLookAt.clone() );
            }else if(c.name.includes("ReturnPosition")){
              let toPos=c.position.clone();
              this.pxlEnv.camReturnPos=toPos;
            }else if(c.name.includes("ReturnLookAt")){
              let toPos=c.position.clone();
              this.pxlEnv.camReturnLookAt=toPos;
            }
          });
          this.pxlDevice.touchMouseData.initialQuat=this.pxlCamera.camera.quaternion.clone();
        }
        
        if(curName.includes('Items')){
          let ch=groups[groupTypes[curName]].children;
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
                if(c.name.includes("Item")){
                  if( g.name.includes("LowGravity")){
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
                        vertexShader:this.pxlShaders.objects.itemVert(),
                        fragmentShader:this.pxlShaders.objects.itemFrag(),
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
                        vertexShader:this.pxlShaders.core.defaultVert(),
                        fragmentShader:this.pxlShaders.objects.itemZoomFrag(),
                        transparent:true,
                        side:THREE.DoubleSide,
                        depthTest:true,
                        depthWrite:true,
                      });
                    }
                    c.material=infinityZoomMtl;
                  }
                  this.pxlUser.itemList[g.name]=c;
                }else if(c.name.includes("ItemBase")){
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
                      vertexShader:this.pxlShaders.objects.itemBaseVert(),
                      fragmentShader:this.pxlShaders.objects.itemBaseFrag(),
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
      });
      
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

 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
 // -- -- -- -- -- -- -- -- -- -- -- -- -- //
 
 
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
      //envScene.add(curFbx);
      //console.log(curFbx)
      let groups=curFbx.children;
      let groupTypes={};
      let groupNames=[];
      
      groups.forEach( (c,x)=>{
        let curName=c.name.split("_")[0];
        groupNames.push(curName);
        groupTypes[curName]=x;
      });

      // Verbose Logging Step Count
      let count=0;
      /* - Used as -
        count++;
        this.log("Step Count - ",count);
      */
      
      // @ Loaded Scene File - Environment Group; 'Camera'
      if(groupNames.indexOf('Camera')>-1){
        let ch=[];
        this.log("Camera - ",groups[groupTypes['Camera']]);
        
        let rootCamObjects = false;
        let checkGroups = groups[groupTypes['Camera']].children;
        checkGroups.forEach( (c,x)=>{
          if( c.name.includes("Position") || c.name.includes("LookAt") || c.name.includes("ReturnPosition") || c.name.includes("ReturnLookAt") ){
            ch.push(c);
            rootCamObjects=true;
          }else{
            if( c.children.length > 0 ){
              ch.push(...c.children);
            }
          }
        });

        //envObj.geoList['camera']=groups[groupTypes['Camera']];
        ch.forEach( (c,x)=>{
          c.matrixAutoUpdate=false;
          let parentName = c.parent.name;
          if( parentName == groups[groupTypes['Camera']].name ){
            parentName = "Default";
          }
          if( !envObj.camLocation.hasOwnProperty(parentName) ){
            envObj.camLocation[parentName]={};
            envObj.camLocation[parentName]["Position"]=new Vector3( 0, 0, -10 );
            envObj.camLocation[parentName]["LookAt"]=new Vector3( 0, 0, 0 );
          }
          if(c.name.includes("PositionMobile")){
            let toPos=c.position.clone();
            envObj.cameraBooted=true;
            envObj.camInitPos=toPos;
            envObj.camLocation[parentName]["PositionMobile"]=toPos;
          }else if(c.name.includes("LookAtMobile")){
            let toPos=c.position.clone();
            envObj.camInitLookAt=toPos;
            envObj.camLocation[parentName]["LookAtMobile"]=toPos;
          }else if(c.name.includes("Position")){
            let toPos=c.position.clone();
            envObj.cameraBooted=true;
            envObj.camInitPos=toPos;
            envObj.camLocation[parentName]["Position"]=toPos;
          }else if(c.name.includes("LookAt")){
            let toPos=c.position.clone();
            envObj.camInitLookAt=toPos;
            envObj.camLocation[parentName]["LookAt"]=toPos;
          }else if(c.name.includes("ReturnPosition")){
            let toPos=c.position.clone();
            envObj.camReturnPos=toPos;
            envObj.camLocation[parentName]["ReturnPosition"]=toPos;
          }else if(c.name.includes("ReturnLookAt")){
            let toPos=c.position.clone();
            envObj.camReturnLookAt=toPos;
            envObj.camLocation[parentName]["ReturnLookAt"]=toPos;
          }
        });


        // Check for missing Mobile Camera Position/LookAt
        let locationList = Object.keys( envObj.camLocation );
        locationList.forEach( (c)=>{
          let curLoc = envObj.camLocation[c];
          if( !curLoc.hasOwnProperty("PositionMobile") ){
            curLoc["PositionMobile"] = curLoc["Position"];
          }
          if( !curLoc.hasOwnProperty("LookAtMobile") ){
            curLoc["LookAtMobile"] = curLoc["LookAt"];
          }
        });


        //this.pxlDevice.touchMouseData.initialQuat=envObj.camera.quaternion.clone();
      }
      
      // @ Loaded Scene File - Environment Group; 'AutoCamPaths'
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
      
      // @ Loaded Scene File - Environment Group; 'Instances'
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
          });
        }
      }
      
      
      // @ Loaded Scene File - Environment Group; 'Lights'
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
      // @ Loaded Scene File - Environment Group; 'MainScene'
      if(groupNames.includes('Scene') || groupNames.includes('MainScene')){
        let groupId = groupTypes['Scene'] || groupTypes['MainScene'];
        let ch = groups[groupId].children;
        this.log("MainScene - ",groups[groupId]);

        let curObjId = -1;
        while( curObjId < ch.length ){
          curObjId++;
          
          if( curObjId >= ch.length ){
            break;
          }

          let c=ch[ curObjId ];
          
          this.checkForUserData( envObj, envScene, c );

          if(c.isMesh){
            if( c.userData.hasOwnProperty("Show") && (!c.userData.Show || c.userData.Show == 0) ){
              c.visible = false;
            }
            
            envObj.geoList[c.name]=c;
              
            let curSide = THREE.FrontSide;
            // @ FBX - User Data; boolean, 'doubleSided'
            if(c.userData.doubleSided){
              curSide=THREE.DoubleSide;
            }
            
            // Custom material shader was added to this object, apply it
            if( textureList.hasOwnProperty( c.name ) ){
              let curMap = null;
              if( c.material.map ){
                curMap = c.material.map;
              }
              c.material= textureList[ c.name ];

              if( curMap ){
                if( c.material.uniforms.hasOwnProperty("diffuse") ){
                  c.material.uniforms.diffuse.value = curMap;
                }
                if( c.material.hasOwnProperty("emissiveMap") ){
                  c.material.emissiveMap=curMap;
                  if( c.material.emissive.r>0 ){
                    c.material.emissiveIntensity=c.material.emissive.r;
                  }
                }
              }
              c.matrixAutoUpdate=false;
              //c.geometry.computeFaceNormals();
              //c.geometry.computeVertexNormals();
              //c.material.shading = THREE.SmoothShading;
            }else{
              let curMatList = c.material;
              if( !Array.isArray(c.material) ){
                curMatList = [ c.material ];
              }

              if( !this.checkIsGlassLiquid( envObj, envScene, c, curMatList ) ){
                curMatList.forEach( (m)=>{
                  if( m.map && !m.emissiveMap && m.emissive.r>0 ){
                    m.emissiveMap=m.map;
                    m.emissiveIntensity=m.emissive.r;
                    m.emissive=new THREE.Color( 0xFFFFFF );
                  }
                  m.side=curSide;
                  //m.depthWrite=true;
                  //m.depthTest=true;
                  //m.shading = THREE.SmoothShading;
                });
              }

              //c.geometry.computeFaceNormals();
              //c.geometry.computeVertexNormals();
              //c.matrixAutoUpdate=false;
            }
           
              
          }else{ // Current Object isn't a mesh geometry
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
                ch.push( ...c.children );
              }
            }
          }
        }
        envScene.add( groups[groupId] );
      }
      

      // @ Loaded Scene File - Environment Group; 'Animation'
      if(false && groupNames.includes('Animation')){
        let groupId = groupTypes['Animation'] ;
        let animGroup = groups[groupId];
        let ch = animGroup.children;
        animGroup.frustumCulled = false;
        this.log("Animation - ",groups[groupId]);
        
        envScene.add( animGroup );
        
        let runner = -1;
        while(runner < ch.length-1){
          runner++;
          let c=ch[runner];
          if(!c){
            this.log("-- Error, Uncaught Animation Child --");
            this.log("Error Entry- '"+runner+"'");
          }
          console.log(c)
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
              continue;
            }
            
            if( c.material.map ){
              c.material.emissiveMap=c.material.map;
              if( c.material.emissive.r>0 ){
                c.material.emissiveIntensity=c.material.emissive.r;
              }
              c.material.emissive=new THREE.Color( 0xFFFFFF );
              
              if( !c.material.specularMap && c.material.specular.r>0 ){
                c.material.specularMap=c.material.map;
              }
            }else{
              c.material.emissive = c.material.color;
            }
            //c.material.depthWrite=true;
            c.material.side=curSide;
            //c.geometry.computeFaceNormals();
            //c.geometry.computeVertexNormals();
            //c.matrixAutoUpdate=false;
            c.frustumCulled = false;
            c.matrixAutoUpdate=true;
            //envScene.add(c);
              
          }else if( c.type == "Group" ){
            ch.push( ...c.children );
            c.frustumCulled = false;
          }else if(  c.type == "Bone" ){
            //console.log(c);
            
            c.frustumCulled = false;
            ch.push( ...c.children );
          }else{
            this.log("-- Warning, FBX Animation Bypass --");
            this.log("Bypass Name- '"+c.name+"';\nBypass Type- '"+c.type+"'");
          }
        }
      }
      
      
      // ## Restricted to only pxlNav's build
      // @ Loaded Scene File - Environment Group; 'Glass'
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
      

      // @ Loaded Scene File - Environment Group; 'Colliders'
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
      
      // @ Loaded Scene File - Environment Group; 'PortalExit'
      if(groupNames.indexOf('PortalExit')>-1){
        let ch=groups[groupTypes['PortalExit']].children;
        this.log("PortalExit - ",groups[groupTypes['PortalExit']]);
        
        while(ch.length>0){
          let c=ch.pop();
          c.matrixAutoUpdate=false;
          envObj.portalList[c.name]=c;
        }
      }  
      
      // @ Loaded Scene File - Environment Group; 'FlatColor'
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
      
      
      


      // @ Loaded Scene File - Environment Group; 'LambertColor'
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
       
            
      // @ Loaded Scene File - Environment Group; 'Sky'
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
                camFar:{ type:"f", value: envObj.camera.far*.85 },
                resUV: { value: this.pxlDevice.screenRes },
              },
              vertexShader:this.pxlShaders.scene.skyObjectVert(),
              fragmentShader:this.pxlShaders.scene.skyObjectFrag()
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
       

      // Shader Overrides
      // @ Loaded Scene File - Environment Group; 'AnimatedTextures'
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
                glowColor: { value: new Vector3( .01,.35,.55 ) },
                intensity: { type:"f", value: .35 },
                rate: { type:"f", value: 2.0 },
                freq: { type:"f", value: 1.0 }
              };
            let vertShader=this.pxlShaders.animated.animTextureVert();
            let fragShader=this.pxlShaders.animated.animTextureFrag();
            
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
      
      
      // @ Loaded Scene File - Environment Group; 'ScrollingTextures'
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
              vertexShader:this.pxlShaders.animated.scrollingTextureVert(),
              fragmentShader:this.pxlShaders.animated.scrollingTextureFrag(),
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
      
      
      
      // @ Loaded Scene File - Environment Group; 'UserScreens'
      // TODO : Update to read mask from material
      //          Less magic number reliance
      if(groupNames.indexOf('UserScreens')>-1){
        let ch=groups[groupTypes['UserScreens']].children;
        this.log("UserScreens - ",groups[groupTypes['UserScreens']]);
        
        let userScreenSeed=0;
        // Run the mask layers outside shader calculations
        let maskArray=[ new Vector3(1,0,0), new Vector3(0,1,0), new Vector3(0,0,1) ]
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
                scale:{ value:new Vector2(100,100)},
                ratio:{ value:new Vector2(1,1)},
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
      
      
      // @ Loaded Scene File - Environment Group; 'Items'
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
                if(c.name.includes("Item")){
                  let curMat=new THREE.ShaderMaterial({
                      uniforms:{
                          color:{value : c.material.emissive.clone() },
                          alphaMap:{type:'t',value : c.material.map },
                          cloudNoise:{type : 't',value : this.cloud3dTexture},
                          time:{ value:this.pxlTimer.msRunner },
                          intensity: {  type:"f", value: 1.5 },
                          rate: { type:"f", value: this.pxlUser.itemRotateRate }
                      },
                      vertexShader:this.pxlShaders.objects.itemVert(),
                      fragmentShader:this.pxlShaders.objects.itemFrag(),
                      transparent:true,
                      side:THREE.DoubleSide,
                      depthTest:true,
                      depthWrite:false,
                  });
                  c.material=curMat;
                  this.pxlUser.itemList[g.name]=c;
                }else if(c.name.includes("Base")){
                  let curMat=new THREE.ShaderMaterial({
                      uniforms:{
                          color:{value : c.material.emissive.clone() },
                          alphaMap:{type:'t',value : c.material.map },
                          cloudNoise:{type : 't',value : this.cloud3dTexture},
                          time:{ value:this.pxlTimer.msRunner },
                          intensity: {  type:"f", value: 1.5 },
                          rate: { type:"f", value: this.pxlUser.itemBaseRotateRate }
                      },
                      vertexShader:this.pxlShaders.objects.itemBaseVert(),
                      fragmentShader:this.pxlShaders.objects.itemBaseFrag(),
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
      
      
      // @ Loaded Scene File - Environment Group; 'Scripted'
      if(groupNames.includes('Scripted')){
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
      

      // @ Loaded Scene File - Environment Group; 'Clickable'
      if(groupNames.includes('Clickable')){
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
      
      // @ Loaded Scene File - Environment Group; 'Markers'
      if(groupNames.includes('Markers')){
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


  loadAnimFBX( envObj, meshKey, rigPath, animPath, stateConnections ){
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
    fbxLoader.load( rigPath, (curFbx)=>{

      let groups=curFbx.children;
      let groupTypes={};
      let groupNames=[];
      
      groups.forEach((c,x)=>{ let curName=c.name.split("_")[0]; groupNames.push(curName); groupTypes[curName]=x; });

      curFbx.traverse((c)=>{
        this.checkForUserData( envObj, envScene, c );

        if(c.userData.hasOwnProperty("doubleSided") && c.userData.doubleSided){
          c.material.side=THREE.DoubleSide;
        }
      });

      this.pxlAnim.initObject( meshKey, curFbx );

      // -- -- --
      
      this.log("Animation FBX - ",groupNames[0]);
      envScene.add(curFbx);
      curFbx.frustumCulled = false;

      var animLoader = new FBXLoader();
      let promisList = [];
      let animKeys = Object.keys( animPath );
      animKeys.forEach( (animKey)=>{
        let curAnimPath = animPath[animKey];
        let animPromise = new Promise((resolve, reject) => {
          animLoader.load( curAnimPath, (animFbx)=>{
            if( animFbx.animations.length == 0 ){
              this.log("No animations found in file", curAnimPath);
              this.log(animFbx);
              resolve();
            }
            this.pxlAnim.addClips( meshKey, animKey, animFbx );
            this.log("Animation Loaded", animKey);
            resolve();
          }, null, (err)=>{
            this.log("Animation Load Error");
            this.log(err);
            reject(err);
          });
        });
        promisList.push( animPromise );
      });

      Promise.all(promisList).then(() => {
        this.pxlAnim.setStateConnections( meshKey, stateConnections );
        //this.pxlEnv.geoList[meshKey]=curFbx;
        envObj.geoList[meshKey]=curFbx;
        this.pxlEnv.geoLoadList[meshKey]=1;
        envObj.animPostLoad(meshKey);
      }).catch((err) => {
        this.log("Error loading animations", err);
      });

      // -- -- --
      /*
      //envObj.geoList[c.name]=c;
      let count=0;
    
      let runner = -1;
      while(runner < groups.length-1){
        runner++;
        let c=groups[runner];
        if(!c){
          this.log("-- Error, Uncaught Animation Child --");
          this.log("Error Entry- '"+runner+"'");
        }
        
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
            continue;
          }
          
          if( c.material.map ){
            c.material.emissiveMap=c.material.map;
            if( c.material.emissive.r>0 ){
              c.material.emissiveIntensity=c.material.emissive.r;
            }
            c.material.emissive=new THREE.Color( 0xFFFFFF );
            
            if( !c.material.specularMap && c.material.specular.r>0 ){
              c.material.specularMap=c.material.map;
            }
          }else{
            c.material.emissive = c.material.color;
          }
          //c.material.depthWrite=true;
          c.material.side=curSide;
          //c.geometry.computeFaceNormals();
          //c.geometry.computeVertexNormals();
          //c.matrixAutoUpdate=false;
          c.frustumCulled = false;
          c.matrixAutoUpdate=true;
          //envScene.add(c);
            
        }else if( c.type == "Group" ){
          groups.push( ...c.children );
          c.frustumCulled = false;
        }else if(  c.type == "Bone" ){
          
          c.frustumCulled = false;
          groups.push( ...c.children );
        }else{
          this.log("-- Warning, FBX Animation Bypass --");
          this.log("Bypass Name- '"+c.name+"';\nBypass Type- '"+c.type+"'");
        }
      }

      console.log("animLoaded");
      envObj.animPostLoad(meshKey);
      */
    }, null, (err)=>{
      if(meshKey!=''){
        this.pxlEnv.geoLoadList[meshKey]=1;
      }
    });
    

    return fbxLoader;
  }


// -- -- -- -- --


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
      var objCentroid=new Vector3().addVectors(max,min).multiplyScalar(.5);
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
    
    // Extend browser to handle url requests ( Unused )
    //   While the network layer has been removed,
    //     The primary source of excessive API & server requests,
    //       Retaining the code for future web worker management
    urlExists(url){
        var worker;
        if( Worker ){
            worker = new Worker("js/pxlBase/webWorkers/FileWorkerIO.js");  
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