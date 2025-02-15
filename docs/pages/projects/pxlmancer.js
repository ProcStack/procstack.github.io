
export const pageListingData = {
  'name' : 'pxlmancer.com',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/tvKid.png',
      'alt' : 'TV was king!',
      'style' : 'procPagesImageStyle',
      'caption' : ["vv Watch the timelapse of me making 'TV Kid' in Pxlmancer vv"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/tvKid.webm',
      'alt' : 'TV Kid timelapse',
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/kitty.jpg',
      'alt' : 'Digital drawing a friends cat',
      'style' : 'procPagesImageStyle',
      'caption' : ["...of course, the cat tax..."]
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><a href='https://pxlmancer.com' class="textBump" target='_blank'>pxlmancer.com</a></div>
    &nbsp;&nbsp; A full drawing/painting app on desktop, a fun fidget toy on mobile.
    <br>On'n'off multi-year project (2014-2019) to make a full fledge drawing site with layer support, brush types, vector tools, brush effects (cpu based pixel effects, this was pre-learning about opengl shaders or webgl)
    
    <br>
    <br>
    <div class="procPagesProjectsDescriptionStyle selfCenter">Use the mixing pallet to blend colors together to paint with, then save the pallet by pressing a number key.
      <br>All of which can be saved to a .pxlm file; to store your layers, settings, and pallet swatches!
    </div>
    <div class="procPagesProjectsSpacer"></div>

    <br>&nbsp;&nbsp; Sadly, an update in javascript broke saving images, and I haven't had the time to fix it yet...
    <br>You'll need to drag the image from the "Save Image" screen to a new tab to view and save it.
    <br>But you can easily save your document to a pxlm file, and open it back up to continue working on your project!
    
    <div class="procPagesProjectsSpacer"></div>

    <br><br>&nbsp;&nbsp; A little tid-bit, <span class='textNudge'>pxlmancer.com</span> is the origin of my '<span class='textNudge'>pxl</span>' namespace for my projects.
    <br>It's my indicator of a codebase with a visual output; such as pxlNav, pxlVisualizer, pxlTextGenerator, etc.
    <br><br>More about pxlmancer.com on <a href='https://imgur.com/gallery/8lSW1' target='_blank'>Imgur</a>!
    
  `,
};