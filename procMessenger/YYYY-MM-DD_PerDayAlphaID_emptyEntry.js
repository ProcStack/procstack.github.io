import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Hypnagogic Hallucinations";
entryData.date = "2026-05-04";
entryData.eid = "A";
entryData.tags = ["theory", "empty blog entry", "other key-phrases", "keywords"];
entryData.body = `
  First line of Blog Entry A
  <br>&nbsp;&nbsp; Second line, started with a non-breaking space to indent the paragraph.
  <br>&nbsp;&nbsp; Entry 'A' is the first entry of May 4th, 2026.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Related ideas to the prior line is indented further, with two non-breaking spaces.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; As a new entry for the day would be 'B', 'C', and so on.

  <br><br> New paragraphs always start with a double-line break in between.
  <br>&nbsp;&nbsp; With the same indentation rules as above.

  <br><br> As an idea in a section of the blog entry ends,
  <br>&nbsp;&nbsp; A 'procPagesAIDevBar' classed div visually displays a horizontal line to separate sections of the blog entry.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> For 'entryData.tags',
  <br>&nbsp;&nbsp; The first keyword is always the top level, high level, category,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Ussually either 'theory' or 'development' for my blog entries so far,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 'theory' should be used by default.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> The end of the entry always displays the date of the entry, aligned to the right, with a class of 'textFullRight' to align it to the right.

  <br><br><div class="textFullRight">- May 5th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
