
import { ShaderChunk } from "../../libs/three/three.module.min.js";
import { pxlShaders }  from "../../pxlNav.esm.js";
const shaderHeader = pxlShaders.core.shaderHeader;

import { envGroundVert, envGroundFrag } from "./Shaders/envGroundShaders.js";
import { waterWayVert, waterWayFrag } from "./Shaders/waterWay.js";
import { instPlantsVert, instPlantsFrag } from "./Shaders/instPlants.js";
import { creekWaterVert, creekWaterFrag } from "./Shaders/creekWater.js";

// -- -- -- -- -- -- -- -- -- -- -- //

export { envGroundVert, envGroundFrag, waterWayVert, waterWayFrag, instPlantsVert, instPlantsFrag, creekWaterVert, creekWaterFrag };


