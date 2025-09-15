// Re-export Three.js modules to avoid local file issues
// This allows existing imports to work while using the actual Three.js module

// Core Three.js exports
export * from 'three';

// Post-processing
export { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
export { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
export { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
export { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
export { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

// Shaders
export { CopyShader } from 'three/addons/shaders/CopyShader.js';
export { LuminosityHighPassShader } from 'three/addons/shaders/LuminosityHighPassShader.js';

// Loaders
export { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
export { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
export { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
export { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';

// Libs
export { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

// Utils
export * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

// Controls (if needed)
// export { OrbitControls } from 'three/addons/controls/OrbitControls.js';
