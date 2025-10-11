<?php
// Dunno how you found this, I guess you hacked into my website.  Good show, Pops is pleased.
// If you feel like letting me know of the scurity bug, send a Contact Form to me with the start of your message-
// 'Every banana is a clone.'

$page=basename($_SERVER['SCRIPT_NAME']);
if(!isset($_SERVER['HTTPS']) && $_SERVER['HTTP_HOST']!='localhost' && $page=="index.php"){
	header('HTTP/1.1 301 Moved Permanently');
	header('Location: https://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']);
	exit();
}

$dev='';
$devVal=0;
$swCache=1;

if($_SERVER['HTTP_HOST']=='localhost'){
	$devVal=1;
	if(isset($_GET['sw'])){
		$swCache=$_GET['sw'];
	}else{
		$swCache=0;
	}
}
if($page=="index.php"){
	$_GET['count']=1;
	if(!isset($_GET['dev'])){
		include('count.php');
	}
}else if($page=="indexDev.php"){
	$devVal=1;
}
//Display key stroke
$printKey=0;
//Display stats
$printStat=0;
if(isset($_GET['stats'])){
	$printStat=1;
	if(isset($_GET['key'])){
		$printKey=1;
	}
}
//Display stats
$genMimic=0;
if(isset($_GET['mimic'])){
	$genMimic=1;
}
$mobile=0;
if(isset($_GET['m'])){
	if(is_numeric($_GET['m'])){
		$mobile=$_GET['m'];
	}
}else{
	$useragent=$_SERVER['HTTP_USER_AGENT'];
	$mobile=0;
	if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){
		$mobile=1;
	}
}

$barSlide="bar";
if($mobile==1){
	$barSlide="slide";
	$burgerSize="height:40px;width:60px;";
	$burgerPattySize=50;
	$burgerPattyBtm=3;
	$burgerPattyBtmParent=-1;
}else{
	$burgerSize="height:50px;width:120px;";
	$burgerPattySize=60;
	$burgerPattyBtm=2;
	$burgerPattyBtmParent=9;
}
// Activate dev mode
if(isset($_GET['dev'])){
	if($_GET['dev']!='0'){
		if($_GET['dev']=='1' || $devVal==1){
			if($_SERVER['HTTP_HOST'] != "localhost"){
				$dev='Dev';
			}
			$devVal=1;
		}
	}else{
		$devVal=0;			
	}
}

// Needs some more love here -- 
$verbose=0;
if(isset($_GET['v']) || isset($_GET['verb']) || isset($_GET['verbose']) || $devVal==1 ){
	$verbose=1;
}
// Activate slim load mode
$slimSwtich=0;
if(isset($_GET['slim'])){
	$slimSwtich=$_GET['slim'];
}
$slimSwtich=1; // Remove once none slim is loading faster
// Send posted email
if(count($_POST)>0){
	$to  = "pxl@pxlmancer.com";

	$subject = 'Pixelmancer contact from - '.$_POST["name"];

	$message = $_POST["comment"];
	if($_POST["comment"] != "" && ($_POST["email"] != "" && strpos($_POST["email"], '@') !== false)){

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'To: Kevin Edzenga <pxl@pxlmancer.com>' . "\r\n";
		$headers .= 'From: '.$_POST["name"].' <'.$_POST["email"].'>' . "\r\n";
		mail($to, $subject, $message, $headers);


		$to  = $_POST["email"];

		$subject = 'Pixelmancer contact from - '.$_POST["name"];

		$message = "Thank you for your email, I'll get back to you shortly.";

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'To: '.$_POST["name"].' <'.$_POST["email"].'>' . "\r\n";
		$headers .= 'From: Kevin Edzenga <pxl@pxlmancer.com>' . "\r\n";
		mail($to, $subject, $message, $headers);
	}
}

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
<meta name="msapplication-navbutton-color" content="#102030">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="#102030">
<title>Pixelmancer :: Graphic Editor</title>
<meta name="description" content="Free online graphic editor for the dedicated or to fill boredom.  Make something cool or toy around, its up to you!">
<meta name="keywords" content="draw,art,graphic,design,draw,create,fun,web,app,free">
<meta name="author" content="Kevin Edzenga">
<meta name="revisit-after" content="5 days">
<meta name="ROBOTS" content="INDEX, NOFOLLOW">

<link rel="apple-touch-icon" sizes="180x180" href="https://pxlmancer.com/icon/apple-touch-icon.png">
<link rel="icon" type="image/png" href="https://pxlmancer.com/icon/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="https://pxlmancer.com/icon/android-chrome-192x192.png" sizes="192x192">
<link rel="icon" type="image/png" href="https://pxlmancer.com/icon/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="https://pxlmancer.com/icon/manifest.json">
<link rel="mask-icon" href="https://pxlmancer.com/icon/safari-pinned-tab.svg" color="#102030">
<link rel="shortcut icon" href="https://pxlmancer.com/icon/favicon.ico">
<meta name="apple-mobile-web-app-title" content="Pixelmancer">
<meta name="application-name" content="Pixelmancer">
<meta name="msapplication-TileColor" content="#102030">
<meta name="msapplication-TileImage" content="https://pxlmancer.com/icon/mstile-144x144.png">
<meta name="msapplication-config" content="https://pxlmancer.com/icon/browserconfig.xml">
<meta name="theme-color" content="#102030">
    
<?php /* <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0"/> */ ?>

<!--
Hey guys, feel free to poke around in the scripting.
-----
We are all trying to learn in life; and that is the main idea behind this project for me.
Learn some pixel processing and build a library of functions.
Scripts I can use in the future to bootstrap a site together.

I'm pretty happy with how this project is turning out.  Back in early 2014, this was just a site you can draw some multi-color blue strokes on a blank screen.
I'd put it down, move onto something else.  Again, pick it up and I'd put it down.. and the like would repeat itself.
Lather, rinse, and repeat... endlessly.
Early June 2016, sat down and shifted down my gears and got a boost of pick up to turn this site into something real.
Since then, it turned into some sort of online digital painting package.

Also, you may see some methods where I resort to using pixel processing instead of easier drawImage to context.
(Look at undoOption vs snapshot for example)
I'm doing this with intention of having blending math between layers in the future.
While its a little slower now, it will allow for more functionality when I get to it.
... When I get to it ... The running motto for this project, haha.

Live and learn!
-Kevin Edzenga
- kevin@pxlmancer.com

----------------------
Thanks to all these online resources in my journey to learn new things-
stackoverflow.com
w3schools.com
nczonline.net
formget.com
----------------------

