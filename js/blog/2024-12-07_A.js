import { baseEntryStruct, blogEntry } from './blogEntryBase.js';

let entryTitle = "Site Progress";
let entryDate = "2024-12-07";
let entryTags = ["pxlNav", "procstack", "github", "github.io", "javascript", "decemeber", "2024"];
let entryBody = `
Gettin this site online!
<br>
<br>It's been quite a bit of work, spread over a longer span of time than I was hoping.
<br>&nbsp;&nbsp; But it's finally coming together nicely!

<div class="blogSpacer"></div>

It's been oddly enjoyable getting <span class="textNudge">pxlNav</span> refactored and accessible from outside of the module.
<br>Cutting out nearly 7000 lines of code, 
<br>Comments always the bane of my existence,
<br>&nbsp;&nbsp; But they seem to fill out in time.

<div class="blogSpacer"></div>

Currently general ambiance is my focus.
<br>Things in 3d like to be dark when you introduce the idea of a "light" to them
<br>&nbsp;&nbsp; So making sure shaders are matching textures and lighting takes some time.
<br>
<br>Then mix in modeling, rigging, texturing, animating, and scripting the rest of the site.
<br>&nbsp;&nbsp; Since <span class="textNudge">pxlNav</span> is just what handles Three.js.
<br>
<br>All I can say is having drive for a passion project helps build your skills.
<br>&nbsp;&nbsp; Get's you looking for more outlets to share your work.
<br>&nbsp;&nbsp;&nbsp;&nbsp; And you end up finding other projects people have made that inspire you.
<br>
<br>So here's to future projects and sharing creativity with others!

<div class="blogSpacer"></div>

I just got the camera location warping working from outside of pxlNav.
<br>Trigger a camera warp from a button press using a flag on your tag.
<br>
<br>This brought me to add optional camera positions in your 3D CGI program of choice.
<br>Add a new group under your Camera_grp in your scene,
<br>&nbsp;&nbsp; Just add a Position and lookAt locator/null/empty object in that group,
<br>&nbsp;&nbsp;&nbsp;&nbsp; Then add a "pxlRoomName" & "pxlCameraView" tag to your link on your site.
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "pxlRoomName" is your 'pxlRoom' name,
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "pxlCameraView" is your group name under 'Camera_grp'.
<br>&nbsp;&nbsp; Click your link and watch pxlNav warp your camera to that position!
<br>
<br>Only problem right now is the warping effect isn't running.
<br>&nbsp;&nbsp; I'm likely just not enabling the post-process layer for the effect.
<br>&nbsp;&nbsp;&nbsp;&nbsp; pxlCamera has been reworked a bit up to this point,
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; More testing is required.
<br>
<br>&nbsp; -Kevin Edzenga
`;

const entryData = baseEntryStruct();
entryData.title = entryTitle;
entryData.date = entryDate;
entryData.tags = entryTags;
entryData.body = entryBody;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };