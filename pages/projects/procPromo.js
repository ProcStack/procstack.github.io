const shemaData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "ProcPromo Shader Pack",
  "description": "A Minecraft shader pack for Optifine & Iris",
  "keywords": "procPromo, shader pack, minecraft, optifine, iris, glsl",
  "url": "https://procstack.github.io/ProjectsLinks/procPromo.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "procPromo.htm",
  'name' : 'procPromo<span class="hideOnMobile">&nbsp;Shader Pack</span>',
  'title' : 'procPromo Shader Pack',
  'lastModified' : '2025-06-19',
  'schemaData' : shemaData,
  'description' : 'A Minecraft shader pack for Optifine & Iris',
  'keywords' : 'procPromo, shader pack, minecraft, optifine, iris, glsl,',
  'navGroup' : 'Repos to Check Out',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/CloudPillar_2024-01-08.webp',
      'alt' : 'A Minecraft cloud pillar in procPromo',
      'style' : 'procPagesImageStyle',
      'caption' : ["Cloud pillar!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/AlienFlora_2024-01-08.webp',
      'alt' : 'The alien fungal bloom has spread!',
      'style' : 'procPagesImageStyle',
      'caption' : ["The spores have spread!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/NetherLavaLake_2024-01-10.webp',
      'alt' : 'A cool day in Minecraft Palm Springs!',
      'style' : 'procPagesImageStyle',
      'caption' : ["A chill day in Palm Springs"]
    },
  ],
  'content' : `
    <a href='https://github.com/ProcStack/procPromo_ShaderPack' class='procPagesRepoLinkStyle' target='_blank'>procPromo Shader Pack</a> <span class="textDrinkMeAlice textItalic">2022-2025</span>
    <br><span class="textBump">A <span class="textName">Minecraft</span> shader pack for <span class="textName">Optifine</span> & <span class="textName">Iris</span></span>
    <br><span class="textShrink textItalic textName ">Languages - <span class="textBold">GLSL 1.2, 3.3, & 4.5</span></span>
    <div class="pppHBar"></div>
    
    I started writing <span class="textName">procPromo</span> in the spring of 2022 as a way to learn GLSL better.
    <br>&nbsp;&nbsp; Figured, if I was already playing minecraft, might as well make it look cool too!
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like, while I built the sky villa and alien spore in the images.

    <br>
    <br>I decided on a style inspired by the Minecraft Key or '<a href="https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Part%20I-Announce-Header.jpg" target="_blank">Promo</a>' art,
    <br>&nbsp;&nbsp; Writing a <span class='textInblockBox'>Texture Blur</span> similar to <span class='textName'>Smart Blur</span> in photoshop; smoothing regions of similar colors.
    <br>&nbsp;&nbsp; Then added block "edges" using <span class='textInblockBox'>Depth + Normals</span>,
    <br>&nbsp;&nbsp; Created a <span class='textInblockBox'>2-Pass Blur/Glow</span> in post-processing.
    <br>&nbsp;&nbsp; And a <span class='textInblockBox'>Shadow Distortion</span> system with <span class='textName'>biasing</span> based on per-axis (X,Y) from player.

    <br>
    <br>
    <br>Shadows are fun to figure out in games,
    <br>&nbsp;&nbsp; But they are all circular or 'radial distance' from the player.

    <div class='textSpacer'></div>

    <span class="innerCenter">
    But this is a block game though!
    <br>So how about 90-degree angle shadows??</span>

    <br> Distorting the objects in space by their X & Y axis distance to the player/camera, instead of radial shadow maps,
    <br>&nbsp;&nbsp; Let me get much sharper shadows from blocks, similar to the shadows in Minecraft's promo art.

    <div class='textSpacer'></div>

    <br> It was a fun experiment for shadowing,
    <br>&nbsp;&nbsp; But it has it's time and place;
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like in a block game.
    <br>
    <br>
  `,
};