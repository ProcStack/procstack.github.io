import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';

const metaDataInput = {
  'page': 'MakingOf',
  'title': "The Making of ProcStack's GitHub Portfolio",
  'description': "The making of 'procstack.github.io' by Kevin Edzenga",
  'keywords': ['ProcStack', 'Kevin Edzenga', 'Making Of', 'Portfolio', 'GitHub', 'Houdini', 'Maya', 'Photoshop', 'Web Development', 'Web', 'JavaScript', 'HTML', 'CSS'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'MakingOf.htm'
};

const pageContentObject = {
  'page' : 'MakingOf',
  'title' : 'Making Of ProcStack.GitHub.io',
  'header' : 'Making Of...',
  'subHeader' : '',
  'pageStyles' : ['gitPageContentStyle', 'gitReposPageStyle'],
  'styleOverrides' : {
    'gitPagesNavBlock' : 'gitPageNav_reposStyle',
    'footerBar' : 'repoPage_footerBar'
  },
  'sections' : [
    {
      'name' : 'stand in',
      'media' : [],
      'content' : 'stand in'
    },
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
