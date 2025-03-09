// Page Meta Data Objects
//   Written by Kevin Edzenga; 2024
// -- -- --
//   Just a way to keep track of page meta tag updates to aid in SEO / web crawlers and social media sharing.

export class PageMetaData {
  constructor( metaOptions={} ){
    this.page = metaOptions.page || "Default";
    this.title = metaOptions.title || this.page;
    this.description = metaOptions.description || '';
    this.keywords = metaOptions.keywords || '';
    this.image = metaOptions.image || '';
    this.url = metaOptions.url || '';
    this.metaTagList = {
      'title':['title', 'og:title', 'twitter:title'],
      'description':['description', 'og:description', 'twitter:description'],
      'keywords':['keywords'],
      'image':['og:image', 'twitter:image'],
      'url':['og:url']
    }
  }
  setAttribute( attribute, value ){
    attribute = attribute.toLowerCase();
    if (this.hasOwnProperty(attribute)) {
      this[attribute] = value;
    }
  }
}
