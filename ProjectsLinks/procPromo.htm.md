# procPromo Shader Pack

[procPromo Shader Pack](https://github.com/ProcStack/procPromo_ShaderPack) 2022-2025
    
A Minecraft shader pack for Optifine & Iris
    
Languages - GLSL 1.2, 3.3, & 4.5
    
File Count - 180

    I started writing procPromo in the spring of 2022 as a way to learn GLSL, as I was mostly using GLSL ES for WebGL at the time.
    
   Figured, if I was already playing minecraft, might as well make it look cool too!
    
     Like, while I built the sky villa and alien spore in the images.

I decided on a style inspired by the Minecraft Key or '[Promo](https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Part%20I-Announce-Header.jpg)' art,
    
   Writing a Texture Blur similar to Smart Blur in photoshop; smoothing regions of similar colors.
    
   To make block edges using Depth + Normals
    
   Create a 2-Pass Blur/Glow with post-processing.
    
   And a Shadow Distortion system with biasing based on per-axis (X,Y) distance from camera/player.

Shadows are fun to figure out in games,
    
   But they are all circlar, or 'radial', distance from the player.

    This is a block game though!
    
So how about 90-degree angle shadows?

 Distorting the objects in space by their X,Y to the player/camera allows for much sharper shadows than a radial player-centric shadow map.
    
   This let me get much sharper shadows from blocks, similar to Minecraft's promo art's shadows.

 It was a fun experiment for shadowing,
    
   But it has it's time and place;
    
     Like in a block game.