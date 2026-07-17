# pxlPix :: Image Editor App

pxlPix 2026

    An image & photo editing app for Android.
    
Languages - Kotlin & AGSL

    Currently in Closed Testing (Early Access) on Google Play Store!
    
   Hopefully published soon and then I'll get to update this page with an app listing!

Some how I've made two image editor apps now...
    
   The other being Pxlmancer

 But this is more of an image filter app,
    
   Rather than a full drawing/painting editor like Pxlmancer.

 pxlPix is a host to 20 different Effects
    
   Tweak your colors with the basic brightness, contrast, saturation, hue, levels, & color channel controls,
    
   Stylize your image with kaleidoscopic effects, noise warping, vignettes, and more!

 All displayed as layers in the app,
    
   Easily tap a layer to show the effect's options,
    
     And drag a layer's 3 lines to reorder them.

 Sporting over 100 font families for the <span class="textName">Text</span> tool,
    
   With options like bending/arcing the text & outlines.

 Draw curves with easy access editing modes,
    
   Hit the 'Add' button & tap down points for your curve.
    
   Set how the curve is drawn; linear, quadratic, or bezier.
    
   And play with the curve width, blur, & blend mode to get the look you want!

 My favorite has to be the Shape tool,
    
   I'm just a sucker for SDF math, haha.

 Shape is just a bunch of different shapes with signed distance field math controls.
    
   Easily soften pointed lines by shifting the SDF value negatively.
    
   Or add a glow by mapping the SDF value to a color and blend it in!

    I've written the shaders in AGSL as the effects that run in the app.
    
   I'm just chaining the shaders together,
    
     So each layer can remember your settings and apply them to the image one-by-one.
    
       Just passing the image along!

    So far I'm trying to get the free version of pxlPix approved for the Google Play Store, and then I'll be working on a paid Pro version with more features!

 Currently, the Pro version has Fast Fourier Transform (FFT) support for altering the color/detail frequencies of an image.
    
   Soon to have anything using multi-sampling,
    
     Like Kuwahara filtering and its edge detection.
    
     Laplacian pyramids for image blending and detail enhancement.
    
       And more!