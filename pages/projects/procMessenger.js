const shcemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "procMessenger",
  "description": "A photo filter camera web app. Use on phone!!",
  "keywords": "procMessenger, camera, photo filter, web app, javascript, three.js, glsl es, personal projects",
  "url": "https://procstack.github.io/ProjectsLinks/procMessenger.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

export const pageListingData = {
  'htmlName' : "procMessenger.htm",
  'name' : 'procMessenger<span class="hideOnMobile textDrinkMeAlice textBottom">&nbsp;:: Client Control</span>',
  'title' : 'procMessenger',
  'lastModified' : '2026-05-18',
  'schemaData' : shcemaData,
  'description' : 'A photo filter camera web app. Use on phone!!',
  'keywords' : 'procMessenger, camera, photo filter, web app, javascript, three.js, glsl es, personal projects',
  'navGroup' : 'Personal Projects',
  'media' : [
    {
      'type' : 'image',
      'src' : '../pages/projects/images/procMessenger_04_apkBuild.webp',
      'alt' : 'Funky tree bark',
      'style' : ['procPagesImageStyle','imgLimitWidth60'],
      'caption' : [ "Connect to Client scripts & programs from your Phone;",
                    "Run scripts, such as the mobile app apk build script",
                    "Then download the build through the file browser in the mobile app!" ]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/procMessenger_01-02_llmGatherResearch.webp',
      'alt' : 'Local LLM Gather Research',
      'style' : ['procPagesImageStyle','imgLimitWidth60'],
      'caption' : [ "Gather Research refined and reviewed by Local-network LLM",
                    "Then have a conversation about the results, including its own take on the info." ]
    },
    {
      'type' : 'image',
      'src' : '../pages/projects/images/procMessenger_03_branchShredder.webp',
      'alt' : 'Fungi on a log',
      'style' : ['procPagesImageStyle','imgLimitWidth60'],
      'caption' : [ "Access a non-linear story builder <span class='textName'><a href='https://github.com/ProcStack/branchShredder' target='_blank'>BranchShredder</a></span>",
                    "Write stories or build networks of ideas and concepts in a graph view!",
                    "All controllable from your phone"]
    }
  ],
  'content' : `
    <div class="procPagesProjectsHeaderStyle"><a href='https://github.com/ProcStack/procMessenger' class="textBump" target='_blank'>procMessenger</a> <span class="textDrinkMeAlice textItalic">2020</span></div>
    <span class="textBump">Home Network Device-to-Device Messaging System</span>
    <br>&nbsp;&nbsp; With direct control from a mobile app on your phone
    <br> <span class="textShrink textItalic ">Languages - <span class="textBold textName">Python, JavaScript, nodejs</span></span>
    
    <br><br> <span class="textNudge"> Server + Client Network Messaging to perform taks;
    <br>&nbsp;&nbsp; Allowing mobile app controlled clients on the network </span> 
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Using a custom Protocol for WebSocket connected Clients </span>

    <br><br> <span class="textNudge textItalic"> <span class="textNudge">Local-LLM</span> or <span class="textNudge">API-Key LLM</span> AI Integration
    <br>&nbsp;&nbsp; With allowed access to <span class="textBump">Whitelisted</span> functions,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Chat, Research, & Automation</span>

    <br><br> <span class="textItalic"> <span class="textName textNudge">procMessenger</span> is a <span class="textNudge">Work-in-Progress!</span> </span>
    
    <br> <div class="pppHBar"></div>
  
    <br><div class="procPagesProjectsDescriptionStyle">

      So, ya know how OpenClaw is this AI system that takes over your computer and deletes emails and reads private-keys and leaks them to the internet?
      <br>&nbsp;&nbsp; Yeah, lets not do that.

    <br><div class="pppHBar"></div>

      Let's have direct control through a Whitelist of functions and clients the LLM can talk to.
      <br>&nbsp;&nbsp; Being restricted by what the function is allowed to do,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; Before being given to the LLM to use & control.
      
      <br><br> Let's play this security mess safely,
      
      <br><br> Let's play it with direct control from your phone to a local network with no access outside of the network.

    <br><br> <div class="pppHBar"></div>

      Oh, you want the AI to gather research online?

      <br><br> Let's make sure it's through a script that can make API calls, rather than an AI running rampant on its own...

    <br><br> <div class="pppHBar"></div>

      <br> Baby with a freaking hand grenade,
      <br>&nbsp;&nbsp; That's what OpenClaw is....

    <br><br> <div class="pppHBar"></div>

      <br> <span class="textItalic"> Again, <span class="textName textNudge">procMessenger</span> is a Work-in-Progress!
      <br>&nbsp;&nbsp; The Mobile App's GUI needs a major facelift... </span>

    <br><br> <div class="pppHBar"></div>

      But I have a website & file similarity node graph indexer client now
      <br>&nbsp;&nbsp; (smart files on harddrive & website search)

      <br><br> Story editor with interactive control, <span class='textNudge'><a href='https://github.com/ProcStack/branchShredder' target='_blank'>BranchShredder</a></span>
      <br>&nbsp;&nbsp; Sending Tap, Pinch-Zoom, and Drag messages to the running program 
      
      <br><br> General LLM chat, and any whitelisted python script you want! 

      <br><br> 
      
      <br>
    </div>
  `,
};