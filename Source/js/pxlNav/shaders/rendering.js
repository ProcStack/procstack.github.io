// Post Processing Shaders
//   Kevin Edzenga, 2024

import { worldPositionVert, worldPositionFrag } from './rendering/WorldPositionPass.js';

//import { mediaToggleVert, mediaToggleFrag } from './rendering/MediaToggle.js';
//import { depthPostProcess } from './rendering/DepthPostProcess.js';

import { glowPassPostProcess } from './rendering/GlowPassShader.js';

import { textureStorePass } from './rendering/TextureStorePass.js';
import { compLayersPostProcess } from './rendering/CompLayersPostProcess.js';

import { boxAntiAliasPass, crossAntiAliasPass  } from './rendering/AntiAliasingPostProcess.js';
import { directionalBlurPass, mixBlurShaderPass } from './rendering/DirectionalBlurPass.js';
import { motionBlurPostProcess } from './rendering/MotionBlurPostProcess.js';

import { chroAberPostProcess } from './rendering/ChroAberPostProcess.js';
import { lKingPostProcess } from './rendering/LKingPostProcess.js';
import { iZoomPostProcess } from './rendering/InfiniteZoomPostProcess.js';
import { sFieldPostProcessVert, sFieldPostProcessFrag } from './rendering/StarFieldPostProcess.js';

import { warpPostProcess } from './rendering/WarpPostProcess.js';
import { finalOverlayHeavyShader, finalOverlayShader, finalOverlaySlimShader } from './rendering/FinalOverlayPostProcess.js';

export { 
  worldPositionVert, worldPositionFrag, 
  glowPassPostProcess, textureStorePass, 
  compLayersPostProcess, boxAntiAliasPass, 
  crossAntiAliasPass, directionalBlurPass, 
  mixBlurShaderPass, motionBlurPostProcess, 
  chroAberPostProcess, lKingPostProcess, 
  iZoomPostProcess, sFieldPostProcessVert, 
  sFieldPostProcessFrag, warpPostProcess, 
  finalOverlayHeavyShader, finalOverlayShader, 
  finalOverlaySlimShader };