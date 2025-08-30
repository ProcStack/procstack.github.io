import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Tensor Terrain Adaptation";
entryData.date = "2025-07";
entryData.eid = "A";
entryData.tags = ["research","GNN","topology","MPNN","dPA-MPNN"];
entryData.body = `
  With a bit more research into the types of minds that brought us DeepMind, and their work on GNN networks,
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
  
  <br>
  <br>Update : At the time, I had been seeing some papers talking about "Tiny Brains" being used in AI, hence the term.
  <br>&nbsp;&nbsp; But this biological study really helped solidify some ethereal concepts.

  <br><br><div class="textFullRight">- July 2025,<br> Updated August 2nd 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
