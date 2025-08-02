# ESRGAN Upresser

ESRGAN Image Upresser!
      
This was a fun one for me, I've been using ESRGANs for a while now,
      
   And wanted to build a GAN to better understand how they work.

ESRGANs are a type of Generative Adversarial Network (GAN),
      
An 'Enhanced Super Resolution GAN' to be specific.
      
They are used to upscale images, making them larger and clearer.
      
Like in FBI shows where they enhance the security footage,
      
Enhance..... Enhance! .... ENHANCE!

So I built an ESRGAN, more specifically a 'Real-ESRGAN',
      
   Which is a more advanced version of the original ESRGAN.

This always seemed like magic to me,
      
   Figuring out the associations between pixels in an image,
      
And then using those associations to create a larger, clearer image.

In this video, you'll see two images and the 'Training Loss' or 'Discriminator Loss' graphs.
      
These graphs show how well the GAN is learning to generate realistic images.

The training is being done by a Generator AI and a Discriminator AI.
      
The Generator creates images, and the Discriminator checks if they look like the original images.

As the training progresses, the Generator gets better at creating realistic images,
      
   You can see how well the AI Upress looks after just a few epochs.

But, it takes a lot of training before it has a good understanding of the images.
      
Once the Generator has a reasonable understanding of the images,
      
And the Discriminator has a good understanding of what a real image looks like,
      
The two ai's begin to work together, becoming 'balanced' in their understanding.

This is what happens at the end of the video here.
      
   The two converge on an 'understanding' of the image,
      
And the Generator starts to create images that look even closer to the original image.

The biggest aspect of a GAN is the 'adversarial' part,
      
   The Generator and Discriminator are constantly trying to outsmart each other.
      
The Generator tries to create images that look like the original images,
      
And the Discriminator tries to figure out if the images are real or fake.

As they train, they get better and better at their tasks.

What's not shown here?
      
I implemented a 'memory supported' training method.

Should confidence change too drastically for too many epochs,
      
   Or loss increases too much too quickly,

The training will adapt by 'remembering' the last 'good direction' of changing pixels.
      
   Allowing the model to maintain a sense of continuity,
      
     Even if it loses confidence in itself.

As a result, the Generator seemed to learn faster and smoother.
      
   If this is causing a negative effect, I'm yet to see it.
      
   More testing is needed with larger datasets and more complex images.

I only implemented this 'memory support' for the Generator,
      
   As the Discriminator is more of a 'check' and doesn't need to remember past states.
      
   Perhaps if I grow this AI further, I may need to implement a memory for the Discriminator as well.

But it seems to be working so far!