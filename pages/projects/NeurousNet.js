const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Neurous.Net",
  "description": "A few day project. Just a page you can play around with particles. A random project to make a custom emitter and particle class structure in javascript.",
  "keywords": "neurous, particles, javascript, web development, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/NeurousNet.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "NeurousNet.htm",
  'name' : 'Neurous Net',
  'title' : 'Neurous.Net',
  'schemaData' : shemaData,
  'description' : 'A few day project. Just a page you can play around with particles. A random project to make a custom emitter and particle class structure in javascript.',
  'keywords' : 'neurous, net, particles, javascript, particle system, emitter, custom emitter, custom particle class',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/neurousnet.webp',
      'alt' : 'Swirling particles',
      'style' : 'procPagesImageStyle'
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><a href='http://www.neurous.net' class="textBump" target='_blank'>Neurous.net</a> <span class="textDrinkMeAlice textItalic">2017</span></div>
    <span class="textShrink textItalic textName ">Language - <span class="textBold">JavaScript</span></span>
    <div class="pppHBar"></div>
    
    <div class="procPagesProjectsDescriptionStyle">  <span class="textNudge">*More fun on phone!*</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A few day project.
      <br>&nbsp;&nbsp; Just a page you can play around with particles.  A random project to make a custom emitter and particle class structure in javascript.
    </div>
  `,
};