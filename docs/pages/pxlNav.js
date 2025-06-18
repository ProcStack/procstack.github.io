import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';


import { pageListingData as exploreData } from './pxlNav/explore.js';
import { pageListingData as documentationData } from './pxlNav/documentation.js';
import { pageListingData as originData } from './pxlNav/origin.js';
import { pageListingData as whatsPxlNavData } from './pxlNav/whatsPxlNav.js';


const metaDataInput = {
  'page': 'pxlNav',
  'title': 'pxlNav',
  'description': 'Explore what pxlNav offers as a javascript player controller & room manager for Three.js',
  'keywords': ['pxlNav', 'player controller', 'javascript', 'room manager', 'threejs', 'three.js', 'Kevin Edzenga', 'ProcStack'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'pxlNav.htm'
};

const pageContentObject = {
  'page' : 'pxlNav',
  'theme' : '#186d18',
  'activeNavButton' : [ 'procPagesNav_pxlNavActiveStyle' ],
  'header' : '<a href="https://github.com/ProcStack/pxlNav" target="_blank">pxlNav <span class="pxlNavVersion"></span></a>',
  'subHeader' : `<span>A javascript player controller & environment manager<span class='procPagesHideWhenThin'>&nbsp;for Three.js</span></span>`,
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitPxlNavPageStyle'],
    'before' : [ 'procPagesInnerBeforeBase', 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitPxlNavPageParentStyle', 'gitPxlNavPageScrollbarStyle', 'procPagesLayoutTripleStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'headerLine' : [ 'gitPxlNav-headerLine' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'gitPxlNav-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButtonBackground' : [ 'gitPxlNav-sectionNavButtonBackgroundStyle' ],
    'sectionNavButton' : [ 'gitPxlNav-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitPxlNav-sectionNavButtonActiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'gitPxlNav-sectionCaptionStyle' ],
    'content' : [ 'gitPxlNavPageScrollbarStyle' ],
    'media' : [ 'gitPxlNavPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfterBase', 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_pxlNavStyle',
    'footerBar' : 'pxlNavPage_footerBar'
  },
  'sections' : [
    exploreData,
    whatsPxlNavData,
    documentationData,
    originData
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
