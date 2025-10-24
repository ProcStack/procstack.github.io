import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Pixel Mapping";
entryData.date = "2025-10-10";
entryData.eid = "A";
entryData.tags = ["research","graph-node","projection","ethics"];
entryData.body = `
  In early 2023, I started making an AI Pixel-to-Landmark association tool.
  <br>&nbsp;&nbsp; You provide it an image with a person, creature, being, etc..
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Or a photo with identifiable labels.
  <br>&nbsp;&nbsp; It'll run OpenPose or similar to get joint and other landmark data.
  <br>&nbsp;&nbsp; That you'd be able to just grab a point and move it around to pose a character in the image,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Or move and morph objects around by interacting with the model.
  <br>&nbsp;&nbsp; It's a Private repository for now, until I figure out a plan for it,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm considering selling it somehow to help fund my research while making these research tools.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But it's only Alpha right now.

  <br><br>  It's called 'pxlDataManager' which is a horrific name.
  <br>&nbsp;&nbsp; But it's grown into a bit of a Suite of tools.

  <br><br> Get your photo or image, throw it in the program,
  <br>&nbsp;&nbsp; It'll spit out a rigged + UV'ed + Textured 3d model in FBX or GLTF formats.

  <br><br> It gathers data in the provided single photo/image from -
  <br>&nbsp;&nbsp; From monocular depth estimation, light estimation, object segmentation, and OpenPose landmarks.
  <br>&nbsp;&nbsp; Slap it all together and build your rigged object of the person / bi-ped in the photo.
  <br>&nbsp;&nbsp; Or build out a proxy of the found 3d object, if the photo was of objects or animals.

  <br><br> I wrote polygon winding code,
  <br>&nbsp;&nbsp; And the most part of auto UVing & texture building.

  <br><br> I've only been on and off working on it since then.
  <br>&nbsp;&nbsp; Mostly had some reservations about making it at all.
  
  <br><br><div class='procPagesAIDevBar'></div>

  <br> One of the reasons I've left it private is that I don't want people to misuse it.
  <br>&nbsp;&nbsp; I'm not sure how the guardrails should be set up.

  <br><br> If you're able to make a garbage-pass for 3d model, texture maps, and rig estimation from a single image,
  <br>&nbsp;&nbsp; The tool could be used for deepfakes or other such'ness.

  <br><br> I intended this more as a "indie game developer tool" to help make quick proxies for characters or objects from concept art.
  <br>&nbsp;&nbsp; But there is potential for misuse.

  <br><br><div class='procPagesAIDevBar'></div>

  <br> Recently I've been gathering all my digital drawings, 3d renders, and photographs since 1995.
  <br>&nbsp;&nbsp; Booting up hard disks with a nice little 'click' when they spin up....
  <br>&nbsp;&nbsp;&nbsp;&nbsp; My drives probably hate me for raising them from the dead.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tiz the season!!

  <br><br> <span class='innerCenter'>
  <img src='../../../pages/aiDev/images/camoPlato_updated2025.png' alt='Camo Plato' style='max-width:75vw;'>
  <br> <span class='textItalic textDrinkMeAlice'>Camouflage Platypus!
  <br> Macromedia Flash - 1999</span>
  </span>

  <br> I know I got older stuff on floppy disks...
  <br>&nbsp;&nbsp; MR. GUMMY HEAD!!
  <br>&nbsp;&nbsp; The checking of floppies might need to happen soon...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; They're likely all wiped by now though.

  <br><br><div class='procPagesAIDevBar'></div>

  <br> At this point, it's a way for me to better understand Projection in Graph Neural Networks.
  <br>&nbsp;&nbsp; How to associate pixel relationships with joint data in a usable way.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And associate with labels for image generation, CLIP embeddings.


  <br><br> But I've been using the tool to also label objects, pre-process images, organize things for me,
  <br>&nbsp;&nbsp; All that training prep stuff!

  <br><br> I didn't intend it to become a one stop shop;
  <br>&nbsp;&nbsp; But if I'm making my own generative ai network,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Why not?

  <br><br><div class="textFullRight">- October 10th,20th,24th 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
