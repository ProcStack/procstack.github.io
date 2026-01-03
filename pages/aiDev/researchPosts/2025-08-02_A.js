import { baseEntryStruct, blogEntry, ENTRY_MARK_ENUM } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Neural Bundles";
entryData.marked = ENTRY_MARK_ENUM.FEATURED;
entryData.date = "2025-08-02";
entryData.eid = "A";
entryData.tags = ["research","brain","structure"];
entryData.body = `
  I've been looking into neural bundles in the brain.  There is an implicit "delay" in the flow of information that I'm interested in.
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

  <br><br><div class="textFullRight">- August 2nd 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
