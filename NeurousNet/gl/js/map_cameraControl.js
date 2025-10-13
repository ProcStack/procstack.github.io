
function mapUpdateCamera(){
	var dirSign=1;
	var panMult=1.5;
	var panOff=0;//-.35;
	var zoomMult=(mouseY/sH*.3 +1.5);
	
	var mapCamX=sW-mouseX;
	var mapCamY=40;
	var mapCamZ=mouseY;
	var yPerc=(mouseY/sH);
	if(touchScreen==1){
		mapCamX=sW-mapCamX;
		zoomMult=(mouseY/sH*.3 +1);
	}
	mapCamX*=1-(mouseY/sH)*.6;
	
	
	var randomPos=(x)=>[Math.random(x)*.5-.5,Math.random(x)*.5,Math.random(x+2)*.5-.5];	
	var randomSmoothUnsign=(x,time=1,mult=1)=>[(Math.sin(x*91527.5194+time)*.5-.5)*mult,(Math.sin(-x*3259.751-time)*.5-.5)*mult,(Math.cos((x+2)*7519.762+time)*.5-.5)*mult];	
	var randomSmooth=(x,time=1,mult=1)=>new THREE.Vector3((Math.sin(x*91527.5194+time))*mult,(Math.sin(-x*3259.751-time))*mult,(Math.cos((x+2)*7519.762+time))*mult);	
	
	
	var camOffsetPos,camOffsetLookPos,yPercLook,camLookAt;
	var camPosBlend=.5; // Prev Pos Blend
	var blend=.5; // Mode Blend
	
	//---------------
	//if(mapCamMode == 0){
	var camOffsetPos=randomSmooth(19,runner*.02,1);
	mapCamX=camOffsetPos.x + Math.sin((mapCamX/sW-.5)*panMult +panOff)*50*zoomMult + 80*yPerc;
	mapCamY=camOffsetPos.y + 50+140*(mouseY/sH);
	mapCamZ=camOffsetPos.z + Math.cos((mapCamZ/sW-.5)*panMult +panOff)*50*zoomMult +70 - 40*yPerc;

	if(mapCamPrevX==undefined){
		mapCamPrevX=mapCamX;
		mapCamPrevY=mapCamY;
		mapCamPrevZ=mapCamZ;
		mapCamPrevTarget=[0,23,-100];
	}
	mapCamX=mapCamPrevX*(1-camPosBlend) + mapCamX*camPosBlend;
	mapCamY=mapCamPrevY*(1-camPosBlend) + mapCamY*camPosBlend;
	mapCamZ=mapCamPrevZ*(1-camPosBlend) + mapCamZ*camPosBlend;
	
	//---------------
	
	camOffsetLookPos=randomSmooth(21,runner*.008,2);
	
	yPercLook=Math.min(1, Math.max(0, (yPerc-.15)*1.6+.3));
	camLookAt=[camOffsetLookPos.x+10*yPercLook, camOffsetLookPos.y/2+40-25*yPercLook, camOffsetLookPos.z+30-40*yPercLook];
	camLookAt[0]=mapCamPrevLookAt[0]*(1-camPosBlend) + camLookAt[0]*camPosBlend;
	camLookAt[1]=mapCamPrevLookAt[1]*(1-camPosBlend) + camLookAt[1]*camPosBlend;
	camLookAt[2]=mapCamPrevLookAt[2]*(1-camPosBlend) + camLookAt[2]*camPosBlend;
	
	
	mapCam.position.x=mapCamX;
	mapCam.position.y=mapCamY;
	mapCam.position.z=mapCamZ;
	mapCam.lookAt(camLookAt[0], camLookAt[1], camLookAt[2]);
	//
	mapCamPrevX=mapCamX;
	mapCamPrevY=mapCamY;
	mapCamPrevZ=mapCamZ;
	mapCamPrevLookAt=camLookAt;
	mapCam.updateMatrixWorld();
	mapCamObjAnchor=new THREE.Matrix4();
	mapCamObjAnchor.makeTranslation(mapCamAnchorBasePos.x, mapCamAnchorBasePos.y, mapCamAnchorBasePos.z);
	mapCamObjAnchor.multiply( mapCam.matrixWorld );
	var anchorPos=mapCamAnchorBasePos.clone().applyMatrix4( mapCam.matrixWorld );
}