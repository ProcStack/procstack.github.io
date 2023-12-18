
import {shaderHeader} from "./shaderHeader.js";


///////////////////////////////////////////////////////////
// Green Screen Geometry				 				//
/////////////////////////////////////////////////////////

export function avatarSnapShaderVert(){
	let ret=shaderHeader();
	ret+=`
	uniform sampler2D videoFeed;
	uniform float videoActive;
	uniform sampler2D edgeFalloff;
	uniform sampler2D avatarPosMap;
	uniform vec2 res;
	uniform float alpha;
	uniform vec2 webCamBlend;
	varying vec2 vUv;
	varying vec2 origUV;
	varying vec3 bodyVertPos;
	varying float alphaMult;
	varying vec3 worldPos;
	varying float depth;
	varying float greenScreenValue;
	varying vec3 grgb;
	varying float cdLen;
	varying float vFace;
	varying float filterActive;
	
	#define FE_CHEAP 1
	vec4 findEdgesRGB(sampler2D tex, const vec2 uv, vec2 dist, float thresh){
		#if (FE_CHEAP == 1)
			const int runCount=4;
			vec2 runDir[runCount];
			runDir[0]=vec2(1.0, 0.0);
			runDir[1]=vec2(0.0, 1.0);
			runDir[2]=vec2(-1.0, 0.0);
			runDir[3]=vec2(0.0, -1.0);
		#else
			const int runCount=8;
			vec2 runDir[runCount];
			runDir[0]=vec2(1.0, 0.0);
			runDir[1]=vec2(1.0, 1.0);
			runDir[2]=vec2(0.0, 1.0);
			runDir[3]=vec2(-1.0, 1.0);
			runDir[4]=vec2(-1.0, 0.0);
			runDir[5]=vec2(-1.0, -1.0);
			runDir[6]=vec2(0.0, -1.0);
			runDir[7]=vec2(1.0, -1.0);
		#endif
		float perc;
		float curPerc;
		vec2 curUV;
		vec3 curCd;
		float edgeValue=0.0;
		float div=0.0;
		float delta;
		float invThresh=1.0/(1.0-thresh);
		float brightness=0.0;
		vec2 sides=vec2(0,0);
		for(int s=0; s<runCount; ++s){
			for(int r=0; r<10; ++r){
				perc=1.0-(float(r)/10.0);
				curUV=uv+runDir[s]*(dist*float(r));
				curCd=texture2D(tex,curUV).rgb;
				curPerc=(curCd.g)>thresh?0.0:1.0;
				perc*=curPerc;
				sides+=(runDir[s]*perc)*curPerc;
				edgeValue+=perc;
				div+=1.0;
				brightness=length(curCd.rgb)*curPerc ;//max(brightness, length(curCd.rgb)*curPerc);
			}
		}
		return vec4(sides.xy,edgeValue/div,brightness/div);
	}

	// A function for a curve remap to bias the range towards 0
	// Used to push the avatar transition to "green screen" faster
	// the power on t can be adjusted for different curves
	float fade (float t) {
		return t * t * t * t * t * (t * (t * 6.0 - 15.0) + 10.0); 
	}
	
	
	void main(){
		vec3 gRef=vec3(0.0,1.0,0.0);
		//float ulSample=dot( gRef, texture2D(videoFeed,vec2(0.0,1.0)).rgb );
		//float urSample=dot( gRef, texture2D(videoFeed,vec2(1.0,1.0)).rgb );
		//float filterCheck= min(ulSample, urSample);
		//filterCheck= filterCheck < 0.0 ? 0.0 : filterCheck;
		//filterActive=filterCheck>.9?1.0:0.0;
		vec3 ulSample=texture2D(videoFeed,vec2(0.0,1.0)).rgb;
		vec3 urSample=texture2D(videoFeed,vec2(1.0,1.0)).rgb;
		float filterCheck=ulSample.g>.9 && ulSample.r<.1 && ulSample.b<.1 ? 1.0 : 0.0;
		filterCheck=urSample.g>.9 && urSample.r<.1 && urSample.b<.1 ? filterCheck : 0.0;
		
		// Check Black/White bars
		ulSample=texture2D(videoFeed,vec2(.25,1.0)).rgb;
		float ulf=abs((ulSample.r+ulSample.g+ulSample.b)*.33333333 - .5); // Video may be flipped, check abs(val-.5)>.45
		urSample=texture2D(videoFeed,vec2(.75,1.0)).rgb;
		float urf=abs((urSample.r+urSample.g+urSample.b)*.33333333 - .5); // Flipped video check
		filterCheck=ulf>.45 && urf>.45 ? filterCheck : 0.0;
		
		
		filterActive=filterCheck;
		
		vec2 diffuseUV=vec2(uv.x*.499, uv.y*.98);
		vec2 greenScreenUV=vec2(uv.x*.499+.501, uv.y*.98);
		vUv=mix( uv, diffuseUV, filterActive);
		origUV=uv;
		
		mat4 mRot=projectionMatrix*modelViewMatrix;
		mRot[3]=vec4(0.0,0.0,0.0,1.0);
		
		
		vec4 gsSample=texture2D(videoFeed,greenScreenUV);
		//float gsValue=(gsSample.g-gsSample.r-gsSample.b)>.8?0.0:1.0;
		greenScreenValue=1.0-gsSample.g;
		
		vec4 pushOut=findEdgesRGB(videoFeed, greenScreenUV, res*vec2(.15,.3), .8) * greenScreenValue;
		//pushOut.x+=pushOut.y*.15;
		pushOut.z=( mix( pushOut.z, .25+(pushOut.z*.5),  gsSample.r) * 4.0 ) ;
		pushOut.z*=pushOut.z;
		pushOut.z+=pushOut.w + gsSample.r;
		pushOut.x*=.1*max(0.0,1.0-pushOut.z);
		pushOut.y=pushOut.y*.1*max(0.0,1.0-pushOut.z);
		greenScreenValue*=max(0.0, min(1.0,(pushOut.z-.5)*.35));
		greenScreenValue=mix( 1.0, greenScreenValue, filterActive);

		bodyVertPos=pushOut.xyz;
		vFace=gsSample.r;
		
		float edgeMult=texture2D(edgeFalloff,uv).r;
		float remappedAvatarBlend = 1.0-fade(webCamBlend.x);
		edgeMult *= remappedAvatarBlend;
		alphaMult=edgeMult;
		vec3 nonFilterCd=texture2D(videoFeed,uv).rgb;
		vec3 sampleCd=texture2D(videoFeed,vec2(.35,.35)).rgb;
		sampleCd+=texture2D(videoFeed,vec2(.5,.65)).rgb;
		sampleCd+=texture2D(videoFeed,vec2(.65,.35)).rgb;
		float scdLen=min(1.0, length(sampleCd*.33333 * .25));
		cdLen=scdLen;
		
		float xyMult=(edgeMult*.3+.7) ;
		vec3 noFilterPos=vec3(position.xy*xyMult, position.z+edgeMult);//+cdPush*-1.0);
		vec3 filterPos=position+pushOut.xyz*filterActive;

		// Reversing the math in DiamondMap.hplc vop2cop
		vec3 diamondPos = (texture2D(avatarPosMap,uv).rgb - vec3(0.5)) * 4.0;
		// Approximate scaling to match the diamond to Octahedron object
		diamondPos *=  vec3(2.0,7.0,2.0);

		vec3 gsPos=mix( noFilterPos, filterPos, filterActive);
		vec3 blendPos = mix(diamondPos, gsPos, remappedAvatarBlend );
		vec4 modelViewPosition=modelViewMatrix * vec4(blendPos, 1.0);
		worldPos=(projectionMatrix*modelViewPosition).xyz;
		gl_Position = projectionMatrix*modelViewPosition;
		
		
	}`;
	return ret;
}

