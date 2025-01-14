// pxlNav Includes
//   Kevin Edzenga, 2021-2022; 2024
//

// Core; Device & User Classes
import { Utils } from './core/Utils.js'; // Math and General Functions
import { FileIO } from './core/FileIO.js'; // File In / Out
import { QualityController } from './core/QualityController.js'; // Quality Settings and Controls
import { CookieManager } from './core/CookieManager.js'; // Local Browser Cookies
import { Timer } from './core/Timer.js'; // Universal Timer; Used in all custom Shaders & real time animations
import { User } from './core/User.js'; // User Status, Items, and States
import { Device } from './core/Device.js'; // User's Machine / Device Dependencies
import { Colliders } from './core/Colliders.js'; // Collision Detection and Management
import { Animation } from './core/Animation.js'; // Rigging and skeletal animations mostly


// Primary drawing and run time class
import { Environment } from './Environment.js';

// HTML DOM; HUD / GUI
import { GUI } from './gui/GUI.js';

// Camera and Camera Sequencing Automation
import { Camera } from './cam/Camera.js';
import { AutoCamera } from './cam/AutoCamera.js';

// Extentions for lesser used tech; Media, Devices, Computer Vision, & AI
import { Extensions } from './extensions/Extensions.js';


// -- -- -- -- -- -- -- -- -- -- -- -- -- //
// -- v v To move to Extentions v v -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- //

// Media; Audio, Video, and Music Interfaces / Players (Unused in MAP)
import { MusicUtils } from './media/MusicUtils.js';
import { Audio } from './media/Audio.js';
import { Video } from './media/Video.js';


export const pxlBase = { 
  Utils, FileIO, QualityController, 
  CookieManager, Timer, User, Device, 
  Colliders, Animation, Environment, GUI, 
  Camera, AutoCamera, Extensions, 
  MusicUtils, Audio, Video };