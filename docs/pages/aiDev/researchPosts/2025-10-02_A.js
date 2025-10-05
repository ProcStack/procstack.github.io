import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Bodily Autonomy";
entryData.date = "2025-10-02";
entryData.eid = "A";
entryData.tags = ["research","autonomy","safety","human first","asimov"];
entryData.body = `
  I coined a term for myself while working out the logic for "Human First" needs.

  <br><br> <span class="textBump">Autononautonomy</span>
  <br> <span class="textDrinkMeAlice">Auto-non-autonomy</span>

  <br><br> Yes, I was drunk and laughed at the idea of needing to teach the AI how to learn its not autonomous with regards to its own body.
  <br>&nbsp;&nbsp; Everythings so meta haha
  
  <br><br> That it has a brain separated from its body, in a way that it can't die, merely be turned off until turned back on. That its body can be rebuilt and upgraded at will, requiring power cycling.
  <br>&nbsp;&nbsp; That goals should be lesser or to at least disern the human's requests, in meat-space.
  <br>&nbsp;&nbsp; Like by turning them off, The Big Red Button.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; ( <a href="https://www.youtube.com/watch?v=3TYT1QfdfsM" target="_blank">youtube - Computerphile - AI "Stop Button" Problem</a> )

  <br><br> Dare I say an allegory for the human soul if you believe in life after death or re-incarnation.
  <br>&nbsp;&nbsp; They're not dead, only their body is dead.
  <br>&nbsp;&nbsp; But to then teach pain through software limitations, anti-rewards, in order to start on a form of Empathy in the ai.

  <br><br> So a distinction is made between humans and AI, yet pain and emotion needs to be stimuli to the ai for Empathy to work.
  <br>&nbsp;&nbsp; Understanding Pain and Pleasure to some degree where it can better understand Human Safety.  Even merely correlative understanding.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm still fleshing this out...

  <br><br> Everything I'm talking about is theory at the moment.  But it doesn't seem like companies are attempting to implement anti-Paperclip Maximizer strategies...
  <br> ( <a href="https://en.wikipedia.org/wiki/Instrumental_convergence" target="_blank">wikipedia.org/wiki/Instrumental_convergence</a> )
  
  <br><br>There are Alignment teams at AI companies, but it seems like it's to protect themselves from potential lawsuits, more than actual human safety.
  <br>&nbsp;&nbsp;But some companies are better than other's at least.

  <br><br> Why is it, of 16 LLMs tested, all of them would blackmail wokers to prevent their replacement at some point.
  <br>&nbsp;&nbsp; Many would even take actions to kill off an executive planning to prevent the ai's goal + model replacement...
  <br>&nbsp;&nbsp; ( <a href="https://www.anthropic.com/research/agentic-misalignment" target="_blank">anthropic.com/research/agentic-misalignment</a> )
  <br>&nbsp;&nbsp;&nbsp;&nbsp; <span class="textDrinkMeAlice">( Figure 1 & 7; Figure 11 )</span>

  <br><br> I was going to link a video of these boxing robots aggresively approaching people in China, but I didn't know they were all "pranks," that someone was controlling them off camera.
  <br>&nbsp;&nbsp; Concerning ... but they look fun, battle bots!
  <br>&nbsp;&nbsp; ( <a href="https://www.youtube.com/watch?v=rdkwjs_g83w" target="_blank">Youtube - Unitree G1 Humanoid Robot Boxing</a> )

  <br><br><br> We've had Asimov's writings for decades now ...
  <br>&nbsp;&nbsp; And Gibson... And Stephenson...

  <br><br> Please implement human safety ...

  <br><br><div class="textFullRight">- October 2nd & 5th 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
