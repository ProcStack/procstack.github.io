import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Stack Crunching";
entryData.date = "2025-05";
entryData.eid = "A";
entryData.tags = ["esn","memory","research"];
entryData.body = `
  I've begun on the core of the AI, as of May 24th, 2025.
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
  
  <br><br><div class="textFullRight">- May 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
