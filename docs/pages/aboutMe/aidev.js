
export const pageListingData = {
  'name' : 'AI Dev',
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/dgat_generativeStrings_15.webm',
      'alt' : "Dynamic Graph Attention Network",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle'],
      'caption' : ["Generative connections in a dynamic Graph Attention Network (GAT);",
          "Finding connections between a block of text I wrote up.",
          "So the network is creating connections between 'usage rules' of different words.",
        ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/learningGradients_dev02_18_loop.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle', 'setAspectRatio_2_1'],
      'caption' : ["A vertical slice of horizontal movement in my Echo State Network (ESN) brain.",
          "Since brains are multi-dimensional, I'm showing a 2D slice of a single dimension.",
          "So it's a little hard to desribe the slice's movement haha."
      ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/esnLearning.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle', 'setAspectRatio_1'],
      'caption' : ["ESN test run; Upper Left are videos I made, Upper Right are learning rates in RGB,",
          "Red shows 'known' patterns, Green are pattern edges, & Blue 'might be' patterns.",
          "The Bottom is what the brain thinks its seeing & then predicting."
        ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/learningGradients_84.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle', 'setAspectRatio_1'],
      'caption' : ["Different slices from the same ESN, with different input video.",
        "Upper left is a video I made the AI's watching, upper right is detecting movement;",
        "Lower left is the brain's wrinkles, lower right is predicted movement."
      ]
    },
    {
      'type' : 'image',
      'src' : '../pages/aboutMe/images/learningGradients_84_brainSlice.png',
      'alt' : "Custom ESN Learning Gradients",
      'style' : ['procPagesImageStyle', 'procPagesNarrowWidthStyle', 'setAspectRatio_1'],
      'caption' : ["A slice of the ESN's brain by frame 101 of watching the X pattern video."]
    }
  ],
  'content' : `
    <div class='procPagesAboutMeInfoStyle'>
      <br>I starting my dive into AI in 2008 writing a Boid / Crowds system for my thesis in art college.
      <br>&nbsp;&nbsp; An insane Mel script particle expression + 3d animation cycles in Maya haha.
      <br>Then did Boid movement, navigation, & obstacle detection in animated films for 5 years, using Houdini.
      <div class='procPagesAboutMeSpacer'></div>
      <br>In 2015 I decided I'd make my own machine learning AI crammed into a Jetson TK1 by the end of 2026.
      <br>&nbsp;&nbsp; Which evolved into a deep learning AI crammed into, likely, a Jetson Nano.
      <br>See if I can make something that can learn without being connected to the internet.
      <br>
      <br>Then dove into Style-Transfer AI & Long Short-Term Memory (LSTM) training in 2019-2020,
      <br>&nbsp;&nbsp; But been developing different multi-media AI structures since then.

      <br>
      <br><span class="innerCenter">
        You could guess,
        <br>All the recent AI stuff has been quite serendipitous for my creations!
      </span>

      <br><div class='procPagesAboutMeBar'></div>
      
      <br>For my 2026 goal, I've been exploring <span class="textNudge">Graph Attention Network</span> (<span class="textNudge">GAT</span>) artificial intelligence.
      <br>&nbsp;&nbsp; This is a type of neural network that considers the relationships between data points.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Best for predicting connected ideas / things / data within a system.
      
      <br>
      <br>These days, the common path for <span class="textNudge">Artificial General Intelligence</span> (<span class="textNudge">AGI</span>) has been through Transformer Networks,
      &nbsp;which is a type of <span class="textNudge">Recurrent Neural Network</span> (<span class="textNudge">RNN</span>)
      <br>&nbsp;&nbsp; With a lot of added specialized layers to handle different types of data / media.
      <br>I honestly believe GATs can be used for AGI, but I'm biased.
      <br>&nbsp;&nbsp; Since Boids operate like a GAT's Graph Nodes, but with easier gradient descent when sampling sparse fields.
      
      <br><br><div class='procPagesAboutMeInfoStyle'>
        GATs are commonly used for "<span class="textNudge">Recommendation Systems</span>",
        <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalicBox">Hey, you might know <span class="textNudge">Jim Bob McGee</span>!!</span>
        <br>&nbsp;&nbsp; But GATs could be used for so much more!
      </div>

      <br><div class='procPagesAboutMeBar'></div>

      <br>I've been working on a general-purpose neuron that adjusts its own connections during prediction;
      <br>&nbsp;&nbsp; So the same system could learn my voice on the fly, as well as sensor signals connected to the Jetson computer.
      <br>Since it's the Structure in a GAT that causes regions of neural activation based on stimuli, like the Butterfly Effect echoing through nature.
      <br>&nbsp;&nbsp; It forms a result <span class="textDrinkMeAlice">(prediction)</span> after subsiquent activations, as-though compounding ripples in a pond.
      <br>That structure can be saved out as a model,
      <br>&nbsp;&nbsp; But it's not a 'model' in the traditional sense of tensor weights & biases.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; How I'm devloping it, at least.

      <br>
      <br><span class="innerCenter">Rather than a field of numbers aligning to yield a prediction,
      <br>&nbsp;&nbsp; It's the structure of neural connections which manipulates the data.
      </span>
      <br>
      <br>I've been going in a direction that should yield a similar result to a RNN, but with a different mental structure.
      <br>&nbsp;&nbsp; With that general-purpose neuron, I can provide text, images, audio histograms, etc. to the network.
      &nbsp; It'll then create connections from initial data points, sample the differences, then pass the 'prediction' forward and 'back' in the chain, and adjust the connections based on their revisit to the same data in the current 'prediction'.
      <br>&nbsp;&nbsp; Relying on localized regions of sub-networks to recurrently process the data
      <br>Self-taught descrimination of attention between neurons;
      <br>&nbsp;&nbsp; Like in the human brain.
      <br><div class="textSkew">&nbsp;&nbsp;&nbsp;&nbsp; (When the purple circles go red in the GAT video above)</div>
      
      <br>
      <br><div class='procPagesAboutMeBar'></div>
      
      <br><span class="textNudge">How about an <span class="textNudge">Echo State Network</span> (<span class="textNudge">ESN</span>) AI I wrote in the summer of 2024?</span>
      <br>
      <br><span class="innerCenter">An ESN is a type of RNN,
        <br>Which considers time in it's prediction.
        <br>It thinks about past events to predict future events.
        <div class='procPagesAboutMeSpacer'></div>
      </span>
      
      <br>Since an ESN brain can learn on the fly, why not feed it some videos I made?
      
      <br>
        <div class='procPagesAboutMeSpacer'></div>
        Currently I'm not using my ESN's predicted movement for anything,
        <br>The next step would be introducing a base image to motion-transfer / reference.
        <div class='procPagesAboutMeSpacer'></div>
        So I'm just learnin' while watching my ai learnin'!
        <div class='procPagesAboutMeSpacer'></div>
        
        <br>I had the "reservoir" set to 15 times steps, you'll notice about every 15 frames the brain shifts.
        <br>By frame ~45, it's learned some patterns
        <br>The brain seems to completely melt at ~75 & rebuild itself by ~95. 
        
        <br><br>It should be happenstance that the brain shifts when the reservoir fills;
        <br>The brain should shift, but the 15-frame fill might be a bug in my logic,
        <br>&nbsp;&nbsp; Or maybe it's just a coincidence ::shrugs::
        <br>But it's detecting patterns in motion!
      </span>
      
      <br><br><div class='procPagesAboutMeBar'></div>
      
      <br>Since I didn't have a good use case for the ESN in Python,
      <br>&nbsp;&nbsp; I built a similar ESN through C# in Unity to operate NPC's ability to learning player habbits.
      <br>The logic is pretty simple, so running by CPU is fine for now,
      <br>&nbsp;&nbsp; I'll likely look to move it to GPU in the future, if need be.
      <br>I set it up to learn less often when the player is in another area of the map.
      <br>&nbsp;&nbsp; Thinking that I'd want to set up a "data transfer" between characters,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Gossip about the player.
      <br>&nbsp;&nbsp; But it's just cubes and spheres in Unity at the moment.

      
      <br>
      <br>If you couldn't tell, I'm training my AIs on my own works.
      <br>A personally made AI trained on personally made images / videos / photos / code / writing.
      <br>&nbsp;&nbsp; That means I can copyright my generations, right?
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI & training data?
      <br>
      <br>
    </div>
  `,
};