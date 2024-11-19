// Video Streaming Module

export class Video{
  constructor( assetRoot=null, pxlUtils=null, pxlAudio=null, pxlFile=null, pxlGuiDraws=null ){
    this.pxlUtils=pxlUtils;
    this.pxlAudio=pxlAudio;
    this.pxlFile=pxlFile;
    this.pxlGuiDraws=pxlGuiDraws;
    this.pxlEnv=null;
    
    this.posted=false;
    
    this.djStreamUrl="";//  '.m3u8' url;
    this.performerStreamUrl="";
        
    this.screenVideoBlock=null;
    this.screenVideos={};
        
    this.videoStreams={};
    this.videoStreamFailCount=0;
    this.videoStreamFailMax=5;
    this.videoAudioEvent={ // If the user should be checking for video feeds or just display the stand-in texture
        dj:false,
        performer:false,
    };
    this.checkForDjStream=false;
    this.checkForPerformerStream=false;
    this.videoStills={
        dj:{ texture:null, url: assetRoot+"SoftNoise_512.jpg"},
        performer:{ texture:null, url: assetRoot+"SoftNoise_512.jpg"},
    };
  }
    
    init(){
        this.buildVideoBlock();
        
        this.buildPromoVideos();
    }
    buildVideoBlock(){
    if(this.screenVideoBlock==null){
      let svbObj=document.createElement( "div" );
      svbObj.classList.add( "videoScreenBlockStyle" );
      document.body.appendChild( svbObj );
      this.screenVideoBlock=svbObj;
    }
    }
    
    buildPromoVideos(){
    // ## Split this out to an external JSON file.
    let vidList=[];
    vidList.forEach( (v)=>{
      let curName=v.name;
      let curType=v.type;
      let curIntensity=v.intensity;
      let curBoost=v.boost;
      let curFile=v.file;
      let curLand=v.landscape;
      let curFilePath= this.pxlFile.vidRoot + curFile;
      
      let curObj=document.createElement("video");
      curObj.id="screenVideo_"+curName+"_"+(curLand ? "port" : "land");
      curObj.src=curFilePath;
      curObj.classList.add("bgMediaAssets");
      curObj.controls=false;
      curObj.muted=true;
      curObj.preload="true";
      curObj.setAttribute("autoplay", "");
      curObj.setAttribute("muted", "");
      curObj.setAttribute("playsinline", "");
      curObj.setAttribute("loop", "");
      this.screenVideoBlock.appendChild( curObj );
      
      // -- -- -- -- -- -- -- -- -- //
      // Build Video Dict
      if( !this.screenVideos[ curName ] ){
        this.screenVideos[ curName ]={};
      }
      this.screenVideos[ curName ][ "name" ]=curName;
      this.screenVideos[ curName ][ "type" ]=curType;
            if( curIntensity ){
                this.screenVideos[ curName ][ "intensity" ]=curIntensity;
            }
            if( curBoost ){
                this.screenVideos[ curName ][ "boost" ]=curBoost;
            }
      let fileList= this.screenVideos[ curName ][ "file" ] || [];
      if( !this.screenVideos[ curName ][ "file" ] ){
        fileList=[ curFilePath, curFilePath ];
      }else{
        fileList[ ~~curLand ]=curFilePath;
      }
      this.screenVideos[ curName ][ "file" ]=fileList;
      
      // -- -- -- -- -- -- -- -- -- //
      // Textures
      let curTexture= this.pxlUtils.getVideoTexture( curObj );
            
      let textureList= this.screenVideos[ curName ][ "texture" ] || [];
      if( !this.screenVideos[ curName ][ "texture" ] ){
        textureList=[ curTexture, curTexture ];
      }else{
        textureList[ ~~curLand ]=curTexture;
      }
      this.screenVideos[ curName ][ "texture" ]=textureList;
      
      // -- -- -- -- -- -- -- -- -- //
      // Video Objects
      let videoObjList=[];
      if( !this.screenVideos[ curName ][ "videoObjs" ] ){
        videoObjList=[ curObj, curObj ];
      }else{
        videoObjList[ ~~curLand ]=curObj;
      }
      this.screenVideos[ curName ][ "videoObjs" ]=videoObjList;
    });
    }
        
    async boot(){
        if( this.videoAudioEvent[ 'dj' ] ){
            this.buildVideoPlayer('dj');
        }else{
            this.videoStills.dj.texture = this.pxlUtils.loadTexture( this.videoStills.dj.url );
        }
        
    }
    
