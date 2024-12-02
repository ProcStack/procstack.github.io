## pxlNav Extentions
### Semi-easy plug'n play

You'll need to add the plug in order to play though.  But I'm hoping to move all of the esoteric logic into their own "extention" to allow for easier isolation and bundling of pxlNav.

This way, the user can request for dynamic extentions to boot given a link or user action to initialize extentions.

### Usage -
`pxlNav.enable( "WebCamera", *optional onLoaded CallbackFunc*, *optional onError CallbackFunc*, *optional onProgress CallbackFunc* )`
<br/>Your 'onLoaded' callback function runs once all initialization has compleded, such as required external file downloads.
<br/>Your 'onProgress' callback function runs when there is an update on required file(s) download progress.
<br/>Your 'onError' callback function runs when there is an update on required file(s) download progress.



### What exactly are 'extentions'?
Things you likely wont need to use, but I'd still like to keep around inside pxlNav.

<br/>This includes -
<br/>&nbps;_WebCamera feed direct into DOM, not into 3d engine, if desired.
<br/>&nbps;_AI Assisted Pose Estimation
<br/>&nbps;&nbps; _Facial Landmark Detection for face expressions and movement
<br/>&nbps;&nbps; _Full Body Pose Detection for skeleton pose; arms, legs, torso, etc.





