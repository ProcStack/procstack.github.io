const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Origin",
  "description": "The origin of pxlNav, a virtual event space made during the 2020 Covid lockdowns.",
  "keywords": "pxlNav, origin, Antibody Club, virtual event space, Three.js, web development",
  "url": "https://procstack.github.io/pxlNav/Origin.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "Origin.htm",
  'name' : 'Origin',
  'title' : 'Origin of pxlNav',
  'lastModified' : '2025-03-12',
  'schemaData' : shemaData,
  'description' : 'The origin of pxlNav, a virtual event space made during the 2020 Covid lockdowns.',
  'keywords' : 'pxlNav, origin, Antibody Club, virtual event space, Three.js, web development',
  'media' : [
    {
      'type' : 'youtube',
      'src' : '_vzqZ2sNjaw',
      'alt' : 'Huge holiday party thank you video',
      'style' : 'procPagesMediaStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/pxlNav/images/Antib0dyClub_10_chatImplemented.webp',
      'alt' : 'Chat features in Antibody Club',
      'style' : 'procPagesImageStyle',
      'caption' : ["Antibody Club [defunct] - Showing some of the, now removed, network features."]
    }
  ],
  'content' : `
    Originally <span class="textNudge">pxlNav</span> was made for a virtual event space named "Antibody Club" [defunct] during 2020 Covid lockdowns.
    <br>Hosted virtual events, album releases, dj sets, & holiday parties while we couldn't in meat space.

    <br>
    <br>Run around as a display of your webcam, chat with others within a visible distance, grab some items to get "effects" and explore a couple different artist's created environments.

    <br>
    <br>But since then, society walked back into the sun and stretched their legs a bit,
    <br>&nbsp;&nbsp; The needs for a virtual event space had waned.
    
    <br>
    <br>However, pxlNav was pretty cool, so I decided to make it easier to install for your own Three.js projects.
    <br>&nbsp;&nbsp; Aiming to turn your 3d modeling software into a level editor.

    <br><br>As it stands, pxlNav supports FBX files for your Rooms (the environment / scene / levels) which can be made in your 3D program of choice.
    <br>&nbsp;&nbsp; It supports rig + animation fbx files for your character animation, and a simple curve in your scene can act as your camera path ( add another if you want the camera to look somewhere as it's traveling the path ).
    <br>&nbsp;&nbsp; Animated textures by using a second texture, particle effects, FPS navigation, obstacles, items, portals, and more.

    <br><br>3d for web has come a far way, and it has less hurdles than getting your game ready for cross platform usability.
    <br>&nbsp;&nbsp; Websites are just there, anywhere, and can be turned into apps easily these days.
    <br>&nbsp;&nbsp; So why not?

    <br>
    <br>
    <div class="procPagesPxlNavEndNoteStyle">
      During the run of Antibody Club (2020), I had a helping hand on a couple shaders, camera animations, and some other odds'n'ends. 
      <div class="procPagesPxlNavSpacer"></div>
      So, I'd be remiss if I didn't mention <span class="textNudge">Michael Lee</span> & <span class="textNudge">Charles Wang</span> for helping on Antibody Club / pxlNav.
    </div>
  `,
};