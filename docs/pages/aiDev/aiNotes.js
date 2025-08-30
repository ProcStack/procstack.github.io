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
      These are my random thoughts or research on AI.

      <br>
      <span class="showOnMobile"><br>Tap the Entry Title above to open the Blog Entry List.
      <br>Or Tap the Left & Right arrow buttons to change Entry.</span>

      <br>And no, I'm not using ai to speak for me here.
      <br>These are my thoughts, how ever scattered they may be.
    </div>

      <br><br><br><div class='procPagesAIDevBar'></div>
  `,
};