export function avatarSnapShaderFrag(){ // ## set gl common variables to defines
	let ret=shaderHeader();
	ret+=`
	uniform sampler2D videoFeed;
	uniform sampler2D edgeFalloff;
	uniform sampler2D avatarPosMap;
	uniform vec2 time;
	uniform vec2 colorMult;
	uniform float alpha;
	uniform vec2 webCamBlend;
	uniform vec2 scale;
	uniform vec2 ratio;
	varying vec2 vUv;
	varying vec2 origUV;
	varying vec3 bodyVertPos;
	varying float alphaMult;
	varying vec3 worldPos;
	varying float depth;
	varying float greenScreenValue;
	varying vec3 grgb;
	varying float cdLen;
	varying float vFace;
	varying float filterActive;
	float pi=3.14159265358979;

	// Fade function to match the same function in vert shader
	float fade (float t) {
		return t * t * t * t * t * (t * (t * 6.0 - 15.0) + 10.0); 
	}

	void main(){
		if(greenScreenValue==0.0){
			discard;
		}
		vec4 Cd=texture2D(videoFeed,vUv);
		float gsValue=(1.0-min(1.0, max(0.0, (Cd.g-Cd.r-Cd.b)*10.0)-.85)) * greenScreenValue;
		Cd.rgb*=colorMult.x;//*gsValue;
		
		float d=gl_FrontFacing?colorMult.x-cdLen:.1;
		Cd.rgb*=d;//mix(vec3(.15,0.05,0.08), Cd.rgb, d);
		
		float edgeAlphaMult=texture2D(edgeFalloff,origUV).r;

		//TODO: Make this color match the color of the avatar via uniform
		vec4 diamondCol = vec4(1.0);
		Cd = mix(Cd, diamondCol, clamp(fade(webCamBlend.x)-0.2,0.0,1.0));
		Cd.a=mix(1.0, gsValue*min(1.0,bodyVertPos.z*.25)*min(1.0,vUv.y*3.0+vFace), filterActive)*(alpha)*max(alphaMult, edgeAlphaMult);
		gl_FragColor=Cd;
	}`;
	return ret;
}
