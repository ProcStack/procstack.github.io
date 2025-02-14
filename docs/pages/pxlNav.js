import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';


import { pageListingData as exploreData } from './pxlNav/explore.js';
import { pageListingData as originData } from './pxlNav/origin.js';
import { pageListingData as whatsPxlNavData } from './pxlNav/whatsPxlNav.js';


const metaDataInput = {
  'page': 'pxlNav',
  'title': 'pxlNav Breakdown',
  'description': 'Explore what pxlNav offers as a javascript player controller & room manager for Three.js',
  'keywords': ['pxlNav', 'player controller', 'javascript', 'room manager', 'threejs', 'three.js', 'Kevin Edzenga', 'ProcStack'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'pxlNav.htm'
};

const pageContentObject = {
  'page' : 'pxlNav',
  'title' : 'pxlNav Breakdown',
  'header' : '<a href="https://github.com/ProcStack/pxlNav" target="_blank">pxlNav <span class="pxlNavVersion"></span></a>',
  'subHeader' : `<span>A <span class='procPagesHideWhenThin'>javascript </span>player controller & room manager<span class='procPagesHideWhenThin'>&nbsp;for Three.js</span></span>
    <br><div class="procPagesPxlNavShortcuts procPagesHideWhenThin">
      <span>Hit <span class="textBoldBox">P</span> to pause the background</span>
      <span>Hit <span class="textBoldBox">Y</span> to open the <span class="textNudge">Shader Editor</span></span>
    </div>
  `,
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitPxlNavPageStyle'],
    'before' : [ 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitPxlNavPageParentStyle', 'gitPxlNavPageScrollbarStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'subHeader' : [ '' ],
    'inner' : [ 'procPagesLayoutTripleStyle' ],
    'sectionHeader' : [ '' ],
    'sectionNav' : [ '' ],
    'sectionNavButton' : [ 'gitPxlNav-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitPxlNav-sectionNavButtonAvtiveStyle' ],
    'sectionContent' : [ '' ],
    'sectionMedia' : [ '' ],
    'content' : [ 'gitPxlNavPageScrollbarStyle' ],
    'media' : [ 'gitPxlNavPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_pxlNavStyle',
    'footerBar' : 'pxlNavPage_footerBar'
  },
  'sections' : [
    exploreData,
    whatsPxlNavData,
    originData
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
