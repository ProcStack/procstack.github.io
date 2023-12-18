export class UserConnect{
	constructor(mobile, pxlUtils, pxlUser, pxlCookie, pxlTimer, pxlAudio, pxlSocket, pxlAvatars, pxlEnv, pxlAutoCam){
		this.mobile=mobile;
		this.pxlUtils=pxlUtils;
		this.pxlUser=pxlUser;
		this.pxlTimer=pxlTimer;
		this.pxlAutoCam=pxlAutoCam;
		this.pxlAudio=pxlAudio;
		this.pxlSocket=pxlSocket;
		this.pxlCookie=pxlCookie;
		this.pxlAvatars=pxlAvatars;
		this.pxlEnv=pxlEnv;
		this.pxlGuiDraws=null;
		//this.serverURL= 'dev.antib0dy.club',
		this.serverURL= 'antib0dy.club';
		let roomChecker=window.location.href.split("/").pop();
		if( roomChecker=="" || roomChecker.includes(".")){
			roomChecker="party";
		}
        this.prevRoomId=null;
		this.roomId= roomChecker;
        //%=
        this.roomId="dev";
        //%
		
		this.credsStatus=false;
		this.authCheck=false;
        this.verseSwap=false;
		this.tokenData={};
        this.serverDataReply=[];
		
		this.localThumbHeight=120;

        let server="antib0dy.club";
		this.options = {
            hosts:{
                    domain: server,
                    anonymousdomain: 'guest.'+server,
                    authdomain: server,
                    muc: 'conference.'+server,
                    focus: 'focus.'+server
                },
			bosh: '//'+server+'/http-bind?room='+this.roomId,
			serviceUrl: '//'+server+'/http-bind?room='+this.roomId,
			websocket: 'wss://'+server+'/xmpp-websocket',
			//serviceUrl:  'wss://'+server+'/xmpp-websocket?room='+room,

			clientNode: 'https://antib0dy.club',

            statsInterval:1000,
            
            audioLevelsInterval:1000,
            enableLayerSuspension: true,
            
			openBridgeChannel: true,
			//preferH264: true,
			//disableH264: false,
            //callStatsCustomScriptUrl:"url",
            p2p: {
                enabled: true,
            },
			//resolution: 480,
			startBitrate: 50000,
			constraints: {
				video: {
                    aspectRatio : 16 / 9,
					height: {
						ideal: 720, // 480,
						max: 720, // 480,
						min: 240
					}
				}
			},
		};

        this.localMediaOptions={
			/*constraints: {
				video: {
                    aspectRatio : 16 / 9,
					height: {
						ideal: 480,
						max: 480,
						min: 240
					}
				}
			},*/
            devices: [ 'audio', 'video' ],
        }
		this.initOptions={
            disableSimulcast :true,
			openBridgeChannel: true,
			disableAudioLevels: false,
            disableThirdPartyRequests:true,
            preferredCodec:'H264',
			//openBridgeChannel: true,
			//disableSimulcast: false,
			//preferH264: true,
			//disableH264: false,
            //gatherStats:false,
            
		};

		this.confOptions = {
			openBridgeChannel: true,
            p2p:{
                preferredCodec:'H264',
            },
		}
		this.roomOptions = {
            
		}
        
        this.connectionStats={
            upload:' - ',
            download:' - ',
        };
        
		this.connection = null;
		this.connectionData=null;
		this.isJoined = false;
		this.status = 'closed';
		this.room = null;
		this.prevMessage=0;
		this.logInRequest=0;
		this.logInAttempts=0;
		this.pendingComplete=null;
		this.pendingCount=0;

		this.lID="jma_localMedia";
		this.cnVal="jma_userName";
		this.jmaUserId=null;
		this.jmaUserName=null;
		this.jmaNewUser = false;
		this.jmaActiveVideoIds = [];
		this.jmaActiveBinaural = {};
        this.audioCtx=null;
		this.localDevices = {};
		this.localDevicesEnumActive = 0; // Trigger rebuild of GUI option menu
		this.localDevicesEnumPrevious = 0; // Trigger rebuild of GUI option menu
		this.localTracks = [];
		this.remoteTracks = {};
		this.isVideo = true;
		
		this.jmaBlock=null;
		this.jmaMediaBlock=null;
        //%=
        this.jmaServerStatusBlock=null;
        this.jmaServerStatusDisplay=null;
        this.jmaModChatBlock=null;
        this.jmaModChatDisplay=null;
        //%
		
		// For gui and event triggers
		this.speakerActive=true;
		this.micActive=true;
		this.camActive=true;
		this.camObject=true;
		this.camTexture=true;
		this.joinSetCamStream=false;
		this.prevCamDeviceId=null;
		this.prevAudioDeviceId=null;
		
        
		this.camActiveStore=true;
		this.micActiveStore=true;
		this.speakerActiveStore=true;
	}

	toggleLocalDevice( type, active=null ){
		if( type == "video" ){
			this.jmaUserCountChange=true;
			active= active==null ? !this.camActive : active;
            if(active){
                if( !this.jmaActiveVideoIds.includes( this.lID ) ){
                    this.jmaActiveVideoIds.push( this.lID );
                }
            }else{
                let jmsVidEl= this.jmaActiveVideoIds.indexOf( this.lID );
                if( jmsVidEl>-1 ){
                    this.jmaActiveVideoIds.splice( jmsVidEl, 1 );
                }
            }
            
			this.camActive=active;
			if(this.prevCamDeviceId){
				if( active && this.isJoined){
					this.joinSetCamStream=false;
					this.switchAudioVideo( type, this.prevCamDeviceId );
				}else if( !active && !this.isJoined ){
					this.joinSetCamStream=true;
				}
			}
            
            
		}else if( type == "audio" ){
			active= active==null ? !this.micActive : active;
			this.micActive=active;
            if( active && !this.speakerActive ){
				this.toggleLocalDevice( "speaker", active );
				this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.speakerIcon, this.speakerActive, true );
            }
		}
        
        if( type == "speaker" ){
			active= active==null ? !this.speakerActive : active;
			this.speakerActive=active;
			/*if(!active){
				this.micActive=false;
			}*/
            let audioTrackKeys=Object.keys( this.remoteTracks );
            audioTrackKeys.forEach( (k)=>{
                if( this.remoteTracks[k].audio ){
                    this.remoteTracks[k].audio.muted=!active;
                    this.remoteTracks[k].audioObject.muted=!active;
                }
            });
            if( !active && this.micActive ){
				this.toggleLocalDevice( "audio", active );
				this.pxlGuiDraws.toggleIcon(this.pxlGuiDraws.hudIcons.micIcon, this.micActive, true );
            }
		}else{
            this.localTracks.forEach( (t)=>{ 
                if( t.type === type ){
                    if(active){
                        t.unmute();
                    }else{
                        t.mute();
                    }
                }
            } );
        }
	}
    windowVisible( active=false ){
        let muteStatus=active;
        this.localTracks.forEach( (t)=>{
            if( active==false ){
                if( t.type=="video" ){
                    this.camActiveStore=this.camActive;
                }else if( t.type=="audio" ){
                    this.micActiveStore=this.micActive
                }
            }else{
                
                if( t.type=="video" ){
                    muteStatus=this.camActiveStore;
                }else if( t.type=="audio" ){
                    muteStatus=this.micActiveStore;
                }
            }
            if(muteStatus){
                t.unmute();
            }else{
                t.mute();
            }
        } );
        if( active==false ){
            this.speakerActiveStore=this.speakerActive;
        }else{
            muteStatus=this.speakerActiveStore;
        }
        let audioTrackKeys=Object.keys( this.remoteTracks );
        audioTrackKeys.forEach( (k)=>{
            if( this.remoteTracks[k].audio ){
                this.remoteTracks[k].audio.muted=!muteStatus;
                this.remoteTracks[k].audioObject.muted=!muteStatus;
            }
        });
    }

	onAudioLevelChange( tmpThis, userId, audioLevel ){
        if( tmpThis.mobile || tmpThis.pxlAutoCam.enabled ){
            return;
        }
        if( audioLevel>0.001 ){
            if( userId == tmpThis.jmaUserId ){
                tmpThis.pxlGuiDraws.setMicVolumeLevel( audioLevel );
            }else{
                tmpThis.pxlGuiDraws.setUserControlVolume( userId, audioLevel );
            }
        }
	}

