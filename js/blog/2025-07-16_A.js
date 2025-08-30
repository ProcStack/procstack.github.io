import { baseEntryStruct, blogEntry } from './blogEntryBase.js';

let entryTitle = "Boid Movement: Beyond the Basic Three Rules";
let entryDate = "2025-07-16";
let entryTags = ["boids", "flocking", "navigation", "animation", "crowd-simulation", "blue-sky-studios", "july", "2025"];
let entryBody = `
Couple weeks down an a lot of progress on the site and personal ai development.
Created 'Currents of War' in that time, and now pushing my plushie design collection.

Something seems to keep coming up in the Boid Movement world of social media content.
<br/>&nbsp;&nbsp; Yet only see the base 3 rules of Boid Navigation: Separation, Cohesion, and Alignment.

This is a great start, but it leaves a lot of core aspects out of the feel of the groups of fish, birds, or other creatures.

I'm lucky to have worked at Blue Sky Studios developing crowds navigations and flocking systems for some years.
<br/>&nbsp;&nbsp; Specifically on 'Rio 2', 'Peanuts', 'Ice Age 5', 'Ferdinand', and 'Spies in Disguise'.

There are a few more, what I feel are, 'core aspects' of flocking systems that are not covered in those 3 base rules.

<br><div class='textSpacer'></div>

<br>&nbsp; _<div class="textName textNudge">Cone of Vision</div>
<br>&nbsp; _<div class="textName textNudge">Look Ahead</div>
<br>&nbsp; _<div class="textName textNudge">Follow the Leader</div>

<br><div class='textBar'></div>

<!-- -- -->

<div class="textName textBold textBump">Cone of Vision</div>
<br>&nbsp; This is the area in front of the boid that it can "see" other boids and obstacles. Detecting when and how it should turn to follow or avoid other boids and obstacles.

<br><br>&nbsp; In the case of fish, this would help in allowing fish to "see" other fish in front of them to know they are getting too close to the front of the school of fish.
&nbsp; Then when a predator or obstacle gets in their way, as the school of fish splits to avoid it,&nbsp
the fish in the back of the school can "see" the fish in front of them turning and can follow in suit!

<br><div class='textSpacer'></div>
&nbsp; This 'Cone of Vision' will allow your fish to have a little better "Follow the Leader" in their movement.
<div class='textSpacer'></div>

<br>&nbsp; You can add a Cone of Vision to your boids by having the current boid's normalized direction / velocity vector,
<br>&nbsp; Along with a neighboring boid's position delta; ''' Normalize(  neighborPos - boidPos ) '''
<br>&nbsp; Then you can check if the neighbor is within that vision cone by checking the dot product of the two vectors.
<br>&nbsp; <span class="textName"> Dot( Boid_Direction, Neighbor_Position_Delta )</span> will give you a value between -1 and 1.
<br>&nbsp; If the value is greater than <span class="textName">0.5</span>, then the neighbor is within the cone of vision.
<br>&nbsp; And you can always play with that <span class="textName">0.5</span> number to make the cone wider or narrower.
<br>&nbsp;&nbsp;&nbsp; The closer to 1, the narrower the cone of vision; and visa versa.
<br>&nbsp;&nbsp;&nbsp; If the value is under 0, the neighbor is behind the boid and can be ignored!

<!-- -- -->

<div class="textName textBold textBump">Look Ahead</div>
<br>&nbsp; This is a fantastic piece of magic you can add to your boid system!
<br>&nbsp; <span class="textNudge">Look Ahead</span> is where you project the boid's position along its direction -or- velocity vector for a distance of <span class="textName">5x-10x</span> the boid's speed.
<br>&nbsp; This is where you check for obstacles and other boids to Separate, Cohere, and Align with; those 3 base rules.

<br><br>&nbsp; In the case of fish, this allows the fish to "see" where they will be able to see the direction other fish are going in front of them.
&nbsp; Giving rise to a better 'Cohesion' location and a 'separation' location that fish is now trying to get to,
<br>&nbsp; Rather than the fish reacting to the situation it's in, it's now reacting to the situation it will be in.

<br><div class='textSpacer'></div>
&nbsp; 'Look Ahead' allows the boids to avoid obstacles and clusters of boids with more "intention" in their movement.
<div class='textSpacer'></div>

<br>&nbsp; You can add a 'Look Ahead' to your boids by having the current boid's direction / velocity vector,
<br>&nbsp; Then multiply that vector by the boid's speed and a 'look ahead' distance multiplier, somewhere between <span class="textName">5 to 10</span>.
<br>&nbsp; Then do your normal boid calculations for Separation, Cohesion, and Alignment with that new position.
<br>&nbsp; <span class="textName"> Boid_Position + ( Boid_Direction * Boid_Speed * Look_Ahead_Multiplier ) </span>

<br>&nbsp; To push this a little further, this can become the 'Target Position' for the boid to move towards.
<br>&nbsp; It no longer needs to be a force applied to the boid directly.
<br>&nbsp; Freeing up the ability to have some localized forces applied to the boid, such as steering behaviors or avoidance forces AT the current position.

<br><br>&nbsp; Lets say you have a 'Look Ahead' position of <span class="textName">10</span> units in front of the boid, and that is now the 'Target Position'.
<br>&nbsp; You can then apply a 'Steering Force' to the boid to move it towards that target position which is the combined result of the boid's Separation, Cohesion, and Alignment calculations.
<br>&nbsp; The boid no longer needs to explicitly follow the 'Look Ahead' position, but rather steer towards it;&nbsp;
allowing for wind, terrain hills and valleys, and other forces to affect the boid's movement, while they still have a place they want to get to dynamically.

<!-- -- -->

<div class="textName textBold textBump">Follow the Leader</div>
<br>&nbsp; This is a great way to reduce the number of boids you need to calculate in a large system.
<br>&nbsp; So this is a bit more of a "performance" boost than a design aspect.

<br><br>&nbsp; But I've had times I've needed to handle 35k+ boids in a scene,&nbsp;
and it was just too much for the system to handle navigation, animation cycles, and terrain IK adaptation in a timely manner.

<br>&nbsp; For this, I created a "Leader" system where a LARGE percentage of the boids were simply "Followers" that would mimic a "Leader" boid.
<br>&nbsp; The "Leader" boid would be the one that does all the calculations for Separation, Cohesion, and Alignment.
<br>&nbsp; The other boids would simply find the nearest "Leader" and do what the leader does.

<br>&nbsp; This allows for a much larger number of boids to be in the scene without needing to calculate all of them.
<br>&nbsp; Leaving room for more complex math, like terrain adaptation, animation cycles, and "Head + Neck Look At" for the boids.

<br><div class='textSpacer'></div>
<br>&nbsp; "Following the Leader" may be for optimization, but it can allow for older system to handle mass armies of boids!
<div class='textSpacer'></div>

<br><br>&nbsp; You can add a "Follow the Leader" system to your boids by making sure each have a unique ID.
<br>&nbsp; This ID can be used to identify the leader from the followers per-frame, or be pre-assigned at the start of your simulation/gameloop.
<br>&nbsp; Storing the list of known Leaders will allow for easier lookups of the nearest leader for realtime applications; also providing better memory-safe logic if coding for GPU.
<br>&nbsp; Then you can have the followers either look up that specific leader or find the nearest leader by distance.
<br>&nbsp; Once the follower has a leader, simply copy the leader's velocity.

<br><br>&nbsp For a little more liveliness, you can use the Leader's position as a "weak" cohesion & alignment force for the follower.
<br>&nbsp; This will help break up any uniformity that will 'emerge' from the followers simply copying the leader's velocity.

<!-- -- -->

<br><div class='textBar'></div>

<br>&nbsp; These are some of the core aspects of flocking systems that I feel are missing from many of the social posts and videos I've seen online.
<br>&nbsp; I hope this helps you in your own flocking systems, and maybe even inspires you to create something new with them!

<br>&nbsp; Like adding a 'Rudeness' factor to the boids, where they will push other boids out to get to a target position faster,
<br>&nbsp;&nbsp; Causing other's to stop for them.

<br><br>&nbsp; Or a 'Friend' factor, where boids of similar friend values will become "friend groups" together and follow each other's alignment & speed more closely than others.

<br><br>&nbsp; But if I can leave you with a little topic to research -
<br>&nbsp; I prefer to use 'Floating-State Machines' for boids, rather than a 'State Machine';
<br>&nbsp;&nbsp; And a 'Behavior Tree/Graph' can be used in tandem,
<br>&nbsp;&nbsp;&nbsp;&nbsp; ... with some modification.

<br>&nbsp; What's the difference?
<br>&nbsp;&nbsp; A 'Floating-State Machine' allows for the boids to have multiple states at the same time, rather than just one state at a time.
<br>&nbsp; But why is it useful?

<br>&nbsp; -Kevin Edzenga
`;


const entryData = baseEntryStruct();
entryData.title = entryTitle;
entryData.date = entryDate;
entryData.tags = entryTags;
entryData.body = entryBody;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };