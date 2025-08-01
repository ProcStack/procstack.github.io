const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Development Notes",
  "description": "AI development & research by ProcStack, including work on Graph Attention Networks (GAT), Echo State Networks (ESN), and other AI structures.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Echo State Network, ESN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/aiNotes.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "aiNotes.htm",
  'name' : 'Notes & Research',
  'lastModified' : '2025-07-31',
  'media' : [],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      <br>If you couldn't tell, I'm training my AIs on my own works.
      <br>A personally made AI trained on personally made images / videos / photos / code / writing.
      <br>&nbsp;&nbsp; That means I can copyright my generations, right?
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI & training data?
      <br>
      <br>
      <div class="textFullRight">- February 2025</div>

      <br><div class='procPagesAboutMeBar'></div>

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

      <br><br><div class='procPagesAboutMeBar'></div>
      
      <br>
      <br> With a bit more research into the types of minds that brought us DeepMind, and their work on GNN networks,
      <br> I read a bit of Petar Velickovic's work on topological deep learning and the geometry of GNNs.
      <br> Coming to find out that my idea of 'Stack Crunching' is similar to 'Squashing' in GNNs.
      <br>
      <br> So I've been inspired to propperly name my neural structure-
      <br>It's a <span class="textName">Dynamic Pointer-Attention Message Passing Neural Network with Affine-Projections</span>
      <br>&nbsp;&nbsp; or a <span class="textName">dPA-MPNN</span>
      
      <br><br> But I must say, this isn't Affine Projections like in the papers,
      <br>&nbsp;&nbsp; It's more like a 'projection' of the data into 'pointer' space;
      <br>&nbsp;&nbsp; Actual Affine Matricies.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I am a Technical Artist first before an AI Researcher after all, BOIDS!
      <br>
      <br>It all comes down to BOOOOIIIIIDDDDSSSSSS instead of Adam, baby!
      <br>Tiny Brains running around in hyperdimensional space like little buggers running around avoiding each other.
      <br>&nbsp;&nbsp; Because if they collide, double activation happens when it may not be desired.
      <br>&nbsp;&nbsp; (I'm happy I finally saw a paper on Tiny Brains, giving my idea credence, cause it fits! .. in my mind.)
      <br>(Only difference is that it was a <a href="https://www.nature.com/articles/s41586-025-09142-4" target="_blank">study</a> into small biological systems, not artificial ones... but I'm gettin there!)
      <div class="textFullRight">- July 2025</div>

      <br><br><div class='procPagesAboutMeBar'></div>
      
      <br>
      <br> With a bit more research into the types of minds that brought us DeepMind, and their work on GNN networks,
      <br> I read a bit of Petar Velickovic's work on topological deep learning and the geometry of GNNs.
      <br> Coming to find out that my idea of 'Stack Crunching' is similar to 'Squashing' in GNNs.
      <br>
      <br> So I've been inspired to propperly name my neural structure-
      <br>It's a <span class="textName">Dynamic Pointer-Attention Message Passing Neural Network with Affine-Projections</span>
      <br>&nbsp;&nbsp; or a <span class="textName">dPA-MPNN</span>
      
      <br><br> But I must say, this isn't Affine Projections like in the papers,
      <br>&nbsp;&nbsp; It's more like a 'projection' of the data into 'pointer' space;
      <br>&nbsp;&nbsp; Actual Affine Matricies.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I am a Technical Artist first before an AI Researcher after all, BOIDS!
      <br>
      <br>It all comes down to BOOOOIIIIIDDDDSSSSSS instead of Adam, baby!
      <br>Tiny Brains running around in hyperdimensional space like little buggers running around avoiding each other.
      <br>&nbsp;&nbsp; Because if they collide, double activation happens when it may not be desired.
      <br>&nbsp;&nbsp; (I'm happy I finally saw a paper on Tiny Brains, giving my idea credence, cause it fits! .. in my mind.)
      <br>(Only difference is that it was a <a href="https://www.nature.com/articles/s41586-025-09142-4" target="_blank">study</a> into small biological systems, not artificial ones... but I'm gettin there!)
      <div class="textFullRight">- August 2025</div>
      <br>
    </div>
  `,
};