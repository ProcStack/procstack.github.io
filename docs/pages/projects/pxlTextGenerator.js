const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "pxlTextGenerator",
  "description": "A text to handwriting generator, with a character builder and page editor.",
  "keywords": "pxlTextGenerator, text to handwriting, character builder, page editor, javascript, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/pxlTextGenerator.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "pxlTextGenerator.htm",
  'name' : 'pxlTextGenerator',
  'title' : 'pxlTextGenerator',
  'lastModified' : '2025-02-24',
  'schemaData' : shemaData,
  'description' : 'A text to handwriting generator, with a character builder and page editor.',
  'keywords' : 'pxlTextGenerator, pxl text generator, handwriting generator, text to handwriting, character builder, page editor, python',
  'navGroup' : 'Repos to Check Out',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlTextGenerator_characterBuilder.webp',
      'alt' : 'Character selector & builder',
      'style' : 'procPagesImageStyle',
      'caption' : ["Character selector & builder"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlTextGenerator_pageView.webp',
      'alt' : 'Page builder with alphabet',
      'style' : 'procPagesImageStyle',
      'caption' : ["Page builder using your selected characters"]
    }
  ],
  'content' : `
    <a href='https://github.com/ProcStack/pxlTextGenerator' class='procPagesRepoLinkStyle' target='_blank'>pxlTextGenerator</a> <span class="textDrinkMeAlice textItalic">2018-2019</span>
    <br><span class="textBump">Text to handwriting generator</span>
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">Python</span></span>
    <div class="pppHBar"></div>
    
    Created to capture the personality of one of my characters, Diece; the very one who lives in the cabin of Metal-Asylum.net.
    <br>&nbsp;&nbsp; Letting them write the very words written in the tome perched upon the desk.
    <br>
    <br>A segmenter, labeler, and scripting language was written to allow saving individual characters, variants, and written pages, with text effects like opacity, scale, and kearning.
    
    <br>
    <br>Scan some writing, click the letters, adjust the spacing, type your page with those letters, and hit save!

    <div class="pppHBar"></div>

    <br>Now with ai resources so prevelant,
    <br>&nbsp;&nbsp; I've been on and off developing a CNN (Convolutional Neural Network) to generate new characters based on the ones you have saved.
    <br>&nbsp;&nbsp; Along with a much better segmenter, where the letters will highlight as you hover over them, and you can select the ones you want to save.

    <br>
    <br>This is pretty low on my project list, so it may take awhile before the support is fully working and implemented.

    
  `,
};