    buildVideoPlayer( streamId ){
        let tmpThis=this;
        let djStreamObj=document.createElement("video");
        djStreamObj.id="antibodyDjStream";
        djStreamObj.classList.add("bgMediaAssets");
        djStreamObj.controls=false;
        djStreamObj.volume=0;
        djStreamObj.muted=true;
        djStreamObj.setAttribute("autoplay", "true");
        djStreamObj.setAttribute("playsinline", "true");
        djStreamObj.addEventListener("volumechange", (e)=>{
            djStreamObj.volume= Math.min( djStreamObj.volume, tmpThis.pxlAudio.djAudioVolume);
        }, true);
    

        this.screenVideoBlock.appendChild( djStreamObj );
        
        this.videoStreams[ streamId ]={};
        this.videoStreams[ streamId ]['mode']=0; // 1 HLS, 2 Default Video MPEG Video Object, 3 Amazon Video Player
        this.videoStreams[ streamId ]['active']=false;
        this.videoStreams[ streamId ]['loading']=false;
        this.videoStreams[ streamId ]['checkResolve']=false;
        this.videoStreams[ streamId ]['prevCheck']=this.pxlUtils.curMS+5;
        this.videoStreams[ streamId ]['delayCheck']=5;
        this.videoStreams[ streamId ]['obj']=djStreamObj;
        
        this.videoStreams[ streamId ]['url']=this.djStreamUrl;
        this.videoStreams[ streamId ]['urlStatus']=false;
        this.videoStreams[ streamId ]['player']=null;
        this.videoStreams[ streamId ]['checkScreens']=false;
        this.videoStreams[ streamId ]['activeLevel']=-1;
        this.videoStreams[ streamId ]['prevFrame']=0;
        this.videoStreams[ streamId ]['prevFrameCount']=0;

        
        this.videoStreams[ streamId ]['canvasObj'] = null;
        this.videoStreams[ streamId ]['videoTexture'] = this.getTexture( streamId );
        
        this.pxlFile.urlExists( this.djStreamUrl ).then( (resp)=>{
            this.videoStreams[ streamId ]['urlStatus']=resp;
            //this.checkForDjStream=!resp;
        });
        
        this.buildVideoStream(  streamId , false );
    }
    
    postBoot( streamId ){
        if( this.videoStreams[ streamId ] && this.videoStreams[ streamId ]['urlStatus'] ){
            this.load( streamId, this.videoStreams[ streamId ]['url'] );
        }
        this.posted=true;
        this.checkForDjStream=this.videoAudioEvent['dj'];
    }
    step(){
        let ret=false;
        
        let streamId="dj";
        if( this.videoAudioEvent[ streamId ] ){
            let curVid=this.videoStreams[ streamId ];
            if( curVid ){
                if( !curVid[ 'active' ] ){
                    this.checkVideoStreamStatus( streamId ); // Async, will pick up on next .step()
                }else{
                    //this.checkVideoError( streamId );
                }
                
                
                if( this.pxlUtils.mobile ){
                    if( curVid['active'] && curVid['videoTexture'] && curVid['checkScreens']){
                        curVid['checkScreens']=false;
                        this.setScreensToStreams( 1, curVid['videoTexture'] );
                    }
                }else{
                    ret=curVid['checkScreens'];
                    curVid['checkScreens']=false;
                }
                
                /*
                if( curVid['canvasObj'] && curVid['player'] ){
                    let player=curVid['player'].children_[0];
                    if( player ){
                        if( player.videoWidth != curVid['canvasObj'].width ){
                            curVid['canvasObj'].width = player.videoWidth;
                            curVid['canvasObj'].height = player.videoHeight;
                        }
                        curVid['canvasCtx'].drawImage(player, 0, 0);
                        curVid['canvasTexture'].needsUpdate = true;
                    }
                }*/
            }
        }else if( this.videoStills[ streamId ].texture && this.pxlUtils.mobile ){
            this.setScreensToStreams( 1, this.videoStills[ streamId ].texture );
        }
        
        return ret;
    }
    setScreensToStreams( active=0, streamId="dj" ){
        let curTexture = streamId;
        if( typeof curTexture == "string" ){
            curTexture = this.getTexture( streamId );
            if( !curTexture ){
                active=0;
                this.videoStreams[ streamId ]['active']=false;
                this.videoStreams[ streamId ]['checkScreens']=true;
            }
        }
        
        this.pxlEnv.camScreenData.screenGeoList.forEach((x,c)=>{
            // Screen material updates
            x.material.uniforms.camExists.value = active;
            x.material.uniforms.videoFeed.value = curTexture;
        });
    }
    
