import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "First AGI Architecture";
entryData.date = "2025-10-28";
entryData.eid = "A";
entryData.tags = ["theory","AGI","Pathway AI","architecture"];
entryData.body = `
  Happy birthday me!
  <br>&nbsp;&nbsp; 39, I'll take it.
  <br>&nbsp;&nbsp; Computer games from Commander Keen (1990) to Silk Song (2025),
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Let life keep being told through story and mythos.

  <br><br> So I'm contemplating over negative value vectors as a "malleable" space for learning.
  <br>&nbsp;&nbsp; But need to play it out a bit more first.

  <br><br><div class='procPagesAIDevBar'></div>

  <br> A month ago an interesting paper came out <span class="textName">The Dragon Hatchling</span>
  <br>&nbsp;&nbsp; Figure'd I'll learn about this Baby Dragon Hatchling, BDH, ai architecture.
  <br>&nbsp;&nbsp; September 30th 2025, Pathway AI released their paper on Arxiv.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; ( <a href="https://arxiv.org/abs/2509.26507" target="_blank">Arxiv - The Dragon Hatchling</a> )

  <br><br> If I were to say any company were close to AGI, it would be Pathway AI.
  <br>&nbsp;&nbsp; With Adrian Kosowski at the lead, with Uznanski, Choroski, Stamirowska, and Bartoszkiewicz

  <br><br> Sorry Google, you know I was rootin' for ya!
  <br>&nbsp;&nbsp; You guys are on the right path! You know this!

  <br><br> Congrats to the Pathway team on breaking the transformer model!

  <br><br><div class='procPagesAIDevBar'></div>

  <br> Why do I think this is AGI?
  <br>&nbsp;&nbsp; Because they broke the inference-deterministic model learning wall.

  <br><br> I've been on this path, and believe I have a path of my own.
  <br>&nbsp;&nbsp; So seeing this paper and their methods,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm confident my model will also exhibit similar emergent behaviors.

  <br><br> It's probably the best birthday gift I could have asked for.
  <br>&nbsp;&nbsp; Confirmation over a path I've been steadfastly pursuing.

  <br><br><div class='procPagesAIDevBar'></div>

  <br> Their architecture is quite interesting.
  <br>&nbsp;&nbsp; And if you are going to have the term <span class='textName'>Neuron Particles</span> in your paper,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I already believe your work.

  <br><br> It's fun calling AIs 'particle simulations' to someone, 
  <br>&nbsp;&nbsp; The look on their face is worth 1,000 bucks!

  <br><br> I said it before, I'll say it again.
  <br>&nbsp;&nbsp; What is the Adam Optimizer, other than a very limited Boid System?
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And what's a Boid System other than particles with rules?

  <br><br><div class="textFullRight">- October 28th 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
