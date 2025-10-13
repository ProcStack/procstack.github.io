///////////////////////////////////
// The whole dang page system need a major overhaul...
// I just kept tacking on more and more stuff to make it do what I want
// This is not helpful
// Make sure all pages are visible when book opens and closes
// Make sure only visible -1 and +1 of working pages; ie curPages = [1,2]; vis is on for 0,1,2,3
// Turn off vis of 'hidden' page when done flipping pageSide
// ... Bleh ...
// TOO MANY CONDITIONS FOR WHAT IT DOES!!!!
// I'm writing much of this on very little sleep.
// Surely I'll see how I wrote this in a few weeks and rip it to shreds to make it less if-else'y

// Object Vert / Fragment Shaders
function objBuilderCheck(){
	if(geoLoadListComplete == 0){
		var fullyLoaded=1;
		var loadListKeys=Object.keys(geoLoadList);
		var hitList=[];
		for(var x=0; x<loadListKeys.length;++x){
			var curLoad=geoLoadList[loadListKeys[x]];
			if((loadListKeys[x] == "bookPagesClosed" || loadListKeys[x] == "bookPagesOpen") && geoFunctionList['bookPages']>-1 && geoFunctionList['bookPages']<2){
				geoFunctionList['bookPages']+=curLoad;
				if(geoFunctionList['bookPages']==2){
					var bookPagesFunc=mapBookPageBuilder();//meshes=[geoList['bookPagesClosed'][1], geoList['bookPagesOpen'][1]]);
					if(bookPagesFunc){
						geoFunctionList['bookPages']=-1;
					}
				}
			}
			if(curLoad == 0){
				fullyLoaded=0;
			}
		}
		if(geoLoadList['bookCover']==1 && geoLoadList['bookTitle']==1 && geoLoadList['mapGlow']==1){
			getBBoxCentroid(geoList['bookTitle'][0]);
			geoList['bookCover'][0].add(geoList['bookTitle'][0]);
			getBBoxCentroid(geoList['mapGlow'][0]);
			geoList['bookCover'][0].add(geoList['mapGlow'][0]);
			geoLoadList['bookCover']=2;
			geoLoadList['bookTitle']=2;
			geoLoadList['mapGlow']=2;
		}
		if(fullyLoaded == 1){
			verbose&&console.log("********************************\n** All pending objects loaded **\n********************************");
			geoLoadListComplete=1;
		}else{
			verbose&&console.log("-- Still loading objects --");
		}
	}
}

