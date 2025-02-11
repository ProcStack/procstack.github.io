
export const pageListingData = {
  'name' : 'procPromo Minecraft Shader Pack',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/CloudPillar_2024-01-08.jpg',
      'alt' : 'A Minecraft cloud pillar in procPromo',
      'caption' : ["Cloud pillar!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/AlienFlora_2024-01-08.jpg',
      'alt' : 'The alien fungal bloom has spread!',
      'caption' : ["The spores have spread!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/NetherLavaLake_2024-01-10.jpg',
      'alt' : 'A cool day in Minecraft Palm Springs!',
      'caption' : ["A chill day in Palm Springs"]
    },
  ],
  'content' : `
    <br>
    <br><a href='https://github.com/ProcStack/procPromo_ShaderPack' class='gitPageRepoLinkStyle' target='_blank'>procPromo Minecraft Shader Pack</a>
    <br>A shader pack for Minecraft, used through Optifine.

    <br>
    <br>For the pack, I developed a depth-based smart texture bluring, in attempts to capture the Minecraft Key or Promo art used when new updates are released.
    
    <br>
    <br>I also wrote a shadow distortion & bias system as well;
    <br>&nbsp;&nbsp;A per-axis shadow distortion, with biasing based on distance from camera/player,
    <br>&nbsp;&nbsp;Also project block sides out to sample the shadow at a distance, letting shadow cascade down the side of the blocks too.
  `,
};