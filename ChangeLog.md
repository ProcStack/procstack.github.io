pxlNav Change Log :: 0.17 - 0.18
---------------------

 - `FileIO.js` had an issue when reading your scene's `MainScene` group if it contained groups-in-groups; `this.pxlFile.loadRoomFBX()`. The bug would miss adding the last few objects to your room.  All objects + grouped objects are processed now.

 - `pxlRoom` constructor arguments have changed; removing any pxlNav engine dependencies.  `pxlEnv` will automatically pass itself to your room using `pxlRoom.setDependencies`
<br/>&nbsp;&nbsp; _The pxlRoom constructor for 0.0.18 --
 ```
export class FieldEnvironment extends RoomEnvironment{
  constructor( roomName='FieldEnvironment', assetPath=null, msRunner=null, camera=null, scene=null, cloud3dTexture=null ){
    super( roomName, assetPath, msRunner, camera, scene, cloud3dTexture );
```

---

 - Collider Manager added; `Colliders.js` 
 <br/>&nbsp;&nbsp; _Stores triangle data for Barycentric Ray Intersection using Moller-Trumbore intersection.  It basically what Three.js is using by default, but implemented my own to register colliders with pxlRooms + pre-calculate vertex-face-edge relationships
 <br/>&nbsp;&nbsp; _Sometimes ya just need the first object hit, might as well have that!

 -`FileIO.js` + `Colliders.js` Added grid hashing system to split up Collision Objects into individual triangles based on the location of the Camera in space.  This automatically runs when any colliders are found in your scene. They are registered with the Collider Manager under their given `pxlEnums.COLLIDER_TYPE`
<br/>&nbsp;&nbsp; _Currently, they still need to live in a 'Colliders' group in your FBX under the main `YourEnvironmentGroup`
<br/>&nbsp;&nbsp; _It doesn't work with animated collision objects yet.
<br/>&nbsp;&nbsp; __Next updates will include the world matrix of the object to account for object based movement, but still wont have rigged / blendshape'ing object collision detection.
<br/>&nbsp;&nbsp; _Set your grid size (In Units, being your scene's unit scale) through the `pxlOptions` passed to `pxlNav` when constructing the object -
```
import { pxlNav, pxlOptions } from './pxlNav.js';
pxlOptions[ 'collisionScale' ][ 'gridSize' ] = 50;
const pxlNavEnv = new pxlNav( pxlNavOptions, "Your Site Name", startingRoom, bootRoomList );
```



---

 - `Camera.js` Fixed the "hasUpdated" issues where moving the mouse would trigger collision detection to run.  
<br/>&nbsp;&nbsp; _Collision detection only runs when the camera has moved
<br/>&nbsp;&nbsp; _Clickable/hoverable interactive collision detections are still ran when moving the mouse

 - `Camera.js` has better velocity easing and graduated magic-number variables to the Object level, added set functions for each.
 - `Camera.js` has updated 'set' functions (Not setters/getters, just functions to update settings) --
<br/>&nbsp;&nbsp; _`Setter functions available on the Camera class -
<br/>&nbsp;&nbsp; _`setJumpScalar( val )'
<br/>&nbsp;&nbsp; _`setUserHeight( val, roomName="default" )'
<br/>&nbsp;&nbsp; _`setUserScale( val )'
<br/>
<br/>&nbsp;&nbsp; _`setMovementScalar( val )'
<br/>&nbsp;&nbsp; _`setMovementEase( val )'
<br/>&nbsp;&nbsp; _`setInputMovementMult( val )'
<br/>&nbsp;&nbsp; _`setCameraRotateEasing( val )'
<br/>&nbsp;&nbsp; _`setTouchSensitivity( val )'
<br/>&nbsp;&nbsp; _`setPositionBlend( val )'
<br/>
<br/>&nbsp;&nbsp; _`setGravityRate( val )'
<br/>&nbsp;&nbsp; _`setGravityMax( val )'
<br/>
<br/>&nbsp;&nbsp; _`setWalkBounceHeight( val )'
<br/>&nbsp;&nbsp; _`setWalkBounceRate( val )'
<br/>&nbsp;&nbsp; _`setWalkBounceEaseIn( val )'
<br/>&nbsp;&nbsp; _`setWalkBounceEaseOut( val )'
<br/>
<br/>&nbsp;&nbsp; -Pre-existing functions -
<br/>&nbsp;&nbsp; _`setFOV( fov )'
<br/>&nbsp;&nbsp; _`setStats( fov, aspect, near, far )'
<br/>&nbsp;&nbsp; _`setAspect( aspect )' - Aspect needs updates, use FOV for now
<br/>&nbsp;&nbsp; _`setTransform( pos, lookAt=null )'

<br/>&nbsp;&nbsp; __When setting user/player height from your room, `pxlRoom.setUserHeight( toHeight=1 )` automatically adds your room name for `pxlCamera.setUserHeight( val, roomName )`
<br/>&nbsp;&nbsp; ___`pxlRoom.setUserHeight( 22.5 )` will set your player's height to 22.5 when in that room. This will override your camera's starting height as your player height in the specific room.
<br/>&nbsp;&nbsp; ___Initial player height is still your camera's Y value in your FBX. It's easier to position your camera in the FBX opposed to adding more javascript, but either option works the same.

---
