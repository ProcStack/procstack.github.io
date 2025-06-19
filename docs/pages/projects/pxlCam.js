const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "pxlCam",
  "description": "A photo filter camera web app. Use on phone!!",
  "keywords": "pxlCam, camera, photo filter, web app, javascript, three.js, glsl es, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/pxlCam.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "pxlCam.htm",
  'name' : 'pxlCam',
  'title' : 'pxlCam',
  'lastModified' : '2025-02-24',
  'schemaData' : shemaData,
  'description' : 'A photo filter camera web app. Use on phone!!',
  'keywords' : 'pxlCam, camera, photo filter, web app, javascript, three.js, glsl es, personal projects',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_treeStump.webp',
      'alt' : 'Trippy tree stump',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_trainTracks.webp',
      'alt' : 'Train track edges',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_fungi.webp',
      'alt' : 'Fungi on a log',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_treeBark.webp',
      'alt' : 'Funky tree bark',
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlCam_empireStateBuilding.webp',
      'alt' : 'Tweaked Empire State Building',
      'style' : 'procPagesImageStyle'
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><a href='https://pxlmancer.com/gl/pxlCam' class="textBump" target='_blank'>pxlCam</a> <span class="textDrinkMeAlice textItalic">2020</span></div>
    <span class="textBump">A photo filter camera web app</span>
    <span class="textShrink textItalic textName ">Languages - <span class="textBold">JavaScript, Three.js, & GLSL ES</span></span>
    <div class="pppHBar"></div>
  
    <div class="procPagesProjectsDescriptionStyle">
      <span class="textNudge">*Use on phone!!*</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A few day project.
      
      <br>&nbsp;&nbsp; - Tap the right arrows to switch between the cameras.
      <br>&nbsp;&nbsp; - Tap the triple down arrow to change the filter.
      <br>&nbsp;&nbsp; - The lightning bolt will make the screen white in selfie mode; use your phones light with your back camera
      <br>&nbsp;&nbsp; - The grid toggles the overlay you can use to align and position your shot

      <br>&nbsp;&nbsp; - Tap & drag left/right or up/down to change the current filter's hue shifting or edge detection size & brightness
      <br>
      <br> Each filter has a different effect for the finger drag + direction, so play around with it!

      <br>
      <br>
      <br> This is a camera filter web site I wrote with interactive color and edge effects opengl shaders,
      <br>
      <br> I've added camera checks + access, resolution checkings + switching
      <br>&nbsp;&nbsp; The photo-bin temp photo storage handling. Once you take a photo, a thumbnail will appear.  Tap the icon to load a screen to save the image to any number of resoultions. Tap a resolution to load the file size, if you want to send the photo on discord or something.
      <br>

      <br>&nbsp;&nbsp;&nbsp;&nbsp; And your multiple phone cameras in-browser.
      
      <br>
    </div>
  `,
};