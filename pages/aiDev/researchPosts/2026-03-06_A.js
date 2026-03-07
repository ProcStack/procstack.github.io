import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Stop Listening to Soothsayers";
entryData.date = "2026-03-06";
entryData.eid = "A";
entryData.tags = [];
entryData.body = `
  Demis Hassabis, CEO of DeepMind, you've said some things in a recent talk I don't really agree with.

  <br><br> In the same talk you mention a new test for AGI,
  <br>&nbsp;&nbsp; You also said Yan LeCun is maybe a bit misguided.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; That "llms are a dead end"

  <br><br> Demis' new test for AGI is to get recall to infer relevance in the data the ai knows.
  <br>&nbsp;&nbsp; But this test is basically where LLMs already are,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Activate neurons to cause shared neurons to fire together in the network.
  <br>&nbsp;&nbsp; The difference is that it is more general, that a year may cause the AI to think of an event around that year.

  <br><br> Say the year 1910, does the LLM recall Einstein's 1915 "four papers"?
  <br>&nbsp;&nbsp; Somehow opposed to his 1905 papers, the Annus Mirabilis papers?

  <br><br> This is spoofable with training.
  <br>&nbsp;&nbsp; An AGI's recall shouldn't be spoofable with training,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; It should be emergent from the structure & ringing of the network itself.


  <br><br><br><div class='procPagesAIDevBar'></div>


  <br><br> I'm fairly certain that Yan LeCun is on the right path here.
  <br>&nbsp;&nbsp; Simply that,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I didn't understand why LLMs were set up to be so language dependant from maybe 2019 or so till now.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; And then Yan LeCun admits to it being a dead end, last year.
  <br>&nbsp;&nbsp; So I'm left wondering if others will be tagging along with Yun or not.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And given the latest AI Summit, it seems that might be the case.
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other individuals were talking about ways to move forward from LLMs.

  <br><br> I've been saying for years now that "language" is going to limit growth of ai models.
  <br>&nbsp;&nbsp; But of course, I'm the doof, cause, others are studying it for their job, and, I'm just an artist, or something...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; It's funny how often people tell you what you know.

  <br><br> So, yeah, I get it, but for how new AI is, well, the modern day ai is...
  <br>&nbsp;&nbsp; We are still in the wild west of ai development.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Breakthough to breakthough,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As I've said, and now Demis in the latest talk said.

  <br><br> He mentioned we need a new way to think about our data.
  <br>&nbsp;&nbsp; That AI needs to be reactive, or in my words, dynamic.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; But he's still talking about context windows.

  <br><br> Resonance isn't a context window.

  <br><br><div class="textFullRight">- March 6th 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
