const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Terminology",
  "description": "AI Terminology with visual examples by ProcStack, focusing on defining key terms & logic in AI development and neural network structures.",
  "keywords": "AI, Artificial Intelligence, AI Development, Machine Learning, Deep Learning, Neural Networks, Graph Attention Network, GAT, Echo State Network, ESN, AI Terms",
  "url": "https://procstack.github.io/AIDev/aiTerms.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "aiTerms.htm",
  'name' : 'AI Terminology',
  'title' : 'AI Terminology',
  'lastModified' : '2025-10-31',
  'schemaData' : shemaData,
  'media' : [],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      <br> If you are new to AI Development or want to understand some of the terminology or logic used in AI research,
      <br>&nbsp;&nbsp; Here's a list of some common terms and explations of them here --

      <br><br> At the bottom are my own terms I use in my research notes & posts.

      <br><br><br><div class='procPagesAIDevBar'></div>

      <br><br> <span class="innerCenter textBold textBump">AI Terms</span>

      <br><br> <span class="textName"> Recurrent Neural Network (RNN) </span>
      <br>&nbsp;&nbsp; A type of neural network that reprocesses sequential data by maintaining a hidden state to capture information from previous 'time' steps.
      
      <br><br> <span class="textName"> Time / Session step </span>
      <br>&nbsp;&nbsp; A discrete unit of progression in sequential data processing, where the RNN updates its hidden state based on the current input and the previous hidden state.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; It could be a group of words or tensors processed at once, or a single word/tensor at a time.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; The concept of 'time' in RNNs is abstract and refers to the order of data processing rather than actual time.

      <br><br> <span class="textName"> Hidden State/Layer </span>
      <br>&nbsp;&nbsp; The internal representation of information in an RNN that captures context from previous time steps, allowing the network to maintain memory of past inputs.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; The hidden state is updated at each time step based on the current input and the previous hidden state.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; It enables the RNN to learn temporal dependencies in sequential data.
      
      <br><br> <span class="textName"> Training Epochs </span>
      <br>&nbsp;&nbsp; A complete pass through the entire training dataset while the neural network learns.
      
      <br><br> <span class="textName"> Meta-Learnings </span>
      <br>&nbsp;&nbsp; Learning how to learn.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; It's the core result of solid heuristic based ai development.
      
      <br><br> <span class="textName"> Heuristics </span>
      <br>&nbsp;&nbsp; Methods to figure out rules or patterns in data without explicit programming.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Like trial and error, or learning from experience.
      <br>&nbsp;&nbsp; Sometimes you'll find a rabbit in that rabbit-hole.

      <br><br> <span class="textName"> Rabbit Hole </span>
      <br>&nbsp;&nbsp; Getting lost trying to figure something out.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalic textDrinkMeAlice">(Not an Ai term; Just a turn of phrase)</span>

      <br><br><br><div class='procPagesAIDevBar'></div>

      <br><br> <span class="textName"> Echo State Network (ESN) </span>
      <br>&nbsp;&nbsp; A type of RNN architecture where the hidden layer (the "reservoir") is fixed and randomly connected,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Only the output layer is trained.
      <br>&nbsp;&nbsp; The reservoir's design is for sequential data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Allowing it to capture temporal patterns in the input data.
      <br>&nbsp;&nbsp; They can be expanded upon by adding attention mechanisms or graph structures to the reservoir.

      <br><br> <span class="textName"> Gated Recurrent Unit (GRU) </span>
      <br>&nbsp;&nbsp; A type of RNN architecture that uses gating mechanisms to control the flow of information,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Allowing the network to capture long-term dependencies more effectively than traditional RNNs.

      <br><br> <span class="textName"> Long Short-Term Memory (LSTM) </span>
      <br>&nbsp;&nbsp; A type of RNN architecture that uses memory cells/loops and gating mechanisms to capture long-term dependencies in sequential data, addressing the 'vanishing gradient' problem of traditional RNNs.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; LSTMs are widely used in tasks such as language modeling, speech recognition, and time series prediction.

      <br><br> <span class="textName"> Vanishing Gradients </span>
      <br>&nbsp;&nbsp; A problem while training deep neural networks where gradients become very small
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Nearly zero,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Causing the ai to learn very slowly or not at all.
      <br>&nbsp;&nbsp; This often happens in RNNs when trying to learn long-term dependencies,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Making it difficult for the network to update weights effectively during backpropagation.

      <br><br><br><div class='procPagesAIDevBar'></div>

      <br><br> <span class="textName"> Generative Adversarial Network (GAN) </span>
      <br>&nbsp;&nbsp; A type of neural network architecture that trains two competing networks;
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A Generator and Discriminator AI
      
      <br><br> <span class="textName"> Generator </span>
      <br>&nbsp;&nbsp; The network in a GAN that creates new data samples,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Such as images, text, or audio.
      <br>&nbsp;&nbsp; Trying to produce data that is similar to the training data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Fooling the Discriminator into thinking the generated data is real.

      <br><br> <span class="textName"> Discriminator </span>
      <br>&nbsp;&nbsp; The network in a GAN that evaluates data samples,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Distinguishing between real data from the training set and fake data produced by the Generator.
      <br>&nbsp;&nbsp; Providing feedback to the Generator to help it improve its data generation.
      
      <br><br> <span class="textName"> Enhanced Super Resolution GAN (ESRGAN) </span>
      <br>&nbsp;&nbsp; A type of GAN architecture specifically designed for image super-scaling tasks.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Enlarging low-resolution images while preserving details and giving them a make over to spruce 'em up a bit.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; enhance ... Enhance! ... ENHANCE!
      <br>&nbsp;&nbsp; It uses residual blocks and perceptual loss to improve the quality of the remade images.

      <br><br> <span class="textName"> Perceptual Loss </span>
      <br>&nbsp;&nbsp; A loss function used in image generation that measures differences between high-level features of the generated image and the target image,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Rather than just pixel-to-pixel differences.

      <br><br> <span class="textName"> Residual </span>
      <br>&nbsp;&nbsp; The difference between the input and output of a layer in a neural network.

      <br><br> <span class="textName"> Residual Block </span>
      <br>&nbsp;&nbsp; A building block in deep neural networks that allows the network to learn residual functions with reference to the layer inputs,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Helping to mitigate the vanishing gradient problem and enabling the training of very deep networks.


      <br><br><br><div class='procPagesAIDevBar'></div>

      <br><br> <span class="textName"> Graph Neural Network (GNN) </span>
      <br>&nbsp;&nbsp; A type of neural network that operates on graph-structured data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Learning to represent nodes, edges, and their relationships through message passing and aggregation.
      <br>&nbsp;&nbsp; Imagine throwing a rock into a pond,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; The ripples are like messages bouncing off other rocks in the water.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Which rocks bounce the ripples back;
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How many ripples each rock makes,
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How far the ripples go,
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The interference of ripples from other rocks
      <br>&nbsp;&nbsp;&nbsp;&nbsp; The ripples are the weights and biases of the network.

      <br><br> <span class="textName"> Graph Attention Network (GAT) </span>
      <br>&nbsp;&nbsp; A type of GNN that incorporates attention mechanisms to weigh the importance of neighboring nodes when updating a node's state/values/representation.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Allowing the network to focus on relevant information in the graph structure.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textShrink textItalic">(I like adding a memory to GATs to make them recurrent too!)</span>

      <br><br> <span class="textName"> Attention Mechanism </span>
      <br>&nbsp;&nbsp; Math operations that allow the model to focus on specific parts of the input data when making predictions,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Typically used in sequence-to-sequence models and transformer architectures.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Like text prediction or language translation.
      <br>&nbsp;&nbsp; Helping the model weigh importance of different input data elements,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Letting it learn which aspects of the data are more relevant to the current task.
      <br>&nbsp;&nbsp; Like a window viewing parts of the input data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ajusting the size and position of the window to change the view.
      
      <br><br> <span class="textName"> Attention Head </span>
      <br>&nbsp;&nbsp; An aspect of attention mechanisms used to calculate scores between different parts of the input data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Allowing the model to capture multiple types of relationships and dependencies in the data.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Multiple attention heads can be used together to learn different aspects of the input data simultaneously.

      <br><br><br><div class='procPagesAIDevBar'></div>

      <br><br> <span class="textName"> Convolution / Convolve </span>
      <br>&nbsp;&nbsp; A math operation used on images or arrays to extract features from input data by messing with the values of neighboring elements/pixels.

      <br><br> <span class="textName"> Convolutional Layer </span>
      <br>&nbsp;&nbsp; A step applying math to convolve the input data of a neural network into multiple feature maps using learnable filters/kernels,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Commonly used on images.
      <br>&nbsp;&nbsp; Slice up the input image into different sections,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Apply filters/math to each section to extract features like edges, textures, and patterns.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Or use the shuffled sections to learn spatial relationships in the data.
      <br>&nbsp;&nbsp; The more you slice up the image, the more detailed features you can learn.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; You might have seen this as a large image turned into many smaller rectangles/grids in any 'how do ais work' videos.

      <br><br> <span class="textName"> Pooling Layer </span>
      <br>&nbsp;&nbsp; A layer in a neural network that blends neighboring data in a way that reduces the spatial dimensions of the input,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; While retaining important features/landmarks of the data.
      <br>&nbsp;&nbsp; Often used after convolutional layers to downsample feature maps and reduce the damn power & memory overhead.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; But also to make the model more robust to small translations/shifts in the input data.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Similar results to laplacian pyramids in image processing.

      <br><br> <span class="textName"> Laplacian Pyramids </span>
      <br>&nbsp;&nbsp; Not an AI term per-se, but useful to know.
      <br>&nbsp;&nbsp; A technique in image processing that creates a multi-scale representation of an image by repeatedly applying Gaussian blurring and subsampling;
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Good for image analysis and manipulation at different levels of detail.

      <br><br> <span class="textName"> Feature / Landmark </span>
      <br>&nbsp;&nbsp; A distinctive attribute or pattern in input data that a neural network learns to recognize,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Such as edges, textures, shapes, or specific objects in images/data arrays.
      <br>&nbsp;&nbsp; Helping CNNs and other models identify and classify input data automatically by learning these features during training.
      <br>&nbsp;&nbsp; Or guiding attention mechanisms to focus on important parts of the data,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Such as angles between points in 3d space.

      <br><br> <span class="textName"> Fully Connected Layer </span>
      <br>&nbsp;&nbsp; A layer in a neural network where each neuron is connected to every neuron in the previous layer, typically used for high-level reasoning and decision-making.

      
      <br><br> <span class="textName"> Projection </span>
      <br>&nbsp;&nbsp; The spatial matrix projection of input data into the positions/geometry of the AI's graph nodes.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If you are into 3d graphics and shaders, it's the same concept as projecting model verticies into view and screen/projection space.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Local to world space or world space to local space transformations.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; But with vectors of data in a big matrix/array instead of 3d points.

      <br><br> <span class="textName"> Graph Node </span>
      <br>&nbsp;&nbsp; A fundamental unit in a GNN that exists in a 'state' or set of values,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Representing entities or data points in the graph structure.
      <br>&nbsp;&nbsp; Each node can be connected to other nodes via edges,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Allowing information to be passed and aggregated between them during learning.

      <br><br><br><div class='procPagesAIDevBar'></div>

      <br> <span class="innerCenter textBold textBump">My Terms</span>
      <br> <span class="innerCenter textDrinkMeAlice">For my <span class="textName">Notes & Research</span> section</span>

      <br> <span class="textName"> dPA-MPNN </span>
      <br>&nbsp;&nbsp; The architecture I'm currently designing and testing.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A dynamic Pointer-Attention, Message-Passing Neural Network
      <br>&nbsp;&nbsp; I then use Affine Projections to map input data into the graph nodes.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; And an Echo State Network style memory/reservoirs to give temporal influence to the nodes.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .. It's a bit of a capsule network now that I think of it ..
      <br>&nbsp;&nbsp; It's a GNN at it's core, with attention heads and message passing between nodes.

      <br><br> <span class="textName"> d- </span> ... <span class="textName"> dGAT </span> <span class="textName"> dESN </span> <span class="textName"> ... </span>
      <br>&nbsp;&nbsp; The 'd-' prefix stands for 'dynamic'.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Refering to aspects which learn how to shift during prediction.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I think of it like meta-learning in some situations.
      <br>&nbsp;&nbsp; An ai which uses it's input as training data to update the current model,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Changing  connected edges in GNNs or reservoir weights in ESNs.
      <br>&nbsp;&nbsp; Ussually not 'checkpoint' based AI structures.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Updating 'on-the-fly'

      <br><br> <span class="textName"> Lighthouse </span>
      <br>&nbsp;&nbsp; Any noise pattern used to augment an AI's perspective, at inference or training time.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A Lighthouse can be used to shift an AI's error correction or understand context better.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Where ever noise can be used to help give the AI personality or understanding of the world its provided.
      
      <br><br> <span class="textName"> Time </span> / <span class="textName"> Memory </span> / <span class="textName"> ESN** </span>
      <br>&nbsp;&nbsp; The temporal influence of prior states on the current state of the AI's graph nodes.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; An ability to record a prior state of any aspect of an AI.
      <br>&nbsp;&nbsp; I've been using these three terms interchangible, please note that I never mean ESN as the static random architecture if I say ESN.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I mean ESN as in Echo State Network style memory aspect,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A resevoir that is updated and blended with each time/session step.
      <br>&nbsp;&nbsp; I'm a creature of "baseline logic",
      <br>&nbsp;&nbsp;&nbsp;&nbsp; If it can operate like a clock's tick'tocking time, it is time.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; A Resolution before the next calculation.
      
      <br><br> <span class="textName"> The Particle System </span>
      <br>&nbsp;&nbsp; My choice of 'loss function' is one that operates like a boid particle system.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; I haven't heard of this done before, but that's my approach to optimization.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Baby Dragon Hatchling</span> might be doing something similar
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; An architecture from <span class="textName">Pathway AI</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Imagine the Adam Optimizer with a few more rulesets.
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rules like 'avoidance', 'cohesion', and 'alignment'
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And then some; 'personality' is easy to add per 'particle'
      



    </div>
  `,
};