function mapBookPageBuilder(){
	var loaded=0;
	var mat;
	var curMS=Date.now();
	try{
		//Close Pages Data
		var posArr=geoList['bookPagesClosed'][1].geometry.attributes.position.array;
		var posArrNormal=geoList['bookPagesClosed'][1].geometry.attributes.normal.array;
		//Open Pages Data
		var posTargetArr=geoList['bookPagesOpen'][1].geometry.attributes.position.array;
		var posTargetArrNormal=geoList['bookPagesOpen'][1].geometry.attributes.normal.array;

		geoList['bookPagesClosed'][1].geometry.addAttribute('bookClosed', new THREE.BufferAttribute(posArr,1));
		geoList['bookPagesClosed'][1].geometry.addAttribute('bookOpen', new THREE.BufferAttribute(posTargetArr,1));
		geoList['bookPagesClosed'][1].geometry.addAttribute('bookClosedNormal', new THREE.BufferAttribute(posArrNormal,1));
		geoList['bookPagesClosed'][1].geometry.addAttribute('bookOpenNormal', new THREE.BufferAttribute(posTargetArrNormal,1));
		loaded=1;
		geoList['bookPagesOpen'][0].visible=false;
		
		var bookPagesRightSide=geoList['bookPagesClosed'][0].clone();
		transformList={
			"t":[0,0,0],
			"r":[0,degToRad(180),0],
			"s":[-1,1,1]
		};
		map_applyTransformList(bookPagesRightSide,transformList);
		groupList['bookPageClumps'].add(bookPagesRightSide);
		var bookPagesRightSideMesh=findMesh(bookPagesRightSide);
		geoList['bookPagesRightSide']=[bookPagesRightSide,bookPagesRightSideMesh];
		bookPagesRightSideMesh.geometry.computeBoundingSphere();
	}catch(err){
		verbose&&console.log("Book Pages Closed -\n"+err);
	}
	// ---------------------------------------------------------
	try{
		//Left Page Data
		var posPageLeftArr=geoList['bookPageBuilder'][1].geometry.attributes.position.clone().array;
		var normPageLeftArr=geoList['bookPageBuilder'][1].geometry.attributes.normal.clone().array;
		//Mid Page Data
		var posPageMidArr=geoList['bookPageMid'][1].geometry.attributes.position.clone().array;
		var normPageMidArr=geoList['bookPageMid'][1].geometry.attributes.normal.clone().array;
		
		var pageLen=posPageLeftArr.length;
		//var id=new Float32Array(len);
		var posPageRightArr=new Float32Array(pageLen);
		var normPageRightArr=new Float32Array(pageLen);
		var posMult=1;
		for(var x=0; x<pageLen; ++x){
			if(x%3 == 2){
				posMult=-1;
			}else{
				posMult=1;
			}
			posPageRightArr[x]=posPageLeftArr[x]*posMult;
			normPageRightArr[x]=normPageLeftArr[x]*-1;
		}
		
		geoList['bookPageBuilder'][1].geometry.addAttribute('posLeft', new THREE.BufferAttribute(posPageLeftArr,1));
		geoList['bookPageBuilder'][1].geometry.addAttribute('posMid', new THREE.BufferAttribute(posPageMidArr,1));
		geoList['bookPageBuilder'][1].geometry.addAttribute('posRight', new THREE.BufferAttribute(posPageRightArr,1));
		geoList['bookPageBuilder'][1].geometry.addAttribute('normLeft', new THREE.BufferAttribute(normPageLeftArr,1));
		geoList['bookPageBuilder'][1].geometry.addAttribute('normMid', new THREE.BufferAttribute(normPageMidArr,1));
		geoList['bookPageBuilder'][1].geometry.addAttribute('normRight', new THREE.BufferAttribute(normPageRightArr,1));
		
		// mapBookContents[0] = Blank pages
		var pageBuildCount=-1;
		for(var x=0; x<mapBookContents.length; ++x){
			pageBuildCount++;
			var curName=mapBookContents[x].name;
			var curPage=mapBookContents[x].page;
			var curCount=mapBookContents[x].count;
			
			// Built Page Group
			var curGroup=new THREE.Group();
			for(var c=0; c<curCount; ++c){
				var curObj=geoList['bookPageBuilder'][0].clone();
				curObj.name=curPage+"_Page-"+c;
				curGroup.add(curObj);
				
				var transformList=tListIdent();
				map_applyTransformList(curObj,transformList);
				groupList['book'].add(curGroup);
				var curMesh=findMesh(curObj);
				curMesh.geometry=curMesh.geometry.clone();
				curMesh.userData={
					'pageNumber':parseInt((c+1)/2), // Front and page of pages are linked, 0 page has blank page
					'section':curPage,
					'pageSide':c%2,
				};
				mapBookContents[x].objMesh.push([curObj,curMesh]);
				curMesh.geometry.computeBoundingSphere();
				curMesh.material=geoList['bookPageBuilder'][1].material.clone();
				var curTexPath;
				var offset=0;
				if(curPage == "Blank"){
					curTexPath=mapBookDataTexPath+curPage+".jpg";
					offset=1;
				}else{
					curTexPath=mapBookDataTexPath+curPage+"_"+c+".jpg";
				}
				curMesh.material.map=map_loadTexture( curTexPath, verboseLoading );
				if(c%2 == 1){
					curMesh.material.side=THREE.BackSide;
				}else{
					curMesh.material.side=THREE.FrontSide;
				}
			}
			curGroup.visible=false;
			mapBookContents[x].sectionGroup=curGroup;
		}
		groupList['bookPageBase'].visible=false;
	}catch(err){
		verbose&&console.log("Book Page Left -\n"+err);
	}
	// ---------------------------------------------------------
	try{
		var bookCoverRightSide=geoList['bookCover'][0].clone();
		removeChildren(bookCoverRightSide);
		transformList={
			"t":[0,0.102,0.181],
			"r":[0,degToRad(-180),0],
			"rOrder":"ZYX",
			"s":[1,1,1]
		};
		map_applyTransformList(bookCoverRightSide,transformList);
		groupList['book'].add(bookCoverRightSide);
		var bookCoverRightSideMesh=findMesh(bookCoverRightSide);
		geoList['bookCoverRightSide']=[bookCoverRightSide,bookCoverRightSideMesh];
		bookCoverRightSideMesh.geometry.computeBoundingSphere();
		// ---------------------------------------------------------
	}catch(err){
		verbose&&console.log("Book Cover -\n"+err);
	}
	return loaded;
}

