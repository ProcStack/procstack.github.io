# pxlNav v0.0.2 Documentation
### November 19th 2024

*Note* - Until my transfer to gh-pgaes and automated webpacked releases, this set of Docs will be out of date
<br/>I'll do what I can to maintain parity.
<br/>However, the `pxlNav_assetPrp.mel` script will always be up-to-date
<br/>&nbsp; So if you can add an attribute in Maya from the window, it's supported in pxlNav to some capacity.



Here you'll find scene files, scripts, heirachy needs, and other supportive information to help create your own pxlNav environment in browser.

Folders -
`docs` - pxlNav documentation


`utils` - scripts & tools to aid in pxlNav prep
<br/>Since Maya & Houdini were the primary programs used in development of the initial pxlNav pipeline, most scripts/tools are written in MEL and Vex/HOM Python. Specifications for Blender, Cinema4D, and other 3d programs can reference the `user-details` attributes in the docs,
You'll need to manually add those attributes in your program of choice.



Note-
Primary question you may be asking is,
  Why `import`s instead of `require`s?
I decided it would be easier for isolating
  code entry points and webpacking to a client loaded js map.
Should this be ill advised, I'm willing to listen to suggestions.
But feels easier for server side traffic management,
  and client side web workers keeping track of versioning/caching.
Which aids in progressive web app publishing,
  or single page interfaces like a github.io page.
This does complicate using managed packages,
  so, playing around with pre-building script ideas for now.
	  Such as ViewEngine collapsing on build.