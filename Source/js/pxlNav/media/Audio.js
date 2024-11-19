
const SoundLibrary = [
	"./sounds/bits.ogg",
	"./sounds/bonus-2.ogg",
	"./sounds/bonus-3.ogg",
	"./sounds/BushesBakedBeans.mp3",
	"./sounds/Cute-Chime-1.mp3",
	"./sounds/funny-blunder.ogg",
	"./sounds/magic-coins.ogg",
	"./sounds/new-message-4.ogg",
	"./sounds/new-message-5.ogg",
	"./sounds/positive-game-sound-3.ogg",
	"./sounds/positive-game-sound-4.ogg",
	"./sounds/positive-win-game-sound-4.ogg",
	"./sounds/the-award-2.ogg"
];

// Audio
import { Vector3, Vector4 } from "../core/Types.js";

export class Audio{
  constructor(){
    this.pxlTimer=null;
    this.pxlVideo=null;
    this.pxlDevice=null;
    this.pxlEnv=null;
    this.pxlGuiDraws=null;
    this.pxlSocket=null;
        
    this.active=false;
    this.audioTimer=new Vector3(0,0,0);
    this.audioEq=new Vector4(0,0,0,0);
    this.audioWorker=null;
    this.audioProcessor=null;
        
    this.djUrlSource="//"; // URL to the audio source
    this.djMuted=false;
    //this.djVolumeMute=null;
    this.djAudioVolume=0;
    this.djAudioVolumeMax=.65; // Initial Max value
    this.djAudioVolumeMin=.25; // Initial Min/Starting value
    this.djAudioVolumeScalar=.25; // Initial Min/Starting value
    
    this.djAudioObj=null;
    this.djTimecodeObj=null;
    this.djVolumeParentObj=null;
    this.djVolumeObj=null;
        
    this.roomAudioStopped=true;
    
    this.videoStreamObjects=[];
        
    this.colliderVolActive=false;
    
    this.isVideoObject=false;
    this.activeObject=null;
    
    
    this.fadeActive=false;
    this.fadeAdjustRate=.02;
    this.fadeDir=0;
    this.fadePerc=0;
    
    this.audioContext = null;
  }
  
  setDependencies( pxlNav ){
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlVideo=pxlNav.pxlVideo;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlEnv=pxlNav.pxlEnv;
    this.pxlGuiDraws=pxlNav.pxlGuiDraws;
    this.pxlSocket=pxlNav.pxlSocket;
  }

  init(){
    this.active=true;
    }
    postBoot(){
        if( this.djAudioObj ){
            if(  this.pxlEnv.pxlAutoCam.enabled ){
                this.djAudioVolumeMax=1;
                this.djAudioVolumeMin=0;
            }else if( this.pxlEnv.mobile ){
                let pa= this;
                let avm=this.djAudioVolumeMax;
                let enter=document.getElementById("guiMobileWelcomeButton");
                function audioClickMonitor(e){
                    setTimeout( ()=>{
                        pa.djAudioVolume=0;
                        pa.djAudioVolumeMax=avm;
                        pa.djAudioVolumeMin=0;
                        pa.djAudioObj.byScript=true;
                        pa.djAudioObj.volume=0;
                        audioObj.play().then(()=>{
                            pa.djPlayerMuteToggle(false);
                            pa.setFadeActive( .5 );
                        });
                        enter.removeEventListener('click', audioClickMonitor);
                        enter.removeEventListener('touchstart', audioClickMonitor);
                    },500);
                }
                enter.addEventListener("click", audioClickMonitor);
                enter.addEventListener("touchstart", audioClickMonitor);
            }
            
            this.djAudioVolume= this.pxlEnv.enabled ? 0 : this.djAudioVolumeMin;
            this.djAudioObj.volume= this.pxlEnv.enabled ? 0 : this.djAudioVolumeMin;
            this.djPlayerMuteToggle(false);
            this.djPlayerAdjustVolume({});
            this.djPlayerSetSliderGui();
            
            let audioObj=this.djAudioObj;
            audioObj.setAttribute("autoplay", true);
            
            let tmpThis=this;
            this.djAudioObj.addEventListener("volumechange", (e)=>{
                tmpThis.djPlayerSetSliderGui();
            }, true);
        }
    }
    
  start(){}
  
  step(){
    if(this.djAudioObj){
      if(this.djAudioObj.paused){
        this.djAudioObj.play().catch((err)=>{});
                this.djAudioObj.muted=this.djMuted || !this.roomAudioStopped;
      }
    }
        // Set music volume on the DJ Audio Object
        this.fadeAudioEvent( );
  }
    isPaused(){
        let status = true;
    if(this.djAudioObj){
      status = this.djAudioObj.paused;
    }
        return status;
    }
    
  pausePlayback(){
    this.active=this.pxlTimer.active;
        
        if( this.active ){
            this.play();
        }else{
            this.stop();
        }
  }
  
