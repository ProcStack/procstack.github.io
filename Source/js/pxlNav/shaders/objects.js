// Object / Surface Material Shaders
//   Kevin Edzenga, 2024

//import { boostColorsVert, boostColorsFrag  } from './objects/BoostColors.js';
import { itemBaseVert, itemBaseFrag  } from './objects/ItemBaseShader.js';
import { itemVert, itemFrag, itemZoomFrag } from './objects/ItemShader.js';

import { pxlPrincipledVert, pxlPrincipledFrag } from './objects/PxlPrincipled.js';

// TODO : Implement this into a core shader
//import { triplanarRolloffVert, triplanarRolloffFrag  } from './objects  riplanarRolloff.js';


export { itemBaseVert, itemBaseFrag, itemVert, itemFrag, itemZoomFrag, pxlPrincipledVert, pxlPrincipledFrag };