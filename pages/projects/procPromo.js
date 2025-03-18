
export const pageListingData = {
  'name' : 'procPromo<span class="hideOnMobile">&nbsp;Shader Pack</span>',
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
    <br><span class="textBump">A shader pack for Minecraft, used through Optifine.</span>
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">GLSL 1.2 & 3.2+</span></span>
    <br><span class="textShrink textItalic textName ">File Count - <span class="textBold">177</span></span>
    <div class="pppHBar"></div>
    
    I started writing procPromo in the spring of 2022 as a way to learn GLSL,
    <br>&nbsp;&nbsp; Figured, if I was already playing mindcraft, might as well make it look cool too;
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like when buildings the 2 builds in the images above.

    <br>
    <br>I decided on a style inspired by the Minecraft Key art,
    <br>&nbsp;&nbsp; This meant a <span class='textInblockBox'>Texture Blur</span> like the <span class='textName'>Smart Blur</span> in photoshop. By smoothing regions of similar colors.
    <br>&nbsp;&nbsp; To make a <span class='textInblockBox'>Depth + Normal</span> based edge detection.
    <br>&nbsp;&nbsp; Create a <span class='textInblockBox'>2-Pass Blur/Glow</span> with post-processing.
    <br>&nbsp;&nbsp; And a <span class='textInblockBox'>Shadow Distortion</span> system with <span class='textName'>biasing</span> based on axial-distance from camera/player.

    <br>
    <br>Shadows are strange in games,
    <br>&nbsp;&nbsp; They are a 2D representation of a 3D object, being projected onto a surface.
    <br>&nbsp;&nbsp; Then to fix artifacts like <span class='textName'>Peter Panning</span> or <span class='textName'>Shadow Acne</span>, you have to bias the shadow map as you read it.
    <br>&nbsp;&nbsp; It's strange because it's always circular in games.

    <div class='procPagesSpacer'></div>
    <span class="innerCenter">How about per axis?</span>
    <br> Minecraft is a game of cubes after all,
    <br>&nbsp;&nbsp; 90 degree angles are everywhere.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; So why not treat X, Y, & Z differently?

    <div class='procPagesSpacer'></div>

    <br> Fun experiment for shadowing,
    <br>&nbsp;&nbsp; But it has it's time and place;
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like in a block game.
    <br>
    <br>
  `,
};