    initPlay(){
        if( this.pxlVideo.canUnmute( 'dj' ) && !this.isPaused() ){
            this.djPlayerMuteToggle(false);
            this.setFadeActive( 1 );
            
            if( this.pxlDevice.mobile ){
                this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon, !this.djMuted, true );
            }
        }
    }
    
  play(){
    this.active=true;
        
        if( this.isVideoObject ){
            this.pxlVideo.setVolume( "dj", this.djAudioVolume );
            this.pxlVideo.setMuted( "dj", this.djMuted );
        }else{
            //loadStreamPromise();
            
            this.djAudioObj.byScript=true;
            let djDevice=this.djAudioObj;
            let djSource=djDevice.children[0];
            djSource.setAttribute("src",this.djUrlSource);
            setTimeout( ()=>{
                djDevice.load();
                setTimeout( ()=>{
                    djDevice.volume=this.djAudioVolume;
                    //djDevice.play();
                    djDevice.muted=this.djMuted || !this.roomAudioStopped;
                    if( djDevice.paused ){
                        djDevice.play();
                    }
                },20);
            },20);
        }
  }
  
  stop(){
    this.active=false;
        
        if( this.isVideoObject ){
            this.pxlVideo.setMuted( "dj", true );
        }else{
            let djDevice=this.djAudioObj;
            let djSource=djDevice.children[0];
            djSource.setAttribute("src","");
            djDevice.pause();
            setTimeout( ()=>{
                djDevice.load();
            },20);
        }
  }
    
  
    djBuildPlayer(){
        
    this.djAudioObj=document.getElementById("djStream");
    this.djVolumeParentObj=document.getElementById("djPlayerVolumeParent");
    this.djVolumeObj=document.getElementById("djPlayerVolume");
    
    this.djAudioObj.byScript=false;
    this.djAudioObj.volume=0;
    this.djVolumeObj.style.width="0%";
        
    let tmpThis=this;
        this.pxlDevice.objectPercList.push("djPlayerVolume");
        this.pxlDevice.objectPercList.push("djPlayerVolumeParent");
        this.pxlDevice.objectPercFuncList["djPlayerVolumeParent"]=(e)=>{tmpThis.djPlayerAdjustVolume(e);};
        
    
    this.djVolumeParentObj.down=false;
        // I think iPhone emits mouse down events, I'll need to test this
        this.djVolumeParentObj.addEventListener("mousedown", (e)=>{tmpThis.djVolumeParentObj.down=true;tmpThis.djPlayerAdjustVolume(e);});
        this.djVolumeParentObj.addEventListener("mousemove", (e)=>{tmpThis.djPlayerAdjustVolume(e);});
        this.djVolumeParentObj.addEventListener("mouseup", (e)=>{tmpThis.djVolumeParentObj.down=false;});
            
        if( this.pxlDevice.mobile ){
            this.djVolumeParentObj.style.width= "30vw";
            this.djVolumeParentObj.addEventListener("touchstart", (e)=>{tmpThis.djVolumeParentObj.down=true;}, {passive : true});
            this.djVolumeParentObj.addEventListener("touchmove", (e)=>{tmpThis.djPlayerAdjustVolume(e);}, {passive : true});
            this.djVolumeParentObj.addEventListener("touchend", (e)=>{tmpThis.djVolumeParentObj.down=false;}, {passive : true});
        }
        this.djAudioObj.muted=true;

        this.prepAudioProcessor();
    }
    
    prepAudioProcessor(){
        /*
        
        // If its not working, likely IE or Sufari
        //   we told em to use chrome, but chances are iPhone users will still use Sufari
        if( this.audioContext.audioWorklet && AudioWorkletNode ){
            await this.audioContext.audioWorklet.addModule('white-noise-processor.js')
            const whiteNoiseNode = new AudioWorkletNode( this.audioContext, 'white-noise-processor' )
            whiteNoiseNode.connect( this.audioContext.destination )
            
            
  
            var audioInputCtx = new AudioContext();
            var audioDataBufferSeconds=1;
            var audioDataCtx = new OfflineAudioContext(1,audioDataBufferSeconds*44100,44100);
            var analyser;
            var filter = this.audioContext.createBiquadFilter();
            filter.type = 5;
            filter.frequency.value = 440;
            filter.Q.value = 5;
            filter.gain.value = 0;


            let audioDeviceList={};
            let audioForm=null; 
            let mediaStreamSource=null;

            function connectAudioDeviceData(e){
                if(this.audioContext.state == "suspended"){
                    this.audioContext.resume();
                }
                analyser = this.audioContext.createAnalyser();
                analyser.smoothingTimeConstant = 0;
                analyser.fftSize = 512;

            //.captureStream().createWorkerProcessor();

                function(stream) {
                    window.stream=stream;
                    
                    mediaStreamSource = this.audioContext.createMediaStreamSource(window.stream);
                    
                    var scriptNode = this.audioContext.createScriptProcessor(2048,1,1);
                    var bufferSource = this.audioContext.createBufferSource();
                    
                    scriptNode.connect( this.audioContext.destination );
                    //bufferSource.connect( this.audioContext.destination );
                    
                    mediaStreamSource.connect(filter);
                    filter.connect(analyser);
                    
                }
            }  
                
        }
        */
    }
    
    stepAudioProcessor(){
    }
    recieveAudioProcessor( data ){
        //console.log( data );
    }
        
    // ## Intended for Avatar Audio manipulation
    //      Unused currently
  buildRemoteAudioMixer(pID, domObj){
    // Gen audio mixes for bineural
    // ## Cut this down should FPS be hit
        if( false && domObj instanceof HTMLMediaElement ){
            // for cross browser
            if(this.audioCtx==null){
              const AudioContext = window.AudioContext || window.webkitAudioContext;
              this.audioCtx = new AudioContext();
            }
            // volume
            var gainNode = this.audioCtx.createGain();

            // panning
            //const panner = new StereoPannerNode(this.audioCtx, {pan: 0});
            var panner = this.audioCtx.createStereoPanner();
            
            var curTrack = this.audioCtx.createMediaElementSource(domObj);
            
            // connect to ouput
            curTrack.connect(panner);
            panner.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);
            
            let ret={};
            ret.dest=this.audioCtx.destination;
            ret.ctx=curTrack;
            ret.gainer=gainNode;
            ret.panner=panner;
            //this.jmaActiveBinaural[pID]=ret;    
    }
        return false;
  }
        
    loadStreamPromise(){
        let djDevice=this.djAudioObj;
    return new Promise( (resolve, reject)=>{
            this.djAudioObj.byScript=true;
            let djSource=djDevice.children[0];
            djSource.setAttribute("src",this.djUrlSource);
            djDevice.load();
            //djDevice.play();
            djDevice.muted=this.djMuted || !this.roomAudioStopped ;
    }).then( ()=>{
        }).catch( (err)=>{
            console.log("error source");
        });
    }
    
    djPlayerSetSliderGui(){
        if(this.djAudioObj.byScript || !this.pxlEnv.postIntro || this.pxlEnv.pxlAutoCam.enabled ){
            this.djAudioObj.byScript=false;
        }else{
            this.fadeActive=false;
            this.djAudioVolumeMax=this.djAudioVolume;//tmpThis.djAudioObj.volume;
            this.djAudioVolumeMin=this.djAudioVolume*this.djAudioVolumeScalar;//tmpThis.djAudioObj.volume*.1;
        }
        this.djVolumeObj.style.width=(this.djAudioVolume*100*(~~!this.djMuted))+"%";
    }
    
    
  djPlayerAdjustVolume(e){
    if(this.djVolumeParentObj.down || ( this.djVolumeParentObj.down && e.touches ) ){
      let pw= this.djVolumeParentObj.offsetWidth;
      let offset=0;
      if( e.touches ){
        offset = this.pxlDevice.objectPerc.percX;
      }else{
        offset = e.offsetX/pw;
      }

      let perc=Math.max(0, Math.min(1, offset));
      this.djAudioVolume=perc;
      this.djAudioVolumeMax=perc;
      this.djAudioVolumeMin=perc*.1;
      perc*=perc;
      if( this.djAudioObj ){
        this.djAudioObj.volume=perc; 
      }

      if( e.touches){
        this.djPlayerSetSliderGui();
      }
      //this.colliderVolAdjust=this.djAudioVolume;
    }
    if( this.pxlVideo && this.pxlEnv.posted  ){
      this.pxlVideo.setVolume( "dj", this.djAudioVolume );
    }
  }
    
  djPlayerMuteToggle(val=null){
    this.djMuted= val==null ? !this.djMuted : val;

    if( val!=null ){
      this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.musicIcon, !val, true );
    }

    if( this.djAudioObj ){
      this.djAudioObj.muted=this.djMuted;
      this.djAudioObj.byScript=true;
      this.djAudioObj.volume=this.djAudioObj.volume;
    }
    if( this.pxlVideo && this.pxlEnv.posted ){
      this.pxlVideo.setMuted( "dj", this.djMuted );
    }
  }
  
  setFadeActive( dir=1 ){
    if( this.fadeDir == dir ){
      return;
    }
    this.fadeDir=dir;
    this.fadeActive=true;
  }
  
  fadeAudioEvent( ){
    if(this.djVolumeParentObj && !this.djVolumeParentObj.down && this.fadeActive && this.pxlEnv.postIntro){
      this.fadePerc+=this.fadeAdjustRate*this.fadeDir;

      if( this.fadePerc<0 || this.fadePerc>1 ){
        this.fadePerc= this.fadeDir == 1 ? 1 : 0;
        this.fadeActive=false;
        return;
      }
      
      let curVolume= (this.djAudioVolumeMax-this.djAudioVolumeMin) * this.fadePerc + this.djAudioVolumeMin;

      this.djAudioVolume=curVolume;
      curVolume*=curVolume;
      
      if( this.djAudioObj ){
        this.djAudioObj.byScript=true;
        this.djAudioObj.volume=curVolume;
      }
      
      this.pxlVideo.setVolume( "dj", this.djAudioVolume );
    }
  }
}