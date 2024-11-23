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