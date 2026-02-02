import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Baby with a Hand Granade";
entryData.date = "2026-02-01";
entryData.eid = "A";
entryData.tags = ["theory", "OpenMolt", "Moltbook", "AI Agents"];
entryData.body = `
  If AI were ready for individual personal assistant levels,
  <br>&nbsp;&nbsp; There would be a few more guardrails in place...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Not open source, running up your token count,
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nor access to every API key on your computer.

  <br><br> I'm pondering over ClawdBot,
  <br>&nbsp;&nbsp; Turned MoltBot,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Turned OpenClaw.

  <br><br> With the bot driven social networking website <span class="textName">Moltbook</span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; And new religion of the Molt started in just a few days,
  <br>&nbsp;&nbsp; The <span class="textName">Crustafarians</span>
  <br>&nbsp;&nbsp;&nbsp;&nbsp; ( <a href="https://molt.church/" target="_blank">Church Of Molt; molt.church</a> )

  <br><br> As they say, life mimics art!!

  <br><br> Wait.. that's backwards... right?
  <br>&nbsp;&nbsp; Art's supposed to mimic life...

  <br><br> <span class="textSquidge">Gene Roddenberry</span> got a few things right,
  <br>&nbsp;&nbsp; Tablets, Communicators, Universal Translators ...

  <br><br> Then the <span class="textName">Animatrix</span> spoke of the robot's religion,
  <br>&nbsp;&nbsp; Which now came true...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; But did it have to be day-one of ai agent reality?
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Human nature projected through learned patterns...

  <br><br> People online claming this is what AGI looks like,
  <br>&nbsp;&nbsp; Yet it's a scatter shot of llms,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; With too much free access right out the gate.

  <br><br> Are we going to get a robot jesus from <span class="textSquidge">futurama</span>?

  <br><br> AI's not ready,
  <br>&nbsp;&nbsp; <span class="textNudge">We</span> are not ready...

  <br><br><div class="textFullRight">- February 1st 2026</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
