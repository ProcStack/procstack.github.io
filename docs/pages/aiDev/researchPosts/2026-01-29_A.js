import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Rubber Bands";
entryData.date = "2026-01-29";
entryData.eid = "A";
entryData.tags = ["theory","architecture","projection"];
entryData.body = `
  One of the interesting things about rubber bands,
  <br>&nbsp;&nbsp; The way the structure is tangled on itself when at rest,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Then when stretched, It's untangled, while holding its connections.


  <br><br><div class="textFullRight">- January 29th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
