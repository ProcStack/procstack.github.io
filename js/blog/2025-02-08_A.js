import { baseEntryStruct, blogEntry } from './blogEntryBase.js';

let entryTitle = "Visibility in Design";
let entryDate = "2025-02-08";
let entryTags = ["layout", "design", "visibility", "expression", "pages", "february", "2025"];
let entryBody = `
I'll ussually have an idea of how a site/tool/project will look & operate in my head, but that's version 1.
  Seeing it in action; the practicallity of it all is a whole other thing.

Only finally getting into the nitty gritty of flow to a web page when there's actual content to proove the original design idea.

Maybe I could have spent more time designing the layout of the movement of information,
  Blockage of desired content, like images needing to be scrolled down to see.
    To have figured it out a little more about What I wanted to actually show on this site itself first.

So the site was a bit stiff at first.

Column of information with no true differentiation of what you are looking at & when.
Scroll'ed down a touch, an no header stayed with you.
No lit button on the menu bar.
What page am I on?

Welp, that's gotta change.

- Move 'Repo' into 'Projects/Links'
- Move 'pxlNav' over for a 'MakingOf' section
- Indicate what freakin page you are on.
- Add 'gear' to open pxlNav settings
- Add 'book' to open the blog.... maybe
   It's still here after-all.



<br>&nbsp; -Kevin Edzenga
`;

const entryData = baseEntryStruct();
entryData.title = entryTitle;
entryData.date = entryDate;
entryData.tags = entryTags;
entryData.body = entryBody;

const blogEntryObj = new blogEntry(null, entryData);

export { blogEntryObj };