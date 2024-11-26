// GUI Manager
//   Base class for Div/Span generator, SVG loader/animator, & CSS management
//   Written by Kevin Edzenga; 2020, 2024
// -- -- -- -- -- --

/*import { HelpGui } from './pxlGui/HelpGui.js';
import { InfoGui } from './pxlGui/InfoGui.js';
import { SettingsGui } from './pxlGui/SettingsGui.js';*/

// THIS FILE IS A MESS!!
//   When necessity and limited time drives development....

// TODO : Remove Antib0dy.Club specific code
// TODO : Remove hard coded html/css, promote to div generator class

import { SVGUtils } from './guiUtils/svgUtils.js';
import {VERBOSE_LEVEL} from '../core/Types.js';


export class GUIManager{
  constructor(verbose, projectTitle="Metal-Asylum", assetRoot="images/assets/", guiRoot="images/GUI/"){

  this.projectTitle = projectTitle;
  this.verbose = verbose;

  //this.bootTime=new Date().getTime();
  this.sW=window.innerWidth;
  this.sH=window.innerHeight;
  this.mobile=false;
  this.pxlFile=null;
  this.pxlCookie=null;
  this.pxlTimer=null;
  this.pxlAudio=null;
  this.pxlUtils=null;
  this.pxlUser=null;
  this.pxlDevice=null;
  this.pxlAutoCam=null;
  this.pxlCamera=null;
  this.pxlNavCanvas=null;
  this.pxlQuality=null;
  this.pxlEnv=null;
  this.assetRoot=assetRoot;
  this.guiRoot=guiRoot;
  //this.djAudioObj=null;
  this.introHelpActive=true;
  
  // -- Medalion Loads
  this.branding={
    title:projectTitle,
    loader:guiRoot+".svg",
    logo:guiRoot+".svg",
    medalion:guiRoot+".svg",
    stack:guiRoot+".svg"
  };
    
  // Dynamic Styles 
  this.lableBoxSize=40; // Device Label Box Size
  this.optionWidthRound=10;
  this.optionWidthAdd=25;
  this.deviceOptionHeight=[0, 300]; // Device Option List Max-Height's
  
  this.pxlLoader=null;
  this.pxlLoaderCount=0;
  
    // TODO : This is the loadable stage count
  //      Load js, load room, run room boot, await room environment load/setup, and run post-boot code.
  //      This should be a registration system, not hard coded
  //      As it would be better for loading status for multi-room systems
  //      Loader stages added to a promise/stage list during pre-boot, update max stage count here
  this.pxlLoaderTotal=5;
  
  this.hudBlock={obj:null, active:false};
  this.userControlBlock=null;
  this.hudVisibility=true;
  this.hudIcons={};
  this.hudElements={};
  this.guiWindows={};
  this.msgCount=0;
  this.hudMedalionBar=null;
  this.userProfileMessageInput=null;
  this.userProfileReturnMessage=null;
  this.userCountObj=null;
  this.userCountCur=0;
  this.messageCountObj=null;
  this.messageCountCur=0;
  this.chatMessageDisplay=null;
  this.chatMessageInput=null;
  this.camChoicesActive=false;
  //this.camChoicePrevObj=null;
  this.micChoicesActive=false;
  //this.micChoicePrevObj=null;
    this.pxlNavData={
      active:false,
      gui:null,
      height:null,
      fpsSet:0,
      fps:null,
      dl:null,
      ul:null
    };
    
  this.djPlayerObj=null;
    
  this.buildGuiStatus={
  hud:false,
  userTopBar:false,
  bottomBar:false,
  djPlayer:false,
  roomControls:false,
  verseList:false,
  medalion:true,
  loadingBranding:false
  };
  
  this.requestVerseList=false;
  this.verseList=[];
  this.verseUserCounts={};
  
  this.verseTitlePrefix="";
  this.verseTitleSuffix="'s Room";
  
  this.multiverseData={
  fromVerse:null,
  toVerse:null,
  electedVerse:null,
  mitosisState:false,
  mitosisBufferTime:15,
  mitosisTime:0,
  mitosisUpdateTime:0
  };
  
  // TODO : Move to function to prep dictionary for div lookup
  //      Would operate best for dynamic gen, offset/pos data:flags, and alt text propegation to Help
  this.textDescriptions={
    chatIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">C</span> )</span><br>chat', 'pos':[1,-1.5]},
    multiverseIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">U</span> )</span><br>multiverse<br>selection', 'pos':[0,-1.3]},
    djPlayerVolumeParent:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">B</span> )</span><br>music volume', 'pos':[0,-1.5]},
    
    speakerIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute people<br>pick audio output', 'pos':[0,-1.5]},
    micIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">M</span> )</span><br>mute/pick<br>mic input', 'pos':[0,-1.5]},
    camIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">V</span> )</span><br>enable/pick<br>video input', 'pos':[0,-1.5]},
    
    helpIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">?</span> )</span><br>help &<br>instructions', 'pos':[0,-1.5]},
    infoIconParent:{'text':'Info <span class="helpHotKeyParent">( <span class="helpHotKey">I</span> )</span>', 'pos':[-1,0], 'offset':[-10,0]},
    settingsIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">G</span> )</span><br>graphics &<br>navigation', 'pos':[0,-1.5]},
    muteAllIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">N</span> )</span><br>mute all users', 'pos':[1,0]},
    fullScreenIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">F</span> )</span><br>toggle full screen', 'pos':[-1,0]},
    videoQualityIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">H</span> )</span><br>video quality settings', 'pos':[-1,0]},
    //%=
    statsIcon:{'text':'jitsi connection status; toggle connection ', 'pos':[1,0]},
    //%
      //&=
      usersIcon:{'text':'<span class="helpHotKeyParent">( <span class="helpHotKey">T</span> )</span> user moderator tools', 'pos':[1,0]},
    //&
    ft2Button:{'text':'Environment', 'pos':[-1,0], 'offset':[-10,0]},
    ft3Button:{'text':'Invite Friends', 'pos':[-1,0], 'offset':[-10,0]},
    hud_userCount:{'text':'# of People', 'pos':[-1,0], 'offset':[-10,0]},
  };
  
  
  this.loading=true;
  this.disclaimer=false;
  
  this.mapPrompt=null;
  this.mapPromptBG=null;
  this.delayLoadChatWindow=false;
  
  this.renderSettings=null;
  this.controlSettings=null;
  this.shaderEditorDisplay=null;
  
  this.radioControls=[];
  this.controlState=[true,false,false,false];
  this.controlToggle=[true,true,false,false];
  this.buttonPadding=6;
  this.toggleOpacity=[0.60, 1];
  
  this.qualityText=["Netbook", "Laptop", "Desktop Computer", "Gamer Rig"];
  
  this.activeItem=null;
  
  //&=
  this.jmaWindowVis=false;
  //&
  
  this.actionPopUp=null;
  this.ctaLocalDocURL={}
  
  // ## Gat damn cross origin on google
  // ## iFrames headers to google prevent following links
  // ## Fix!
  this.ctaContentLoading=false;
  this.googleDocHTML=null;
  this.googleDocURL="";
  }

  setDependencies( pxlNav ){
    this.pxlFile=pxlNav.pxlFile;
    this.pxlCookie=pxlNav.pxlCookie;
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlAudio=pxlNav.pxlAudio;
    this.pxlUtils=pxlNav.pxlUtils;
    this.pxlUser=pxlNav.pxlUser;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlAutoCam=pxlNav.pxlAutoCam;
    this.pxlCamera=pxlNav.pxlCamera;
    this.pxlNavCanvas=pxlNav.pxlNavCanvas;
    this.pxlQuality=pxlNav.pxlQuality;
    this.pxlEnv=pxlNav.pxlEnv;

    this.mobile = pxlNav.mobile;
    this.renderSettings=this.pxlCookie.readCookie(this.pxlUser.renderSettingsCookie);
    this.controlSettings=this.pxlCookie.readCookie(this.pxlUser.controlModeCookie);

    super.setDependencies( pxlNav );
  }
  
  init(){
    this.cssBuildClasses();
    this.buildConsole();
  }
  
  prepLoader(){
		this.mapPromptBG=document.createElement("div");
		this.mapPromptBG.classList.add("mapPromptBackgroundStyle");
		document.body.appendChild(this.mapPromptBG);

		this.mapPrompt=document.createElement("div");
		this.mapPrompt.setAttribute("id","mapPrompt");
		this.mapPrompt.classList.add("mapPromptStyle");
		this.mapPrompt.classList.add("fader");
		this.mapPrompt.classList.add("visOn");
		this.mapPrompt.innerHTML=`
            <div id="loaderBranding" class='pxlLoaderTitle'>${this.projectTitle}</div>
            <div class='loadStyleParent'>
              <div id='pxlLoader' class='loadStyle'></div>
              <div id='pxlLoaderBackground' class='loadStyleBackground'></div>
            </div>
          `;
		document.body.appendChild(this.mapPrompt);
		
		if(this.buildGuiStatus.loadingBranding){
			SVGUtils.svgPromise( this.branding.loader, "loaderBranding", "pxlLoaderTitle", "loadBrandingLogo");
		}
  
		
		this.pxlLoader=document.getElementById( "pxlLoader" );
		this.pxlLoader.style.width= "2%";
			
		let canvasCrashBG=document.createElement("div");
		canvasCrashBG.classList.add("canvasCrashPromptBackgroundStyle");
		document.body.appendChild(canvasCrashBG);

		let canvasCrash=document.createElement("div");
		canvasCrash.classList.add("canvasCrashPromptStyle");
		canvasCrashBG.appendChild(canvasCrash);
		
		let inner;
    if(this.pxlQuality){
      if(parseInt(this.pxlQuality.detailLimit)==0){
        inner=`Looks like your computer is having a hard time, but we’ve got your fix.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle}.
          <br>If you’re still having issues, drop us a line in the chat.`;
      }else{
        inner=`Looks like your computer is still having trouble, but we’ve got another fix for ya.
          <br>Please click <a id="crashLink" class="crashLink">HERE</a> to reload ${this.projectTitle} again.
          <br>Again, if you’re still having issues, drop us a line in the chat.`;
      }
    }
		canvasCrash.innerHTML=inner;
		let crashLink=document.getElementById("crashLink");
		let tmpThis=this;
		if(crashLink){
			crashLink.onclick=(e)=>{tmpThis.crashLinkTrigger(e,tmpThis)};
		}
  }
	
  stepLoader(msg=""){
		this.pxlLoaderCount+=1;
    let curPerc=Math.min(100, this.pxlLoaderCount/(this.pxlLoaderTotal-1)*100.0 )
    if( curPerc == 100 ){
      this.pxlLoader.style.borderRadius = "5px";
    }
		this.pxlLoader.style.width= curPerc +"%";
		if( this.verbose >= VERBOSE_LEVEL.INFO ){
		  console.log("Loader", this.pxlLoaderCount, this.pxlLoader.style.width, "; "+msg,);
    }
  }
  
  // -- -- -- -- -- -- -- -- -- -- -- -- -- //
	
  booted(){
    this.buildHudBlock();
    this.buildTopBar();
    //this.buildMedalionBar();
    this.buildBottomBar();
    this.buildGuiWindowContainer();
    this.buildUserControlBlock();
    this.buildRawHtml();
		
		// -- -- 
		
		this.prepPageDisplay();
		// this.setPageToDisplay( true );
		// this.togglePageDisplay( true );
  }
  
  step(){
  this.updateGuiPositions();
  
    if( this.pxlUser?.checkItemWearOff(this.pxlTimer.prevMS) ){
      this.hideItemHud();
    }
    
    this.pxlNavDataUpdate();
  }
  
