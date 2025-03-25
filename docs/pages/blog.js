import { PageMetaData } from '../js/procPages/PageMetaData.js';
import { ProcPage } from '../js/procPages/ProcPage.js';

const metaDataInput = {
  'page': 'Blog',
  'title': "ProcStack's Blog",
  'description': "ProcStack's Blog",
  'keywords': ['Kevin Edzenga', 'Blog', 'ProcStack', 'ProcStack.GitHub.io'],
  'image': 'https://procstack.github.io/images/ProcStack_th.jpg',
  'url': 'Blog.htm'
};

const pageContentObject = {
  'visible' : false,
  'page' : 'Blog',
  'theme' : '#3a1c69',
  'activeNavButton' : [ 'procPagesNav_blogActiveStyle' ],
  'header' : '',
  'subHeader' : '',
  'pageStyles' : {
    'block' : ['procPagesContentStyle', 'gitBlogPageStyle'],
    'before' : [ 'procPagesInnerBeforeBase', 'procPagesInnerBefore' ],
    'parent' : [ 'procPagesParentStyle', 'gitBlogPageParentStyle', 'procPagesLayoutTripleStyle' ],
    'header' : [ 'procPagesHeaderStyle' ],
    'headerLine' : [ 'gitBlogPage-headerLine' ],
    'subHeader' : [],
    'inner' : [],
    'sectionHeader' : [],
    'sectionNavList' : [ 'gitBlogPage-sectionNavListStyle' ],
    'sectionNav' : [],
    'sectionNavButton' : [ 'gitBlogPage-sectionNavButtonStyle' ],
    'sectionNavButtonActive' : [ 'gitBlogPage-sectionNavButtonActiveStyle' ],
    'sectionContent' : [],
    'sectionMedia' : [],
    'sectionCaption' : [ 'gitBlogPage-sectionCaptionStyle' ],
    'content' : [ 'gitBlogPageScrollbarStyle' ],
    'media' : [ 'gitBlogPageScrollbarStyle' ],
    'after' : [ 'procPagesInnerAfterBase', 'procPagesInnerAfter' ]
  },
  'styleOverrides' : {
    'procPagesNavBlock' : 'procPagesNav_blogStyle',
    'footerBar' : 'blogPage_footerBar'
  },
  'sections' : [
    {
      'htmlName' : "Blog.htm",
      'name' : 'Blog',
      'content' : `
<div id="blogEntryListing" class="blogEntryListStyle"></div>
<div id="blogEntryContent" class="blogContentStyle"></div>
<br><br>
      `
    }
  ]
}

// -- -- --

const metaData = new PageMetaData( metaDataInput );
pageContentObject['metaData'] = metaData;
export const pageData = new ProcPage( pageContentObject );
