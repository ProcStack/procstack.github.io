# procPromo :: Shader Pack

[procPromo Shader Pack](https://github.com/ProcStack/procPromo_ShaderPack) 2022-2025
    
A Minecraft shader pack for Optifine & Iris
    
Languages - GLSL 1.2, 3.3, & 4.5

    I started writing procPromo in the spring of 2022 to learn GLSL.
    
   Figured, if I was already playing minecraft, might as well make it look cool too!
    
     Like, while I built the sky villa and alien spore in the images.

I decided on a style inspired by the Minecraft [Key](https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Part%20I-Announce-Header.jpg) or [Promo](https://www.youtube.com/watch?v=jLuJbSjo7NA) art,
    
   Writing a Texture Blur similar to Smart Blur in photoshop; smoothing regions of similar colors.
    
   Then added block "edges" using Depth + Normals,
    
   Created a 2-Pass Blur/Glow in post-processing.
    
   And a Shadow Distortion system with biasing based on per-axis (X,Y) from player.

Shadows are fun to figure out in games,
    
   But they are all circular or 'radial distance' from the player.

    But this is a block game!
    
How about 90-degree angle shadows??

 Distorting the objects in space by their X & Y axis distance to the player/camera, instead of radial shadow maps,
    
   Let me get much sharper shadows from blocks, similar to the shadows in Minecraft's promo art.

 It was a fun experiment for shadowing,
    
   But it has it's time and place;
    
     Like in a block game.