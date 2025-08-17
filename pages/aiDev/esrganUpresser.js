const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ESRGAN Upresser",
  "description": "ESRGAN Upresser by ProcStack, exploring the use of Enhanced Super Resolution Generative Adversarial Networks (ESRGAN) for image upscaling.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Image Processing, ESRGAN, Super Resolution, AI Development",
  "url": "https://procstack.github.io/AIDev/esrgan_upresser.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "esrgan_upresser.htm", 
  'name' : 'ESRGAN Upresser',
  'title' : 'ESRGAN Upresser',
  'lastModified' : '2025-08-02',
  'schemaData' : shemaData,
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/gan_C_training_visualization_18.webm',
      'alt' : "ESRGAN Training Visualization",
      'style' : ['procPagesMediaStyle', 'setAspectRatio_2_1'],
      'caption' : ["Training visualization of the ESRGAN Upresser.",
        "The Generator (blue) creates images,",
        "The Discriminator (red) checks if the generated image is realistic.",
        "As it trains, the Generator gets better at creating images."
      ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/gan_C_generator_evolution.webm',
      'alt' : "ESRGAN Generator Evolution",
      'style' : ['procPagesMediaStyle', 'setAspectRatio_1', 'setH55vh'],
      'caption' : ["The Generator's upscaled output as it trains;",
        "Training 8x8 -> 32x32 resolution scaling; Running 50 epochs."]
    },
  ],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      <span class="textNudge">ESRGAN Image Upresser!</span>
      <br>This was a fun one for me, I've been using ESRGANs for a while now,
      <br>&nbsp;&nbsp; And wanted to build a GAN to better understand how they work.

      <br>
      <br><span class="innerCenter">ESRGANs are a type of Generative Adversarial Network (GAN),
      <br>An 'Enhanced Super Resolution GAN' to be specific.
      <br>They are used to upscale images, making them larger and clearer.
      <br>Like in FBI shows where they enhance the security footage,
      <br>Enhance..... Enhance! .... ENHANCE!
        <div class='procPagesAboutMeSpacer'></div>
      </span>
      
      <br>
      <br>So I built an ESRGAN, more specifically a 'Real-ESRGAN',
      <br>&nbsp;&nbsp; Which is a more advanced version of the original ESRGAN.

      <div class='procPagesAboutMeSpacer'></div>

      <br>
      <br>This always seemed like magic to me,
      <br>&nbsp;&nbsp; Figuring out the associations between pixels in an image,
      <br>And then using those associations to create a larger, clearer image.

      <br>
      <br>In this video, you'll see 4 images and the 'Training Loss' or 'Discriminator Loss' graphs.
      Input Noise, Low Resolution Image, the Upresser Output, and the Original Image.
      <br>&nbsp;&nbsp; The graph shows how well the GAN is learning to generate realistic images.

      <br>
      <br>The training is being done by a Generator AI and a Discriminator AI.
      <br>The Generator creates images, and the Discriminator checks if they look like the original images.

      <br>
      <br>As the training progresses, the Generator gets better at creating realistic images,
      <br>&nbsp;&nbsp; You can see how well the AI Upress looks after just a few epochs.

      <br>
      <br>But, it takes a lot of training before it has a good understanding of the images.
      <br>Once the Generator has a reasonable understanding of the images,
      <br>And the Discriminator has a good understanding of what a real image looks like,
      <br>The two ai's begin to work together, becoming 'balanced' in their understanding.
      <br>
      <br>This is what happens at the end of the video here.
      <br>&nbsp;&nbsp; The two converge on an 'understanding' of the image,
      <br>And the Generator starts to create images that look even closer to the original image.

      <div class='procPagesAboutMeSpacer'></div>

      <br>
      <br>The biggest aspect of a GAN is the 'adversarial' part,
      <br>&nbsp;&nbsp; The Generator and Discriminator are constantly trying to outsmart each other.
      <br>The Generator tries to create images that look like the original images,
      <br>And the Discriminator tries to figure out if the images are real or fake.
      <br>
      <br>As they train, they get better and better at their tasks.

      <br><br><div class='procPagesAIDevBar'></div>

      <br>
      <br>What's not shown here?
      <br>I implemented a 'memory supported' training method.
      
      <br>
      <br>Should confidence change too drastically for too many epochs,
      <br>&nbsp;&nbsp; Or loss increases too much too quickly,
      <br>
      <br>The training will adapt by 'remembering' the last 'good direction' of changing pixels.
      <br>&nbsp;&nbsp; Allowing the model to maintain a sense of continuity,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Even if it loses confidence in itself.

      <br>
      <br>As a result, the Generator seemed to learn faster and smoother.
      <br>&nbsp;&nbsp; If this is causing a negative effect, I'm yet to see it.
      <br>&nbsp;&nbsp; More testing is needed with larger datasets and more complex images.

      <br>
      <br>I only implemented this 'memory support' for the Generator,
      <br>&nbsp;&nbsp; As the Discriminator is more of a 'check' and doesn't need to remember past states.
      <br>&nbsp;&nbsp; Who knows, perhaps if I grow this AI further, I may need to implement a memory for the Discriminator as well.

      <br>
      <br>But it seems to be working so far!
      <br>

    </div>
  `,
};