import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';

import { pageListingData as aiDevData } from './aboutMe/aiDev.js';
import { pageListingData as plushiesData } from './aboutMe/plushies.js';
import { pageListingData as whoAmIData } from './aboutMe/whoAmI.js';

const metaDataInput = {
  'page': 'AboutMe',
  'title': "About Kevin Edzenga",
  'description': "Who am I? What do I do? Why do I do the things I do?",
  'keywords': ['Kevin Edzenga', 'About', 'Portfolio'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'AboutMe.htm'
};


const pageContentObject = {
  'page' : 'AboutMe',
  'title' : 'About Me; Kevin Edzenga',
  'header' : 'About Me',
  'subHeader' : '',
  'pageStyles' : ['gitPageContentStyle', 'gitAboutMePageStyle'],
  'styleOverrides' : {
    'gitPagesNavBlock' : 'gitPageNav_aboutMeStyle',
    'footerBar' : 'aboutMePage_footerBar'
  },
  'sections' : [
    whoAmIData,
    plushiesData,
    aiDevData
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
