import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Hypnagogic Hallucinations";
entryData.date = "2026-05-04";
entryData.eid = "A";
entryData.tags = ["theory", "hypnagogic", "hallucinations", "metacognition"];
entryData.body = `
  While falling asleep last night,
  <br>&nbsp;&nbsp; I had quite the eye opening pre-sleep visual,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; A hypnagogic hallucination.

  <br><br> It was of a red-winged blackbird flying toward me and then perched upon an unseen perch, before disappearing.

  <br><br> I opened my eyes and thought to myself,
  <br>&nbsp;&nbsp; "Woah, an animated pre-dream"
  
  <br><br> Before closing my eyes again to see the same bird fly away,
  <br>&nbsp;&nbsp; With low resolution motion from the wings,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; "Blocky flapping wings?"

  <br><br> It seemed like the first time I ever saw a hypnagogic hallucination actually animate, move, and persist over time.

  <br><br> Normally for me,
  <br>&nbsp;&nbsp; It's a scattering of geometric shapes which form into faces, very many faces, in rapid succession.
  <br>&nbsp;&nbsp; This was the first time I saw anything cogent enough to visualize as a moving subject in my mind's eye.

  <br><br> As I mentioned above, the wings looked blocky; like low resolution animation smearing.
  <br>&nbsp;&nbsp; I knew I was seeing flapping wings, but it was as though my convolutional deep-learning graph network of neurons showed itself,
  <br>&nbsp;&nbsp; Specifically the convolutional part, like CNN edge detection within an AI network.

  <br><br> The blockiness was the tensor of flapping wings of a red-winged blackbird,
  <br>&nbsp;&nbsp; Yet the motion smearing itself was the min-max of wing extensions over time.
  <br>&nbsp;&nbsp; The convolutional edges of time based movement, visualized as a solid shape of "wing", while I knew it was flapping.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> I've been focusing a lot on Time.
  <br>&nbsp;&nbsp; Time doesn't look like Time when predicting future states, future word chunks, future predictions.
  <br>&nbsp;&nbsp; It operates like a continuum, where sections of time are perceived like seeing a chart of a company on the Stock Exchange.
  <br>&nbsp;&nbsp; But in the case of images and multitudinous arrays of data, it becomes ranges of edge detections into shapes.

  <br><br> I never thought I would have seen my brain visualize its internal edges and shapes in a way I could consciously tell what my brain believes motion is.
  <br>&nbsp;&nbsp; But it seemed that happened to me last night.

  <br><br> It validated my approach I used in my ESN I have written up on my 'ESN Motion Prediction' page.
  <br>&nbsp;&nbsp; The difference is, my context window of motion in that ESN,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Or even the ESN I'm using for learning-rate & direction of training epochs in my 'ESRGAN Upresser' project,
  <br>&nbsp;&nbsp; This is a source of major "complexity" issues in AI in general.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> My Motion Predictor uses a shifting context window in order to learn what edges exist and should retain after the sliding context window, cyclically, slides over the same area of its brain,
  <br>&nbsp;&nbsp; Over and over again.

  <br><br> If that was too cryptic,
  <br>&nbsp;&nbsp; There is a bunch of "frames" of data my ESN fills in as it watches video,
  <br>&nbsp;&nbsp; As shapes move from frame to frame,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; The "context window" also moves frame by frame.

  <br><br> Lets say I have a window of 15 frames, after that 15th frame, it loops back to 0,1,2,3...
  <br>&nbsp;&nbsp; All 15 frames are weighted against each other to find the current frame's motion-edges, or the edges of movement.
  
  <br><br> So it constantly re-writes prior frames of recorded motion,
  <br>&nbsp;&nbsp; Unless continuous motion is found within the last 15 frames to update the current frame...
  
  <br><br> Like, every 15 frames, it will rewrite the data from 15 frames prior,
  <br>&nbsp;&nbsp; If current motion supports the found motion-edges 15 frames later,
  <br>&nbsp;&nbsp; Then, motion-edges are retained,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Edges start to strengthen,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And edge-shapes begin to dictate movement on screen.

  <br><br> And just to say,
  <br>&nbsp;&nbsp; From my AI Terminology page, my ESN is not a fixed-reservoir, like ESNs usually are.
  <br>&nbsp;&nbsp; It's a Dynamic reservoir, that reinforces prior found patterns prior to training on the reservoir's output.
  <br>&nbsp;&nbsp; The motion-edges I mentioned above are the results of the updating reservoir.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; So that, the motion-edges are the "fixed" parts of the reservoir.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> All this being said,
  <br>&nbsp;&nbsp; I think this further proves an idea I've been playing with,
  <br>&nbsp;&nbsp; Compounding Frequencies within the mind reveals the 'Edges of Information',
  <br>&nbsp;&nbsp; Or maybe the 'Edges of Consciousness', if I'm to be so bold.

  <br><br> If consciousness only starts to take hold while the brain is producing Gama waves,
  <br>&nbsp;&nbsp; Yet the motion I saw in the bird's wings, in my minds eye,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Are the result of Alpha and Theta waves, influenced by my Frontal Cortex to produce those "meaningless" hypnagogic hallucinations.
  <br>&nbsp;&nbsp; That would mean there is a distinct line in behaviour between frquencies in sections of the brain.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> This reveals a path between a few drastically different areas of my thinking process toward AI development.

  <br><br> I'd like to believe it further validates ideas I've been playing with Graph Neural Networks,
  <br>&nbsp;&nbsp; As I'm sure I've mentioned in prior posts,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; The Resonance between neurons in a graph network to spread signals.

  <br><br> That a single neuron vibrating at a certain frequency can harmonize with neurons not directly connected by edges.
  <br>&nbsp;&nbsp; The propagation of similarities throughout the local area network of a single neuron.

  <br><br> I do see some potential issues with this approach, where completely disconnected neural networks in the GNN, or lets even say,
  <br>&nbsp;&nbsp; Nodes ever so far from each other, not being able to harmonize with another neuron's frequency.

  <br><br> They say we are all 6 degrees from Kevin Bacon,
  <br>&nbsp;&nbsp; But in the years to come,
  <br>&nbsp;&nbsp; There will have to be a 7th, then 8th, then 9th degree of Kevin Bacon, once he stops being in movies.
  
  <br><br> If the rule is, "we are all 6 degrees from Kevin Bacon",
  <br>&nbsp;&nbsp; The 7th, 8th, 9th would not harmonize with the network of those initial 6.
  <br>&nbsp;&nbsp; The Graph Network gets too large,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Harmony is then lost.

  <br><br> This leads me to believe my idea of a tensor landscape affine-projection of the GNN,
  <br>&nbsp;&nbsp; Will allow for the harmonization of neurons across the entire network,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Even if some nodes are very far from each other,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Or even disconnected.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> Sure,
  <br>&nbsp;&nbsp; Being so sleep deprived to have two separate hypnagogic hallucinations be about the same red-winged blackbird can't be healthy for me,
  
  <br><br> But sometimes in our most sleep deprived states,
  <br>&nbsp;&nbsp; The ridiculous becomes the answer we were looking for.

  <br><br><div class="textFullRight">- May 5th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
