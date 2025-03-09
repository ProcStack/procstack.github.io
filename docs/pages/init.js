import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';

const metaDataInput = {
  'page': 'Init',
  'title': "ProcStack's GitHub Portfolio",
  'description': 'The personal portfolio of Kevin Edzenga',
  'keywords': ['Kevin Edzenga', 'Portfolio', 'ProcStack', 'ProcStack.GitHub.io'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'Init.htm'
};

const pageContentObject = {
  'page' : 'Init',
  'title' : 'Welcome.',
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
      'name' : '',
      'content' : `
<span class="procPagesHeaderStyle initHeaderStyle">Ahoi there!</span>
<div class="initPage_hBarStyle">&nbsp;</div>
<br>I'm <span class="textNudge">ProcStack</span>, <span class="textNudge">Trancor</span>, and <span class="textNudge">Kevin Edzenga</span>,
<br>&nbsp;&nbsp;Which ever ya feel like calling me!

<br><br><span class="textNudge">Trancor</span> is my pre-rendered visual graphics & diy builds
<br><span class="textNudge">ProcStack</span> is my coding & real-time graphics creations <span class="textDrinkMeAlice">('Trancor' was already taken on github)</span>
<br><span class="textNudge">Kevin Edzenga</span> is just ... Me.

<br><br>Everything shown here is my personal work;
<br>&nbsp;&nbsp;This site's code to it's 3d modeling, texturing, shaders, even <span class="textNudge">pxlNav</span> itself!
<br><span class="textNudge">Everything the light touches!</span> ...sorta.
<br><span class="textDrinkMeAlice">&nbsp;&nbsp;I didn't make Three.js, certainly.</span>
<br><br>
      `
    }
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
