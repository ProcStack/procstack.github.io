# ESN Motion Prediction

How about an Echo State Network (ESN) AI I wrote in the spring-summer of 2024?

An ESN is a type of 'reservoir' network,
        
Which considers time in its prediction.
        
It thinks about past events to predict future ones.

Since my ESN can learn on the fly,
      
   Why not feed it some videos I made?

        Currently I'm not using my ESN's predicted movement for anything in python,
        
   The next step would be introducing a base image to motion-transfer / reference.
        
   However, did build a simple version in Unity to learn player combos + movement over time.

        So I'm mostly just learnin' while watching my ai learnin'!

In the videos, I had the "reservoir" set to 15 time steps, you'll notice about every 15 frames the brain shifts.
        
By frame ~45, it's learned some patterns in the X video.
        
The brain seems to completely melt at ~75 & rebuild itself by ~95. 

It should be happenstance that the brain shifts when the reservoir fills;
        
The brain should shift to account for the reservoir size,
        
So the 15-frame fill might be a bug in my logic, if the looping isn't correct.
        
   Or maybe its just a coincidence ::shrugs::
        
But it's detecting patterns in motion!