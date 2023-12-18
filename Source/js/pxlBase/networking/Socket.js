
export class Socket{
	constructor(pxlUtils, pxlTimer, pxlUser, pxlAvatars, pxlAutoCam){
		this.pxlUtils=pxlUtils;
		this.pxlTimer=pxlTimer;
		this.pxlUser=pxlUser;
		this.pxlAvatars=pxlAvatars;
		this.pxlAutoCam=pxlAutoCam;
		this.pxlGuiDraws=null;
		this.pxlEnv=null;
		this.socket;
		this.socketUserId=null;
		this.socketSends=0;
		this.socketModSend=2; // ## Make Dyanmic
        
        //&=
		this.pxlConnect=null;
		this.sendAbuseRequest=(a)=>{};
		this.pxlServerForceStatus=(a)=>{};
		this.pxlServerMsg=(a)=>{};
		this.pxlServerData=(a)=>{};
		this.jmaFuncEmit=(a)=>{};
		this.sendAbuseCheck=(a)=>{};
		this.sendAvatarSettings=(a)=>{};
		this.sendForceElect=(a)=>{};
		this.openNextVerse=(a)=>{};
        //&
		
		this.sendData=(a,b)=>{};
		this.sendRequest=(a)=>{};
		this.sendCamData=(a)=>{};
        this.requestStreamState=(a)=>{}
        this.sendAutoCam=(a)=>{}
        this.sendUserAlert=(a)=>{}
        this.updateServer=(a)=>{}
		this.requestCluster=(a)=>{};
		this.sendCluster=(a)=>{};
		this.sendChatMsg=(a)=>{};
		this.sendErrorMsg=(a)=>{};
		this.sendPromoClick=(a)=>{};
		this.sendInitialVerse=(a,b,c)=>{};
		this.sendVerseChange=(a)=>{};
		this.sendVerseRequest=(a)=>{};
		this.sendVerifyRequest=(a)=>{};
		this.sendExitedData=(a)=>{};
		this.sendUserSwap=(a,b)=>{};
		this.changeUserName=(a,b)=>{};
		this.sendUserChatDrop=(a)=>{};
	}
	setSocket(io){
		//if( typeof io !== 'undefined' ){}
		let source="";
		//%=
			//source="https://antib0dy.club";
            //source="https://void.antib0dy.club";
			// source=(location+"").includes("localhost") ? "https://localhost:3037" : "https://void.antib0dy.club";
			source=(location+"").includes("localhost") ? "https://localhost:3037" : "https://offgrid.chat";
		//%
        let ref=window.location.href.split("/").pop();
		this.socket = io(source, { query: "ref="+ref });//'https://localhost:3000');//.connect("http://localhost:3000/pxlNav");
		//this.socket = io(source);//'https://localhost:3000');//.connect("http://localhost:3000/pxlNav");
        this.socket.on("connect_error", ()=>{});

		let pxls=this;
		let pxlu=this.pxlUtils;
		let pxlusr=this.pxlUser;
		let pxle=this.pxlEnv;
		let pxla=this.pxlAvatars;
		let pxlac=this.pxlAutoCam;
		let pxlg=this.pxlGuiDraws;
        //&=
        let pxlc=this.pxlConnect;
        //&
		this.socket.on('userUpdate', function(msg){
			pxla.appendTransList(msg);
		});
		this.socket.on('exited', function(msg){
            if( msg.id ){
                pxla.prepUserExit(msg.id);
            }
		});
		this.socket.on('countChange', function(msg){
            if( msg.hasOwnProperty('count') ){
                let curCount=msg.count;
                pxlg.setUserCount( curCount );
                pxla.userCountChange( curCount );
            }
		});
		
		this.socket.on('streamState', function(msg){
            pxle.pxlVideo.streamState(msg);
		});
		this.socket.on('avatarSettings', function(msg){
            pxla.userDataMsg(msg);
		});
		this.socket.on('jmaFunc', function(msg){
            pxlg.jmaFunc(msg.value);
		});
		this.socket.on('verseCount', function(msg){
            pxlg.updateMultiverseListing(msg);
            if( msg.hasOwnProperty('global') ){
                let curCount=msg.global;
                pxlg.setUserCount( curCount );
                pxla.userCountChange( curCount );
            }
		});
		this.socket.on('userData', function(msg){
            if( msg.status ){
                pxla.userDataMsg(msg);
            }else{
                pxls.sendData('error', true);
            }
		});
		this.socket.on('sendCluster', function(msg){
			pxla.sendCluster( );
		});
		this.socket.on('requestCluster', function(msg){
            if( msg.value ){
                pxlac.foundAvatarCluster( msg.value );
            }
		});
		this.socket.on('autoCam', function(msg){
			pxlac.setCamMode( msg );
		});
		this.socket.on('chat', function(msg){
			if( msg.msg ){
				pxlg.displayChatMessage( msg );
			}
		});
		this.socket.on('userSwap', function(msg){
			if( msg.curId && msg.newId ){
				pxla.userChangeId( msg.curId, msg.newId );
			}
		});
		this.socket.on('userNameChange', function(msg){
				pxla.userChangeName( msg.curId, msg.toName );
		});
		this.socket.on('verseJump', function(msg){
			if( msg.idTo && msg.verseTo ){
				pxla.userVerseJump( msg );
			}
		});
		this.socket.on('userElect', function(msg){
			//if( msg.idTo && msg.verseTo ){
				pxla.userElectJump( msg );
			//}
		});
		this.socket.on('verseUserCount', function(msg){
            if( msg.status ){
                pxlg.multiverseList( msg.value, msg.response );
            }else{
                pxls.sendData('error', true);
            }
		});
        
        //&=
		this.socket.on('parseLists', function(msg){
            pxlc.serverDataReply.push(msg);
		});
		this.socket.on('backendMsg', function(msg){
			pxlc.backendMsg(msg);
		});
		this.socket.on('backendData', function(msg){
			pxlc.backendData(msg);
		});
		this.socket.on('userAlert', function(msg){
			pxlc.userAlert(msg);
		});
		this.socket.on('abuse', function(msg){
			pxlc.abuseReport(msg);
		});
		this.sendAbuseRequest=(userId)=>{
			pxls.sendData('abuse', userId);
		};
        
		this.pxlServerForceStatus=(data)=>{
            if(data.hasOwnProperty('name') && data.hasOwnProperty('type')){
                pxls.socket.emit("forceStatus", data);
            }
		};
		this.pxlServerMsg=(data)=>{
            if(data.hasOwnProperty('name') && data.hasOwnProperty('value')){
                pxls.socket.emit("backendMsg", data);
            }
		};
		this.pxlServerData=(data)=>{
			pxls.socket.emit("backendData", data);
		};
        
		this.jmaFuncEmit=(data)=>{
			pxls.socket.emit("jmaFunc", data);
		};
		this.sendAbuseCheck=(data)=>{
			pxls.socket.emit("abuse", data);
		};
		this.sendAvatarSettings=(data)=>{
			pxls.socket.emit("avatarSettings", data);
		};
        /*
		this.sendForceElect=(data)=>{
            if( data.value ){
                pxls.socket.emit("mitosisElect", data);
            }
		};*/
		this.openNextVerse=(data)=>{
            pxls.socket.emit("openNextVerse", data);
		};
        //&
		
		this.sendData=(type,data)=>{
			pxls.socket.emit(type, data);
		};
		this.sendRequest=(data)=>{
			let infoRequest={"type":data};
			pxls.sendData("infoReq", infoRequest);
		};
		this.sendCamData=(userId, force=false)=>{
			pxls.socketSends+=1;
			if( pxls.socketSends >= pxls.socketModSend || force ){
                pxls.socketSends=0;
				pxls.sendData('userUpdate', userId);
			}
		};
        
        this.requestStreamState=(userId)=>{
			pxls.sendData('streamState', userId);
        }
        
        this.sendAutoCam=(data)=>{
			pxls.sendData('autoCam', data);
        }
        
        this.sendUserAlert=(userId)=>{
			pxls.sendData('userAlert', userId);
        }
        
        this.updateServer=(data)=>{
			pxls.sendData('memoryJog', data);
        }
        
		this.requestCluster=(data)=>{
			pxls.sendData('requestCluster', data);
		};
        
		this.sendCluster=(data)=>{
			pxls.sendData('sendCluster', data);
		};
		this.sendChatMsg=(data)=>{
			pxls.sendData('chat', data);
		};
        
		this.sendErrorMsg=(data)=>{
			pxls.sendData('scriptError', data);
		};
        
		this.sendPromoClick=(data)=>{
			pxls.sendData('promoClick', data);
		};
		this.sendInitialVerse=( oldJid, curJid, toVerse )=>{
            let data={oldJid, curJid, toVerse};
			pxls.sendData('userInitialVerse', data);
		};
		this.sendVerseChange=(data)=>{
			pxls.sendData('userVerseChange', data);
		};
		this.sendVerseRequest=(userId)=>{
			pxls.sendData('verseUserCount', userId);
		};
		this.sendVerifyRequest=(userId)=>{
			pxls.sendData('verifyUser', userId);
		};
		this.sendExitedData=(userId)=>{
			pxls.sendData('exited', userId);
		};
		this.sendUserSwap=(curUserId, newUserId)=>{
			pxls.sendData('userSwap', {'curId':curUserId, 'newId':newUserId});
		};
		this.changeUserName=(curUserId, toName)=>{
			pxls.sendData('userNameChange', {'curId':curUserId, 'toName':toName});
		};
		this.sendUserChatDrop=(curUserId)=>{
			if(pxls.socketUserId){
				pxls.sendData('userSwap', {'curId':curUserId, 'newId':pxls.socketUserId});
			}
		};
        
	}
    
	// dateTime is undefined when already in the call
	// Year-Month-DateTHour:Minute:SecondZ ; 2020-08-23T19:23:28Z
	sendChat( targetId, messageData ){
		if(!messageData || messageData.replace(/\s/g,"") == ""){
			return;
		}
		if( !this.pxlTimer.active ){
			this.pxlTimer.step();
		}
		
		if( this.pxlTimer.curMS-this.prevMessage < .8 ){
			this.pxlGuiDraws.chatMessageInput.value=messageData;
			return;
		}
		this.prevMessage=this.pxlTimer.curMS+0;
		
		let strip=this.pxlUtils.cleanString( messageData );
		if(strip == ""){
			return;
		}
		strip=strip.split(";");
		if(strip.length>1 && strip[0]=="P"){
			strip[0]=" P";
		}
		strip.join(";");
		
		targetId = targetId==null ? false : targetId;
        let dt=new Date();
        let send={
            target:targetId,
            msg:strip,
            un:this.pxlUser.jmaUserName,
            jid:this.pxlUser.jmaUserId,
            time:dt.toISOString(),
        };
		this.sendChatMsg(send);
	}

}