    isActive( streamId ){
        let ret=false;
        if( this.videoStreams.hasOwnProperty( streamId ) ){
            if( this.videoStreams[ streamId ]['active'] && this.videoStreams[ streamId ]['videoTexture'] ){
                ret = true;
            }
        }else{
            ret = this.videoStills[ streamId ].texture!=null;
        }
        return ret;
    }
    
    getTexture( streamId ){
        let retTexture=null;
        if( this.videoAudioEvent[ streamId ] ){
            if( !this.videoStreams[ streamId ]['videoTexture'] ){
                this.videoStreams[ streamId ]['videoTexture'] = this.buildVideoTexture( streamId );
            }
            retTexture = this.videoStreams[ streamId ]['videoTexture'];
        }else if( this.videoStills[ streamId ].texture  ){
            retTexture= this.videoStills[ streamId ].texture;
        }
            
        return retTexture;
    }
    
    buildVideoTexture( streamId ){
        this.disposeVideoTexture( streamId );
        /*if( !this.videoStreams[streamId]['canvasObj'] ){
            const canvas=document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 256;
            ctx.fillStyle = '#F';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            let {texture, material} = this.pxlUtils.getCanvasTexture( canvas );
            
            this.videoStreams[streamId]['canvasObj']=canvas;
            this.videoStreams[streamId]['canvasCtx']=ctx;
            this.videoStreams[streamId]['canvasMtl']=material;
            this.videoStreams[streamId]['canvasTexture']=texture;
            
            this.screenVideoBlock.appendChild( canvas );
            //return texture;
        }else{
            return this.videoStreams[streamId]['videoTexture'];
        }*/
        //return this.videoStreams[streamId]['obj'] && this.videoStreams[streamId]['player'] ? this.pxlUtils.getVideoTexture( this.videoStreams[streamId]['obj'] ) : null;
        return this.videoStreams[streamId]['obj'] && this.videoStreams[streamId]['player'] ? this.pxlUtils.getVideoTexture( this.videoStreams[streamId]['obj'] ) : null;
    }
    disposeVideoTexture( streamId, forceValue=null ){
        if( this.videoStreams[ streamId ]['videoTexture'] ){
            this.videoStreams[ streamId ]['videoTexture'].dispose();
            this.videoStreams[ streamId ]['videoTexture'] = null;
            this.videoStreams[ streamId ]['checkScreens'] = forceValue == null ? true : forceValue ;
        }
    }
    
    resetvideoTexture( streamId ){
        this.setScreensToStreams( 0, streamId );
        this.disposeVideoTexture( streamId, false );
        let curTexture = this.getTexture( streamId );
        // if( this.videoStreams[ streamId ]['mode'] == 1 ){
            // curTexture = this.videoStreams[ streamId ]['player'].currentLevel == -1 ? null : curTexture;
        // }
        
        this.videoStreams[ streamId ]['videoTexture'] = curTexture;
        this.videoStreams[ streamId ]['checkScreens'] = true ;
    }
    resetEnvSettings( streamId ){
        this.resetvideoTexture( streamId );
        this.videoStreams[ streamId ]['checkScreens'] = false;
    }
    
    // Adapted from packed hls.js npm module
    hlsPreflight(){
        let ms=window.MediaSource || window.WebKitMediaSource;
        ms = ms && typeof ms.isTypeSupported == "function" && ms.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        
        let sb = window.SourceBuffer || window.WebKitSourceBuffer;
        sb = !sb || sb.prototype && typeof sb.prototype.appendBuffer == "function" && typeof sb.prototype.remove == "function";
        return ( ms && sb );
    }
    
