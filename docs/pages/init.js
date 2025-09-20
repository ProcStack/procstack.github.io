import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';

const metaDataInput = {
  'page': 'Init',
  'title': "ProcStack's GitHub Portfolio",
  'description': 'The personal portfolio of Kevin Edzenga',
  'keywords': ['Kevin Edzenga', 'Portfolio', 'ProcStack', 'ProcStack.GitHub.io'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'Init.htm',
  'schemaData': {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "jobTitle": "Technical Artist",
    "email": "Trancor@Metal-Asylum.net",
    "url": "https://procstack.github.io",
    "description": "Kevin Edzenga's github repo portfolio; showing technical art, 3D modeling, rendering, and creative tech projects."
  }
};

const pageContentObject = {
  'page' : 'Init',
  'theme' : '#6b420c',
  'activeNavButton' : [ 'procPagesNav_initActiveStyle' ],
  'layout' : 'single',
  'extras' : { 
    'before-hooks' : true, 
    'after-hooks' : true 
  },
  'header' : '',
  'subHeader' : '',
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitInitPageStyle'],
    'parent' : [ 'procPagesParentStyle', 'gitInitPageParentStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'inner' : [],
    'content' : [ 'procPagesScrollbarStyle', 'gitInitPageWidthStyle' ],
    'media' : [ 'procPagesScrollbarStyle' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_initStyle',
    'footerBar' : 'initPage_footerBar'
  },
  'sections' : [
    {
      'name' : 'Init.',
      'title' : 'Init.',
      'lastModified' : '2025-06-19',
      'content' : `
<span class="procPagesHeaderStyle initHeaderStyle">Ahoi there!</span>
<div class="initPage_hBarStyle">&nbsp;</div>
I'm <span class="textNudge">ProcStack</span>, <span class="textNudge">Trancor</span>, & <span class="textNudge">Kevin Edzenga</span>,
<br>&nbsp;&nbsp;Which ever ya feel like calling me!

<div class='textSpacer'></div>

I'm a technical artist with years of film, XR, & immersive experience.
<br>&nbsp;&nbsp;This site is a show of my work.

<div class='textSpacer'></div>

<span class="textNudge">Trancor</span> is my pre-rendered graphics & diy builds,
<br><span class="textNudge">ProcStack</span> is coding & real-time graphics creations <span class="textDrinkMeAlice">('Trancor' was taken on github)</span>,
<br><span class="textNudge">Kevin Edzenga</span> is just ... Me.
<br><br>
      `
    }
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
