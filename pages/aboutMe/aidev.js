
export const pageListingData = {
  'name' : 'AI Dev',
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/esnLearning.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle', 'setAspectRatio_1'],
      'caption' : ["Upper left are videos I made, upper right are 'rates' of learning R-G-B,",
          "Red shows known patterns, green are parent edges, & blue are 'less likely' patterns.",
          "The bottom are two slices; what the brain thinks its seeing & then predicting."
        ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/learningGradients_84.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle', 'setAspectRatio_1'],
      'caption' : ["Different slices from the same ESN, with different input video.",
        "Upper left is a video I made the AI's watching, upper right is detecting movement;",
        "Lower left is the brain's wrinkles, lower right is predicted movement."
      ]
    },
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/learningGradients_84_brainSlice.png',
      'alt' : "Custom ESN Learning Gradients",
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle', 'setAspectRatio_1'],
      'caption' : ["A slice of the ESN's brain by frame 101 of watching the X pattern video."]
    }
  ],
  'content' : `
    Outside of that, I'm on'n'off working on <span class="textNudge">Graph Attention Network</span> artificial intelligence.
    <div class='procPagesAboutMeSpacer'></div>
    I've been working on a general-purpose neuron that adjusts its own connections during prediction.
    <br>&nbsp;&nbsp; I call it a "model-less" ai network, even though the model is just dynamically generated based on input data.
    <br>It's the Structure which derives regions of neural activation based on stimuli, like the Butterfly Effect echoing through nature.
    <br>&nbsp;&nbsp; Forming a result <span class="textDrinkMeAlice">(prediction)</span> after subsiquent activations, as-though compounding ripples in a pond.

    <br><br>Rather than a grid of numbers aligning to yield a prediction, it's a data structure which outputs a value due to the neuron connections.
    <br>&nbsp;&nbsp; Realistically, the output should be similar to a Recurrent Neural Network (RNN), but with a different mental structure.
    
    <br>
    <br>
    <div class='procPagesAboutMeInfoStyle'>
      ...Mostly they are used for "<span class="textNudge">Recommendation Systems</span>",
      <br><span class="textItalicBox">Hey, you might know <span class="textNudge">Jim Bob McGee</span>!!</span>
      <br>But could be used for so much more!
    </div>

    <br><span class="innerCenter">So, all this new AI stuff has been quite serendipitous for me!</span>
    
    
    <br>
    <br><span class="innerCenter">How about an ESN AI I wrote in the summer of 2024?
      <br>An ESN or Echo State Network is a type of RNN which considers time in it's prediction.
      <br>It thinks about past events to predict future events.
      <div class='procPagesAboutMeSpacer'></div>
      Since the brain learns on the fly, why not feed it some videos I made?
    </span>
    
    
                  <div class='procPagesAboutMeSpacer'></div>
    
    <br>
      <div class='procPagesAboutMeSpacer'></div>
      Currently it doesn't use the predicted movement for anything,
      <br>The next step would be introducing a base image to motion-transfer / referece.
      <div class='procPagesAboutMeSpacer'></div>
      So I'm just learnin' while watching my ai learnin'!
      <div class='procPagesAboutMeSpacer'></div>
      
      <br>With a "reservoir" of 15 times steps, you'll notice about every 15 frames the brain shifts.
      <br>By frame ~45, it's learned some patterns
      <br>The brain seems to completely melt at ~75 and rebuild itself by ~95. 
      
      <br><br>It should be happenstance that the brain shifts when the reservoir fills,
      <br>Could mean I'm not correctly accounting for high p-values, outliers;
      <br>But it's detecting patterns in motion!
    </span>
    
                  <div class='procPagesAboutMeSpacer'></div>


    <br>Since I didn't have a good use case for the ESN in Python,
    <br>&nbsp;&nbsp; I built a similar ESN through C# in Unity to operate NPC's ability to learning player habbits.
    <br>The logic is pretty simple, so running by CPU is fine for now,
    <br>&nbsp;&nbsp; I'll likely look to move it to GPU in the future, if need be.
    <br>I set it up to learn less often when the player is in another room.
    <br>&nbsp;&nbsp; Thinking that I'd want to set up a "data transfer" between characters,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Gossip about the player.
    <br>&nbsp;&nbsp; But it's just cubes and spheres in Unity at the moment.

    
    <br><br>If you couldn't tell by now, I'm training my AIs on my own creations.
    <br>A personally made AI trained on personally made images / videos / photos / code / writing training data.
    <br>&nbsp;&nbsp; That means I can copyright my generations, right?
    <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI and training data?
    <br><br>
  `,
};