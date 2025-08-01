const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "My Film Work",
  "description": "My work at Blue Sky Studios, including character simulation, effects, and crowds.",
  "keywords": "film work, Blue Sky Studios, character simulation, effects, crowds, animated films",
  "url": "https://procstack.github.io/AboutMe/Film_Work.htm",
  "image": "https://procstack.github.io/images/ProcStack_th.jpg",
  "author": {
    "@type": "Person",
    "name": "Kevin Edzenga",
    "alternateName": ["ProcStack", "Trancor"],
    "url": "https://procstack.github.io"
  }
};



export const pageListingData = {
  'htmlName' : "Film_Work.htm",
  'name' : 'My Film Work',
  'title' : 'My Film Work',
  'lastModified' : '2025-03-24',
  'schemaData' : shemaData,
  'description' : 'My work at Blue Sky Studios',
  'keywords' : 'Blue Sky Studios, film work, character simulation, effects, crowds, technical director, TD, Maya, Houdini',
  'media' : [
    {
      'type' : 'youtube',
      'src' : 'er4E9K_4jpU',
      'alt' : 'Blue Sky Studios film reel',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle']
    }
  ],
  'content' : `
      <div class='textSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      In the past, I worked on <span class="textNudge">9</span> films, <span class="textNudge">8</span> of those at <span class="textBump">Blue Sky Studios</span>.
      
      <div class='procPagesAboutMeSpacer'></div>
      
      &nbsp;&nbsp;<span class="textInblockBox">Character Simulation Technical Director (TD)</span> for hair / clothing sims & tools in <span class="textName">Maya</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Epic</span>, <span class="textName">Rio 1</span> & <span class="textName">Rio 2</span>
      
      <div class='textSpacer'></div>

      &nbsp;&nbsp;<span class="textInblockBox">Effects TD</span> doing volume sims (snow & dust plumes), particles, some RBDs, & tools in <span class="textName">Houdini</span> & <span class="textName">Maya</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ice Age 4</span>
      
      <div class='textSpacer'></div>

      &nbsp;&nbsp;<span class="textInblockBox">Crowds TD</span> navigation, sims, & tools in <span class="textName">Houdini</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ferdinand</span>, <span class="textName">Rio 2</span>, <span class="textName">Peanuts</span>, <span class="textName">Ice Age 5</span>, & <span class="textName">Spies In Disguise</span>
      
      
      <br>
      <br><span class="innerCenter">
      I was part of 2 published Siggraph papers and was allowed the opportunity to speak at <span class="textBump">Siggraph 2015</span>.
      <br>The talk was to a decently full room about camera based crowd navigation for <span class="textName">Peanuts</span>.
      </span>

      <br><div class='ppamHBar'></div>
      
      <br>While working in <span class="textName">Crowds</span>,
      <br>&nbsp;&nbsp; I built most of the navigation tools, placement, pathing, obstacle detection, and made the usual crowd/boid navigation logic itself in Houdini for Birds & Land critters.
      
      <br>
      <br>I wrote systems to understand the terrain and how to follow the flow of the ground,
      <br>&nbsp;&nbsp; Multi-limb IK for the people & animals to walk over uneven terrain, and a 'lookAt' system for the characters to look around with multiple neck joints smoothly.
      <br>&nbsp;&nbsp; While calculating the linear algebra to limit joint rotation in the neck to determine if the agent could look at their target or not.

      <br>
      <br>One of the personality traits I gave the crowd agents was 'rudeness';
      <br>&nbsp;&nbsp; This allowed some agents to push past each other, while others would slow/stop and wait for them to pass.
      <br>&nbsp;&nbsp; This gave the crowd a more natural feel, as if a few had "somewhere to be".

      <br>
      <br>I could talk about the horse-and-jockey system I helped build, or the post-simulation joint editing tools, or the IK heel offsets & foot locking,
      <br>&nbsp;&nbsp; But I think I'll save that for another time.

      <br>
      <br>
    </div>
  `,
};