// -- -- -- -- -- -- -- -- -- -- -- //
// --  Local Track Functions  -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //
	
    
	onLocalAudioMute(e, tmpThis){
		let active = e.stream;
		tmpThis.jmaUserCountChange=true;
		if( active ){
			tmpThis.pxlGuiDraws.loadingDeviceChange( e.type, false );
		}
	}
	

	
	checkTrackMuted( track ){
		let type=track.type;
		
		let active=null;
		if( type == "video" ){
			active=this.camActive;
		}else if( type == "audio" ){
			active=this.micActive;
		}else if( type == "speaker" ){
			active=this.speakerActive;
		}
		
		// Hit a track with an incorrect type
		if(active==null){
			return;
		}
	
		if(active){
			track.unmute();
		}else{
			track.mute();
		}
	}

	onLocalTracks(tracks,tmpThis) {
        if( tmpThis.mobile || tmpThis.pxlAutoCam.enabled ){
            return;
        }
		tmpThis.localTracks = tracks;
		let pID=tmpThis.lID;
		let pDivId=pID+"_mediaParent";
		let pDiv=document.getElementById( pDivId );
		
		if( !pDiv ){
			let idBlock=document.getElementById( "hud_localVideoStyle" );
			if( idBlock ){
				let newBlock=document.createElement( "div" );
				newBlock.id=pDivId;
				newBlock.classList.add( "jmaLocalMedia" );
				let localVidParent=document.getElementById( "hud_localVideoStyle" );
				if(localVidParent){
					localVidParent.appendChild( newBlock );
				}else{
					tmpThis.jmaMediaBlock.appendChild( newBlock );
				}
			}
		}
        
		for (let i = 0; i < tmpThis.localTracks.length; i++) {
			let curTrack = tmpThis.localTracks[i];
			curTrack.addEventListener(
				JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
				audioLevel => { tmpThis.onAudioLevelChange( tmpThis, tmpThis.jmaUserId, audioLevel ); } );
			curTrack.addEventListener(
				JitsiMeetJS.events.track.TRACK_MUTE_CHANGED, (e)=>{ tmpThis.onLocalAudioMute(e, tmpThis); } );
			/*curTrack.addEventListener(
				JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
				(track) => { } );
			curTrack.addEventListener(
				JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
				deviceId => {} );*/
				
			let trackType = curTrack.getType();

			let curDiv=document.getElementById(`${pID}_${trackType}`);
			if(!curDiv){	
				if (trackType === 'video') {	
					tmpThis.prevCamDeviceId=curTrack.deviceId;
					$(`#${pDivId}`).append(`<video autoplay='1' height="${tmpThis.localThumbHeight}px" width="auto" class="jmaLocalVideo" id='${pID}_video' />`);

                    tmpThis.camObject=document.getElementById( `${pID}_video` );
                    tmpThis.camTexture=tmpThis.pxlUtils.getVideoTexture( tmpThis.camObject );
				} else {
					tmpThis.prevAudioDeviceId=curTrack.deviceId;
					$(`#${pDivId}`).append(
						`<audio autoplay='1' muted='true' id='${pID}_audio' />`);
				}
			}
			if(trackType === 'video' &&  !tmpThis.jmaActiveVideoIds.includes( tmpThis.lID ) ){
				tmpThis.jmaActiveVideoIds.push( tmpThis.lID );
                setTimeout( ()=>{
                    tmpThis.pxlGuiDraws.resetHelpTextPlacement();
                },100);
			}
            
            tmpThis.pxlGuiDraws.setUserControlPosition();
            
			curTrack.attach($(`#${pID}_${trackType}`)[0]);
			if (tmpThis.isJoined && tmpThis.room) {
				tmpThis.room.addTrack(curTrack);
				tmpThis.checkTrackMuted( curTrack );
			}
            
			tmpThis.jmaUserCountChange=true;
		}
	}