  resize(){
		this.sW=window.innerWidth;
		this.sH=window.innerHeight;
		
		// Linked to icons, run for any parenting
		this.resetHelpTextPlacement();
		
		let optionList=["videoinput","audioinput","audiooutput"];
		optionList.forEach( (type)=>{
			let optionBlockId=null;
			let curIcon=null;
			if( type=="videoinput" ){
		//this.camChoicesObj=deviceList;
		optionBlockId="camChoiceOptionsBlock";
		curIcon=this.hudIcons.camChoiceIcon;
			}else if( type=="audioinput" ){
		//this.micChoicesObj=deviceList;
		optionBlockId="micChoiceOptionsBlock";
		curIcon=this.hudIcons.micChoiceIcon;
			}else if( type=="audiooutput" ){
		//this.micChoicesObj=deviceList;
		optionBlockId="speakerChoiceOptionsBlock";
		curIcon=this.hudIcons.speakerChoiceIcon;
			}
			
			let optionBlock=document.getElementById( optionBlockId );
			if(optionBlock && curIcon){
		let curWidth=optionBlock.getBoundingClientRect().width
		
		let bbox=curIcon.parent.getBoundingClientRect();
		optionBlock.style.left=bbox.x-curWidth*.5;
		optionBlock.style.bottom=this.sH - this.hudBottomBar.getBoundingClientRect().y;
			}
		});
    
    this.setUserControlPosition();
  
    this.inviteUserPosition();
    this.setArtistInfoSizing();
  }
  resetHelpTextPlacement(){
		let hudIconKeys=Object.keys( this.textDescriptions );//this.hudIcons );
		hudIconKeys.forEach( (i)=>{
			let textDesc = this.textDescriptions[ i ];
			if(textDesc){
				let helpObj=document.getElementById( "helpText_"+i );
				if(!helpObj){ return; }
				let parentObj = document.getElementById( i );
				if(parentObj){
					let pad=2; 
					
					let pos=textDesc.pos;
					let offset= textDesc.offset ? textDesc.offset : [0,0];
					let parentBox=parentObj.getBoundingClientRect();
					let helpBox=helpObj.getBoundingClientRect();
					
					let toX=0;
					let toY=0;
					let pOffset=false;
					if(pos[1]<0){
					toY=parentBox.y+helpBox.height*pos[1];
					pOffset=true;
					}else if(pos[1]==0){
					toY=parentBox.y+parentBox.height*.5-helpBox.height*.5;
					}else if(pos[1]>0){
					toY=parentBox.y+parentBox.height+helpBox.height*(pos[1]-1);
					pOffset=true;
					}
					if(pOffset){
					if(pos[0]<0){
						toX=parentBox.x+parentBox.width+helpBox.width*pos[0];
					}else if(pos[0]==0){
						toX=parentBox.x+parentBox.width*.5-helpBox.width*.5;
					}else if(pos[0]>0){
						toX=parentBox.x+parentBox.width*(pos[0]-1);
					}
					}else{
					if(pos[0]<0){
						toX=parentBox.x+helpBox.width*pos[0];
					}else if(pos[0]==0){
						toX=parentBox.x+parentBox.width*.5-helpBox.width*.5;
					}else if(pos[0]>0){
						toX=parentBox.x+parentBox.width*2*pos[0];
					}
					}
					toX=toX+offset[0];
					
					if(toX+helpBox.width > this.sW-pad){
					toX=this.sW-pad-helpBox.width;
					}else if(toX<pad){
					toX=pad;
					}
					toY=toY+offset[1];
					
					helpObj.style.left=toX;
					helpObj.style.top=toY;
				}else{
					helpObj.style.display="none";
				}
			}
		});
  }
  
  crashLinkTrigger(e,tmpThis){
    let search=location.search.match(/[a-zA-Z0-9=]+/g)
    let retSearch="?";
    search.forEach( (s)=>{
      let splitter=s.split("=");
      if( splitter[0]=="dlimit" ){
        retSearch+=splitter[0]+"="+(parseInt(splitter[1])+1)+"&";
      }else{
        retSearch+=s+"&"
      }
    });
    location.search=retSearch
  }
  
  guiToggleVisibility( active=null ){
    active = active==null ? !this.hudVisibility : active;
    this.hudVisibility=active;

    if(this.hudTopBar && !this.hudTopBar.origDisplay){ this.hudTopBar.origDisplay = this.hudTopBar.style.display;}
    if(this.fastTravelBar && !this.fastTravelBar.origDisplay){ this.fastTravelBar.origDisplay = this.fastTravelBar.style.display; }
    if(this.hudBottomBar&& !this.hudBottomBar.origDisplay){ this.hudBottomBar.origDisplay = this.hudBottomBar.style.display; }

    if( active ){
      if(this.hudTopBar) this.hudTopBar.removeAttribute("style"); 
      if(this.fastTravelBar) this.fastTravelBar.removeAttribute("style"); 
      if(this.hudBottomBar) this.hudBottomBar.removeAttribute("style"); 
      
      if( this.userControlBlock ){
        let topStyle=this.userControlBlock.gui.style.top;
        this.userControlBlock.gui.removeAttribute("style"); 
        this.userControlBlock.gui.style.top = topStyle;
      }
    }else{
      if(this.hudTopBar) this.hudTopBar.style.display = "none" ;
      if(this.fastTravelBar) this.fastTravelBar.style.display = "none" ;
      if(this.hudBottomBar) this.hudBottomBar.style.display = "none" ;
      if(this.userControlBlock) this.userControlBlock.gui.style.display = "none" ;
    }
    if( this.hudElements.artistInfo ){
      this.hudElements.artistInfo.parent.style.display = active ? "grid" : "none" ;
    }
  }
  
  
  
  /**
  * Prep css classes for promptFader to isolate required css from external files
  */
	// TODO : ... Why? Figure out why its used and just do class list toggles
  cssBuildClasses(){
		let faderStyle=document.createElement('style');
		faderStyle.type="text/css";
		faderStyle.innerHTML=`
			.fader{
				transition: opacity .8s, filter .8s;
			}
			.visOn{
				filter:alpha(opacity=100);
				opacity:1.0;
			}
			.visOff{
				filter:alpha(opacity=0);
				opacity:0.0;
			}
		`;
		document.getElementsByTagName('head')[0].appendChild(faderStyle);
  }

  /**
  * Prep an object with propper css classes to work with {@link promptFader}
  * @param {(string|object)} obj Object to set classes to.
  * @param {boolean=} startVis If the object starts visible or not. Defaults to not visible, easier for a fade in.
  */
  prepPromptFader( obj, startVis=false ){
		let curObj=obj;
		if( typeof(curObj) === "string" ){
			curObj=document.getElementById(curObj);
			if(!curObj){
				return;
			}
		}
			
		curObj.classList.add("fader");
		curObj.classList.add( (startVis ? "visOn" : "visOff") );
		curObj.style.display= startVis ? "inline-block" : "none";
  }
  
  /**
  * Fade an object in or out of visiblity over time.
  * Fade animation uses css for the visuals, but uses clock time for automatic fade out events.
  * @param {(string|object)} faderObjObject to fade in or out.
  * @param {boolean} vis Visiblity state to fade to.
  * @param {number=} fadeOutLimit Length of time in Seconds until the object automatically fades out.
  * This occures in the requestAnimationFrame Render function.
  * @param {boolean=} deleteOnEnd Option to remove the object from the document once the fade out completes.
  * For garbage collection reasons, its advised to set this `true` when possible.
  */
  promptFader(faderObj, vis, fadeOutLimit=null, deleteOnEnd=false){
  if(typeof(faderObj)=="string"){
    faderObj=document.getElementById(faderObj);
    if(!faderObj){
      return;
    }
  }
  if(faderObj.classList.value.indexOf("fader")<0){
    faderObj.classList.add("fader");
  }
  if(vis){
    faderObj.style.display="inline-block";
    setTimeout( ()=>{
        if(faderObj.classList.contains("visOff")){
          faderObj.classList.remove("visOff");
          faderObj.classList.add("visOn");
          if(fadeOutLimit!=null){
            faderObj.setAttribute("fadeOut", clockTime+fadeOutLimit*1000);
            fadeOutList.push(faderObj);
          }
        }
    }, 50);
  }else{
    faderObj.classList.remove("visOn");
    faderObj.classList.add("visOff");
    if(deleteOnEnd){
  let transEnd=["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
  transEnd.forEach((end)=>{
    faderObj.addEventListener(end,()=>{
    let curParent=faderObj.parentNode;
    if(curParent){
      curParent.removeChild(faderObj);
    }
    });
  });
    }else{
  setTimeout( ()=>{
          if(faderObj.classList.contains("visOff")){
            faderObj.style.display="none";
          }
  }, 1000);
    }
  }
  }
  
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

  buildConsole(){
    let consoleBlock=document.createElement("div");
    consoleBlock.id="consoleBlock";
    consoleBlock.classList.add("consoleBlockStyle");
    document.body.appendChild(consoleBlock);
    this.guiWindows.consoleBlock={ active:false, gui:consoleBlock };
  }

  buildMessageBlock( msg, type="Info" ){
    let messageBlock=document.createElement("div");
    this.msgCount++;
    messageBlock.id="messageBlock-"+this.msgCount;
    messageBlock.classList.add("messageBlockStyle");
    messageBlock.classList.add("message"+type);

    let self = this;
    let closeBtn=document.createElement("div");
    closeBtn.classList.add("messageCloseBtn");
    closeBtn.innerHTML="X";
    closeBtn.addEventListener("click", function(){
      self.removeMessage( messageBlock );
    });

    let messageTopBar = document.createElement("div");
    messageTopBar.classList.add("messageTopBarStyle");
    
    let messageHeader = document.createElement("div");
    messageHeader.classList.add("messageHeaderStyle");
    messageHeader.innerHTML=type;
    messageTopBar.appendChild( messageHeader );
    messageTopBar.appendChild( closeBtn );
    messageBlock.appendChild( messageTopBar );

    let messageContent = document.createElement("div");
    messageContent.classList.add("messageContentStyle");
    messageContent.innerHTML=msg;
    messageBlock.appendChild( messageContent );

    return messageBlock;
  }

  print( msg ){
    if( !this.guiWindows.consoleBlock ){
      this.buildConsole();
    }
    if( !this.guiWindows.consoleBlock.active ){
      this.guiWindows.consoleBlock.active=true;
      this.promptFader( this.guiWindows.consoleBlock.gui, true );
    }
    let consoleBlock=this.guiWindows.consoleBlock.gui;
    let consoleMsg=this.buildMessageBlock( msg );
    consoleBlock.appendChild( consoleMsg );
  }

  
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  /**
  * For GUI elements, when option boxes and prompts are open; this is the object when clicked will close all open windows.
  */
  buildHudBlock(){
  if(!this.buildGuiStatus.hud){
    return;
  }
  let hudBlock=document.createElement( "div" );
  hudBlock.id="hudBlock";
  hudBlock.classList.add("hudBlockStyle");
  this.hudBlock.obj=hudBlock;
  document.body.appendChild( this.hudBlock.obj );
  this.hudBlock.obj.style.display="none";
  
  let tmpThis=this;
  this.hudBlock.obj.addEventListener("click", (e)=>{ tmpThis.toggleHudBlock( false, true ); } );
  }
  
  /**
  * Toggle visibility of the background GUI exit object.
  * Option to to set the specific visibility, along with force closing all open GUI windows.
  * TODO: Set up heirachical windows, so instead of just closing all windows, the click action goes back to the previous menu.
  * @param {boolean=} active The visibility value to set the background GUI exit object.
  * @param {boolean=} close If all open GUI window objects need to close out as well.
  */
  toggleHudBlock(active=null, close=false){
  if(!this.hudBlock){
    return; // No Hud Block Exists
  }
  active = active==null ? !this.hudBlock.active : active;
  this.hudBlock.active=active;
  let hudObjDisplay = false
  if( active ){
    hudObjDisplay="inline-block";
  }else{
    if( !this.checkOpenWindows( close ) ){ // Returns if any windows are open, if not, hide the background object.
  hudObjDisplay="none";
  if(this.pxlNavCanvas){ this.pxlNavCanvas.focus(); }
    }
  }
  
  if( this.hudBlock.obj && this.hudBlock.obj.style && hudObjDisplay != false ){
    this.hudBlock.obj.style.display=hudObjDisplay;
  }
    
  }
  /**
  * Return a value of `true` or `false` if there is an open gui window.
  * With option to close any open windows, as a quick exit out of all GUI elements.
  * @param {boolean=} close Optional for closing all open GUI windows.
  */
  checkOpenWindows( close=false ){
  let guiList = Object.keys( this.guiWindows );
  let openStatus=false;
  guiList.forEach( (g)=>{
      if( g == "chatBoxGui" ){
        return;
      }
    if(close){
  if(this.guiWindows[g].button){
    this.flipIcon(this.guiWindows[g].button, false );
  }
  if(this.guiWindows[g].gui && this.guiWindows[g].active){
    this.guiWindows[g].active=false;
    this.promptFader( this.guiWindows[g].gui, false );
          
          if( g == "settingsGui" ){
            this.togglePxlNavDataDisplay( false );
          }
  }
    }
    openStatus=openStatus || this.guiWindows[ g ].active;
  });
  return openStatus;
  }
  
  
  checkFocus( targetId=null, isPxlCore=null ){
    if( isPxlCore===true ){
      if( this.guiWindows.inviteUserGui && this.guiWindows.inviteUserGui.active ){
        this.toggleInviteUser(false);
      }
    }
  }
  /* -- -- -- -- -- -- -- -- -- -- */
  
  buildRawHtml(){}
	
  buildTopBar(){
		if( this.mobile || !this.buildGuiStatus.userTopBar ){
			return;
		}
		
		let topBar=document.createElement( "div" );
		topBar.id="hud_topBar";
		topBar.classList.add("hud_topBarBlockStyle");
		this.hudTopBar=topBar;
		document.body.appendChild( this.hudTopBar );
		
		let subHtml="";
		//%=
			//subHtml=`<object id="statsIcon" data='${this.guiRoot}icons/icon_stats.svg' type='image/svg+xml'></object>`;
			subHtml=`<div id="statsIcon"></div>`;
		//%
		//&=
			subHtml+=`</div>
		<div id="usersIconParent">
			<div id="usersIcon"></div>`;
		//&
		
		let html;
		html=`
			<div id="hud_localVideoStyle" class="hud_localVideoStyle"></div>
			<div id="hud_topBarParent" class="hud_topBarParentStyle">
		<div id="statsIconParent">
			${subHtml}
		</div>
		<div  class="hud_topBarVSpacerStyle"></div>
			</div>
		`;
		topBar.innerHTML=html;
		//%=
		this.hudIcons.statsIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_stats.svg`, "statsIcon", "stats" );
		this.hudIcons.statsIcon.promise.finally(()=>{

		});
		//%
		//&=
		this.hudIcons.usersIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_user.svg`, "usersIcon", "users" );
		//&
    
    let pnDataDisplayParent=document.createElement( "div" );
		pnDataDisplayParent.id="hud_pxlNavData";
		pnDataDisplayParent.classList.add("hud_pxlNavDataParentStyle");
    topBar.appendChild( pnDataDisplayParent );
    this.pxlNavData.gui=pnDataDisplayParent;
    let pnDataDisplay=document.createElement( "div" );
		pnDataDisplay.id="hud_pxlNavData";
		pnDataDisplay.classList.add("hud_pxlNavDataStyle");
    pnDataDisplayParent.appendChild( pnDataDisplay );
    
    html=`
      <div class="hud_pxlNavData_FPS gui_boldText">FPS</div><div class="hud_pxlNavData_FPS">:</div><div id="hud_pxlFPS" class="hud_pxlNavData_FPS"> - </div>
      <div class="hud_pxlNavData_UL gui_boldText">↑</div><div class="hud_pxlNavData_UL">:</div><div id="hud_pxlUL" class="hud_pxlNavData_UL"> - </div>
      <div class="hud_pxlNavData_DL gui_boldText">↓</div><div class="hud_pxlNavData_DL">:</div><div id="hud_pxlDL" class="hud_pxlNavData_DL"> - </div>
    `;
    pnDataDisplay.innerHTML=html;
    
    this.pxlNavData.fps=document.getElementById("hud_pxlFPS");
    this.pxlNavData.ul=document.getElementById("hud_pxlUL");
    this.pxlNavData.dl=document.getElementById("hud_pxlDL");
  }
  
