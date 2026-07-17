const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "pxlPix",
  "description": "An image & photo editor app for Android, written in Kotlin with AGSL shaders.",
  "keywords": "pxlPix, image editor app, filter app, kotlin, agsl, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/pxlPix.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "pxlPix.htm",
  'name' : 'pxlPix<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: Image Filter App</span>',
  'title' : 'pxlPix :: Image & Photo Filter App',
  'lastModified' : '2025-02-24',
  'schemaData' : shemaData,
  'description' : 'An image & photo editor app for Android, written in Kotlin with AGSL shaders.',
  'keywords' : 'pxlPix, image editor app, filter app, kotlin, agsl, personal projects',
  'navGroup' : 'Personal Projects',
  'navStyle' : ['textNudge'],
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlPix_fullSize.webp',
      'alt' : 'pxlPix screenshot',
      'style' : ['procPagesImageStyle', 'procPagesLimitMediaWidth'],
      'caption' : ["pxlPix - Image & Photo Editor App for Android"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlPix_s00_mainScreens.webp',
      'alt' : 'pxlPix main screens screenshot',
      'style' : 'procPagesImageStyle',
      'caption' : ["Simple interface, with a lot of power under the hood!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlPix_s01_effectsList.webp',
      'alt' : 'pxlPix effects list screenshot',
      'style' : 'procPagesImageStyle',
      'caption' : ["With 20 effects to choose from!", "And more coming in the Pro version!"]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/pxlPix_s02_differentEffects.webp',
      'alt' : 'pxlPix more effects screenshot',
      'style' : 'procPagesImageStyle',
      'caption' : ["Kaleidoscope & some inverted Star Shapes!"]
    },
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><span class="procPagesRepoLinkStyle textBold">pxlPix</span>&nbsp;<span class="textDrinkMeAlice textItalic">2026</span></div>
    <span class="textBump">An image & photo editing app for Android.</span>
    <br><span class="textShrink textItalic textName ">Languages - <span class="textBold">Kotlin & AGSL</span></span>
    <div class="pppHBar"></div>

    Currently in <span class="textBump">Closed Testing </span><span class="textDrinkMeAlice">(Early Access)</span> on <span class="textNudge">Google Play Store</span>!
    <br>&nbsp;&nbsp; Hopefully published soon and then I get to update this page with an app listing!
    
    <br><br><div class="pppHBar"></div>

    <br>Some how I've made two image editor apps now...
    <br>&nbsp;&nbsp; The other being <span class="textName">Pxlmancer</span>
    
    <br><br> But this is more of an image filter app,
    <br>&nbsp;&nbsp; Rather than a full drawing/painting editor like Pxlmancer.

    <br><br> <span class="textName">pxlPix</span> is a host to <span class="textNudge textBold">20</span> different <span class="textNudge">Effects</span>
    <br>&nbsp;&nbsp; Tweak your colors with the basic brightness, contrast, saturation, hue, levels, & color channel controls,
    <br>&nbsp;&nbsp; Stylize your image with kaleidoscopic effects, noise warping, vignettes, and more!
    
    <br><br> All displayed as layers in the app,
    <br>&nbsp;&nbsp; Easily tap a layer to show the effect's options,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; And drag a layer's 3 lines to reorder them.

    <br><br> Sporting over 100 font families for the <span class="textName">Text</span> tool,
    <br>&nbsp;&nbsp; With options like bending/arcing the text & outlines.

    <br><br> Draw curves with easy access editing modes,
    <br>&nbsp;&nbsp; Hit the 'Add' button & tap down points for your curve.
    <br>&nbsp;&nbsp; Set how the curve is drawn; linear, quadratic, or bezier.
    <br>&nbsp;&nbsp; And play with the curve width, blur, & blend mode to get the look you want!

    <br><br> My favorite has to be the <span class="textName">Shape</span> tool,
    <br>&nbsp;&nbsp; I'm just a sucker for SDF math, haha.
    
    <br><br> <span class="textName">Shape</span> is just a bunch of different shapes with signed distance field math controls.
    <br>&nbsp;&nbsp; Easily soften pointed lines by shifting the SDF value negatively.
    <br>&nbsp;&nbsp; Or add a glow by mapping the SDF value to a color and blend it in!

    <br><br><div class="pppHBar"></div>

    I've written the shaders in AGSL as the effects that run in the app.
    <br>&nbsp;&nbsp; I'm just chaining the shaders together,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; So each layer can remember your settings and apply them to the image one-by-one.
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Just passing the image along!

    <br><br><div class="pppHBar"></div>

    So far I'm trying to get the free version of pxlPix approved for the Google Play Store, and then I'll be working on a paid Pro version with more features!

    <br><br> Currently, the Pro version has Fast Fourier Transform (FFT) support for altering the color/detail frequencies of an image.
    <br>&nbsp;&nbsp; Soon to have anything using multi-sampling,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Like Kuwahara filtering and its edge detection.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Laplacian pyramids for image blending and detail enhancement.
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And more!
    
    <br><br> 
  `,
};