// -- -- -- -- -- -- -- -- -- -- -- //
// -- Remote Track Functions  -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

    onRemoteRemoved( tmpThis, track ){ // Play, I dunno why they mark it removed
        if( tmpThis.mobile || !track.muted ){
            return;
        }
        
		let type=track.type;
		let curId=track.ownerEndpointId;

		if( type=="video" && curId){
            
			tmpThis.jmaUserCountChange=true;
            
            let vidObj=track.containers
			//tmpThis.pxlAvatars.userDataChange(curId, track, true);
            tmpThis.remoteTracks[curId].videoPlaying=!track.muted;
			tmpThis.pxlAvatars.userSetVideoStatus(curId, !track.muted, tmpThis.remoteTracks[curId]);
            
			tmpThis.pxlEnv.checkUserVideoStatus(curId);
			tmpThis.pxlEnv.setUserVideoStatus(curId,!track.muted);
			
			if( !tmpThis.jmaActiveVideoIds.includes( curId ) ){
				tmpThis.jmaActiveVideoIds.push( curId );
			}
		}
	}
	async onRemoteMute(tmpThis, curId, track){
        if( tmpThis.mobile ){
            return;
        }
		let type=track.type;
            
		if( type=="video"){
			tmpThis.jmaUserCountChange=true;
			tmpThis.pxlEnv.setUserVideoStatus(curId,false);
			tmpThis.pxlEnv.checkUserVideoStatus(curId);
            
            let localId=curId == this.jmaUserId;
            
            if(!localId){
                //tmpThis.pxlAvatars.userDataChange(curId, track);
                tmpThis.remoteTracks[curId].videoPlaying=!track.muted;
                tmpThis.pxlAvatars.userSetVideoStatus(curId, !track.muted, tmpThis.remoteTracks[curId]);

                
                let jmsVidEl= tmpThis.jmaActiveVideoIds.indexOf( curId );
                if( jmsVidEl>-1 ){
                    tmpThis.jmaActiveVideoIds.splice( jmsVidEl, 1 );
                }
            }
            
            
		}else if( type=="audio" && !track.isLocal()){
            tmpThis.pxlAvatars.setUserMicMute( curId, track.muted );
            tmpThis.pxlGuiDraws.setUserControlRemoteMute( curId, track );
        }
	}
	
	async onRemoteTrack(track, tmpThis) {
        if( tmpThis.mobile ){
            return;
        }
		const participant = track.getParticipantId();
		if (track.isLocal()) {
			return;
		}
        
		let buildAudioMixer=false;
		let trackType=track.getType();
		let newTrackId = track.getId();
		if( trackType === 'video' ){
			if( !tmpThis.jmaActiveVideoIds.includes( participant ) ){
				tmpThis.jmaActiveVideoIds.push( participant );
			}
			tmpThis.jmaUserCountChange=true;
		}

		if (!tmpThis.remoteTracks[participant]) {
			tmpThis.remoteTracks[participant] = {};
			tmpThis.remoteTracks[participant].video = null;
			tmpThis.remoteTracks[participant].videoObject = null;
			tmpThis.remoteTracks[participant].videoTexture = null;
			tmpThis.remoteTracks[participant].videoPlaying = false;
			tmpThis.remoteTracks[participant].audio = null;
			tmpThis.remoteTracks[participant].audioObject = null;
            //&=
			tmpThis.remoteTracks[participant].stats = {};
			tmpThis.remoteTracks[participant].controls = [];
            //&
		}else{
			if(tmpThis.remoteTracks[participant][trackType]){
                tmpThis.remoteTracks[participant][trackType].dispose();
            }else{
				buildAudioMixer=true;
            }
        }
        
		tmpThis.remoteTracks[participant][trackType]=track;

		track.addEventListener(
			JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
			(track) => { tmpThis.onRemoteMute(tmpThis, participant, track); } );
		/*track.addEventListener(
			JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
			(track) => { } );
		track.addEventListener(JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,
			deviceId => {} );*/
			
		let pID=participant+"_parent";
		let idBlock = document.getElementById( pID );
		let idMedia = document.getElementById( participant+"_mediaParent" );
        //&=
        let buildControls=false;
		let idStats = document.getElementById( participant+"_statsParent" );
        //&
		if( !idBlock ){
			idBlock=document.createElement( "div" );
			idBlock.id=pID;
			idBlock.classList.add("jmaRemoteMediaParent");
			tmpThis.jmaMediaBlock.appendChild( idBlock );
            
            //&=
			idStats=document.createElement( "div" );
			idStats.id=participant+"_statsParent";
			idStats.classList.add("jmaRemoteStats");
            
                let tmpDiv;
                tmpDiv=document.createElement( "div" );
                tmpDiv.classList.add("jmaStats_name");
                tmpThis.remoteTracks[participant].stats.name= tmpDiv ;
                idStats.appendChild( tmpDiv );
                
                tmpDiv=document.createElement( "div" );
                tmpDiv.classList.add("jmaStats_dl");
                tmpThis.remoteTracks[participant].stats.down= tmpDiv ;
                idStats.appendChild( tmpDiv );
                
                tmpDiv=document.createElement( "div" );
                tmpDiv.classList.add("jmaStats_up");
                tmpThis.remoteTracks[participant].stats.up= tmpDiv ;
                idStats.appendChild( tmpDiv );
                
                tmpDiv=document.createElement( "div" );
                tmpDiv.classList.add("jmaStats_fps");
                tmpThis.remoteTracks[participant].stats.fps= tmpDiv ;
                idStats.appendChild( tmpDiv );
            
			idBlock.appendChild( idStats );
            
			let idReportCard=document.createElement( "div" );
			idReportCard.id=participant+"_statsParent";
			idReportCard.classList.add("jmaRemoteStats");
            
                tmpDiv;
                tmpDiv=document.createElement( "div" );
                tmpThis.remoteTracks[participant].stats.reports= tmpDiv ;
                idReportCard.appendChild( tmpDiv );
                
                tmpDiv=document.createElement( "div" );
                tmpThis.remoteTracks[participant].stats.recieved= tmpDiv ;
                idReportCard.appendChild( tmpDiv );
                
			idBlock.appendChild( idReportCard );
            //&
            
			idMedia=document.createElement( "div" );
			idMedia.id=participant+"_mediaParent";
			idMedia.classList.add("jmaRemoteMedia");
			idBlock.appendChild( idMedia );
            //&=
            buildControls=true;
            //&
		}
		
		let objExists=document.getElementById( `${participant}_${trackType}` );
		let tParent=null;
		if( !objExists ){
			if (trackType === 'video') {
				objExists=document.createElement("video");
				objExists.id=participant+"_video";
				objExists.autoplay=true;
                //&=
                objExists.classList.add("jmaVideoStyle");
                //&
                
                tmpThis.remoteTracks[participant].videoObject=objExists;
                tmpThis.remoteTracks[participant].videoTexture = tmpThis.pxlUtils.getVideoTexture( tmpThis.remoteTracks[participant].videoObject );
                tmpThis.remoteTracks[participant].videoPlaying=!track.muted;
                tmpThis.pxlAvatars.avatarVideoFailList.push( participant );
                
				idMedia.appendChild( objExists );
			} else {
				objExists=document.createElement("audio");
				objExists.id=participant+"_audio";
				objExists.autoplay=true;
                
                tmpThis.remoteTracks[participant].audioObject=objExists;
                
				idMedia.appendChild( objExists );
			}
		}
        
		track.attach( $(`#${participant}_${trackType}`)[0] );
        
        if (trackType === 'video') {
            tmpThis.remoteTracks[participant].video=track;
            //tmpThis.pxlAvatars.userDataChange(participant, track, true);
            tmpThis.remoteTracks[participant].videoPlaying=!track.muted;
            tmpThis.pxlAvatars.userSetVideoStatus(participant, !track.muted, tmpThis.remoteTracks[participant] );
            
            if( !tmpThis.pxlAvatars.avatarVideoFailList.includes( participant ) ){
                tmpThis.pxlAvatars.avatarVideoFailList.push( participant );
            }
            tmpThis.pxlEnv.setUserVideoStatus(participant, !track.muted);
            
        }else if(trackType == "audio"){
            /*track.addEventListener(
                JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
                audioLevel => { tmpThis.onAudioLevelChange( tmpThis, participant, audioLevel ); } );*/
            objExists.volume=0;
            tmpThis.remoteTracks[participant].audio=track;
			//tmpThis.pxlAudio.buildRemoteAudioMixer(participant,tParent);
            tmpThis.pxlAvatars.setUserAudioDevice( participant );
            
            tmpThis.pxlGuiDraws.setUserControlRemoteMute( participant, track );
            tmpThis.pxlAvatars.setUserMicMute( participant, track.muted );
            
            if( !this.speakerActive ){
                track.muted=true;
                $(`#${participant}_${trackType}`)[0].muted=true;
            }
		}
        tmpThis.jmaUserCountChange=true;
    
        tmpThis.pxlAvatars.updateAvatarSpacialData( [participant] );
    
        //&=
        if(buildControls){
            let userControls=document.createElement( "div" );
            userControls.classList.add( "jmaUserControlPanel" );
            
			tmpThis.remoteTracks[participant].controls.push(userControls);
            idBlock.appendChild( userControls );
            
            let muteButton=document.createElement( "input" );
            muteButton.type="button";
            muteButton.value="Mute";
            muteButton.id=participant+"_muteAudio";
            muteButton.classList.add( "userProfileBox_sendUsername" );
            muteButton.onclick=(e)=>{
                tmpThis.pxlSocket.jmaFuncEmit( {"type":"muteAudio", "value":participant} );
            };
            userControls.appendChild( muteButton );
            
            let vidButton=document.createElement( "input" );
            vidButton.type="button";
            vidButton.value="Video Off";
            vidButton.id=participant+"_videoOff";
            vidButton.classList.add( "userProfileBox_sendUsername" );
            vidButton.onclick= (e)=>{
                tmpThis.pxlSocket.jmaFuncEmit( {"type":"muteVideo", "value":participant} );
            };
            userControls.appendChild( vidButton );
            
            let disableButton=document.createElement( "input" );
            disableButton.type="button";
            disableButton.value="Disable Video";
            disableButton.id=participant+"_videoDisable";
            disableButton.classList.add( "userProfileBox_sendUsername" );
            disableButton.onclick= (e)=>{
                tmpThis.pxlSocket.jmaFuncEmit( {"type":"disableVideo", "value":participant} );
            };
            userControls.appendChild( disableButton );
            
            let kickButton=document.createElement( "input" );
            kickButton.type="button";
            kickButton.value="Kick User";
            kickButton.id=participant+"_kickUser";
            kickButton.classList.add( "userProfileBox_sendUsername" );
            kickButton.onclick= (e)=>{
                tmpThis.pxlSocket.jmaFuncEmit( {"type":"kickUser", "value":participant} );
            };
            userControls.appendChild( kickButton );
        }
        //&
	}



