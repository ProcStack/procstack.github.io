# Web Dev

Web Dev Experience :
    
   JavaScript has been a personal hobby of mine for some 28-29 years now, starting age 9 to 10 on GeoCities.
    
     But I barely know any frameworks,
    
       Only enough React & Node.js for pxlNav support with the help of Copilot in VS Code.

 For my projects, I make them cause I enjoy making random web sites,
    
     Copilot only steals my fun these days.
    
   I make ESM modules in Native JavaScript, served using Node.js & Nginx or Plex

 Like, I made the single-page system for procstack.github.io,
    
   Mostly cause I noticed I didn't have a static-serving single-page'r in my toolkit.
    
     Thought it'd be fun!

 I'm a 3D & Shader Technical Artist first, that brings me the most joy.
    
   I mostly use JS professionally in certain XR graphics programs, when I do.
    
     Or if a game needs a backend with Websocket support.
    
       Like the GDC + St. Jude's virtual fundraiser I helped build & run during covid, using Unreal + Node.js + Nginx.

 I set up Antib0dy.club's full stack, and still hand-rolled the text chat display, websocket multiplayer characters in 3d, server websocket "chat rooms", mic audio with distance fall off, moderator tools, and more for pxlNav.
    
   I used Jitsi for the video, audio, & text chat over WebRTC,
    
     Which I forked to add in some custom features for Antib0dy.club.
    
       Displaying the chat messages using unique identifiers so people could recognize who's talking by color & name.
    
   Then telling the front-end to calculate people's volume to free up server resources, and lazy voice disconnection server-side when users got too far from each other.
    
   Only periodically checking player distances for server performance.
    
     It was fun to develop, but not developed like React's workflow in the least!

 What was fun for Antib0dy.club was making a "Socket.io chatroom balancer" on the server.
    
   Jitsi was great, but would cap out at about 70 people video + voice in the pxlNav environment.
    
     So I'd distribute a cluster of users to a new WebSocket & Jitsi room when the threshold was met.

 I'd have it ask the user with a pop-up if they didn't mind switching rooms,
    
   Like, maybe they were having a conversation.
    
     If they didn't mind, it would move them to a new room with about 20 other people.
    
   I set it up so if it picked a user, it would find the nearest couple within a distance.
    
     Electing those specific users to move rooms together.
    
   It worked out pretty well, and I'd see groups of people transform into "Colored Diamond" avatars of people in different rooms.
    
     If they wanted to hang out with their friends,
    
       Bring the group!

 And just click into a different room if you wanted to go back through the "Verses" of other rooms.
    
   ... This was before Meta made the Metaverse, and I like physics haha.

 Honestly though, one of my favorite web projects was the regex powered Shader Text Editor for pxlNav.
    
   If you're on a computer, just hit Y to open it up.
    
     In the upper right, you'll see all the keyboard shortcuts for the editor.

 Like a quick search, where any text you have highlighted, hit Ctrl + Arrow Direction to find the next occurrence in that direction.
    
   I want that in VS Code now! haha

 Frameworks usually have a lot of bloat, so I haven't wanted to use them.
    
   JQuery kinda ruined it for me.
    
   Let alone the NPM horror stories of packages like 'isEven()'
    
     Just use - let isEven = ( v ) => !(v & 0x0001);
    
       And call it a day!

 Bootstraps of Bootstraps of Bootstraps,
    
   Over the years, creating tools for js, css styling, & networking middleware.
    
     Then after a decade, you end up with your own framework anyway.

 But React Native does look cool.