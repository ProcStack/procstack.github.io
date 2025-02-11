import { PageMetaData } from '../js/pxlPages/PageMetaData.js';
import { ProcPage } from '../js/pxlPages/ProcPage.js';

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
  'title' : 'Blog',
  'header' : '',
  'subHeader' : '',
  'pageStyles' : ['gitPageContentStyle', 'gitBlogPageStyle'],
  'styleOverrides' : {
    'gitPagesNavBlock' : 'gitPageNav_blogStyle',
    'footerBar' : 'blogPage_footerBar'
  },
  'sections' : [
    {
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