// -- -- -- -- -- -- -- -- -- -- -- //
// -- Connection Event Functions -- //
// -- -- -- -- -- -- -- -- -- -- -- //


	async onConferenceJoined(e, tmpThis) {
		
		tmpThis.pxlGuiDraws.jmaJoinState( true );
        
		tmpThis.isJoined = true;
		
        let jId=tmpThis.room.myUserId();
        tmpThis.jmaUserId = jId;
        let tmpOldId=tmpThis.pxlUser.jitsiUserId;

        tmpThis.pxlUser.jmaTempUserIdActive = false;
        tmpThis.pxlUser.jitsiUserId = jId;
        tmpThis.pxlUser.jmaUserId = jId; // ## Duped, removed
        tmpThis.pxlAvatars.delayUserCheck(); // ## Duped, removed
        
        if( tmpThis.prevRoomId==null ){
            tmpThis.pxlSocket.sendInitialVerse( tmpOldId, jId, tmpThis.roomId );
        }else{
            if( jId != tmpOldId ){
                tmpThis.pxlSocket.sendUserSwap( tmpOldId, jId );
            }
        }
        tmpThis.prevRoomId=tmpThis.roomId;
        tmpThis.pxlGuiDraws.multiverLoggedIn( tmpThis.roomId );
		tmpThis.jmaUserCountChange = true;
        
		if(tmpThis.pxlCookie.hasCookie(tmpThis.cnVal)){
			let storedName=tmpThis.pxlCookie.readCookie(tmpThis.cnVal);
			tmpThis.setUserName(storedName,true,false);
		}
        
        if( !tmpThis.mobile || !tmpThis.pxlAutoCam.enabled ){
            for (let i = 0; i < tmpThis.localTracks.length; i++) {
                tmpThis.room.addTrack(tmpThis.localTracks[i])
                tmpThis.checkTrackMuted( tmpThis.localTracks[i] );
            }
        }
	}

	onUserLeft(id, tmpThis) {
        
		/*if( !this.verseSwap ){
            tmpThis.pxlAvatars.userLeftMonitor(id);
		}
        this.verseSwap=false;*/
		
		if (!tmpThis.remoteTracks[id]) {
			return;
		}
		
		let jmsVidEl=tmpThis.jmaActiveVideoIds.indexOf(id);
		if( jmsVidEl>-1 ){
			tmpThis.jmaActiveVideoIds.splice( jmsVidEl, 1 );
		}
		
		const tracks = [tmpThis.remoteTracks[id].video, tmpThis.remoteTracks[id].audio];
		for (let i = 0; i < tracks.length; i++) {
            if(tracks[i]==null) continue;
			tracks[i].containers.forEach( (c)=>{
				tracks[i].detach( c );
			});
		}
            
		let pID=id+"_parent";
		let idBlock = document.getElementById( pID );
		if( idBlock ){
			idBlock.parentNode.removeChild(idBlock);
		}
		
		tmpThis.jmaUserCountChange = true;
	}

	onConnectionSuccess(e,tmpThis) {
		tmpThis.isJoined = true;
		tmpThis.status = 'open';
		tmpThis.room = tmpThis.connection.initJitsiConference(tmpThis.roomId, tmpThis.confOptions);
        
        if( !tmpThis.mobile ){
            tmpThis.room.on(JitsiMeetJS.events.conference.TRACK_ADDED, (t)=>{tmpThis.onRemoteTrack(t,tmpThis);});
            tmpThis.room.on(JitsiMeetJS.events.conference.TRACK_REMOVED, track => {
                tmpThis.onRemoteRemoved(tmpThis, track );
            });
        }
		tmpThis.room.on(
			JitsiMeetJS.events.conference.CONFERENCE_JOINED,
			(t)=>{tmpThis.onConferenceJoined(t,tmpThis);});
		tmpThis.room.on(JitsiMeetJS.events.conference.USER_JOINED, id => {
			tmpThis.jmaUserCountChange = true;
		});
		tmpThis.room.on(JitsiMeetJS.events.conference.USER_LEFT, (userId)=>{tmpThis.onUserLeft(userId,tmpThis);});
		/*tmpThis.room.on(JitsiMeetJS.events.conference.TRACK_MUTE_CHANGED, track => {
			tmpThis.trackChangeEvent(tmpThis, track,false);
		});*/
		tmpThis.room.on(
			JitsiMeetJS.events.conference.DISPLAY_NAME_CHANGED,
			(userID, displayName) => { tmpThis.onNameChange( tmpThis, userID, displayName ); } );
		//&=
		tmpThis.room.on(
			JitsiMeetJS.events.connectionQuality.REMOTE_STATS_UPDATED,
			(userID, message, stats) => { tmpThis.onRemoteStatus( tmpThis, userID, message, stats) } );
        //&
		tmpThis.room.on(
			JitsiMeetJS.events.connectionQuality.LOCAL_STATS_UPDATED,
			(stats) => { tmpThis.onLocalStatus( tmpThis, stats ) } );
		//&=
		tmpThis.room.on(
			JitsiMeetJS.events.conference.ENDPOINT_MESSAGE_RECEIVED,
			(userID, message, data) => { tmpThis.onRevieveStats( tmpThis, userID, message, data) } );
        //&
		/*tmpThis.room.on(
			JitsiMeetJS.events.conference.MESSAGE_RECEIVED,
			(userID, message, data) => { tmpThis.onRevieveMessage( tmpThis, userID, false, message, data) } );
		tmpThis.room.on(
			JitsiMeetJS.events.conference.PRIVATE_MESSAGE_RECEIVED,
			(userID, message, data) => { tmpThis.onRevieveMessage( tmpThis, userID, true, message, data) } );
			*/
		tmpThis.room.on(
			JitsiMeetJS.events.conference.TRACK_AUDIO_LEVEL_CHANGED,
			(userID, audioLevel) =>  { tmpThis.onAudioLevelChange(tmpThis, userID, audioLevel ); } );

        //tmpThis.pxlGuiDraws.multiverseData.fromVerse= tmpThis.pxlGuiDraws.toVerse || tmpThis.roomId;
        //tmpThis.pxlGuiDraws.multiverseData.toVerse=tmpThis.roomId;

		tmpThis.room.join();
        
	}

	onConnectionFailed(e,tmpThis) {
		tmpThis.status = 'closed';
		tmpThis.isJoined = false;
		//console.error('Connection Failed!',e);
		tmpThis.pxlGuiDraws.jmaJoinState( false );
	}


	disconnect(e, tmpThis) {
		tmpThis.isJoined = false;
		tmpThis.status = 'closed';
		tmpThis.pxlGuiDraws.jmaJoinState( false );
		
		tmpThis.connection.removeEventListener(
			JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
			(e)=>{ tmpThis.onConnectionSuccess(e,tmpThis);} );
		tmpThis.connection.removeEventListener(
			JitsiMeetJS.events.connection.CONNECTION_FAILED,
			(e)=>{ tmpThis.onConnectionFailed(e,tmpThis);});
		tmpThis.connection.removeEventListener(
			JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
			(e)=>{ tmpThis.disconnect(e,tmpThis);});
			
		if( tmpThis.connectionData!=null ){
			tmpThis.joinConference( tmpThis.connectionData );
		}
	}

	unload(e, tmpThis) {
		tmpThis.status = 'closed';
        let pID=tmpThis.pxlUser.jitsiUserId;
		tmpThis.pxlGuiDraws.jmaJoinState( false );
		/*if( tmpThis.pxlSocket.socket && !this.verseSwap ){
			tmpThis.pxlAvatars.userLeftMonitor( pID );
		}*/
        this.verseSwap=false;
    
        if( tmpThis.jmaActiveBinaural[pID] ){
            tmpThis.jmaActiveBinaural[pID].dest;
            tmpThis.jmaActiveBinaural[pID].panner.disconnect(tmpThis.jmaActiveBinaural[pID].dest);
            tmpThis.jmaActiveBinaural[pID].gainer.disconnect(tmpThis.jmaActiveBinaural[pID].panner);
            tmpThis.jmaActiveBinaural[pID].ctx.disconnect(tmpThis.jmaActiveBinaural[pID].gainer);
            delete tmpThis.jmaActiveBinaural[pID].ctx;
            delete tmpThis.jmaActiveBinaural[pID].gainer;
            delete tmpThis.jmaActiveBinaural[pID].panner;
            delete tmpThis.jmaActiveBinaural[pID];
        }
        
        // Such a shit show
        for (let i = 0; i < tmpThis.localTracks.length; i++) {
            tmpThis.room.removeTrack(tmpThis.localTracks[i]).then( ()=>{
                tmpThis.localTracks[i].dispose();
            });
        }
        if(tmpThis.room && tmpThis.isJoined){
            tmpThis.room.leave();
        }
        tmpThis.isJoined = false;
        if(tmpThis.connection){
            tmpThis.connection.disconnect(e, tmpThis);
        }
        tmpThis.jmaUserCountChange=true;

	}
	