  buildUserControlBlock(){
    this.userControlBlock={};
    this.userControlBlock.activeList=[];
    this.userControlBlock.userList={};
    this.userControlBlock.mutedList=[];
    
		let userControlsBlock=document.createElement( "div" );
    userControlsBlock.classList.add( "userControlBlockStyle" );
		document.body.appendChild( userControlsBlock );
    this.userControlBlock.gui=userControlsBlock;
    
    this.userControlBlock.speakerIcon = SVGUtils.svgRawPromise( `${this.guiRoot}icons/icon_userSpeaker.svg` );
  }
  
  
  /*
    this.buildGuiStatus={
      djPlayer:false,
      roomControls:true,
      verseList:false,
      medalion:true
    };
    this.branding={
      loader:guiRoot+"branding/OffGrid_logogram.svg",
      logo:guiRoot+"branding/OffGrid_logomark.svg",
      medalion:guiRoot+"branding/OffGrid_logomark.svg",
      stack:guiRoot+"branding/OffGrid_logostack.svg"
    };
  svgIconPromise( url, id, clickEvent, curVal=null, style=null, postLoadCmd=null ){
  */
  buildMedalionBar(){
    if( this.buildGuiStatus.medalion ){
      let medalionBar=document.createElement( "div" );
      medalionBar.id="hud_medalionBar";
      medalionBar.classList.add("hud_medalionIconBlockStyle");
      this.hudMedalionBar=medalionBar;
      document.body.appendChild( this.hudMedalionBar );
      
      //<object id="usersIcon" data='${this.guiRoot}icons/icon_user.svg' type='image/svg+xml'></object>
      
      let html=`
        <div id="medalionIconParent" class="hud_speakerIconStyle">
          <div id="medalionIcon"></div>
        </div>
        <div id="medalionTitle" class="medalionTitleStyle">${this.branding.title}</div>
      `;
      this.hudMedalionBar.innerHTML=html;
      
      // -- -- -- -- -- -- -- -- -- -- //
      let mIcon=document.getElementById("medalionIcon");
      let mTitle=document.getElementById("medalionTitle");
        mIcon.addEventListener("mouseover", ()=>{
          mTitle.classList.add("medalionTitleGrowStyle");
        });
        mIcon.addEventListener("mouseout", ()=>{
          mTitle.classList.remove("medalionTitleGrowStyle");
        });
      
      this.hudIcons.medalionIcon = SVGUtils.svgIconPromise( this.branding.medalion, "medalionIcon", "info", null, "medalionStyle" );
    }
  }
  
