const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Dev",
  "description": "AI development & research by ProcStack, including work on Graph Attention Networks (GAT), Echo State Networks (ESN), and other AI structures.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Echo State Network, ESN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AboutMe/AI_Dev.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "AI_Dev.htm",
  'name' : 'AI Dev',
  'title' : 'AI Dev',
  'schemaData' : shemaData,
  'description' : "AI development & research by ProcStack, including work on Graph Attention Networks (GAT), Echo State Networks (ESN), and other AI structures.",
  'keywords' : "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Echo State Network, ESN, Neural Networks, AI Development",
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/dgat_generativeStrings_15.webm',
      'alt' : "Dynamic Graph Attention Network",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle'],
      'caption' : ["Generative connections in a dynamic Graph Attention Network (GAT);",
          "Finding connections between a block of text I wrote up.",
          "The network is creating connections between 'usage rules' of different words.",
        ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aboutMe/images/learningGradients_dev02_18_loop.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle', 'setAspectRatio_2_1'],
      'caption' : ["A vertical slice of horizontal movement in my Echo State Network (ESN) brain.",
          "I'm showing a 2D slice of a side-to-side movement.",
          "The repeating gray tones are patterns of 'relative' movement,",
          "Like a 'motion offset' found in similar prior frames.",
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
      <div class='procPagesSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      I started my dive into AI in 2008 writing a Boid / Crowd system for my thesis while in art college, School of Visual Arts.
      <br>&nbsp;&nbsp; It was an insane particle script + 3d animation cycles in Maya haha.
      <br>Then I did Boid movement, navigation, & obstacle detection in animated films for 5 years at Blue Sky Studios, using Houdini.
      <br>
      <br>I dove into Style-Transfer AI & Long Short-Term Memory (LSTM) training in 2019-2020,
      <br>&nbsp;&nbsp; Like making a Node.js server (web site) understand my voice & auto google search for me.
      <br>
      <br>Since then, I've been developing different multi-media AI structures in my spare time.
      <br>
      <br><div class='procPagesAboutMeBar'></div>

      <br>In 2015 I decided I'd cram a machine learning AI into a single-board computer, a Jetson TK1, by the end of 2026.
      <br>&nbsp;&nbsp; Something that could write down what I say,
      <br>&nbsp;&nbsp; Use vision to understand an object simply went out of frame.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Yet "knows" if it looks over, the object is still there;
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'Long Term Attention'
      <br>
      <br>At the end of 2023, this evolved into a deep learning AI crammed into, likely, a Jetson Nano.
      <br>&nbsp;&nbsp; As something to infer what I mean, from what I say,
      <br>&nbsp;&nbsp; Or give a "thought" on what it saw or heard in the world around it.
      <br>

      <br><span class="innerCenter">
        'Machine Learning' is AI that can learn basic patterns.
        <br>'Deep Learning' is Machine Learning,
        <br>But uses neural networks to form patterns of patterns.
      </span>

      <br>
      <br>Realistically, I'd just be happy to make something that can understand what I say and can give a <span class='textItalic'>semi</span> coherent response without an internet connection.
      <br>
      <br>I'm yet to begin on the core of the AI, as I'm still testing different structure's ability in adapting to stimuli.
      <br>

      <br><span class="innerCenter">
        You could guess,
        <br>All the recent AI stuff has been quite serendipitous for my creation!
      </span>

      <br><div class='procPagesAboutMeBar'></div>
      
      <br>For my 2026 goal, I've been exploring <span class="textNudge">Graph Attention Network</span> (<span class="textNudge">GAT</span>) artificial intelligence.
      &nbsp;As GATs allow me to treat 'concepts' as 'objects', rather than sections of words/pixels as a tensor or 'piece of a concept'.
      <br>
      <br><span class="innerCenter">
        GATs are a type of neural network that considers the relationships between data points.
        <br>As a type of Graph Neural Network (GNN),
        <br>Its best for predicting connections between ideas / things / data in a system.
      </span>
      
      <br><div class='procPagesAboutMe-infoStyle'>
        GNNs are commonly used for "<span class="textNudge">Recommendation Systems</span>",
        <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalicBox">Hey, you might know <span class="textNudge">Jim Bob McGee</span>!!</span>
        <br>&nbsp;&nbsp; But GATs could be used for so much more!
      </div>

      <br>I've been working on a general-purpose neuron that adjusts its own connections during prediction;
      <br>&nbsp;&nbsp; So the same system could learn my voice on the fly, as well as sensor signals connected to the Jetson computer.
      <br>
      <br>Since its the Structure in a GAT that causes regions of neural activation based on stimuli,
      <br>&nbsp;&nbsp; It forms a result <span class="textDrinkMeAlice">(prediction)</span> after subsequent activations, as-though compounding ripples in a pond.

      <br>
      <br><span class="innerCenter">Rather than a field of numbers aligning to yield a prediction,
      <br>&nbsp;&nbsp; It's the structure of neural connections which manipulates the data.
      </span>
      
      <br>I've been going in a direction that should yield a similar result to a Recurrent Neural Network (RNN), but with a different mental structure.
      <br>&nbsp;&nbsp; With that general-purpose neuron, I can provide text, images, audio histograms, etc. to the network.
      <br>
      <br><span class="innerCenter">RNNs can be used for/in nearly any ai,
        <br>Best for detecting patterns in sequential data,
        <br>Like time-based events or words in text.
        <div class='procPagesAboutMeSpacer'></div>
        They are the basis for many types of ai, like LSTMs;
        <br>And can be used as part of LLMs, like ChatGPT.
      </span>


      <br> The GAT will create connections from initial random data points, sample the differences, then pass the 'prediction' forward and 'back' in the chain, and adjust the connections based on their revisit to the same data in the current 'prediction'.
      <br>&nbsp;&nbsp; Relying on localized regions of sub-networks to recurrently process the data
      <br>
      <br>It should be self-taught discrimination of attention between neurons;
      <br>&nbsp;&nbsp; Like in the human brain.
      <br><div class="textSkew">&nbsp;&nbsp;&nbsp;&nbsp; (When the purple circles go red in the GAT video, first vid)</div>
      
      <br>
      <br><div class='procPagesAboutMeBar'></div>
      
      <br><span class="textNudge">How about an <span class="textNudge">Echo State Network</span> (<span class="textNudge">ESN</span>) AI I wrote in the spring-summer of 2024?</span>
      <br>
      <br><span class="innerCenter">An ESN is a type of RNN,
        <br>Which considers time in its prediction.
        <br>It thinks about past events to predict future events.
        <div class='procPagesAboutMeSpacer'></div>
      </span>
      
      <br>Since an ESN brain can learn on the fly, why not feed it some videos I made?
      
      <br>
        <div class='procPagesAboutMeSpacer'></div>
        Currently I'm not using my ESN's predicted movement for anything in python,
        <br>&nbsp;&nbsp; The next step would be introducing a base image to motion-transfer / reference.
        <br>However did build a simple version in Unity to learn player combos + movement over time.
        <div class='procPagesAboutMeSpacer'></div>
        <span class="innerCenter">So I'm mostly just learnin' while watching my ai learnin'!</span>
        <div class='procPagesAboutMeSpacer'></div>
        
        <br>In the videos, I had the "reservoir" set to 15 times steps, you'll notice about every 15 frames the brain shifts.
        <br>By frame ~45, it's learned some patterns in the X video.
        <br>The brain seems to completely melt at ~75 & rebuild itself by ~95. 
        
        <br><br>It should be happenstance that the brain shifts when the reservoir fills;
        <br>The brain should shift, but the 15-frame fill might be a bug in my logic,
        <br>&nbsp;&nbsp; Or maybe its just a coincidence ::shrugs::
        <br>But it's detecting patterns in motion!
      </span>
      
      <br><br><div class='procPagesAboutMeBar'></div>
      
      <br>
      <br>If you couldn't tell, I'm training my AIs on my own works.
      <br>A personally made AI trained on personally made images / videos / photos / code / writing.
      <br>&nbsp;&nbsp; That means I can copyright my generations, right?
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI & training data?
      <br>
      <br>
      <div class="textFullRight">- February 2025</div>
      <br>
      <br>
      <br>I've begun on the core of the AI, as of May 24th, 2025.
      <br>&nbsp;&nbsp; I have the beginnings of a 'Micro-Term' memory implemented to act as a gated-attention during inference.
      <br>This, paired with automatic graph edge splitting ('Dynamic' in DGNN or DGAT) and use of geometric clustering, seems to be giving me values of a "remembered" object when it's outside of the dataset.
      <br>&nbsp;&nbsp; Bodily awarness of limbs, objects outside of the field of view, and other 'long term' tensors/classifications at a temporary scale.
      <br>
      <br>It's a 4d kernel, in that it uses an ESN to train on it's own mistakes,
      <br>&nbsp;&nbsp; Basing it's decisions on prior back-propagation states/adjustments.
      <br>&nbsp;&nbsp; The beginnings of a meta-learning process, hehe.
      <br>
      <br>I'm using a method I'm calling 'Stack Crunching',
      <br>&nbsp;&nbsp; Where I agregate the time dependent weights into a "checkpoint" of sorts.
      <br>&nbsp;&nbsp; This allows the ESN to have a 'baseline' understanding of data that I can parse into with vectors calculated from tensor weights found within a quantized version of the input data.
      <br>
      <br>You can assume that the 'ESN' is not a standard 'Echo State Network' anymore.
      <div class="textFullRight">- May 2025</div>
    </div>
  `,
};