The juicy bits of javascript/jquery--
Keyboard Shortcuts, detect keypress and run script- (There is a small rundown of keyboard key values above these lines)
	js/boot.js - $(document).on('keypress', function(e){ ...
	js/boot.js - $(document).on('keyup', function(e){ ...
	
Draw a gradient between two points on a canvas- (Name of canvas is in the function)
	js/menu.js - gradientRunner(*canvasId*,*colorFrom_#FFFFFF*,*colorTo_#000000*,*runBlur_breakUpBanding_0or1*)
		The bluring uses-
	js/canvasEffects.js - blurEffect(*inputCanvasId*,*outputCanvasId*,*workArea_toBlur_[x1,y1,x2,x3]*,*blurDistance*,*iterationsOfBlur*);
	 -This uses a global variable to read point positions based on 0-1 percentage of the canvas height/width
	  bgGradientPoints=[%x1,%y1,%x2,%y2]
	  ie. bgGradientPoints=[.25,0,.75,1];

Draw a canvas shape and color it in with pixel processing-
	js/menu.js - sliderShape(*parentDiv*,*canvasId*,*alpha_0-1*,*arrowHeight_fromBottom*)

Sample a point color from a canvas-
	js/math.js - sampleCanvas(*canvasId*,*mousePos_relativeToCanvas*)

Draw a line with as many points as given to a canvas-
	js/math.js - drawLine(*[x1,y1, x2,y2, ... xn,yn]*,*widthOfLine*,*[red_0-255,green_0-255,blue_0-255]*,*alpha_0-1*,*lineConnectType_0-2*,*canvasId*)

Draw a geometric shape with as many points as given to a canvas-
	-edgeCount <= 2 creates a circle with different gradient fills.
	js/math.js - drawGeo(*centerOfShape_[x,y]*,*edgeCount*,*diameterOfShape*,*[red_0-255,green_0-255,blue_0-255]*,*alpha_0-1*,*filledInShape*,*canvasId*)

Convert [###,###,###] to hex color code-
	js/math.js - rgbToHex(*red_0-255*, *green_0-255*, *blue_0-255*)
		With-
	js/math.js - componentToHex(*0-255*)

Colapse multiple canvases into one usable image-
	js/math.js - snapshot(*canvasId*, *canvasToMergeId*, *backgroundCanvas*, *saveToDisk_or_flattenedImageDataURl*)

Download given canvas data- (Only loads a new tab; work in progress to go directly to download)
	js/math.js - downloadSnapshot(*downloadName*,*canvas.toDataURL()*)
	
Copy and scale one canvas into another-
	js/menu.js - updateLayerCanvas(*layerName_YouNeedToEditThis*)

Set up a double clickable object-
	js/math.js - cmdDoubleClick(*divObject*,*length_doubleClickTimeOut*,*functionToRun*,*0_initializeValue*)
	
----------------------
Whats new !?  -  (M/D/Y)
V1.0 - 3/16/2014
  Released!
V1.1 - 12/6/2014 - 12/10/2014
  Color picker,
  More Optimized pixle processing localization
    -Finds where you draw and processes filters instead of going through the whole screen
	-Some phones can actually use filters now! Hizza!
  Hue Attack and Hue Smudge filter mode
  Added a bunch of things to speed up over all performance
  Sped up the processing logic for Eat Away and added same logic to Hue Attack and Hue Smudge
V1.2 - 1/19/2015
  click count now, I'm using this in generating random noise patterns in the filters
V1.3 - 1/3/2016-4/1/2016 - Intermittent
  Split out javascript into their own files, sorry for anyone looking through the code. This just makes it easier for me to look through and edit my code.
  Added contact information.
  Other random small things, bug fixes.
V1.4 - 6/4/2016-11/12/2016 -
  [ Update note---  I worked on Pixelmancer EVERY FRIGGIN day in this time frame.... Holy hell.... I needed sleep when I was done... ]
  [ At 2097 lines of scripting, before any of these following updates were made, this is what the site looked like -  ]
	The intro - http://pxlmancer.com/show/oldIntroScreen.jpg
	The GUI - http://pxlmancer.com/show/oldGui.jpg
  [ Compared to after the updates were done - ]
	The intro - http://pxlmancer.com/show/ver1.4_IntroScreen.jpg
	The GUI - http://pxlmancer.com/show/ver1.4_Gui.jpg
  Quite a change if I don't say so myself, haha
  ----------------------------------------------
  Buttons finally toggle on and off, took long enough, hah
  Added the ability to Save Drawing
   -Full sized drawing with transparent or current gradient background
   -Cropped to working size of the drawing, with transparent or current gradient backgrounds as well
  Switched over my user counter system to be easier to read on my end, along with current line count of the entire project.
   (You can view the stats in the 'Info' dialogue)
   This is the only blackbox section of the site, sorry guys.
  Added "About Me" section, for those who are interested.
  Fixed a lot of the mobile screen size issues
  Started work on the Color Sphere
   -Click and drag to blend colors together in the picker itself
   -Then click the color sphere to pick it
   -Allows easier ability to stay in the same color range as the area of the project you are working on.
   -Hotkey saves and loads of the custom modified Color Sphere
  Brush tools have been introduced!
   -Blur
   -Deblur
   -Scatter
   -Lighten
   -Darken
   -Desaturate
  Warning/Temporary message pop-ups
  Upload image to background
  Terms of Service
  Keyboard Shortcuts - Has been making my time with the site easier to use!
   - Enter - Close or Accept changes made in dialogue windows
   - Space bar - Toggle menu visibility
   - Q - Clear the screen
   - Z - Undo
   - N - Create a new layer
   - H - Toggle layer visibility (Layer name turns blue)
   - M - Toggle layer mask (Layer name turns italic)
   - S - Save current drawing
   - F - Run the current filter once
   - 0-9 - Set/Load Color Sphere swatch to that number key.
   - 0-9 - Held down, reset hotkey with current Color Sphere.
   - ~ - Reset Color Sphere to Red/Green/Blue.
   - ~ - Held down, sets the Color Sphere to white.
  Undo is also working better
  Layer support is now working
   - New Layer
   - Rename Layer
   - Reorder Layer
   - Delete Layer
  Ability to edit the background's colors and gradient placement (double click the background layer)
  Save and Load the document! (Woot! [Also surprized the file size is pretty small.])
   -Save/Load Layers (Names, order, drawing contents)
   -Save/Load Swatches
  New document option
  Mouse controls
   - Left Click - Draw on the current layer
   - Wheel Click - Move document around
   - Wheel Scroll - Grow / Shrink line size
   - Right Click - Zoom in & out when moved right & left (respectively)
  Sped up erase brush tool
  Added brush bluring
  Added introduction dialogue to ask what the user wants to do at the site
  Added Sweep brush
  Added Shape Tool
V1.5 - 10/9/2019-11/17/2019 -
  [Hello old friend! Decided it was time to revamp a few things and get a new GUI going!]
  Shape Tool updates
    - Now supports multiple shapes at once
    - Inputting and copying of shape point positions
        [ x1,y1, x2,y2, ..., xn,yn ]
           - For multi shapes -
        [ [ x1,y1, x2,y2, ..., xn,yn ], [ x1,y1, x2,y2, ..., xn,yn ] ]
  Rounded edges on everything... The winds of idea seemed to hit quite a few this time.
  Things are more grey now, instead of the dark green
  New Menu and GUI designs created, added soon
    - New circular buttons with icons are in the works
    - Carousel swiping menu choises instead of stacked buttons (Soon)
    - Dynamically generated button icons, keeping graphic design down, easy icon updates
  Implimenting ThreeJS for GPU based filters, pixel processing, 3d transforms
    - Will allow for much faster filters and brush tools
    - The transform tool is currently 2d and buggy
        making it a 3d plane will allow for easier editing of
        translation, rotation, skew, scale, perspective
    - Merging layers and stacked layer color mode effects will be easier to apply
  Intro revamp
    - Why did I have a grid in the first place?
	    a per pixel representation?
              BEDAMNED!
           Auto-Draw!
-->

<script type="text/javascript">
	var dispStats=<?php if($mobile==1){ echo '1'; }else{ echo $printStat; } ?>;
	var mobile=<?php echo $mobile; ?>;
	var devMode=<?php echo $devVal; ?>;
	var verbose=<?php echo $verbose; ?>;
	var menuPref='<?php echo $barSlide; ?>';
	var slimLoad='<?php echo $slimSwtich; ?>';
	var printKey='<?php echo $printKey; ?>';
	var genMimic='<?php echo $genMimic; ?>';
	var mapToDoList='';
</script>
<?php if($devVal==0 && $swCache==1){ ?><script>
//Register offline service worker - I'm still blown away that this is a thing!
//Check out offline caching, but you need to have an ssl enabled website (HTTPS)-
//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
//Suplimentary example files-
//https://github.com/mdn/sw-test
window.isUpdateAvailable=new Promise(function(resolve, reject){
	if('serviceWorker' in navigator){
		<?php if($_SERVER['HTTP_HOST']=='localhost'){ ?>
			var sc="/projects/Metal-Asylum/";
		<?php }else{ ?>
			var sc="/";
		<?php } ?>

		navigator.serviceWorker.register(sc+'served.js', {scope: sc})
		.then(function(reg){
			reg.onupdatefound= function(){
				const installingWorker=reg.installing;
				installingWorker.onstatechange=function(){
					if(installingWorker.state=="installed"){
						console.log("Pxlmancer's Service Worker is already installed\n"+
							"You can launch https://pxlmancer.com like an app offline with this!");
						if(navigator.serviceWorker.controller){
							resolve(true);
						}else{
							resolve(false);
						}
					}else{
						console.log("Ahoi!  Soooo, this Javascript Worker is going to load now...\n"+
							"It this newer tech Google created to help people create cool sites to branch out more!"+
							"Its called a Progressive Web App, helping my site load on your end easier, quicker,\n    and without using as much of your data plan,\n        Well, the next time you pop by."+
							"\nThat may sound scary cause its some 'pxlmancer' website latching onto your device like some leech!"+
							"But it helps! Pxlmancer can reach more people! ... Ok, that still sounds bad...\n"+
							"\nPixelmancer can now load offline when visiting - https://pxlmancer.com"+
							"Or launched as an app after saving it to your homescreen!"+
							"Pixelmancer is 'bout 5meg total; updates occur automatically when visiting online."+
							"\n\nJavaScript Service Worker registered to browser. Scoped to "+reg.scope);
					}
				};
			};
		}).catch(function(err){
			console.log('Service Worker failed to register - '+err);
		});
	}
});
</script><?php } ?>
<script type="text/javascript" src="jquery-1.11.0.min.js"></script>
<?php $dev=''; ?>
<link rel="stylesheet" href="pixelmancer<?php echo $dev; ?>.css">
<script type="text/javascript" src="js<?php echo $dev; ?>/variables.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/loader.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/interface.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/prePostTouch.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/math.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/boot.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/menu.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/dialogues.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/imby.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/colorSphere.js"></script>
<?php if($mobile==0){ ?>
<script type="text/javascript" src="js<?php echo $dev; ?>/canvasEffects.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/brushTools.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/selectTool.js"></script>
<?php } ?>
<script type="text/javascript" src="js<?php echo $dev; ?>/drawTouch.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/howTo.js"></script>


<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_three.min.js"></script>
<!-- <script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/three.min.js"></script> -->
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/EffectComposer.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/RenderPass.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/CopyShader.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/ShaderPass.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/dat.gui.min.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/stats.min.js"></script>

<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_boot.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_variables.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_interface.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_coreScripts.js"></script>
<script type="text/javascript" src="js<?php echo $dev; ?>/mapGLSL/map_cameraControl.js"></script>
<!-- variables.js -->


<?php /*<script type="text/javascript">
//---------------------------------------------
//---------------------------------------------
// Both functions below are currently not working as intended
// Trying to get cellphones to launch into full screen
//launchFullscreen(window.document.documentElement);

// Scroll one pixel to get the address bar to disappear
//window.scrollTo(0, 1);
</script>
*/ ?>



<!-- == == == == == == == == == == == == == -->
<!-- ==  Post-Processing Render Passes   == -->
<!-- == == == == == == == == == == == == == -->

<script type="x-shader/x-vertex" id="defaultVert">
	varying vec3 pos;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}
</script>
<script type="x-shader/x-vertex" id="curvingVert">
	uniform float uTimer;
	uniform float uScale;
	uniform float uOffset;
	varying vec3 pos;
	varying vec3 off;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		
		vec3 offset=vec3(0.0,0.0,  abs(position.x-uOffset*5.0));
		pos=position;
		off=offset;
		offset.z=(1.0-(1.0-offset.z)*(1.0-offset.z)) *.001;
		
		vec4 modelViewPosition=modelViewMatrix * vec4(position+offset, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}
</script>
<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
<script type="x-shader/x-fragment" id="defaultFrag">
<?php /* #include <packing> */ ?>
	//precision mediump float;
	uniform sampler2D tDiffuse;
	varying vec2 vUv;
	void main(){
		vec4 Cd=texture2D(tDiffuse, vUv);
		gl_FragColor=Cd;
	}
</script>
<script type="x-shader/x-fragment" id="imbyWarpFrag">
<?php /* #include <packing> */ ?>
	//precision mediump float;
	uniform sampler2D tDiffuse;
	varying vec3 pos;
	varying vec3 off;
	varying vec2 vUv;
	void main(){
		vec4 Cd=texture2D(tDiffuse, vUv);
		float hlight=1.0-min(1.0, off.z*.1);
		hlight*=hlight*hlight;
		Cd.rgb+=(vec3(hlight)*(Cd.rgb*Cd.rgb))*.8-.4;
		gl_FragColor=Cd;
	}
</script>

<script type="x-shader/x-fragment" id="gridFrag">
<?php /* #include <packing> */ ?>
	//precision mediump float;
	varying vec2 vUv;
	void main(){
		vec4 Cd=vec4(  step( mod(vUv.x*20.0+.015, 1.0), 0.03) + step( mod(vUv.y*20.0+.015, 1.0) , 0.03) + step( mod(vUv.x*10.0+.02, 1.0), 0.04) + step( mod(vUv.y*10.0+.02, 1.0) , 0.04)  );
		gl_FragColor=Cd;
	}
</script>


<script type="x-shader/x-fragment" id="imbyCardFrag">
	uniform sampler2D tDiffuse;
	uniform sampler2D tGlowMask;
	uniform sampler2D tGlowPass;
	uniform sampler2D tGlowNoise;
	uniform float uOffset;
	uniform float flicker;
	uniform float time;
	uniform float cropTop;
	uniform float cropBottom;
	uniform float resPerc;
	uniform float xRes;
	uniform float yRes;
	uniform float xRatio;
	uniform float yRatio;
	varying vec2 vUv;
	
	vec4 reachOut(float reachMult, vec4 noise){
		vec2 n=(noise.xy-vec2(.2,.5))*abs(noise.z-.5)*.1+vec2(.0,-.02);
		float reachInf=max( n.x, n.y );
		vec2 fitUV=vUv;//*resPerc;
		vec2 curUV=fitUV+n;
		vec4 ret=texture2D(tGlowPass, curUV);
		//ret=mix(ret, texture2D(tGlowPass, fitUV), (1.-ret.a) );
		//ret+=texture2D(tGlowPass, fitUV);//*(1.-ret.a);
		//ret=max(ret, texture2D(tGlowPass, curUV) );
		vec4 multCd=vec4(vec3(1.),reachInf);
		
		float dir=0.8;
		vec4 uvSample;
		curUV=fitUV+n + vec2( 0.0, -yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		
		dir=0.65;
		curUV=fitUV+n + vec2( xRatio, -yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		curUV=fitUV + vec2( -xRatio, -yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		
		dir=0.45;
		curUV=fitUV+n + vec2( -xRatio, 0.0 )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		curUV=fitUV + vec2( xRatio, 0.0 )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		
		dir=0.3;
		curUV=fitUV+n + vec2( xRatio, yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		curUV=fitUV + vec2( -xRatio, yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		
		dir=0.15;
		curUV=fitUV+n + vec2( 0.0, yRatio )*reachMult*dir;
		uvSample=texture2D(tGlowPass, curUV);
		ret=mix(ret, uvSample*multCd*reachInf, (1.-ret.a)*dir*reachInf );
		
		return ret;
	}
	
	void main(){
		float timer=time*.03;
		vec4 origCd=texture2D(tDiffuse, vUv);
		vec4 Cd=origCd;
		vec4 passCd=texture2D(tGlowPass, vUv);
		vec4 noiseCd=texture2D(tGlowNoise, vec2(vUv.x+sin(timer*.5+vUv.x*5.)*.2, mod(vUv.y*.3-timer + sin((vUv.x-.5)*6.0*(passCd.r)),.998)+.001 ));
		float glowMult=texture2D(tGlowMask, vUv).r;
		
		float yMult=( (noiseCd.r-.5)-(noiseCd.g-.5)+(noiseCd.b-.5) )*.1;
		float mouseOffset=( max(0.0, 1.0-abs(vUv.x-uOffset)*4.0) );
		yMult=min(1.0, max(0.0, time*(.30+yMult)-(vUv.y*4.0*( max(0.0, 8.0-time)*.125) )));
		yMult+=mouseOffset*yMult;
		
		float curAlpha=Cd.a*max(glowMult,passCd.a);
		float reachMult=max(0.0, ((1.0-vUv.y)-.5)*1.5+.7)*vUv.y;
		vec4 reachCd=reachOut( 13.0*(1.0-curAlpha*.5)*reachMult+(5.0*mouseOffset)+5.0, noiseCd );
		
		Cd=mix(reachCd, Cd, mix(0., curAlpha*(1.-reachCd.a), Cd.a) );
		//Cd.rgb+=reachCd.rgb*.1+.5;
		Cd.rgb+=reachCd.rgb*.1+.5*yMult;
		Cd.rgb*=vec3( .6, .9, .97 )*reachMult;
		origCd.rgb+=Cd.rgb*Cd.a*.2;
		
		Cd=mix(Cd, origCd, max(0.0, min(1.0, origCd.a)) );
		Cd.a*=yMult;
		Cd.rgb+=mouseOffset*.15;
		//Cd.rgb=vec3(reachMult);
		//Cd.a=origCd.a;
		
		gl_FragColor=Cd;
	}
</script>

<script type="x-shader/x-fragment" id="imbyCardBlurFrag">
<?php /* #include <packing> */ ?>
	//precision mediump float;
	uniform sampler2D tDiffuse;
	uniform float resPerc;
	uniform float xRatio;
	uniform float yRatio;
	varying vec2 vUv;
	
	vec4 blurTexture(float reachMult, vec4 noise){
		vec2 n=(noise.xy-vec2(.8,1.))*noise.z*.1*vec2(.5,.8);
		n=vec2(0.0);
		float reachInf=max( n.x/.3, n.y/.65 );
		vec2 fitUV=vUv;//*resPerc;
		vec2 curUV=fitUV+n;
		vec4 ret=texture2D(tDiffuse, curUV);
		reachInf=ret.a;
		
		curUV=fitUV+n + vec2( 0., -yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV+n + vec2( xRatio, -yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV + vec2( -xRatio, -yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV+n + vec2( -xRatio, 0. )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV + vec2( xRatio, 0. )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV+n + vec2( xRatio, yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV + vec2( -xRatio, yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		curUV=fitUV+n + vec2( 0., yRatio )*reachMult;
		ret+= texture2D(tDiffuse, curUV);
		//ret=mix(ret, texture2D(tDiffuse, curUV), (1.-ret.a)*reachInf );
		
		return ret*0.11111111111;
	}
	void main(){
		vec4 Cd=blurTexture(1., vec4(1.));
		gl_FragColor=Cd;
	}
</script>

<script type="x-shader/x-fragment" id="imbyMaskFrag">
<?php /* #include <packing> */ ?>
	//precision mediump float;
	uniform float fade;
	uniform sampler2D tDiffuse;
	varying vec2 vUv;
	void main(){
		vec4 Cd=texture2D(tDiffuse, vUv);
		gl_FragColor=vec4(Cd.r);
	}
</script>

<!--
<script type="x-shader/x-fragment" id="anchoredMaskFrag">
<?php /* #include <packing> */ ?>
	precision mediump float;
	uniform float fade;
	uniform sampler2D tDiffuse;
	varying vec2 vUv;
	void main(){
		vec4 Cd=texture2D(tDiffuse, vUv);
		gl_FragColor=vec4(Cd.r);
	}
</script>

<script type="x-shader/x-fragment" id="tempMainMenuFrag">
	uniform sampler2D tDiffuse;
	uniform float flicker;
	uniform float time;
	uniform float cropTop;
	uniform float cropBottom;
	uniform float resPerc;
	varying vec2 vUv;
	void main(){
		float timer=time/100.0;
		vec2 sUv=vec2(sin((.99-abs(vUv.x-.5)*resPerc)*3.1415926535),cos((.99-abs(vUv.y-.5)*resPerc)*3.1415926535)*(1.0+flicker*2.0));
		vec4 Cd=vec4(0.5+sin(timer+sUv.x+flicker*.1),0.5+cos(timer+sUv.y),0.5+sin(timer+sUv.x+cos(sUv.y+timer)*3.141592),1.0);
		vec4 offset=vec4(flicker*0.009,flicker*0.005,0.0,1.0);
		//float noise=((vUv.y+ sin(vUv.x*90000.0+vUv.y*26012.0)*.006*(.7+flicker*.5)+cos(vUv.x*40234.0+vUv.y*10000.0)*.006*(.7+flicker*.5))*1.2-.25);
		float noise=(sin(sUv.x*1.2+timer+cos(sUv.y*.80*(sin(sUv.x*sUv.y+timer+offset.x)*.5+.9)*3.14159265+sUv.y*sin(timer*.15)+timer+offset.y)*3.1415926535)*.5+.5)*255.0;
		Cd*=noise;
		float radial=(tan(sUv.y/sUv.x)*sin(timer*1.3))*.5+.5;
		Cd+=radial;
		radial=(tan(sUv.x*sUv.y)*cos(timer*1.5))*.5+.5;
		Cd+=radial;
		Cd*=sin(sUv.x*3.141592);
		Cd+=offset;
		gl_FragColor=Cd;
	}
</script>
-->



</head>
<body onLoad="runInitScripts();">
<div id="loader" loaderVal='1'>
	<table style="font-family:tahoma;font-size:100%;overflow:hidden;height:100%;width:100%;">
		<tr valign='middle'>
			<td align='center'>
				[Loading] - If this stays up more than a few seconds, refresh the page.
			</td>

		</tr>
	</table>
</div>
<div id="postLoader">
<div style="overflow:hidden;height:100%;width:100%;position:fixed;top:0px;left:0px;user-select:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;">
	<div id="imbixBot"><div align='center'><div style="position:fixed;bottom:10%;left:50%;transform:translateX(-50%);"><!--<span style="font-size:200%;font-family:tahoma;color:#99ccbb;letter-spacing:4px;"><b>pxlmancer</b></span><br>--><span style="font-size:100%;color:#6eaaaa;letter-spacing:5px;">click anywhere to start</span><br><span style="font-size:75%;color:#4f8585;position:relative;bottom:3.5px;">--best experienced in <span style="color:#2d8585;">chrome</span>--</span></div>
	<div style="position:fixed;bottom:3px;left:50%;transform:translateX(-50%);z-index:3;"><span style="font-size:55%;color:#6eaaaa;">created by <span style="font-size:145%;color:#2d8585;">kevi<span style="letter-spacing:2px;">n</span>edzenga</span> :: <span style="font-size:100%;color:#2d8585;">201<span style="letter-spacing:-2px;">4 | </span>2019</span> </span></div>
	<div style="position:fixed;bottom:3.5px;left:50%;transform:translateX(-50%);height:1px;width:300px;overflow:hidden;background-color:#374a4a;z-index:2;">&nbsp;</div>
	</div></div>
	<div id="activatedImbix">
		<div id="activatedBG">
		&nbsp;
		</div>
		<div id="fieldGen">
		&nbsp;
		</div>
		<div id="clickField">
		&nbsp;
		</div>
	</div>

<?php if($printStat==1 || $mobile==1){ ?>
	<?php if($printStat==1){ ?>
		<?php if($mobile==0){ ?>
	<div style="z-index:200;visibility:visible;font-size:70%;width:200;position:fixed;right:0px;" align='right'>
		<?php }else{ ?>
	<div style="z-index:200;visibility:visible;font-size:130%;width:300;position:fixed;right:0px;" align='right'>
		<?php } ?>
	<?php }else{ ?>
		<?php if($mobile==0){ ?>
	<div style="z-index:200;visibility:hidden;font-size:70%;width:200;position:fixed;right:0px;" align='right'>
		<?php }else{ ?>
	<div style="z-index:200;visibility:hidden;font-size:130%;width:300;position:fixed;right:0px;" align='right'>
		<?php } ?>
	<?php } ?>
	<span id="responce">&nbsp;</span><br>
	devModeDisplay=<span id="devModeDisplay"><?php echo $devVal; ?></span><br>
	sWDisplay=<span id="sWDisplay">0</span><br>
	sHDisplay=<span id="sHDisplay">0</span><br>
	------------<br>
	dragCount=<span id="dragCount">0</span><br>
	clickCount=<span id="clickCount">0</span><br>
	dragTotal=<span id="dragTotal">0</span><br>
	randomClear=<span id="randomClear">0</span><br>
	sliderClickVal=<span id="sliderClickVal">0</span><br>
	dragClick=<span id="dragClick">0</span><br>
	dragXDiv=<span id="dragXDiv">0</span><br>
	dragYDiv=<span id="dragYDiv">0</span><br>
	maxMag=<span id="maxMag">0</span><br>
	dragColor=<span id="dragColor">0</span><br>
	dragMag=<span id="dragMag">0</span><br>
	------------<br>
	alertFeed1=<span id="alertFeed1">0</span><br>
	alertFeed2=<span id="alertFeed2">0</span><br>
	------------<br>
	prevDragXDiv=<span id="prevDragXDiv">0</span><br>
	prevDragYDiv=<span id="prevDragYDiv">0</span><br>
	------------<br>
	prevPrevDragXDiv=<span id="prevPrevDragXDiv">0</span><br>
	prevPrevDragYDiv=<span id="prevPrevDragYDiv">0</span><br>
	------------<br>
	runner=<span id="runner">0</span><br>
	bglength=<span id="bglength">0</span><br>
	-----------<br>
	toHeaderPrec=<span id="toHeaderPerc">0</span><br>
	------------<br>
	refreshWindowX1=<span id="refreshWindowX1">0</span><br>
	refreshWindowY1=<span id="refreshWindowY1">0</span><br>
	refreshWindowX2=<span id="refreshWindowX2">0</span><br>
	refreshWindowY2=<span id="refreshWindowY2">0</span><br>
	------------<br>
	filterRun=<span id="filterRun">0</span>
	</div>
<?php } ?>

	<!--
	Things to remember-
	Width of .footer line div over rides width of dialogue but not canvas drawn bg.
	-->
	<div id="dialogues" style="overflow:hidden;height:100px;width:100px;z-index:-5;visibility:hidden;position:fixed;top:0px;left:0px;">
	<!--  --  Save Drawing ---------------------------------  -->
		<?php $curDiaName='saveDrawing'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'saveDrawing');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Save your drawing</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<div style="font-size:120%;" align="center">-Click image below to load-<br>-Then right click and save-</div>
			<div style="font-size:90%;" align="center">[ Auto downloads coming soon ]<br>
			<div id="saveDrawingTemp" ></div>
			</div>
			</div>
			<div style="height:360px;">&nbsp;</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
	
		</td></tr>
		</table>
		</div>
<!--  --  How To  ---------------------------------  -->
		<?php $curDiaName='howTo'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'howTo');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>How do I do make a thing?</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<span style="font-size:120%;">If you click anywhere on the screen and drag, you'll draw a line looking thing.</span>
			<br><span style="font-size:120%;">For brush size- The slower you go, the smaller it is;  the faster, the bigger.</span>
			<br><span style="font-size:120%;">If you want a set brush speed, select</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">*WARNING* Some filters are a bit slow, they are animated brush strokes.</span>
			<br><span style="font-size:120%;">With this in mind, if you stay closer to the center of the screen, it will require less work to calculate.</span>
			<br><div align="center"><span style="font-size:120%;">Run in <b>Chrome</b> for best results.</span></div>
			<br><span style="font-size:120%;">I'm working on a version to go fast no matter the browser, but that might not be finished for some time.</span>
			<br><span style="font-size:140%;">Enjoy!</span>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
		
	<!--  --  Keyboard Shortcuts  ---------------------------------  -->
		<?php $curDiaName='keyShort'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'keyShort');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Keyboard Shortcuts</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<span style="font-size:130%;"><b>Left Click</b> - Draw on the current layer</span>
			<br><span style="font-size:130%;"><b>Wheel Click</b> - Move document around</span>
			<br><span style="font-size:130%;"><b>Wheel Scroll</b> - Grow / Shrink line size</span>
			<br><span style="font-size:130%;"><b>Right Click</b> - Zoom in & out when moved right & left (respectively)</span>
			<br><span style="font-size:130%;">Double Right/Wheel click to reset zoom/pan.</span>
			<div align="center"><div style="position:relative;top:5px;height:1px;margin-top:5px;margin-bottom:10px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:130%;"><b>Enter</b> - Close or Accept changes made in a dialogue</span>
			<br><span style="font-size:130%;"><b>Space bar</b> - Toggle menu visibility</span>
			<br><span style="font-size:120%;"><b>Q</b> - Clear the screen</span>
			<br><span style="font-size:130%;"><b>Z</b> - Undo</span>
			<br><span style="font-size:130%;"><b>N</b> - Create a new layer</span>
			<br><span style="font-size:130%;"><b>D</b> - Duplicate layer</span>
			<br><span style="font-size:130%;"><b>H</b> - Toggle layer visibility (Layer name turns blue)</span>
			<br><span style="font-size:130%;"><b>M</b> - Toggle layer mask (Layer name turns italic)</span>
			<br><span style="font-size:130%;"><b>S</b> - Save current drawing</span>
			<br><span style="font-size:130%;"><b>F</b> - Run the current filter once</span>
			<br>
			<br><span style="font-size:130%;"><b>R</b> - Reinitialize important settings</span>
			<br><span style="font-size:120%;">(<b>For if you find a bug or something breaks</b>)</span>
			<div align="center"><div style="position:relative;top:5px;height:1px;margin-top:5px;margin-bottom:10px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div  align="center"><span style="font-size:120%;">*<b>Tip</b>*
			<br>Click and drag in the Color Sphere to add your current color.
			<br>Then you can save your custom swatch to a hot key.</span></div>
			<br><span style="font-size:130%;"><b>0-9</b> - Set/Load Color Sphere swatch to that number key. </span>
			<br><span style="font-size:130%;"><b>0-9</b> - Held down, reset hotkey with current Color Sphere. </span>
			<br><span style="font-size:130%;"><b>~</b> - Reset Color Sphere to Red/Green/Blue. </span>
			<br><span style="font-size:130%;"><b>~</b> - Held down, sets the Color Sphere to white. </span>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
		
	<!--  --  Shape Tool Keyboard Shortcuts  ---------------------------------  -->
		<?php $curDiaName='shapeToolShorts'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, '<?php echo $curDiaName; ?>');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:800px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Shape Tool Shortcuts</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;font-size:110%;">When using the shape tool, there are two modes you will work in.
			<br><b>Create Mode</b>, where clicking or dragging will create the shape and control points for you to edit in the next mode, <b>Edit Mode</b>.
			<br>Any unwanted points, tap [ <b>\</b> ] to delete the lastest point, as many times you'd like.
			<br>If you notice, when you click, it creates two control points for every one click.
			<br>There are two reasons for this, one, by default it tries to make a smooth shape for you,
			<br>so the extra point is the control over the arc in that section of the shape.
			<br>The other reason, if you hit [ <b>\</b> ] to delete a point, you'll notice it switches between you making an arced shape easily, to making a shape with sharp angles easily.
			<br>If you hit [ <b>Enter</b> ], you change from <b>Create Mode</b> into <b>Edit Mode</b>.
			<br>In this mode, you can click on a control point and drag it around to change the shape as you'd like.
			<br>When you double click on a control point, you'll notice the point will split, creating two points, one on either side of the one you double clicked.
			<br>Hit [ <b>Enter</b> ] again to finalize your shape and add it to your current layer.
			</div>
			<div  align="center"><span style="font-size:120%;">*<b>Tip</b>*
			<div style="padding:10px;font-size:110%;">When creating your initial shape, make as few points as possible.
			<br>Then when you enter <b>Edit Mode</b>,
			<br>double click points and move them to refine your shape.
			<br>This will require less editing and be quicker in the long run.</div></div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
	<!--  --  Info Dialogue  ---------------------------------  -->
		<?php $curDiaName='swingInfo'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'swingInfo');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>What is this thing?</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<span style="font-size:140%;">Welp, I don't really know, its sort of a drawing site.</span>
			<br><img src="show/tvKid_sm.png" style="margin-left:auto;margin-right:auto;">
			<br><span style="font-size:130%;">Mess around'n draw something trippy? Why not?</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">I'm mainly using this site as a place to learn some code.
			<br>&nbsp;&nbsp;&nbsp; <i>It kinda blew up in the process...</i></span>
			<br><span style="font-size:120%;">But hey learning is never done, why not a never ending project?</span>
			<?php /* <br><br><span style="font-size:120%;">On a side note, <b><?php echo $sa_count;?></b> people have used this site containing <b><?php echo $sa_lineCount; ?></b> lines of script in total.</span> */ ?>
			<br>
			<br><b><?php echo $sa_lineCount; ?></b> lines of personally typed scripting
			<br><span style="font-size:110%;"><i><?php echo $sa_totalLineCount; ?> in total; from THREE.js</i>;
			<br>Written in HTML, Javascript, CSS, PHP, & OpenGL.</span>
			<br><span style="font-size:140%;">Enjoy!</span>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
		
	<!--  --  About Me  ---------------------------------  -->
		<?php $curDiaName='aboutMe'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'aboutMe');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:950px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Who am I? Trancor? Kevin?</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px 12px 0px 10px;text-align:justify">
			<span style="font-size:120%;">&nbsp;Not really sure yet, I guess truly knowing yourself is part of the whole Human Condition thing? 
			<br><span style="font-size:128%;">&nbsp;</span>I know I like logic / spacial reasoning problems, along with figuring out the inner workings of the people and things around me. It definitely helped that I got into web design and computer graphics at a young age, giving myself projects to do on a pretty constant basis.
			<br><span style="font-size:128%;">&nbsp;</span>I dove into level design for games like Doom 2, Duke Nukem 3D, Unreal Tournament, and others; spawned from my love for those games at the time.
			<br><span style="font-size:128%;">&nbsp;</span>It was great, you could place items/enemies how ever you'd like, create interactive environments, set up basic logic for how the enemies would roam around the map.  In the end, it would turn into a challenge to design a map that was hard to beat, yet still enjoyable to play.
			<br><span style="font-size:128%;">&nbsp;</span>This love for creating interactive environments lead me to search for affordable 3d software/demos I could get my hands on; like Bryce and Ray Dream Studio/Cararra Studio.  Whether I was good at it or not, I loved messing around in 3d!
			<br><span style="font-size:128%;">&nbsp;</span>I ended up moving forward in this direction, found out I wasn't all that terrible at my hobby, and moved into 3d computer graphics as my full time job.
			<br><span style="font-size:128%;">&nbsp;</span>Now, in my down time, I create DIY Arduino/electonic projects, chainmaille stuffs, and sites like this.</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">I always need to be working on something; fidgety fingers, I guess.</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">If you are interested in my other work, check out - <a href='https://youtube.com/TrancorWD' style='color:#aacccc;' target='_blank'>YouTube.com/TrancorWD</a></span>
			<br><span style="font-size:120%;">Or my <a href='http://metal-asylum.net/gifs' style='color:#aacccc;' target='_blank'>Gif Dump</a>.</span>
			<br><br><span style="font-size:140%;">Thanks for checking out my site!</span>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:800px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
	
	<!--  --  Mobile Menu  ---------------------------------  -->
		<?php $curDiaName='mobileMenu'; ?>
	<?php if($devVal==1){ ?>
		<div id="mobileMenu" class="dialogueWindow" style="overflow:hidden;height:100px;width:100px;z-index:-5;visibility:hidden;position:absolute;top:0px;left:0px;">
			<table cellspacing=0 cellpadding=0 border=0 style="height:100%;width:100%;position:fixed;left:0px;top:0px;">
			<tr><td>
				<div id='topScrollWindow' style="height:10;width:100%;overflow-x:hidden;overflow-y:scroll;">
	<?php }else{ ?>
		<div id="mobileMenu" class="dialogueWindow" style="overflow:hidden;height:100px;width:100px;z-index:-5;visibility:hidden;position:absolute;top:0px;left:0px;overflow-x:hidden;overflow-y:scroll;">
	<?php } ?>
				<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;z-index:5000;" onClick="dialogueOption(0, 'mobileMenu');">
				<tr valign="middle"><td align="center">
				<div class='spacer' style="width:0px;height:50px;overflow:hidden;">&nbsp;</div>
				<div id="<?php echo $curDiaName; ?>Dialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">
							<div align="left"><div class="headerDia"><h1>Clear Screen</h1></div></div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="refreshWindowStore=[sW,sH,0,0];undoOption(0);undoOption(1);clearScreen('curDraw');clearScreen(curCanvas);clearScreen('pastDraw');clearScreen(curLayer+'_th');"><?php if($mobile==0){ ?>(Q) Clear Layer<?php }else{ ?>Clear Screen<?php } ?></div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='1' grp='0' onClick="clearDrawing=0;">Don't Clear</div>
							<div class="buttonDia" tgl='0' grp='0' onClick="clearDrawing=1;">At Drawing Start</div>
							<div class="buttonDia" tgl='0' grp='0' onClick="clearDrawing=2;">Random Mid Draw</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>
				</div><br>
		<?php if($mobile==1){ ?>
				<div id="colorPickerDialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">

							<div align="left"><div class="headerDia"><h1>Color Picker</h1></div></div>
							<div class="pickBoxMobile">&nbsp;</div>
							<!-- For color picker set values, look to Bar Manu color picker code below -->
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="sliderDia" id="slDia_red" tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Red</div>
							<div class="sliderDia" id="slDia_green" tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Green</div>
							<div class="sliderDia" id="slDia_blue" tgl='0' grp='-1' val='-3' min='0' max='255' steps='1'>Blue</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="sliderDia" id="slDia_random" tgl='0' grp='-1' val='1' min='0' max='255' steps='.001'>Random</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='0' onClick='$("#cs_red_val").val(-1);$("#slDia_red_val").val(-1);$("#cs_green_val").val(-1);$("#slDia_green_val").val(-1);$("#cs_blue_val").val(-1);$("#slDia_blue_val").val(-1);setSlideControl("slDia_red");setSlideControl("slDia_green");setSlideControl("slDia_blue");$("#slDia_red_val").val(-1);$("#slDia_green_val").val(-1);$("#slDia_blue_val").val(-1);'>Random Color Reds</div>
							<div class="buttonDia" tgl='0' grp='0' onClick='$("#cs_red_val").val(-2);$("#slDia_red_val").val(-2);$("#cs_green_val").val(-2);$("#slDia_green_val").val(-2);$("#cs_blue_val").val(-2);$("#slDia_blue_val").val(-2);setSlideControl("slDia_red");setSlideControl("slDia_green");setSlideControl("slDia_blue");$("#slDia_red_val").val(-2);$("#slDia_green_val").val(-2);$("#slDia_blue_val").val(-2);'>Random Color Greens</div>
							<div class="buttonDia" tgl='1' grp='0' onClick='$("#cs_red_val").val(-3);$("#slDia_red_val").val(-3);$("#cs_green_val").val(-3);$("#slDia_green_val").val(-3);$("#cs_blue_val").val(-3);$("#slDia_blue_val").val(-3);setSlideControl("slDia_red");setSlideControl("slDia_green");setSlideControl("slDia_blue");$("#slDia_red_val").val(-3);$("#slDia_green_val").val(-3);$("#slDia_blue_val").val(-3);'>Random Color Blues</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>
				</div><br>
		<?php } ?>
				
				<div id="brushesDialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">
							<div align="left"><div class="headerDia"><h1>Brushes</h1></div></div>
							<div class="buttonDia" id="diaMenu_line" tgl='1' grp='0' onClick="geoTool=0;spray=0;brushDrawSet=0;selectTool=0;">Line</div>
							<div class="buttonDia" id="diaMenu_sweep" tgl='0' grp='0' onClick="geoTool=0;spray=0;brushDrawSet=1;selectTool=0;">Sweep</div>
		<?php if($mobile==0){ ?>
							<div class="buttonDia" id="diaMenu_paint" tgl='0' grp='0' onClick="geoDrawCheck(0);brushDrawSet=2;sampleBrush(0,0);selectTool=0;">Paint</div>
		<?php } ?>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
		<?php if($mobile==0){ ?>
							<div class="buttonDia" id="diaMenu_geoTool" tgl='0' val='1' grp='0' onClick="geoTool=1;selectTool=0;">Geometry Shape</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" id="diaMenu_sample" tgl='0' val='1' grp='0' onClick="geoTool=0;sampleBrush(1,0);selectTool=0;">Sample Color</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<?php if($devVal==1){ ?> <div class="buttonDia" tgl='0' val='1' grp='0' onClick="geoDrawCheck(0);sampleBrush(0,0);selectTool=1;">Select / Transform</div> <?php } ?>
		<?php } ?>
							<div align="left"><div class="subHeaderDia"><h2>Drawing Tools:</h2></div></div>
							<div class="buttonDia" tgl='0' grp='-4' >
								<select id="colorMethodDia_comp" style='font-size:98%' onclick="if(skipMenuSlide=='none'){skipMenuSlide='';}else{skipMenuSlide='drawOption';}" onchange="brushToolPulldown('Dia');">
									<option value='source-over' selected>Default</option>
									<option value='destination-over'>Under</option>	
		<?php if($mobile==0){ ?>
									<option value='-' >-- -- --</option>
									<option value='tool_Erase'>Erase</option>
									<option value='tool_Blur'>Blur</option>
									<option value='tool_Scatter'>Scatter</option>
									<option value='tool_Deblur'>Deblur</option>
									<option value='tool_Desaturate'>Desaturate</option>
									<option value='tool_hueUp'>Shift Hue Up</option>
									<option value='tool_hueDown'>Shift Hue Down</option>
									<option value='-' >-- -- --</option>
		<?php } ?>
									<option value='lighten'>Lighter Color</option>
									<option value='lighter'>Lighten</option>
									<option value='darken'>Darken</option>
									<option value='multiply'>Multiply</option>
									<option value='screen'>Screen</option>
									<option value='overlay'>Overlay</option>
									<option value='color-dodge'>Color Dodge</option>
									<option value='color-burn'>Color Burn</option>
									<option value='hard-light'>Hard Light</option>
									<option value='soft-light'>Soft Light</option>
									<option value='difference'>Difference</option>
									<option value='exclusion'>Exclusion</option>
									<option value='hue'>Hue</option>
									<option value='saturation'>Saturation</option>
									<option value='color'>Color</option>
									<option value='luminosity'>Luminosity</option>
								</select>
							</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<?php /* <div class="buttonDia" tgl='1' grp='3' onClick="lineQuality='round'">Smooth</div>
							<div class="buttonDia" tgl='0' grp='3' onClick="lineQuality='bevel'">Sharp</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div> */ ?> 
							<div class="sliderDia" id="beDia_effectPercent" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Tool Opacity</div>
							<div class="sliderDia" id="slDia_setWidth" tgl='0' grp='-1' val='2' min='1' max='100' steps='.5'>Brush Width</div>
							<div class="sliderDia" id="slDia_brushBlur" tgl='0' grp='-1' val='0' min='0' max='30' steps='.5'>Blur Brush</div>
							<?php /* <div class="sliderDia" id="beDia_blurPercent" tgl='0' grp='-1' val='0' min='0' max='4' steps='1'>Blur/Scatter</div> */ ?>
							<div class="sliderDia" id="slDia_extend" tgl='0' grp='-1' val='.04' min='-2' max='2' steps='.01'>Extend</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='1' val='0' grp='2' onClick="dynMag=1;">Dynamic Width</div>
							<div class="buttonDia" id="diaMenu_setWidth" tgl='0' val='0' grp='2' onClick="dynMag=0;">Set Width</div>
							<div align="left"><div class="subHeaderDia"><h2>Drawing Path</h2></div></div>
							<div class="buttonDia" tgl='1' grp='1' onClick="spray=0;">Default</div>
							<div class="buttonDia" tgl='0' grp='1' onClick="spray=1;">Spray</div>
							<div class="buttonDia" tgl='0' grp='1' onClick="spray=2;">Crawl</div>
							<div class="buttonDia" tgl='0' grp='1' onClick="spray=3;">Grab</div>
							<div align="left"><div class="subHeaderDia"><h2>Multi-Brush</h2></div></div>
							<div class="buttonDia" tgl='1' grp='3'  val="0" onClick="trail=0;toCenter=1;trailOptions();">Don't Trail</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='3'  val="1" onClick="trail=1;toCenter=1;trailOptions();">Trail</div>
							<div class="buttonDia" tgl='0' grp='3'  val="2" onClick="trail=2;toCenter=2;trailOptions();">To Center</div>
							<div class="buttonDia" tgl='0' grp='3' val="3" onClick="trail=3;toCenter=2;trailOptions();">To Drawing</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="sliderDia" id="slDia_count" grp='-1' val='5' min='2' max='100' steps='1'>Count</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>


				</div><br>
				<div id="flippingDialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">
							<div align="left"><div class="headerDia"><h1>Flipping</h1></div></div>
							<div class="buttonDia" tgl='0' grp='0' onClick="mirror=0;">No Mirror</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='0' onClick="mirror=1;">Mirror X</div>
							<div class="buttonDia" tgl='0' grp='0' onClick="mirror=2;">Mirror Y</div>
							<div class="buttonDia" tgl='1' grp='0' onClick="mirror=3;">Mirror X&Y</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="mirror=4;">Diagonal</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>


				</div><br>
		<?php if($mobile==0){ ?>
				<div id="filtersDialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">
							<div align="left"><div class="headerDia"><h1>Filters</h1></div></div>
							<div class="buttonDia" tgl='1' grp='0'  onClick="filter=0;">No Filter</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="bumpFilters();"><?php if($mobile==0){ ?>(F) <?php } ?>Run Filter Once</div>
							<div class="buttonDia" tgl='0' grp='1'  onClick="autoFilter=(autoFilter+1)%2;">Always Filter</div>
							<div class="buttonDia" tgl='0' grp='2'  onClick="if(currentOnly==1){currentOnly=0;$('#pastDraw').css({'visibility':'hidden'});}else{mergeCanvas('pastDraw', curCanvas, 0);clearScreen('pastDraw');currentOnly=1;$('#pastDraw').css({'visibility':'visible'});}">Toggle Affect Past</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="sliderDia" id="slDia_filterPercent" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Filter Percent</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="sliderDia" id="slDia_qualityPercent" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Quality</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='0' onClick="filter=4;">Blur</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=1;">Smudge Away</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=2;blender=0;">Eat The Edges</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=2;blender=1;">Smooth Eat Edges</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=3;blender=2;">Hue Away</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=3;blender=0;">Hue Attack</div>
							<div class="buttonDia" tgl='0' grp='0'  onClick="filter=3;blender=1;">Hue Smudge</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>
				</div><br>
		<?php } ?>
				<div id="optionsDialogue" style="color:#bbbbbb;cursor:auto;width:400px;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="center">
					<div align="left"><div class="headerDia"><h1>Options</h1></div></div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="undoOption(0);"><?php if($mobile==0){ ?>(Z) <?php } ?>Undo</div>
							<?php /* <div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'editInterface');">Import Image</div> */ ?>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
		<?php if($mobile==0){ ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="newDocPrompt()">New Document</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'saveLoadDocument');">Save/Load Document</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
		<?php } ?>
		<?php if($mobile==1){ ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="mobileImportImage();">Import Image</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
		<?php } ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="var tmpName=tempWindow('..Saving Images..',[-1,-1],'',1,0,0,1);setTimeout(function(){snapshot(curCanvas,'pastDraw','gradientBG',1);dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'saveDrawing');},20);"><?php if($mobile==0){ ?>(S) <?php } ?>Export Drawing</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
		<?php if($mobile==0){ ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'keyShort');">Interface Shortcuts</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="onDia=0;dialogueVisToggle(0,'mobileMenu');toggleSlideMenu(1);howToActive=0;setTimeout(function(){initHelp();},50);">How To</div>
		<?php }else{ ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'howTo');">How To</div>
		<?php } ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'swingInfo');">Info</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'aboutMe');">About Me</div>
							<!-- <div class="buttonDia" onClick="dialogueOption(1, 'mobileMenu');">Mobile Menu</div> -->
		<?php if($mobile==0){ ?>
							<div class="buttonDia" tgl='0' grp='-1' onClick="toggleSlideMenu(1);">Toggle Mobile Menu</div>
		<?php } ?>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' style="height:40px;overflow:hidden;" onclick="document.getElementById('slideMenu_donate').submit();">
								<div style="height:25px;"><form id="slideMenu_donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
								<input type="hidden" name="cmd" value="_donations" />
								<input type="hidden" name="business" value="pxl@pxlmancer.com" />
								<input type="hidden" name="item_name" value="Help fund the creation of Pxlmancer!" />
								<input type="hidden" name="currency_code" value="USD" />
								<input type="image" src="images/btn_donate_SM.gif" width="74" height="21" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
								</form></div>
							</div>
		<?php if($mobile==1){ ?>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'sharePxl');">Share Pixelmancer</div>
		<?php } ?>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="if(mobile==0){dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'contactMe');}else{launchMailTo();}">Contact Me</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" tgl='0' grp='-1' onClick="dialogueVisToggle(0,'mobileMenu');dialogueOption(1, 'termsOfService');">Terms of Service</div>
							<div class="buttonDia" tgl='0' grp='-3' >&nbsp;</div>
							<div class="buttonDia" action='accept' tgl='0' grp='-1' onClick="onDia=0;dialogueOption(0, 'mobileMenu');">Close Menu</div>
					<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:390px;background-color:#226666;overflow:hidden;">&nbsp;</div>&nbsp;</div>
				</div>
				</div>
				<?php if($mobile==0){ ?>
					<div class='spacer' style="width:0px;height:80px;overflow:hidden;">&nbsp;</div>
				<?php }else{ ?>
					<div class='spacer' style="width:0px;height:200px;overflow:hidden;">&nbsp;</div>
				<?php } ?>
				</td></tr>
				</table>
				</div>
		<?php if($devVal==1){ ?>
			</td></tr>
			<tr height="50%" align='right'><td>
				<div active=false class="uiButton_off" id="uiIcon_brush" onClick="uiPrepButton('uiIcon_brush',uiIconScale);" ></div>
<!--				<img src="ui/ringingCircle_on.png">
				<br><img src="ui/ringingCircle_off.png"> -->
			</td></tr>
			</table>
			</div>
		<?php } ?>

<?php if($mobile==1){ ?>
	<!--  --  Display Pulldown  ---------------------------------  -->
		<?php $curDiaName='pulldownDisplay'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:400px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;">
			<div class="headerDia"><h1>Drawing Tool Options </h1></h1></h1></div>
			<div id="pulldownOptionList" align='center'>
			</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:400px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</div>
<?php } ?>
		
	<!--  --  Contact Me Dialog  ---------------------------------  -->
		<?php $curDiaName='contactMe'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, 'contactMe');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;height:400px;width:700px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Contact - <span style="font-size:80%;">Kevin Edzenga; Trancor</span></h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div align="center"><form id="contactMeForm">
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style="font-size:120%;">Name : </span></td><td>
				<input type="text" id="contactMe_name" name="name" size="60" style="margin-top:10px;">
			</td></tr>
			<tr valign="middle"><td><span style="font-size:120%;">Email : </span></td><td>
				<input type="text" id="contactMe_email" name="email" size="60" style="margin-top:10px;">
			</td></tr>
			<tr><td colspan=2><span style="margin-top:10px;font-size:120%;">Comment : </span></td></tr><tr><td colspan=2>
				<textarea cols=80 rows=8 id="contactMe_comment"  name="comment"></textarea></textarea>
			</td></tr>
			</table>
			<table border=0 cellpadding=0 cellspacing=0>
				<tr><td>
					<div style="margin-right:200px;padding:10px;"><input type="button" value="Submit" class="contact-button dialog-button" onclick="isValidForm();"></div>
				</td>
				<td>
					<input type="reset" class="contact-button dialog-button" label="Clear"></form>&nbsp;&nbsp;&nbsp;<input type="button" value="Cancel" class="contact-button dialog-button" onClick="onDia=0;dialogueOption(0, 'contactMe');">
				</td></tr>
			</table>
			<div>&nbsp;</div>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
		
<?php if($mobile==0){ ?>
	<!--  --  Save / Load Document Dialog  ---------------------------------  -->
		<?php $curDiaName='saveLoadDocument'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, '<?php echo $curDiaName; ?>');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;height:400px;width:650px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Save / Load Document</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div align="center">
			<span style="font-size:110%;">Saves keep layers and stored color spheres.
			<br>Loading will erase all current work.</span>
			<div align="center"><div style="opacity:.5;position:relative;top:0px;height:1px;margin-bottom:5px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<table cellpadding=0 cellspacing=0 border=0 style="width:600px;">
			<tr valign="middle"><td ><div style="font-size:120%;width:150px">File to load : </div></td><td>
				<input type="file" class="dialog-button" accept=".pxlm" id="ldDia_fileOpen" size="60" style="margin-top:10px;">
			</td><td>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style='width:100;' value="Load File" onClick="var tmpName=tempWindow('..Generating Scene..',[-1,-1],'',2,0,0,1);setTimeout(function(){loadDocument('0');},20);"></div>
			</td></tr>
			</table>
			<br><div align="center"><div style="height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style="font-size:120%;">Compile & Save Document : </span><input type='text' id='dlDia_genListCount' value='0' hidden></td><td>
				<input type='button' class="dialog-button" value='Generate Download Link Below' onClick="var tmpName=tempWindow('..Generating Download Link	..',[-1,-1],'',2,0,0,1);setTimeout(function(){saveDocument(curCanvas,'pastDraw','gradientBG',tmpName);},20);">
			</td></tr>
			</table>
			<div align="center"><div style="position:relative;top:0px;height:1px;margin-top:5px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center'>--Download list--</div>
			<div align="center"><div style="opacity:.5;position:relative;top:0px;height:1px;margin-bottom:5px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
				<div align='center' style="height:150px;overflow:auto;" id="ddDia_downloadLink"></div>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
<?php } ?>


<?php if($mobile==1){ ?>
	<!--  --  Share Pixelmancer  ---------------------------------  -->
		<?php $curDiaName='sharePxl'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, '<?php echo $curDiaName; ?>');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:700px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Share Pixelmancer</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;" align='center'>
			<div style="height:0px;width:0px;overflow:hidden;"><img src='pxlLogo.png' style='width:144px;height:144px;' alt='Pixelmancer'></div>
			<img src='pxlQR.png' style='width:600px;height:600px;' alt='QR Share Pixelmancer'>
			<br><div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			
			<br><span style="font-size:140%;"><h1>Pixelmancer</h1></span>
			<br><span style="font-size:140%;font-style;oblique;">www.pxlmancer.com</span>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
<?php } ?>
		
	<!--  --  Terms of Service Dialog  ---------------------------------  -->
		<?php $curDiaName='termsOfService'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, '<?php echo $curDiaName; ?>');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;height:380px;width:700px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Terms of Service</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<span style="font-size:120%;">No direct data is stored from a user besides statistical information. (User count, browser, country of origin, files requested, etc.)</span>
			<br><span style="font-size:120%;">This holds true for the Import Image and Save Drawing features, any imported/saved images are not transmitted to Pxlmancer.com.</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">Pixelmancer is not 'technically' open source, but since its a website, it's free gain to look through the source code.</span>
			<br><span style="font-size:120%;">Feel free to use sections of the scripting to learn from as <span style='font-style:oblique;'>reference</span>.</span>
			<div align="center"><div style="position:relative;top:10px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<br><span style="font-size:120%;">This site has been learning experience for me, as such projects should be for you too.</span>
			<?php /* <br><span style="font-size:120%;">Any occasions (In the future) for any 'Featured' creations, consent will be asked.</span> */ ?>
			</div>
			</div>
			<div class="buttonDia" action='accept' tgl='0' grp='-1' id="<?php echo $curDiaName; ?>Back" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueOption(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div>
<?php if($mobile==0){ ?>
	<!--  --  Edit Layer Dialog  ---------------------------------  -->
		<?php $curDiaName='layerEditor'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="dialogueOption(0, '<?php echo $curDiaName; ?>');">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="onDia=0;" align="left">
			<div class="headerDia"><h1>Edit Layer</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
			<input type='text' id='editLayer_id' hidden><input type='text' value='0' id='editLayer_method' hidden>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style='font-size:120%;'>Rename '<span id='eidtLayer_curName'></span>': </span></td><td>
				<input type="text" id='editLayer_rename' size="30" style="margin-top:10px;">
			</td></tr>
			<tr valign="middle"><td><span style='font-size:120%;'>Toggle mask (Italic): </span></td><td>
				<input type="checkbox" id='editLayer_mask' onchange='layerMaskToggle();' style="margin-top:10px;"><span style="cursor:pointer" onclick="layerMaskToggle();$('#editLayer_mask').prop('checked', (($('#editLayer_mask').prop('checked')+1)%2) )"> --  ('M' key, when no dialogue window)</span>
			</td></tr>
			<tr valign="middle"><td><span style='font-size:120%;'>Toggle visibility (Blue): </span></td><td>
				<input type="checkbox" id='editLayer_vis' onchange='layerVisToggle();' style="margin-top:10px;"><span style="cursor:pointer" onclick="layerVisToggle();$('#editLayer_vis').prop('checked', (($('#editLayer_vis').prop('checked')+1)%2) )"> --  ('H' key, when no dialogue window)</span>
			</td></tr>
			</table>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center'><div id='editLayer_opacity' val='1' steps='.01' min='0' max='1'  style='width:500px;'>Layer Opacity</div></div>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style="font-size:120%;">File to load : </span></td><td>
				<input type="file" class="dialog-button" accept="images/*" id="elDia_imgOpen" onClick="$('#editLayer_method').val(0);" size="60" style="margin-top:10px;">
			</td></tr>
			</table>
			<table cellpadding=0 cellspacing=0 border=0 style="width:600px;">
			<tr valign="middle"><td><input type="radio" id="iil_radio1" name="importImageLayer_screenRes" value="set" checked="checked"><span style="cursor:pointer;font-size:90%;" onclick="$('#iil_radio2').removeAttr('checked');$('#iil_radio3').removeAttr('checked');$('#iil_radio1').prop('checked',true);$('#editLayer_method').val(0);"> Import to layer<br>(Scale down, if needed)</span></td><td>
			<input type="radio" id="iil_radio2" name="importImageLayer_screenRes" value="stretch"><span style="cursor:pointer;font-size:90%;" onclick="$('#iil_radio1').removeAttr('checked');$('#iil_radio3').removeAttr('checked');$('#iil_radio2').prop('checked',true);$('#editLayer_method').val(0);"> Stretch image to document</span></td><td>
			<input type="radio" id="iil_radio3" name="importImageLayer_screenRes" value="tile"><span style="cursor:pointer;font-size:90%;" onclick="$('#iil_radio1').removeAttr('checked');$('#iil_radio2').removeAttr('checked');$('#iil_radio3').prop('checked',true);$('#editLayer_method').val(0);"> Tile image in layer</span></td></tr>
			</table>
			<div align='center'><div style="border:1px #226666 solid;z-index:1;height:200px;width:400px;overflow:hidden;"><canvas id="editLayer_tempDisp" height="200px" width="400px"></canvas></div></div>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;height:30px;width:200px;font-size:110%;" value="Import Image" onClick="importImage('elDia_imgOpen',curCanvas,1, document.querySelector('input[name=\'importImageLayer_screenRes\']:checked').value);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');if(tileUpdate==1){ setTimeout(function(){updateTiles();},50); }"></div>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;font-size:110%;" value="Duplicate Layer" onClick="layerDuplicate(curCanvas);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');"> - <input type="button" class="dialog-button" style="cursor:pointer;font-size:110%;" value="Merge Into Layer Below" onClick="layerMergeDown();onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');"></div>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;font-size:110%;" class='acceptButtonDia' value="Update Layer" onClick="renameLayer($('#editLayer_id').val(),$('#editLayer_rename').val());onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');if(tileUpdate==1){ setTimeout(function(){updateTiles();},50); }"> - <input type="button" class="dialog-button" value="Cancel" style="cursor:pointer;font-size:110%;" onClick="onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');"></div>
			</div>
			</div>
			<div class="buttonDia" tgl='0' grp='-1' id="layerBack" onClick="if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueVisToggle(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div> 
		
	<!--  --  Edit Background Dialog  ---------------------------------  -->
		<?php $curDiaName='backgroundEditor'; ?>
		<div id="<?php echo $curDiaName; ?>" class="dialogueWindow" style="z-index:-5;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">
		<table cellpadding='0' class="dialogueTable" cellspacing='0' style="height:100px;width:100px;border:0;cursor:alias;" onClick="if(setFromToColor==-1){dialogueOption(0, '<?php echo $curDiaName; ?>');}">
		<tr valign="middle"><td align="center">
		<div id="<?php echo $curDiaName; ?>Dialogue" style="cursor:auto;width:600px;z-index:1200;text-shadow:2px 2px 2px black;" onMouseOver="onDia=1;" onMouseOut="if(setFromToColor==-1){onDia=0;}else{onDia=1;}" align="left">
			<div class="headerDia"><h1>Edit Background</h1></div>
			<div class="body" style="color:#cccccc;text-shadow:2px 2px 2px black;">
			<div style="padding:10px;">
				<input type='text' value='1' id='editBackground_method' hidden><input type='text' value='0' id='editBackground_pattern' hidden><input type='text' value='1' id='editBackground_boot' hidden>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style="font-size:120%;">File to load : </span></td><td>
				<input type="file" class="dialog-button" accept="images/*" id="eiDia_imgOpen" onClick="$('#editBackground_method').val(0);" size="60" style="margin-top:10px;">
			</td></tr>
			</table>
			<table cellpadding=0 cellspacing=0 border=0 style="width:600px;">
			<tr valign="middle"><td><input type="radio" id="ii_radio1" name="importImage_screenRes" value="set" checked="checked"><span style="cursor:pointer;font-size:90%;" onclick="$('#ii_radio2').removeAttr('checked');$('#ii_radio3').removeAttr('checked');$('#ii_radio1').prop('checked',true);$('#editBackground_method').val(0);"> Set document size to image</span></td><td>
			<input type="radio" id="ii_radio2" name="importImage_screenRes" value="stretch"><span style="cursor:pointer;font-size:90%;" onclick="$('#ii_radio1').removeAttr('checked');$('#ii_radio3').removeAttr('checked');$('#ii_radio2').prop('checked',true);$('#editBackground_method').val(0);"> Stretch image to document</span></td><td>
			<input type="radio" id="ii_radio3" name="importImage_screenRes" value="tile"><span style="cursor:pointer;font-size:90%;" onclick="$('#ii_radio1').removeAttr('checked');$('#ii_radio2').removeAttr('checked');$('#ii_radio3').prop('checked',true);$('#editBackground_method').val(0);"> Tile image in document</span></td></tr>
			</table>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td width="200"><span style='font-size:120%;'>Use a pattern : </span></td>
				<td><canvas onclick="$('#editBackground_method').val(1);$('#editBackground_pattern').val(0);$('#editBackground_boot').val(0);gradientRunner('editBackground_tempDisp',0,gradFromHex,gradToHex,0,parseFloat($('#editBackground_patternQuality_val').val()),0);" id="editBackground_pattern0" style="cursor:pointer;" height="40px" width="40px"></canvas></td>
				<td><canvas onclick="$('#editBackground_method').val(1);$('#editBackground_pattern').val(1);$('#editBackground_boot').val(0);gradientRunner('editBackground_tempDisp',1,gradFromHex,gradToHex,1,parseFloat($('#editBackground_patternQuality_val').val()),0);" id="editBackground_pattern1" style="cursor:pointer;" height="40px" width="40px"></canvas></td>
				<td><canvas onclick="$('#editBackground_method').val(1);$('#editBackground_pattern').val(2);$('#editBackground_boot').val(0);gradientRunner('editBackground_tempDisp',2,gradFromHex,gradToHex,1,parseFloat($('#editBackground_patternQuality_val').val()),0);" id="editBackground_pattern2" style="cursor:pointer;" height="40px" width="40px"></canvas></td>
				<td><canvas onclick="$('#editBackground_method').val(1);$('#editBackground_pattern').val(3);$('#editBackground_boot').val(0);gradientRunner('editBackground_tempDisp',3,gradFromHex,gradToHex,0,parseFloat($('#editBackground_patternQuality_val').val()),0);" id="editBackground_pattern3" style="cursor:pointer;" height="40px" width="40px"></canvas></td>
			</tr></table>
						<div align='center'><div id='editBackground_patternQuality' val='.65' steps='.01' min='0' max='1'  style='width:500px;'>Quality</div></div>
						<div align='center'><div id='editBackground_shiftColor' val='0' steps='.01' min='-1' max='1'  style='width:500px;'>Color</div></div>
						<div align='center'><div id='editBackground_satch' val='1' steps='.01' min='0' max='2'  style='width:500px;'>Saturation</div></div>
						<div align='center'><div id='editBackground_patternBrightness' val='1' steps='.01' min='0' max='1'  style='width:500px;'>Brightness</div></div>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align="center" style='font-size:100%;margin-bottom:2px;'>-- Gradient Settings Only -- </div>
			<table cellpadding=0 cellspacing=0 border=0 style="width:580px;">
			<tr valign="middle"><td><span style='font-size:120%;'>From Color : </span></td><td>
				</td><td><input type="button" class="dialog-button" value="Pick From Color" style="cursor:pointer;" onClick="$('#editBackground_method').val(1);gradientRunner('editBackground_tempDisp',$('#editBackground_fColor').val(),$('#editBackground_tColor').val(),0,1,1);setFromToHover=0;setFromToColor=0;visibilityColorSphere(1,0);tmpName=tempWindow('Select \'From\' color from the Color Sphere.',[-1,-1],'',10,.5,0,0);"></div></td><td>
				</td><td><canvas id="editBackground_fColor_display" height="30px" width="50px"></canvas></td><td align='right'>
				<input type="text" id='editBackground_fColor' size="7" style="text-align:center;margin-top:10px;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-o-user-select:none;" readonly>
			</td></tr>
			<tr valign="middle"><td><span style='font-size:120%;'>To Color : </span></td><td>
				</td><td><input type="button" class="dialog-button" value="Pick To Color" style="cursor:pointer;" onClick="$('#editBackground_method').val(1);gradientRunner('editBackground_tempDisp',$('#editBackground_fColor').val(),$('#editBackground_tColor').val(),0,1,1);setFromToHover=0;setFromToColor=1;visibilityColorSphere(1,0);tmpName=tempWindow('Select \'To\' color from the Color Sphere.',[-1,-1],'',10,.5,0,0);"></div></td><td>
				</td><td><canvas id="editBackground_tColor_display" height="30px" width="50px"></canvas></td><td align='right'>
				<input type="text" id='editBackground_tColor' size="7" style="text-align:center;margin-top:10px;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-o-user-select:none;" readonly>
			</td></tr>
			</table>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center'><div style="z-index:1;height:200px;width:400px;overflow:hidden;"><canvas id="editBackground_tempDisp" height="200px" width="400px"></canvas></div></div>
			<div id='editBackground_fromMarker' style='z-index:-3000;position:fixed;top:0px;left:0px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;height:20;width:15;overflow:hidden;' onmousedown="$('#editBackground_pattern').val(0);$('#editBackground_boot').val(1);$('#editBackground_method').val(1);if(setMarker==0){dragGradientMarker('editBackground_fromMarker',0,1);}else{setMarker=0;}">+</div>
			<div id='editBackground_toMarker' style='z-index:-3001;position:fixed;top:0px;left:0px;cursor:move;cursor:grab;cursor:-moz-grab;cursor:-webkit-grab;height:20;width:15;overflow:hidden;' onmousedown="$('#editBackground_pattern').val(0);$('#editBackground_boot').val(1);$('#editBackground_method').val(1);if(setMarker==0){dragGradientMarker('editBackground_toMarker',1,1);}else{setMarker=0;}">+</div>
			<div id='editBackground_sampleMarker' style='z-index:-2999;position:fixed;top:0px;left:0px;height:200px;width:400px;overflow:hidden;' onmouseup="$('#editBackground_method').val(1);setMarker=0;">&nbsp;</div>
			
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;font-size:110%;" value="Duplicate Background as a New Layer" onClick="layerDuplicate('gradientBG');onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');if(tileUpdate==1){ updateTiles(); }"></div>
			<div align="center"><div style="margin-top:5px;margin-bottom:5px;height:1px;width:400px;background-color:#226666;overflow:hidden;">&nbsp;</div></div>
			<div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;font-size:110%;" class='acceptButtonDia' value="Update Background" onClick="if(parseInt($('#editBackground_method').val())==0){importImage('eiDia_imgOpen','gradientBG',1, document.querySelector('input[name=\'importImage_screenRes\']:checked').value);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');if(tileUpdate==1){ setTimeout(function(){updateTiles();},50); }}else{gradFromHex=$('#editBackground_fColor').val();gradToHex=$('#editBackground_tColor').val();var tmpName=tempWindow('..Generating Background..',[-1,-1],'',2,0,0,0);setTimeout(function(){markerVis(0);setFromToColor=-1;var tmpSW=sW;var tmpSH=sH;setLayerRes(1, [Math.floor(sW*parseFloat($('#editBackground_patternQuality_val').val())),Math.floor(sH*parseFloat($('#editBackground_patternQuality_val').val()))], 1,0);gradientInit(parseInt($('#editBackground_pattern').val()),parseInt($('#editBackground_boot').val()));setLayerRes(1, [tmpSW,tmpSH], 1,0);updateLayerCanvas('lwin_bgLayer');onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');if(tileUpdate==1){ setTimeout(function(){updateTiles();},50); }},50);}"> - <input type="button" class="dialog-button" value="Cancel" style="cursor:pointer;font-size:110%;" onClick="markerVis(0);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');"></div>
			<?php /* <div align='center' style="padding:10px;"><input type="button" class="dialog-button" style="cursor:pointer;" class='acceptButtonDia' value="Update Background" onClick="if(parseInt($('#editBackground_method').val())==0){importImage('gradientBG',1, document.querySelector('input[name=\'importImage_screenRes\']:checked').value);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');}else{gradFromHex=$('#editBackground_fColor').val();gradToHex=$('#editBackground_tColor').val();var tmpName=tempWindow('..Generating Background..',[-1,-1],'',2,0,0,0);setTimeout(function(){markerVis(0);setFromToColor=-1;setLayerRes(1, [Math.floor(origSW*parseFloat($('#editBackground_patternQuality_val').val())),Math.floor(origSH*parseFloat($('#editBackground_patternQuality_val').val()))], 1,0);gradientRunner('gradientBG',parseInt($('#editBackground_pattern').val()),gradFromHex,gradToHex,0,parseFloat($('#editBackground_patternQuality_val').val()),parseInt($('#editBackground_boot').val()));setLayerRes(1, [origSW,origSH], 1,0);updateLayerCanvas('lwin_bgLayer');onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');},50);}"> - <input type="button" class="dialog-button" value="Cancel" style="cursor:pointer;" onClick="markerVis(0);onDia=0;dialogueOption(0, '<?php echo $curDiaName; ?>');"></div> */ ?>
			<br>
			</div>
			</div>
			<div class="buttonDia" tgl='0' grp='-1' id="editBGBack" onClick="markerVis(0);if(touchCheck==1){dialogueVisToggle(0,'<?php echo $curDiaName; ?>');dialogueVisToggle(1,'mobileMenu');}else{dialogueVis(0);dialogueVisToggle(0,'<?php echo $curDiaName; ?>');}" align="center">Back</div>
			<div class="footer" style="font-size:56%;">&nbsp;<div style="height:1px;width:600px;background-color:#226666;overflow:hidden;position:relative;left:15px;">&nbsp;</div>&nbsp;</div>
		</div>
		</td></tr>
		</table>
		</div> 
<?php } ?>
	<!-- End Dialogue List -->
	</div>
				
	<!-- Slide Menu -->	
	<div id="slideOptions" style="position:fixed;bottom:0px;right:0px;<?php echo $burgerSize; ?>visibility:hidden;z-index:-<?php echo $burgerPattyBtm; ?>;">
	<div id="slideMenu" onClick="dialogueOption(1, 'mobileMenu'); ">
	<table cellpadding='0' cellspacing='0' border='0' style='<?php echo $burgerSize; ?>'>
	<tr>
	<td>
	<div style="position:relative;bottom:<?php echo $burgerPattyBtmParent?>px;right:1px;">
	<div class="burgerBar">&nbsp;</div>
	<div class="burgerBar">&nbsp;</div>
	<div class="burgerBar">&nbsp;</div>

	</div>
	</td></tr></table>
	</div>
	</div>
				
	<!-- Bar Menu -->
	<div style="visibility:hidden;width:100%;z-index:2010;position:fixed;bottom:0;user-select:none;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;pointer-events: none;background: url('trans.png');filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='trans.png', sizingMethod='scale');background: none !important;" id="drawOptions">
		<div align='center'>
		<div id="controlMenu" style="position:relative;top:0;">
		<table id="barMenuParent" cellpadding=0 cellspacing=0 border=0 style="user-select:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;z-index:-1" >
			<tr>
				<td valign="bottom">
					<div class="optionButtonRaiser" >
					<canvas class="optionButtonBG" id="clearBG" width="1" height="1" ></canvas>
					<div class="optionButton" id="clear" mode='0' onMouseOver="skipMenuSlide='clear';geoToolStopDraw=1;" onMouseOut="skipMenuSlide='';slDown=0;geoToolStopDraw=0;">
						<div class="header">Clear Screen</div>
						<div class="button" tgl='0' val='0' grp='-1' onClick="refreshWindowStore=[sW,sH,0,0];undoOption(1);undoOption(0);clearScreen(curCanvas);clearScreen('pastDraw');clearScreen(curLayer+'_th');">(Q) Clear Layer</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" id='barMenu_dontClear' tgl='1' val='1' grp='0' onClick="clearDrawing=0;">Don't Clear</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="clearDrawing=1;">At Drawing Start</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="clearDrawing=2;">Random Mid Draw</div>
						<div class="button" tgl='0' grp='-2' >&nbsp;</div>
					</div>
					</div>
				</td>
				<td valign="bottom">
					<div class="optionButtonRaiser" >
					<canvas class="optionButtonBG" id="drawOptionBG" width="1" height="1"></canvas>
					<div class="optionButton" id="drawOption" mode='0' onMouseOver="skipMenuSlide='drawOption';geoToolStopDraw=1;" onMouseOut="skipMenuSlide='';slDown=0;geoToolStopDraw=0;">
						<div class="header">Brushes</div>
						<div class="button" id="barMenu_line" tgl='1' val='1' grp='0' onClick="geoDrawCheck(0);brushDrawSet=0;sampleBrush(0,0);selectTool=0;">Line</div>
						<div class="button" id="barMenu_sweep" tgl='0' val='1' grp='0' onClick="geoDrawCheck(0);brushDrawSet=1;sampleBrush(0,0);selectTool=0;">Sweep</div>
						<div class="button" id="barMenu_paint" tgl='0' val='1' grp='0' onClick="geoDrawCheck(0);brushDrawSet=2;sampleBrush(0,0);selectTool=0;">Paint</div>
						
						<?php /* <div class="button" tgl='0' val='1' grp='0' onClick="brushDraw=2;">Paint</div> */ ?>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" id="barMenu_geoTool" tgl='0' val='1' grp='0' onClick="geoDrawCheck(1);sampleBrush(0,0);selectTool=0;">Shape Tool</div>
						<div class="button" id="barMenu_sample" tgl='0' val='1' grp='0' onClick="geoDrawCheck(0);sampleBrush(1,0);selectTool=0;">Sample Color</div>
						<?php if($devVal==1){ ?><div class="button" tgl='0' val='0' grp='0' onClick="geoDrawCheck(0);sampleBrush(0,0);selectTool=1;">Select / Transform</div> <?php } ?>
						<div class="subHeader">Drawing Tools:</div>
						<div class="button" tgl='0' grp='-4' >
							<select id="colorMethod_comp" style='font-size:103%' onclick="if(skipMenuSlide=='none'){skipMenuSlide='';}else{skipMenuSlide='drawOption';}" onchange="brushToolPulldown('')">
								<option value='source-over' selected>Default</option>
								<option value='destination-over'>Under</option>
								<option value='-'>-- -- --</option>
								<option value='tool_Erase'>Erase</option>
								<option value='tool_Blur'>Blur</option>
								<option value='tool_Scatter'>Scatter</option>
								<option value='tool_Deblur'>Deblur</option>
								<option value='tool_Desaturate'>Desaturate</option>
								<option value='tool_hueUp'>Shift Hue Up</option>
								<option value='tool_hueDown'>Shift Hue Down</option>
								<option value='-'>-- -- --</option>
								<option value='lighten'>Lighter Color</option>
								<option value='lighter'>Lighten</option>
								<option value='darken'>Darken</option>
								<option value='multiply'>Multiply</option>
								<option value='screen'>Screen</option>
								<option value='overlay'>Overlay</option>
								<option value='color-dodge'>Color Dodge</option>
								<option value='color-burn'>Color Burn</option>
								<option value='hard-light'>Hard Light</option>
								<option value='soft-light'>Soft Light</option>
								<option value='difference'>Difference</option>
								<option value='exclusion'>Exclusion</option>
								<option value='hue'>Hue</option>
								<option value='saturation'>Saturation</option>
								<option value='color'>Color</option>
								<option value='luminosity'>Luminosity</option>
							</select>
						</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<?php /* <div class="button" tgl='1' grp='3' onClick="lineQuality='round'">Smooth</div>
						<div class="button" tgl='0' grp='3' onClick="lineQuality='bevel'">Sharp</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div> */ ?>
						<div class="slider" id="be_effectPercent" onslide="setColorFromColorSphere('colorSphereCanvas','curColor_colorSphereCanvas',0);setDrawAlpha(0);" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Tool Opacity</div>
						<div class="slider" id="sl_setWidth" tgl='0' grp='-1' val='2' min='.5' max='100' steps='.5'>Brush Width</div>
						<div class="slider" id="sl_brushBlur" tgl='0' grp='-1' val='0' min='0' max='30' steps='.5'>Blur Brush</div>
						<?php /* <div class="slider" id="be_blurPercent" tgl='0' grp='-1' val='0' min='0' max='4' steps='1'>Blur/Scatter</div>*/ ?>
						<div class="slider" id="sl_extend" tgl='0' grp='-1' val='.04' min='-2' max='2' steps='.01'>Extend</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" id="barMenu_dynWidth" tgl='1' val='0' grp='1' onClick="dynMag=1;">Dynamic Width</div>
						<div class="button" id="barMenu_setWidth" tgl='0' val='0' grp='1' onClick="dynMag=0;">Set Width</div>
						<div class="subHeader">Drawing Path</div>
						<div class="button" id='barMenu_throwDefault' tgl='1' val='0' grp='3' onClick="spray=0;">Default</div>
						<?php if($devVal==1){ ?> <div class="button" tgl='0' val='0' grp='3' onClick="spray=4;">Scetch</div> <?php } ?>
						<div class="button" tgl='0' val='0' grp='3' onClick="spray=1;">Spray</div>
						<div class="button" tgl='0' val='0' grp='3' onClick="spray=2;">Crawl</div>
						<div class="button" tgl='0' val='0' grp='3' onClick="spray=3;">Grab</div>
						<div class="subHeader">Multi-Brush</div>
						<div class="button" id='barMenu_dontTrail' tgl='1' grp='2' val="0" onClick="trail=0;toCenter=1;trailOptions();">Don't Trail</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' grp='2' val="1" onClick="trail=1;toCenter=1;trailOptions();">Trail</div>
						<div class="button" tgl='0' grp='2' val="2" onClick="trail=2;toCenter=2;trailOptions();">To Center</div>
						<div class="button" tgl='0' grp='2' val="2" onClick="trail=3;toCenter=2;trailOptions();">To Drawing</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="slider" tgl='0' id="sl_count" grp='-1' val='5' min='2' max='100' steps='1'>Count</div>
						<div class="button" tgl='0' grp='-2' >&nbsp;</div>
					</div>
					</div>
				</td>
				<td valign="bottom">
					<div class="optionButtonRaiser" >
					<canvas class="optionButtonBG" id="mirrorOptionBG" width="1" height="1"></canvas>
					<div class="optionButton" id="mirrorOption" mode='0' onMouseOver="skipMenuSlide='mirrorOption';geoToolStopDraw=1;" onMouseOut="skipMenuSlide='';slDown=0;geoToolStopDraw=0;">
						<div class="header">Flipping</div>
						<div class="button" id='barMenu_noMirror' tgl='1' val='1' grp='0' onClick="headerHighlight(0,'mirrorOption');mirror=0;">No Mirror</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="headerHighlight(1,'mirrorOption');mirror=1;">Mirror X</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="headerHighlight(1,'mirrorOption');mirror=2;">Mirror Y</div>
						<div class="button" id='barMenu_xyMirror' tgl='0' val='0' grp='0' onClick="headerHighlight(1,'mirrorOption');mirror=3;">Mirror X&Y</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="headerHighlight(1,'mirrorOption');mirror=4;">Diagonal</div>
						<div class="button" tgl='0' grp='-2' >&nbsp;</div>
					</div>
					</div>
				</td>
				<td valign="bottom">
					<div class="optionButtonRaiser" >
					<canvas class="optionButtonBG" id="filterOptionBG" width="1" height="1"></canvas>
					<div class="optionButton" id="filterOption" mode='0' onMouseOver="skipMenuSlide='filterOption';geoToolStopDraw=1;" onMouseOut="skipMenuSlide='';slDown=0;geoToolStopDraw=0;">
						<div class="header">Filters</div>
						<div class="button" id='barMenu_noFilter' tgl='1' val='0' grp='0'  onClick="filter=0;headerHighlight(0,'filterOption');">No Filter</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button"  tgl='0' val='0' grp='-1' onClick="bumpFilters();">(F) Run Filter Once</div>
						<div class="button"  tgl='0' val='0' grp='1' onClick="autoFilter=(autoFilter+1)%2;">Always Filter</div>
						<div class="button" tgl='0' val='0' grp='2' onClick="if(currentOnly==1){currentOnly=0;$('#pastDraw').css({'visibility':'hidden'});}else{mergeCanvas('pastDraw', curCanvas, 0);clearScreen('pastDraw');currentOnly=1;$('#pastDraw').css({'visibility':'visible'});}">Toggle Affect Past</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="slider" id="sl_filterPercent" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Filter Percent</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="slider" id="sl_qualityPercent" tgl='0' grp='-1' val='1' min='0' max='1' steps='.01'>Quality</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=4;headerHighlight(1,'filterOption');">Blur</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=1;headerHighlight(1,'filterOption');">Smudge Away</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=2;blender=0;headerHighlight(1,'filterOption');">Eat The Edges</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=2;blender=1;headerHighlight(1,'filterOption');">Smooth Eat Edges</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=3;blender=2;headerHighlight(1,'filterOption');">Hue Away</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=3;blender=0;headerHighlight(1,'filterOption');">Hue Attack</div>
						<div class="button" tgl='0' val='0' grp='0' onClick="filter=3;blender=1;headerHighlight(1,'filterOption');">Hue Smudge</div>
						<?php /*?><div class="slider" style="height:15;"><div style="height:3;width:100;border:1px #000000 solid;outline:1px #114477 solid;overflow:hidden" >&nbsp;</div></div><?php */ ?>

						<div class="button" tgl='0' grp='-2' >&nbsp;</div>
					</div>
					</div>
				</td>
				<td valign="bottom">
					<div class="optionButtonRaiser" >
					<canvas class="optionButtonBG" id="prefOptionsBG" width="1" height="1"></canvas>
					<div class="optionButton" id="prefOptions" mode='0' onMouseOver="skipMenuSlide='prefOptions';geoToolStopDraw=1;" onMouseOut="skipMenuSlide='';slDown=0;geoToolStopDraw=0;">
						<div class="header">Options</div>
						<div class="button" tgl='0' grp='-1' onClick="undoOption(0);">(Z) Undo</div>
						<?php /* <div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'editInterface');">Import Image</div> 
						<div class="button" tgl='0' grp='-1' onClick="tempWindow('Yeah, click it!',[-1,-1],'alert(\'ww\')',4,1,0,1);">warn</div> */ ?>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' val='0' grp='-1' onClick="newDocPrompt()">New Document</div>
						<?php if($devVal==1){ ?><div class="button" tgl='0' val='0' grp='-1' onClick="menuPulldown(1,'colorMethodDia_comp');">Disp pulldown</div><?php } ?>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<?php if($devVal==1){ ?> <div class="button" tgl='0' val='0' grp='-1' onClick="">Import Image</div> <?php } ?>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'saveLoadDocument');">Save/Load Document</div>
						<div class="button" tgl='0' grp='-1' onClick="var tmpName=tempWindow('..Saving Images..',[-1,-1],'',1,0,0,1);setTimeout(function(){snapshot(curCanvas,'pastDraw','gradientBG',1);dialogueOption(1, 'saveDrawing');},20);">(S) Export Drawing</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