function mapBookSetSection(curSection, vis){
	mapBookContents[curSection].sectionGroup.visible=vis;
	mapBookContents[0].sectionGroup.visible=vis;
	if(vis == false){
		mapBookContents[curSection].curPage=[0,0];
	}
	
	var children=[];
	children.push(...mapBookContents[curSection].sectionGroup.children);
	children.push(...mapBookContents[0].sectionGroup.children);
	for(var x=0; x<children.length; ++x){
		children[x].visible=true;
		var curMesh=findMesh(children[x]);
		curMesh.geometry.attributes.position.array=curMesh.geometry.attributes.posMid.clone().array;
		curMesh.geometry.attributes.normal.array=curMesh.geometry.attributes.normMid.clone().array;
	}
}


function mapBookSetPageVis(curSection, extendVis, direction=0){
	var children=mapBookContents[curSection].sectionGroup.children;

	var curPage=[0,0];
	var startPage=0;
	var endPage=0;
	var specifics=0;
	if(typeof(extendVis) == 'boolean'){
		curPage=[...mapBookContents[curSection].curPage];
		if(extendVis == true){
			curPage[0]=curPage[0]-1;
			curPage[1]=curPage[1]+1;
		}else{
			if(direction == -1){
				curPage[0]=curPage[0]-1;
			}else if(direction == 1){
				curPage[1]=curPage[1]+1;
			}
		}
		startPage=Math.max(0, curPage[0] );
		endPage=Math.min(mapBookContents[curSection].count-1, curPage[1] );
	}else{
		var exlen=extendVis.length;
		if(exlen == 0){
			startPage=0;
			endPage=children.length;
		}else if(exlen == 1){
			if(direction==1){
				children[extendVis[0]].visible=true;
			}else{
				children[extendVis[0]].visible=false;
			}
			return false;
		}else if(exlen == 2){
			startPage=extendVis[0];
			endPage=extendVis[1];
		}else{
			specifics=1;
			startPage=-1;
			endPage=-1;
		}
	}
	for(var x=0; x<children.length; ++x){
		if(x >= startPage && x <= endPage){
			children[x].visible=true;
		}else{
			children[x].visible=false;
		}
	}
	if(specifics==1){
		for(var x=0; x<extendVis.length; ++x){
			if(direction==1){
				children[extendVis[x]].visible=true;
			}else{
				children[extendVis[x]].visible=false;
			}
		}
	}
	return true;
}