    buildVideoStream( streamId, urlStatus=false ){
        let tmpThis=this;
        let djStreamObj=this.videoStreams[ streamId ]['obj'];
          
        if( false && this.hlsPreflight() ){// && !this.pxlEnv.mobile ) {
            if( typeof videojs != "undefined" ){
                this.buildVhsPlayer( streamId );
            }else{
                let videoScriptUrl="https://vjs.zencdn.net/7.5.4/video.min.js";
                this.pxlFile.loadScript( videoScriptUrl ).then( ()=>{
                    tmpThis.buildVhsPlayer( streamId );
                });
            }
        }else if(false){
            if( typeof Hls != "undefined" ){
                this.buildHlsPlayer( streamId );
            }else{
                let hlsScriptUrl="https://cdn.jsdelivr.net/npm/hls.js@latest";
                this.pxlFile.loadScript( hlsScriptUrl ).then( ()=>{
                    tmpThis.buildHlsPlayer( streamId );
                });
            }
        }else if(false && djStreamObj.canPlayType('application/vnd.apple.mpegurl')) {
            this.buildFallbackPlayer( streamId );
        }else{
            if( typeof IVSPlayer != "undefined" ){
                this.buildIvsPlayer( streamId );
            }else{
                let ivsScriptUrl="https://player.live-video.net/1.1.2/amazon-ivs-player.min.js";
                this.pxlFile.loadScript( ivsScriptUrl ).then( ()=>{
                    tmpThis.buildIvsPlayer( streamId );
                });
            }
        }
    }
    
    buildVhsPlayer( streamId ){
        if( videojs ) { // Just double checking
            this.videoStreams[ streamId ]['mode']=1;
            //djStreamObj.volume = 1;
            let djStreamObj=this.videoStreams[ streamId ]['obj'];
            
            let player = videojs(djStreamObj, { "controls": false, "autoplay": true, "preload": "auto"});
            
            videojs.log.level('off');
            //%=
            videojs.log.level('error');
            //%
            
            this.videoStreams[ streamId ]['player']=player;
            let tmpThis=this;
            
            player.ready(function() {
                let promise = player.play();
                if( promise ) {
                    promise.catch(function(error) {
                        document.addEventListener("click", function vhsClickMonitor(e){
                            let ns = player.networkState();
                            if( ns==1 || ns==2 ){
                                player.play();
                                document.removeEventListener('click', vhsClickMonitor);
                            }
                        });
                    });
                }
            });

            player.on("play", (e)=>{ // Initial event to play src url
                tmpThis.ready( streamId );
            });
            player.on("loadedmetadata", (e)=>{ // Once play started
                tmpThis.start( streamId );
            });
            // player.on("canplay", (e)=>{ // Off of a waiting event
                // console.log("VHS canplay",e);
            // });
            player.on("waiting", (e)=>{ // Waiting for hls playlist update
                let prevTime=player.currentTime();
                let prevDur=player.duration();
                if( prevDur > 0 ){
                    setTimeout( ()=>{
                        let curTime=player.currentTime();
                        let curDur=player.duration();
                        if( prevTime==curTime && prevDur == curDur ){
                            this.pxlFile.urlExists( player.src() ).then( (resp)=>{
                                if( !resp ){
                                    tmpThis.ended(  streamId  );   
                                }
                            }).catch( ()=>{
                                tmpThis.ended(  streamId  );
                            });
                        }
                    },500);
                }
            });
            
            
            // player.on("timeupdate", (e)=>{
                // console.log("VHS ended",e);
            // });
            player.on("ended", (e)=>{ // Doesn't fire... leave it anyway... I dunno, mobile maybe? Other browsers?
                //console.log("VHS ended",e);
                tmpThis.ended(  streamId  );
            });
            // player.on("stalled", (e)=>{
                // console.log("VHS stalled",e);
            // });
            // player.on("suspend", (e)=>{
                // console.log("VHS suspend",e);
            // });
            player.on("error", (e)=>{
                //console.log("VHS error",e);
                tmpThis.ended(  streamId  );
            });
            
        }else{ // Fallback, somethings up
            this.buildFallbackPlayer( streamId );
        }
    }
    
