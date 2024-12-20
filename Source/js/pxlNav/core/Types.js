// pxlNav Types
//   Written by Kevin Edzenga; 2024
// -- -- -- -- -- -- -- -- -- -- -- --
//
//  As I'm transitioning from Three.js to a homebrew WebGPU engine,
//    I'm implementing my own types to make it easier to transition between engines in general.
//      Perhaps a way of toggling your desired engine's types in the future.
//
//  Since I'm still using Three.js, I'm reimplementing the types from three directly for now

import * as THREE from "../../libs/three/three.module.js";

export const Vector2 = THREE.Vector2;
export const Vector3 = THREE.Vector3;
export const Vector4 = THREE.Vector4;
export const Matrix3 = THREE.Matrix3;
export const Matrix4 = THREE.Matrix4;
export const Quaternion = THREE.Quaternion;
export const Euler = THREE.Euler;
export const Color = THREE.Color;


export const VERBOSE_LEVEL = {
	'NONE' : 0,
	'ERROR' : 1,
	'WARN' : 2,
	'INFO' : 3
}


export const ANTI_ALIASING = {
  'OFF' : 0,
  'LOW' : 1,
  'MEDIUM' : 2,
  'HIGH' : 3
}

export const SKY_HAZE = {
  'OFF' : 0,
  'VAPOR' : 1
}

export const SHADOW_MAP = {
  'OFF' : 0,
  'BASIC' : 1,
  'SOFT' : 2
}

// -- -- --

// Easy access to the enums
//   Reduce the need to import the enums individually
export const pxlEnums = {
  'VERBOSE_LEVEL' : VERBOSE_LEVEL,
  'ANTI_ALIASING' : ANTI_ALIASING,
  'SKY_HAZE' : SKY_HAZE,
  'SHADOW_MAP' : SHADOW_MAP
}

// -- -- --

export const PXLNAV_OPTIONS = {
  'verbose' : VERBOSE_LEVEL.NONE,
  'pxlRoomRoot' : "./pxlRooms",
  'staticCamera' : false,
  'autoCamera' : false,
  'antiAliasing' : ANTI_ALIASING.LOW,
  'shadowMapBiasing' : SHADOW_MAP.BASIC,
  'LoadEnvAssetFile' : false,
  'skyHaze' : SKY_HAZE.OFF,
  'loaderPhrases' : ['...loading the pixels...']
}