// -- -- -- -- -- -- -- -- -- -- -- //
// -- Room & Conference Funcs -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

	setRoomOptions(server, room, tmpThis){
		let hostData={};
		hostData={
				domain: server,
				anonymousdomain: 'guest.'+server,
				authdomain: server,
				muc: 'conference.'+server,
				focus: 'focus.'+server
			};

        tmpThis.options.hosts= hostData;
        tmpThis.options.bosh= '//'+server+'/http-bind?room='+room;
        tmpThis.options.serviceUrl= '//'+server+'/http-bind?room='+room;
        tmpThis.options.websocket= 'wss://'+server+'/xmpp-websocket';
        //tmpThis.options.serviceUrl=  'wss://'+server+'/xmpp-websocket?room='+room;

	}
	
	joinConference( connectionData ){
		if(!this.credsStatus || !this.roomId || this.mobile ){
			return;
		}
		
		this.status = 'joining';
		let tmpThis=this;
		
		if( tmpThis.options == null){
			tmpThis.setRoomOptions( tmpThis.serverURL, tmpThis.roomId, tmpThis );
		}
		this.connection = new JitsiMeetJS.JitsiConnection(null, null, tmpThis.options);

		this.connection.addEventListener(
			JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,
			(e)=>{ tmpThis.onConnectionSuccess(e,tmpThis);});
		this.connection.addEventListener(
			JitsiMeetJS.events.connection.CONNECTION_FAILED,
			(e)=>{ tmpThis.onConnectionFailed(e,tmpThis);});
		this.connection.addEventListener(
			JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,
			(e)=>{ tmpThis.disconnect(e,tmpThis);});
			
		/*JitsiMeetJS.mediaDevices.addEventListener(
			JitsiMeetJS.events.mediaDevices.DEVICE_LIST_CHANGED,
			tmpThis.onDeviceListChanged);*/

        if( this.connectionData!=null ){
            connectionData=this.connectionData;
        }
        
        this.connection.connect(  connectionData.value );
        this.connectionData=null;

	}
	leaveConference(e,tmpThis) {
        if(this.isJoined){
            this.status = 'closed';
            this.pxlGuiDraws.jmaJoinState( false );
            this.isJoined = false;
            this.room.leave();
            this.connection.disconnect(e, tmpThis);
        }
	}
	toggleConnection(){
		if(this.status=="closed"){
			//this.joinConference();
			this.pxlAvatars.userDataRequest('logIn');
		}else if(this.status=="open"){
			this.leaveConference(null,this);
		}
	}
	
	loadVerse( toVerse, verseSwap=false ){
        if( toVerse != this.roomId ){
            let verseName=toVerse;
            this.roomId=verseName;
            this.verseSwap=verseSwap;
            return true;
        }
        return false;
	}
	
	
	
	
	
	
// -- -- -- -- -- -- -- -- -- -- -- //
// -- Local Device Functions  -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

	switchDevice( type="video", deviceId=null) { // eslint-disable-line no-unused-vars
		if( type=="video" || type=="audio"){
			this.switchAudioVideo(type, deviceId);
		}else{
			this.switchAudioOutput(deviceId);
		}
	}
	switchAudioOutput(deviceId) { // eslint-disable-line no-unused-vars
		JitsiMeetJS.mediaDevices.setAudioOutputDevice(deviceId);
	}
	switchAudioVideo( type="video", deviceId=null) { // eslint-disable-line no-unused-vars
        if( this.mobile || this.pxlAutoCam.enabled ){
            return;
        }
		this.prevCamDeviceId=deviceId;
		if( !this.camActive && type=="video"){
			this.joinSetCamStream=true;
			return;
		}
		
		//this.isVideo = !this.isVideo;
		let localIndex=-1;
		this.localTracks.forEach( (t,x)=>{
			if(this.localTracks[x].type==type){
				localIndex=x;
			}
		});
		if(localIndex==-1){
			return;
		}
		
		let replacedTrack=this.localTracks.splice( localIndex, 1 ).pop();
		replacedTrack.dispose();
        
		let options={};
		options.devices=[type];
		if(deviceId){
			if(type=="video"){
				options.cameraDeviceId=deviceId;
                options.constraints=this.localMediaOptions.constraints;
			}else if(type=="audio"){
				options.micDeviceId=deviceId;
			}
		}
        
		let tmpThis=this;
		JitsiMeetJS.createLocalTracks(options)
			.then(tracks => {
				this.localTracks.push(tracks[0]);
				tracks[0].addEventListener(
					JitsiMeetJS.events.track.TRACK_AUDIO_LEVEL_CHANGED,
					(audioLevel) => { tmpThis.onAudioLevelChange( tmpThis, tmpThis.jmaUserId, audioLevel ); } );
				tracks[0].addEventListener(
					JitsiMeetJS.events.track.TRACK_MUTE_CHANGED,
					(audioLevel) => { tmpThis.onRemoteMute(tmpThis, tmpThis.jmaUserId, audioLevel); } );
				/*this.localTracks[1].addEventListener(
					JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,
					(track) => { } );*/
				tracks[0].attach($(`#${this.lID}_${type}`)[0]);
				if(this.status=="open"){
                    //this.room.replaceTrack
					this.room.addTrack(tracks[0]);
					this.checkTrackMuted(tracks[0]);
				}
				this.pxlGuiDraws.loadingDeviceChange(type, false);
			})
			.catch(error =>{
            //%=
                console.log(error)
            //%
            });
	}
	onDeviceListChanged(devices) {
		
		this.localDevicesEnumActive += 1;
		
		this.localDevices={};
		JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
            devices.forEach( (d)=>{
                let curType=d.kind;
                if(!this.localDevices[ curType ]){
                    this.localDevices[ curType ]=[];
                }
                this.localDevices[ curType ].push( d );
            });
		});
	}
	