    buildHlsPlayer( streamId ){
        if(Hls.isSupported()) { // Just double checking
            this.videoStreams[ streamId ]['mode']=4;
            //djStreamObj.volume = 1;
            let djStreamObj=this.videoStreams[ streamId ]['obj'];
            
            var hls = new Hls({
                "enableWorker": true,
                "liveBackBufferLength": 900,
                "startLevel":2,
                "stretchShortVideoTrack":true,
                "nudgeOffset":.5,
                "fragLoadingTimeOut":2000,
            });
            hls.attachMedia(djStreamObj);
            //var m3u8Url = decodeURIComponent(this.videoStreams[ streamId ]['url']);
            //if( urlStatus ){
            //    hls.loadSource(m3u8Url);
            //}
            this.videoStreams[ streamId ]['player']=hls;
            let tmpThis=this;
            hls.on(Hls.Events.MEDIA_ATTACHED,function(msg) {
                //tmpThis.ready( streamId );
                tmpThis.ready( streamId );
            });
            hls.on(Hls.Events.BUFFER_CREATED,function(msg) {
                //tmpThis.ready( streamId );
            });
            hls.on(Hls.Events.MANIFEST_PARSED,function(msg) {
                //djStreamObj.play();
                //tmpThis.start( streamId );
                //djStreamObj.play();
                tmpThis.start( streamId );
            });

            hls.streamController.onMediaEnded=function(msg) {
                tmpThis.ended(  streamId  );
            }
            /*hls.on(Hls.Events.MEDIA_DETACHING,function(msg) {
                console.log("media detach", msg);
            });*/
            hls.on(Hls.Events.ERROR,function( hlsErr, errDetails ) {
                if( errDetails.fatal ){
                    tmpThis.ended(  streamId  );
                }else if( errDetails.details=="bufferFullError" || errDetails.details=="bufferAppendingError" ){
                    hls.recoverMediaError();
                }
            });
      
            //jmaConnect.pxlEnv.pxlVideo.videoStreams['dj']['player'].currentLevel
            hls.on(Hls.Events.STREAM_STATE_TRANSITION,function(msg, detail) {
                if( detail.previousState == "PARSED" && detail.nextState == "IDLE" ){
                    tmpThis.videoStreams[ streamId ]['activeLevel']=hls.currentLevel;
                    if( hls.currentLevel == -1){
                        setTimeout( ()=>{
                            if( hls.currentLevel == -1){ // Initialization will fail to -1, catch any level change after
                                /*tmpThis.videoStreams[ streamId ]['active']=false;
                                tmpThis.ended( streamId );
                                tmpThis.resetEnvSettings( streamId );*/
                                hls.recoverMediaError();
                            }
                        }, 1000);
                    }/*else if( !tmpThis.videoStreams[ streamId ]['active'] ){
                        tmpThis.restart( streamId );
                    }*/
                }
            });
            
            //jmaConnect.pxlEnv.pxlVideo.videoStreams.dj.player.streamController.lastCurrentTime
        }else{ // Fallback, somethings up
            this.buildFallbackPlayer( streamId );
        }
    }
    
    sendModMessage( type, msg, details){
        let data={
            msg:type,
            init:msg,
            data:details
        }
        this.pxlEnv.pxlSocket.sendErrorMsg( data );
    }
    buildFallbackPlayer( streamId ){ // I hope this works....
        let djStreamObj=this.videoStreams[ streamId ]['obj'];
        this.videoStreams[ streamId ]['mode']=2;
        djStreamObj.setAttribute("src", ( this.videoStreams[ streamId ]['urlStatus'] ? this.videoStreams[ streamId ]['url'] : "" ) );
        let tmpThis=this;
        djStreamObj.addEventListener('error',function(msg, data) {
        });
        
        djStreamObj.addEventListener('loadedmetadata',function(msg) {
            tmpThis.ready( streamId );
        });
        djStreamObj.addEventListener('canplay',function(msg) {
            djStreamObj.play();
            tmpThis.start( streamId );
        });
        djStreamObj.addEventListener('suspend',function(msg) {
            tmpThis.ended(  streamId  );
        });
        djStreamObj.addEventListener('ended',function(msg) {
            tmpThis.ended(  streamId  );
        });
        /*
        hls.on(Hls.Events.MEDIA_ATTACHED,function(msg) {
            tmpThis.ready( streamId );
        });
        hls.on(Hls.Events.MANIFEST_PARSED,function(msg) {
            djStreamObj.play();
            tmpThis.start( streamId );
        });
        hls.streamController.onMediaEnded=function(msg) {
            tmpThis.ended(  streamId  );
        }
        hls.on(Hls.Events.ERROR,function( hlsErr, errDetails ) {
            tmpThis.ended(  streamId  );
        });
        */
        //djStreamObj.volume = 1;
    }
    buildIvsPlayer( streamId ){
        if (IVSPlayer.isPlayerSupported) {
            this.videoStreams[ streamId ]['mode']=3;
            
            let djStreamObj=this.videoStreams[ streamId ]['obj'];
            const player = IVSPlayer.create();
            player.attachHTMLVideoElement(djStreamObj);
            player.setAutoplay(true);
            player.setLogLevel("Error");
            this.videoStreams[ streamId ]['loading']=true;
            this.videoStreams[ streamId ]['player']=player;
            this.videoStreams[ streamId ]['checkScreens']=false;
            
            let tmpThis=this;
            let playerState = IVSPlayer.PlayerState;
            player.addEventListener(playerState.READY,(msg)=>{
                tmpThis.ready( streamId );
            });
            player.addEventListener(playerState.PLAYING,(msg)=>{
                tmpThis.start( streamId );
            });
            player.addEventListener(playerState.ENDED,(msg)=>{
                tmpThis.ended( streamId );
            });
            
            let playerEvent = IVSPlayer.PlayerEventType;
            player.addEventListener(playerEvent.ERROR, (err, code, source, msg)=>{
                tmpThis.ended(  streamId, err );
            });
        }else{ // Fallback, somethings up
            this.buildFallbackPlayer( streamId );
        }
    }
    