  buildBottomBar(){
  
  if( !this.buildGuiStatus.bottomBar ){
    return;
  }
  let bottomBar=document.createElement( "div" );
  bottomBar.id="hud_bottomBar";
  bottomBar.classList.add("hud_bottomBarStyle");
  this.hudBottomBar=bottomBar;
  document.body.appendChild( this.hudBottomBar );
  
  //<object id="usersIcon" data='${this.guiRoot}icons/icon_user.svg' type='image/svg+xml'></object>
  
  let html="";
  html+=`
    <div id="hud_chatIconBlock" class="hud_bottomLeftBlockStyle">
        <div id="settingsIconParent" class="hud_settingsIconStyle">
          <object id="settingsIcon"></object>
        </div>
  <div></div>
        <div id="helpIconParent" class="hud_helpIconStyle">
          <object id="helpIcon"></object>
        </div>
        `;
    if( !this.mobile && this.buildGuiStatus.verseList ){
      html+=`<div class="hud_usersIconStyle">
            <div id="multiverseIcon"></div>
          </div>
          <div></div>`;
    }
    /*html+= `<div id="musicControllerBlock" class="hud_musicControllerBlockStyle">kj
  </div>
      `;*/
    html+='</div>';
    if( !this.mobile ){
      html+=`
        <div class="hud_micCamIconsBlockStyle">
          <div id="speakerIconParent" class="hud_speakerIconStyle">
            <div id="speakerIcon"></div>
          </div>
          <div id="speakerChoiceIconParent" class="hud_speakerChoiceIconStyle">
            <div id="speakerChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="speakerChoiceIconParent">
              <div id="speakerChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
          <div class="hud_micCamSpacerStyle"></div>
          <div id="micIconParent" class="hud_micIconStyle">
            <div id="micIcon"></div>
          </div>
          <div id="micChoiceIconParent" class="hud_micChoiceIconStyle">
            <div id="micChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="camChoiceIconParent">
              <div id="micChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
          <div class="hud_micCamSpacerStyle"></div>
          <div id="camIconParent" class="hud_camIconStyle">
            <div id="camIcon"></div>
          </div>
          <div id="camChoiceIconBlock" class="hud_camChoiceIconStyle">
            <div id="camChoiceOptionsBlock" class="gui_iconButtonPopup">
            </div>
            <div id="camChoiceIconParent">
              <div id="camChoiceIcon" class="iconCaretStyle"></div>
            </div>
          </div>
        </div>
        
        <div id="hud_helpInfoSettingsBlock" class="hud_helpInfoSettingsBlockStyle">
          <div class="guiVerseHudTitle">
            <span id="guiVerseTitle"></span>
          </div>
          <div></div>
          <div id="chatIconParent" class="hud_chatIconStyle">
            <div id="chatIcon"></div>
          </div>
          <div id="hud_messageCount" class="hud_userCountStyle hud_messageCountBaseStyle">0</div>
        </div>
      `;
    }
  this.hudBottomBar.innerHTML=html;
  
  // -- -- -- -- -- -- -- -- -- -- //
  
  this.messageCountObj=document.getElementById( "hud_messageCount" );
  //this.messageCountObj.style.display="none";
  
  // ## Damn it React... Damn it native JavaScript ... I want some Angular...
  this.hudIcons.chatIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_chat.svg`, "chatIcon", "chat" );
    
    
    if( !this.mobile && !this.pxlAutoCam.enabled ){
      this.hudIcons.multiverseIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_multiverse.svg`, "multiverseIcon", "multiverse" );
      this.hudIcons.speakerIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_ProxAudio.svg`, "speakerIcon", "speakerToggle", false );
      this.hudIcons.speakerChoiceIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_downcaret.svg`, "speakerChoiceIcon", "speakerChoice", false, "iconCaretStyle" );
      this.hudIcons.micIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_mic.svg`, "micIcon", "micToggle", false );
      this.hudIcons.micChoiceIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_downcaret.svg`, "micChoiceIcon", "micChoice", false, "iconCaretStyle" );
      this.hudIcons.camIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_camera.svg`, "camIcon", "camToggle", false );
      this.hudIcons.camChoiceIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_downcaret.svg`, "camChoiceIcon", "camChoice", false, "iconCaretStyle" );
      this.hudIcons.helpIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_help.svg`, "helpIcon", "help" );
      this.hudIcons.settingsIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_settings.svg`, "settingsIcon", "settings" );
      
      let guiVerseTitle=document.getElementById("guiVerseTitle");
      let tmpThis=this;
    }else{
      let chatBlock=document.getElementById("hud_chatIconBlock");
      chatBlock.style.gridAutoColumns= "max-content max-content auto max-content";
      chatBlock.style.margin= "0px 10px";
    }
  }

  // -- -- -- -- -- -- -- -- -- -- //
	
  prepArtistInfo( artistInfo=null ){
    if( !this.pxlEnv?.postIntro || artistInfo=="" ){
      return;
    }
  if( !this.hudElements.artistInfo ){
      this.hudElements.artistInfo={};
    this.hudElements.artistInfo.active=false;
      let artistInfoParent=document.createElement( "div" );
      artistInfoParent.classList.add( "hud_aristInfoParentStyle" )
      this.hudElements.artistInfo.parent=artistInfoParent;
      
      let artistInfoButton=document.createElement( "div" );
      artistInfoButton.classList.add( "hud_aristInfoButtonStyle" )
      artistInfoParent.appendChild( artistInfoButton );
      let tmpThis=this;
      artistInfoButton.onclick=()=>{tmpThis.toggleArtistInfo()};
      this.hudElements.artistInfo.button=artistInfoButton;
      
      
      let artistInfoButtonText=document.createElement( "div" );
      artistInfoButtonText.classList.add( "hud_aristInfoButtonTextStyle" )
      artistInfoButtonText.innerHTML="artwork info&nbsp;&nbsp;";
      artistInfoButton.appendChild( artistInfoButtonText );
      this.hudElements.artistInfo.buttonText=artistInfoButtonText;
      
      let artistInfoButtonSvg=document.createElement( "div" );
      artistInfoButtonSvg.classList.add( "hud_aristInfoCarrotXStyle" )
      artistInfoButtonSvg.id="artistInfoCarrotX";
      artistInfoButton.appendChild( artistInfoButtonSvg );
      
      let artistInfoInner=document.createElement( "div" );
      artistInfoInner.classList.add( "hud_aristInfoInner" )
      artistInfoInner.innerHTML=artistInfo;
      artistInfoParent.appendChild( artistInfoInner );
      this.hudElements.artistInfo.inner=artistInfoInner;
      
      document.body.appendChild(artistInfoParent);
      
      this.hudElements.artistInfo.closeSvg=SVGUtils.svgPromise( `${this.guiRoot}global/carrotCloseAnimate.svg`, "artistInfoCarrotX" );
      this.hudElements.artistInfo.closeSvg.promise.finally(()=>{
        this.artistInfoButtonPrep();
      });
  }
    this.toggleArtistInfo(false);
      
    if( artistInfo!= null && this.hudVisibility && !this.pxlAutoCam.active){
      this.hudElements.artistInfo.parent.style.zIndex=155;
      this.hudElements.artistInfo.parent.style.display="grid";
      this.hudElements.artistInfo.inner.innerHTML=artistInfo;
      setTimeout( ()=>{
        this.setArtistInfoSizing();
      },20);
    }else{
      this.hudElements.artistInfo.parent.style.zIndex=-5;
      this.hudElements.artistInfo.parent.style.display="none";
    }
  }
  artistInfoButtonPrep( run=0 ){
  let curSVG=this.hudElements.artistInfo.closeSvg.svg;
  if(curSVG){ // If this doesn't pass, means loading the svg broke
    
    let toX=curSVG.getElementById("carrotToClone_on");
    let fromX=curSVG.getElementById("carrotToClone_off");
    if( toX && fromX ){
  this.hudElements.artistInfo.onAnim=toX;
  this.hudElements.artistInfo.offAnim=fromX;
  
    }else{
  if(run==2){
    // This should never run,
    //   If it does, check the SVG file has propper IDs on the shapes
    //console.log("Failed to prep Status SVG");
  }else{
    setTimeout( ()=>{
    this.artistInfoButtonPrep( run+=1 );
    },100); // This should never hit, so if it does, die after a few runs.
  }
    }
  }
  }
  
  setArtistInfoSizing(){
    if( this.hudElements.artistInfo ){
      let iHeight=this.hudElements.artistInfo.inner.clientHeight;
      let iWidth=this.hudElements.artistInfo.inner.clientWidth;
      let bHeight=this.hudElements.artistInfo.button.clientHeight;
      let bWidth=this.hudElements.artistInfo.button.clientWidth;
      this.hudElements.artistInfo.innerHeight=iHeight;
      this.hudElements.artistInfo.innerWidth=iWidth;
      this.hudElements.artistInfo.baseHeight=bHeight;
      this.hudElements.artistInfo.baseWidth=bWidth;
      this.hudElements.artistInfo.parent.style.height= iHeight+"px";
      this.hudElements.artistInfo.parent.style.width= iWidth+"px";
      let tWidth=this.hudElements.artistInfo.buttonText.clientWidth;
      this.hudElements.artistInfo.buttonText.maxWidth= tWidth;
      this.hudElements.artistInfo.buttonText.style.maxWidth= tWidth+"px";
      this.toggleArtistInfo(this.hudElements.artistInfo.active);
    }
  }
  toggleArtistInfo( active=null ){
    active= active==null ? !this.hudElements.artistInfo.active : active;
    this.hudElements.artistInfo.active=active;
    
    let iHeight=this.hudElements.artistInfo.innerHeight;
    let iWidth=Math.min( this.pxlDevice.sW*.3, this.hudElements.artistInfo.innerWidth);
    let bHeight=this.hudElements.artistInfo.baseHeight;
    let bWidth=this.hudElements.artistInfo.baseWidth;
    this.hudElements.artistInfo.parent.style.maxHeight= active ? iHeight+"px" : bHeight+"px";
    this.hudElements.artistInfo.parent.style.maxWidth= active ? iWidth+"px" : bWidth+"px";
    this.hudElements.artistInfo.parent.style.padding= active ? "5px" : "0px";
    
    // this.hudElements.artistInfo.buttonText.innerText= active ? "x" : "artwork info";
    let tWidth=this.hudElements.artistInfo.buttonText.maxWidth;
    this.hudElements.artistInfo.buttonText.style.maxWidth= active ? "0px" : tWidth+"px";
    this.hudElements.artistInfo.buttonText.style.opacity= active ? "0" : "1";
    this.hudElements.artistInfo.buttonText.style.filter= "alpha(opacity="+( active ? "0" : "1000" )+")";
    
    this.hudElements.artistInfo.inner.style.opacity= active ? "1" : "0";
    this.hudElements.artistInfo.inner.style.filter= "alpha(opacity="+( active ? "100" : "0" )+")";
    
    if( this.hudElements.artistInfo.onAnim ){
      if( active ){
        this.hudElements.artistInfo.onAnim.beginElement();
      }else{
        this.hudElements.artistInfo.offAnim.beginElement();
      }
    }
  }
  
	// -- -- -- --
	
  prepPageDisplay( artistInfo=null ){
    if( !this.pxlEnv?.postIntro || artistInfo=="" ){
      return;
    }
		if( !this.hudElements.artistInfo ){
      this.hudElements.artistInfo={};
			this.hudElements.artistInfo.active=false;
      let artistInfoParent=document.createElement( "div" );
      artistInfoParent.classList.add( "hud_aristInfoParentStyle" )
      this.hudElements.artistInfo.parent=artistInfoParent;
      
      let artistInfoButton=document.createElement( "div" );
      artistInfoButton.classList.add( "hud_aristInfoButtonStyle" )
      artistInfoParent.appendChild( artistInfoButton );
      let tmpThis=this;
      artistInfoButton.onclick=()=>{tmpThis.togglePageDisplay()};
      this.hudElements.artistInfo.button=artistInfoButton;
      
      
      let artistInfoButtonText=document.createElement( "div" );
      artistInfoButtonText.classList.add( "hud_aristInfoButtonTextStyle" )
      artistInfoButtonText.innerHTML="artwork info&nbsp;&nbsp;";
      artistInfoButton.appendChild( artistInfoButtonText );
      this.hudElements.artistInfo.buttonText=artistInfoButtonText;
      
      let artistInfoButtonSvg=document.createElement( "div" );
      artistInfoButtonSvg.classList.add( "hud_aristInfoCarrotXStyle" )
      artistInfoButtonSvg.id="artistInfoCarrotX";
      artistInfoButton.appendChild( artistInfoButtonSvg );
      
      let artistInfoInner=document.createElement( "div" );
      artistInfoInner.classList.add( "hud_aristInfoInner" )
      artistInfoInner.innerHTML=artistInfo;
      artistInfoParent.appendChild( artistInfoInner );
      this.hudElements.artistInfo.inner=artistInfoInner;
      
      document.body.appendChild(artistInfoParent);
      
		}
    this.togglePageDisplay(false);
      
    if( artistInfo!= null && this.hudVisibility && !this.pxlAutoCam.active){
      this.hudElements.artistInfo.parent.style.zIndex=155;
      this.hudElements.artistInfo.parent.style.display="grid";
      this.hudElements.artistInfo.inner.innerHTML=artistInfo;
      setTimeout( ()=>{
        this.setArtistInfoSizing();
      },20);
    }else{
      this.hudElements.artistInfo.parent.style.zIndex=-5;
      this.hudElements.artistInfo.parent.style.display="none";
    }
  }
  
  setPageToDisplay(){
    if( this.hudElements.artistInfo ){
      let iHeight=this.hudElements.artistInfo.inner.clientHeight;
      let iWidth=this.hudElements.artistInfo.inner.clientWidth;
      let bHeight=this.hudElements.artistInfo.button.clientHeight;
      let bWidth=this.hudElements.artistInfo.button.clientWidth;
      this.hudElements.artistInfo.innerHeight=iHeight;
      this.hudElements.artistInfo.innerWidth=iWidth;
      this.hudElements.artistInfo.baseHeight=bHeight;
      this.hudElements.artistInfo.baseWidth=bWidth;
      this.hudElements.artistInfo.parent.style.height= iHeight+"px";
      this.hudElements.artistInfo.parent.style.width= iWidth+"px";
      let tWidth=this.hudElements.artistInfo.buttonText.clientWidth;
      this.hudElements.artistInfo.buttonText.maxWidth= tWidth;
      this.hudElements.artistInfo.buttonText.style.maxWidth= tWidth+"px";
      this.toggleArtistInfo(this.hudElements.artistInfo.active);
    }
  }
  togglePageDisplay( active=null ){
    if( this.hudElements.artistInfo ){
			// If no active boolean is passed, toggle the current state
			active= active==null ? !this.hudElements.artistInfo.active : active;
			if( this.hudElements?.artistInfo ){
				 this.hudElements.artistInfo.active=active;
			}
			
			let iHeight=this.hudElements.artistInfo.innerHeight;
			let iWidth=Math.min( this.pxlDevice.sW*.3, this.hudElements.artistInfo.innerWidth);
			let bHeight=this.hudElements.artistInfo.baseHeight;
			let bWidth=this.hudElements.artistInfo.baseWidth;
			this.hudElements.artistInfo.parent.style.maxHeight= active ? iHeight+"px" : bHeight+"px";
			this.hudElements.artistInfo.parent.style.maxWidth= active ? iWidth+"px" : bWidth+"px";
			this.hudElements.artistInfo.parent.style.padding= active ? "5px" : "0px";
			
			// this.hudElements.artistInfo.buttonText.innerText= active ? "x" : "artwork info";
			let tWidth=this.hudElements.artistInfo.buttonText.maxWidth;
			this.hudElements.artistInfo.buttonText.style.maxWidth= active ? "0px" : tWidth+"px";
			this.hudElements.artistInfo.buttonText.style.opacity= active ? "0" : "1";
			this.hudElements.artistInfo.buttonText.style.filter= "alpha(opacity="+( active ? "0" : "1000" )+")";
			
			this.hudElements.artistInfo.inner.style.opacity= active ? "1" : "0";
			this.hudElements.artistInfo.inner.style.filter= "alpha(opacity="+( active ? "100" : "0" )+")";
			
			if( this.hudElements.artistInfo.onAnim ){
				if( active ){
					this.hudElements.artistInfo.onAnim.beginElement();
				}else{
					this.hudElements.artistInfo.offAnim.beginElement();
				}
			}
		}
  }
  
	
	// -- -- -- --
	
  // TODO : Wow this is stupid....
  iconEvent(func, obj, mode=null){
    if(this.hudBlock.obj){
      this.hudBlock.obj.style.display="none";
    }
  if(func=="click"){
    if(mode=="chat"){
  this.toggleChatBox();
  return;
    }else if(mode=="musicToggle"){
  this.pxlAudio.djPlayerMuteToggle();
  this.toggleIcon(obj, !this.pxlAudio.djMuted, true );
  return;
    }else if(mode=="userSpeakerToggle"){
  this.setUserControls( obj );
  return;
    }else if(mode=="speakerToggle"){
  this.toggleIcon(obj, false, true );
  return;
    }else if(mode=="speakerChoice"){
  let curType="audiooutput";
  this.flipIcon(obj, this.guiWindows[curType] && this.guiWindows[curType].active );
  return;
    }else if(mode=="help"){
  let tmp=this.guiWindows.helpGui ? this.guiWindows.helpGui.active : false;
  this.checkOpenWindows(true);
  this.helpGuiToggle( !tmp );
  return;
    }else if(mode=="info"){
  let tmp=this.guiWindows.infoGui ? this.guiWindows.infoGui.active : false;
  this.checkOpenWindows(true);
  this.infoGuiToggle( !tmp );
  return;
    }else if(mode=="settings"){
  let tmp=this.guiWindows.settingsGui ? this.guiWindows.settingsGui.active : false;
  this.checkOpenWindows(true);
  this.settingsGuiToggle( !tmp );
  return;
  
    }else if(mode=="userProfile"){
  this.toggleUserProfile();
  return;
    //&=
    }else if(mode=="users"){
    //&
    }else if(mode=="stats"){
  return;
    }
  }
  }
  
  setMicVolumeLevel( volLevel ){
    if( !this.hudIcons.micIcon.volumeMask ){
      this.hudIcons.micIcon.volumeMask=document.getElementById("gui_micVolumeMask");
      this.hudIcons.micIcon.timer=this.pxlTimer.msRunner.x-1;
    }
    let yVal= 12-volLevel*11;
    this.hudIcons.micIcon.volumeMask.setAttribute( "y", yVal );
  }
  
  toggleIcon(obj, active, loadingCheck=false){ // Mute toggle
    if( obj ){
      obj.mute.style.filter= active ? "alpha(opacity=0)" : "alpha(opacity=100)";
      obj.mute.style.opacity= active ? "0" : "1";
      obj.mute.style.transform= active ? "scale(0,0)" : "scale(1,1)";
      //obj.mute.style.display=active ? "none" : "inline-block";
      
      if( ["camToggle","speakerToggle"].includes( obj.eventType ) ){//"speaker" ){
        return; // No need to have a loader on the speaker toggle.
      }
      
      let loadingTypeList= { "speakerToggle":"speaker", "micToggle":"audio", "camToggle":"video" };
      let loadingType= loadingTypeList[ obj.eventType ];
      if(loadingType && loadingCheck){
        this.loadingDeviceChange( loadingType, active );
      }
  }
  }
  flipIcon(obj, active){ // Caret flip
  obj.caret.style.transform=`rotate( ${(active ? "180deg" : "0deg")} )`;
  }