// -- -- -- -- -- -- -- -- -- -- -- //
// -- Auth Functions -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

	checkCreds( val=null ){
		if(val==null || this.status=="joining" ){
			return;
		}
		this.logInAttempts+=1;
		
		if( !this.credsStatus ){
			this.credsStatus=true;
			this.jmaInit(val);
		}else{
			this.joinConference(val);
		}
	}
	
	checkAuth(){
        if( this.status == "open" ){
            this.leaveConference(null,this);
        }
		this.pxlAvatars.userDataRequest('logIn');
	}
	
	checkLogin(un,ps){
		if( this.status=="open" ){
            this.connectionData={value:{id:us+"@antib0dy.club", password:ps}};
            this.leaveConference(null,this);
        }
	}
	
	//_sendMuteStatus
	// setAudioLevel
	// setAudioOutput
	// setAudioOutputDevice
	// setVideoMute
    /* this.room.setAudioMute(newTrack.isMuted());
  } else {
    this.room.setVideoMute(newTrack.isMuted()); */
	// 
	// track.mute()

    // track.unmute() {
	
	// setMediaTransferActive // Plays local video it seems, stream canvas this way?
	
// -- -- -- -- -- -- -- -- -- -- -- //
// -- User Functions -- -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

	//&=
	onRemoteStatus( tmpThis, userId, message, stats){
		//console.log("remote status");
		//console.log(userId);
		//console.log(stats);
	}
    //&
	onLocalStatus( tmpThis, stats ){ 
        tmpThis.connectionStats.download= stats.bitrate.download;
        tmpThis.connectionStats.upload= stats.bitrate.upload;
	}
	setUserName( toNameRaw, dupeOk=false,set=true ){
		if(toNameRaw.replace(" ","") == ""){
			return [false, false];
		}
		let toName=this.pxlUtils.cleanBasic( toNameRaw );
		let toNameLower=toName.toLowerCase();
        
		let pList=this.room ? this.room.getParticipants() : [];
		let dupeCount=1;
		pList.forEach( (p)=>{
			let pId=p.getId();
			let pName=p.getDisplayName();
            
			if(pName){
				if( toNameLower == pName.toLowerCase() && this.jmaUserId != pId ){
					dupeCount+=1;
				}
			}
		});
		if(dupeCount>1){
			toName=toName+dupeCount;
			if( !dupeOk ){
				return [false,toName];
			}
		}
		
		if(set){ this.pxlCookie.setCookie(this.cnVal, toName); }
		this.jmaUserName=toName;
		this.pxlUser.jmaUserName=toName;
        if( this.room ){
            this.room.setDisplayName( toName );
            this.pxlSocket.changeUserName( this.jmaUserId, toName );
        }
        
        
		return [true,toName];
	}
	onNameChange( tmpThis, userId, displayName ){
		if( userId != tmpThis.jmaUserId ){
            //tmpThis.pxlAvatars.userChangeName( userId, displayName );
        }
	}
	
        
        
//&=
// -- -- -- -- -- -- -- -- -- -- -- //
// -- Abuse Reports; Moderators  -- //
// -- -- -- -- -- -- -- -- -- -- -- //

    padNumber(val){
        return (val+"").padStart(2,"0");
    }
    getDateTime(){
        let dt=new Date();
        let ret=this.padNumber(dt.getMonth()+1)+"/"+this.padNumber(dt.getDate())+";   "+ this.padNumber(dt.getHours())+":"+this.padNumber(dt.getMinutes())+":"+this.padNumber(dt.getSeconds());
        
        return ret;
    }

    backendMsg(msg){
        let msgEntry=document.createElement( "div" );
        msgEntry.style.wordWrap="break-word";
        msgEntry.style.border="1px solid #ffffff";
        
        this.jmaModChatDisplay.appendChild( msgEntry );
        
        let msgModName=document.createElement( "div" );
        let msgHeader=msg.modName || "NULL NAME";
        msgHeader+=";  " +this.getDateTime();
        msgModName.innerText=msgHeader;
        msgEntry.appendChild( msgModName );
        
        let msgValue=document.createElement( "div" );
        msgValue.innerText=msg.modMsg || "NULL MESSAGE";
        msgEntry.appendChild( msgValue );
        
		this.jmaModChatDisplay.scrollTo(0,this.jmaModChatDisplay.scrollHeight);
        this.pxlGuiDraws.updateUserIconStatus( true );
    }
    backendData(msg){
        //console.log("recieved");
        //this.serverDataReply.push(msg);
        let dataEntry=document.createElement( "div" );
        dataEntry.style.wordWrap="break-word";
        dataEntry.style.border="1px solid #ffffff";
        dataEntry.style.maxHeight="200px";
        dataEntry.style.overflowY="auto";
        dataEntry.style.width="98%";
        this.jmaServerStatusDisplay.appendChild( dataEntry );
        
        let dataType=document.createElement( "div" );
        let dataHeader=(msg.type || "NULL TYPE") + " - " + (msg.name || "NULL NAME");
        dataHeader+=";   " +this.getDateTime();
        dataType.innerText=dataHeader;
        dataEntry.appendChild( dataType );
        
        let addKeyListing= !["scriptError","ioClientData","kickAll","atCapacity"].includes( msg.type );
        
        let typeHeaders={
            userData:"Users",
            verseData:"Verses",
            exitList:"Verses",
            userRooms:"Clients",
        };
        let header= typeHeaders.hasOwnProperty( msg.type ) ? typeHeaders[ msg.type ] : "Entries";
        
        let dataValueObj=document.createElement( "div" );
        let dataValue=msg.value || "NULL DATA";

        if( Array.isArray(dataValue) ){
            let curDataText="....[ "+dataValue.join(", ")+" ]";
            dataValue=".."+dataValue.length+" Entries; \n"+curDataText;
            dataEntry.style.width="48vw";
        }else if( typeof dataValue == "object" ){
            let tmpValue=".{\n";
            let dataKeys=Object.keys( dataValue );
            if( addKeyListing ){
                tmpValue+=".."+dataKeys.length+" "+header+";\n";
            }
            dataKeys.forEach( (k)=>{
                let curDataText=dataValue[k];
                if( typeof curDataText == "object" ){
                    if( !Array.isArray(curDataText) ){
                        curDataText=Object.keys(curDataText);
                    }
                    let keyCount=""
                    if( curDataText.includes("jid") ){
                        keyCount+="..jid: "+dataValue[k]['jid']+"\n";
                    }
                    keyCount+=".."+curDataText.length+" Entries;\n";
                    curDataText= keyCount + "....[ " + curDataText.join(", ") + " ]";
                }
                if( addKeyListing ){
                    tmpValue+= ".." + k + " : \n" + curDataText+"\n";
                }else{
                    tmpValue+= curDataText+"\n";
                }
            });
            dataValue=JSON.stringify( msg.value )
            tmpValue+=".}";
            dataValue=tmpValue;
        }
        dataValueObj.innerText=dataValue;

        dataEntry.appendChild( dataValueObj );
        
        
		this.jmaServerStatusDisplay.scrollTo(0,this.jmaServerStatusDisplay.scrollHeight);
    }
    
    // ## Add Report Block to user control list
    abuseReport(msg){
        console.log("Abuse Report --");
        console.log(msg);
    }
    userAlert(msg){
        if( msg.type=="userAlert" ){
            let val=msg.value;
            if(tmpThis.remoteTracks[ val.reporter ]){
                let stats=tmpThis.remoteTracks[ val.reporter ].stats;
                if(stats.reports){
                    stats.reports.innerHTML = "Reports Sent : "+ val.reportCount;
                    
                }
            }
            if(tmpThis.remoteTracks[ val.target ]){
                let stats=tmpThis.remoteTracks[ val.target ].stats;
                if(stats.recieved){
                    stats.recieved.innerHTML = "Reports Recieved : "+ val.recievedCount;
                    
                }
            }
        }
    }


