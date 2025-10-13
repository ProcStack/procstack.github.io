function map_setTexture(url){
	var tex=new THREE.TextureLoader().load(url);
	return tex;
}

function map_loadTexturedObj(objPath, imgPath, transList, verboseLoading,meshKey,addToProcessorScene){
	if(typeof(imgPath) == "string"){
		imgPath={"diffuse":imgPath};
	}

	if(meshKey!=''){ // Prep for IsLoaded checks
		geoLoadListComplete=0;
		geoLoadList[meshKey]=0;
	}
	
	// imgPath["diffuse","normal","specular","rough","metal","castShadow"]
	
	var objChild=[];
	var processorObj=[];
	var textureObj;
	var objLoader=new THREE.OBJLoader(verboseLoading);
	//objLoader.setMaterials(mtl);
	objLoader.load(objPath,
		function(curObj){
			objChild.push(curObj);
			processorObj.push(null);
			curObj.traverse(function(child){
				if(child instanceof THREE.Mesh){
					child.matrixAutoUpdate=false;
					child.updateMatrix();
					
					objChild.push(child);
					//var tempObjChild=new THREE.Mesh(child.clone(), new THREE.MeshLambertMaterial({color:0xffffff}));
					
					var tempObjChild=new THREE.Mesh().clone(child.geometry);
					tempObjChild.material=new THREE.MeshPhongMaterial({color:0xffffff});
					tempObjChild.material.emissive.r=1;
					tempObjChild.material.emissive.g=1;
					tempObjChild.material.emissive.b=1;
					processorObj.push(tempObjChild);
					
					child.material.flatShading=false;
					child.geometry.computeFaceNormals();
					//child.geometry.computeFlatVertexNormals();
					
					if(typeof(imgPath["vertShader"]) !== "undefined"){
						var mat;
						if(imgPath["shaderId"]=="mapAura"){
							mat=mapTitleGlowBuilder(child,imgPath["vertShader"],imgPath["fragShader"]);
						}
						child.material=mat;
					}else{
						if( typeof(imgPath["color"]) == "number"){
							child.material.color.setHex(imgPath["color"]);
						}
						if( typeof(imgPath["shininess"]) == "number"){
							child.material.shininess=imgPath["shininess"];
						}
						if( typeof(imgPath["diffuse"]) !== "undefined"){
							textureObj=map_loadTexture(imgPath["diffuse"], verboseLoading);
							child.material.map=textureObj;
						}
						if( typeof(imgPath["normal"]) !== "undefined"){
							textureObj=map_loadTexture	(imgPath["normal"], verboseLoading);
							child.material.normalMap=textureObj;
						}
						if( typeof(imgPath["specular"]) !== "undefined"){
							textureObj=map_loadTexture(imgPath["specular"], verboseLoading);
							child.material.specularMap=textureObj;
						}
						if( typeof(imgPath["rough"]) !== "undefined"){
							textureObj=map_loadTexture(imgPath["rough"], verboseLoading);
							child.material.roughnessMap=textureObj;
						}
						if( typeof(imgPath["roughness"]) == "number"){
							child.material.roughness=imgPath["roughness"];
						}
						if( typeof(imgPath["metal"]) !== "undefined"){
							textureObj=map_loadTexture(imgPath["metal"], verboseLoading);
							child.material.metalnessMap=textureObj;
						}
						if( typeof(imgPath["emit"]) !== "undefined"){
							textureObj=map_loadTexture(imgPath["emit"], verboseLoading);
							if( typeof(imgPath["emitColor"]) == "number"){
								child.material.emissive=new THREE.Color( imgPath["emitColor"] );
							}else{
								child.material.emissive=new THREE.Color( 0x808080 );
							}
							child.material.emissiveMap=textureObj;
						}else{
							if( typeof(imgPath["emitColor"]) == "number"){
								child.material.emissive=new THREE.Color( imgPath["emitColor"] );
							}
						}
						if( typeof(imgPath["ambient"]) !== "undefined"){
							//textureObj=map_loadTexture(imgPath["ambient"], verboseLoading);
							//child.material.ambientMap=textureObj;
						}
						if( typeof(imgPath["castShadow"]) !== "undefined"){
							child.castShadow=imgPath["castShadow"];
						}
						if( typeof(imgPath["recieveShadow"]) !== "undefined"){
							child.receiveShadow=imgPath["recieveShadow"];
						}
					}
					if( typeof(imgPath["doubleSided"]) !== "undefined"){
						if(imgPath["doubleSided"]==true){
							child.material.side=THREE.DoubleSide;
						}
					}
					if(meshKey!=''){
						geoLoadList[meshKey]=1;
					}
				}
			});
			
			var rotate=transList["r"];
			curObj.rotateX(rotate[0]);
			curObj.rotateY(rotate[1]);
			curObj.rotateZ(rotate[2]);
			if(typeof(transList["rOrder"]) !== "undefined" ){
				curObj.rotation.order=transList["rOrder"];
			}
			var pos=transList["t"];
			curObj.position.set(pos[0],pos[1],pos[2]);
			var scale=transList["s"];
			curObj.scale.set(scale[0],scale[1],scale[2]);
			if( typeof(transList["parent"]) == 'string'){
				var tParent=transList["parent"];
				try{
					geoList[tParent][0].add(curObj);
				}catch(err){
					console.log("- - - - - - - - ERROR - - - - - - - -");
					console.log(" Parent '"+tParent+"' does not exist.\n Error Info-");
					console.log(err);
					console.log("- - - - - - - - - - - - - - - - - - -");
				}
			}else if( typeof(transList["group"]) == 'string'){
				var tParent=transList["group"];
				try{
					groupList[tParent].add(curObj);
				}catch(err){
					console.log("- - - - - - - - ERROR - - - - - - - -");
					console.log(" Group '"+tParent+"' does not exist.\n Error Info-");
					console.log(err);
					console.log("- - - - - - - - - - - - - - - - - - -");
				}
			}else{
				mapScene.add(curObj);
			}
			processorObj[0]=curObj.clone()
			if(addToProcessorScene){mapProcessScene.add(processorObj[0]);}
			if(meshKey!=''){
				geoList[meshKey]=objChild;
				if(addToProcessorScene){geoList[meshKey+"_processor"]=processorObj;}
			}
			curObj.matrixAutoUpdate=false;
			curObj.updateMatrix();
			if(addToProcessorScene){
				processorObj[0].visible=false;
				processorObj[0].matrixAutoUpdate=false;
				processorObj[0].updateMatrix();
			}
		},
		onProgress,onError
	);
	return objLoader;
}