    unload( target ){}
    
    load( streamId, url ){
        let curVid=this.videoStreams[ streamId ];
        if( curVid ){
            switch( curVid['mode'] ){
                case 1:
                
                    this.videoStreams[ streamId ][ 'url' ]=url;
                    curVid['player'].src({
                        type: "application/x-mpegURL",
                        src: url
                    });
                    curVid['player'].load();
                    break
                case 2:
                    curVid['obj'].setAttribute("src", url );
                    curVid['obj'].load();
                    break;
                case 3:
                    curVid['player'].load( url );
                    break;
                case 4:
                    // ## Investigate detachMedia() more
                    //      Should yeild the same as video.src="", yet was having problems attatching vid
                    //    Might be worth looking into hls.stopLoad() and hls.startLoad(-1)
                    if( curVid['player'] ){
                        this.destroyPlayer( streamId, true );
                    }
                    //this.buildHlsPlayer( streamId );
                        
                    curVid['player'].attachMedia( this.videoStreams[ streamId ]['obj'] );
                    var m3u8Url = decodeURIComponent( url );
                    curVid['player'].loadSource(m3u8Url);
                    break;
                default:
                    break;
            }
        }
    }
    
    newStream( nameId ){
    }
    
    //%=
    /*
    loadVideoStream( statusResolve, streamDict){
        console.log(statusResolve);
        if( streamDict['player'] ){
            if( statusResolve == 200 ){
                if( streamDict['player'].core.paused && !streamDict['loading'] ){
                    streamDict['player'].load( streamDict['url'] );
                    //this.videoStreams['dj']['player'].play();
                    streamDict['loading']=true;
                }else if( !streamDict['active'] && streamDict['player'].core.state.state=="Playing"){
                    streamDict['loading']=streamDict['player'].core.paused;
                    //this.videoStreams['dj']['player'].play();
                    let player=streamDict['player'];
                    streamDict['active']=player.core.isLoaded && !player.core.paused;
                }else{
                    streamDict['loading']=false;
                }
            }else if(statusResolve == 0){
                streamDict['delayCheck']=10;
            }
            
            streamDict['prevCheck']=streamDict['timer'].curMS;
            streamDict['checkResolve']=false;
        }
    }*/
    //%
    
    // Video Player State
    canUnmute( streamId ){
        let status=true;
        if(this.videoStreams[ streamId ]){
            status= this.videoStreams[ streamId ]['active'];
        }
        return status;
    }
    