function mapBookOpenSection(curSection, blend){
	var curPageCount=mapBookContents[curSection].count;
	var curPage=mapBookContents[curSection].curPage;
	var prevPage=mapBookContents[curSection].prevPage;
	var children=mapBookContents[curSection].sectionGroup.children;
	var totalChildren=children.length; //Should be the same as curPageCount.... But.. Who knows in the future...
	for(var x=0; x<totalChildren; ++x){
		var curMesh=findMesh(children[x]);
		var curVertCount=curMesh.geometry.attributes.posMid.array.length;
		var childPage=curMesh.userData.pageNumber;
		var childSide=curMesh.userData.pageSide;
		
		var perc=Math.abs( ((childPage)) / ((totalChildren+1)/2) );
		var curBlend=Math.min(1, perc*perc+blend*blend)*blend*blend;
		
		if(curBlend==1 && x>1){
			mapBookSetPageVis(mapBookSection,[x],0);
		}
		
		var blendX=curBlend;
		var blendY=1-Math.cos(curBlend*pi/2);
		var blendZ=Math.sin(curBlend*pi/2);
		
		var curBlankPage=null;
		if(x == 0){
			curBlankPage=mapBookContents[0].objMesh[1][1];
		}else if(x == totalChildren-1){
			curBlankPage=mapBookContents[0].objMesh[0][1];
		}
		//////////////////////////////////////////////////////////////////////
		//curMesh.userData={'pageNumber':c,'section':curPage,'pageSide':c%2,};
		for(var c=0; c<curVertCount;++c){
			var blended;
			if(c%3 == 0){
				blended=blendX;
			}else if(c%3 == 1){
				blended=blendY;
			}else{
				blended=blendZ;
			}
			var fromPosVal=curMesh.geometry.attributes.posMid.array[c];
			var fromNormVal=curMesh.geometry.attributes.normMid.array[c];
			var toPosVal=1;
			var toNormVal=1;
			if(childPage <= curPage[1]){//curSide==0){ // Left side pages
				toPosVal=curMesh.geometry.attributes.posLeft.array[c];
				toNormVal=curMesh.geometry.attributes.normLeft.array[c];
			}else{ // Right side pages
				toPosVal=curMesh.geometry.attributes.posRight.array[c];
				toNormVal=curMesh.geometry.attributes.normRight.array[c];
			}
			var curPosBlend=fromPosVal*(1-blended) + toPosVal*blended;
			var curNormBlend=fromNormVal*(1-blended) + toNormVal*blended;
			curMesh.geometry.attributes.position.array[c]=curPosBlend;
			curMesh.geometry.attributes.normal.array[c]=curNormBlend;
			if(curBlankPage != null){
				curBlankPage.geometry.attributes.position.array[c]=curPosBlend;
				curBlankPage.geometry.attributes.normal.array[c]=curNormBlend;
			}
		}
		curMesh.geometry.dispose();
		children[x].updateMatrix();
		if(curBlankPage != null){
			curBlankPage.geometry.dispose();
			curBlankPage.updateMatrix();
		}
	}
}

function enterMetalAsylum(){
	mapMainMenuDir=0;
	setCursor("default");
	mapBookOpenToggle();
}

function mapBookOpenToggle(){
	if(mapBookOpenFlip==-1 || mapBookOpenFlip==mapBookOpenFlipMax){
		mapBookOpen=(mapBookOpen+1)%2;
		map_candleFire(runner,1);
	}
	if(mapBookOpenFlip==-1){
		mapBookDir=1;
		mapCamMode=2;
		mapOnExitMode();
	}else if(mapBookOpenFlip==mapBookOpenFlipMax){
		mapBookDir=-1;
		mapCamMode=0;
	}
	mapBookSetPageVis(mapBookSection, [],1);
	mapBookOpenToSection(mapBookOpen,4,mapBookDir);
}

