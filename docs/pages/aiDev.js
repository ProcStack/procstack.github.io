import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';

import { pageListingData as aiIntroData } from './aiDev/aiIntro.js';
import { pageListingData as gatLanguageData } from './aiDev/gatLanguageInterp.js';
import { pageListingData as esnMotionPredictData } from './aiDev/esnMotionPredict.js';
import { pageListingData as esrganUpresserData } from './aiDev/esrganUpresser.js';
import { pageListingData as gnnExplorationData } from './aiDev/gnnExploration.js';
import { pageListingData as aiNotesData } from './aiDev/aiNotes.js';

const metaDataInput = {
  'page': 'AIDev',
  'title': "AI Development - ProcStack",
  'description': "AI development & research by ProcStack, including work on Graph Attention Networks (GAT), Echo State Networks (ESN), and other AI structures.",
  'keywords': ['AI', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Graph Attention Network', 'GAT', 'Echo State Network', 'ESN', 'Neural Networks', 'AI Development', 'ProcStack', 'Kevin Edzenga'],
  'image': 'https://procstack.github.io/images/ProcStack_th.webp',
  'url': 'AIDev.htm'
};

const pageContentObject = {
  'page' : 'AIDev',
  'theme' : '#3d4297',
  'activeNavButton' : [ 'procPagesNav_aiDevActiveStyle' ],
  'header' : 'AI Development',
  'subHeader' : '',
  'pageStyles' : {
    'block' : [ 'procPagesContentStyle', 'aiDevPageStyle' ],
    'before' : [ 'procPagesInnerBeforeBase', 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'procPagesLayoutTripleStyle', 'aiDevPageParentStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'headerLine' : [ 'aiDevPage-headerLine' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'aiDevPage-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButton' : [ 'aiDevPage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'aiDevPage-sectionNavButtonActiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'aiDevPage-sectionCaptionStyle' ],
    'content' : [ 'aiDevPageScrollbarStyle' ],
    'media' : [ 'aiDevPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfterBase', 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_aiDevStyle',
    'footerBar' : 'aiDevPage_footerBar'
  },
  'sections' : [
    aiIntroData,
    {'type':'spacer'},
    esrganUpresserData,
    esnMotionPredictData,
    gnnExplorationData,
    gatLanguageData,
    {'type':'spacer','height':'10px'},
    aiNotesData
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
