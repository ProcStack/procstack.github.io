import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "My Training Data";
entryData.date = "2025-02";
entryData.eid = "A";
entryData.tags = ["training", "data"];
entryData.body = `
  If you couldn't tell, I'm training my AIs on my own works.
  <br>&nbsp;&nbsp; A personally made AI trained on personally made images / videos / photos / code / writing.
  <br>&nbsp;&nbsp; That means I can copyright my generations, right?
  <br>&nbsp;&nbsp;&nbsp;&nbsp; If I made every aspect of the AI & training data?
  <br>
  <br>
  <div class="textFullRight">- February 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
