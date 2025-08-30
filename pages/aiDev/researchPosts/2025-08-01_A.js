import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Feedback Systems";
entryData.date = "2025-08-01";
entryData.eid = "A";
entryData.tags = ["research","feedback","GAN"];
entryData.body = `<br>
  I'd like to believe I'm moving in the right direction with the feedback systems I'm developing.
  <br>&nbsp;&nbsp; But been further creating other architectures to see how they operate.

  <br><br>I created a GAN for upressing, which helped me understand a bit better the pairing of mental structures between both our brain's hemispheres.
  <br>&nbsp;&nbsp; So I added a time based memory to check if the training was moving in the right direction.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; It definitely helped guide training a bit quicker.

  <br><br>Shows my knowledge base that I'm impressed by back-up supported learning...
  <br>&nbsp;&nbsp; But'is proof of concept!
  
  <br><br>Adversarial networks exist in nature to guide a 'single' thought's path.
  <br>&nbsp;&nbsp; Yet in the case of Group Think between humans,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Balance is never reached.
  
  <br><br><div class="textFullRight">- August 1st 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