    setMuted( streamId, val=false ){
        let curVid=this.videoStreams[ streamId ];
        if( curVid ){
            curVid['obj'].muted = val;
            
            /*if( val ){
            }else{
                curStream['obj'].volume=0;
                curStream['obj'].pause();
            }*/
        }
    }
    setVolume( streamId, vol ){
        let curVid=this.videoStreams[ streamId ];
        if( curVid ){
            curVid['obj'].volume = vol;
        };
    }
    getStreamState( streamId ){
        let ret=false;
        let curStream=this.videoStreams[ streamId ];

        switch( curStream['mode'] ){
            case 1:
                ret = !curStream['obj'].paused; //!curStream['player'].paused();
                break;
            case 2:
                ret= !curStream['obj'].paused;
                break;
            case 3:
                let player=curStream[ 'player' ];
                ret = player.core.isLoaded && !player.core.paused;
                break;
            case 4:
                //ret = !curStream['player'].paused();
                ret = curStream['player'].streamController.lastCurrentTime!=null;
                break;
            default:
                break;
        }
        return ret;
    }
    checkVideoError( streamId ){ // Check if needed for Video.js - VHS
        let curPlayer= this.videoStreams[ streamId ];
        if( curPlayer["active"] && curPlayer['mode']==4 ){
            if( curPlayer['obj'].videoWidth == 0 ){
                if( !curPlayer['obj'].paused && curPlayer['player'].streamController.lastCurrentTime > 10 ){
                    this.destroyPlayer( streamId );
                    this.videoStreams[ streamId ]["active"]=false;
                    this.checkForDjStream=true;
                    this.buildHlsPlayer( streamId );
                    this.videoStreams[ streamId ]['player'].recoverMediaError();
                }
            }else if( curPlayer['obj'].webkitDecodedFrameCount == curPlayer['prevFrame'] ){
                this.videoStreams[ streamId ]['prevFrameCount']+=1;
                if( this.videoStreams[ streamId ]['prevFrameCount'] > 50){
                    //%=
                    console.log("trigger level drop");
                    //%
                    this.videoStreams[ streamId ]['prevFrameCount']=0;
                    this.videoStreams[ streamId ]['player'].recoverMediaError();
                    this.videoStreams[ streamId ]['player'].nextLoadLevel= Math.max(0, this.videoStreams[ streamId ]['player'].currentLevel-1);
                    ////this.videoStreams[ streamId ]['player'].loadLevel= Math.max(0, this.videoStreams[ streamId ]['player'].currentLevel-1);
                    //this.videoStreams[ streamId ]['player'].nextLevel= 1;
                    this.videoStreams[ streamId ]['player'].recoverMediaError();
                }
            }else{
                this.videoStreams[ streamId ]['prevFrame']=curPlayer['obj'].webkitDecodedFrameCount;
                ////this.videoStreams[ streamId ]['player'].loadLevel=-1;
                if( this.videoStreams[ streamId ]['player'].nextLevel != -1 ){
                    this.videoStreams[ streamId ]['player'].nextLevel=-1;
                }
                this.videoStreams[ streamId ]['prevFrameCount']=0;
            }
            //jmaConnect.pxlEnv.pxlVideo.videoStreams.dj.obj.webkitDecodedFrameCount .nextLoadLevel
        }
    }
    
    // Video Player / Object Events
    ready( streamId ){
        this.videoStreams[ streamId ]['loading']=false;
        //this.videoStreams[ streamId ]['obj'].play();
        this.videoStreams[ streamId ]['obj'].volume=0;
        this.videoStreams[ streamId ]['activeLevel']=1;
    }
    start( streamId ){
        let curStream=this.videoStreams[ streamId ];
        
        if( curStream['active'] ){
            return;
        }
        let videoObj=curStream['obj']; 
        let player=curStream['player']; 
        // streamController.appended
        let active=this.getStreamState( streamId );
        this.videoStreams[ streamId ]['active'] = active;
        
        if( !this.videoStreams[ streamId ]['videoTexture'] ){
            this.videoStreams[ streamId ]['videoTexture'] = this.getTexture( streamId );
        }

        this.pxlAudio.isVideoObject=true;

        this.videoStreamFailCount=0;
        this.checkForDjStream=false;

        this.videoStreams[ streamId ]['checkScreens']=true;
        
        this.pxlAudio.djAudioObj.byScript=true;

        let djDevice=this.pxlAudio.djAudioObj;
        let djSource=djDevice.children[0];
        djSource.setAttribute("src","");
        djDevice.pause();
        djDevice.muted=true;
        setTimeout( ()=>{
            djDevice.load();
            setTimeout( ()=>{
                //curStream['player'].play();
                if( this.pxlAudio.roomAudioStopped ){
                    curStream['obj'].volume=this.pxlAudio.djAudioVolume;
                }
                curStream['obj'].muted=this.pxlAudio.djMuted || !this.pxlAudio.roomAudioStopped;
                curStream['obj'].click();
            },20);
        },20);
    }
    restart( streamId ){
        let active= false;
        let player=this.videoStreams[ streamId ]['player'];
        let vidObj=this.videoStreams[ streamId ]['obj'];
        switch( this.videoStreams[ streamId ]['mode'] ){
            case 1:
            case 2:
                active = !vidObj.paused;
                break;
            case 3:
                active = player.core.isLoaded && !player.core.paused;
                break;
            case 4: 
                active = player.currentLevel > -1;
                break;
            default:
                break;
        }
        this.videoStreams[ streamId ]['active'] = active;
        this.videoStreams[ streamId ]['checkScreens'] = active;
    }
    ended( streamId ){ 
        let curStream=this.videoStreams[ streamId ];
        if( !curStream['active'] ){
            return;
        }
        
        this.destroyPlayer( streamId ); // Relies on active==true
        
        let active=curStream['mode']==4 ? !curStream['player'].liveTracker.atLiveEdge() : !curStream['obj'].paused ;

        this.videoStreams[ streamId ]['active'] = active;

        this.checkForDjStream=this.videoAudioEvent['dj'];
        this.pxlAudio.isVideoObject=false;

        this.videoStreams[ streamId ]['checkScreens']=true;

        
        if( this.pxlAudio.roomAudioStopped ){
            curStream['obj'].volume=0;
        }
        curStream['obj'].pause();
        curStream['obj'].muted=true;

        this.pxlAudio.djAudioObj.byScript=true;
        let djDevice=this.pxlAudio.djAudioObj;
        let djSource=djDevice.children[0];
        if( djSource.getAttribute("src") == ""){
            djSource.setAttribute("src",this.pxlAudio.djUrlSource);
            djDevice.load();
            djDevice.muted=this.pxlAudio.djMuted || !this.pxlAudio.roomAudioStopped;
            djDevice.play();
        }

        this.videoStreams[ streamId ]['prevCheck']=this.pxlUtils.curMS+15;
        this.videoStreams[ streamId ]['activeLevel']=-1;
    }
    error( streamId, errorData ){
        let type;
        if( typeof errorData === "object" ){
            type=errorData.type;
        }else{
            type=errorData;
        }
        
        let errorList=["ErrorNetworkIO", "networkError","mediaError","internalException"];
        if( errorList.includes( type ) ){
            tmpThis.videoStreams[ streamId ]['active']=false;
        }
    }
    destroyPlayer( streamId, force=false ){
        if( this.videoStreams[ streamId ]['mode'] == 4 && ( this.videoStreams[ streamId ]['active'] || force ) ){
            if( this.videoStreams[ streamId ]['player'] ){
                this.videoStreams[ streamId ]['player'].detachMedia();
                //this.videoStreams[ streamId ]['player'].removeAllListeners();
                //this.videoStreams[ streamId ]['player'].destroy();
                //this.videoStreams[ streamId ]['player']=null;
            }
        }
    }
    
    
    // Status Checks
    