/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  
  // -- -- -- -- -- -- -- -- -- //
  
  loadingDeviceChange( loadingType, loadingState=true ){
  let curButton=null;
  if( loadingType == "speaker"){ // Shouldn't run, but if I add this in the future.
    curButton=this.hudIcons.speakerIcon;
  }else if( loadingType == "audio"){
    curButton=this.hudIcons.micIcon;
  }else if( loadingType == "video"){
    curButton=this.hudIcons.camIcon;
  }
  
  curButton.indicator.style.display= loadingState ? "inline-block" : "none";
  curButton.indicator.style.animationPlayState= loadingState ? "running" : "paused";
  
  curButton.waiting.forEach( (p)=>{
    p.setAttribute("fill-opacity", ( loadingState ? ".5" : "1" ) );
  });
  
  if(loadingState){
    setTimeout( ()=>{
  this.loadingDeviceChange(loadingType,false);
    },1000);
  }
  }
  
  
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////
  
  djBuildPlayer(){
    if( this.buildGuiStatus.djPlayer ){
      this.djPlayerObj=document.createElement("div");
      this.djPlayerObj.id="djPlayer";
      //this.djPlayerObj.classList.add( "fader" );
      //this.djPlayerObj.classList.add( "visOff" );
      
      let djPlayerHtml=`
          <audio id="djStream" playsinline muted>
            <source src="`+this.pxlAudio.djUrlSource+`"></source>
          </audio>
          <table cellpadding=0 cellspacing=5 border=0 style="height:100%;"><tbody><tr>
              <td align="left">
                  <div id="djPlayerVol"></div>
              <  d><td valign="center" align="left" width=100%>
                  <div id="djPlayerVolumeParent" class="volParent"><div id="djPlayerVolume" class="volSlider"></div></div>
              <  d><  r>
          <  body><  able>`;
      this.djPlayerObj.innerHTML=djPlayerHtml;

      let playerParent=document.getElementById( "musicControllerBlock" );
      playerParent.appendChild( this.djPlayerObj );

      this.hudIcons.musicIcon = SVGUtils.svgIconPromise( `${this.guiRoot}icons/icon_music.svg`, "djPlayerVol", "musicToggle", !this.pxlAudio.djMuted );
      
      this.pxlAudio.djBuildPlayer();
    }
  }
  


/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  
  buildItemHud(objName, text){
    this.activeItem.innerHTML=text;
    this.activeItem.style.opacity="1";
    this.activeItem.style.filter="alpha(opacity=100)";
    this.activeItem.style.textShadow="1px 1px 3px #000000";
    setTimeout(()=>{    
      this.activeItem.style.fontSize="1.5em";
      this.activeItem.style.top=".5%";
      this.activeItem.style.right="140px";
      this.activeItem.style.transform="translateX(0%)";
    },1500);
  }
  hideItemHud(){
    this.activeItem.innerHTML="";
    this.activeItem.style.fontSize="3em";
    this.activeItem.style.top="10%";
    this.activeItem.style.right="50%";
    this.activeItem.style.transform="translateX(50%)";
    this.activeItem.style.opacity="0";
    this.activeItem.style.filter="alpha(opacity=0)";
  }
  

  mapPrepPrompts(){
    this.activeItem=document.createElement("div");
    this.activeItem.classList.add("activeItemStyle");
    document.body.appendChild(this.activeItem);
  }
  
  updateGuiPositions(){
    if(this.loading){
      let cLen=this.radioControls.length;
      let stillLoading=false;
      for(let x=0; x<cLen; ++x){
    if(!this.radioControls[x][3]){
      stillLoading=true;
      break;
    }
    let child=this.radioControls[x][0];
    let parent=this.radioControls[x][2];
    let pBB=parent.getBoundingClientRect();
    let cW=pBB.width+this.buttonPadding*2;
    let cH=pBB.height+this.buttonPadding*2;
    let cT=pBB.top-this.buttonPadding;
    let cL=pBB.left-this.buttonPadding;
    child.style.width=cW;
    child.style.height=cH;
    child.style.top=cT;
    child.style.left=cL;
    
    this.radioControls[x][1].style.width=cW;
    this.radioControls[x][1].style.height=cH;
    this.radioControls[x][1].style.top=cT;
    this.radioControls[x][1].style.left=cL;
      }
      this.loading=stillLoading;
    }
  }


/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  
  togglGuiWindow( guiName=null, vis=false ){
    if(guiName=="helpGui"){
      this.helpGuiToggle( vis, false );
    }else if(guiName=="infoGui"){
      this.infoGuiToggle( vis, false );
    }else if(guiName=="settingsGui"){
      this.settingsGuiToggle( vis, false );
    }
  }

  svgCheckClick(e=null, action=null){
    if(!action){ return; }
    
    if( action== "close" ){
      this.toggleGuiWindowContainer(null, false, true );
      return;
    
    }else if(action=="ft1"){
      return;
    }else if(action=="ft2"){
      return;
    }else if(action=="ft3"){
        this.toggleInviteUser();
      return;
    }else if(action=="ft4"){
      return;
    }else if(action=="ft5"){
      this.pxlAutoCam.toggleAutoCam();
      return;
    }
  }
  svgStylize(e=null, active=false){
    if( !e ){ return; }
    let target= e.path ? e.path[1] : e.target.parentNode;

    let stateObj=target.getElementById("state");//getElementsByTagName("id");
      if(stateObj){
        let color= active ? "white" : "none" ;
        stateObj.setAttribute("fill", color );
      }
    
    let hoverObj=target.getElementById("hover");//getElementsByTagName("id");
    if(hoverObj){
      hoverObj.setAttribute("fill", color );
    }
  }
  
  renderQualitySettings(val){
  this.pxlQuality.percent=val;
  this.pxlQuality.screenResPerc=val*.75+.25;
  this.pxlQuality.mapAutoQualityUpdate(val, true);
  this.pxlDevice.resizeRenderResolution();
  }


  pxlNavDataUpdate(){
    if( this.pxlNavData.active ){
      if( this.pxlTimer.msRunner.x > this.pxlNavData.fpsSet ){
        this.pxlNavData.fpsSet=this.pxlTimer.msRunner.x+1;
        this.pxlNavData.fps.innerText=parseInt(1  / this.pxlTimer.msRunner.y);
      }
    }
  }


/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////


  buildGuiWindowContainer(){
  let bgDiv=document.createElement("div");
  bgDiv.classList.id="guiWindowBackground";
  bgDiv.classList.add("guiWindowBackground");
  bgDiv.classList.add("fader");
  bgDiv.classList.add("visOff");
  bgDiv.style.display="none";
  
  let tmpThis=this;
  bgDiv.onclick=(e)=>{
    tmpThis.toggleGuiWindowContainer(e, false, true );
  }
  this.guiWindowBG=bgDiv;
  document.body.appendChild( bgDiv );
  }
  toggleGuiWindowContainer(e, active, closeWindows=false ){
  if(e){
    
    let target= e.path ? e.path[0] : e.target;
    let targetId=target.getAttribute("id");
    if(targetId!="guiWindowBackground"){
  // ## Bad way to do this....
  let exitObjList=["gui_helpGuiWindow", "gui_helpContent", "gui_infoGuiWindow", "gui_infoContent", "gui_settingsGuiWindow", "gui_settingsContent"];
  if( !exitObjList.includes( targetId ) ){
    return null;
  }
    }
  }
    let openStatus=this.checkOpenWindows( closeWindows );

    
  if(this.guiWindowBG && openStatus==active ){ this.promptFader(this.guiWindowBG, active,null,false); }
  if(active){
    this.pxlNavCanvas.blur();
  }else{
    this.pxlNavCanvas.focus();
  }
  }

  helpGuiBuild(){
  this.guiWindows.helpGui={};
  this.guiWindows.helpGui.gui=null;
  this.guiWindows.helpGui.active=false;
  
  let helpGuiDiv=document.createElement( "div" );
  helpGuiDiv.id="gui_helpGuiWindow";
  helpGuiDiv.classList.add("gui_helpGuiParentStyle");
  this.prepPromptFader( helpGuiDiv );
  this.guiWindowBG.appendChild( helpGuiDiv );
  
  let html="";
  html+=`
    <div id="gui_helpContent" class="gui_contentStyle">
  <div class="gui_body">
    <div id="gui_helpGui_keyboardParent" class="gui_helpGui_keyboardParent">
    <div id="gui_helpGui_controlsKeyboard" class="guiPadding settings_sectionHeader">keyboard controls</div>
    <div class="gui_helpGui_ASDWorUDLR">
      <div id="gui_helpGui_asdw" class="gui_helpGui_asdw"></div>
      <div id="gui_helpGui_or" class="gui_helpGui_text">or</div>
      <div id="gui_helpGui_udlr" class="gui_helpGui_udlr"></div>
    </div>
    <div id="gui_helpGui_useKeys" class="gui_helpGui_text" style="display:inline-block;">Use your keyboard <span class="gui_boldText">ARROWS</span> or<br><span class="gui_boldText">AWSD</span> keys to move around</div>
    </div>
    <div id="gui_helpGui_mouse" class="gui_helpGui_mouse">
    <div id="gui_helpGui_MouseControls" class="guiPadding settings_sectionHeader">mouse controls</div>
    <div id="gui_helpGui_MouseOutlined" class="gui_helpGui_mouseOutline"></div>
    <div id="gui_helpGui_useMouse" class="guiPadding gui_helpGui_text" style="display:inline-block;">To orient your view:<br><span class="gui_boldText">LEFT CLICK</span> and drag your mouse<br><span class="gui_boldText">RIGHT CLICK</span> to lock your mouse</div>
    </div>
  </div>
  <div id="gui_helpGui_hotKeys" class="gui_helpGui_hotKeys">
          You can change <span class="gui_boldText">Navigation</span> and <span class="gui_boldText">Look controls</span> in the <span class="gui_boldText">Settings</span> <span id="gui_helpGui_settingIcon"></span> menu
        </div>
  <div id="guiHelpFooter" class="gui_footer">
    <div class="guiButton" id="guiHelpBackButton">close</div>
  </div>
  <div class="gui_spacer"></div>
    </div>
  `;
  helpGuiDiv.innerHTML=html;
    
  let svgDivList=[
    //[this.guiRoot+"global/ANTIBODYCLUB.svg", "gui_helpGui_ANTIBODYCLUB","guiAntibodyClubTitle",false],
    
    //[this.guiRoot+"keyboard/controlsKeyboard.svg", "gui_helpGui_controlsKeyboard","guiSectionHeaderText",false],
    [this.guiRoot+"keyboard/asdw.svg", "gui_helpGui_asdw","guiKeyDispSVG",false],
    //[this.guiRoot+"keyboard/or.svg", "gui_helpGui_or","guiKeyOrSVG",false],
    [this.guiRoot+"keyboard/udlr.svg", "gui_helpGui_udlr","guiKeyDispSVG",false],
    //[this.guiRoot+"keyboard/useKeys.svg", "gui_helpGui_useKeys","guiSectionHelpText",false],
    
    //[this.guiRoot+"mouse/MouseControls.svg", "gui_helpGui_MouseControls","guiSectionHeaderText",false],
    [this.guiRoot+"mouse/MouseOutlined.svg", "gui_helpGui_MouseOutlined","guiMouseDispSVG",false],
    //[this.guiRoot+"mouse/useMouse.svg", "gui_helpGui_useMouse","guiSectionHelpText",false],
    
    //[this.guiRoot+"global/close.svg", "guiHelpFooter",["buttonHover","guiHelpEnterButton"],true,"close"]
  ];
  svgDivList.forEach( (s)=>{
    SVGUtils.svgButtonPromise( ...s );
  });
  
  // Close Button
  let tmpThis=this;
  let guiClose=document.getElementById("guiHelpBackButton");
  guiClose.onclick=(e)=>{ 
      if(tmpThis.introHelpActive){
        tmpThis.introHelpActive=false;
        tmpThis.pxlEnv.postHelpIntro();
      }
      tmpThis.svgCheckClick(e, "close");
    };
  
  // Remove linking from hud icons only
  //let hudIconKeys=Object.keys( this.hudIcons );
  let hudIconKeys=Object.keys( this.textDescriptions );
  //hudIconKeys.push( "djPlayerVolumeParent" );
  hudIconKeys.forEach( (i)=>{
    let textDesc = this.textDescriptions[ i ];
    if(textDesc){
  let text = textDesc.text;
  let pos = textDesc.pos;
  let helpObj = document.createElement( "div" );
  helpObj.id = "helpText_"+i;
  helpObj.classList.add( "helpTextDescriptionParent" );
  helpObj.innerHTML = text;
  helpGuiDiv.appendChild( helpObj );
  this.textDescriptions[ i ].obj = helpObj;
    }
  });
  
    
  let settingsIcon=document.getElementById("gui_helpGui_settingIcon");
  if(settingsIcon && this.hudIcons.settingsIcon){
    settingsIcon.innerHTML=this.hudIcons.settingsIcon.svg.parentNode.innerHTML;
    settingsIcon.style.position="relative";
    settingsIcon.style.top="7.3px";
    settingsIcon.style.width="30px";
    settingsIcon.style.padding="2px";
    settingsIcon.style.cursor="pointer";
    settingsIcon.children[0].style.height="26px";
    settingsIcon.onclick=()=>{
      tmpThis.iconEvent("click", null, "settings");
    };
  }
    
  // -- -- -- -- -- -- -- -- -- -- //
  // Store gui window as object
  this.guiWindows.helpGui.gui=helpGuiDiv;
  
  // Let the browser update sizing and any potential display:block limitations
  setTimeout( ()=>{
    this.resize();
  }, 50);
  }
  helpGuiToggle( active=null, bgVis=true ){
  if( !this.guiWindows.helpGui ){
    this.helpGuiBuild();
  }
  
  active= active==null ? !this.guiWindows.helpGui.active : active;
  this.guiWindows.helpGui.active=active;
  this.promptFader( this.guiWindows.helpGui.gui, active );
  this.toggleGuiWindowContainer( null, active );
  if(this.hudBlock.active){ this.toggleHudBlock( active ); }
  
    
    if(this.introHelpActive && !active){
      this.introHelpActive=false;
      this.pxlEnv.postHelpIntro();
    }
    
  // Make sure help text is placed correctly; Happens when resizing the window without the help gui open
  setTimeout( ()=>{
    this.resetHelpTextPlacement();
  },20);
  }

