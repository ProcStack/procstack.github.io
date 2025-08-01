const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Plushies",
  "description": "My 2024 year in plushies! I made a tool to turn 3d models into fabric patterns in Houdini, so I've been making plushies in my free time!",
  "keywords": "plushies, sewing, 3d modeling, houdini, fabric patterns, personal projects",
  "url": "https://procstack.github.io/AboutMe/Plushies.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "Plushies.htm",
  'name' : 'Plushies',
  'title' : 'Plushies',
  'lastModified' : '2025-03-25',
  'schemaData' : shemaData,
  'description' : 'My 2024 year in plushies! I made a tool to turn 3d models into fabric patterns in Houdini, so I\'ve been making plushies in my free time!',
  'keywords' : 'plushies, houdini, fabric patterns, sewing, minky, anti-pil fleece, plushie making, sewing tools',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/plushies_YearReview_2024_Overview.webp',
      'alt' : "The plushies I made in 2024",
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle'],
      'caption' : ["My 2024 year in plushies!"],
    },
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/pl_uvToFabricPattern.webp',
      'alt' : "Houdini screenshot of Daryll getting flattened",
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle'],
      'caption' : ["My Houdini tool to turn 3d models into fabric patterns"],
    },
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/a04_DaryllTheDuck_A_main.webp',
      'alt' : "Daryll the 'Rubber Duckie'",
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle'],
      'caption' : ["Daryll all done!"],
    },
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/FrankTheFish_n_Pinky.webp',
      'alt' : "Frank the Fish on his Pinky Flamingotube!",
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle']
    }
  ],
  'content' : `
      <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      In late-spring of 2024,
      <br>&nbsp;&nbsp; I made a tool to turn any 3d model into a fabric pattern in Houdini.
      <br>&nbsp;&nbsp; It'll show me the ammount of stretch in a design, let me label the panels, add notches to neighboring panels, and more!
      
      <br><span class="innerCenter">So I've been making plushies in my free time!</span>
      
      <br>&nbsp;&nbsp; I started with anti-pil fleece fabric. I realized pretty quickly it gives off plumes of micro-plastics as you play with them; but its super easy to work with.
      <br><span class="innerCenter textSkew">Anti-pil fleece is definitely a hobbyist fabric.</span>
      
      <br>&nbsp;&nbsp; Then I moved to minky, which is a bit more difficult to work with, but is so soft and cuddly!  It's a bit more expensive, has less stretch than anti-pil, but it's a much better fabric for the feel of the plushies.
      <br><span class="innerCenter textSkew">Minky is definitely for a more skilled crafter.</span>
      
      <br>&nbsp;&nbsp; In the long run, I can get an idea from my head to a plushie in about 4 days now.  So I've been making a bunch of different designs, and I'm really happy with how they've been turning out!
      <br>
      <br>
    </div>
  `,
};