    async streamState(streamData){
        let djVidStopped=true;
        let performerVidStopped=true;
        if( this.videoStreams['dj'] ){
            djVidStopped=!this.videoStreams['dj']['active'];
        }
        if( this.videoStreams['performer'] ){
            performerVidStopped=!this.videoStreams['performer']['active'];
        }
        if( streamData.hasOwnProperty('dj') == true && djVidStopped ){
            this.checkForDjStream= streamData['dj'] && this.videoAudioEvent['dj'];
        }
        if( streamData.hasOwnProperty('performer') == true && performerVidStopped ){
            this.checkForPerformerStream= streamData['performer'] && this.videoAudioEvent['performer'];
        }
        
    }
    async checkVideoStreamStatus( streamId ){
        let curStreamData = this.videoStreams[ streamId ];
        if( curStreamData && this.checkForDjStream && this.posted ){
            if( !curStreamData['active'] && curStreamData['prevCheck']+curStreamData['delayCheck']<this.pxlUtils.curMS ){ // !curStreamData['checkResolve'] &&
                this.checkForDjStream=false; // Prevent multiple checks
                this.pxlFile.urlExists( this.videoStreams[ streamId ]['url'] ).then( (resp)=>{
                    this.videoStreams[ streamId ]['urlStatus']=resp;
                    this.checkForDjStream=!resp;
                    
                    this.videoStreams[ streamId ]['prevCheck']=this.pxlUtils.curMS;
                    this.videoStreams[ streamId ]['checkResolve']=this.pxlUtils.curMS;
                    if( resp ){
                        this.load( streamId, this.videoStreams[streamId]['url'] );
                        /*
                        if( this.videoStreamFailCount > this.videoStreamFailMax ){
                             this.videoStreamFailCount=0;
                             this.checkForDjStream=false;
                             this.pxlSocket.requestStreamState();
                        }*/
                    }else{
                        this.videoStreamFailCount+=1;
                    }
                }).catch( (err)=>{
                    //%=
                    console.log( err );
                    //%
                    this.videoStreamFailCount+=1;
                    this.checkForDjStream=true;
                    this.videoStreams[ streamId ]['prevCheck']=this.pxlUtils.curMS; 
                });
            }
        }
    }
}