/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  infoGuiBuild(){
  this.guiWindows.infoGui={};
  this.guiWindows.infoGui.gui=null;
  this.guiWindows.infoGui.active=false;
  
  let infoGuiDiv=document.createElement( "div" );
  infoGuiDiv.id="gui_infoGuiWindow";
  infoGuiDiv.classList.add("gui_infoGuiParentStyle");
  this.prepPromptFader( infoGuiDiv );
  this.guiWindowBG.appendChild( infoGuiDiv );
  
  let html="";
  html+=`
    <div id="gui_infoContent" class="gui_contentInfoStyle">
  <div class="gui_infoBody">
    <div id="gui_infoGuiParent" class="gui_infoGuiParent">
    <br>${this.projectTitle}, created by <a href="https://www.theumbrella.nyc/">The Umbrella</a>,
    <br>an experience design collective.
    <br>
    <br>Want to chat?
    <br><a href="mailto:info@theumbrella.nyc">info@theumbrella.nyc</a>
    <br>
    <br>We’re in active development. Get in touch if you have any issues.
    <br>
    </div>
  </div>
  <div id="guiInfoFooter" class="gui_footer">
    <div class="guiButton" id="guiInfoBackButton">close</div>
  </div>
    </div>
  `;
  infoGuiDiv.innerHTML=html;
        
  // Close Button
  let tmpThis=this;
  let guiClose=document.getElementById("guiInfoBackButton");
  guiClose.onclick=(e)=>{ tmpThis.svgCheckClick(e, "close"); };
    
  
  // -- -- -- -- -- -- -- -- -- -- //
  
  this.guiWindows.infoGui.gui=infoGuiDiv;  
  }
  
  infoGuiToggle(active=null, bgVis=true){
  if( !this.guiWindows.infoGui ){
    this.infoGuiBuild();
  }

  active= active==null ? !this.guiWindows.infoGui.active : active;
  this.guiWindows.infoGui.active=active;
  this.promptFader( this.guiWindows.infoGui.gui, active );
  this.toggleGuiWindowContainer( null, active );
  if(this.hudBlock.active){ this.toggleHudBlock( active ); }
    
    if(this.introHelpActive && !active){
      this.introHelpActive=false;
      this.pxlEnv.postHelpIntro();
    }
  }
  
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  applyCookies(){
  if(this.controlSettings){
    this.controlSettings=eval(this.controlSettings);
  }
  if(this.renderSettings){
    this.renderSettings=eval(this.renderSettings);
  }
  }
  
  settingsGuiBuild(){
  this.guiWindows.settingsGui={};
  this.guiWindows.settingsGui.gui=null;
  this.guiWindows.settingsGui.active=false;
  
  let settingsGuiDiv=document.createElement( "div" );
  settingsGuiDiv.id="gui_settingsGuiWindow";
  settingsGuiDiv.classList.add("gui_settingsGuiParentStyle");
  this.prepPromptFader( settingsGuiDiv );
  this.guiWindowBG.appendChild( settingsGuiDiv );
  let curName="Default";
    curName=!curName ? "" : curName;
  let html=`
    <div id="gui_settingsContent" class="gui_contentSettingsStyle">
  <div class="gui_settingsBody">
    <div class="gui_settingsParentGrid">
      <!-- -- Username -- -- -->
    <div class="cellMargin settings_icon" id="settings_user"></div>
    <div class="settings_optionHeader">Username</div>
    <div class="settings_radio" style="grid-auto-flow: row; justify-content: start;">
                    <div id="guiuserProfileBoxFieldParent" class="gui_userProfileBoxFieldParentStyle">
                      <input type="text" placeholder="Set your username" value="${curName}" id="settings_usernameInput" class="settings_usernameInput"></input>
                      <input type="button" value="Set" id="settings_sendUsername" class="sendUsername">
                    </div>
                    <div id="settings_usernameResponseMessage" class="usernameResponseMessageStyle"></div>
                </div>
      <!-- -- -- -- -- -- -->
    <div class="settingsGridSpan settingsSpacer"></div>
      <!-- -- Left/Right -- -- -->
    <div class="cellMargin settings_icon" id="settings_left_right"></div>
    <div class="settings_optionHeader">Left/Right</div>
    <div class="settings_radio" id="settingsRadioBlock_leftRight">
      <span>
      <input type="radio" id="settings_tankTurning" name="settings_leftRight" value="0" hidden>
      <label for="settings_tankTurning">Turn</label>
      </span>
      <span>
      <input type="radio" id="settings_strafing" name="settings_leftRight" value="1" hidden>
      <label for="settings_strafing">Strafe</label>
      </span>
    </div>
      <!-- -- Mouse -- -- -->
    <div class="cellMargin settings_icon" id="settings_mouse"></div>
    <div class="settings_optionHeader">Mouse Looking</div>
    <div class="settings_radio" id="settingsRadioBlock_mouse">
      <span>
      <input type="radio" id="settings_dragLooking" name="settings_mouse" value="0" hidden>
      <label for="settings_dragLooking">Native</label>
      </span>
      <span>
      <input type="radio" id="settings_pointLooking" name="settings_mouse" value="1" hidden>
      <label for="settings_pointLooking">Inverted</label>
      </span>
    </div>
      <!-- -- -- -- -- -- -->
    <div class="settingsGridSpan settingsSpacer"></div>
      <!-- -- Graphics Quality -- -- -->
    <div class="cellMargin settings_icon" id="settings_graphics"></div>
    <div class="settings_optionHeader">Graphics Quality</div>
    <div class="settings_radio" id="settingsRadioBlock_graphics">
      <span>
      <input type="radio" id="settings_graphicsQuality_low" name="settings_autoQuality" value="0" hidden>
      <label for="settings_graphicsQuality_low">Low</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_med" name="settings_autoQuality" value="1" hidden>
      <label for="settings_graphicsQuality_med">Medium</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_high" name="settings_autoQuality" value="2" hidden>
      <label for="settings_graphicsQuality_high">High</label>
      </span>
      <span>
      <input type="radio" id="settings_graphicsQuality_custom" name="settings_autoQuality" value="3" hidden>
      <label for="settings_graphicsQuality_custom">Custom</label>
      </span>
    </div>
      <!-- -- -- -- -->
      <div class="r7Adv gui_settingsAdvancedParentGrid" id="gui_advancedSettings">
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_render"></div>
      <div class="settings_optionHeader">Render Resolution</div>
      <div class="settings_radio" id="settingsRadioBlock_resolution">
      <span>
        <input type="radio" id="settings_render_25" name="settings_renderPerc" value=".25" hidden>
        <label for="settings_render_25">25%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_50" name="settings_renderPerc" value=".5" hidden>
        <label for="settings_render_50">50%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_75" name="settings_renderPerc" value=".75" hidden>
        <label for="settings_render_75">75%</label>
      </span>
      <span>
        <input type="radio" id="settings_render_100" name="settings_renderPerc" value="1" hidden>
        <label for="settings_render_100">100%</label>
      </span>
      </div>
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_fog"></div>
      <div class="settings_optionHeader">Fog Quality</div>
      <div class="settings_radio" id="settingsRadioBlock_fog">
      <span>
        <input type="radio" id="settings_noRedFog" name="settings_fogLevel" value="0" hidden>
        <label for="settings_noRedFog">Low</label>
      </span>
      <span>
        <input type="radio" id="settings_cheapResFog" name="settings_fogLevel" value="1" hidden>
        <label for="settings_cheapResFog">Medium</label>
      </span>
      <span>
        <input type="radio" id="settings_highResFog" name="settings_fogLevel" value="2" hidden>
        <label for="settings_highResFog">High</label>
      </span>
      </div>
    <!-- -- -- -- -->
      <div class="cellMargin settings_icon" id="settings_bloom"></div>
      <div class="settings_optionHeader">Bloom Effects</div>
      <div class="settings_radio" id="settingsRadioBlock_bloom">
      <span>
        <input type="radio" id="settings_noBloom" name="settings_bloomEffects" value="0" hidden>
        <label for="settings_noBloom">Off</label>
      </span>
      <span>
        <input type="radio" id="settings_bloomActive" name="settings_bloomEffects" value="1" hidden>
        <label for="settings_bloomActive">On</label>
      </span>
      </div>
    <!-- -- -- -- -->
      </div>
    </div>
      <div class="settingsGridSpan settingsEmptySpacer"></div>
    </div>
    <div class="guiSettingsFooterButtons">
    <div class="guiButton" id="guiSettingsBackButton">close</div>
    </div>
  </div>
    </div>
  `;
  
  settingsGuiDiv.innerHTML=html;
  this.guiWindows.settingsGui.gui=settingsGuiDiv;  
  
  let tmpThis=this;
  this.qualitySlider=document.getElementById( "SettingsGraphicsQualitySlider" );
  
  // Close Button
  // ## Add "Save cookies" to closing the window
  let guiClose=document.getElementById("guiSettingsBackButton");
  guiClose.onclick=(e)=>{ tmpThis.svgCheckClick(e, "close"); };
  
  // -- -- -- -- -- -- -- -- -- -- -- -- //
  // --  Advanced Quality Controls -- -- //
  // -- -- -- -- -- -- -- -- -- -- -- -- //
  
  
  let svgDivList=[
    [this.guiRoot+"settingsIcons/settings_user.svg", "settings_user",["settings_icon_scale"],false],
    
    [this.guiRoot+"settingsIcons/settings_left_right.svg", "settings_left_right",["settings_icon"],false],
    [this.guiRoot+"settingsIcons/settings_mouse.svg", "settings_mouse",["settings_icon"],false],
    
    [this.guiRoot+"settingsIcons/settings_graphics.svg", "settings_graphics",["settings_icon"],false],
    [this.guiRoot+"settingsIcons/settings_render.svg", "settings_render",["settings_icon"],false],
    [this.guiRoot+"settingsIcons/settings_fog.svg", "settings_fog",["settings_icon"],false],
    [this.guiRoot+"settingsIcons/settings_bloom.svg", "settings_bloom",["settingsIconStyle"],false],
  ];
  svgDivList.forEach( (s)=>{
    SVGUtils.svgButtonPromise( ...s );
  });

  // -- -- -- -- -- -- -- //
    
  
  let msgInput=document.getElementById( "settings_usernameInput" );
  msgInput.onkeyup=(e)=>{ tmpThis.keyUsernameSet(e); };
  msgInput.onkeydown=(e)=>{ tmpThis.keyDownUsernameSet(e); };
  this.guiWindows.settingsGui.usernameInput=msgInput;
    
  let button=document.getElementById( "settings_sendUsername" );
  button.addEventListener("click", ()=>{
    tmpThis.sendUsernameUpdate( msgInput );
  });
  
  let retMessage=document.getElementById( "settings_usernameResponseMessage" );
  this.guiWindows.settingsGui.usernameReturn=retMessage;
    
    
  // -- -- -- -- -- -- -- //
  
  let radioList,rLength;
  
  this.guiWindows.settingsGui.advObj=document.getElementById("gui_advancedSettings");
  this.guiWindows.settingsGui.customObj=document.getElementById("settings_graphicsQuality_custom");
  
  radioList=["settings_graphicsQuality_low", "settings_graphicsQuality_med", "settings_graphicsQuality_high", "settings_graphicsQuality_custom"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val=parseInt( rad.value );
    rad.addEventListener('change', (e)=>{
  tmpThis.pxlQuality.setQualityLevel(val);
  tmpThis.setRadioValues();
    });
    /*if( val != 3){
  rad.addEventListener('change', (e)=>{
    tmpThis.guiWindows.settingsGui.advObj.style.maxHeight="0px";
    tmpThis.pxlQuality.setQualityLevel(val);
    tmpThis.setRadioValues();
  });
    }else{
  rad.addEventListener('change', (e)=>{
    let advObj=tmpThis.guiWindows.settingsGui.advObj;
    let oHeight=advObj.getAttribute( "maxHeight" );
    advObj.style.maxHeight = oHeight+"px";
  });
    }*/
  }
  radioList=["settings_render_25", "settings_render_50", "settings_render_75", "settings_render_100"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val=parseFloat( rad.value );
    rad.addEventListener('change', (e)=>{
  tmpThis.guiWindows.settingsGui.customObj.checked=true;
  tmpThis.pxlQuality.setGraphicsSettings( {resolution:val} );
  tmpThis.pxlQuality.setQualityCookie(3);
    });
  }
  
  
  radioList=["settings_noRedFog", "settings_cheapResFog", "settings_highResFog"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val=rad.value;
    rad.addEventListener('change', (e)=>{
  tmpThis.guiWindows.settingsGui.customObj.checked=true;
  tmpThis.pxlQuality.setGraphicsSettings( {fog:val} );
  tmpThis.pxlQuality.setQualityCookie(3);
    });
  }
  
  radioList=["settings_noBloom","settings_bloomActive"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val= rad.value==1;
    rad.addEventListener('change', (e)=>{
  tmpThis.guiWindows.settingsGui.customObj.checked=true;
  tmpThis.pxlQuality.setGraphicsSettings( {bloom:val} );
  tmpThis.pxlQuality.setQualityCookie(3);
    });
  }
  
  radioList=["settings_tankTurning","settings_strafing"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val= rad.value==1;
    rad.addEventListener('change', (e)=>{
  tmpThis.pxlQuality.setGraphicsSettings( {leftRight:val}, null );
  //tmpThis.pxlQuality.settings.leftRight=val;
  //tmpThis.pxlCookie.setCookie("leftRight", val);
    });
  }
  
  radioList=["settings_dragLooking","settings_pointLooking"];
  rLength=radioList.length;
  for(let x=0; x<rLength; ++x){
    let r=radioList[x];
    let rad=document.getElementById( r );
    this.setRadioStyle(rad, x, rLength);
    
    let val= rad.value==1;
    rad.addEventListener('change', (e)=>{
  tmpThis.pxlQuality.setGraphicsSettings( {mouse:val}, null );
  //tmpThis.pxlQuality.settings.mouse=val;
  //tmpThis.pxlCookie.setCookie("mouse", val);
    });
  }
  

  this.setRadioValues();
  
  /*setTimeout( ()=>{
    this.settingsGuiAdvObjSizing(false);
  }, 50);*/
  
  }
  
  setRadioStyle(rad,cur,aLen){
    let addStyle="settings_radio_label_mid";
    if(cur==0){
  addStyle="settings_radio_label_start";
    }else if(cur==aLen-1){
  addStyle="settings_radio_label_end";
    }
    rad.parentNode.children[1].classList.add( addStyle );
  }
  setRadioValues(){
  let qualitySettings=this.pxlQuality.settings;
  
  let keys=Object.keys(qualitySettings);
  keys.forEach( (k)=>{
    let radioBlock=document.getElementById( "settingsRadioBlock_"+k );
    if(radioBlock){
  let val= k=="resolution" ? qualitySettings[k]*4-1 : ~~qualitySettings[k];
  radioBlock.children[val].children[0].checked=true; // Assuming [input, label]
    }
  });
  }
  
  
  settingsGuiAdvObjSizing(active=true){
    let advObj=this.guiWindows.settingsGui.advObj;
    let oHeight=advObj.offsetHeight;
    advObj.style.maxHeight=(active ? oHeight : 0)+"px";
    advObj.setAttribute("maxHeight", oHeight);
  }
  
  settingsGuiToggle(active=null, bgVis=true){
  if( !this.guiWindows.settingsGui ){
    this.settingsGuiBuild();
  }
  
  active= active==null ? !this.guiWindows.settingsGui.active : active;
    
    if(active && this.guiWindows.settingsGui){
      this.guiWindows.settingsGui.usernameReturn.innerText="";
    }
    
  this.guiWindows.settingsGui.active=active;
  this.promptFader( this.guiWindows.settingsGui.gui, active );
  this.toggleGuiWindowContainer( null, active );
  if(this.hudBlock.active){ this.toggleHudBlock( active ); }
  this.toggleHudBlock(active, false);
    
    this.togglePxlNavDataDisplay(active);
    
    if(this.introHelpActive && !active){
      this.introHelpActive=false;
      this.pxlEnv.postHelpIntro();
    }
    
  }

  togglePxlNavDataDisplay( active=null ){
    if( active==null ){
      if( this.guiWindows.settingsGui ){
      active = this.guiWindows.settingsGui.active;
      }else{
      active = false;
      }
    }
    
    this.pxlNavData.active=active;
    
    let toHeight= this.pxlNavData.height || 200;
    this.pxlNavData.gui.style.maxHeight= active ? toHeight+"px" : "0px" ;
    if( !active ){
      this.pxlNavData.height=this.pxlNavData.gui.offsetHeight;
    }
  }


  renderRadius(val){
  this.pxlEnv.mapGlowPass.strength = Number( val );
  this.pxlEnv.roomBloomPass.strength = Number( val );
  }
  renderThreshold(val){
  this.pxlEnv.mapGlowPass.threshold = Number( val );
  this.pxlEnv.roomBloomPass.threshold = Number( val );
  }
  renderGlowRadius(val){
  this.pxlEnv.mapGlowPass.radius = Number( val );
  this.pxlEnv.roomBloomPass.radius = Number( val );
  }
  renderResolution(val){
  this.pxlQuality.screenResPerc=val*.75+.25;
  this.pxlDevice.resizeRenderResolution();
  }

