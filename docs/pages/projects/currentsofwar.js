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
  'name' : 'Currents of War<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: Unity Game</span>',
  'title' : 'Currents of War',
  'lastModified' : '2025-06-19',
  'schemaData' : shemaData,
  'description' : 'A NPC Simulator made in Unity for the April 2025 itch.io gamejam "Indie Game Clinic COLLAB JAM \'25"',
  'keywords' : 'currents of war, game jam, itch.io, indie game clinic, collab jam, 2025, unity, npc simulator',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/CoW_ShopScene.webp',
      'alt' : 'Currents of War screenshot',
      'style' : 'procPagesImageStyle',
      'caption' : ["Currents of War!!", "You are the shopkeeper!", "Its Action Packed Money Making Action!!!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/TechDev_CharacterColorAnim_DataTexture.webp',
      'alt' : 'Character Color Animation Data Texture',
      'style' : 'procPagesImageStyle',
      'caption' : ["Character Animation & Color Data Texture", "Each row is a different character type.", "Each column is a frame in the Idle, Walk, or Talk animation cycles."]
    },
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
    {
      'type' : 'image',
      'src' : '../pages/projects/images/FEEESSHHH.webp',
      'alt' : 'FEEEEESSSSHHH',
      'style' : 'procPagesImageStyle',
      'caption' : ["Fish Armor is not for sale!", "FEEEEESSSSHHH!"]
    },
  ],
  'content' : `
    <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Currents of War</a> <span class="textDrinkMeAlice textItalic">2025</span>
    <br><span class="textShrink textItalic textName ">Engine - <span class="textBold">Unity</span></span>
    <br><span class="textShrink textItalic textName ">Languages - <span class="textBold">C#, some Python for tools</span></span>
    <br><span class="textNudge">A 'NPC Simulator' game made in <span class="textName">Unity</span> for the April 2025 itch.io gamejam 'Indie Game Clinic COLLAB JAM '25'</span>
    <br>&nbsp;&nbsp; Since then, we've expanded it quite a bit!
    <br> 
    
    <div class="pppHBar"></div>

    You can play the older game jam submission for free in your browser,
    <br>&nbsp;&nbsp; Check out the <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Game Jam Release</a>

    <br><br> If you'd like to support us,
    <br>&nbsp;&nbsp; You can find the further developed version released for sale on itch.io
    <br>&nbsp;&nbsp;&nbsp;&nbsp; With future plans if we find time/funds to keep working on it!
    <br>&nbsp;&nbsp; Buy & Download <a href='https://ellipsis9.itch.io/currents-of-war' class='procPagesRepoLinkStyle' target='_blank'>Currents of War</a> on itch.io
    <br><br>  

    <div class="pppHBar"></div>
    
    <br> The game jam was a collab jam, primarily consisting of 3 of us doing art and programming for <span class="textName">Currents of War</span>.
    <br>&nbsp;&nbsp; _ <span class="textName">ellipsis9</span> - Programming; Background-Battle Logic using character/enemy stats like a RPG, and more
    <br>&nbsp;&nbsp; _ <span class="textName">F2ptach</span>  - Programming & some Art assets; Events Handling, Player Input, and more
    <br>&nbsp;&nbsp; _ <span class="textName">ProcStack</span><span class="textItalic textDrinkMeAlice">(me)</span> - Art & Visual Programming; character state machine shader, shop & item art, ui, and more
    
    <br><br> <div class="pppHBar"></div>

    I set up the shop, the adjustable ui, animated cursor, characters, animations, and drew the items & most of the shop assets with help on a couple of 'em by <span class="textName">F2ptach</span>.
    <br>&nbsp;&nbsp; I also wrote the code + shaders to handle animation & dynamically coloring the character's faces, hair, & armor.

    <br>
    <br> <span class="textNudge">For the art inspiration, I looked to</span> -
    <br>&nbsp;&nbsp; Gameboy Advance games like <span class="textName">Zelda Minish Cap</span>,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textShrink textItalic">Everything should be outlined with similar color hues blended!</span>
    <br>&nbsp;&nbsp; Super Nintendo games like <span class="textName">Secret of Mana</span> & <span class="textName">Final Fantasy 3/6</span>,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textShrink textItalic">Fantasy character designs with reason for the details</span>
    <br>&nbsp;&nbsp; And Original Nintendo games like <span class="textName">River City Ransom</span>.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textShrink textItalic">Character proportions & vibes.</span>
    <br>
    <br> I wanted to create a semi 'tacky' weapons shop for the style.
    <br>&nbsp;&nbsp; To give some room for gags & chicanery!

    <div class='textSpacer'></div> 
    <div class="pppHBar"></div>

    I drew up most of the shop assets & many items done in a single night,
    <br>&nbsp;&nbsp; Just had some <a href="https://ex-lyd.bandcamp.com/album/till-sunrise" target="_blank">chiptune fusion</a> tunes blasting and my huion screen-table going in photoshop.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Yes... I realize my age, but old habbits!
    <br>&nbsp;&nbsp; Felt good getting into pixel art, I've never done much of it before.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Was like my highschool photoshop exploration years all over again,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But a new musician this time.

    <br><br>&nbsp;&nbsp; <span class="textItalic">yeah photoshop for pixel art
    <br>&nbsp;&nbsp;&nbsp;&nbsp; pencil & mask layers</span>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalic">use what you know best!</span>

    <br><br> Then I isolated all the limbs & body parts of the characters on different layers in photoshop,
    <br>&nbsp;&nbsp; And used the <span class="textNudge">Puppet Tool</span> in <span class="textName">After Effects</span> to animate the idle breathe, walking, & talking cycles.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Exporting in Draft mode to keep no anti-aliasing on the pixel art.
    <br>&nbsp;&nbsp; <span class="textNudge">After Effects</span> let me quickly animate & adjust without drawing out each frame.

    <div class='textSpacer'></div> 
    <div class="pppHBar"></div>

    <br> One of the challenges was making sure the character's displayed with custom colors for their hair, face, armor, gloves/boots, and leggings.
    <br>&nbsp;&nbsp; I wrote a shader to handle the colorization of the character's face, hair, and armor.
    <br>&nbsp;&nbsp; Along with the sprite animation system to handle the character's idle, walk, and talk animations.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Running individual animation cycles/clips at their own FPS rates.
    <br>&nbsp;&nbsp; Neeing to write a custom editor script to allow the character's colors to be changed in Unity's Editor/Viewport,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; And have it update in real-time for easier character creation.

    <br>
    <br> Among other fun things like adding an animated cursor, outlines around items on hover, ui borders that auto size to the text and stay pixel perfect, among other things
    
    <div class='textSpacer'></div> 
    <div class="pppHBar"></div>

    Give the game a try, it's a little game with some neat mechanics!
    <br>&nbsp;&nbsp; Try to make as much money as you can off these heroes coming to your shop!
    <br>
    <br>Play the <a href='https://procstack.itch.io/currentsofwar' class='procPagesRepoLinkStyle' target='_blank'>Game Jam Release</a> in your browser!
    <br> Or support us with a purchase, <a href='https://ellipsis9.itch.io/currents-of-war' class='procPagesRepoLinkStyle' target='_blank'>Currents of War!</a>
    <br>
    <br>
  `,
};