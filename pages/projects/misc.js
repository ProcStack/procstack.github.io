const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Misc.",
  "description": "The Miscellaneous Randous I've Made",
  "keywords": "randous, misc, miscellaneous, junk, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/misc.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "misc.htm",
  'name' : 'Misc.',
  'title' : 'Misc.',
  'lastModified' : '2026-09-23',
  'schemaData' : shemaData,
  'description' : 'Miscellaneous randous junk of the ages!',
  'keywords' : 'randous, misc, miscellaneous, junk, personal projects',
  'navGroup' : 'Personal Projects',
  'navStyle' : ['hideOnMobile'],
  'media' : [
    {
      'type' : 'youtube',
      'src' : 'J4cfb0X5LaQ',
      'alt' : 'Bad Node',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle'],
      'caption' : ['Bad Node']
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/Beam-Xvid_short.webm',
      'alt' : 'Warpy warpy!',
      'caption' : ['Warpy warpy!'],
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/Unity_computeShaderDev_zoomOut_halfRes.webm',
      'alt' : 'Particle Merging',
      'caption' : ['Unity; Interacting compute particle systems'],
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/Unity_computeShaderDev_orb_halfRes.webm',
      'alt' : 'Trippy Orb',
      'caption' : ['Trippy Post-Processing!'],
      'style' : 'procPagesImageStyle'
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/Unity_TesseractTo3D_spin_30fps_halfRes.webm',
      'alt' : 'Tesseract to 3D',
      'caption' : ['Unity; 3D Shadow of a spinning 4D Cube / Tesseract'],
      'style' : 'procPagesImageStyle'
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle textBump textBold">Miscellaneous random junk!</div>
    
    <div class="procPagesProjectsDescriptionStyle">

      <br> I was bored one day,
      <br>&nbsp;&nbsp; So I put Bad Apple in Houdini,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class='textName'>Bad Node</span>

      <br><br> I thought it would be funny to animate the music video as Nodes in the graph editor
      <br>&nbsp;&nbsp; I'm pleased with the result, haha

      <br><br> Had some timing issues, so there are some hiccups...
      <br>&nbsp;&nbsp; But decided I'd record it play out on my computer,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Then run my <span class='textNudge'>Duplicate Frame Remover</span> script I wrote.

      <br><br> Took an hour and 40 minutes to play through,
      <br>&nbsp;&nbsp; But I made the mistake of rendering too low of kbps, so the quality suffered.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Causing the duplicate frame remover to mess up quite a bit, even with thresholds set.

      <br><br> So I now have a bunch more options on my dupe frame remover script, hah.
      <br>&nbsp;&nbsp; Added a bunch of things to account for issues, but still some problems remain.

      <br>
      <br><div class='procPagesAboutMeBar'></div>

      <br> The green energy warpy portal is just a random Maya render.
      
      <br>
      <br><div class='procPagesAboutMeBar'></div>

      <br> I felt like making some Compute Shaders that talked to each other in <span class='textName'>Unity</span>,
      <br>&nbsp;&nbsp; So why not? Random boxes absorbing circles!

      <br>
      <br>To be fair, it's a work-in-progress and I'm making custom particle systems of atoms, 'molecules', and crystals form.
      <br>&nbsp;&nbsp; Progressing through the stages, but, ya know, work-in-progress
      
      <br>
      <br>It's for a game I've been on'n'off making since january 2022,
      <br>&nbsp;&nbsp; But I only just made this in July 2025 hah

      <br>
      <br>The game's not high on my priority list,
      <br>&nbsp;&nbsp; But I did write 18 pages of story an 6-7 of dialogue,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Inspired by Undertale & Hollow Knight;
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A side view fighting game with AI inspired by Rain World.

      <br> To tell a story, not randomly generated collapsed-wave functions of level generation.
      
      <br>
      <br><div class='procPagesAboutMeBar'></div>

      <br>The chrome balls is the 3d shadow of a 4d Cube or a Tesseract, in <span class='textName'>Unity</span>.
      <br>&nbsp;&nbsp; I'm calculating the 4d math of a spinning tesseract,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Then projecting it into 3d space to render
      <br>
      <br>

    </div>
  `,
};