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
  'visible' : false,
  'page' : 'MakingOf',
  'title' : 'Making Of ProcStack.GitHub.io',
  'theme' : '#3d4297',
  'header' : 'Making Of...',
  'subHeader' : '',
  'pageStyles' : {
    'block' : [ 'procPagesContentStyle', 'gitReposPageStyle' ],
    'before' : [ 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitReposPageParentStyle', 'procPagesLayoutTripleStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'gitReposPage-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButton' : [ 'gitReposPage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitReposPage-sectionNavButtonAvtiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'gitReposPage-sectionCaptionStyle' ],
    'content' : [ 'gitReposPageScrollbarStyle' ],
    'media' : [ 'gitReposPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_reposStyle',
    'footerBar' : 'repoPage_footerBar'
  },
  'sections' : [
    {
      'name' : 'Making of ProcStack.GitHub.io',
      'media' : [
        {
          'type' : 'video',
          'src' : '../pages/makingOf/images/logTextureGrid.webm',
          'alt' : 'Logs made with a custom Texturing Houdini tool ',
          'style' : 'procPagesImageStyle',
        },
        {
          'type' : 'image',
          'src' : '../pages/makingOf/images/stressTesting.jpg',
          'alt' : 'Stress testing rabbit druid rigs',
          'style' : 'procPagesImageStyle',
          'caption' : ["Always stress test your rigs"]
        },
        {
          'type' : 'image',
          'src' : '../pages/makingOf/images/rabbitDruid_pokeBarrel.jpg',
          'alt' : 'Druid rabbit pokin dah barrel',
          'style' : 'procPagesImageStyle',
          'caption' : ["POKE DAH BARREL!"]
        },
      ],
      'content' : 'stand in'
    },
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
