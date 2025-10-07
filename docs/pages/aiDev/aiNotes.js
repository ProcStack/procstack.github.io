import { blogEntries } from './researchPosts/index.js';

const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Development Notes",
  "description": "AI development & research by ProcStack, including work on Graph Attention Networks (GAT), Echo State Networks (ESN), and other AI structures.",
  "keywords": "AI, Artificial Intelligence, Machine Learning, Deep Learning, Graph Attention Network, GAT, Echo State Network, ESN, Neural Networks, AI Development",
  "url": "https://procstack.github.io/AIDev/aiNotes.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};


export const pageListingData = {
  'htmlName' : "aiNotes.htm",
  'name' : 'Notes & Research',
  'title' : 'Notes & Research',
  'lastModified' : '2025-08-29',
  'features' : {
    'blogManager': {
      'entries' : blogEntries,
      'listingContainer' : 'blogEntryListing',
      'entryContainer' : 'blogEntryContent',
      'spacerStyle' : [ 'procPagesAIDevHeaderSpacer' ],
      'contentStyle' : ['aiDevPage-blogContentStyle'],
      'order': 'descending', // 'ascending' or 'descending'
      'loopBack': false // Loop when Prev < 0 or Next > entry count
    }
  },
  'schemaData' : shemaData,
  'media' : [],
  'contentStyle' : ['aiDevPage-blogStyle'],
  'content' : `
    <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle blogTempContentStyle'>
      <span class='textBoost'>I'm an armchair AI researcher at best!</span>
      <br><span class='textBoost'>I'm not an authority on ai!!</span>
      <br>These are my theories / thoughts / research on AI.

      <br>
      <span class="showOnMobile"><br>Tap the Entry Title above to open the Blog Entry List.</span>

      <br>No LLMs here.
      <br>These are my own rambly-ass thoughts.

      <br>-- -- --
      <br>It turns out I write Dialectically, rather than Atomicly.
      <br>So, the ideas I write about build on each other.
      <br>They aren't standalone concepts per 'paragraph'.
      <br>...
      <br>Once you know the issue, course corrections can be made.
    </div>

      <br><br><br><div class='procPagesAIDevBar'></div>
  `,
};