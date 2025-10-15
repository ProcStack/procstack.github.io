# Film Work

In the past, I worked on 9 films, 8 of those at Blue Sky Studios.

        Character Simulation Technical Director (TD) for Hair & Clothing simulations in Shots and Tools in Maya on -
      
     Epic, Rio 1 & Rio 2

        Effects TD doing Volume (snow & dust plumes), Particles, some RBDs Shots, and tools in Houdini & Maya on -
      
     Ice Age 4

        Crowds TD Navigation, Terrain Adaptation, Swarming, Shot Work, Tools, and Pipeline in Houdini on -
      
     Ferdinand, Rio 2, Peanuts, Ice Age 5, & Spies In Disguise

      I was part of 2 published Siggraph papers and was allowed the opportunity to speak at Siggraph 2015.
      
The talk was to a decently full room, my bit was about camera based crowd navigation for Peanuts.

 [You've got a lot of friends, Charlie Brown](https://dl.acm.org/doi/10.1145/2775280.2792517) -- Peanuts(2015)
      
        Details
        
          I setup camera guided crowd navigation. Keeping the kids perpendicular to the camera as they turned & moved,
          
 Distributing themselves across 3-4 rows, along 'guide-vector rails on screen, like Peanuts 2d cartoons would do.

 Also developing tools to orient heads, torsos, and legs to the camera as well.

 [Populating the crowds in Ferdinand](https://dl.acm.org/doi/10.1145/3084363.3085055) -- Ferdinand(2017)
      
        Details
        
          I built dynamic Arm Inverse-Kinematics, having Agents hold steering wheels 10'n'2 while driving cars & buses,
          
 Passengers to sit without legs in the ground,

 And co-developed a Horse-&-Jockey system;
          
 Keeping Passengers (Jockeys) in the Cars (Horses) while they drive the streets of Barcelona.

  Before Ice Age 5(2016), Houdini didn't have Crowd Simulation(2015);
      
 We developed our own Houdini crowd tools & pipeline in-house for Rio 2 & Peanuts.

While working in Crowds,
      
   I built most of the navigation, placement, pathing, obstacle detection tools, and the usual crowd/boid navigation logic itself in Houdini for Birds & Land critters.

I wrote systems to understand terrain; to follow the flow of the ground they walked,
      
     ( Hence why I like AI Development now, Training Optimization )
      
   Multi-limb IK for the people & animals to walk over uneven terrain, and a 'Look At' system for the characters to look around with their full neck, smoothly across multiple joints.
      
   While calculating the linear algebra to limit joint rotation in the neck to determine if the agent could look at their target or not; relative joint space is fun!

One of the personality traits I gave the crowd agents was 'rudeness';
      
   This allowed some agents to push past each other, while others would slow/stop and wait for them to pass.
      
     This gave the crowd a more natural feel, as if a few had "somewhere to be".

I could talk about the post-simulation joint editing & cycle shifting tools, or the IK heel offsets & foot locking;
      
   But I think I'll save that for another time.