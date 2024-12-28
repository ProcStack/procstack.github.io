// Page Meta Data Objects
//   Written by Kevin Edzenga; 2024
// -- -- --
//   Just a way to keep track of page meta tag updates to aid in SEO / web crawlers and social media sharing.

class PageMetaData {
  constructor( page="Default", title="", description="", keywords="", image="", url="" ){
    this.page = page;
    this.title = title;
    this.description = description;
    this.keywords = keywords;
    this.image = image;
    this.url = url;
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

// -- -- --

const initMetaData = new PageMetaData();
initMetaData.setAttribute('page', "Init");
initMetaData.setAttribute('title', "ProcStack's GitHub Portfolio");
initMetaData.setAttribute('description', 'The personal portfolio of Kevin Edzenga');
initMetaData.setAttribute('keywords', 'Kevin Edzenga, Portfolio, ProcStack, ProcStack.GitHub.io');
initMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
initMetaData.setAttribute('url', 'Init.htm');

// -- -- --

const pxlNavMetaData = new PageMetaData();
pxlNavMetaData.setAttribute('page', 'pxlNav');
pxlNavMetaData.setAttribute('title', 'pxlNav Breakdown');
pxlNavMetaData.setAttribute('description', 'Explore what pxlNav offers as a javascript player controller & room manager for Three.js');
pxlNavMetaData.setAttribute('keywords', 'pxlNav, player controller, javascript, room manager, threejs, three.js, Kevin Edzenga, ProcStack');
pxlNavMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
pxlNavMetaData.setAttribute('url', 'pxlNav.htm');

// -- -- --

const reposMetaData = new PageMetaData();
reposMetaData.setAttribute('page', 'Repos');
reposMetaData.setAttribute('title', "Proc's GitHub Repositories");
reposMetaData.setAttribute('description', "A selection of GitHub repositories by ProcStack / Kevin Edzenga");
reposMetaData.setAttribute('keywords', 'ProcStack, Kevin Edzenga, GitHub, Repositories, Portfolio');
reposMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
reposMetaData.setAttribute('url', 'Repos.htm');

// -- -- --

const projectMetaData = new PageMetaData();
projectMetaData.setAttribute('page', 'ProjectsLinks');
projectMetaData.setAttribute('title', "Proc's Projects & Socials");
projectMetaData.setAttribute('description', "See a collection of projects and links by ProcStack / Kevin Edzenga");
projectMetaData.setAttribute('keywords', 'ProcStack, Kevin Edzenga, Projects, Socials, Portfolio, Plushie, Plushies, neural network, neural networks, ESN, GRU, GAT');
projectMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
projectMetaData.setAttribute('url', 'ProjectsLinks.htm');

// -- -- --

const blogMetaData = new PageMetaData();
blogMetaData.setAttribute('page', 'Blog');
blogMetaData.setAttribute('title', "Proc's Random Ramblings");
blogMetaData.setAttribute('description', "A collection of mental vomit written by ProcStack / Kevin Edzenga");
blogMetaData.setAttribute('keywords', 'ProcStack, Kevin Edzenga, Blog, Portfolio');
blogMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
blogMetaData.setAttribute('url', 'Blog.htm');

// -- -- --

const aboutMeMetaData = new PageMetaData();
aboutMeMetaData.setAttribute('page', 'AboutMe');
aboutMeMetaData.setAttribute('title', "About Kevin Edzenga");
aboutMeMetaData.setAttribute('description', "Who am I? What do I do? Why do I do the things I do?");
aboutMeMetaData.setAttribute('keywords', 'Kevin Edzenga, About, Portfolio');
aboutMeMetaData.setAttribute('image', 'https://procstack.github.io/images/ProcStack_th.jpg');
aboutMeMetaData.setAttribute('url', 'AboutMe.htm');

// -- -- --

const PageMetaDataObjects = {
  'Init': initMetaData,
  'pxlNav': pxlNavMetaData,
  'Repos': reposMetaData,
  'ProjectsLinks': projectMetaData,
  'Blog': blogMetaData,
  'AboutMe': aboutMeMetaData
};

export { PageMetaDataObjects };