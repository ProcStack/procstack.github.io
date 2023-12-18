/*
In the fragment shader you'll see `gl_FrontFacing`
You can use this for mix'ing in a noise pattern or other math for the back facing polygons.

Around line 373 in - ./public/js/pxlBase/Avatar.js
To find it quicker, in two places, you can search for - // ## Michael
You'll see a texture loading function, please use this method, it reuses textures if they've been loaded before
	this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"TextureFile.EXT")},

uniform sampler2D videoFeed
	The webcam texture coming from the user.
uniform sampler2D cloudNoise;
	Just a noise pattern, feel free to change it up.
	Is currently- ./public/images/assets/cloud3d.jpg
	You can use other textures too, I have a soft noise map commented out near there too, SoftNoise_512.jpg
uniform sampler2D edgeFalloff;
	The alpha map for the edges of the webcam object
	./public/images/assetsavatarZDepthMap.jpg

*/


import {shaderHeader} from "./shaderHeader.js";


///////////////////////////////////////////////////////////
// Green Screen Geometry				 				//
/////////////////////////////////////////////////////////

export function avatarShaderVert(){
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D mathFuncMap;
    
    uniform float videoActive;
    uniform float audioMuted;
    varying vec2 vUv;
    varying float vColorBlender;
    
    void main(){
        vUv=uv;
        
        vec4 modelViewPosition=modelViewMatrix * vec4(position, 1.0);
        
        float smoothFade= max(0., (min(1.,length(modelViewPosition.xyz)*0.005)-.5)*2.0 );
        float remappedAvatarBlend=1.0-texture2D(mathFuncMap,vec2( smoothFade, 1.  ) ).r * smoothFade;
        
        vColorBlender=remappedAvatarBlend*audioMuted;
        
        gl_Position = projectionMatrix*modelViewPosition;
    }`;
	return ret;
}

export function avatarShaderFrag(){ // ## set gl common variables to defines
	let ret=shaderHeader();
	ret+=`
    uniform sampler2D videoFeed;
    uniform sampler2D cloudNoise;
    uniform sampler2D edgeFalloff;
    uniform vec2 time;
    uniform vec2 colorMult;
    //uniform vec2 webCamBlend;
    //uniform float videoActive;
    uniform vec3 diamondCol;
    uniform vec2 resUV;
    varying vec2 vUv;
    varying float vColorBlender;
    float pi=3.14159265358979;

    void main(){
        vec4 Cd=texture2D(videoFeed,vUv);

        vec2 pixelUV=(floor(vUv*20.0)*0.05);
        vec4 pixel = texture2D(videoFeed,pixelUV); //Pixelated effect
        // Front side color math
        vec3 frontCd = Cd.rgb*colorMult.x;
        
        // Backside color math
        float pxlGreyscale=dot( pixel.rgb, vec3(0.299, 0.587, 0.114));
        vec3 backCd = vec3( pxlGreyscale )*colorMult.x; //greyscale effect
        // Set color based on back or front facing fragment
        Cd.rgb = gl_FrontFacing ? frontCd :  backCd ;
        
        vec3 edgeMasks=texture2D(edgeFalloff,vUv).rgb;
        float edgeAlphaMult=edgeMasks.g;
        vec3 noiseUVW=texture2D(cloudNoise,pixelUV+vec2( (time.x*.03), (time.x*.005) )).rgb-.5;

        float noiseOffset=length( (noiseUVW.rg-.5));
        
        noiseOffset= gl_FrontFacing ? noiseOffset*(1.0-edgeMasks.r) : noiseOffset;
        Cd.rgb=Cd.rgb+Cd.rgb*noiseOffset*0.3; // Color Noise
        edgeAlphaMult = gl_FrontFacing ? edgeMasks.r : edgeMasks.r+edgeMasks.g;
        Cd.a= min(1.0, max(0.0, Cd.a*(edgeAlphaMult-noiseOffset))); // Alpha Noise
        
        // Distance Based Color/Greyscale
        float greyscale=dot( Cd.rgb, vec3(0.299, 0.587, 0.114));
        Cd.rgb+=vec3( .1*(1.0-vColorBlender) );
        Cd.rgb=mix( vec3(greyscale+(vUv.y-.5)*.1), Cd.rgb, vColorBlender);
        

        gl_FragColor=Cd;
    }`;
	return ret;
}