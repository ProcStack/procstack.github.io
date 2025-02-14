import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';

import { pageListingData as psghioData } from './projects/procstackgithubio.js';
import { pageListingData as procPromoData } from './projects/procPromo.js';
import { pageListingData as pxlVisData } from './projects/pxlVisualizer.js';
import { pageListingData as pxlTextGenData } from './projects/pxlTextGenerator.js';

import { pageListingData as metalAsylumData } from './projects/Metal-Asylum.js';
import { pageListingData as pxlmancerData } from './projects/pxlmancer.js';
import { pageListingData as neurousNetData } from './projects/neurousNet.js';
import { pageListingData as pxlCamData } from './projects/pxlCam.js';
import { pageListingData as shadertoyData } from './projects/shadertoy.js';
import { pageListingData as dwitterData } from './projects/dwitter.js';


const metaDataInput = {
  'page': 'ProjectsLinks',
  'title': "Proc's Projects & Socials",
  'description': "See a collection of projects and links by ProcStack / Kevin Edzenga",
  'keywords': ['ProcStack', 'Kevin Edzenga', 'Projects', 'Socials', 'Portfolio', 'Plushie', 'Plushies', 'neural network', 'neural networks', 'ESN', 'GRU', 'GAT'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'ProjectsLinks.htm'
};

const pageContentObject = {
  'page' : 'ProjectsLinks',
  'title' : 'Repos / Projects / Socials',
  'header' : 'Repos / Projects / Socials',
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
    'before' : [ 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitProjectsPageParentStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'subHeader' : [ '' ],
    'inner' : [ 'procPagesLayoutTripleStyle' ],
    'sectionHeader' : [ '' ],
    'sectionNav' : [ '' ],
    'sectionNavButton' : [ 'gitProjectsPage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitProjectsPage-sectionNavButtonAvtiveStyle' ],
    'sectionContent' : [ '' ],
    'sectionMedia' : [ '' ],
    'content' : [ 'gitProjectsPageScrollbarStyle' ],
    'media' : [ 'gitProjectsPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfter' ]
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
  'initialSection' : 1,
  'sections' : [
        psghioData,
        procPromoData,
        pxlVisData,
        pxlTextGenData,

        metalAsylumData,
        pxlmancerData,
        neurousNetData,
        pxlCamData,

        shadertoyData,
        dwitterData
  ]
}
// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
