
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
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">GLSL 1.2, 3.2, & 4.5+</span></span>
    <br><span class="textShrink textItalic textName ">File Count - <span class="textBold">177</span></span>
    <div class="pppHBar"></div>
    
    I started writing <span class="textName">procPromo</span> in the spring of 2022 as a way to learn GLSL, as I was only using GLSL ES for WebGL at the time.
    <br>&nbsp;&nbsp; Figured, if I was already playing minecraft, might as well make it look cool too!
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like, while I built the sky villa and alien spore in the images.

    <br>
    <br>I decided on a style inspired by the Minecraft Key or '<a href="https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Part%20I-Announce-Header.jpg" target="_blank">Promo</a>' art,
    <br>&nbsp;&nbsp; Writing a <span class='textInblockBox'>Texture Blur</span> similar to <span class='textName'>Smart Blur</span> in photoshop; smoothing regions of similar colors.
    <br>&nbsp;&nbsp; To make block edges using <span class='textInblockBox'>Depth + Normals</span>
    <br>&nbsp;&nbsp; Create a <span class='textInblockBox'>2-Pass Blur/Glow</span> with post-processing.
    <br>&nbsp;&nbsp; And a <span class='textInblockBox'>Shadow Distortion</span> system with <span class='textName'>biasing</span> based on per-axis (X,Y) distance from camera/player.

    <br>
    <br>Shadows are fun to figure out in games,
    <br>&nbsp;&nbsp; But they are all circlar, or 'radial', distance from the player.

    <div class='procPagesSpacer'></div>

    <span class="innerCenter">
    This is a block game though!
    <br>So how about 90-degree angle shadows?</span>

    <br> Distorting the objects in space by their X,Y to the player/camera allows for much sharper shadows than a radial player-centric shadow map.
    <br>&nbsp;&nbsp; This let me get much sharper shadows from blocks, similar to Minecraft's promo art's shadows.

    <div class='procPagesSpacer'></div>

    <br> It was a fun experiment for shadowing,
    <br>&nbsp;&nbsp; But it has it's time and place;
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like in a block game.
    <br>
    <br>
  `,
};