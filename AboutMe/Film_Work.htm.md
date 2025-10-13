# Film Work

In the past, I worked on 9 films, 8 of those at Blue Sky Studios.

        Character Simulation Technical Director (TD) for hair / clothing sims & tools in Maya on -
      
     Epic, Rio 1 & Rio 2

        Effects TD doing volume sims (snow & dust plumes), particles, some RBDs, & tools in Houdini & Maya on -
      
     Ice Age 4

        Crowds TD navigation, sims, & tools in Houdini on -
      
     Ferdinand, Rio 2, Peanuts, Ice Age 5, & Spies In Disguise

      I was part of 2 published Siggraph papers and was allowed the opportunity to speak at Siggraph 2015.
      
The talk was to a decently full room, my bit was about camera based crowd navigation for Peanuts.

 For Peanuts, I built an angle-to-camera locking system to drive agent's Movement and Head, Torso, & Legs joint orientation to match the 2D style of the original cartoons. Along with Rails, Agents could choose to break free from, yet stay in rows on screen.

 For Ferdinand, I built dynamic Arm IK to have drivers hold 10&2 on steering wheels, passengers to sit, and co-developed a horse-and-jockey system to keep the Passengers (Jockeys) in the Cars (Horses) while they drive the streets.

Please note, prior to Ferdinand, Houdini didn't have Crowd Simulation yet.
      
We developed our crowd tools & pipeline in-house.

While working in Crowds,
      
   I built most of the navigation tools, placement, pathing, obstacle detection, and the usual crowd/boid navigation logic itself in Houdini for Birds & Land critters.

I wrote systems to understand the terrain and how to follow the flow of the ground,
      
     (Hence why I like AI Development now.)
      
   Multi-limb IK for the people & animals to walk over uneven terrain, and a 'lookAt' system for the characters to look around with multiple neck joints smoothly.
      
   While calculating the linear algebra to limit joint rotation in the neck to determine if the agent could look at their target or not.

One of the personality traits I gave the crowd agents was 'rudeness';
      
   This allowed some agents to push past each other, while others would slow/stop and wait for them to pass.
      
   This gave the crowd a more natural feel, as if a few had "somewhere to be".

I could talk about the post-simulation joint editing & cycle shifting tools, or the IK heel offsets & foot locking;
      
   But I think I'll save that for another time.