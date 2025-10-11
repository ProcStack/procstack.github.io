import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';

import { pageListingData as cowData } from './projects/currentsofwar.js';
import { pageListingData as psghioData } from './projects/procstackgithubio.js';
import { pageListingData as procPromoData } from './projects/procPromo.js';
import { pageListingData as pxlVisData } from './projects/pxlVisualizer.js';
import { pageListingData as pxlmancerData } from './projects/pxlmancer.js';
import { pageListingData as pxlTextGenData } from './projects/pxlTextGenerator.js';

/*import { pageListingData as metalAsylumData } from './projects/Metal-Asylum.js';*/
import { pageListingData as neurousNetData } from './projects/NeurousNet.js';
import { pageListingData as pxlCamData } from './projects/pxlCam.js';
import { pageListingData as shadertoyData } from './projects/shadertoy.js';
import { pageListingData as dwitterData } from './projects/dwitter.js';
import { pageListingData as miscData } from './projects/misc.js';


const metaDataInput = {
  'page': 'ProjectsLinks',
  'title': "Projects & Links",
  'description': "See a collection of projects and links by ProcStack / Kevin Edzenga",
  'keywords': ['ProcStack', 'Kevin Edzenga', 'Projects', 'Socials', 'Portfolio', 'Plushie', 'Plushies', 'neural network', 'neural networks', 'ESN', 'GRU', 'GAT'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'ProjectsLinks.htm'
};

const pageContentObject = {
  'page' : 'ProjectsLinks',
  'header' : 'My Repos / Projects / Socials',
  'theme' : '#184d76',
  'activeNavButton' : [ 'procPagesNav_projectsActiveStyle' ],
  'subHeader' : '',
  'footer' : `
    <div class="socialsLinkStyle">
      <span class="procPagesHeaderNoPadStyle">Socials-</span>
      <a href='https://www.youtube.com/@trancorwd' class="textBump" target='_blank'>YouTube</a>
      <a href='https://instagram.com/trancor.diy' class="textBump" target='_blank'>Instagram</a>
      <a href='https://github.com/ProcStack' class="textBump" target='_blank'>GitHub</a>
    </div>
  `,
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitProjectsPageStyle'],
    'before' : [ 'procPagesInnerBeforeBase', 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitProjectsPageParentStyle', 'procPagesLayoutTripleStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'headerLine' : [ 'gitProjectsPage-headerLine' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'gitProjectsPage-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButtonBackground' : [ 'gitProjectsPage-sectionNavButtonBackgroundStyle' ],
    'sectionNavButton' : [ 'gitProjectsPage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitProjectsPage-sectionNavButtonActiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'gitProjectsPage-sectionCaptionStyle' ],
    'content' : [ 'gitProjectsPageScrollbarStyle' ],
    'media' : [ 'gitProjectsPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfterBase', 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_projectsStyle',
    'footerBar' : 'projectsPage_footerBar'
  },
  'navGroupOrder' : [
    "Repos to Check Out",
    "Personal Projects",
    "The One'Offs"
  ],
  'initialSection' : 2,
  'sections' : [
        psghioData,

        {'type':'spacer','height':'0px', 'style':['hideOnMobile']},

        cowData,
        procPromoData,
        pxlmancerData,
        pxlTextGenData,

        /* metalAsylumData, */
        neurousNetData,
        pxlCamData,
        pxlVisData,

        {'type':'spacer', 'style':['hideOnMobile']},

        shadertoyData,
        dwitterData,
        
        {'type':'spacer', 'style':['hideOnMobile']},

        miscData
  ]
}
// -- -- --
const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
