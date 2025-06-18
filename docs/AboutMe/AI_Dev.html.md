# AI Dev

I started my dive into AI in 2008 writing a Boid / Crowd system for my thesis while in art college, School of Visual Arts.
      
   It was an insane particle script + 3d animation cycles in Maya haha.
      
Then I did Boid movement, navigation, & obstacle detection in animated films for 5 years at Blue Sky Studios, using Houdini.

I dove into Style-Transfer AI & Long Short-Term Memory (LSTM) training in 2019-2020,
      
   Like making a Node.js server (web site) understand my voice & auto google search for me.

Since then, I've been developing different multi-media AI structures in my spare time.

In 2015 I decided I'd cram a machine learning AI into a single-board computer, a Jetson TK1, by the end of 2026.
      
   Something that could write down what I say,
      
   Use vision to understand an object simply went out of frame.
      
     Yet "knows" if it looks over, the object is still there;
      
       'Long Term Attention'

At the end of 2023, this evolved into a deep learning AI crammed into, likely, a Jetson Nano.
      
   As something to infer what I mean, from what I say,
      
   Or give a "thought" on what it saw or heard in the world around it.

        'Machine Learning' is AI that can learn basic patterns.
        
'Deep Learning' is Machine Learning,
        
But uses neural networks to form patterns of patterns.

Realistically, I'd just be happy to make something that can understand what I say and can give a semi coherent response without an internet connection.

I'm yet to begin on the core of the AI, as I'm still testing different structure's ability in adapting to stimuli.

        You could guess,
        
All the recent AI stuff has been quite serendipitous for my creation!

For my 2026 goal, I've been exploring Graph Attention Network (GAT) artificial intelligence.
       As GATs allow me to treat 'concepts' as 'objects', rather than sections of words/pixels as a tensor or 'piece of a concept'.

        GATs are a type of neural network that considers the relationships between data points.
        
As a type of Graph Neural Network (GNN),
        
Its best for predicting connections between ideas / things / data in a system.

        GNNs are commonly used for "Recommendation Systems",
        
     Hey, you might know Jim Bob McGee!!
        
   But GATs could be used for so much more!

I've been working on a general-purpose neuron that adjusts its own connections during prediction;
      
   So the same system could learn my voice on the fly, as well as sensor signals connected to the Jetson computer.

Since its the Structure in a GAT that causes regions of neural activation based on stimuli,
      
   It forms a result (prediction) after subsequent activations, as-though compounding ripples in a pond.

Rather than a field of numbers aligning to yield a prediction,
      
   It's the structure of neural connections which manipulates the data.

I've been going in a direction that should yield a similar result to a Recurrent Neural Network (RNN), but with a different mental structure.
      
   With that general-purpose neuron, I can provide text, images, audio histograms, etc. to the network.

RNNs can be used for/in nearly any ai,
        
Best for detecting patterns in sequential data,
        
Like time-based events or words in text.

        They are the basis for many types of ai, like LSTMs;
        
And can be used as part of LLMs, like ChatGPT.

 The GAT will create connections from initial random data points, sample the differences, then pass the 'prediction' forward and 'back' in the chain, and adjust the connections based on their revisit to the same data in the current 'prediction'.
      
   Relying on localized regions of sub-networks to recurrently process the data

It should be self-taught discrimination of attention between neurons;
      
   Like in the human brain.
      
     (When the purple circles go red in the GAT video, first vid)

How about an Echo State Network (ESN) AI I wrote in the spring-summer of 2024?

An ESN is a type of RNN,
        
Which considers time in its prediction.
        
It thinks about past events to predict future events.

Since an ESN brain can learn on the fly, why not feed it some videos I made?

        Currently I'm not using my ESN's predicted movement for anything in python,
        
   The next step would be introducing a base image to motion-transfer / reference.
        
However did build a simple version in Unity to learn player combos + movement over time.

        So I'm mostly just learnin' while watching my ai learnin'!

In the videos, I had the "reservoir" set to 15 times steps, you'll notice about every 15 frames the brain shifts.
        
By frame ~45, it's learned some patterns in the X video.
        
The brain seems to completely melt at ~75 & rebuild itself by ~95. 

It should be happenstance that the brain shifts when the reservoir fills;
        
The brain should shift, but the 15-frame fill might be a bug in my logic,
        
   Or maybe its just a coincidence ::shrugs::
        
But it's detecting patterns in motion!

If you couldn't tell, I'm training my AIs on my own works.
      
A personally made AI trained on personally made images / videos / photos / code / writing.
      
   That means I can copyright my generations, right?
      
     If I made every aspect of the AI & training data?

      - February 2025

I've begun on the core of the AI, as of May 24th, 2025.
      
   I have the beginnings of a 'Micro-Term' memory implemented to act as a gated-attention during inference.
      
This, paired with automatic graph edge splitting ('Dynamic' in DGNN or DGAT) and use of geometric clustering, seems to be giving me values of a "remembered" object when it's outside of the dataset.
      
   Bodily awarness of limbs, objects outside of the field of view, and other 'long term' tensors/classifications at a temporary scale.

It's a 4d kernel, in that it uses an ESN to train on it's own mistakes,
      
   Basing it's decisions on prior back-propagation states/adjustments.
      
   The beginnings of a meta-learning process, hehe.

I'm using a method I'm calling 'Stack Crunching',
      
   Where I agregate the time dependent weights into a "checkpoint" of sorts.
      
   This allows the ESN to have a 'baseline' understanding of data that I can parse into with vectors calculated from tensor weights found within a quantized version of the input data.

You can assume that the 'ESN' is not a standard 'Echo State Network' anymore.
      - May 2025