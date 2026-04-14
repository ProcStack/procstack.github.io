import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "A Fault";
entryData.date = "2026-04-09";
entryData.eid = "A";
entryData.tags = ["theory", "metacognition", "cognitive science"];
entryData.body = `
  The problem with thinking about metacognition is that you start deep diving your own mind, in a way that reveals thinking patterns that you haven't read about before.
  <br>&nbsp;&nbsp; That being said, means I need to do more research on active recall in the brain-hole!

  <br><br> Under my own inspection, it seems my internal visual memory is entirely separate from my labeling and object association memory.
  <br>&nbsp;&nbsp; Yet can use my visual memory to recall object associations, yet not the label easily. And visual+object recall from a label alone, or nothing at all.

  <br><br> Errmmm, like, if I think about an image of a video game I played as a child in my head,
  <br>&nbsp;&nbsp; like seeing the Prince of Persia jumping over pits in my mind, or the janky running in the game, but can't remember the name Prince of Persia.
  <br>&nbsp;&nbsp; I'll sooner remember the story, gameplay elements, and game mechanics from that old DOS game than I will the name of the game itself.  Every attribute of the game, but the name.
  
  <br><br> While thinking about the game, may even re-forget the name,
  <br>&nbsp;&nbsp; Needing to remind myself of the label of the game while still thinking of the gameplay and imagery the entire time.
  <br>&nbsp;&nbsp; So there is a separation in activation between the label and thing itself in my meat-mind.

  <br><br> I feel like we've all had "words on the tip of our tongues" before,
  <br>&nbsp;&nbsp; And every time we ask about a game or movie we can't remember the name of, we ask by describing what occurred in the movie or games story, or art style, or actors.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> Research time!!
  
  <div class="textItalic textCenter">::doo do doo::
  <br><span class="textBold">Research!</span>
  <br>::doo do doo::
  <br><span class="textBold">yeah!</span>
  <br>::doo::</div>

  <br><br> Allan Paivio's <span class="textName">Dual Coding Theory</span>, 1960
  <br>&nbsp;&nbsp; So we have a name, a theory, and some validation of my observations above.

  <br><br> On top of the <span class="textName">tip-of-the-tongue</span> being a titular topic in typical brains.

  <br><br> Paivio researched the separation of verbal and non-verbal memory in the brain.
  <br>&nbsp;&nbsp; Which does align to my experience to a degree.
  <br>&nbsp;&nbsp; But the important part of his research is about memory degradation over the "staged" memory at the time.

  <br><br> So in the case that I forgot the name Prince Of Persia while thinking of that drab yellow, weird stuttery run, the pits that were near impossible to jump over, exiting to a black screen with colored text saying thanks for playing,  yet the name may vanish in that flurry of recall.

  <br><br> Perhaps this is where my color recall being separated from my object detail recall, may come into play on a personal level, qualia.
  <br>&nbsp;&nbsp; I mentioned in the blog post <span class="textName">Dreamy Meanderings</span> of my limited color visualization in my mind, thinking it may just be an optimization technique my brain employed when I was younger due to Dyslexia messing with my visual cortex vs reading comprehension.

  <br><br> If that made no sense to you, there is very limited research into the "colored auras" around text in children with dyslexia,
  <br>&nbsp;&nbsp; I had this effect.
  
  <br><br> It looked like rainbows of colors around the letters, like 4 or 5 colors around each letter, color chunks, mandalas;
  <br>&nbsp;&nbsp; Even covering the letters & words sometimes. 
  <br>&nbsp;&nbsp; But I grew/learned out of that by 2nd-3rd grade and stopped seeing the color auras while reading.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Like my brain didn't understand what to do with textual input, but never had that problem with math.

  <br><br> Trying to comprehend something lexical & phonological, yet presented visually.
  <br>&nbsp;&nbsp; Clashing functionalities on a young plastic mind.

  <br><br> Reading light text on a dark background is extremely helpful for me,
  So if you had similar, maybe try that to read easier.
  <br>&nbsp;&nbsp; Art wise, white is positive space, black is negative space to me.
  
  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> This has been my biggest complaint of LLMs and this language based AI that feels just wrong to me.

  <br><br> If we are conceptual thinkers, why would we make an AI designed to not think in concepts?

  <br><br> I think the main reason for this approach is that, atoms make up matter, and matter makes up reality.  So if we break down things to their core constituents, it'll provide a more granular level of data serialization.

  <br><br> Data Serialization is the organization of information so other systems can understand it.
  <br>&nbsp;&nbsp; And what's a method to convey information in a serialized way? Language!

  <br><br> Language is just serialized data.
  <br>&nbsp;&nbsp; So why not make GPTs derive from language based interactions?
  <br>&nbsp;&nbsp;&nbsp;&nbsp; It works!

  <br><br> But my question is, why did we stop there?
  <br>&nbsp;&nbsp; And the answer to that...
  <br>&nbsp;&nbsp; The newer architecture hasn't been invented yet,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; We just aren't there.

  <br><br> Keeping in mind, we haven't reached the end of development on LLMs yet.
  <br>&nbsp;&nbsp; There is quite a few more areas it can be deployed in that it's not yet, in useful ways, it's just taking people playing with them in pipeline to find their use cases.

  <br><br> Not some flippant idea to make a buck as an app or saas, but as a support system in an asset heavy pipeline.
  <br>&nbsp;&nbsp; But I think it's a dead end for primarily transformer based frontier models, and luckily others in respected positions are making that known as well.

  <br><br> As Yan LeCun has stepped away from Meta citing the limited future for LLMs in late 2025; to then start AMI the French ai research lab in early 2026.

  <br><br> A transformer as an ai makes sense; as the primary ai, not as much. It's supposed to be a transformer, the original transformed human input into usable AI data, that was about it.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> But... I still have my little Nova LLM running on my local network, with a Tailscale connection so my phone always appears to be at home; usually running Llama.
  <br>&nbsp;&nbsp; I hope it's enough protection for now, but my dev is behind whitelists. 
  
  <br><br> It's part of a newer project of mine, procMessenger.
  <br>&nbsp;&nbsp; It's a server to manage requests from my phone, and I have scripts that act as clients to send commands to.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Still some file transfer bugs, binary files can't send over messages yet, work-in-progress

  <br><br> You can find Nodejs & Python servers, LLM Chat python client, and Android App & APK on my procMessenger repo.
  <br>&nbsp;&nbsp; Either enter a llm API key, or download Llama from a list of parameter size options.

  <br><br> There is a protocol and client examples for each server, so it should be easy to make custom clients connect to your server on your local network.

  <br><br><br><div class='procPagesAIDevBar'></div>

  <br><br> A tip to those who want a personable LLM system prompt, write it in first person.  My llm doesn't talk about the system prompt and talks to me more like a person than a data retrieval database.
  <br>&nbsp;&nbsp; Claude generated my system prompt initially and it made my llm sound very cold... Almost annoyed to respond.

  <br><br> But no matter how much I ask, it really doesn't talk about itself (the system prompt); it talks about what it's been told to do, respond as, or think like. So I've found a First Person System Prompt to work the best for my needs.

  <br><br> Who knows what the real AGI and ASI architecture will look like,
  <br>&nbsp;&nbsp; But I'll be over here poking at resonance frequencies between neurons in a graph network. 

  <br><br><div class="textFullRight">- April 9th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