/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////


  inviteUserBuild(){
  this.guiWindows.inviteUserGui={};
  this.guiWindows.inviteUserGui.gui=null;
  this.guiWindows.inviteUserGui.active=false;
  
  let inviteUserGuiDiv=document.createElement( "div" );
  inviteUserGuiDiv.id="gui_inviteUserWindow";
  inviteUserGuiDiv.classList.add("gui_inviteUserParentStyle");
  this.prepPromptFader( inviteUserGuiDiv );
  document.body.appendChild( inviteUserGuiDiv );
  
    let urlDisplay=window.location+"";
    console.log(urlDisplay);
    urlDisplay=urlDisplay.replace(/^https?:\/\//,"");
    console.log(urlDisplay);
  let html="";
  html+=`
      <div class="gui_inviteUserBody">
        <div class="iu_urlStyle">${urlDisplay}</div>
        <div id="iu_copy" class="iu_copyStyle">Copy</div>
      </div>
  `;
  inviteUserGuiDiv.innerHTML=html;
        
    let utils=this.pxlUtils;
    let iuCopy=document.getElementById("iu_copy");
    iuCopy.addEventListener("click", ()=>{
      let status=utils.copyRoomUrl();
      if(status){
        iuCopy.innerText="Copied";
      }else{
        iuCopy.innerText="Error";
      }
      if(iuCopy.timeout){
        clearTimeout( iuCopy.timeout ); 
      }
      iuCopy.timeout=setTimeout( ()=>{
        iuCopy.innerText="Copy";
        clearTimeout( iuCopy.timeout ); 
      }, 2000);
    });
  
  // -- -- -- -- -- -- -- -- -- -- //
  
  this.guiWindows.inviteUserGui.gui=inviteUserGuiDiv;  
  }
  inviteUserPosition(){
    if( this.guiWindows.inviteUserGui && this.guiWindows.inviteUserGui.active ){
      let iu=document.getElementById("ft3Button");
      let iuBB=iu.getBoundingClientRect();
      this.guiWindows.inviteUserGui.gui.style.display="grid";
      this.guiWindows.inviteUserGui.gui.style.top=iuBB.y;
      this.guiWindows.inviteUserGui.gui.style.right=this.pxlDevice.sW - iuBB.x + 5;
      this.guiWindows.inviteUserGui.gui.style.minHeight=iuBB.height;
    }
  }
  
  toggleInviteUser(active=null){
  if( !this.guiWindows.inviteUserGui ){
    this.inviteUserBuild();
  }

  active= active==null ? !this.guiWindows.inviteUserGui.active : active;
  this.guiWindows.inviteUserGui.active=active;
  this.promptFader( this.guiWindows.inviteUserGui.gui, active );
    
    this.inviteUserPosition();
  }
      
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////




  buildMobileWelcome(){
  this.guiWindows.mobileGui={};
  this.guiWindows.mobileGui.gui=null;
  this.guiWindows.mobileGui.active=false;
  
  let mobileWelcomeGuiDiv=document.createElement( "div" );
  mobileWelcomeGuiDiv.id="gui_mobileWelcomeGuiWindow";
  mobileWelcomeGuiDiv.classList.add("gui_helpGuiParentStyle");
  this.prepPromptFader( mobileWelcomeGuiDiv );
  this.guiWindowBG.appendChild( mobileWelcomeGuiDiv );
  
  let html="";
  html+=`
    <div id="gui_helpContent" class="gui_contentStyle" style="min-height:45%;">
  <div class="gui_mobileBody">
    welcome to
          <br>${this.projectTitle}
  </div>
  <div id="guiHelpFooter" class="gui_footer" style="margin-bottom: 4vh;">
    <div class="guiButton" style="font-weight: 700; font-size: 5vw;" id="guiMobileWelcomeButton">enter</div>
  </div>
  <div class="gui_spacer"></div>
    </div>
  `;
  mobileWelcomeGuiDiv.innerHTML=html;
    
  
  // Close Button
  let tmpThis=this;
  let guiClose=document.getElementById("guiMobileWelcomeButton");
  guiClose.onclick=(e)=>{ 
      tmpThis.toggleMobileWelcome( false );
      tmpThis.pxlEnv.postHelpIntro();
    };
    
  // -- -- -- -- -- -- -- -- -- -- //
  // Store gui window as object
  this.guiWindows.mobileGui.gui=mobileWelcomeGuiDiv;
  
  }


  toggleMobileWelcome( active=null ){
  if( !this.guiWindows.mobileGui ){
    this.buildMobileWelcome();
  }
  
  active= active==null ? !this.guiWindows.mobileGui.active : active;
    
  this.guiWindows.mobileGui.active=active;
  this.promptFader( this.guiWindows.mobileGui.gui, active );
  this.toggleGuiWindowContainer( null, active );
  if(this.hudBlock.active){ this.toggleHudBlock( active ); }
  }



/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////




  // TODO : CTA should request the desired dictionary key
  ctaBuildPopup(response=''){
  if( this.ctaContentLoading ){
    return;
  }
  if( !this.googleDocHTML ){
    this.ctaContentLoading=true;
    this.pxlFile.getURLContent( this.ctaLocalDocURL['blmSupport'] ).then( (r)=>{
  this.ctaContentLoading=false;
  this.googleDocHTML=r;
  this.ctaDisplayPopup();
    });
  }else{
    this.ctaDisplayPopup();
  }
  }
  
  // TODO : CTA Display should request the desired dictionary key's iframe data
  ctaDisplayPopup(){
  if(this.actionPopUp){
    this.actionPopUp.parentNode.removeChild(this.actionPopUp);
  }
  //let rxExp= /(?<=<body>)(.*?)(?=<\/body>)$/gm;
  
  let bodyOnly=this.googleDocHTML;
  
  this.actionPopUp=document.createElement("div");
  this.actionPopUp.setAttribute("id","ctaPopup");
  this.actionPopUp.classList.add("parentGoogleLinkDoc");
  this.actionPopUp.classList.add("fader");
  this.actionPopUp.classList.add("visOff");
  let apuInner=document.createElement("div");
  apuInner.setAttribute("id","ctaPopupInner");
  //apuInner.classList.add("innerGoogleLinkDoc");
  this.actionPopUp.appendChild( apuInner );
  document.body.appendChild(this.actionPopUp);
  
  let iframe=null;
  if(bodyOnly == '' || !bodyOnly){
    iframe=document.createElement("iframe");
    iframe.src=""
    iframe.classList.add("iframeGoogleLinkDoc");
    apuInner.appendChild(iframe);
    //iframe.allow='';
    iframe.referrerpolicy="unsafe-url";
  }else{
    apuInner.innerHTML=bodyOnly;
    apuInner.classList.add("iframeGoogleLinkDoc");
  }
  let self=this;
  this.actionPopUp.onclick=function(e){
    let eventObject=e.srcElement.getAttribute("id");
    if(eventObject == "ctaPopup" ){
  self.promptFader(this, false, null, true);
  self.actionPopUp=null;
    }
  };
  
  if(iframe){
    iframe.onload=function(){
  setTimeout( ()=>{
    this.promptFader(this.actionPopUp, true, null, false);
    }, 100);
    }
  }else{
    setTimeout( ()=>{
    this.promptFader(this.actionPopUp, true, null, false);
  }, 100);
  }
  }



/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////

  getUserControls( curId ){
    if( !curId ) return [null];
    let curAvatar=curId;
    let curGui=curAvatar.userStatusGui;
    let curAudio=curAvatar.audio;
    let curAudioMuted=curAvatar.audioMuted;
    let curAudioGui=curAvatar.userSoundGui;
    let curName=curAvatar.displayName;
    let curNameGui=curAvatar.userNameGui;
    let curVerse=curAvatar.verse;
    return {curAvatar, curName, curAudio, curAudioMuted, curGui, curNameGui, curAudioGui, curVerse };
  }
  
  async setUserControlPosition(){
    if( this.userControlBlock ){
      let curTop=0;
      let curLeft=0;
      if( this.hudTopBar ){
        let htbr=this.hudTopBar.getBoundingClientRect();
        curTop=htbr.y+htbr.height;
      }
      
      /*if( this.guiWindows.chatBoxGui ){
        if( this.guiWindows.chatBoxGui.active ){
          let htbr=this.guiWindows.chatBoxGui.gui.getBoundingClientRect();
          curLeft=htbr.width;
          curTop=0;
        }
      }*/
      this.userControlBlock.gui.style.top= curTop+"px";
      //this.userControlBlock.gui.style.left= curLeft+"px";
    }
  }

  buildUserSpeaker(){
    let ret={};
    
    let retSpeaker=this.userControlBlock.speakerIcon.svg.cloneNode( true );
    retSpeaker.classList.add( "userControlSpeakerStyle" );
    retSpeaker.classList.add( "userControlSpeakerButtonStyle" );
    ret.gui=retSpeaker;
    ret.remoteMuted=false;
    ret.volPrev=0;
    
    let children=retSpeaker.children;
    for(let x=0; x<children.length; ++x){
      let cd=children[x];
      let curId=cd.getAttribute("id");
      ret[curId]=cd;
      if( curId == "mute"){
        cd.classList.add( "userControlVisStyle" );
      }else if( curId == "button"){
        cd.classList.add( "userControlSpeakerButtonStyle" );
      }
    }
    
    let volChildren=ret.volLines.children;
    for(let x=0; x<volChildren.length; ++x){
      let cd=volChildren[x];
      let curId=cd.getAttribute("id");
      ret[curId]=cd;
    }
    
    volChildren=ret.remoteMutedLines.children;
    for(let x=0; x<volChildren.length; ++x){
      let cd=volChildren[x];
      let curId=cd.getAttribute("id");
      ret[curId]=cd;
    }
    return ret;
  }

  // Remote User Controls
  async addUserControls( curId, muted=false ){
    let {curAvatar, curName, curGui} = this.getUserControls( curId );
    
    let userControlsBlock=document.createElement( "div" );
    userControlsBlock.classList.add( "userControlProximityOff" );
    userControlsBlock.classList.add( "userControlParentStyle" );
    userControlsBlock.classList.add( "userControlSpeakerButtonStyle" );
    if( this.mobile ){
      userControlsBlock.style.display="none";
    }
    //userControls.setAttribute( "jid", curId ); // This will become stale very quickly, want to have it tho...
    let tmpThis=this;
    userControlsBlock.onclick=()=>{ tmpThis.setUserControlMute(curId); };
    curAvatar.userStatusGui=userControlsBlock;
    this.userControlBlock.gui.appendChild( userControlsBlock );
    
    
    let userControlsParent=document.createElement( "div" );
    userControlsParent.classList.add( "userControlInnerParentStyle" );
    userControlsBlock.appendChild( userControlsParent );
    
    
    let userSpeakerParent=document.createElement( "div" );
    userSpeakerParent.classList.add( "userControlSpeakerParentStyle" );
    let userSpeaker=this.buildUserSpeaker();
    userSpeakerParent.appendChild( userSpeaker.gui );
    curAvatar.userSoundGui=userSpeaker;
    userControlsParent.appendChild( userSpeakerParent );
    
    let userNameParent=document.createElement( "div" );
    userNameParent.classList.add( "userControlNameStyle" );
    userNameParent.innerText=curName;
    curAvatar.userNameGui=userNameParent;
    userControlsParent.appendChild( userNameParent );
    
    this.setUserControlColor( curId );
  }
  
  async setUserControlVolume( curId, audioLevel, smoothing=true ){
    if( this.userControlBlock.activeList.includes( curId ) ){
      let {curAudioGui, curAudioMuted} = this.getUserControls( curId );
      if( curAudioGui && ( !curAudioMuted || audioLevel==0 ) ){
        if( curAudioGui.remoteMuted ){
          audioLevel=0;
        }else if( smoothing && audioLevel>0){
          audioLevel*=2;
          audioLevel=Math.min(1, Math.max(audioLevel, (audioLevel+curAudioGui.volPrev)*.5));
        }
        curAudioGui.volPrev=audioLevel;
        curAudioGui.volLines.style.opacity = audioLevel;
        curAudioGui.volLines.style.filter = "alpha(opacity="+(audioLevel*100)+")";
      }
    }
  }
  
  async setUserControlMute( curId ){
    let {curAvatar, curAudio, curAudioMuted, curAudioGui} = this.getUserControls( curId );
    if( curAudio ){
      let active=!curAudioMuted; // Muted Value Toggle
      if( active ){
        this.setUserControlVolume( curId, 0, false );
        curAudioGui.mute.classList.add( "userControlVisible" ); // Mute Line Visible
        curAudio.volume=0;
        curAudio.muted=true;
      }else{
        curAudioGui.mute.classList.remove( "userControlVisible" ); // Mute Line Hidden
        curAudio.muted=false;
        curAudio.volume=1;
      }
      
      curAvatar.audioMuted=active;
    }
  }
  async setUserControlRemoteMute( curId, track=null, inVerse=true, color="#ffffff" ){
    let {curAudio, curAudioGui} = this.getUserControls( curId );
    if( curAudioGui ){
      if( track==null ){
        if( curAudio ){
          track=curAudio.muted;
        }else{
          track=false;
        }
      }
      let active = typeof track == "object" ? track.muted : track;
      curAudioGui.remoteMuted=active;
      curAudioGui.base.setAttribute("fill", (active ? "#ff0000" : color ) );
      curAudioGui.remoteMutedLines.style.display=(active || !inVerse ? "inline-block" : "none" );
      curAudioGui.remoteS1.setAttribute("stroke", (inVerse ? "#ff0000" : color ) );
      curAudioGui.remoteS2.setAttribute("stroke", (inVerse ? "#ff0000" : color ) );
      this.setUserControlVolume( curId, 0, false );
    }
  }
  
  async setUserControlVis( curId, active=null, deleteController=false ){
    let {curAvatar, curGui,curAudio} = this.getUserControls( curId );
    
    /*if( !curAvatar.avatarGroup.visible ){
      return;
    }*/
    
    
    if(curGui){
      let proxVisOff="userControlProximityOff";
      if( active == null ){
        active=!curGui.classList.contains( proxVisOff );
      }
      if( active ){
        curGui.classList.remove( proxVisOff );
        curGui.style.maxWidth=curGui.children[0].getBoundingClientRect().width+"px";
        //if( curAudio ){  curAudio.muted=false; }
        
        this.setUserControlVolume( curId, 0 );
        if( !this.userControlBlock.activeList.includes( curId ) ){
          this.userControlBlock.activeList.push( curId );
        }
      }else{
        curGui.classList.add( proxVisOff );
        curGui.style.maxWidth="30px";

        //if( curAudio ){  curAudio.muted=false; }
        
        let curIdEl= this.userControlBlock.activeList.indexOf( curId );
        if( curIdEl>-1 ){
          this.userControlBlock.activeList.splice( curIdEl, 1 );
        }
      }
      this.userControlBlock.gui.style.padding= this.userControlBlock.activeList.length == 0 ? "0px" : "5px" ;
    }
  }
  
  async deleteUserControlVis( curId ){
    let {curAvatar, curGui} = this.getUserControls( curId );
    
    if(curGui){
      let proxVisOff="userControlProximityOff";
      curGui.classList.add( proxVisOff );
      curGui.style.maxWidth="30px";

      let curIdEl= this.userControlBlock.activeList.indexOf( curId );
      if( curIdEl>-1 ){
        this.userControlBlock.activeList.splice( curIdEl, 1 );
      }
      this.userControlBlock.gui.style.padding= this.userControlBlock.activeList.length == 0 ? "0px" : "5px" ;

      // Clean up User Speaker Gui Element
      if( curGui ){
        curGui.parentNode.removeChild( curGui );
      }
    }
  }
  
  userControlsSwap( idFrom, idTo ){
    //console.log( "is this needed?", idFrom, idTo );
    let curIdEl= this.userControlBlock.activeList.indexOf( idFrom );
    if( curIdEl>-1 ){
      this.userControlBlock.activeList.splice( curIdEl, 1 );
      
      if( !this.userControlBlock.activeList.includes( idTo ) ){
        this.userControlBlock.activeList.push( idTo );
      }
    }
  }
  
  setUserControlColor( curId, color=null ){
    let {curAvatar, curGui, curAudioGui, curVerse} = this.getUserControls( curId );
    let verseCompare=true;
    if( color == null ){
      if(verseCompare){
        color="#ffffff";
      }else{
        let colorRGB=this.pxlUtils.stringToRgb( curVerse, .3 );
        color=this.pxlUtils.rgbToHex( ...colorRGB );
      }
    }
    curGui.style.color=color;
    curAudioGui.base.setAttribute("fill", color );
    curAudioGui.mute.setAttribute("stroke", color );
    curAudioGui.mid.setAttribute("fill", color );
    curAudioGui.max.setAttribute("fill", color );
    
    curAudioGui.volPrev=0;
    curAudioGui.volLines.style.opacity = 0;
    curAudioGui.volLines.style.filter = "alpha(opacity=0)";
    
    let tmpThis=this;
    curAvatar.userStatusGui.onclick=()=>{ tmpThis.setUserControlMute(curId); };
    
    this.setUserControlRemoteMute( curId, null, verseCompare, color );
  }
  
  toggleUserControls( curAvatar ){
    if( !curAvatar ) return null;
  }
  
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////
  
}
