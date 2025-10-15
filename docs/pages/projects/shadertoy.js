const shemaData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Shadertoy",
  "description": "My account on a social shader playground website, where I post my shaders.",
  "keywords": "shadertoy, shaders, social shader playground, glsl es, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/Shadertoy.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};
export const pageListingData = {
  'htmlName' : "Shadertoy.htm",
  'name' : 'Shadertoy<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: GLSL</span>',
  'title' : 'Shadertoy',
  'lastModified' : '2025-02-24',
  'schemaData' : shemaData,
  'description' : 'My account on a social shader playground website, where I post my shaders.',
  'keywords' : 'shadertoy, shaders, social shader playground, glsl es, personal projects',
  'navGroup' : "The One'Offs",
  'navStyle' : ['hideOnMobile'],
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/projects/images/datNya.webm',
      'alt' : 'Dat Nya!',
      'style' : 'procPagesImageStyle',
    },
  ],
  'content' : `
    <a href='https://www.shadertoy.com/user/trancor' class="textBump" target='_blank'>Shadertoy</a> <span class="textDrinkMeAlice textItalic">2020+</span>
    <br><span class="textBump">My account on a social shader playground website</span>
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">GLSL ES</span></span>
    <div class="pppHBar"></div>
    
    Most of the shaders are utilitarian, 
    <br>&nbsp;&nbsp; 'Utility' like an exploration into the <a href='https://www.shadertoy.com/view/cdSSW1' class="textNudge" target='_blank'>Kuwahara Filter</a>.
    <br> Or a Ray Marching shader to learn about sdf math.
    
    <br>
    <br>&nbsp;&nbsp; Click + Drag <a href='https://www.shadertoy.com/view/lXffz7' class="textNudge" target='_blank'>dat cat!</a>
  `,
};