// -- -- -- -- -- -- -- -- -- -- -- //
// -- Message Event Functions -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //

	onRevieveStats( tmpThis, userData, statsData){
		let msgType=statsData.type;
		let blacklist=['e2e-ping-response', 'e2e-ping-request'];
		if( msgType == "stats" ){
            if(tmpThis.remoteTracks[userData._id]){
                let stats=tmpThis.remoteTracks[userData._id].stats;
                if(stats.name){
                    stats.name.innerText=userData._displayName +";";
                    stats.name.innerHTML = stats.name.innerText+"<span class='jmafStat'> "+userData._id+"</span>" ;
                    stats.down.innerHTML="↓<span class='jmafStat'>"+statsData.values.bitrate.download+"</span>";
                    stats.up.innerHTML="↑<span class='jmafStat'>"+statsData.values.bitrate.upload+"</span>";
                    
                    //console.log(userData,"Stats Data \n",statsData);
                    /*
                    userData._conference.authEnabled: true
                    userData._conference.authIdentity: "mary@antib0dy.club"

                    userData._displayName: "Trancor_1"
                    : "2ddfdba2"
                    userData._role: "moderator"
                    
                    statsData.values.bitrate.audio: {upload: 21, download: 0}
                    statsData.values.bitrate.video: {upload: 0, download: 0}

                    statsData.values.connectionQuality: 100
                    statsData.values.jvbRTT: 23

                    statsData.values.packetLoss:
                    statsData.values.packetLoss.download: 0
                    statsData.values.packetLoss.total: 0
                    statsData.values.packetLoss.upload: 0
                    */
                }
            }
        }
    }
    onUpdateFPS( curId, curFPS){
        if(this.remoteTracks[curId]){
            let stats=this.remoteTracks[curId].stats;
            if(stats.fps){
                stats.fps.innerText = curFPS;
                stats.fps.innerHTML = stats.fps.innerText+"<span class='jmafStat'> fps</span>" ;
            }
        }
    }
