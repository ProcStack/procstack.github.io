import { baseEntryStruct, blogEntry, ENTRY_MARK_ENUM } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Dreamy Meanderings";
entryData.marked = ENTRY_MARK_ENUM.FEATURED;
entryData.date = "2025-08-30";
entryData.eid = "A";
entryData.tags = ["research","dreams","qualia"];
entryData.body = `
  I've been looking into dream research again.
  <br>&nbsp;&nbsp; For a while I've been planning on a meditative dream state for tensor field testing.
  <br>&nbsp;&nbsp; Testing different stimuli on the current networks state to produce outputs to test and compare with known 'Real' data like in a GAN network.
  
  <br><br> What interests me about dreams this time, is the dream-building process of dreams; which seems somewhat agreed upon by scientists.
  <br>&nbsp;&nbsp; Like the foundation of a dream, which gathers ideas like fly-paper catching bugs.
  <br>&nbsp;&nbsp; ( <a href="https://en.wikipedia.org/wiki/Activation-synthesis_hypothesis">Activation-Synthesis Theory</a> && <a href="https://en.wikipedia.org/wiki/Antti_Revonsuo" target="_blank">Threat Simulation Theory</a> )

  
  <br><br> I've always been fascinated by dreams since I was young.
  <br>&nbsp;&nbsp; Like a little movie story generator in my brain; with super natural abilities or random scale changes
  <br>&nbsp;&nbsp; (Honey I Shrunk The Kids was quite popular back when)
  
  <br><br> Until I was maybe 20, I just assumed movie dream sequences were a stylistic choice to not bore people with their black'n'white or grayscale imagery.
  <br>&nbsp;&nbsp; That was until I asked someone if their dreams looked like the movie's dream sequences.  They told me that, yeah, but their dream colors are more vivid than the movie.
  
  <br><br> Wait.... Color in dreams??
  
  <br><br> The further I asked individuals, the more I found out that dreaming of flying through nebulas while fixing a broken panel on a space ship wasn't too common.
  <br>&nbsp;&nbsp; Or running up some Kaiju monsters arm to round house kick em in the face, would really only be after they watched Attack On Titan.
  
  <br><br> ...The shadow people though... I could do without the shadow people. Freaky ass, ferrofluid moving, 'blank' people...
  
  <br><br> Of course I started looking into what research existed for people dreaming in black and white or grayscale.
  <br>&nbsp;&nbsp; They say some 7-11% dream in gray, but that it's in older people; so they attributed it to people growing up with black'n'white tv. (Schredl, 2008)

  <br><br> I'm not even 40 yet. If my childhood would have impacted my dream colors, they'd be black'n'green like some DOS computers.
  <br>&nbsp;&nbsp; Or VGA graphics card's 256 color choices on screen, looking like Commander Keen or Duke Nukem 1/2.
  
  <br>
  <br><br> Clearly there are structural differences in the brain causing these changes in types of dreaming.
  
  <br><br> I feel I should say, as it's likely important for my personal qualia.
  <br>&nbsp;&nbsp; I don't really visualize stuff in full color in my brain. I can think of a red apple, but it's 10% colored in, but accompanied with the 'feeling' of very specific shades of reds ( and yellows, if thinking of a Jazz apple )
  <br>&nbsp;&nbsp; Mentally 'felt' colors I could easily pick out in Photoshop's color picker;
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Just not fully seen in my mind's eye.
  
  <br><br> If I focus harder, maybe I can fill in the mental-image of that apple from 10% up to 25% colorized, but its just a mental-visual representation of the exact color my brain was already 'feeling'.
  
  <br><br> But my dreams don't have these color-feelings to them,
  <br>&nbsp;&nbsp; Perhaps that info is lost in my memory, and I do have color associations of objects in dreams, just they don't record to my brain's meat-memory.
  
  <br><br> I'd assume, for how many people report not having an inner-eye in their brain, there would be a lot more reports of black'n'white dreams, if they were correlated.  
  <br>&nbsp;&nbsp; I want to do more research into potential links between types of personal qualia, but that's a topic for another post.
  
  <br>
  <br><br> It seems accepted that dreams help keep areas of the brain active, sustained neural activities, while performing neural pruning.
  <br>&nbsp;&nbsp; Activating areas in the visual cortex, theme/story concepts, and fear/debate responses, as a way to keep those good connections active while the rest of the brain is doing a nightly sweep to clean up plaque and secure neural pathways.
  <br>&nbsp;&nbsp; So instead of your brain deciding it should change the connections in your visual / auditory areas of the brain, those connections stay active to reduce neural plasticity in those areas.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; ( Defensive Activation Theory - <a href="https://time.com/5925206/why-do-we-dream/" target="_blank">Time Article</a> )
  
  <br><br> ... please tell me people at least hear stuff in dreams too, haha.
  
  <br><br> But until more research is done in this field, I'll be over here dreaming up tons of people running around in dark grey environments, while I'm rebuilding some Tolkien-esk Geiger style'd gear systems,
  <br>&nbsp;&nbsp; Or riding along side tiny ant-riding warriors,
  <br>&nbsp;&nbsp; While my brain is cleaning itself and shoring up axial connections.

  <br><br><div class="textFullRight">- August 30th 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