function mapBookOpenToSection(openBook, toSection, direction){
	var ret=0;
	if(geoFunctionList['bookPages']==-1){
		if(direction==0){direction=-1;}
		if(mapBookOpenFlip == -1  && direction==1){
			mapBookOpenFlip=0;
			mapBookSection=toSection;//1;
			mapBookSetSection(mapBookSection, true);
		}else if(mapBookOpenFlip==mapBookOpenFlipMax && direction==-1){
			mapBookOpenFlip=mapBookOpenFlipMax-1;
		}
		
		var geo=geoList['bookPagesClosed'][1].geometry.clone()
		var geoRight=geoList['bookPagesRightSide'][1].geometry.clone()
		var posArr=geo.attributes.position.array;
		var len=posArr.length;
		var id=new Float32Array(len);
		var morph=new Array(len);
		var blend=Math.max(0, mapBookOpenFlip)/mapBookOpenFlipMax;
		var blendX=blend; // Blend X pos linearly
		var blendY=1-Math.cos(blend*pi/2); // Blend Y pos cosinusoidal
		var blendZ=Math.sin(blend*pi/2); // Blend Z pos sinusoidal
		for(var x=0; x<len; x++){
			var blended;
			if(x%3 == 0){
				blended=blendX;
			}else if(x%3 == 1){
				blended=blendY;
			}else{
				blended=blendZ;
			}
			var fromVal=geoList['bookPagesClosed'][1].geometry.attributes.bookClosed.array[x];
			var toVal=geoList['bookPagesClosed'][1].geometry.attributes.bookOpen.array[x];
			var curBlend=fromVal*(1-blended) + toVal*blended;
			geo.attributes.position.array[x]=curBlend;
			geoRight.attributes.position.array[x]=curBlend;
			
			var fromVal=geoList['bookPagesClosed'][1].geometry.attributes.bookClosedNormal.array[x];
			var toVal=geoList['bookPagesClosed'][1].geometry.attributes.bookOpenNormal.array[x];
			var curBlend=fromVal*(1-blended) + toVal*blended;
			geo.attributes.normal.array[x]=curBlend;
			geoRight.attributes.normal.array[x]=curBlend;
		}
		if( (mapBookOpenFlip<mapBookOpenFlipMax && direction==1) || ( mapBookOpenFlip>-1 && direction==-1)){
			mapBookOpenFlip+=direction;
			if(mapBookOpenFlip == -1){
				mapBookSetSection(mapBookSection, false);
			}
		}else{ // Book fully open
			mapBookSetPageVis(mapBookSection, [0,1],1);
			if(mapBookDir==1){
				map_candleFire(runner,1);
			}
			mapBookDir=0;
		}
		geo.computeFaceNormals();
		geoList['bookPagesClosed'][1].geometry=geo;
		geoList['bookPagesRightSide'][1].geometry.attributes.position=geo.attributes.position;
		geoList['bookPagesRightSide'][1].geometry.attributes.normal=geo.attributes.normal;
		
		geoList['bookCover'][0].rotation.x=degToRad(-94.1*blendX);
		geoList['bookCoverRightSide'][0].rotation.x=degToRad(180-94.1*blendX);
		
		groupList['book'].rotation.y=degToRad(140*(1-blendX) + 90*blendX);
		groupList['book'].rotation.x=degToRad(90*(1-blendX));
		groupList['book'].rotation.z=degToRad(0*blendX);
		
		groupList['book'].position.set(-15*(1-blendX) + 15*blendX,7*(1-blendX),15*(1-blendX));
		groupList['book'].updateMatrix();
		
		if(mobile==0){
			if(blendX>.5 && direction == 1){
				geoList["mapGlow"][1].visible=false;
			}
			if(blendX<.5 && direction == -1){
				geoList["mapGlow"][1].visible=true;
			}
		}
	
		mapBookOpenSection(mapBookSection, blend);
	
		var updateMatList=[...groupList['book'].children];
		while(updateMatList.length > 0){
			var cur=updateMatList.pop();
			cur.updateMatrix(groupList['bookPageClumps']);
			updateMatList.push(...cur.children);
		}
		getBBoxCentroid(groupList['bookPageClumps']);
		mapBookUpdateBBox=1;
	}
	return ret;
}

// mapBookChangePage(pageVal) changes globals only.
// The globals are read and functions ran at js/map_coreScripts.js -> mapRender();
/////////////
// This function is getting out of hand...
// Its gotten far more convoluted than expected.
function mapBookChangePage(pageVal){
	if(mapBookOpen){
		var curCount=mapBookContents[mapBookSection].count;
		if(curCount>2){
			if(typeof(pageVal) == 'string'){
				// Make sure last page is flat
				// Currently, only one page can animate at a time
				// Maybe in the future, it will finish up as it needs, with a queue
				// Like appending a flip array and rate
				// If mapBookContents[curSection].queue=[ [page#Side1, page#Side2, direction, curPercBlend], [page#Side1, page#Side2, direction, curPercBlend], ... ]
				if(mapBookPageDir != 0){
					var blend=0;
					if(mapBookPageDir == 1){
						blend=1;
					}
					mapBookSetPageFlip(mapBookSection,mapBookPageDir, blend);
				}
				
				var readCurPageArr=0;
				if(pageVal =='prev'){
					readCurPageArr=0;
					mapBookPageDir=-1;
					mapBookPageFlip=mapBookPageFlipMax+0;
				}else if(pageVal =='next'){
					readCurPageArr=1;
					mapBookPageDir=1;
					mapBookPageFlip=-1;
				}
				
				var curPage=mapBookContents[mapBookSection].curPage;
				if(curPage[0] == 0 && mapBookPageDir == -1){
					curPage=[0,0];
					mapBookPageDir=0;
				}else if(curPage[1] == mapBookContents[mapBookSection].count-2 && mapBookPageDir == 1 && mapBookPageDirPrev == 1){
					curPage=[curPage[0],curPage[1]];
					mapBookPageDir=0;
				}else{
					mapBookContents[mapBookSection].prevPage=curPage[0]+0;
					if(mapBookPageDir == mapBookPageDirPrev || mapBookPageDirPrev == 0){
						if(mapBookPageDir==-1){
							curPage[0]=Math.max(0, curPage[0]+mapBookPageDir*2);
						}else{
							curPage[0]=Math.min( (parseInt(mapBookContents[mapBookSection].count-1)/2)*2-2, curPage[1]+mapBookPageDir);
						}
						curPage[1]=curPage[0]+1;
						if(curPage[0] == 0){
							curPage=[0,0];
							mapBookPageDir=0;
						}
					}
					mapBookPageDirPrev=mapBookPageDir+0;
				}
				mapBookContents[mapBookSection].curPage=curPage;
			}
		}
	}
}

