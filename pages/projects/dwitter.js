
export const pageListingData = {
  'name' : 'Dwitter',
  'navGroup' : "The One'Offs",
  'navStyle' : ['hideOnMobile'],
  'media' : [
    {
      'type' : 'video',
      'src' : '../pages/projects/images/fallingCircles.webm',
      'alt' : 'Fallin circles',
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/greenField.webm',
      'alt' : 'A green field',
      'style' : 'procPagesImageStyle',
    },
    {
      'type' : 'video',
      'src' : '../pages/projects/images/undulations.webm',
      'alt' : 'The ripples of undulations',
      'style' : 'procPagesImageStyle',
    },
  ],
  'content' : `
    <a href='https://dwitter.net/u/trancor' class="textBump" target='_blank'>Dwitter</a> <span class="textDrinkMeAlice textItalic">2018+</span>
    <br><span class="textBump">My account on a JavaScript code golfing website</span>
    <br><span class="textShrink textItalic textName ">Language - <span class="textBold">JavaScript</span></span>
    <div class="pppHBar"></div>
    
    'Code Golfing' is the art of annoying your coworkers + devs,
    <br>&nbsp;&nbsp; By writing the most obtuse code as possible,
    <br>&nbsp;&nbsp;&nbsp;&nbsp;  In the fewest characters you can.

    <br>
    <br> This is the 'dwitter' for the top video,
    <br>&nbsp;&nbsp; <span class="textName">Falling Circles</span> <span class="textItalic">[139/140 chars.]</span>
    
    <div class="procPagesSpacer"></div>
    
    <br> I'm running a <span class="textName">recursive</span> function to draw circles over & over,
    <br>&nbsp;&nbsp; That are getting smaller as they go up.
    <br>&nbsp;&nbsp; After a short amount of time,
    <br>&nbsp;&nbsp;&nbsp;&nbsp; using Tan() to have them fall off the screen.
    <br>
    <br> Since you want to use as few chars as possible,
    <br>&nbsp;&nbsp; You'll see variable assignment in the arguments of functions.
    <br> This might make things tricky to follow-

    <div class="procPagesSpacer"></div>

    <div class="textInblockBox">
      d=(j,r)=>{x.beginPath(),x.arc(j*4+S(t*3+r)*r,T(t)*r+r*5,S(t+=j&6)*r/5+r,0,7),x.fill(),r>2&&(r/=2,d(j-r,r),d(j,r))}
      <br> d(w=(c.width=999)/2,600)
    </div>

    <div class="procPagesSpacer"></div>

    <br>Hmmm, see how messy that looks?
    <br>&nbsp;&nbsp; Let me clean it up for you a bit!

    <div class="procPagesSpacer"></div>

    <div class="textBox textInner">
      Built-in Variables & Functions - 
      <br>&nbsp;&nbsp function u(t) { [...] } - Call the code below
      <br>&nbsp;&nbsp t - time in seconds.
      <br>&nbsp;&nbsp c - A 1920x1080 canvas.
      <br>&nbsp;&nbsp x - A 2D context for that canvas.
      <br>&nbsp;&nbsp S()- Math.sin;  C()- Math.cos; T()- Math.tan.
    </div>
    
    <div class="procPagesSpacer"></div>

    <div class="textInblockBox">
      d=(j,r)=>{  <span class="codeAccentStyle">// Define 'd()' to call later vvv</span>
      <br>&nbsp;&nbsp; x.beginPath(), <span class="codeAccentStyle">// Start a 'path' to draw</span>
      
    <div class="textBox procPagesBgColor">
      &nbsp;&nbsp; x.arc( <span class="codeAccentStyle">// Define a circle path to draw</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; j*4 + S(t*3+r) * r, <span class="codeAccentStyle">// Horizontal movement</span> 
      <br>&nbsp;&nbsp;&nbsp;&nbsp; T(t)*r + r*5, <span class="codeAccentStyle">// Vertical 'random' animation + perspective</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; S( t+=j&6 ) * r/5 + r,  <span class="codeAccentStyle">// Make 'time' unique per + radius </span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; 0,7), <span class="codeAccentStyle">// Circle arc, draw a full circle</span>
    </div>
      &nbsp;&nbsp; x.fill(), <span class="codeAccentStyle">// Draw the circle</span>
      
    <div class="textBox procPagesBgColor">
      &nbsp;&nbsp; r>2 && (  <span class="codeAccentStyle">// Stop making circles when r gets low enough</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; r/=2, <span class="codeAccentStyle">// Divide r by 2</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; d( j-r, r ), <span class="codeAccentStyle">// Run 1st child Recursion</span>
      <br>&nbsp;&nbsp;&nbsp;&nbsp; d( j, r ) <span class="codeAccentStyle">// Run 2nd child Recursion </span>
      <br>&nbsp;&nbsp; )
    </div>
       }
      
    <div class="textBox procPagesBgColor">
      d( <span class="codeAccentStyle">// Start Recursion </span>
      <br>&nbsp;&nbsp; w=(c.width=999)/2, <span class="codeAccentStyle">// Sets resolution & X placement</span>
      <br>&nbsp;&nbsp; 600 <span class="codeAccentStyle">// Circle generation count + seed </span>
      <br> )
    </div>

    </div>

    <div class="procPagesSpacer"></div>

    <div class="innerCenter">
      ... doin a wee bit in there, haha
    </div>
    
    <br> When all you get is 140 characters,
    <br>&nbsp;&nbsp; Better make each one count!
    <br>
    <br>
  `,
};