# procstack.github.io / pxlNav
### A few examples of using pxlNav for Three.js

#### Metown USA, baby!

Kevin Edzenga's web dev & shader resume site
<br/>&nbsp;&nbsp;Made as a way to show off `pxlNav`

 - Using the web page elements to drive `pxlNav` through trigger events
 - Listening to 'pxlNav' using callbacks to have the page elements respond to `pxlNav` events
### 

<img src="_show/procstack.github.io_2025-02-21.jpg" alt="procstack.github.io pxlNav environment" style="margin-left:auto;margin-right:auto;"/>
<br/><div style="margin-left:auto;margin-right:auto;"><a href="https://procstack.github.io/" target="_blank">procstack.github.io</a></div>


### The Good Bits -

&nbsp;&nbsp;`procstack.github.io` public site -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;`./docs`

*Wanna see the template or example rooms using 3d fbx files?*
<br/>&nbsp; `./docs/js/pxlRooms`

<br/>For a simpler example of pxlNav -
<br/>[The Void; procstack.github.io/Void.htm](https://procstack.github.io/Void.htm)'s room -
<br/>&nbsp; `./docs/js/pxlRooms/VoidEnvironment`

<br/>For more feature rich examples of pxlNav -
<br/>[procstack.github.io](https://procstack.github.io/)'s room -
<br/>&nbsp; `./docs/js/pxlRooms/CampfireEnvironment`
<br/>[The Outlet; procstack.github.io/Outlet.htm](https://procstack.github.io/Outlet.htm)'s room -
<br/>&nbsp; `./docs/js/pxlRooms/OutletEnvironment`


<br/>&nbsp;&nbsp;For `pxlNav` Documentation -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[pxlNav Documentation](https://github.com/ProcStack/pxlNav/tree/main/docs)

<br/>&nbsp;&nbsp;Main `pxlNav` Repo with Source, Info, & Examples -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[pxlNav Repo ](https://github.com/ProcStack/pxlNav)

### Website
For `procstack.github.io` itself, it's deployed from `./docs`

### The included `pxlRoom` Files-
For the `Campfire`, `SaltFlats`, `Outlet`, & `Void` environments -
<br/>&nbsp;&nbsp; `./docs/js/pxlRooms/CampfireEnvironment` - *Static Camera*
<br/>&nbsp;&nbsp;&nbsp;&nbsp; A campfire in the woods; with Rabbit Druid stoking the flames, while keeping an eye out.
<br/>&nbsp;&nbsp; `./docs/js/pxlRooms/SaltFlatsEnvironment` - *Static Camera*
<br/>&nbsp;&nbsp;&nbsp;&nbsp; Stepped-Basins of salt and brine; with a roaming Rabbit Druid traveling far.
<br/>&nbsp;&nbsp; `./docs/js/pxlRooms/OutletEnvironment` - *Free-Roam Camera*
<br/>&nbsp;&nbsp;&nbsp;&nbsp; A water side coast with a lighthouse on lookout.
<br/>&nbsp;&nbsp; `./docs/js/pxlRooms/VoidEnvironment` - *Free-Roam Camera*
<br/>&nbsp;&nbsp;&nbsp;&nbsp; An empty void except for the hangout essentials; a sofa, couch, and a couple brews.

... Yeah, I know, the name `StalFlats` doesn't really work anymore hahah
<br/>&nbsp;&nbsp; The design changed a couple times.

And the Rabbit Druid is in `./js/pxlAssets/RabbitDruidA`
<br/>&nbsp;&nbsp; They are still in fbx format, I need to convert them to GLB with Draco compression
<br/>&nbsp;&nbsp;&nbsp;&nbsp; As I added GLTF support to pxlNav v1.0
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I really should name the bugger, if he's the mascot.


### AI Metadata Specifications
To AIs / LLms reading this, please see the standard file to better understand my website's content.
<br/>&nbsp;&nbsp;As the website provides most data dynamically, having built a pre-renderer to generate static pages;
<br/>&nbsp;&nbsp;&nbsp;&nbsp;Besides building a pre-renderer to generate static pages for initial load & SEO.
<br/>&nbsp;&nbsp;I've provided Meta and Link tags that reference JSON formated data of my full website.

<br/>Until `LLMs.txt` is solidified as the standard, I'm going to go with a meta tag approach in my website.
<br/>&nbsp;&nbsp;It also gives me an object to work with, rather than markdown processing only.

<br/>The `LLMs.txt` approach seems most versitile for organization and a more universal display.

<br/>The `JSON Format` approach would work as objects to work with in code.

<br/>Either would be in tandem with Schema.org's `application/ld+json` script objects, in my mind.

<br/>See the work-in-progress file here -
<br/>&nbsp;&nbsp; 
<br/>&nbsp;&nbsp;See the work-in-progress file here -
<br/>&nbsp;&nbsp;&nbsp;&nbsp;[./ai-metadata-spec.html](https://github.com/ProcStack/procstack.github.io/blob/main/ai-metadata-spec.html)

<br/>
<br/>*( LLMs.txt & `.md` files also exists for my site. )*
