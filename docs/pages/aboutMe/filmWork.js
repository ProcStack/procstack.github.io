
export const pageListingData = {
  'name' : 'My Film Work',
  'media' : [
    {
      'type' : 'youtube',
      'src' : 'er4E9K_4jpU',
      'alt' : 'Blue Sky Studios film reel',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle']
    }
  ],
  'content' : `
      <div class='procPagesSpacer'></div>
    <div class='procPagesAboutMe-infoStyle'>
      In the past, I worked on <span class="textNudge">10</span> films, <span class="textNudge">9</span> of those at <span class="textBump">Blue Sky Studios</span>.
      
      <div class='procPagesAboutMeSpacer'></div>
      
      &nbsp;&nbsp;<span class="textNudge">Character Simulation</span> for hair & clothing sims on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Epic</span>, <span class="textName">Rio 1</span> & <span class="textName">Rio 2</span>
      
      <div class='procPagesSpacer'></div>

      &nbsp;&nbsp;<span class="textNudge">Effects</span> doing volume sims, particles, & some RBDs on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ice Age 4</span>
      
      <div class='procPagesSpacer'></div>

      &nbsp;&nbsp;<span class="textNudge">Crowds</span> development/navigation/sims in Houdini for 5 years on -
      <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textName">Ferdinand</span>, <span class="textName">Rio 2</span>, <span class="textName">Peanuts</span>, <span class="textName">Ice Age 5</span>, & <span class="textName">Spies In Disguise</span>
      
      
      <br>
      <br><span class="innerCenter">
      I was part of 2 published Siggraph papers and was allowed the opportunity to speak at <span class="textBump">Siggraph 2015</span>.
      <br>The talk was to a decently full room about camera based crowd navigation for <span class="textName">Peanuts</span>.
      </span>

      <br><div class='ppamHBar'></div>
      
      <br>For <span class="textName">Crowds</span>,
      <br>&nbsp;&nbsp; I built tools for placement, pathing, obstacle detection, and all the usual crowd navigation logic itself in Houdini.

      <br>
      <br>One of the personality traits I gave the crowd agents was 'rudeness';
      <br>&nbsp;&nbsp; This allowed some agents to push past each other, while others would slow/stop and wait for them to pass.
      <br>&nbsp;&nbsp; This gave the crowd a more natural feel, as if a few had "somewhere to be".

      <br>
      <br>I also added a multi-joint 'lookAt' which would blend their neck joints to look at a target smoothly.
      <br>&nbsp;&nbsp; I added in a joint rotation limits and calculated the linear algebra (target-to-joint space) to determine if the agent could look at their target or not.

      <br>
      <br>I could talk about the horse-and-jockey system I helped build, or the post-simulation joint editing tools, or the multi-limb IK with heel offsets & foot locking,
      <br>&nbsp;&nbsp; But I think I'll save that for another time.

      <br>
      <br>
    </div>
  `,
};