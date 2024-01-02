
// Shader header percision is set in './pxlShaders/shaderHeader.js';

// Default, baseline shaders
import { defaultVert, defaultShiftVert, camPosVert, discardFrag } from './pxlShaders/defaults.js';
import { pxlPrincipledVert, pxlPrincipledFrag } from './pxlShaders/pxlPrincipled.js';

// Vert and Frag Shaders
import { glowTextureVert, glowTextureFrag } from './pxlShaders/glowTextureShader.js';
import { hdrRoomVert, hdrRoomFrag } from './pxlShaders/hdrRoomShader.js';
import { skyObjectVert, skyObjectFrag, skyTextureVert, skyTextureFrag, skyPlaneVert, skyPlaneFrag } from './pxlShaders/skyTextureShader.js';
import { userScreenVert, userScreenFrag } from './pxlShaders/userScreenShader.js';
import { wallBarrierVert, wallBarrierFrag } from './pxlShaders/wallBarrierShader.js';
import { scrollingTextureVert, scrollingTextureFrag, scrollingEntranceFrag } from './pxlShaders/scrollTextureShader.js';
import { worldPositionVert, worldPositionFrag } from './pxlShaders/worldPositionSceneShader.js';

import { dArrowVert, dArrowFrag } from './pxlShaders/dArrowShaders.js';

import { itemVert, itemFrag, itemZoomFrag } from './pxlShaders/itemShader.js';
import { itemBaseVert, itemBaseFrag } from './pxlShaders/itemBaseShader.js';
import { portalBaseVert, portalBaseFrag } from './pxlShaders/portalBaseShader.js';

import { promoBevelVert, promoBevelFrag } from './pxlShaders/promoBevelShader.js';
import { promoDisplayVert, promoDisplayFrag } from './pxlShaders/promoDisplayShader.js';

// Post Processing Shaders -
import {compLayersPostProcess} from './pxlShaders/compLayersPostProcess.js';
import { depthPostProcess } from './pxlShaders/depthPostProcess.js';
import { finalOverlayHeavyShader, finalOverlayShader, finalOverlaySlimShader } from './pxlShaders/finalOverlayPostProcess.js';
import { glowPassPostProcess } from './pxlShaders/glowPassShader.js';
import { directionalBlurPass, mixBlurShaderPass } from './pxlShaders/directionalBlurPass.js';
import { motionBlurPostProcess } from './pxlShaders/motionBlurPostProcess.js';
import { chroAberPostProcess } from './pxlShaders/chroAberPostProcess.js';
import { lKingPostProcess, sFieldPostProcessVert, sFieldPostProcessFrag, textureStorePass, iZoomPostProcess } from './pxlShaders/lKingPostProcess.js';
import { warpPostProcess } from './pxlShaders/warpPostProcess.js';
import { boxAntiAliasPass, crossAntiAliasPass  } from './pxlShaders/antiAliasingPostProcess.js';

import { superficialCircleGateVert, superficialCircleGateFrag, superficialCircleGateGlowFrag } from './pxlShaders/superficialCircleGate.js';

import { bgScreenVert, bgScreenFrag } from './pxlShaders/bgScreenShader.js';
import { snowVert, snowFrag } from './pxlShaders/snowShader.js';


export var pxlShaders={
	'defaultVert':defaultVert,
	'defaultShiftVert':defaultShiftVert,
	'camPosVert':camPosVert,
	'discardFrag':discardFrag,
	'glowTextureVert':glowTextureVert,
	'glowTextureFrag':glowTextureFrag,
  
	'pxlPrincipledVert':pxlPrincipledVert,
	'pxlPrincipledFrag':pxlPrincipledFrag,
    
  'dArrowVert':dArrowVert,
  'dArrowFrag':dArrowFrag,

	'hdrRoomVert':hdrRoomVert,
	'hdrRoomFrag':hdrRoomFrag,
  
	'skyObjectVert':skyObjectVert,
	'skyObjectFrag':skyObjectFrag,
	'skyTextureVert':skyTextureVert,
	'skyTextureFrag':skyTextureFrag,
	'skyPlaneVert':skyPlaneVert,
	'skyPlaneFrag':skyPlaneFrag,
  
	'userScreenVert':userScreenVert,
	'userScreenFrag':userScreenFrag,
	'wallBarrierVert':wallBarrierVert,
	'wallBarrierFrag':wallBarrierFrag,
	'scrollingTextureVert':scrollingTextureVert,
	'scrollingTextureFrag':scrollingTextureFrag,
	'scrollingEntranceFrag':scrollingEntranceFrag,
	'worldPositionVert':worldPositionVert,
	'worldPositionFrag':worldPositionFrag,
	
	'itemVert':itemVert,
	'itemFrag':itemFrag,
	'itemZoomFrag':itemZoomFrag,
	'itemBaseVert':itemBaseVert,
	'itemBaseFrag':itemBaseFrag,
	'portalBaseVert':portalBaseVert,
	'portalBaseFrag':portalBaseFrag,
    
	'promoBevelVert':promoBevelVert,
	'promoBevelFrag':promoBevelFrag,
	'promoDisplayVert':promoDisplayVert,
	'promoDisplayFrag':promoDisplayFrag,

	// Post Processing Shaders -
	'compLayersPostProcess':compLayersPostProcess,
	'depthPostProcess':depthPostProcess,
	'finalOverlayHeavyShader':finalOverlayHeavyShader,
	'finalOverlayShader':finalOverlayShader,
	'finalOverlaySlimShader':finalOverlaySlimShader,
	'glowPassPostProcess':glowPassPostProcess, 
	'directionalBlurPass':directionalBlurPass, 
	'mixBlurShaderPass':mixBlurShaderPass, 
	'motionBlurPostProcess':motionBlurPostProcess, 
	'chroAberPostProcess':chroAberPostProcess, 
    
	'lKingPostProcess':lKingPostProcess, 
	'sFieldPostProcessVert':sFieldPostProcessVert, 
	'sFieldPostProcessFrag':sFieldPostProcessFrag, 
	'iZoomPostProcess':iZoomPostProcess, 
    
	'textureStorePass':textureStorePass, 
    
	'warpPostProcess':warpPostProcess, 
  'boxAntiAliasPass':boxAntiAliasPass,
  'crossAntiAliasPass':crossAntiAliasPass,
	
	
  'superficialCircleGateVert':superficialCircleGateVert,
  'superficialCircleGateFrag':superficialCircleGateFrag,
  'superficialCircleGateGlowFrag':superficialCircleGateGlowFrag,
  
  'bgScreenVert':bgScreenVert,
  'bgScreenFrag':bgScreenFrag,
  
  'snowVert':snowVert,
  'snowFrag':snowFrag,
}