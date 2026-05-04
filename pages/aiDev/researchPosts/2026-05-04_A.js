import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Hypnagogic Hallucinations";
entryData.date = "2026-05-04";
entryData.eid = "A";
entryData.tags = ["theory", "hypnagogic", "hallucinations", "metacognition"];
entryData.body = `
  While falling asleep last night, had a quite eye opening pre-sleep visual, a hypnagogic hallucination.

  <br><br> It was of a red-winged blackbird flying toward me and then perched upon an unseen perch, before disappearing.

  <br><br> I opened my eyes and said to myself, "woah, an animated pre-dream"
  <br>&nbsp;&nbsp; Before closing my eyes again to see the same bird fly away, with low resolution motion from the wings, "blocky flapping wings?"

  <br><br> It seemed like the first time I ever saw a hypnagogic hallucination actually move and retain persistence over time.
  <br>&nbsp;&nbsp; For me, normally it's a scattering of geometric shapes which form into faces, very many faces, in rapid succession.  This was the first time I saw anything cogent enough to visualize as a moving subject in my minds eye.

  <br><br> As I mentioned above, the wings looked blocky.  I knew I was seeing flapping wings, but it was as though my convolutional deep-learning graph node of neurons showed itself, specifically the convolutional part, like CNN edge detection within an AI network.

  <br><br> The blockiness was the tensor of flapping wings of a red-winged blackbird, but the motion itself was the min-max of wing extensions over time.  The convolutional edges of time based movement, visualized as a solid shape of "wing", while I knew it was flapping.


  <br><br> I've been focusing a lot on Time.
  <br>&nbsp;&nbsp; Time doesn't look normal in the cases of predicting future states, future word chunks, future predictions.
  <br>&nbsp;&nbsp; It operates like a continuum, where sections of time are perceived like seeing a graph of a company on the Stock Exchange.
  <br>&nbsp;&nbsp; But in the case of images and multitudinous arrays of data, it becomes a ranges of Edges and shapes.

  <br><br> I never thought I would have seen my brain visualize its internal edges and shapes in a way I could consciously see what my brain believes motion is.
  <br>&nbsp;&nbsp; But then it happened to me last night.

  <br><br> It validated my approach I used in my ESN I have written up on my 'ESN Motion Prediction' page.
  <br>&nbsp;&nbsp; The difference is, my context window of motion in that ESN,
  <br>&nbsp;&nbsp; Or even the learning-rate over time ESN in my ESRGAN Image Upresser project,
  <br>&nbsp;&nbsp; Is the source of a major "complexity" issue.

  <br><br> My Motion Detector uses a shifting context window in order to learn what edges exist and should retain after the sliding context window, cyclically, slides over the same area of its brain,
  <br>&nbsp;&nbsp; Over and over again.

  <br><br> If that's too cryptic,
  <br>&nbsp;&nbsp; There is a bunch of "frames" of data my ESN would fill in,
  <br>&nbsp;&nbsp; As motion moves from frame to frame,
  <br>&nbsp;&nbsp; The "context window" also moves frame by frame.
  <br>&nbsp;&nbsp; But if I have a window of 15 frames, after that 15th frame, it loops back to 0,1,2,3...
  <br>&nbsp;&nbsp; So it constantly re-writes prior frames of recorded motion,
  <br>&nbsp;&nbsp; Unless the motion found within the last frame to update the current frame...
  <br>&nbsp;&nbsp; Like, every 15 frames, it will rewrite the data from 15 frames prior,
  <br>&nbsp;&nbsp; Supports the found motion 15 frames later.
  <br>&nbsp;&nbsp; Then, motion is retained, edges start to form, and shapes beging to dictate movement on screen.

  <br><br> And just to say again, from my Terminology page, my ESN is not a fixed-reservoir, like ESNs usually are.
  <br>&nbsp;&nbsp; It's a Dynamic reservoir, that reinforces prior found patterns prior to training on the reservoir's output.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> All this being said,
  <br>&nbsp;&nbsp; I think this further proves an idea I've been playing with,
  <br>&nbsp;&nbsp; Compounding Frequencies within the mind reveals the 'Edges of Information',
  <br>&nbsp;&nbsp; Or maybe the 'Edges of Consciousness', if I'm to be so bold.

  <br><br> If consciousness only starts to take hold while the brain is producing Gama waves,
  <br>&nbsp;&nbsp; Yet the motion I saw in the bird's wings, in my minds eye,
  <br>&nbsp;&nbsp; Would be the result of Alpha and Theta waves, influenced by my Frontal Cortex to produce those "meaningless" hypnagogic hallucinations.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> This reveals a path between a few drastically different areas of my thinking process toward AI development.

  <br><br> I'd like to believe it further validates ideas I've been playing with Graph Neural Networks,
  <br>&nbsp;&nbsp; As I'm sure I've mentioned the Resonance between neurons in a graph network to spread signals, in prior posts.

  <br><br> That a single neuron vibrating at a certain frequency can harmonize with neurons not directly connected by edges.
  <br>&nbsp;&nbsp; The propagation of similarities throughout the local area network of a single neuron.

  <br><br> I do see some potential issues with this approach, where completely disconnected neural networks in the GNN, or lets even say,
  <br>&nbsp;&nbsp; Nodes ever so far from each other, not being able to harmonize with another neuron's frequency.

  <br><br> They say we are all 6 degrees from Kevin Bacon,
  <br>&nbsp;&nbsp; But in the years to come,
  <br>&nbsp;&nbsp; There will have to be a 7th, then 8th, then 9th degree of Kevin Bacon, once he stops being in movies.
  <br>&nbsp;&nbsp; And if the rule is, "we are all 6 degrees from Kevin Bacon",
  <br>&nbsp;&nbsp; The 7th, 8th, 9th would not harmonize with the network of those initial 6.
  <br>&nbsp;&nbsp; The Graph Network gets too large,
  <br>&nbsp;&nbsp; Harmony is then lost.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> Sure, being sleep deprived enough to have two separate hypnagogic hallucinations be about the same red-winged blackbird can't be healthy for me,
  <br>&nbsp;&nbsp; But sometimes in our most sleep deprived states,
  <br>&nbsp;&nbsp; The ridiculous becomes the answer we were looking for.

  <br><br><div class="textFullRight">- May 5th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
