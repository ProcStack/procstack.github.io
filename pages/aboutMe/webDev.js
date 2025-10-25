const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "What am I?",
  "description": "A little about me, my skills, and what I do.",
  "keywords": "about me, personal projects, skills, web development, javascript, houdini, AI development",
  "url": "https://procstack.github.io/AboutMe/What_am_I.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};

// Run a check to see if the `Nginx` skill should be hidden from the list
//   Overflow Item list, when there is an Odd item count with a thin screen width
//     FILL THE EMPTY SLOT!!
function onResize( e ){
  let listParent = document.getElementById('ppamSkillListParent')
  let overflowList = document.getElementById('ppamOverflowListing')
  
  if( !listParent || !overflowList ){
    return;
  }

  const listItems = listParent.getElementsByClassName('ppamSkillListing')
  if( listItems.length == 0 ){
    return;
  }

  const itemTop = listItems[0].getBoundingClientRect().top
  let columnsPerRow = 1;
  for( let i=1; i<listItems.length; ++i ){
    let curItemTop = listItems[i].getBoundingClientRect().top
    if( curItemTop == itemTop ){
      columnsPerRow += 1;
    }else{
      break;
    }
  }

  // If it's an odd count, show the overflow item
  if( columnsPerRow % 2 == 1 ){ // Odd
    overflowList.style.display = 'inherit'
  }else{ // Even
    overflowList.style.display = 'none'
  }

}
  
