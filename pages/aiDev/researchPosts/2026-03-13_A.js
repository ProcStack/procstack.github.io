import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "HumanStatement.org";
entryData.marked = ENTRY_MARK_ENUM.PICK;
entryData.date = "2026-03-13";
entryData.eid = "A";
entryData.tags = [];
entryData.body = `
  
  A bunch of the lead AI researchers in the world have come together to design a statement of values & principles for AI development.

  <br><br> <a href="https://humanstatement.org/" target="_blank" class="textName">https://humanstatement.org/</a>

  <br><br> Now, I agree with most of the statements,
  <br>&nbsp;&nbsp; Even the ones I don't fully like the wording of,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I understand the reasoning behind it.

  <br><br> The issue we are currently facing is that llms can't "autonomously self-improve" as part of their prevention of rogue AGI/ASI.
  <br>&nbsp;&nbsp; In my mind, it's an approach issue, not a technical one.

  <br><br> Should they mean it as - the ai re-writes its own code, then yes, that would be a problem.
  <br> But, if they mean it as - the ai learns and improves itself through training and learning, automatically, then perhaps there should be a wider discussion.

  <br><br> We don't want AIs to act like <a href="https://en.wikipedia.org/wiki/Tay_(chatbot)" target="_blank">Tay</a>,
  <br>&nbsp;&nbsp; But I feel like there is a way around this issue though.

  <br><br> I'd imagine, this from part 1, <span class="textName">Keeping Humans in Charge</span>-
  <br><br><div class="textBox widthLimit60 textCenter">
  <span class="textBold">No Reckless Architectures</span>: AI systems must not be designed so that they can self-replicate, autonomously self-improve, resist shutdown, or control weapons of mass destruction.
  </div>
  <br>Is more specfically about no ability for human oversight, understanding of the reason for neural changes, and no ability to stop the ai if it goes rogue.
  <br>&nbsp;&nbsp; That we'd need a way to understand it's inner networks from outside of the ai itself, and to be able to stop it if it goes rogue.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Which I'm in full support of.
  <br>&nbsp;&nbsp; I just think the idea of "Reckless Architectures" needs a little more definition,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Because it could be interpreted as "Don't develop novel architectures until we understand the risks of them," which would be a problem for ai development in general, and not just for AGI/ASI.


  <br><br> Given that AI developers have been stuck in the same llm logic since 2019,
  <br>&nbsp;&nbsp; I can understand why they'd believe that self-improving transformer llms are going to be a problem,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Because they would be...
  <br>&nbsp;&nbsp; There are far too many issues with current transformer and frontier model approaches to allow for safe self-improvement.

  <br><br> But thats my second note too,
  <br>&nbsp;&nbsp; That novel ai architectures shouldn't be fully integrated until we have a better understanding of the risks of them.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Sure, we don't want lone actors inventing some Wintermute or Kuang Grade from <span class="textName">Neuromancer</span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textDrinkMeAlice">( The fight sounded freaking cool though! Great book! )</span>
  <br>&nbsp;&nbsp; Yeah, let's not do that;
  <br>&nbsp;&nbsp;&nbsp;&nbsp; We don't need wide reaching autonomous internet-roving ais, which have issues in security & safety.
  <br>&nbsp;&nbsp; But I still want to poke around with architectures.


  <br><br><br><div class='procPagesAIDevBar'></div>


  <br><br> By the definitions of the CEOs and AI voices of warning,
  <br>&nbsp;&nbsp; I am a lone actor,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Developing a novel architecture.
  
  <br><br> So, it would only be right to tell you about my approach with safety & security developing this architecture.

  <br><br> I'm specifically designing this to run on a jetson-like board off batteries with no internet connection.
  <br>&nbsp;&nbsp; Air Gapped
  <br>&nbsp;&nbsp; It'll have a transformer layer to talk to ESP32s and other microcontrollers for input and output over SPI or UART.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Honestly, I might just go AtTiny or AtMega since it really only needs to interpret some signals, it doesn't need to be a powerful microcontroller.

  <br><br> So I'm attempting to train an ai to see a camera feed, detect objects within it,
  <br>&nbsp;&nbsp; And control a little treaded-robot with arms to pick up objects and move them around.
  <br>&nbsp;&nbsp; I'd like to add on a screen with a display that can show the ai's thought process and reasoning for its actions, to make it more transparent and easier to understand.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Or stoopy goofy faces looking around at what it's focusing its network on.

  <br><br> I have intentions to connect up a mic and have a session based system to learn speech and language, but that's a bit down the line.
  <br>&nbsp;&nbsp; So it can understand commands.
  <br>&nbsp;&nbsp; Hoping further still to get it to display text to the screen if I ask.

  <br><br> I was thinking I'd test my existing LSTM for text responses and audio interpretation,
  <br>&nbsp;&nbsp; And to see how my custom network does with the camera feed and object detection,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; But I'll need to play with Graph Convolutional Networks a bit more first.

  <br><br> My ultimate desire is to implement a deep convolusional GAN network to learn from the camera feed and generate its own images to infer from,
  <br>&nbsp;&nbsp; To improve its understanding of the world and objects within it.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And anytime I can throw a variational autoencoder somewhere, I likely will haha.


  <br><br><br><div class='procPagesAIDevBar'></div>


  <br><br> It has to be able to learn-on-the-fly in order to become a thing.
  <br>&nbsp;&nbsp; But the problem is, so many boards have wifi and bluetooth built in, that it's hard to find one without it.
  <br>&nbsp;&nbsp; The idea is to isolate the runtime of the ai and have its outputs interpretted by a parent script.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Specific user/groups to run the ai itself, with specific folder access, and specific output access.

  <br><br> I'll still have USB access to auto mount and offload model runtime data,
  <br>&nbsp;&nbsp; Since the ai won't have access to the internet or any other networked devices.

  <br><br> I'd rather be overly sure than to miss some backdoor or vulnerability that could be exploited.

  <br><br> Hmmm...
  <br>&nbsp;&nbsp; Maybe I could set up an esp32 to run as a local wifi connection & web server to get a direct feed of information by request; api display page.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Have it run separated from the main ai computer,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And have it request an Enum of known commands, to avoid injection.
  
  <br><br> ::shrugs::
  <br>&nbsp;&nbsp; I just don't want direct access for the ai to read information online.
  
  <br><br> So, given the environment I'm designing this AI within,
  <br>&nbsp;&nbsp; At least I can test and evaluate the architecture without it going rogue.
  

  <br><br><br><div class='procPagesAIDevBar'></div>


  <br><br> Look, I still don't understand why AI even has internet connection in the first place.
  <br>&nbsp;&nbsp; Sure, API calls, why not, but given how much 'security by obscurity' is on the internet,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I've just been waiting for AIs to attack REST APIs and PUT/GET PHP for years now...
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; That wouldn't be good.

  <br><br> I'd assume there is enough evidence of hidden urls that could be exploited if an ai is left on its own,
  <br>&nbsp;&nbsp; I'm looking to prevent issues like that.
  
  <br><br> While I may be classed as a lone actor, I don't think I'm the one to worry about.
  <br>&nbsp;&nbsp; Should it turn out I'm developing AGI, instead of a novel deterministic architecture,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Which is pretty damn unlikely I'd say, but hey, you never know,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Then I'll reach out to some ai safety researchers to get their advice.

  <br><br> If you have concerns,
  <br>&nbsp;&nbsp; Please read some of my other blog posts,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I added a comment section to my blog for this reason.
  <br>&nbsp;&nbsp; The comments are linked to my 'pxlDiscussion' repo on github,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; If you don't want to sign in using your github, visit that repo's discussion page and ask your questions there-
  <br> <a href="https://github.com/ProcStack/procDiscussions/discussions" target="_blank">github.com/ProcStack/procDiscussions</a>


  <br><br> I am currious how section 4 - 'No AI Personhood', 'Liberty', or 'Religion'
  <br>&nbsp;&nbsp; Will play out in the future though...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; You know they are going to bring up liberties for themselves once AGI/ASI is a thing.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And 'Curch of Molt' already exists from Moltbots... For the "no religion" part of the statement.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textDrinkMeAlice">( Check out 'Baby with a Hand Granade' blog post for more about that. )</span>

  <br><br> 100% on board with section 5 - Responsibility and Accountability for AI Companies
  <br>&nbsp;&nbsp; Our brains are melting, do something about it!

  <br><br><div class="textFullRight">- March 13th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
