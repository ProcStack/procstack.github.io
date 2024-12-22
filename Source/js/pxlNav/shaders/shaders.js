// pxlNav Includes -
//   Primary Shader File Conduit
//     Kevin Edzenga, 2024
//
// Please directly import percision headers in your room's shaders file
//   From your room's root folder -
//     ```
//       import { shaders } from "../../pxlNav.js";
//     ```
//
//   Used with -
//     ```
//       export function yourShader(){
//         let ret=shaderHeader();
//         ret+=`void main(){}`;
//         return ret;
//       }
//     ```

import * as core from './core.js';

import * as animated from './animated.js';
import * as objects from './objects.js';
import * as particles from '../effects/particles/shaders.js';
import * as rendering from './rendering.js';
import * as scene from './scene.js';

export var pxlShaders={
  'animated':animated,
  'core':core,
  'objects':objects,
  'particles':particles,
  'rendering':rendering,
  'scene':scene
}