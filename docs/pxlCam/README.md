# pxlCam
### Web Cam + ThreeJS Cam Filter App
### [pxlMancer.com/gl/pxlCam](https://www.pxlMancer.com/gl/pxlCam)
---

An experiment with ThreeJS to create a website for realtime gpu based filters.
<br>Sampling cameras on device, allowing for adaptive camera resolutions, saving snapshots to disk, finding phone orientation, and muliple passes through ThreeJS's composer.

---
#### Functions of importance --
#### **js/map_deviceScripts.js** -
    checkMediaRes()
Checks through the `camResCheckList` array of resolution widths to find the solid range of camera resolutions.
#### **js/map_shaderScripts.js** -
    saveShot()
Save canvas render to file and download.
Also detecting device orientation and rotating the canvas draw to account; in conjunction with **js/map_deviceScripts.js** - `devicePoseData(e)` fired by **js/map_deviceScripts.js** - `window.addEventListener('deviceorientation', devicePoseData);`
#### **js/map_shaderScripts.js** -
    filter_smartBlur(mult)
    filter_shiftEdgeThickness(force, mult)
    filter_shiftHueSaturation(force)
Build composer shaderPass OpenGL shaders
#### **js/map_shaderScripts.js** -
    webcamFragment_smartBlur(smoothReach)
A smart blur shader, detecting edges while blending all colors prior to hitting an edge.
#### **js/map_shaderScripts.js** -
    webcamFragment_colorEdge(edgeReach)
Isolate edges and use edge falloff as a mask of a greyscale RGB conversion and full color.
#### **js/map_shaderScripts.js** -
    webcamFragment_hueSatch()
Convert color RGB to HSV/HSL and shift the values and convert back to RGB for display.

---
### To-Do's
My approach is to get the stuff working and isolate from there.
<br>That being said, I haven't found an easy to use and implement **Find all camera resolutions** webcam / WebRTC javascript system on the web.
- Conver the mutli-resolution finder `checkMediaRes()` to an easy to use class.
 
