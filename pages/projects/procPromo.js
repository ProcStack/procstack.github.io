
export const pageListingData = {
  'name' : 'procPromo<span class="hideOnMobile">&nbsp;Shader Pack</span>',
  'navGroup' : 'Repos to Check Out',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/CloudPillar_2024-01-08.jpg',
      'alt' : 'A Minecraft cloud pillar in procPromo',
      'style' : 'procPagesImageStyle',
      'caption' : ["Cloud pillar!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/AlienFlora_2024-01-08.jpg',
      'alt' : 'The alien fungal bloom has spread!',
      'style' : 'procPagesImageStyle',
      'caption' : ["The spores have spread!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/NetherLavaLake_2024-01-10.jpg',
      'alt' : 'A cool day in Minecraft Palm Springs!',
      'style' : 'procPagesImageStyle',
      'caption' : ["A chill day in Palm Springs"]
    },
  ],
  'content' : `
    <a href='https://github.com/ProcStack/procPromo_ShaderPack' class='procPagesRepoLinkStyle' target='_blank'>procPromo Shader Pack</a>
    <br>A shader pack for Minecraft, used through Optifine.

    <br>
    <br>I developed a depth-based texture bluring, similar to Smart Blue in Photoshop,
    <br>&nbsp;&nbsp;In attempts to capture the Minecraft Key or Promo art used when new updates are released.
    
    <br>
    <br>I also wrote a shadow distortion & bias system as well;
    <br>&nbsp;&nbsp;A per-axis shadow distortion, with biasing based on distance from camera/player,
    <br>&nbsp;&nbsp;Also project block sides out to sample the shadow at a distance, letting shadow cascade down the side of the blocks too.
  `,
};