function map_applyTransformList(curObj,transList){
	var rotate=transList["r"];
	curObj.rotateX(rotate[0]);
	curObj.rotateY(rotate[1]);
	curObj.rotateZ(rotate[2]);
	if(typeof(transList["rOrder"]) !== "undefined" ){
		curObj.rotation.order=transList["rOrder"];
	}
	var pos=transList["t"];
	curObj.position.set(pos[0],pos[1],pos[2]);
	var scale=transList["s"];
	curObj.scale.set(scale[0],scale[1],scale[2]);
	
	curObj.matrixAutoUpdate=false;
	curObj.updateMatrix();
}
function map_loadTexture(imgPath, verboseLoading){
	// Reuse textures?
	// Not sure if this is really what I need to do here
	// Aw well, I'll test
	if(typeof(textLoaderArray[imgPath]) != "undefined"){
		texture=textLoaderArray[imgPath];
	}else{
		//var texLoader=new THREE.ImageLoader(verboseLoading);
		var texture=new THREE.Texture();
		texLoader.load(imgPath,
			function(tex){
				texture.image=tex;
				texture.needsUpdate=true;
			}
		);
		textLoaderArray[imgPath]=texture;
	}
	return texture;
}

function spriteToggleVisibility(toggle=1){
	var settingVal=toggle?true:false;
	for(var x=0; x<spriteGroups.length;++x){
		spriteGroups[x].visible=settingVal;
	}
}

////////////////////////////////////////////////////

function removeChildren(curObj){
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

function findMesh(curObj){
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
function getBBoxCentroid(curObj){
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

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


function mapRender(){
	var curMS=Date.now();
	runner++;
	
	mapUpdateCamera();
		
	var curCrop=1;
	mainMenuShaderPass.uniforms.cropTop.value=1-((1-mapMainMenuCropTop)*curCrop);
	
	mainMenuShaderPass.uniforms.cropBottom.value=mapMainMenuCropBottom*curCrop;
	var menuBottom=(1-mapMainMenuCropBottom*curCrop)*sH
	
	var offsetNoise=Math.sin(runner*.0187+Math.cos(runner*.003)+352.15);
	offsetNoise=Math.sin(runner*.00145+Math.cos(runner*.0075+165.91)+offsetNoise)*.5+.5;

	mapSlipNoise.unshift(offsetNoise);
	mapSlipNoise.pop();
	mainMenuShaderPass.uniforms.flicker.value=offsetNoise;
	mainMenuShaderPass.uniforms.time.value=runner;
	
	mapTempMenuComposer.render();
			
	objsBooted=1;
	
	if(mapPause == 0){
		setTimeout(function(){
			requestAnimationFrame(mapRender);
		},25);
	}
}