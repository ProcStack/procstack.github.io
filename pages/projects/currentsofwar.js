const shemaData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Currents of War",
  "description": "A NPC Simulator made in Unity for the April 2025 itch.io gamejam 'Indie Game Clinic COLLAB JAM '25'",
  "keywords": "currents of war, game jam, itch.io, indie game clinic, collab jam, 2025, unity, npc simulator",
  "url": "https://procstack.github.io/ProjectsLinks/currentsOfWar.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "currentsOfWar.htm",
  'name' : 'Currents of War<span class="hideOnMobile">&nbsp;:: Unity Game</span>',
  'title' : 'Currents of War',
  'lastModified' : '2025-06-19',
  'schemaData' : shemaData,
  'description' : 'A NPC Simulator made in Unity for the April 2025 itch.io gamejam "Indie Game Clinic COLLAB JAM \'25"',
  'keywords' : 'currents of war, game jam, itch.io, indie game clinic, collab jam, 2025, unity, npc simulator',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/projects/images/CharacterRenderer_liveUpdate_2025-05-16_mod.webm',
      'alt' : 'Picking Character Colors',
      'style' : 'procPagesImageStyle',
      'caption' : ["Changing character's look & colors in Unity's Editor real-time!"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/CoW_AnimatedCursor_2025-06-02_mod.webm',
      'alt' : 'Cursor Animations',
      'style' : 'procPagesImageStyle',
      'caption' : ["Why not an animated cursor?"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/ShopWindowLight_2025-05-11_mod.webm',
      'alt' : 'Window Sunlight',
      'style' : 'procPagesImageStyle',
      'caption' : ["Gotta show the time of day somehow!"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/WindowLightHoudini_2025-05-11_mod.webm',
      'alt' : 'The sunlight rig in Houdini',
      'style' : 'procPagesImageStyle',
      'caption' : ["The sunlight rig to make a data texture in Houdini<br>Using a mesh, I can shape the light on 'walls' in the scene easier."]
    },
  ],
  'content' : `
    <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Currents of War</a> <span class="textDrinkMeAlice textItalic">2025</span>
    <br><span class="textShrink textItalic textName ">Engine - <span class="textBold">Unity</span></span>
    <br><span class="textShrink textItalic textName ">Languages - <span class="textBold">C#, some Python for tools</span></span>
    <br><span class="textNudge">A 'NPC Simulator' game made in <span class="textName">Unity</span> for the April 2025 itch.io gamejam 'Indie Game Clinic COLLAB JAM '25'</span>
    <br>&nbsp;&nbsp; Since then, we've expanded it quite a bit!
    <br>
    <br>Play the <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Game Jam Release</a> in your browser!
    <div class="pppHBar"></div>
    
    The game jam was a collab jam, primarily consisting of 3 of us doing art and programming for <span class="textName">Currents of War</span>.
    <br>&nbsp;&nbsp; I helped out doing the primary art and game's look, while another two did the programming and some art assets.
    
    <br> I set up the shop, drew all the items, ui, and the characters,
    <br>&nbsp;&nbsp; I also wrote the code + shaders to handle animation & dynamically coloring the character's faces, hair, & armor.

    <br>
    <br> For the art inspiration, I pulled from -
    <br>&nbsp;&nbsp; Gameboy Advance games like <span class="textName">Zelda Minish Cap</span>,
    <br>&nbsp;&nbsp; Super Nintendo games like <span class="textName">Secret of Mana</span> & <span class="textName">Final Fantasy 3/6</span>,
    <br>&nbsp;&nbsp; And Original Nintendo games like <span class="textName">River City Ransom</span>.
    <br>
    <br> I wanted to create a semi 'tacky' weapons shop for the style.
    <br>&nbsp;&nbsp; To give some room for gags & chicanery!

    <div class='textSpacer'></div> 
    <div class="pppHBar"></div>

    <br> One of the challenges was making sure the character's displayed with custom colors for their hair, face, armor, gloves/boots, and leggings.
    <br>&nbsp;&nbsp; I wrote a shader to handle the colorization of the character's face, hair, and armor.
    <br>&nbsp;&nbsp; Along with the sprite animation system to handle the character's idle, walk, and talk animations.
    <br>&nbsp;&nbsp; I also wrote a custom editor script to allow the character's colors to be changed in Unity's Editor, and have it update in real-time.

    <br>
    <br> Among other fun things like adding an animated cursor, outlines around items on hover, ui borders that auto size to the text and stay pixel perfect, among other things
    
    <div class='textSpacer'></div> 
    <div class="pppHBar"></div>

    Give the game a try, it's a little game with some neat mechanics!
    <br>&nbsp;&nbsp; Try to make as much money as you can off these heroes coming to your shop!
    <br>
    <br>Play the <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Game Jam Release</a> in your browser!
    <br>
    <br>
  `,
};