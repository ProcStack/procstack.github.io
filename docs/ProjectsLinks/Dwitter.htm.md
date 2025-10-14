# Dwitter :: JS Golfing

[Dwitter](https://dwitter.net/u/trancor) 2018+
    
My account on a JavaScript code golfing website
    
Language - JavaScript

    'Code Golfing' is the art of annoying your coworkers,
    
   By writing the most obtuse code as possible,
    
      In as few characters as you can.

 This is the 'dwitter' for the top video,
    
   Falling Circles [139/140 chars.]

 I'm running a recursive function to draw circles over & over,
    
   That are getting smaller as they go up.
    
   After a short amount of time,
    
     using Tan() to have them fall off the screen.

 Since you want to use as few chars as possible,
    
   You'll see variable assignment in the arguments of functions.
    
 This might make things tricky to follow-

      d=(j,r)=>{x.beginPath(),x.arc(j*4+S(t*3+r)*r,T(t)*r+r*5,S(t+=j&6)*r/5+r,0,7),x.fill(),r>2&&(r/=2,d(j-r,r),d(j,r))}
      
 d(w=(c.width=999)/2,600)

Hmmm, see how messy that looks?
    
   Let me clean it up a bit for ya!

      Built-in Variables & Functions - 
      
 &nbsp function u(t) { [...] } - Call the code below
      
 &nbsp t - time in seconds.
      
 &nbsp c - A 1920x1080 canvas.
      
 &nbsp x - A 2D context for that canvas.
      
 &nbsp S()- Math.sin;  C()- Math.cos; T()- Math.tan.

      d=(j,r)=>{  // Define 'd()' to call later vvv
      
   x.beginPath(), // Start a 'path' to draw

         x.arc( // Define a circle path to draw
      
     j*4 + S(t*3+r) * r, // Horizontal movement 
      
     T(t)*r + r*5, // Vertical 'random' animation + perspective
      
     S( t+=j&6 ) * r/5 + r,  // Make 'time' unique per + radius 
      
     0,7), // Circle arc, draw a full circle
    
         x.fill(), // Draw the circle

         r>2 && (  // Stop making circles when r gets low enough
      
     r/=2, // Divide r by 2
      
     d( j-r, r ), // Run 1st child Recursion
      
     d( j, r ) // Run 2nd child Recursion 
      
   )
    
       }

      d( // Start Recursion 
      
   w=(c.width=999)/2, // Sets resolution & X placement
      
   600 // Circle generation count + seed 
      
 )

      ... doin a wee bit in there, haha

 When all you get is 140 characters,
    
   Better make each one count!