const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "procstack.github.io",
  "description": "The source code for this site, procstack.github.io",
  "keywords": "procstack, procstack.github.io, javascript, pxlNav, pages system, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/procstack.github.io.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : 'procstack.github.io.htm',
  'name' : 'procstack.github.io<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: this.</span>',
  'title' : 'procstack.github.io',
  'lastModified' : '2025-03-24',
  'schemaData' : shemaData,
  'description' : 'The source code for this site, procstack.github.io',
  'keywords' : 'procstack, procstack.github.io, javascript, pxlNav, pages system, personal projects',
  'navGroup' : 'Repos to Check Out',
  'navStyle' : ['hideOnMobile'],
  'media' : [],
  'content' : `
    <a href='https://github.com/ProcStack/procstack.github.io' class='procPagesRepoLinkStyle' target='_blank'>procstack.github.io github repository</a> <span class="textDrinkMeAlice textItalic">2024-2025</span>
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">JavaScript</span></span>
    <div class="pppHBar"></div>
    
    <span class='textNudge'>Eyyyyy, check out this sites code!</span>
    <br>&nbsp;&nbsp; It mostly has examples of pxlNav rooms and the page & content system I wrote

    <br>
    <br>
    <br>It's funny, out of all the projects I can bootstrap together with my personal boilerplates over the years,
    <br>&nbsp;&nbsp; I never built a single-page site system before this one.

    <br>
    <br>Maybe I should write a 'server-side' pre-render for this pages system,
    <br>&nbsp;&nbsp; Turn this into a proper framework for others to use! haha

    <br>
    <br>Update : I did do that ...
    <br>&nbsp;&nbsp; It helps a ton to quickly render the dynamically generated pages into static pages,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Then build out the sitemap.xml and llms.txt + htm.md files for SEO and LLM crawling.
    <br>&nbsp;&nbsp; There are still some bugs in it, but I'm working on fixing them.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; See the <span class="textName">./packing/renderStaticPages.mjs</span> script for more details.

    <br>
    <br>I like vanilla javascript too much....
    <br>&nbsp;&nbsp; Its a detriment for getting a React/Next job, but I can't help it!

    <br>
    <br>So soooo many years using JS on its own,
    <br>&nbsp;&nbsp; I started messing with it in 1996 for my <span class='textBump'>GeoCities</span> <span class='textName'>Dragon Ball Z</span> fan website,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Making an image gallery for my first script from an example, age 10.
    <br>&nbsp;&nbsp; So environments like React.js/Next.js, Svelte, Angular, etc. don't feel as fun as just writing it out myself, dang it!
    <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalic">Ragga fragga, get off my lawn ya dang kids!</span>
    <br>
    <br>
  `,
};