<?php if($mobile==0){ ?>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'keyShort');">Interface Shortcuts</div>
						<div class="button" tgl='0' grp='-1' onClick="reinitializeSettings(1);">Reset Settings</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
<?php } ?>
						<?php /* <div class="button" tgl='0' grp='-1' onClick="<?php if($devVal==1){ ?>howToActive=0;setTimeout(function(){initHelp();},50);<?php }else{ ?> dialogueOption(1, 'howTo'); <?php } ?>">How To ...</div> */ ?>
						<div class="button" tgl='0' grp='-1' onClick="howToActive=0;setTimeout(function(){initHelp();},50);">How To ...</div>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'swingInfo');">Info</div>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'aboutMe');">About Me</div>
	<?php if($mobile==0){ ?>
						<div class="button" tgl='0' grp='-1' onClick="toggleSlideMenu(1);">Toggle Mobile Menu</div>
	<?php } ?>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' grp='-1' onClick="$('#barMenu_donateForm').submit();" style="height:24px;overflow:hidden;">
							<div style="height:25px;"><form id="barMenu_donateForm" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_donations" />
							<input type="hidden" name="business" value="pxl@pxlmancer.com" />
							<input type="hidden" name="item_name" value="Help fund the creation of Pxlmancer!" />
							<input type="hidden" name="currency_code" value="USD" />
							<input type="image" src="images/btn_donate_SM.gif" width="74" height="21" style="position:relative;top:1;" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
							</form></div>
						</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'contactMe');">Contact Me</div>
						<div class="button" tgl='0' grp='-3' >&nbsp;</div>
						<div class="button" tgl='0' grp='-1' onClick="dialogueOption(1, 'termsOfService');">Terms of Service</div>
						<div class="button" tgl='0' grp='-2' >&nbsp;</div>
					</div>
					</div>
				</td>
			</tr>
		</table>
		</div>
		</div>
	</div>
	
