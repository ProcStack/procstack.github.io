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
  'theme' : '#186d18',
  'activeNavButton' : [ 'procPagesNav_pxlNavActiveStyle' ],
  'header' : '<a href="https://github.com/ProcStack/pxlNav" target="_blank">pxlNav <span class="pxlNavVersion"></span></a>',
  'subHeader' : `<span>A <span class='procPagesHideWhenThin'>javascript </span>player controller & room manager<span class='procPagesHideWhenThin'>&nbsp;for Three.js</span></span>`,
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitPxlNavPageStyle'],
    'before' : [ 'procPagesInnerBefore' ],
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