export const pageListingData = {
  'htmlName' : "Web_Dev.htm",
  'name' : 'Web Dev',
  'title' : 'Web Development',
  'lastModified' : '2025-10-13',
  'schemaData' : shemaData,
  'description' : '',
  'keywords' : '',
  'media' : [
    {
      'type' : 'youtube',
      'src' : '_vzqZ2sNjaw',
      'alt' : 'Huge holiday party thank you video',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle'],
      'caption' : ['A Thank You video for a holiday party held in Antibody Club [defunct], 2020', "See the <span class='textName'>pxlNav's Origin</span> page for more info!"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/tvKid.webm',
      'alt' : 'TV Kid timelapse',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle'],
      'caption' : ["The timelapse of 'TV Kid'","See the <span class='textName'>Pxlmancer</span> project page for more info!"]
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/NeurousNet_A.webm',
      'alt' : 'Neurous Net; Pull in all the particles',
      'caption' : ['Particle Playground!','See the <span class="textName">Neurous.Net</span> project page for more info!'],
      'style' : ['procPagesImageStyle', 'procPagesLimitWidthStyle'],
    },
  ],
  'callbacks' : {
    'resize' : onResize,
  },
  'content' : `
    <div class='textSpacer'></div>

    <div class='procPagesAboutMe-infoStyle'>

    <span class="textBump"> Web Dev Experience</span> :
    <br>&nbsp;&nbsp; <span class="textItch">JavaScript</span> has been a personal <span class="textNudge">hobby</span> of mine for some <span class="textNudge">28-29 years</span> now,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Starting html around age 8-9 on GeoCities before JavaScript or CSS existed.
    <br> Issue is, I barely know any frameworks,
    <br>&nbsp;&nbsp; Only enough <span class="textNudge">React</span> & <span class="textNudge">Node.js</span> for <span class="textName">pxlNav</span> support with the help of Copilot in VS Code.
    <br>
    <br> For my projects, I make them cause I enjoy making random web sites,
    <br>&nbsp;&nbsp; I make ESM modules in <span class="textNudge">Native JavaScript</span>, served using <span class="textNudge">Node.js</span> & <span class="textNudge">Nginx</span> or <span class="textNudge">Plex</span>
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Copilot steals a lot of my fun these days...

    <br><br> Like, I made this <span class="textName">single-page</span> system for <span class="textName">procstack.github.io</span>,
    <br>&nbsp;&nbsp; Mostly cause I noticed I didn't have a static-serving <span class="textNudge">single-page</span>'r in my toolkit.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Thought it'd be fun to make!

    <br><br><div class='ppamHBar'></div>

    <br> I'm a <span class="textNudge">3D & Shader Technical Artist</span> first, that brings me the most joy.
    <br>&nbsp;&nbsp; I mostly use JS professionally in certain XR graphics programs, when I do.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Or if a game needs a backend with Websocket support.
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Like the GDC + St. Jude's virtual fundraiser I helped build & run during covid, using Unreal + Node.js + Nginx.

    <br><br><div class='ppamHBar'></div>

    <br> I set up the full-stack for <span class="textName">Antib0dy.club</span>, and home-rolled the text chat display, websocket multiplayer characters in 3d, server websocket "chat rooms", mic audio with distance fall off, moderator tools, and more for <span class="textName">pxlNav</span>.
    <br>&nbsp;&nbsp; I used <span class="textName">Jitsi</span> for the video, audio, & text chat over WebRTC,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Which I forked to add in some custom features for <span class="textName">Antib0dy.club</span>.
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Displaying the chat messages using unique identifiers to help people recognize who's talking by 'random' color & name.
    
    <br><br> Then telling the client's front-end to calculate people's volume to free up server resources, and lazy voice disconnection server-side when users got too far from each other.
    <br>&nbsp;&nbsp; Only periodically checking player distances for server performance.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; It was fun to develop, but not developed like <span class="textNudge">React</span>'s workflow in the <span class="textItch">least</span>!

    <br><br><div class='ppamHBar'></div>

    <br> What was fun for <span class="textName">Antib0dy.club</span> was making a "Socket.io Chatroom Balancer" on the server.
    <br>&nbsp;&nbsp; <span class="textNudge">Jitsi</span> was great, but would cap out at about 70 people video + voice in the <span class="textName">pxlNav</span> environment.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; So I'd distribute a cluster of users to a new WebSocket & Jitsi room when the threshold was met.

    <br><br> I'd have it ask the user with a pop-up if they didn't mind switching rooms,
    <br>&nbsp;&nbsp; Like, maybe they were having a conversation.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; If they didn't mind, it would move them to a new room with about 20 other people.
    <br>&nbsp;&nbsp; I set it up so if it picked a user, it would find the nearest couple within a distance.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Electing those specific users to move rooms together.
    <br>&nbsp;&nbsp; It worked out pretty well, and I'd see groups of people transform into "Colored Diamond" avatars of people in different verses.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; If they wanted to hang out with their friends,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bring the group!
    
  
    <br><br> And just click into a different room if you wanted to go back through the "Verses" of other rooms.
    <br>&nbsp;&nbsp; ... This was before Meta made the Metaverse, and I like physics haha.

    <br><br><div class='ppamHBar'></div>

    <br> Honestly though, one of my favorite web projects was the regex powered Shader Text Editor for <span class="textName">pxlNav</span>.
    <br>&nbsp;&nbsp; If you're on a computer, just hit <span class="textName textBold">Y</span> to open it up.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; In the upper right, you'll see all the keyboard shortcuts for the editor.

    <br><br> Like a quick search, where any text you have highlighted, hit <span class="textName">Ctrl + Arrow Direction</span> to find the next occurrence in that direction.
    <br>&nbsp;&nbsp; I want that in VS Code now! haha

    <br><br><div class='ppamHBar'></div>

    <br><br> Frameworks usually have a lot of bloat, so I haven't wanted to use them.
    <br>&nbsp;&nbsp; <span class="textNudge">JQuery</span> kinda ruined it for me.
    <br>&nbsp;&nbsp; Let alone the NPM horror stories of packages like '<span class="textName">isEven()</span>'
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Just use - <span class="textName">let isEven = ( v ) => !(v & 0x0001);</span>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And call it a day!
    
    <br><br> Bootstraps of Bootstraps of Bootstraps,
    <br>&nbsp;&nbsp; Over the years, creating tools for js, css styling, & networking middleware.
    <br>&nbsp;&nbsp;&nbsp;&nbsp; Then after a decade, you end up with your own framework anyway.

    <br><br> But <span class="textNudge">React Native</span> does look cool.

    </div>
    <br>
    <br>
  `,
};