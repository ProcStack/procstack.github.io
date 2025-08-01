const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "GAT Language Interpretation",
  "description": "GAT Language Interpretation by ProcStack, focusing on Graph Attention Networks (GAT) and their application in understanding language and concepts.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/gat_languageRules.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "gat_languageRules.htm",
  'name' : 'GAT & Language',
  'lastModified' : '2025-07-31',
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/aiDev/images/dgat_generativeStrings_15.webm',
      'alt' : "Dynamic Graph Attention Network",
      'style' : ['procPagesMediaStyle', 'procPagesNarrowWidthStyle'],
      'caption' : ["Generative connections in a dynamic Graph Attention Network (GAT);",
          "Finding connections between a block of text I wrote up.",
          "The network is creating connections between 'usage rules' of different words.",
        ]
    }
  ],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      For my 2026 goal, I've been exploring <span class="textNudge">Graph Attention Network</span> (<span class="textNudge">GAT</span>) artificial intelligence.
      &nbsp;As GATs allow me to treat 'concepts' as 'objects', rather than sections of words/pixels as a tensor or 'piece of a chunk of a concept'.
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
      <br><span class="innerCenter">RNNs can be used for/in many types of ai,
        <br>Best for detecting patterns in sequential data,
        <br>Like time-based events or words in text.
        <div class='procPagesAboutMeSpacer'></div>
        They are the basis for many types of ai, like LSTMs.
      </span>

      <br> The GAT will create connections from initial random data points, sample the differences, then pass the 'prediction' forward and 'back' in the chain, and adjust the connections based on their revisit to the same data in the current 'prediction'.
      <br>&nbsp;&nbsp; Relying on localized regions of sub-networks to recurrently process the data
      <br>
      <br>It should be self-taught discrimination of attention between neurons;
      <br>&nbsp;&nbsp; Like in the human brain.
      <br><div class="textSkew">&nbsp;&nbsp;&nbsp;&nbsp; (When the purple circles go red in the GAT video, first vid)</div>

      <br><br><div class='procPagesAboutMeBar'></div>

      <br><br>Please note, I haven't mentioned the transformer for this GAT.
      <br>&nbsp;&nbsp; It was byte-pair 'tensors' encoded text block that I fed into the GAT.
      <br>&nbsp;&nbsp; The GAT then found connections between the occurance of 'tensors' in "sessions" of other 'tensors'.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; So the nodes are "occurences" of neighboring 'tensors' in the text block.
      <br>It was like a, "find my neighbors" type of search for the GAT.

      <br><br>What's not visualized here?
      <br>The "ripple" through the GAT nodes during training epochs.
      <br>... And the attributes of the nodes.
      <br>&nbsp;&nbsp; I have a new GAT use-case in mind that should better show how "language connects" in a visual way soon.

      <br><br>What it's trying to do?
      <br>&nbsp;&nbsp; Link multiple nodes together in series to recreate the "rule" for those tensor neighbors.
      <br>&nbsp;&nbsp; By recreating 'use cases' of the 'tensors' in the text block.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Which is why there are so few nodes here.

      <br><br>What I didn't know? This is more of an MPNN than a GAT.
      <br>&nbsp;&nbsp; A message passing neural network (MPNN) is a type of GNN that passes messages between nodes to update their states.

      <br><br>It could really use some better visuals for this anyhow....

      <br>
      <br>But hey!
      <br>I'm a toys'r'us kid after all, so....
      <br>&nbsp;&nbsp;Hooked on Phonics worked for me!
      <br>
    </div>
  `,
};