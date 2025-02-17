import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';

import { pageListingData as aiDevData } from './aboutMe/aidev.js';
import { pageListingData as filmWorkData } from './aboutMe/filmWork.js';
import { pageListingData as plushiesData } from './aboutMe/plushies.js';
import { pageListingData as whatAmIData } from './aboutMe/whatAmI.js';

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
  'theme' : '#656565',
  'activeNavButton' : [ 'procPagesNav_aboutMeActiveStyle' ],
  'layout' : 'vertical',
  'header' : 'About Me',
  'subHeader' : '',
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitAboutMePageStyle'],
    'before' : [ 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitAboutMePageParentStyle', 'procPagesLockVertical' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'gitAboutMePage-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButton' : [ 'gitAboutMePage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitAboutMePage-sectionNavButtonActiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'gitAboutMePage-sectionCaptionStyle' ],
    'content' : [ 'procPagesScrollbarStyle' ],
    'media' : [ 'procPagesScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_aboutMeStyle',
    'footerBar' : 'aboutMePage_footerBar'
  },
  'sections' : [
    whatAmIData,
    filmWorkData,
    plushiesData,
    aiDevData
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
