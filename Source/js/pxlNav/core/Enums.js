// pxlNav Enums
//   Written by Kevin Edzenga; 2024
// -- -- -- -- -- -- -- -- -- -- -- --
//


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
