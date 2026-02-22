import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Navier-Stokes";
entryData.date = "2026-02-14";
entryData.eid = "A";
entryData.tags = ["physics", "math", "theory", "fluid dynamics"];
entryData.body = `
  The one Millennium Prize Problem I feel the most attracted to, yet don't have enough physics + math knowledge to do the problem itself,
  <br>&nbsp;&nbsp; Navier-Stokes

  <br><br> It's technically an unsolved theorem, but the math itself checks out.
  <br>&nbsp;&nbsp; The unsolvedness comes from not having the result when starting from perfect equilibrium in a closed system.
  <br>&nbsp;&nbsp; ::clears throat::
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Sorry, wordy.
  
  <br><br> The question is,
  <br>&nbsp;&nbsp; Are vortices inevitable in a perfectly stable initial system?
  <br>&nbsp;&nbsp; Or will the stable system always stay stable?

  <br><br> Which is difficult to test,
  <br>&nbsp;&nbsp; Cause if you take water, put it in a vacuum,
  <br>&nbsp;&nbsp; Gravity still influences it,
  <br>&nbsp;&nbsp; Shakes or vibration would influence it,
  <br>&nbsp;&nbsp; It's a bit hard to test in actuality.

  <br><br> This is where I have no clue how to even go about approaching the problem.

  <br><br> Like, Navier-Stokes lives in classical physics land,
  <br>&nbsp;&nbsp; Yet, in my mind, I feel it needs to branch into quantum and theoretical physics to get an answer to a problem like that.

  <br><br> I mentioned in another post,
  <br>&nbsp;&nbsp; Small undulations in the fabric of the universe could induce a cascading effect to cause turbulence in a smooth fabric of space-time,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textShrink">( I'm the one proposing this; see the entry <span class="textItalic">Being & Becoming</span> )</span>
  
  <br><br> But this is banking on Quantum Foam being real,
  <br>&nbsp;&nbsp; That entropy operates on time scales that far dwarf our limited human lives,
  <br>&nbsp;&nbsp; And that I'm not a physicist,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I make graphics, games, & websites on computers.

  <br><br> Since this Millennium Prize Problem is proposed in the perfectness of math, not in real world environments,
  <br>&nbsp;&nbsp; I'm not quite sure what the extent of solving that problem would do for mathematics.

  <br><br> Atoms move and shift, causing agitation and irregularities, so there is a known source of issue to begin with.
  <br>&nbsp;&nbsp; What if we find out messenger particles in the strong nuclear force interact with the Higgs Field?
  <br>&nbsp;&nbsp; Or that quark existence rely on quantum foam's compounding waves? 
  <br>&nbsp;&nbsp; I feel like relying on classical physics & a perfect mathematical model is an environment we'll never have in the real world.

  <br><br> But since we don't operate at the quantum level in our day-to-day.
  <br>&nbsp;&nbsp; Solving this would likely help our aircraft and space travel in the future, beyond just weather prediction modeling.


  <br><br><br><div class='procPagesAIDevBar'></div>


  <br><br> Navier-Stokes is incredibly useful math in more ways than just fluid movement through a given space.
  <br>&nbsp;&nbsp; It's time encoded into space through velocity vectors.

  <br><br> Velocity doesn't exist if a prior state never existed.
  <br>&nbsp;&nbsp; Magnitude of velocity can determine force, direction of stimuli, and how strong/impactful that stimuli was.
  <br>&nbsp;&nbsp; A single value, giving so much nuance to the environment it's in,
  <br>&nbsp;&nbsp; ... Well, single value in that it's a random vector or "direction" in space, and not much more than that.
  <br>&nbsp;&nbsp; Soooo, a lot more than a single value, but it's a single vector.
  <br>&nbsp;&nbsp; Potato, potato; data, data

  <br><br> Once you look up neighboring vectors, you can figure out turbulence, flow, limits/walls/blockages, and more.
  <br>&nbsp;&nbsp; To figure out turbulence, however, you can determine node geometry relevence in a network.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; This is actual vectors in the network, not label vectors, but the concept of turbulence can be applied to a network of any kind.
  <br>&nbsp;&nbsp; This is where I feel like Navier-Stokes could be applied to a lot of different fields, ai model heads, if we can solve the problem of turbulence in a perfect system.

  <br><br> I've said before and I'll say again,
  <br>&nbsp;&nbsp; I'm not a fan of Lighthouses in AI networks.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; If we can solve Navier-Stokes, maybe we can find inspiration to get away from this stocastic influence on training data and get into more deterministic, physics based, models of AI development.

  <br><br><div class="textFullRight">- February 14th & 22nd, 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
