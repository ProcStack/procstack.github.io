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
  'subHeader' : `A javascript player controller & room manager for Three.js
    <br><div class="gitPagePxlNavShortcuts">
      <span>Hit <span class="textBoldBox">P</span> on your keyboard to pause the background.</span>
      <span>Hit <span class="textBoldBox">Y</span> to open the <span class="textNudge">GLSL Shader Editor</span>.</span>
    </div>
  `,
  'pageStyles' : ['gitPageContentStyle', 'gitPxlNavPageStyle'],
  'styleOverrides' : {
    'gitPagesNavBlock' : 'gitPageNav_pxlNavStyle',
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
