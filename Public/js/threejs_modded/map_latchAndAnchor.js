// This is getting a touch annoying
// I think the order of applying the matrix is different than I'd expect
// Maybe I'm just sleep depreived, but I'm used  XYZ going across, not down
// Translates at the bottom, not the right
// ... This shouldn't matter, I realize, but is this whats messing me up here?
// Defaulting to quaternion rotations
function mapUpdateAnchorObj(){
	var exitObjMode=0;
	var dir=0;
	if(mapCamMode == 1 && mapCamObjLatch != null){
		mapCamObjLatchCount=Math.min(mapCamObjLatchCountMax, mapCamObjLatchCount+1);
		dir=1;
	}
	if(mapCamObjLatchPrev != null && mapCamObjLatchCount>0){
		mapCamObjLatchCount=Math.max(0, mapCamObjLatchCount-1);
		dir=0;
		if(mapCamObjLatchCount==0){
			exitObjMode=1;
		}
	}
	mapCamObjLatchBlend=mapCamObjLatchCount/mapCamObjLatchCountMax;
	var blend=mapCamObjLatchBlend;
	if(mapCamObjLatchPrev == "candle" || mapCamObjLatch == "candle"){
		if(dir == 1){
			blend=Math.cos(blend*pi/2-pi/2);
			setCursor("activeLatch");
		}else{
			blend=1+Math.cos(blend*pi/2+pi);
			setCursor("grab");
		}
		if(exitObjMode == 1){ // Clean up Obj Anchor
			//geoList['candle'][0].copy(geoList['candle'][2].copy());
			//geoList['candleHandle'][0].copy(geoList['candleHandle'][2].copy());
			blend=0;
			for(var x=0; x< objRayMaskList[mapCamObjLatchPrev].length; ++x){
				objRayMaskList[mapCamObjLatchPrev][x].visible=false;
			}
			mapOnExitMode();
			if(mobile==0 && mapBookOpen==0){
				geoList["mapGlow"][1].visible=true;
			}
			return true;
		}
		
		mapCamAnchorPos=new THREE.Vector3().copy( mapCamAnchorBasePos );
		mapCamAnchorPos.x+=mapCamObjLatchOffset[0]/20;
		mapCamAnchorPos.y+=-mapCamObjLatchOffset[1]/20;
		mapCamAnchorPos.z+=mouseWheelDelta*5;
		
		var pos,qt,sc;
		pos=new THREE.Vector3();
		qt=new THREE.Quaternion();
		sc=new THREE.Vector3();
		var mapCamMatrix=new THREE.Matrix4().copy(mapCam.matrixWorld);
		var mapCamInverse=new THREE.Matrix4().getInverse(mapCamMatrix.clone());

		
		var deltaMatrix=new THREE.Matrix4();
		var tmpMat=geoList['candle'][2].clone();
		//tmpMat.getInverse(deltaMatrix)
		//tmpMat.multiply(deltaMatrix).multiply(xyDeltaData.latchMatrix);
		//tmpMat.multiply(xyDeltaData.latchMatrix);
		tmpMat.decompose(pos, qt, sc);

		//qt.setFromRotationMatrix(deltaMatrix);
		var tmpVec=new THREE.Vector3();
		tmpMat.multiplyScalar(1/sc.x).setPosition(new THREE.Vector3(0,0,0));
		
		if(xyDeltaData.latchMatrix==null){
			xyDeltaData.latchMatrix=new THREE.Matrix4().copy(geoList['candle'][2]);
			xyDeltaData.latchMatrix.multiplyScalar(1/sc.x).setPosition(new THREE.Vector3(0,0,0));
		}
		deltaMatrix.copy(xyDeltaData.latchMatrix);
		var geoMat=new THREE.Matrix4().copy(geoList['candle'][2]);//.multiply(deltaMatrix);
		geoMat.multiplyScalar(1/sc.x);
		var geoMatInverse=new THREE.Matrix4().getInverse(geoMat.clone());//.multiply(deltaMatrix));
	
		if(dir == 1){
			if(xyDeltaData.active == 1 ){
				if(xyDeltaData.mode == 1 ){
					//var rotRate=xyDeltaData.dragCount
					var rotRate=xyDeltaData.dragCount;
					var latchAxis=[1,1,1];
					var rotDelta=[mouseX-xyDeltaData.startPos.x, mouseY-xyDeltaData.startPos.y ];
					var blender=Math.min(1,Math.max(0,(Math.abs(xyDeltaData.startPos.x/sW*2-1)-.5)*8));
					var math=Math.min(1, Math.abs(rotDelta[1]+.01)/Math.abs(rotDelta[0]+.01));
					/*var math=0;
					if(Math.abs(rotDelta[1]) > Math.abs(rotDelta[0])){
						math=1;
					}
					if(xyDeltaData.latchedAxis==null){
						xyDeltaData.latchedAxis=[(1-math),math*(1-blender),math*blender];
					}else{
						latchAxis=xyDeltaData.latchedAxis;
					}*/
					rotDelta[2]=rotDelta[1]*blender;
					if(mouseX>sW/2){
						rotDelta[2]*=-1;
					}
					rotDelta[1]=rotDelta[1]*(1-blender);
					var rotMag=( (rotDelta[0]**2 +rotDelta[1]**2)**.5 )/50;
					//rotDelta=[rotDelta[0]*latchAxis[0], rotDelta[1]*latchAxis[1], rotDelta[2]*latchAxis[2]];
					//rotDelta=[rotDelta[0]*(1-math), rotDelta[1]*math, rotDelta[2]*math];
					rotDelta=[rotDelta[0], rotDelta[1], rotDelta[2]];
					var tmpRotDelta=[...rotDelta];
					if(xyDeltaData.prevDeltaPos != null){
						rotDelta=[ rotDelta[0]-xyDeltaData.prevDeltaPos[0], rotDelta[1]-xyDeltaData.prevDeltaPos[1], rotDelta[2]-xyDeltaData.prevDeltaPos[2] ];
					}
					xyDeltaData.prevDeltaPos=tmpRotDelta;
					//rotDelta[0]+=xyDeltaData.netDistance[0];
					//rotDelta[1]+=xyDeltaData.netDistance[1];
					//rotDelta[2]+=xyDeltaData.netDistance[2];
					
					var upRef=new THREE.Vector3(0,1,0);
					var tmpMat3=new THREE.Matrix3().setFromMatrix4(mapCamMatrix);
					upRef.applyMatrix3(tmpMat3).normalize();
					var tmpRotOffsetYaw=new THREE.Matrix4().makeRotationAxis(upRef, degToRad(rotDelta[0]/5));
					
					var upRef=new THREE.Vector3(1,0,0);
					upRef.applyMatrix3(tmpMat3).normalize();
					var tmpRotOffsetPitch=new THREE.Matrix4().makeRotationAxis(upRef, degToRad(rotDelta[1]/5));
					
					var upRef=new THREE.Vector3(0,0,1);
					upRef.applyMatrix3(tmpMat3).normalize();
					var tmpRotOffsetRoll=new THREE.Matrix4().makeRotationAxis(upRef, degToRad(rotDelta[2]/5));
					
					deltaMatrix=new THREE.Matrix4().multiply(tmpRotOffsetRoll).multiply(tmpRotOffsetYaw).multiply(tmpRotOffsetPitch).multiply(deltaMatrix);
					
					xyDeltaData.updated=0;
				}else if(xyDeltaData.mode == 2 ){
					mapCamAnchorPos.x+=(mouseX-xyDeltaData.startPos.x)/20;
					mapCamAnchorPos.y+=-(mouseY-xyDeltaData.startPos.y)/20;
					xyDeltaData.updated=0;
				}
			}else{
				if(xyDeltaData.updated==0){
					if(xyDeltaData.mode == 1 ){
						var netDistancePrev=[...xyDeltaData.netDistance];
						xyDeltaData.netDistance[0]+=xyDeltaData.prevDeltaPos[0];
						xyDeltaData.netDistance[1]+=xyDeltaData.prevDeltaPos[1];
						xyDeltaData.netDistance[2]+=xyDeltaData.prevDeltaPos[2];
						xyDeltaData.prevDeltaPos=null;
						xyDeltaData.latchedAxis=null;
					}else if(xyDeltaData.mode == 2 ){
						mapCamAnchorPos.x+=(xyDeltaData.endPos.x-xyDeltaData.startPos.x)/20;
						mapCamAnchorPos.y+=-(xyDeltaData.endPos.y-xyDeltaData.startPos.y)/20;
						mapCamObjLatchOffset=[mapCamObjLatchOffset[0]+xyDeltaData.endPos.x-xyDeltaData.startPos.x, mapCamObjLatchOffset[1]+xyDeltaData.endPos.y-xyDeltaData.startPos.y ];
					}
					xyDeltaData.updated=1;
				}
			}
		}else{
			if(xyDeltaData.updated==0){
				xyDeltaData.netDistance+=[...xyDeltaData.prevDeltaPos];
				xyDeltaData.updated=1;
			}
			deltaMatrix=geoList['candle'][2].clone();
			deltaMatrix.multiplyScalar(1/sc.x).setPosition(new THREE.Vector3(0,0,0));
			mapCamAnchorZoomPos=mapCamAnchorBasePos.clone();
		}
		
		deltaMatrix.setPosition(new THREE.Vector3(0,0,0));
		tmpVec.applyQuaternion(qt).applyMatrix4(deltaMatrix);
		if(!isNaN(deltaMatrix.elements[0])){
			xyDeltaData.latchMatrix.copy(deltaMatrix);
			geoList['candle'][0].setRotationFromMatrix(deltaMatrix);
			geoList['candleHandle'][0].setRotationFromMatrix(deltaMatrix);
			geoList['candle_processor'][0].setRotationFromMatrix(deltaMatrix);
			geoList['candleHandle_processor'][0].setRotationFromMatrix(deltaMatrix);
			
		}
		
		candle_flamePos=candle_flameBasePos.clone();
		candle_flamePos.applyMatrix4( geoList["candle"][0].matrixWorld );
		
		
		var avgPos=new THREE.Vector3();//.copy( pos );
		avgPos=candle_flameBasePos.clone();
		
		avgPos.applyMatrix4(xyDeltaData.latchMatrix.clone().setPosition(new THREE.Vector3(0,0,0)));
		avgPos.multiplyScalar(.3);
		var offsetPos=avgPos.clone().sub(candle_flameBasePos.clone()).multiplyScalar(.5);
		avgPos.add(offsetPos);
		avgPos.multiplyScalar(blend).add(pos);
		
		//var pos
		var cameraMat=mapCam.matrixWorld;//mapCamAnchorBasePos.clone().multiply(mapCam.matrixWorld);
		mapCamAnchorPos.applyQuaternion( mapCam.quaternion ).add( mapCam.position );
		mapCamAnchorPos=avgPos.clone().multiplyScalar( (1-blend) ).add( mapCamAnchorPos.multiplyScalar(blend) );
		mapCandleFlame=mapCamAnchorPos.clone().sub(avgPos);
		mapCamAnchorPos.y=mapCamAnchorPos.y-avgPos.y;
		geoList['candle'][0].position.copy(mapCamAnchorPos);
		geoList['candle'][0].updateMatrix();
		geoList['candle'][0].updateMatrixWorld();
		try{
			geoList['candle_processor'][0].position.copy(mapCamAnchorPos);
			geoList['candle_processor'][0].updateMatrix();
		}catch(err){}
		///////////////////////////

		geoList['candleHandle'][0].position.copy(mapCamAnchorPos);
		geoList['candleHandle'][0].updateMatrix();
		try{
		geoList['candleHandle_processor'][0].position.copy(mapCamAnchorPos);
		geoList['candleHandle_processor'][0].updateMatrix();
		}catch(err){}
		
		var anchorGroupBase=new THREE.Vector3().copy( mapCamAnchorBasePos );
		anchorGroupBase.applyQuaternion( mapCam.quaternion ).add( mapCam.position );
		
		for(var x=0; x<lightList['anchorLights'].length; ++x){
			lightList['anchorLights'][x]['obj'].intensity=lightList['anchorLights'][x]['intensity']*blend;
			lightList['anchorLights'][x]['obj'].distance=lightList['anchorLights'][x]['distance']*blend;
		}
		geoList['camAnchorGroup'].position.copy(mapCamAnchorPos);
		geoList['camAnchorGroup'].updateMatrix();
	}
}


