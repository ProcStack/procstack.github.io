# procstack.github.io / pxlNav
### Javascript player controller & framework for three.js

#### Metown USA, baby!

Kevin Edzenga's web dev & shader resume site
<br/>&nbsp;&nbsp;Made as a way to show off `pxlNav`
### 

<img src="_show/procstack.github.io_2024-12-12.jpg" alt="procstack.github.io pxlNav environment" style="margin-left:auto;margin-right:auto;"/>
<div style="margin-left:auto;margin-right:auto;">[procstack.github.io](https://procstack.github.io/)</div>


### The Good Bits -
*Wanna see the template or example rooms using 3d fbx files?*
<br/>&nbsp; `./Source/pxlRooms`

<br/>&nbsp;&nbsp;For `pxlNav` Documentation -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[pxlNav Documentation](https://github.com/ProcStack/pxlNav/tree/main/docs)

<br/>&nbsp;&nbsp;For `pxlNav` Repo with Source & Info -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[pxlNav Repo ](https://github.com/ProcStack/pxlNav)

<br/>&nbsp;&nbsp;Minified pxlNav, style, & assets *(if desired)* -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;`./Build`

<br/>&nbsp;&nbsp;`pxlNav` dev entry point is -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;`./Source/js/pxlNav.js`

<br/>&nbsp;&nbsp;`procstack.github.io` public site -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;`./docs`


##

#### Note about `pxlNav` -<br/>&nbsp;&nbsp;&nbsp;&nbsp;*November 16th, 2023*

I decided to release the `pxlNav` framework for `three.js` I wrote for use in the virtual event website `Antib0dy.club`,
<br/>&nbsp;&nbsp;A site used during the height of the pandemic to throw multiplayer avitar filled virtual parties & dj album drops.
<br/>&nbsp;&nbsp;&nbsp;&nbsp;With live video feeds of our house dj and event dj, switched dynamically durring events.


<img src="_show/AntibodyClub_chatImplemented.jpg" alt="Antib0dy.club, using pxlNav with Three.js" style="margin-left:auto;margin-right:auto;"/>
<div style="margin-left:auto;margin-right:auto;">(Antib0dy.Club, networking has been removed though)</div>


For `pxlNav` I wrote a first person navigation system, collision detection, camera animation sequencer,
<br/>&nbsp;&nbsp;An in-browser opengl vert/frag shader code text editor & compiler/refresher with keyboard shortcut regex commands,
<br/>&nbsp;&nbsp;FBX 3d scene structure to allow for Maya/Blender directly into pxlNav with complete scene comprehension.

All as a framework using `three.js` with differed render passes to allow for in-environment items
<br/>&nbsp;&nbsp;Which could alter the screens appearance through post processing,
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Or added screen effects when using teleportation pads
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Between like-named collider+object pairs in the FBX scene file

But I did remove the `Jitsi` integration of users webcams and mics
<br/>&nbsp;&nbsp;Implemented as their video visual avitar & audio with distance fall off attenuation.
<br/>This is too much of a separate intergration to include in this repo, nor the `pxlNav` repo (when its created)
<br/>It will need to have a docker script, websocket settings,
<br/>&nbsp;&nbsp;Port forwarding, sip controlling, handshake handling,
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Room management overhaul, more asset & user managament checks, added security;
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An entire environment to set up
<br/>&nbsp;&nbsp;So I'll likely make a pxlVideoAvitar repo in the future,
<br/>&nbsp;&nbsp;&nbsp;&nbsp;But there are no plans for that at the moment.

Realistically, I should add Universal Scene Description (USD) support for future advancements to the system.

But heck with it, for now I'm making a rabbit druid dude poke a fire and look at a stick for my website!
<br/> - *Kevin Edzenga*


*Temporary holdover for `pxlNav` until I implement the third-person controller & code clean up / commenting,*
<br/>&nbsp;&nbsp;*I'll created a `pxlNav` repo when complete*
