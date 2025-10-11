<?php
$mobile=0;
$verbose=0;

$todoList=<<<EOT
==================================================================
EOT;


if(isset($_GET['v'])){

	if(is_numeric($_GET['v'])){

		$verbose=$_GET['v'];

	}
}
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
?>
<html>
<head>
</head>
<!--
Created by Kevin Edzenga; September 2018 -- 
If you are digging around in the source, I'm glad others out there do that!
-->
<meta name="viewport" content="width=device-width"></meta>
<script src="js/map_three.min.js"></script>
<script src="js/EffectComposer.js"></script>
<script src="js/CopyShader.js"></script>
<script src="js/RenderPass.js"></script>
<script src="js/ShaderPass.js"></script>
<?php /*
<script src="js/MaskPass.js"></script>
<script src="js/SSAOShader.js"></script>
*/ ?>
<script src="js/UnpackDepthRGBAShader.js"></script>
<script src="js/ShadowMapViewer.js"></script>

<script src="js/OBJLoader.js"></script>
<script src="js/MTLLoader.js"></script>
<script src="js/dat.gui.min.js"></script>
<script src="js/stats.min.js"></script>

<!-- Metal Asylum Local Javascript - map javascript files -->
<script>
var mobile=<?php echo $mobile; ?>;
var verbose=<?php echo $verbose; ?>;
var mapToDoList=`<?php echo $todoList; ?>`;
</script>
<script src="js/map_variables.js"></script>
<script src="js/map_boot.js"></script>
<script src="js/map_coreScripts.js"></script>
<script src="js/map_interface.js"></script>
<script src="js/map_cameraControl.js"></script>
<?php /* <script src="js/vert_mapShader.js"></script> */ ?>

<!-- == == == == == == == == == == == == == -->
<!-- ==  Post-Processing Render Passes   == -->
<!-- == == == == == == == == == == == == == -->

<script type="x-shader/x-vertex" id="anchoredObjectVert">
	varying vec3 pos;
	varying vec2 vUv;
	void main(){
		vUv=uv;
		vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
		gl_Position = projectionMatrix*modelViewPosition;
	}
</script>
<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
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
	varying vec2 vUv;
	void main(){
		float timer=time/100.0;
		vec2 sUv=vec2(sin((.99-abs(vUv.x-.5))*3.1415926535),cos((.99-abs(vUv.y-.5))*3.1415926535)*(1.0+flicker*2.0));
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

<style>
BODY{
	margin:0px;
	padding:0px;
	background-color:#000000;
}
.mapSlipMenuStyle{
	z-index:2;
	position:fixed;
	left:0;
	top:-1000;
	padding-top:20px;
	align-content:center;
	width:100%;
	overflow:hidden;
}

.mapSlipCreatedBy{
	z-index:3;
	font-family:tahoma;
	font-size:95%;
	letter-spacing:3px;
	color:#444444;
	position:fixed;
	right:0;
	top:-1000;
}
.mapSlipCreatedBy span{
	font-family:tahoma;
	font-size:80%;
	letter-spacing:5px;
	color:#303030;
	vertical-align:text-top;
}
.mapSlipVersion{
	z-index:4;
	font-family:tahoma;
	font-size:80%;
	letter-spacing:3px;
	color:#444444;
	position:fixed;
	left:0;
	bottom:-1000;
}
.mapSlipVersion span{
	font-family:tahoma;
	font-size:80%;
	letter-spacing:5px;
	font-weight:bold;
	color:#303030;
	vertical-align:text-bottom;
}
.menuLink{
	heigt:100px;
	font-family:tahoma;
	font-size:150%;
	font-weight:100;
	color:#ffffff;
	//font-variant:small-caps;
	text-decoration:none;
	letter-spacing:5px;
}
a.menuLink:link{
	color:'#aaaaaa';
}
a.menuLink:hover{
	color:'#ffffff';
}

a.menuLink:active{
	color:'#888888';
}
.menuSpacer{
	height:1px;
	overflow:hidden;
	margin:10px;
}

.menuSpacerTop{
	height:5px;
	overflow:hidden;
	margin-bottom:5px;
	border:1px solid #444444;
	border-top:0px;
	border-radius:6px 6px 0px 0px;
	opacity:.6;
	filter:alpha(opacity=60);
	width:85%;
}
.menuSpacerBottom{
	height:5px;
	overflow:hidden;
	margin-top:5px;
	border:1px solid #444444;
	border-bottom:0px;
	border-radius:0px 0px 6px 6px;
	opacity:.6;
	filter:alpha(opacity=60);
	width:85%;
}

</style>

<body onLoad="boot();">
<canvas id="map-core"></canvas>
</body>
</html>