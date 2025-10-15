const shemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Film Work",
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
  'name' : 'Film Work',
  'title' : 'Film Work',
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
      <br> In the past, I worked on <span class="textItch">9</span> films, <span class="textItch">8</span> of those at <span class="textItch">Blue Sky Studios</span>.
      
      <div class='procPagesAboutMeSpacer'></div>
      
      &nbsp;&nbsp;<span class="textInblockBox">Character Simulation Technical Director (TD)</span> for Hair & Clothing simulations in Shots and Tools in <span class="textName">Maya</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Epic</span>, <span class="textName">Rio 1</span> & <span class="textName">Rio 2</span>
      
      <div class='textSpacer'></div>

      &nbsp;&nbsp;<span class="textInblockBox">Effects TD</span> doing Volume (snow & dust plumes), Particles, some RBDs Shots, and tools in <span class="textName">Houdini</span> & <span class="textName">Maya</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ice Age 4</span>
      
      <div class='textSpacer'></div>

      &nbsp;&nbsp;<span class="textInblockBox">Crowds TD</span> Navigation, Terrain Adaptation, Swarming, Shot Work, Tools, and Pipeline in <span class="textName">Houdini</span> on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ferdinand</span>, <span class="textName">Rio 2</span>, <span class="textName">Peanuts</span>, <span class="textName">Ice Age 5</span>, & <span class="textName">Spies In Disguise</span>
      
      
      <br><br><div class='ppamHBar'></div>

      <br><span class="innerCenter">
      I was part of 2 published <span class="textNudge">Siggraph</span> papers and was allowed the opportunity to speak at <span class="textBump">Siggraph 2015</span>.
      <br>The talk was to a decently full room, my bit was about camera based crowd navigation for <span class="textName">Peanuts</span>.

      <br><br> <a href="https://dl.acm.org/doi/10.1145/2775280.2792517" target="_blank">You've got a lot of friends, Charlie Brown</a> -- <span class="textName">Peanuts</span><span class="textItalic textDrinkMeAlice">(2015)</span>
      <details>
        <summary class="collapsibleField">Details</summary>
        <div class='procPagesCollapsible'>
          I setup camera guided crowd navigation. Keeping the kids perpendicular to the camera as they turned & moved,
          <br> Distributing themselves across 3-4 rows, along '<span class="textNudge">guide-vector rails</span> on screen, like <span class="textName">Peanuts</span> 2d cartoons would do.
          <br>
          <br> Also developing tools to orient heads, torsos, and legs to the camera as well.
        </div>
      </details>

      <br> <a href="https://dl.acm.org/doi/10.1145/3084363.3085055" target="_blank">Populating the crowds in Ferdinand</a> -- <span class="textName">Ferdinand</span><span class="textItalic textDrinkMeAlice">(2017)</span>
      <details>
        <summary class="collapsibleField">Details</summary>
        <div class='procPagesCollapsible'>
          I built dynamic Arm Inverse-Kinematics, having Agents hold steering wheels 10'n'2 while driving cars & buses,
          <br> Passengers to sit without legs in the ground,
          <br>
          <br> And co-developed a <span class="textNudge">Horse-&-Jockey</span> system;
          <br> Keeping Passengers <span class="textItalic textShrink">(Jockeys)</span> in the Cars <span class="textItalic textShrink">(Horses)</span> while they drive the streets of Barcelona.
        </div>
      </details>

      
      <br> <div class='ppamHBar'></div>

      <br><br>  Before <span class="textName">Ice Age 5</span><span class="textItalic textDrinkMeAlice">(2016)</span>, <span class="textName">Houdini</span> didn't have <span class="textName">Crowd Simulation</span><span class="textItalic textDrinkMeAlice">(2015)</span>;
      <br> We developed our own Houdini crowd tools & pipeline in-house for <span class="textName">Rio 2</span> & <span class="textName">Peanuts</span>.

      <br><br> <div class='ppamHBar'></div>
      
      <br>While working in <span class="textName">Crowds</span>,
      <br>&nbsp;&nbsp; I built most of the navigation, placement, pathing, obstacle detection tools, and the usual crowd/boid navigation logic itself in Houdini for Birds & Land critters.
      
      <br>
      <br>I wrote systems to understand terrain; to follow the flow of the ground they walked,
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class='textItalic textDehydrated'>( Hence why I like AI Development now, <span class='textName'>Training Optimization</span> )</span>
      <br>&nbsp;&nbsp; Multi-limb IK for the people & animals to walk over uneven terrain, and a '<span class='textNudge'>Look At</span>' system for the characters to look around with their full neck, smoothly across multiple joints.
      <br>&nbsp;&nbsp; While calculating the linear algebra to limit joint rotation in the neck to determine if the agent could look at their target or not; relative joint space is fun!

      <br><br> <div class='ppamHBar'></div>

      <br>One of the personality traits I gave the crowd agents was 'rudeness';
      <br>&nbsp;&nbsp; This allowed some agents to push past each other, while others would slow/stop and wait for them to pass.
      <br>&nbsp;&nbsp;&nbsp;&nbsp; This gave the crowd a more natural feel, as if a few had "somewhere to be".

      <br>
      <br>I could talk about the post-simulation joint editing & cycle shifting tools, or the IK heel offsets & foot locking;
      <br>&nbsp;&nbsp; But I think I'll save that for another time.

      <br>
      <br>
    </div>
  `,
};