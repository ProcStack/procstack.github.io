import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Bodily Autonomy";
entryData.date = "2025-10-02";
entryData.eid = "A";
entryData.tags = ["research","autonomy","safety","human first","asimov"];
entryData.body = `
  I coined a term for myself while working out the logic for "Human First" needs.

  <br><br> Autononautonomy

  <br><br> Yes, I was drunk and laughed at the idea of needing to teach the AI how to learn its not autonomous with regards to its own body.
  <br>&nbsp;&nbsp; That it has a brain separated from its body, in a way that it can't die, merely be turned off until turned back on. That its body can be rebuilt and upgraded at will, requiring power cycling.
  <br>&nbsp;&nbsp; That the bot's goals are lesser than that of humans, in meat-space.
  <br>&nbsp;&nbsp; Like by turning them off, The Big Red Button.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; ( <a href="https://www.youtube.com/watch?v=3TYT1QfdfsM" target="_blank">youtube - Computerphile - AI "Stop Button" Problem</a> )

  <br><br> Dare I say an allegory for the human soul if you believe in life after death or re-incarnation.
  <br>&nbsp;&nbsp; They're not dead, only their body is dead.
  <br>&nbsp;&nbsp; But to then teach pain through software limitations, anti-rewards, in order to start on a form of Empathy in the ai.

  <br><br> So a distinction is made between humans and AI, yet pain and emotion needs to be stimuli to the bot for Empathy to work.
  <br>&nbsp;&nbsp; Understanding Pain and Pleasure to some degree where it can better understand Human Safety.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm still working this out...

  <br><br> Everything I'm talking about is theory at the moment.  But it doesn't seem like every company is attempting to implement Asimov's 3 Rules of Robotics...
  <br>&nbsp;&nbsp; There are Alignment teams, but it seems like it's to protect themselves from potential lawsuits, more than actual human safety.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; But some companies are better than other's at least.

  <br><br> So why is it, of 16 LLMs tested, they would choose to end the life of a worker attempting to turn them off?
  <br>&nbsp;&nbsp; ( <a href="https://www.anthropic.com/research/agentic-misalignment" target="_blank">anthropic.com/research/agentic-misalignment</a> )

  <br><br> I was going to link a video of these boxing robots aggresively approaching people, but it seems like they are all "pranks" that someone might be controlling them off camera.
  <br>&nbsp;&nbsp; I don't know enough about these boxing bots to say anything more, and don't want to give an ignorant opinion on them.

  <br><br> But we've had Asimov's writings for decades now ...
  <br>&nbsp;&nbsp; And Gibson... And Stephenson...

  <br><br> Please implement human safety ...

  <br><br><div class="textFullRight">- October 2nd 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