<?php if($mobile==1){ ?>
	<!-- Import image for Mobile -->
	<div id='mobileImageImport' style="overflow:hidden;height:0px;width:0px;visibility:hidden;">
		<form><input type="file" class="dialog-button" accept="images/*" id="mobile_imgOpen" size="60" style="margin-top:10px;" onChange="importImage('mobile_imgOpen','gradientBG',1, 'stretch');onDia=0;dialogueOption(0, 'mobileMenu');"></form>
	</div>
<?php } ?>
	
	<!-- Color Sphere Setup -->
	<div id="colorSphere" class="colorSphere">&nbsp;</div>
	<div id='floatingObjectsParent' style="visibility:visible;position:fixed;top:0;right:0;height:10px;width:10px;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;">
	&nbsp;</div>
	<div id='howToBuild' style="z-index:-500;position:fixed;top:0;left:0;overflow:hidden;height:50;width:50;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;">
	&nbsp;</div>
	<div id="mouseDraw" geoDoubleClick='0' style="z-index:1000;position:fixed;top:0;left:0;overflow:hidden;height:100%;width:100%;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"
		onclick=" if(mobile==0){if(active==0){dragClick=1;dragging=0;getMouseXY(event);dragClick=0;getMouseXY(event);}else{if(sampleColor==1){sampleBrush(0,1)};}} ">
	&nbsp;</div>
	<div id='geoDrawGuidesParent'  onMouseOver='geoToolStopDraw=1;' onMouseOut='geoToolStopDraw=0;' style="visibility:visible;overflow:hidden;position:fixed;top:0;right:0;height:10px;width:10px;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;">
	&nbsp;</div>
	<div id='geoDrawGuides' curDisplay="-1" style="visibility:visible;z-index:-510;position:fixed;top:0;left:0;overflow:hidden;height:50;width:50;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  onclick="if(mobile==0){if(active==0){dragClick=1;dragging=0;getMouseXY(event);dragClick=0;getMouseXY(event);}}">
	&nbsp;</div>
	<div id="documentLayers" curScale='1' doubleTouch='0' doubleMove='0'> <!-- All required canvases for resizing -->
		<canvas id="selectDraw" style="visibility:visible;z-index:300;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="gridDraw" style="visibility:hidden;z-index:301;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		
		<canvas id="selectDisplayCanvas" style="visibility:hidden;z-index:-11;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>
		<canvas id="selectMaskCanvas" style="visibility:hidden;z-index:-10;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>
		<canvas id="selectStoreCanvas" style="visibility:hidden;z-index:-9;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>
		
		<canvas id="curDraw" style="visibility:visible;z-index:302;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="glDraw" style="visibility:hidden;z-index:301;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="pastDraw" style="visibility:hidden;z-index:100;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="lwin_l1_draw" style="visibility:visible;z-index:1;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>	
		<canvas id="tempBG" style="visibility:visible;z-index:0;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>
		<canvas id="gradientBG" style="visibility:visible;z-index:-1;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>
		<canvas id="undoDraw" style="visibility:hidden;z-index:-3;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
	
		<canvas id="tile_ul" class="tile" tPos="-1" lPos="-1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_um" class="tile" tPos="-1" lPos="0" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_ur" class="tile" tPos="-1" lPos="1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_ml" class="tile" tPos="0" lPos="-1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_mr" class="tile" tPos="0" lPos="1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_ll" class="tile" tPos="1" lPos="-1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_lm" class="tile" tPos="1" lPos="0" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
		<canvas id="tile_lr" class="tile" tPos="1" lPos="1" style="visibility:hidden;z-index:0;position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height="100px" width="100px"></canvas>
	</div>
	<div id="documentScalers"></div>
	<div id="marqueeScalers"></div>
	<div id="documentBack" style="z-index:802;position:fixed;top:0;left:0;overflow:hidden;height:100%;width:100%;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"></div>

	
	<canvas id="tempBuildCanvas" style="visibility:hidden;z-index:-8;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>

	<canvas id="saveCanvas" style="visibility:hidden;z-index:-4;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>

	<canvas id="saveCroppedCanvas" style="visibility:hidden;z-index:-5;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>

	<canvas id="saveCroppedCanvasBG" style="visibility:hidden;z-index:-6;position:fixed;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;"  height="100px" width="100px"></canvas>

	<div id='tearOff_colorSphereDiv' style='position:fixed;top:0px;left:0px;height:0px;width:0px;z-index:-7;'>&nbsp;</div>

	<div id="tempWindows" style="height:100%;width:100%;overflow:hidden;visibility:hidden;z-index:-6000" onClick="tempWindowDisplay(0);"></div>

	<div id="layersWindow"></div>
	<div id="tearOffs" style="position:fixed;top:0px;left:0px;height:1px;width:1px;overflow:hidden;visibility:hidden;z-index:-7000">
		<canvas id="tearOffs_brushSize" style="position:absolute;top:0;left:0;user-selection:none;-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;" height='1px' width='1px'></canvas>
	</div>

	</div>
</div>
</div>
</body>
</html>	