// mapBookFlipPages(curSection, direction) runs at js/map_coreScripts.js -> mapRender();
function mapBookFlipPages(curSection, direction){
	mapBookPageFlip=mapBookPageFlip+direction;
	if(mapBookPageFlip == mapBookPageFlipMax+1 || mapBookPageFlip == -1){
		getBBoxCentroid(groupList['bookPageClumps']);
		mapBookPageDir=0;
		return false;
	}
	var blend= mapBookPageFlip / mapBookPageFlipMax;
	if(mapBookPageFlip == 1 && mapBookPageDir == 1){
		mapBookSetPageVis(mapBookSection, true);
	}else if(mapBookPageFlip == mapBookPageFlipMax-2 && mapBookPageDir == -1){
		mapBookSetPageVis(mapBookSection, true);
	}
	mapBookSetPageFlip(curSection,direction, blend);
}
function mapBookSetPageFlip(curSection,direction, curBlend){
	
	var curPageCount=mapBookContents[curSection].count;
	var curPage=mapBookContents[curSection].curPage;
	//var prevPage=mapBookContents[curSection].prevPage+0;
	var children=mapBookContents[curSection].sectionGroup.children;
	
	var totalChildren=children.length; //Should be the same as curPageCount.... But.. Who knows in the future...
	var startPage=curPage[0];
	var endPage=curPage[1];
	
	// This... REALLY shouldn't be needed
	// But if I add page curl,  I guess I'll be happy its here
	// Might as well actually
	// Would look cool, prob
	var blendX; // Blend X pos linearly
	var blendY; // Blend Y pos cosinusoidal
	var blendZ; // Blend Y pos cosinusoidal
	var crossFade=0;
	if(direction == 1){
		if(curBlend<=.5){
			crossFade=1-Math.min(1,curBlend*2);
			blendX=crossFade;
			blendY=Math.cos(crossFade*pi/2);
			blendZ=1-Math.sin(crossFade*pi/2);
		}else{
			crossFade=Math.max(0,curBlend*2-1);
			blendX=crossFade;
			blendZ=1-Math.sin(crossFade*pi/2);
			blendY=Math.cos(crossFade*pi/2);
		}
		if(curBlend == 1){
			mapBookSetPageVis(mapBookSection, false, direction);
		}
	}else{
		if(curBlend<=.5){
			crossFade=Math.min(1,curBlend*2);
			blendX=crossFade;
			blendZ=Math.cos(crossFade*pi/2);
			blendY=1-Math.sin(crossFade*pi/2);
		}else{
			crossFade=Math.max(0,curBlend*2-1);
			blendX=crossFade;
			blendZ=1-Math.sin(crossFade*pi/2);
			blendY=Math.cos(crossFade*pi/2);
		}
		if(curBlend == 0){
			mapBookSetPageVis(mapBookSection, false, direction);
		}
	}

	if(startPage==endPage){
		mapBookPageFlip=-1;
		mapBookPageDir=0;
		return false;
	}
	for(var x=startPage; x<=endPage; ++x){
		var curMesh=findMesh(children[x]);
		var curVertCount=curMesh.geometry.attributes.posMid.array.length;
		var childPage=curMesh.userData.pageNumber;
		var childSide=curMesh.userData.pageSide;

		//////////////////////////////////////////////////////////////////////
		//curMesh.userData={'pageNumber':c,'section':curPage,'pageSide':c%2,};
		for(var c=0; c<curVertCount;++c){
			var blended;
			if(c%3 == 0){
				blended=blendX;
			}else if(c%3 == 1){
				blended=blendY;
			}else{
				blended=blendZ;
			}
			var fromPosVal=1;
			var fromNormVal=1;
			var toPosVal=0;
			var toNormVal=0;
			if(direction == 1){
				if(curBlend>.5){
					toPosVal=curMesh.geometry.attributes.posMid.array[c];
					toNormVal=curMesh.geometry.attributes.normMid.array[c];
					
					fromPosVal=curMesh.geometry.attributes.posLeft.array[c];
					fromNormVal=curMesh.geometry.attributes.normLeft.array[c];
				}else{
					fromPosVal=curMesh.geometry.attributes.posRight.array[c];
					fromNormVal=curMesh.geometry.attributes.normRight.array[c];
					
					toPosVal=curMesh.geometry.attributes.posMid.array[c];
					toNormVal=curMesh.geometry.attributes.normMid.array[c];
				}
			}else{
				if(curBlend>.5){
					fromPosVal=curMesh.geometry.attributes.posLeft.array[c];
					fromNormVal=curMesh.geometry.attributes.normLeft.array[c];
					
					toPosVal=curMesh.geometry.attributes.posMid.array[c];
					toNormVal=curMesh.geometry.attributes.normMid.array[c];
				}else{
					fromPosVal=curMesh.geometry.attributes.posMid.array[c];
					fromNormVal=curMesh.geometry.attributes.normMid.array[c];
					
					toPosVal=curMesh.geometry.attributes.posRight.array[c];
					toNormVal=curMesh.geometry.attributes.normRight.array[c];
				}
			}
			
			var curPosBlend=fromPosVal*(1-blended) + toPosVal*blended;
			var curNormBlend=fromNormVal*(1-blended) + toNormVal*blended;
			curMesh.geometry.attributes.position.array[c]=curPosBlend;
			curMesh.geometry.attributes.normal.array[c]=curNormBlend;
		}
		curMesh.geometry.dispose();
		children[x].updateMatrix();
	}
	return true;
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function mapTitleGlowBuilder(mesh,vertShader,fragShader){
	var mat;
	var imgLoader=new THREE.ImageLoader();
	var url=textureRoot+"map_Title/mapTitleGlowTexture_diffuse.jpg";
	var curMS=Date.now();
	var uniforms={
		time:{value:(curMS-startTime)},
		glowTime:{value:glowTime},
		hover:{value:0.0},
		texture:{
			type:'t',
			value:(new THREE.TextureLoader()).load(url)
		}
	};
	
	mat=new THREE.ShaderMaterial({
		uniforms:uniforms,
		vertexShader:document.getElementById(vertShader).textContent,
		fragmentShader:document.getElementById(fragShader).textContent
	});
	mat.transparent=true;
	mat.depthTest=false;
	var len=mesh.geometry.attributes.position.count;
	var id=new Float32Array(len);
	var arrEl;
	
	for(var x=0; x<len; x++){
		id[x]=x;
	}
	mesh.geometry.addAttribute('id', new THREE.BufferAttribute(id,1));
	
	return mat;
}

////////////////////////////////////////////////
// Composer Shader Passes
function shaderPass_objAnchor(){
	var uniforms={
		diffuse:{type:"t",value:null},
		fade:{type:"f",value:0.0}
	};
	var anchorShader={
		uniforms:uniforms,
		vertexShader:document.getElementById("anchoredObjectVert").textContent,
		fragmentShader:document.getElementById("anchoredObjectFrag").textContent
	}
	var pass=new THREE.ShaderPass(anchorShader);
	return pass;
}