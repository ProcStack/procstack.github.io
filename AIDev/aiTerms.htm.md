# AI Terminology

If you are new to AI Development or want to understand some of the terminology or logic used in AI research,
      
   Here's a list of some common terms and explations of them here --

 At the bottom are my own terms I use in my research notes & posts.

 AI Terms

  Recurrent Neural Network (RNN) 
      
   A type of neural network that reprocesses sequential data by maintaining a hidden state to capture information from previous 'time' steps.

  Time / Session step 
      
   A discrete unit of progression in sequential data processing, where the RNN updates its hidden state based on the current input and the previous hidden state.
      
     It could be a group of words or tensors processed at once, or a single word/tensor at a time.
      
     The concept of 'time' in RNNs is abstract and refers to the order of data processing rather than actual time.

  Hidden State/Layer 
      
   The internal representation of information in an RNN that captures context from previous time steps, allowing the network to maintain memory of past inputs.
      
     The hidden state is updated at each time step based on the current input and the previous hidden state.
      
     It enables the RNN to learn temporal dependencies in sequential data.

  Training Epochs 
      
   A complete pass through the entire training dataset while the neural network learns.

  Meta-Learnings 
      
   Learning how to learn.
      
     It's the core result of solid heuristic based ai development.

  Heuristics 
      
   Methods to figure out rules or patterns in data without explicit programming.
      
     Like trial and error, or learning from experience.
      
   Sometimes you'll find a rabbit in that rabbit-hole.

  Rabbit Hole 
      
   Getting lost trying to figure something out.
      
     (Not an Ai term; Just a turn of phrase)

  Echo State Network (ESN) 
      
   A type of RNN architecture where the hidden layer (the "reservoir") is fixed and randomly connected,
      
     Only the output layer is trained.
      
   The reservoir's design is for sequential data,
      
     Allowing it to capture temporal patterns in the input data.
      
   They can be expanded upon by adding attention mechanisms or graph structures to the reservoir.

  Gated Recurrent Unit (GRU) 
      
   A type of RNN architecture that uses gating mechanisms to control the flow of information,
      
     Allowing the network to capture long-term dependencies more effectively than traditional RNNs.

  Long Short-Term Memory (LSTM) 
      
   A type of RNN architecture that uses memory cells/loops and gating mechanisms to capture long-term dependencies in sequential data, addressing the 'vanishing gradient' problem of traditional RNNs.
      
     LSTMs are widely used in tasks such as language modeling, speech recognition, and time series prediction.

  Vanishing Gradients 
      
   A problem while training deep neural networks where gradients become very small
      
     Nearly zero,
      
     Causing the ai to learn very slowly or not at all.
      
   This often happens in RNNs when trying to learn long-term dependencies,
      
     Making it difficult for the network to update weights effectively during backpropagation.

  Generative Adversarial Network (GAN) 
      
   A type of neural network architecture that trains two competing networks;
      
     A Generator and Discriminator AI

  Generator 
      
   The network in a GAN that creates new data samples,
      
     Such as images, text, or audio.
      
   Trying to produce data that is similar to the training data,
      
     Fooling the Discriminator into thinking the generated data is real.

  Discriminator 
      
   The network in a GAN that evaluates data samples,
      
     Distinguishing between real data from the training set and fake data produced by the Generator.
      
   Providing feedback to the Generator to help it improve its data generation.

  Enhanced Super Resolution GAN (ESRGAN) 
      
   A type of GAN architecture specifically designed for image super-scaling tasks.
      
     Enlarging low-resolution images while preserving details and giving them a make over to spruce 'em up a bit.
      
       enhance ... Enhance! ... ENHANCE!
      
   It uses residual blocks and perceptual loss to improve the quality of the remade images.

  Perceptual Loss 
      
   A loss function used in image generation that measures differences between high-level features of the generated image and the target image,
      
     Rather than just pixel-to-pixel differences.

  Residual 
      
   The difference between the input and output of a layer in a neural network.

  Residual Block 
      
   A building block in deep neural networks that allows the network to learn residual functions with reference to the layer inputs,
      
     Helping to mitigate the vanishing gradient problem and enabling the training of very deep networks.

  Graph Neural Network (GNN) 
      
   A type of neural network that operates on graph-structured data,
      
     Learning to represent nodes, edges, and their relationships through message passing and aggregation.
      
   Imagine throwing a rock into a pond,
      
     The ripples are like messages bouncing off other rocks in the water.
      
       Which rocks bounce the ripples back;
      
       How many ripples each rock makes,
      
       How far the ripples go,
      
       The interference of ripples from other rocks
      
     The ripples are the weights and biases of the network.

  Graph Attention Network (GAT) 
      
   A type of GNN that incorporates attention mechanisms to weigh the importance of neighboring nodes when updating a node's state/values/representation.
      
     Allowing the network to focus on relevant information in the graph structure.
      
       (I like adding a memory to GATs to make them recurrent too!)

  Attention Mechanism 
      
   Math operations that allow the model to focus on specific parts of the input data when making predictions,
      
     Typically used in sequence-to-sequence models and transformer architectures.
      
       Like text prediction or language translation.
      
   Helping the model weigh importance of different input data elements,
      
     Letting it learn which aspects of the data are more relevant to the current task.
      
   Like a window viewing parts of the input data,
      
       Ajusting the size and position of the window to change the view.

  Attention Head 
      
   An aspect of attention mechanisms used to calculate scores between different parts of the input data,
      
     Allowing the model to capture multiple types of relationships and dependencies in the data.
      
     Multiple attention heads can be used together to learn different aspects of the input data simultaneously.

  Convolution / Convolve 
      
   A math operation used on images or arrays to extract features from input data by messing with the values of neighboring elements/pixels.

  Convolutional Layer 
      
   A step applying math to convolve the input data of a neural network into multiple feature maps using learnable filters/kernels,
      
     Commonly used on images.
      
   Slice up the input image into different sections,
      
     Apply filters/math to each section to extract features like edges, textures, and patterns.
      
     Or use the shuffled sections to learn spatial relationships in the data.
      
   The more you slice up the image, the more detailed features you can learn.
      
     You might have seen this as a large image turned into many smaller rectangles/grids in any 'how do ais work' videos.

  Pooling Layer 
      
   A layer in a neural network that blends neighboring data in a way that reduces the spatial dimensions of the input,
      
     While retaining important features/landmarks of the data.
      
   Often used after convolutional layers to downsample feature maps and reduce the damn power & memory overhead.
      
     But also to make the model more robust to small translations/shifts in the input data.
      
       Similar results to laplacian pyramids in image processing.

  Laplacian Pyramids 
      
   Not an AI term per-se, but useful to know.
      
   A technique in image processing that creates a multi-scale representation of an image by repeatedly applying Gaussian blurring and subsampling;
      
     Good for image analysis and manipulation at different levels of detail.

  Feature / Landmark 
      
   A distinctive attribute or pattern in input data that a neural network learns to recognize,
      
     Such as edges, textures, shapes, or specific objects in images/data arrays.
      
   Helping CNNs and other models identify and classify input data automatically by learning these features during training.
      
   Or guiding attention mechanisms to focus on important parts of the data,
      
     Such as angles between points in 3d space.

  Fully Connected Layer 
      
   A layer in a neural network where each neuron is connected to every neuron in the previous layer, typically used for high-level reasoning and decision-making.

  Projection 
      
   The spatial matrix projection of input data into the positions/geometry of the AI's graph nodes.
      
     If you are into 3d graphics and shaders, it's the same concept as projecting model verticies into view and screen/projection space.
      
     Local to world space or world space to local space transformations.
      
       But with vectors of data in a big matrix/array instead of 3d points.

  Graph Node 
      
   A fundamental unit in a GNN that exists in a 'state' or set of values,
      
     Representing entities or data points in the graph structure.
      
   Each node can be connected to other nodes via edges,
      
     Allowing information to be passed and aggregated between them during learning.

 My Terms
      
 For my Notes & Research section

  dPA-MPNN 
      
   The architecture I'm currently designing and testing.
      
     A dynamic Pointer-Attention, Message-Passing Neural Network
      
   I then use Affine Projections to map input data into the graph nodes.
      
     And an Echo State Network style memory/reservoirs to give temporal influence to the nodes.
      
       .. It's a bit of a capsule network now that I think of it ..
      
   It's a GNN at it's core, with attention heads and message passing between nodes.

  d-  ...  dGAT   dESN   ... 
      
   The 'd-' prefix stands for 'dynamic'.
      
     Refering to aspects which learn how to shift during prediction.
      
       I think of it like meta-learning in some situations.
      
   An ai which uses it's input as training data to update the current model,
      
     Changing  connected edges in GNNs or reservoir weights in ESNs.
      
   Ussually not 'checkpoint' based AI structures.
      
     Updating 'on-the-fly'

  Lighthouse 
      
   Any noise pattern used to augment an AI's perspective, at inference or training time.
      
     A Lighthouse can be used to shift an AI's error correction or understand context better.
      
     Where ever noise can be used to help give the AI personality or understanding of the world its provided.

  Time  /  Memory  /  ESN** 
      
   The temporal influence of prior states on the current state of the AI's graph nodes.
      
     An ability to record a prior state of any aspect of an AI.
      
   I've been using these three terms interchangible, please note that I never mean ESN as the static random architecture if I say ESN.
      
     I mean ESN as in Echo State Network style memory aspect,
      
     A resevoir that is updated and blended with each time/session step.
      
   I'm a creature of "baseline logic",
      
     If it can operate like a clock's tick'tocking time, it is time.
      
     A Resolution before the next calculation.

  The Particle System 
      
   My choice of 'loss function' is one that operates like a boid particle system.
      
     I haven't heard of this done before, but that's my approach to optimization.
      
       Baby Dragon Hatchling might be doing something similar
      
         An architecture from Pathway AI
      
     Imagine the Adam Optimizer with a few more rulesets.
      
       Rules like 'avoidance', 'cohesion', and 'alignment'
      
         And then some; 'personality' is easy to add per 'particle'