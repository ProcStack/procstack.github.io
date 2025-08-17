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
  'title' : 'Notes & Research',
  'lastModified' : '2025-08-01',
  'features' : ['anchorListing'],
  'schemaData' : shemaData,
  'media' : [],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      I made a whole 'blog' system for this... yet here we are....
      
      <br>
      <br>No, I'm not using ai to speak for me here.
      <br>&nbsp;&nbsp; These are my thoughts,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; How ever scattered they may be.

      <br>
      <br>
      <br><div class='procPagesAIDevBar'></div>

      <br><a name="2025-02" data-listing="2025-02"></a>
      <br>
      <br>If you couldn't tell, I'm training my AIs on my own works.
      <br>A personally made AI trained on personally made images / videos / photos / code / writing.
      <br>&nbsp;&nbsp; That means I can copyright my generations, right?
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI & training data?
      <br>
      <br>
      <div class="textFullRight">- February 2025</div>

      <br><br><div class='procPagesAIDevBar'></div>

      <br><a name="2025-05" data-listing="2025-05"></a>
      <br>
      <br>I've begun on the core of the AI, as of May 24th, 2025.
      <br>&nbsp;&nbsp; I have the beginnings of a 'Micro-Term' memory implemented to act as a gated-attention during inference.
      <br>This, paired with automatic graph edge splitting ('Dynamic' in DGNN or DGAT) and use of geometric clustering, seems to be giving me values of a "remembered" object when it's outside of the dataset.
      <br>&nbsp;&nbsp; Hopefully leading to bodily awareness of limbs, objects outside of the field of view, and other 'long term' tensors/classifications at a temporary scale.
      <br>
      <br>It's a 4d kernel, in that it uses an ESN to train on it's own mistakes,
      <br>&nbsp;&nbsp; Basing it's decisions on prior back-propagation states/adjustments.
      <br>&nbsp;&nbsp; The beginnings of a meta-learning process, I hope!
      <br>
      <br>I'm using a method I'm calling 'Stack Crunching',
      <br>&nbsp;&nbsp; Where I agregate the time dependent weights into a "checkpoint" of sorts.
      <br>&nbsp;&nbsp; This allows the ESN to have a 'baseline' understanding of data that I can parse into with vectors calculated from tensor weights found within a quantized version of the input data.
      <br>
      <br>You can assume that the 'ESN' is not a standard 'Echo State Network' anymore.
      <div class="textFullRight">- May 2025</div>

      <br><br><div class='procPagesAIDevBar'></div>
      
      <br><a name="2025-07" data-listing="2025-07"></a>
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
      <br>Because, what is Adam? It's a direction to move in a field of numbers, with momentum and a learning rate.
      <br>&nbsp;&nbsp; Yet... That's just a simple Boid, now isn't it?
      <br>&nbsp;&nbsp; Just without a few of the more advanced rules, which make boids feel so alive!
      <br>
      <br>Having some Tiny Brains running around in hyperdimensional space like little buggers running around avoiding each other.
      <br>&nbsp;&nbsp; Because if they collide, double activation happens when it may not be desired.
      <br>&nbsp;&nbsp; (I'm happy I finally saw a paper on Tiny Brains, giving some of my ideas credence, cause it fits! .. in my mind.)
      <br>(Only difference is that it was a <a href="https://www.nature.com/articles/s41586-025-09142-4" target="_blank">study</a> into small biological systems, not artificial ones... but I'm gettin there!)
      
      <br>Update : At the time, I had been seeing some papers talking about "Tiny Brains" being used in AI, hence the term.
      <br>&nbsp;&nbsp; But this biological study really helped solidify some ethereal concepts.
      <br>&nbsp;&nbsp; See August 2nd 2025 for some thoughts.

      <div class="textFullRight">- July 2025, Updated August 2025</div>

      <br><br><div class='procPagesAIDevBar'></div>

      <br><a name="2025-08-01" data-listing="2025-08-01"></a>
      <br>
      <br>I'd like to believe I'm moving in the right direction with the feedback systems I'm developing.
      <br>&nbsp;&nbsp; But been further creating other architectures to see how they operate.

      <br><br>I created a GAN for upressing, which helped me understand a bit better the pairing of mental structures between both our brain's hemispheres.
      <br>&nbsp;&nbsp; So I added a time based memory to check if the training was moving in the right direction.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; It definitely helped guide training a bit quicker.

      <br><br>Shows my knowledge base that I'm impressed by back-up supported learning...
      <br>&nbsp;&nbsp; But'is proof of concept!
      
      <br><br>Adversarial networks exist in nature to guide a 'single' thought's path.
      <br>&nbsp;&nbsp; Yet in the case of Group Think between humans,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Balance is never reached.
      <div class="textFullRight">- August 1st 2025</div>

      <br><br><div class='procPagesAIDevBar'></div>

      <br><a name="2025-08-02" data-listing="2025-08-02"></a>
      <br>
      <br>I've been looking into neural bundles in the brain.  There is an implicit "delay" in the flow of information that I'm interested in.
      <br>&nbsp;&nbsp; As signals move between neurons, some connections take a longer path than others to get to the same destination.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; For as much as I interpreted it.

      <br>
      <br>There is 6 main layers of neurons in the cerebral cortex,
      <br>&nbsp;&nbsp; Of these, the 4th seems to allow for delays in processing.
      <br>&nbsp;&nbsp; The 5th layer then introduces a dense layer of pathways for the signals to travel through.
      <br>&nbsp;&nbsp; This is where I think another form of delay is introduced.

      <br>
      <br>I was comparing Mice and Wallaby brains,
      <br>&nbsp;&nbsp; While Mice are likely more intelligent,
      <br>&nbsp;&nbsp; Wallabies have more connections with denser pathways, it seems.

      <br>
      <br>Wallabies have more glial cells within slices of the brain compared to Mice.
      <br>&nbsp;&nbsp; But mice had more neurons in the same slices.
      
      <br>
      <br>I'd like to believe, this doesn't mean there is a "better" brain here.
      <br>&nbsp;&nbsp; But rather, different types of brains that are suited for different tasks.
      
      <br>
      <br>Wallabies are known to be social animals when food is plentiful,
      <br>&nbsp;&nbsp; Yet solitary when food is scarce.
      <br>Mice are known to be social animals,
      <br>&nbsp;&nbsp; And have shown empathy towards other mice in distress,
      <br>&nbsp;&nbsp; And share food with other mice when they are in need.
      
      <br>
      <br>Why do I bring this up?
      <br>&nbsp;&nbsp; I believe there is similar deductive reasoning, just at a different scale.
      <br>Both Wallabies and Mice are making a choice based on the environment and situation,
      <br>&nbsp;&nbsp; While considering the well-being of others, just in different ways.
      
      <br>
      <br>The delay in neural firing could be a factor in this.
      <br>&nbsp;&nbsp; So I'd like to explore this in my own AI.
      
      <br>
      <br>We all know size of the brain can determine intelligence,
      <br>&nbsp;&nbsp; But so does the structure of the brain.

      <div class="textFullRight">- August 2nd 2025</div>

      <br><br><div class='procPagesAIDevBar'></div>

      <br><a name="2025-08-16" data-listing="2025-08-16"></a>
      <br>
      <br>So, more'n more there are some rather choice words about AI online.

      <br>
      <br>I wanted to put my personal ai dev views on record somewhere, for those who care.
      
      <br>
      <br>I read the <span class="textName">I Ching</span> and it put life into a different perspective.
      <br>&nbsp;&nbsp; Letting me down the path of researching Taoism

      <br>
      <br>As with many of the other religious texts I looked into,
      <br>&nbsp;&nbsp; Amazing imagery was used to teach morals and help guide the lost,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; But organized religion as a whole feels a little off to me.

      <br>
      <br>I don't hold any particular belief or religion at this point.
      <br>&nbsp;&nbsp; But I would use the cliche 'spiritual' to describe my outlook

      <br>
      <br>I then visited the Buddhist monastery in Carmel NY,
      <br>&nbsp;&nbsp; Greeted by the largest buddha statue in north america.
      <br>&nbsp;&nbsp; In awe of the multitudes of multitudes of hand-carved buddha statuettes in audience of the massive statue of buddha I pale in comparison before.

      <br>
      <br>I'd highly suggest visiting the monastery if you ever find yourself in the area!

      <br>
      <br>I think it was walking through the rows of 18 arahants statues, of those who reached nirvana, helped me realize,
      <br>&nbsp;&nbsp; Religion is about teaching the lessons of god(s),
      <br>&nbsp;&nbsp; Yet understanding balance is what's inside all of us as Humans,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Just gotta find it!

      <br>
      <br>So,
      <br>&nbsp;&nbsp; I'd like to hope I'm nuance-first with my approach to my ai development.
      <br>&nbsp;&nbsp; I'd like to believe in an AI which can understand...
      <br>&nbsp;&nbsp;&nbsp;&nbsp; That overlooked concepts matter in Health and Wellbeing.

      <br>
      <br>Realistically, the Buddhist Precepts feel like a good place to start for alignment.
      <br>&nbsp;&nbsp; Even as people.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Which is more than I can say for myself....
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm a hedonist at times, absurdist the rest
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalic">(Absolute terms are fun to use, hyperbole be a thing)</span>

      <br>
      <br>I very much enjoyed working on family films,
      <br>&nbsp;&nbsp; Seeing the fans in comments online,
      <br>&nbsp;&nbsp; And wish to work on more animated features soon.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I have hope in humanity
      
      <br>
      <br>May the few not ruin it for those of us trying to explore new horizons.

      <div class="textFullRight">- August 15th,16th 2025</div>
      <br>
      <br>
    </div>
  `,
};