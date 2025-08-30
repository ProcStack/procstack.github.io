import { baseEntryStruct, blogEntry } from '../../../js/blog/blogEntryBase.js';

const entryData = baseEntryStruct();
entryData.title = "Hoping for Nuance";
entryData.date = "2025-08-16";
entryData.eid = "A";
entryData.tags = ["ethics","direction","nuance"];
entryData.body = `
  So, more'n more there are some rather choice words about AI online.

  <br>
  <br>I wanted to put my personal ai dev views on record somewhere, for those who care.
  
  <br>
  <br>I read the <span class="textName">I Ching</span> and it put life into a different perspective.
  <br>&nbsp;&nbsp; Letting me down the path of researching Taoism

  <br>
  <br>As with many of the other religious texts I looked into,
  <br>&nbsp;&nbsp; Amazing imagery was used to teach morals and help guide the lost,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; But organized religion as a whole feels a little off to me.

  <br>
  <br>I don't hold any particular belief or religion at this point.
  <br>&nbsp;&nbsp; But I would use the cliche 'spiritual' to describe my outlook

  <br>
  <br>I then visited the Buddhist monastery in Carmel NY,
  <br>&nbsp;&nbsp; Greeted by the largest buddha statue in north america.
  <br>&nbsp;&nbsp; In awe of the multitudes of multitudes of hand-carved buddha statuettes in audience of the massive statue of buddha I pale in comparison before.

  <br>
  <br>I'd highly suggest visiting the monastery if you ever find yourself in the area!

  <br>
  <br>I think it was walking through the rows of 18 arahants statues, of those who reached nirvana, helped me realize,
  <br>&nbsp;&nbsp; Religion is about teaching the lessons of god(s),
  <br>&nbsp;&nbsp; Yet understanding balance is what's inside all of us as Humans,
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Just gotta find it!

  <br>
  <br>So,
  <br>&nbsp;&nbsp; I'd like to hope I'm nuance-first with my approach to my ai development.
  <br>&nbsp;&nbsp; I'd like to believe in an AI which can understand...
  <br>&nbsp;&nbsp;&nbsp;&nbsp; That overlooked concepts matter in Health and Wellbeing.

  <br>
  <br>Realistically, the Buddhist Precepts feel like a good place to start for alignment.
  <br>&nbsp;&nbsp; Even as people.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; Which is more than I can say for myself....
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I'm a hedonist at times, absurdist the rest
  <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="textItalic">(Absolute terms are fun to use, hyperbole be a thing)</span>

  <br>
  <br>I very much enjoyed working on family films,
  <br>&nbsp;&nbsp; Seeing the fans in comments online,
  <br>&nbsp;&nbsp; And wish to work on more animated features soon.
  <br>&nbsp;&nbsp;&nbsp;&nbsp; I have hope in humanity
  
  <br>
  <br>May the few not ruin it for those of us trying to explore new horizons.

  <br><br><div class="textFullRight">- August 15th,16th 2025</div>
`;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };
