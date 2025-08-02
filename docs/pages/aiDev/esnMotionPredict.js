const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ESN Motion Prediction",
  "description": "ESN Motion Prediction by ProcStack, focusing on Echo State Networks (ESN) and their application in predicting motion patterns.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Echo State Network, ESN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/esn_motion.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "esn_motion.htm", 
  'name' : 'ESN & Motion Prediction',
  'title' : 'ESN & Motion Prediction',
  'lastModified' : '2025-07-31',
  'schemaData' : shemaData,
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/learningGradients_dev02_18_loop.webm',
      'alt' : "ESN Horizontal-Vertical Slice",
      'style' : ['procPagesMediaStyle','setAspectRatio_2_1'],
      'caption' : ["A vertical slice of horizontal movement in my Echo State Network (ESN) brain.",
          "I'm showing a 2D slice of a side-to-side movement.",
          "The repeating gray tones are patterns of 'relative' movement,",
          "Like a 'motion offset' found in similar prior frames.",
      ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/esnLearning.webm',
      'alt' : "ESN Learning Process",
      'style' : ['procPagesMediaStyle','setAspectRatio_1'],
      'caption' : ["ESN test run; Upper Left are videos I made, Upper Right are learning rates in RGB,",
          "Red shows 'known' patterns, Green are pattern edges, & Blue 'might be' patterns.",
          "The Bottom is what the brain thinks its seeing & then predicting."
        ]
    },
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/learningGradients_84.webm',
      'alt' : "ESN Different Slices",
      'style' : ['procPagesMediaStyle','setAspectRatio_1'],
      'caption' : ["Different slices from the same ESN, with different input video.",
        "Upper left is a video I made the AI's watching, upper right is detecting movement;",
        "Lower left is the brain's wrinkles, lower right is predicted movement."
      ]
    },
    {
      'type' : 'image',
      'src' : '../pages/aiDev/images/learningGradients_84_brainSlice.png',
      'alt' : "Custom ESN Learning Gradients",
      'style' : ['procPagesImageStyle','setAspectRatio_1'],
      'caption' : ["A slice of the ESN's brain by frame 101 of watching the X pattern video."]
    }
  ],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      <span class="textNudge">How about an <span class="textNudge">Echo State Network</span> (<span class="textNudge">ESN</span>) AI I wrote in the spring-summer of 2024?</span>
      <br>
      <br><span class="innerCenter">An ESN is a type of '<span class="textNudge">reservoir</span>' network,
        <br>Which considers time in its prediction.
        <br>It thinks about past events to predict future ones.
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
        
        <br>In the videos, I had the "reservoir" set to 15 time steps, you'll notice about every 15 frames the brain shifts.
        <br>By frame ~45, it's learned some patterns in the X video.
        <br>The brain seems to completely melt at ~75 & rebuild itself by ~95. 
        
        <br><br>It should be happenstance that the brain shifts when the reservoir fills;
        <br>The brain should shift to account for the reservoir size,
        <br>So the 15-frame fill might be a bug in my logic, if the looping isn't correct.
        <br>&nbsp;&nbsp; Or maybe its just a coincidence ::shrugs::
        <br>But it's detecting patterns in motion!
      </span>
    </div>
  `,
};