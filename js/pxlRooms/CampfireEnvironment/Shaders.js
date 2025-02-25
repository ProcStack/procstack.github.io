// Campfire Environment Shaders
//   Written by Kevin Edzenga; 2024,2025
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
//
// Since I wanted the look to be more custom, I made a few shaders to help with that.
//   These shaders are all optional, as I could have used default Three.js materials.
// Just wanted a more custom look for the Campfire Environment.
//

// Shader for the Rabbit Druid --
import { rabbitDruidVert, rabbitDruidFrag } from "./Shaders/RabbitDruid_campfire.js";

// A generic shader for RGB + Alpha maps, with added fog --
import { rgbaMapVert, rgbaMapFrag } from "./Shaders/rgbaMap.js";

// Shader for the instance-to-mesh plants --
import { instPlantsVert, instPlantsFrag } from "./Shaders/instPlants.js";

// Shader for the environment ground, mixing different textures using a Data map --
import { envGroundVert, envGroundFrag } from "./Shaders/envGround.js";

// Shader for the Campfire Flame, moving UVs with vertex-color flow & influence --
import { campfireVert, campfireFrag } from "./Shaders/campfire.js";

// Shader for the Campfire Log, using a noise texture to blend areas of different ember textures --
import { campfireLogVert, campfireLogFrag } from "./Shaders/campfireLog.js";

// Shader for the Grass Cluster, using a noise texture to blend areas of different grass textures --
import { grassClusterVert, grassClusterFrag } from "./Shaders/grassCluster.js";

// -- -- --

export {
  rabbitDruidVert, rabbitDruidFrag,
  rgbaMapVert, rgbaMapFrag,
  instPlantsVert, instPlantsFrag,
  envGroundVert, envGroundFrag,
  campfireVert, campfireFrag,
  campfireLogVert, campfireLogFrag,
  grassClusterVert, grassClusterFrag
};
