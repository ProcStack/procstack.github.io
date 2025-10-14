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
  'htmlName' : "What_am_I.htm",
  'name' : 'What am I?',
  'title' : 'What am I?',
  'lastModified' : '2025-03-25',
  'schemaData' : shemaData,
  'description' : 'A little about me, my skills, and what I do.',
  'keywords' : 'technical artist, technical director, creative technologist, houdini, unity, unreal engine, maya, vfx, particles, shaders, asset optimization, pipeline',
  'media' : [
    {
      'type' : 'youtube',
      'src' : 'trt9dGUYevs',
      'alt' : 'Technical Art Reel 2024',
      'style' : ['procPagesMediaStyle', 'procPagesLimitWidthStyle'], 
    }
  ],
  'callbacks' : {
    'resize' : onResize,
  },
  'content' : `
      <div class='textSpacer'></div>

    <div class='procPagesAboutMe-topTextStyle'>
      <span class="textBold">Technical Artist</span>; particles, shaders, asset optimization, & pipeline
    </div>
    <div class='procPagesAboutMe-skillListStyle' id='ppamSkillListParent'>
      <span class="ppamSkillListing">Houdini <span class="textDrinkMeAlice">&nbsp;/&nbsp;</span> VEX</span>
      <span class="ppamSkillListing">Maya <span class="textDrinkMeAlice">&nbsp;/&nbsp;</span> MEL</span>
      <span class="ppamSkillListing">Unity <span class="textDrinkMeAlice">&nbsp;/&nbsp;</span> C<span class="textSuper">#</span></span>
      <span class="ppamSkillListing">Photoshop</span>

      <span class="ppamSkillListing">Python</span>
      <span class="ppamSkillListing">PyQT</span>
      <span class="ppamSkillListing">GLSL</span>
      <span class="ppamSkillListing">JavaScript</span>

      <span class="ppamSkillListing" style="display:none" id="ppamOverflowListing">Nginx</span>

    </div>

    <div class='procPagesAboutMe-subHeaderStyle'>
      <span>New York Metropolitan Area</span>
      <span><a href="mailto:trancor@metal-asylum.net" alt="Email me!">email</a></span>
    </div>
    
    <br><div class='ppamHBar'></div>

    <br>
    <br><div class='procPagesAboutMe-infoStyle'>
      I'm given the title
      <br>&nbsp;&nbsp; '<span class="textNudge">Technical Artist</span>' (<span class="textItalic">on real-time jobs</span>)
      <br>&nbsp;&nbsp;&nbsp;&nbsp; or '<span class="textNudge">Technical Director</span>' (<span class="textItalic">on films</span>)
      <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or '<span class="textNudge">Creative Technologist</span>' (<span class="textItalic">for XR</span>)
      <br>
      <br>It's all the same types of mental challenges though,
      <br>&nbsp;&nbsp; Just in different mediums of digital graphics.
    </div>
    

    <br>
    <div class="textItalicBox">So I says, blue M&M, red M&M, they all wind up the same color in the end.</div>
    <div class="textDrinkMeAlice innerTextEnd"> - <span class="textNudge">Homer Simpson</span></div>
    
    <br>
    <div class='procPagesAboutMe-infoStyle'>
      Ya know... I don't really know what I am,
      <br>&nbsp;&nbsp; I just know I like figuring out puzzles, and for the life of me, can't seem to stop my fidgety fingers.
      
      <br><br>Always gotta be tapping away at some code, 
      <br>&nbsp;&nbsp; or Houdini effects,
      <br>&nbsp;&nbsp; or building some diy contraption, 
      <br>&nbsp;&nbsp; or 3d modeling, 
      <br>&nbsp;&nbsp; or sewing, 
      <br>&nbsp;&nbsp; or writing, 
      <br>&nbsp;&nbsp; or ... well, you get the idea.

      <br><br>An undiagnosed something-or-another,
      <br>&nbsp;&nbsp; Who spawned-in with the energy befitting a gift from the mythical <span class="textNudge">Red Bull</span> itself!

    </div>
    <br>
    <br>
  `,
};