//&

	
// -- -- -- -- -- -- -- -- -- -- -- //
// --  Initialize Jitsi -- -- -- -- //
// -- -- -- -- -- -- -- -- -- -- -- //
	
	jmaInit(connectionData){
        //%=
		window.jmaConnect=this;
        //%
        
        if( this.mobile ){
            return;
        }
        
		JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.ERROR);
		//JitsiMeetJS.setLogLevel(JitsiMeetJS.logLevels.DEBUG);

		JitsiMeetJS.init(this.initOptions);
		
		this.joinConference( connectionData );
		
        let tmpThis=this;
        
		let jmaBlockDiv=document.getElementById( "jmaBlock" );
		if( !jmaBlockDiv ){
			this.jmaBlock=document.createElement( "div" );
			this.jmaBlock.id="jmaBlock";
			this.jmaBlock.classList.add("jmaBlockStyle");
            
			document.body.appendChild( this.jmaBlock );
        }
		let jmaMediaBlockDiv=document.getElementById( "jmaMediaBlock" );
		if( !jmaMediaBlockDiv ){
			this.jmaMediaBlock=document.createElement( "div" );
			this.jmaMediaBlock.id="jmaMediaBlock";
			this.jmaMediaBlock.classList.add("jmaMediaBlockStyle");
            
			this.jmaBlock.appendChild( this.jmaMediaBlock );
		}
		
        //&=
            let jmaMediaStreamDiv=document.getElementById( "jmaMediaStreamParent" );
            if( !jmaMediaStreamDiv ){
                jmaMediaStreamDiv=document.createElement( "div" );
                jmaMediaStreamDiv.classList.add("hud_topBarBlockStyle");
                jmaMediaStreamDiv.style.top="120px";
                jmaMediaStreamDiv.style.backgroundColor="unset";
                jmaMediaStreamDiv.style.borderRadius="unset";
                this.jmaBlock.appendChild( jmaMediaStreamDiv );
                
                let jmaMedia_clientGhostCheck=document.createElement( "div" );
                jmaMedia_clientGhostCheck.classList.add("userProfileBox_sendUsername");
                jmaMedia_clientGhostCheck.innerText="Client Check For Ghosts";
                jmaMedia_clientGhostCheck.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"verifyClientAvatars"} );
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_clientGhostCheck );
                
                let jmaMedia_getDjStream=document.createElement( "div" );
                jmaMedia_getDjStream.classList.add("userProfileBox_sendUsername");
                jmaMedia_getDjStream.style.marginBottom="15px";
                jmaMedia_getDjStream.innerText="Check Video Stream Status";
                jmaMedia_getDjStream.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"queryStreamStatus"} );
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_getDjStream );
                
                let jmaMedia_nextCam=document.createElement( "div" );
                jmaMedia_nextCam.classList.add("userProfileBox_sendUsername");
                jmaMedia_nextCam.innerText="Auto Drone Cam";
                jmaMedia_nextCam.onclick=()=>{
                    tmpThis.pxlSocket.sendAutoCam( {type:0, value:1} );
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_nextCam );
                
                let jmaMedia_followCam=document.createElement( "div" );
                jmaMedia_followCam.classList.add("userProfileBox_sendUsername");
                jmaMedia_followCam.innerText="Auto Follow Cam";
                jmaMedia_followCam.onclick=()=>{
                    tmpThis.pxlSocket.sendAutoCam( {type:1, value:null} );
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_followCam );
                
                let jmaMedia_clusterCam=document.createElement( "div" );
                jmaMedia_clusterCam.classList.add("userProfileBox_sendUsername");
                jmaMedia_clusterCam.innerText="Auto Cluster Cam";
                jmaMedia_clusterCam.onclick=()=>{
                    tmpThis.pxlSocket.sendAutoCam( {type:2, value:null} );
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_clusterCam );
                
                
                let jmaMedia_setAtCapacity_true=document.createElement( "div" );
                jmaMedia_setAtCapacity_true.classList.add("userProfileBox_sendUsername");
                jmaMedia_setAtCapacity_true.style.marginTop="25px";
                jmaMedia_setAtCapacity_true.innerText="Set At Capacity - ON";
                jmaMedia_setAtCapacity_true.onclick=()=>{
                    let msg="Set At Capacity? ( Close the Doors )"
                    var conf = confirm(msg);
                    if(conf == true) {
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"atCapacity", value:true } );
                    }
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_setAtCapacity_true );
                
                let jmaMedia_setAtCapacity_false=document.createElement( "div" );
                jmaMedia_setAtCapacity_false.classList.add("userProfileBox_sendUsername");
                jmaMedia_setAtCapacity_false.innerText="Set At Capacity - OFF";
                jmaMedia_setAtCapacity_false.onclick=()=>{
                    let msg="Open Capacity? ( Open the Doors )"
                    var conf = confirm(msg);
                    if(conf == true) {
                        tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"atCapacity", value:false } );
                    }
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_setAtCapacity_false );
                
                let jmaMedia_kickAllUsers=document.createElement( "div" );
                jmaMedia_kickAllUsers.classList.add("userProfileBox_sendUsername");
                jmaMedia_kickAllUsers.style.marginTop="25px";
                jmaMedia_kickAllUsers.innerText="KICK ALL USERS ( WARNING )";
                jmaMedia_kickAllUsers.onclick=()=>{
                    let msg="Are you sure you want to kick all users? (Except Mods/Dev)"
                    var conf = confirm(msg);
                    if(conf == true) {
                        tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"kickAll" } );
                    }
                };
                jmaMediaStreamDiv.appendChild( jmaMedia_kickAllUsers );
            }


            let jmaStatusParentDiv=document.getElementById( "jmaStatusParent" );
            if( !jmaStatusParentDiv ){
                jmaStatusParentDiv=document.createElement( "div" );
                jmaStatusParentDiv.classList.add("jmaSatusStyle");
                //%=
                if(false){
                //%
                jmaStatusParentDiv.style.gridAutoColumns="auto";
                jmaStatusParentDiv.style.justifyContent="center";
                //%=
                }
                //%
                this.jmaBlock.appendChild( jmaStatusParentDiv );
            
            //%=
                // -- -- -- -- -- -- -- -- //
                let jmaStatus=document.createElement( "div" );
                jmaStatus.classList.add("jmaInnerStyle");
                jmaStatusParentDiv.appendChild( jmaStatus );
                this.jmaServerStatusBlock=jmaStatus;
                
                let jmaStatusDisplay=document.createElement( "div" );
                jmaStatusDisplay.classList.add("jmaRowStyle");
                jmaStatusDisplay.style.border="2px solid #ffffff";
                jmaStatusDisplay.style.borderRadius="10px";
                jmaStatusDisplay.style.margin="3px";
                jmaStatusDisplay.style.overflow="auto";
                
                jmaStatus.appendChild( jmaStatusDisplay );
                this.jmaServerStatusDisplay=jmaStatusDisplay;
                
                // --
                
                let jmaStatusButtonParent=document.createElement( "div" );
                jmaStatusButtonParent.classList.add("jmaColStyle");
                jmaStatusButtonParent.style.marginBottom="40px";
                jmaStatusButtonParent.style.gridAutoRows="auto max-content";
                jmaStatus.appendChild( jmaStatusButtonParent );
                
                let jmaStatus_forceLogin=document.createElement( "div" );
                jmaStatus_forceLogin.classList.add("userProfileBox_sendUsername");
                jmaStatus_forceLogin.style.fontSize="90%";
                jmaStatus_forceLogin.innerText="Login";
                jmaStatus_forceLogin.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerForceStatus( {'name':tmpThis.jmaUserName, 'type':"dev"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_forceLogin );
                
                let jmaStatus_userData=document.createElement( "div" );
                jmaStatus_userData.classList.add("userProfileBox_sendUsername");
                jmaStatus_userData.style.fontSize="90%";
                jmaStatus_userData.innerText="User";
                jmaStatus_userData.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"userData"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_userData );
                
                let jmaStatus_verseData=document.createElement( "div" );
                jmaStatus_verseData.classList.add("userProfileBox_sendUsername");
                jmaStatus_verseData.style.fontSize="90%";
                jmaStatus_verseData.innerText="Verse";
                jmaStatus_verseData.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"verseData"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_verseData );
                
                let jmaStatus_exitList=document.createElement( "div" );
                jmaStatus_exitList.classList.add("userProfileBox_sendUsername");
                jmaStatus_exitList.style.fontSize="90%";
                jmaStatus_exitList.innerText="Exit Data";
                jmaStatus_exitList.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"exitList"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_exitList );
                
                let jmaStatus_ioData=document.createElement( "div" );
                jmaStatus_ioData.classList.add("userProfileBox_sendUsername");
                jmaStatus_ioData.style.fontSize="90%";
                jmaStatus_ioData.innerText="IO Data";
                jmaStatus_ioData.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"ioClientData"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_ioData );
                
                let jmaStatus_parse=document.createElement( "div" );
                jmaStatus_parse.classList.add("userProfileBox_sendUsername");
                jmaStatus_parse.style.fontSize="90%";
                jmaStatus_parse.innerText="All User Rooms";
                jmaStatus_parse.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"userRooms"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_parse );
                
                let jmaStatus_runCrossCheck=document.createElement( "div" );
                jmaStatus_runCrossCheck.classList.add("userProfileBox_sendUsername");
                jmaStatus_runCrossCheck.style.fontSize="90%";
                jmaStatus_runCrossCheck.innerText="Run Data Check";
                jmaStatus_runCrossCheck.onclick=()=>{
                    tmpThis.pxlSocket.pxlServerData( {'name':tmpThis.jmaUserName, 'type':"runDataChecks"} );
                };
                jmaStatusButtonParent.appendChild( jmaStatus_runCrossCheck );
                
                let jmaStatus_clearWindow=document.createElement( "div" );
                jmaStatus_clearWindow.classList.add("userProfileBox_sendUsername");
                jmaStatus_clearWindow.style.fontSize="90%";
                jmaStatus_clearWindow.innerText="Clear";
                jmaStatus_clearWindow.onclick=()=>{
                    tmpThis.jmaServerStatusDisplay.innerHTML="";
                };
                jmaStatusButtonParent.appendChild( jmaStatus_clearWindow );
                
            //%
        
                // -- -- -- -- -- -- -- -- //
            
                let jmaChat=document.createElement( "div" );
                jmaChat.classList.add("jmaInnerStyle");
                //%=
                if(false){
                //%
                jmaChat.style.width="100vw";
                //%=
                }
                //%
                jmaStatusParentDiv.appendChild( jmaChat );
                this.jmaModChatBlock = jmaChat;
                
                let jmaMsgDisplay=document.createElement( "div" );
                jmaMsgDisplay.classList.add("jmaRowStyle");
                jmaMsgDisplay.style.border="2px solid #ffffff";
                jmaMsgDisplay.style.borderRadius="10px";
                jmaMsgDisplay.style.margin="3px";
                jmaMsgDisplay.style.overflowY="auto";
                jmaChat.appendChild( jmaMsgDisplay );
                this.jmaModChatDisplay=jmaMsgDisplay;
                
                let jmaChatMessageParent=document.createElement( "div" );
                // jmaChatMessageParent.classList.add("jmaColStyle");
                jmaChatMessageParent.classList.add("gui_chatBoxFieldParentStyle");
                jmaChatMessageParent.style.height="40px";
                jmaChatMessageParent.style.marginBottom="40px";
                jmaChatMessageParent.style.gridAutoRows="auto max-content";
                jmaChat.appendChild( jmaChatMessageParent );
                
                // --
                
                let jmaChatMsgText=document.createElement( "textarea" );
                jmaChatMsgText.setAttribute("placeholder", "Send to Moderators; Shift+Enter to add return");
                jmaChatMessageParent.appendChild( jmaChatMsgText );
                
                let jmaChatSend=document.createElement( "div" );
                // jmaChatSend.classList.add("userProfileBox_sendUsername");
                jmaChatSend.classList.add("userProfileBox_sendUsername");
                jmaChatSend.innerText="Send";
                jmaChatSend.onclick=()=>{
                    let msgValue=jmaChatMsgText.value;
                    this.pxlSocket.pxlServerMsg( {'name':tmpThis.jmaUserName, 'value':msgValue} );
                    jmaChatMsgText.value="";
                };
                jmaChatMessageParent.appendChild( jmaChatSend );
                
                jmaChatMsgText.onkeyup=(e)=>{ 
                    let keyHit=e.key;
                    let shift=e.shiftKey;
                    let ctrl=e.ctrlKey;
                    if( keyHit=="Enter" && ( shift || ctrl )){
                        document.execCommand("insertText", false, "\n");
                        return;
                    }
                    if( keyHit=="Enter" && !shift && !ctrl){
                        jmaChatSend.click();
                    }
                };
                //
            }
            
        //&
        
        if( !this.mobile && !this.pxlAutoCam.enabled ){
            JitsiMeetJS.createLocalTracks( this.localMediaOptions )
                .then( (t)=>{tmpThis.onLocalTracks(t,tmpThis); } )
                .catch(error => {
                    //%=
                    throw error;
                    //%
                });

            if (JitsiMeetJS.mediaDevices.isDeviceChangeAvailable('output')) {
                JitsiMeetJS.mediaDevices.enumerateDevices(devices => {
                    devices.forEach( (d)=>{
                        let curType=d.kind;
                        if(!this.localDevices[ curType ]){
                            this.localDevices[ curType ]=[];
                        }
                        this.localDevices[ curType ].push( d );
                    });
                });
            }
        }
	}
}