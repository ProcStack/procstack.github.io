import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Iterative Constructs";
entryData.date = "2026-03-15";
entryData.eid = "A";
entryData.tags = [];
entryData.body = `
  I've been pondering over what makes a social networks algorithm and the 

  <br><br><div class="textFullRight">- March 15th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
