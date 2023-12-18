import * as THREE from "../../../libs/three/build/three.module.js";

export class Avatars{
	constructor(pxlUtils, pxlTimer, pxlUser){
		this.pxlUtils=pxlUtils;
		this.pxlTimer=pxlTimer;
		this.pxlUser=pxlUser;
		this.pxlConnect=null;
		this.pxlGuiDraws=null;
		this.pxlEnv=null;
		this.pxlShaders=null;
		this.pxlSocket=null;
		this.userAvatarSpacialData={};
		this.avatarList={};
		this.avatarVideoFailList=[];
		this.avatarVideoFailCount={};
		this.avatarUpdateList=[];
		this.jPrevCamData=0;
		this.avatarSpacialDataChanged=false;
        this.proximityList=[];
        
        this.runningSpacialUpdates=false;
        this.runningUserDataUpdates=false;
        this.runAllSpacialData=false;
        this.verseUserData={};
        this.verseCountsLocal={};
        this.verseCountsRemote=null;
        
        this.defaultDisplayName="somebody";
		this.avatarToggleDist = 200;
		this.avatarToggleMinDist = 80;
		this.avatarPrevFailCheck=0;
        this.proximityMult=new THREE.Vector2(0,1);
        
		this.failCheckIttr=.15;
		this.colorMult=new THREE.Vector2(.5, 1);
		this.tPixSize=new THREE.Vector2( .5, 1);// [ 16/9, 1 ]
		this.camFallOff=true;
        this.verifyAvatarCheck=false;
        this.verifyAvatarList=[];
		this.noProximityRooms=[];
        //&=
        this.noProximityRooms.push("moderator","dev");//,"dj","performer");
        //&
        this.userProxThresh=14;
        this.curUserCount=0;
        this.prevUserCount=0;
        
        this.userDataCheck={
            active:false, // Check State
            verse:null,
            rate:5, // Time Between Checks
            next:0, // Next Check Time
            curVal:0, // Cur Entry Number
        };
        
        this.exitUserList=[];
        
        this.avatarGeo=null;
        
        // Something may have disconnected
        this.idSwapFailList={};
        this.jidOrphanList=[];
        this.checkingUsers=[];
        
        this.curVerse=null;
        this.usersInRange=0;
        
        this.proximityAudioChecked=false;
		
        this.defaultUserData={
				pos:[0,-100,0],
				rot:[0,0,0,1],
				room:"Default",
				audioZone:0,
				jump:0,
				verse:null,
                //&=
				fps:0,
                //&
        }
        
		this.recordData=false;
		this.recordedData=[];
		this.fakeUserCount=0;
		this.fakeUserKeys=[];
		this.fakeUsers={};
		//%=
		this.fakeUserTrack=[{pos:[198.11,15.52,-1140.85],rot:[0,0.99,0,0.01],room:'Default',jump:0},{pos:[198.03,15.74,-1136.68],rot:[0,0.99,0,0],room:'Default',jump:0},{pos:[198.07,16.1,-1131.46],rot:[0,0.99,0,-0.01],room:'Default',jump:0},{pos:[198.29,16.44,-1125.51],rot:[0,0.99,0,-0.02],room:'Default',jump:0},{pos:[198.66,16.6,-1119],rot:[0,0.99,0,-0.03],room:'Default',jump:0},{pos:[199.19,16.46,-1112.05],rot:[0,0.99,0,-0.04],room:'Default',jump:0},{pos:[199.88,16.16,-1104.15],rot:[0,0.99,0,-0.04],room:'Default',jump:0},{pos:[200.82,15.87,-1094.32],rot:[0,0.99,0,-0.05],room:'Default',jump:0},{pos:[201.79,15.5,-1084.94],rot:[0,0.99,0,-0.05],room:'Default',jump:0},{pos:[202.78,15.5,-1075.69],rot:[0,0.99,0,-0.05],room:'Default',jump:0},{pos:[203.81,15.82,-1066.35],rot:[0,0.99,0,-0.05],room:'Default',jump:0},{pos:[204.93,16.24,-1056.78],rot:[0,0.99,0,-0.06],room:'Default',jump:0},{pos:[206.26,16.54,-1046.91],rot:[0,0.99,0,-0.06],room:'Default',jump:0},{pos:[207.72,16.57,-1036.66],rot:[0,0.99,0.01,-0.07],room:'Default',jump:0},{pos:[209.4,16.31,-1026.01],rot:[0,0.99,0.01,-0.08],room:'Default',jump:0},{pos:[211.26,15.91,-1014.92],rot:[0,0.99,0.01,-0.08],room:'Default',jump:0},{pos:[213.27,15.57,-1003.37],rot:[0,0.99,0.01,-0.08],room:'Default',jump:0},{pos:[215.39,15.46,-991.33],rot:[0,0.99,0.01,-0.08],room:'Default',jump:0},{pos:[217.68,15.63,-978.78],rot:[0,0.99,0.01,-0.09],room:'Default',jump:0},{pos:[220.2,16,-965.73],rot:[0,0.99,0.01,-0.09],room:'Default',jump:0},{pos:[222.82,16.38,-952.13],rot:[0,0.99,0.01,-0.09],room:'Default',jump:0},{pos:[225.4,16.59,-937.93],rot:[0,0.99,0,-0.08],room:'Default',jump:0},{pos:[228.28,16.59,-920.62],rot:[0,0.99,0,-0.07],room:'Default',jump:0},{pos:[231.55,16.55,-899.95],rot:[0,0.99,0,-0.07],room:'Default',jump:0},{pos:[235.19,16.47,-875.74],rot:[0,0.99,0,-0.07],room:'Default',jump:0},{pos:[239.02,16.38,-847.81],rot:[0,0.99,0,-0.06],room:'Default',jump:0},{pos:[242.53,16.28,-815.91],rot:[0,0.99,0,-0.04],room:'Default',jump:0},{pos:[244.81,16.18,-779.83],rot:[0,0.99,0,0],room:'Default',jump:0},{pos:[244,16.08,-739.45],rot:[0,0.99,0,0.03],room:'Default',jump:0},{pos:[239.61,15.56,-699.51],rot:[0,0.99,0.01,0.07],room:'Default',jump:0},{pos:[234.22,15.68,-665.3],rot:[0,0.99,0.01,0.08],room:'Default',jump:0},{pos:[228.96,16.48,-636.62],rot:[0,0.99,0.01,0.09],room:'Default',jump:0},{pos:[223.46,16.51,-610.82],rot:[0,0.99,0.01,0.11],room:'Default',jump:0},{pos:[217.63,16.05,-586.36],rot:[0,0.99,0.01,0.12],room:'Default',jump:0},{pos:[211.13,15.61,-562.44],rot:[0,0.99,0.01,0.13],room:'Default',jump:0},{pos:[204.14,15.46,-538.47],rot:[0,0.98,0.01,0.15],room:'Default',jump:0},{pos:[196.23,15.6,-514.32],rot:[0,0.98,0.01,0.16],room:'Default',jump:0},{pos:[187.63,15.95,-489.73],rot:[0,0.98,0.01,0.17],room:'Default',jump:0},{pos:[178.57,16.33,-464.54],rot:[0,0.98,0.01,0.17],room:'Default',jump:0},{pos:[168.8,16.56,-438.75],rot:[0,0.98,0.01,0.19],room:'Default',jump:0},{pos:[157.63,16.56,-412.61],rot:[0,0.97,0.01,0.2],room:'Default',jump:0},{pos:[145.48,16.33,-385.94],rot:[0,0.97,0,0.21],room:'Default',jump:0},{pos:[132.61,15.97,-358.61],rot:[0,0.97,0,0.22],room:'Default',jump:0},{pos:[119,15.63,-330.62],rot:[0,0.97,0,0.22],room:'Default',jump:0},{pos:[104.5,15.46,-302.02],rot:[0,0.97,0,0.23],room:'Default',jump:0},{pos:[89.27,15.53,-272.73],rot:[0,0.97,-0.01,0.23],room:'Default',jump:0},{pos:[73.26,15.8,-242.75],rot:[0,0.96,-0.01,0.25],room:'Default',jump:0},{pos:[56.04,16.16,-212.3],rot:[0,0.96,-0.01,0.25],room:'Default',jump:0},{pos:[37.96,16.47,-181.2],rot:[0,0.96,-0.01,0.26],room:'Default',jump:0},{pos:[19.23,16.6,-149.28],rot:[0,0.96,-0.01,0.25],room:'Default',jump:0},{pos:[0.61,16.49,-116.11],rot:[0,0.97,0,0.24],room:'Default',jump:0},{pos:[-9.15,15.62,-96.36],rot:[0,0.97,0,0.2],room:'Default',jump:0},{pos:[-13.77,16.59,-84.69],rot:[0,0.98,0,0.17],room:'Default',jump:0},{pos:[-16.02,16.11,-77.97],rot:[0,0.98,0.01,0.14],room:'Default',jump:0},{pos:[-17.16,15.52,-74.13],rot:[0,0.99,0.01,0.13],room:'Default',jump:0},{pos:[-18.27,15.48,-70.11],rot:[0,0.99,0.01,0.12],room:'Default',jump:0},{pos:[-19.21,15.74,-65.82],rot:[0,0.99,0.01,0.08],room:'Default',jump:0},{pos:[-19.95,16.16,-61.27],rot:[0,0.99,0.02,0.06],room:'Default',jump:0},{pos:[-20.55,16.51,-56.49],rot:[0,0.99,0.02,0.05],room:'Default',jump:0},{pos:[-21.05,16.58,-51.49],rot:[0,0.99,0.02,0.04],room:'Default',jump:0},{pos:[-21.43,16.35,-46.26],rot:[0,0.99,0.02,0.02],room:'Default',jump:0},{pos:[-21.49,15.93,-40.79],rot:[0,0.99,0.02,0],room:'Default',jump:0},{pos:[-21.3,15.57,-35.08],rot:[0,0.99,0.02,-0.02],room:'Default',jump:0},{pos:[-20.98,15.46,-29.11],rot:[0,0.99,0.02,-0.02],room:'Default',jump:0},{pos:[-20.59,15.66,-22.88],rot:[0,0.99,0.02,-0.03],room:'Default',jump:0},{pos:[-20.17,16.06,-16.36],rot:[0,0.99,0.02,-0.03],room:'Default',jump:0},{pos:[-19.75,16.49,-10.16],rot:[0,0.99,0.02,-0.04],room:'Default',jump:0},{pos:[-19.23,16.57,-4.92],rot:[0,0.99,0.02,-0.06],room:'Default',jump:0},{pos:[-18.61,16.25,-0.16],rot:[0,0.99,0.02,-0.06],room:'Default',jump:0},{pos:[-17.95,15.79,4.37],rot:[0,0.99,0.02,-0.07],room:'Default',jump:0},{pos:[-17.27,15.49,8.86],rot:[0,0.99,0.03,-0.07],room:'Default',jump:0},{pos:[-16.5,15.51,13.37],rot:[0,0.99,0.03,-0.09],room:'Default',jump:0},{pos:[-15.57,15.84,17.94],rot:[0,0.99,0.03,-0.11],room:'Default',jump:0},{pos:[-14.34,16.27,22.59],rot:[0,0.98,0.03,-0.14],room:'Default',jump:0},{pos:[-12.88,16.56,27.34],rot:[0,0.98,0.02,-0.16],room:'Default',jump:0},{pos:[-11.09,16.55,32.18],rot:[0,0.97,0.01,-0.2],room:'Default',jump:0},{pos:[-8.66,16.24,36.98],rot:[0,0.96,0,-0.26],room:'Default',jump:0},{pos:[-5.56,15.81,41.66],rot:[0,0.94,0,-0.32],room:'Default',jump:0},{pos:[-1.82,15.51,46.16],rot:[0,0.93,0,-0.35],room:'Default',jump:0},{pos:[2.34,15.46,50.63],rot:[0,0.92,0,-0.37],room:'Default',jump:0},{pos:[6.81,15.73,55.21],rot:[0,0.92,0,-0.38],room:'Default',jump:0},{pos:[11.52,16.15,59.95],rot:[0,0.92,0,-0.38],room:'Default',jump:0},{pos:[15.49,16.54,63.88],rot:[0,0.91,0,-0.39],room:'Default',jump:0},{pos:[19.21,16.47,67.19],rot:[0,0.9,0,-0.42],room:'Default',jump:0},{pos:[22.84,16.08,70.13],rot:[0,0.89,0,-0.43],room:'Default',jump:0},{pos:[26.44,15.64,72.92],rot:[0,0.89,0,-0.44],room:'Default',jump:0},{pos:[30.06,15.43,75.69],rot:[0,0.89,0,-0.44],room:'Default',jump:0},{pos:[33.75,15.55,78.48],rot:[0,0.89,0,-0.44],room:'Default',jump:0},{pos:[37.5,15.93,81.38],rot:[0,0.9,0,-0.43],room:'Default',jump:0},{pos:[41.27,16.35,84.51],rot:[0,0.9,0,-0.41],room:'Default',jump:0},{pos:[45.07,16.56,87.87],rot:[0,0.91,0,-0.4],room:'Default',jump:0},{pos:[49.15,16.47,91.66],rot:[0,0.92,0,-0.39],room:'Default',jump:0},{pos:[53.91,16.19,96.36],rot:[0,0.92,0,-0.38],room:'Default',jump:0},{pos:[59.46,15.85,102],rot:[0,0.93,0,-0.36],room:'Default',jump:0},{pos:[65.55,15.57,109.03],rot:[0,0.94,0,-0.32],room:'Default',jump:0},{pos:[71.76,15.43,117.94],rot:[0,0.96,0,-0.26],room:'Default',jump:0},{pos:[77.62,15.47,129.07],rot:[0,0.97,0,-0.21],room:'Default',jump:0},{pos:[82.93,15.64,142.53],rot:[0,0.98,0,-0.15],room:'Default',jump:0},{pos:[87.08,15.89,158.54],rot:[0,0.99,0,-0.1],room:'Default',jump:0},{pos:[89.44,16.52,171.29],rot:[0,0.99,0,-0.07],room:'Default',jump:0},{pos:[91.05,16.43,182.14],rot:[0,0.99,0,-0.06],room:'Default',jump:0},{pos:[92.31,15.95,192.04],rot:[0,0.99,0,-0.05],room:'Default',jump:0},{pos:[93.09,15.53,201.6],rot:[0,0.99,0,-0.01],room:'Default',jump:0},{pos:[93.13,15.43,211.15],rot:[0,0.99,0,0],room:'Default',jump:0},{pos:[92.81,15.66,220.87],rot:[0,0.99,0,0.02],room:'Default',jump:0},{pos:[92.12,16.07,230.86],rot:[0,0.99,0,0.03],room:'Default',jump:0},{pos:[91.24,16.43,241.2],rot:[0,0.99,0,0.04],room:'Default',jump:0},{pos:[90.24,16.56,251.96],rot:[0,0.99,0,0.04],room:'Default',jump:0},{pos:[89.17,16.4,263.17],rot:[0,0.99,0,0.04],room:'Default',jump:0},{pos:[88.03,16.04,274.85],rot:[0,0.99,0,0.04],room:'Default',jump:0},{pos:[86.85,15.65,287.03],rot:[0,0.99,0,0.04],room:'Default',jump:0},{pos:[85.58,15.44,299.73],rot:[0,0.99,0,0.06],room:'Default',jump:0},{pos:[83.1,15.5,312.79],rot:[0,0.98,0,0.15],room:'Default',jump:0},{pos:[77.72,15.81,325.55],rot:[0,0.96,0,0.26],room:'Default',jump:0},{pos:[72.97,16.55,332.03],rot:[0,0.92,0,0.37],room:'Default',jump:0},{pos:[69.52,16.24,335.04],rot:[0,0.88,0,0.47],room:'Default',jump:0},{pos:[67.25,15.65,336.29],rot:[0,0.84,0.01,0.53],room:'Default',jump:0},{pos:[65.9,15.43,336.85],rot:[0,0.82,0.01,0.56],room:'Default',jump:0},{pos:[65.13,15.65,337.13],rot:[0,0.81,0.01,0.57],room:'Default',jump:0},{pos:[64.69,15.81,337.28],rot:[0,0.8,0.01,0.58],room:'Default',jump:0},{pos:[64.44,15.89,337.35],rot:[-0.01,0.78,0.01,0.61],room:'Default',jump:0},{pos:[64.3,15.93,337.38],rot:[-0.01,0.73,0.01,0.67],room:'Default',jump:0},{pos:[64.22,15.95,337.38],rot:[-0.01,0.63,0.01,0.77],room:'Default',jump:0},{pos:[63.13,16.02,337.04],rot:[-0.01,0.56,0.01,0.82],room:'Default',jump:0},{pos:[60.13,16.29,335.6],rot:[-0.01,0.49,0,0.86],room:'Default',jump:0},{pos:[56.26,16.52,333.03],rot:[-0.01,0.44,0,0.89],room:'Default',jump:0},{pos:[51.98,16.55,329.58],rot:[-0.01,0.41,0,0.9],room:'Default',jump:0},{pos:[47.44,16.31,325.48],rot:[-0.01,0.38,0,0.92],room:'Default',jump:0},{pos:[42.9,15.92,320.69],rot:[-0.01,0.34,0,0.93],room:'Default',jump:0},{pos:[38.52,15.56,315.2],rot:[-0.01,0.29,0,0.95],room:'Default',jump:0},{pos:[34.6,15.43,308.91],rot:[-0.01,0.24,0,0.96],room:'Default',jump:0},{pos:[31.88,15.71,303.41],rot:[0,0.18,0,0.98],room:'Default',jump:0},{pos:[30.66,16.21,298.14],rot:[0.01,0.03,0,0.99],room:'Default',jump:0},{pos:[30.63,16.53,293.06],rot:[0.01,-0.03,0,0.99],room:'Default',jump:0},{pos:[31.07,16.5,288.13],rot:[0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[31.7,16.16,283.2],rot:[0.02,-0.06,0,0.99],room:'Default',jump:0},{pos:[32.42,15.73,278.19],rot:[0.02,-0.07,0,0.99],room:'Default',jump:0},{pos:[33.2,15.45,273.03],rot:[0.02,-0.07,0,0.99],room:'Default',jump:0},{pos:[34.08,15.48,267.7],rot:[0.03,-0.08,0,0.99],room:'Default',jump:0},{pos:[35.14,15.8,262.2],rot:[0.03,-0.1,0,0.99],room:'Default',jump:0},{pos:[36.37,16.23,256.48],rot:[0.03,-0.1,0,0.99],room:'Default',jump:0},{pos:[37.72,16.52,250.53],rot:[0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[39.24,16.53,244.32],rot:[0.01,-0.12,0,0.99],room:'Default',jump:0},{pos:[40.98,16.24,237.87],rot:[0.01,-0.13,0,0.99],room:'Default',jump:0},{pos:[42.52,15.71,232.5],rot:[0,-0.14,0,0.99],room:'Default',jump:0},{pos:[43.89,15.43,227.72],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[45.14,15.56,223.21],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[46.42,15.93,218.55],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[47.8,16.33,213.49],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[49.34,16.55,207.84],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[51.08,16.51,201.42],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[53.07,16.26,194.03],rot:[0,-0.12,0,0.99],room:'Default',jump:0},{pos:[55.29,15.92,185.5],rot:[-0.01,-0.12,0,0.99],room:'Default',jump:0},{pos:[57.74,15.61,175.64],rot:[-0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[59.7,15.44,167.53],rot:[-0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[61.42,15.79,160.37],rot:[-0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[63.24,16.19,152.73],rot:[-0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[65.22,16.47,144.12],rot:[-0.02,-0.11,0,0.99],room:'Default',jump:0},{pos:[67.44,16.56,134.21],rot:[-0.02,-0.1,0,0.99],room:'Default',jump:0},{pos:[69.91,16.47,122.75],rot:[-0.02,-0.1,0,0.99],room:'Default',jump:0},{pos:[72.46,16.25,109.47],rot:[-0.02,-0.08,0,0.99],room:'Default',jump:0},{pos:[75,15.97,94.14],rot:[-0.02,-0.07,0,0.99],room:'Default',jump:0},{pos:[77.71,15.72,76.62],rot:[-0.02,-0.07,0,0.99],room:'Default',jump:0},{pos:[80.33,15.43,58.95],rot:[-0.01,-0.07,0,0.99],room:'Default',jump:0},{pos:[82.33,15.77,45.11],rot:[-0.01,-0.07,0,0.99],room:'Default',jump:0},{pos:[84.04,16.35,33.21],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[85.6,16.56,22.21],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[87.11,16.36,11.52],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[88.63,15.95,0.81],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[90.19,15.6,-10.12],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[91.84,15.46,-21.4],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[93.6,15.61,-33.09],rot:[0,-0.07,0,0.99],room:'Default',jump:0},{pos:[95.63,15.98,-45.2],rot:[0,-0.09,0,0.99],room:'Default',jump:0},{pos:[98.17,16.37,-57.74],rot:[0,-0.1,0,0.99],room:'Default',jump:0},{pos:[101.09,16.58,-70.73],rot:[0,-0.11,0,0.99],room:'Default',jump:0},{pos:[104.31,16.52,-84.22],rot:[0,-0.12,0,0.99],room:'Default',jump:0},{pos:[108,16.22,-98.19],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[112.07,15.82,-112.65],rot:[0,-0.14,0,0.99],room:'Default',jump:0},{pos:[116.48,15.52,-127.65],rot:[0,-0.14,0,0.98],room:'Default',jump:0},{pos:[121.28,15.47,-143.19],rot:[0,-0.15,0,0.98],room:'Default',jump:0},{pos:[126.36,15.68,-159.3],rot:[0,-0.15,0,0.98],room:'Default',jump:0},{pos:[131.61,16.05,-176.05],rot:[0,-0.14,0,0.98],room:'Default',jump:0},{pos:[136.71,16.41,-193.54],rot:[0,-0.13,0,0.99],room:'Default',jump:0},{pos:[141.67,16.59,-211.78],rot:[0,-0.12,0,0.99],room:'Default',jump:0},{pos:[146.67,16.51,-230.74],rot:[0,-0.12,0,0.99],room:'Default',jump:0},{pos:[151.65,16.2,-250.45],rot:[0,-0.12,0,0.99],room:'Default',jump:0},{pos:[156.67,15.82,-270.91],rot:[0,-0.11,0,0.99],room:'Default',jump:0},{pos:[161.73,15.53,-292.12],rot:[0,-0.11,0,0.99],room:'Default',jump:0},{pos:[166.57,15.46,-314.17],rot:[0,-0.1,0,0.99],room:'Default',jump:0},{pos:[171.11,15.65,-337.09],rot:[-0.01,-0.09,0,0.99],room:'Default',jump:0},{pos:[175.59,16.01,-360.82],rot:[-0.01,-0.09,0,0.99],room:'Default',jump:0},{pos:[180.04,16.37,-385.39],rot:[-0.01,-0.08,0,0.99],room:'Default',jump:0},{pos:[183.8,16.58,-410.9],rot:[-0.02,-0.06,0,0.99],room:'Default',jump:0},{pos:[187.1,16.55,-437.32],rot:[-0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[190.25,16.29,-464.63],rot:[-0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[193.39,15.92,-492.82],rot:[-0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[196.58,15.59,-521.9],rot:[-0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[199.85,15.46,-551.89],rot:[-0.02,-0.05,0,0.99],room:'Default',jump:0},{pos:[202.58,15.56,-582.86],rot:[-0.02,-0.03,0,0.99],room:'Default',jump:0},{pos:[204.19,15.86,-614.85],rot:[-0.02,-0.01,0,0.99],room:'Default',jump:0},{pos:[204.62,16.32,-633.38],rot:[-0.03,0,0,0.99],room:'Default',jump:0},{pos:[204.45,15.46,-643.93],rot:[-0.03,0.03,0,0.99],room:'Default',jump:0},{pos:[203.85,15.9,-649.87],rot:[-0.03,0.06,0,0.99],room:'Default',jump:0},{pos:[203.32,16.49,-653.19],rot:[-0.03,0.09,0,0.99],room:'Default',jump:0},{pos:[202.95,16.55,-655.05],rot:[-0.03,0.1,0,0.99],room:'Default',jump:0},{pos:[202.71,16.2,-656.08],rot:[-0.04,0.13,0,0.99],room:'Default',jump:0},{pos:[202.53,15.98,-656.65],rot:[-0.04,0.18,0,0.98],room:'Default',jump:0},{pos:[202.39,15.9,-656.96],rot:[-0.03,0.24,0,0.96],room:'Default',jump:0},{pos:[202.29,15.87,-657.12],rot:[-0.03,0.28,0.01,0.95],room:'Default',jump:0},{pos:[201.16,15.54,-658.76],rot:[-0.03,0.3,0.01,0.95],room:'Default',jump:0},{pos:[199.32,15.46,-661.29],rot:[-0.03,0.31,0.01,0.94],room:'Default',jump:0},{pos:[197,15.62,-664.36],rot:[-0.03,0.32,0.01,0.94],room:'Default',jump:0},{pos:[194.29,15.99,-667.76],rot:[-0.03,0.34,0.01,0.93],room:'Default',jump:0},{pos:[191.12,16.38,-671.23],rot:[-0.03,0.37,0.01,0.92],room:'Default',jump:0},{pos:[187.54,16.59,-674.74],rot:[-0.03,0.39,0.01,0.91],room:'Default',jump:0},{pos:[183.67,16.49,-678.33],rot:[-0.03,0.4,0.01,0.91],room:'Default',jump:0},{pos:[179.5,16.13,-681.98],rot:[-0.04,0.42,0.01,0.9],room:'Default',jump:0},{pos:[177.02,15.55,-684.01],rot:[-0.04,0.43,0.01,0.9],room:'Default',jump:0},{pos:[175.59,15.5,-685.15],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[174.77,15.86,-685.79],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[174.31,16.07,-686.15],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[174.05,16.15,-686.36],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.91,16.18,-686.47],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.83,16.2,-686.53],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.78,16.19,-686.57],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.75,16.19,-686.59],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.74,16.19,-686.6],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.73,16.17,-686.61],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.73,16.15,-686.61],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.73,16.13,-686.61],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0},{pos:[173.73,16.11,-686.61],rot:[-0.04,0.43,0.01,0.89],room:'Default',jump:0}];
		this.fakeUserTrackCount=this.fakeUserTrack.length;
		//%
	}
	
	step(){
        if(this.pxlEnv.posted){
            /*if( this.pxlTimer.msRunner.x > 5 && this.verifyAvatarCheck ){//&& this.verifyAvatarList.length>0){
                if( this.pxlTimer.curMS-this.avatarPrevFailCheck > this.failCheckIttr){
                    this.avatarPrevFailCheck=this.pxlTimer.curMS;

                    if( this.verifyAvatarList.length == 0 ){
                        this.verifyAvatarList= Object.keys( this.userAvatarSpacialData );
                    }
                    
                    let curCheck=this.verifyAvatarList.pop();

                    if(curCheck){
                        //if(curCheck.length < 10 && curCheck.length > 18 && !curCheck.includes("tmpUser")){
                            this.pxlSocket.sendVerifyRequest( curCheck );
                        //}
                    }
                    if( this.verifyAvatarList.length == 0 ){
                        this.verifyAvatarCheck=false;
                    }
                }
            }*/
            
            if( !this.runningUserDataUpdates ) {    
                this.checkTransList();//.then( (val)=>{
                //    this.checkUserFailList();
                //});
            }
            this.checkUserFailList();
            
            this.runUserDataCheck(); // Check for mults
            
            if( this.exitUserList.length > 0 ){
                let toExit=this.exitUserList.shift();
                this.exitUserAvatar( toExit ) 
            }
            
            
            // ## Break userUpdates into Pos and Rot separate functions
            if( this.pxlUser.localUserMoved || this.runAllSpacialData ){// || this.pxlUser.localUserTurned ){
                this.updateAvatarSpacialData( [], false, true ); // Update all avatars
                this.avatarUpdateList=[]; // Since all are updated, clear wait list
                
                // I dunno, leave it outside of the forloop for now
                this.avatarSpacialDataChanged = false;
            }else if( this.avatarUpdateList.length>0 ){ //this.avatarSpacialDataChanged ){
                this.updateAvatarSpacialData( this.avatarUpdateList );
                this.avatarSpacialDataChanged = false;
                this.avatarUpdateList=[];
            }
            
            // Name change fail, maybe loads caught too quick for the user, or out of order
            if( this.jidOrphanList.length > 0 ){
                let newId=this.jidOrphanList.pop();
                let oldId=this.idSwapFailList[newId];
                
                let sidCheck=this.userAvatarSpacialData[ oldId ];
                let jidCheck=this.userAvatarSpacialData[ newId ];
                if( !jidCheck && sidCheck){
                    this.userChangeId(oldId, newId);
                }else if( jidCheck && sidCheck ){
                    delete this.idSwapFailList[newId];
                }else{ // Correct or no ones there
                    delete this.idSwapFailList[newId];
                }
            }else{
                let swapDrop=Object.keys( this.idSwapFailList );
                if( swapDrop.length>0 ){
                    let newId=swapDrop.pop();
                    let oldId=this.idSwapFailList[newId];
                    if(oldId){
                        let newCheck=this.userAvatarSpacialData.hasOwnProperty( newId );
                        let oldCheck=this.userAvatarSpacialData.hasOwnProperty( oldId );
                        if( !newCheck && oldCheck){
                            this.userChangeId( oldId, newId );
                        }else if( newCheck && oldCheck ){
                            delete this.idSwapFailList[newId];
                            
                            this.prepUserExit( oldId );
                        }else{ // Correct or no ones there
                            delete this.idSwapFailList[newId];
                        }
                    }
                }
            }
            
            if(this.pxlConnect.jmaUserCountChange==true){
                this.checkUserConnection();
            }
            //%=
            this.fakeUserStep();
            //%
        }
    }
    
// -- -- -- -- -- -- -- -- -- -- //
	
    checkUserFailList(){
        let failListLength = this.avatarVideoFailList.length;
        if( failListLength>0 ){
            if( this.pxlEnv.pxlDevice.mobile ){
                this.avatarVideoFailList=[];
            }
            if( this.pxlTimer.curMS-this.avatarPrevFailCheck > this.failCheckIttr){
                for( let x=0; x< Math.min( failListLength, 3 ); ++x){
                    let curCheck=this.avatarVideoFailList.shift();
                    //this.pxlSocket.sendVerifyRequest( curCheck );
                    
                    /*let settingsCheck=this.checkUserVideoStatus( curCheck );
                    if(settingsCheck){
                    }*/
                    if( curCheck ){
                        if( curCheck.includes("tmpUser") ){ return; }
                        this.avatarPrevFailCheck=this.pxlTimer.curMS;
                        
                        this.checkVideoStatus( curCheck ).then( (successCheck)=>{
                            if(successCheck){
                                this.updateAvatarSpacialData([curCheck], false);
                            }else{
                                if( !this.avatarVideoFailCount.hasOwnProperty(curCheck) ){
                                    this.avatarVideoFailCount[curCheck]=0;
                                }else{
                                    this.avatarVideoFailCount[curCheck]+=1;
                                }
                                
                                if(this.avatarVideoFailCount[curCheck]<1){
                                    if( !this.avatarVideoFailList.includes( curCheck ) ){
                                        this.avatarVideoFailList.push( curCheck );
                                    }
                                }else{
                                    delete this.avatarVideoFailCount[curCheck];
                                    this.pxlSocket.sendVerifyRequest( curCheck );
                                }
                            }
                        });
                    }
                }
            }
        }
    }
    
    runUserDataCheck(){
        if( this.userDataCheck.active ){
            if( this.userDataCheck.next > this.pxlTimer.curMS ){
                this.userDataCheck.next= this.pxlTimer.curMS + this.userDataCheck.rate;
                let checkRoom=this.pxlConnect.roomId;
                if( checkRoom != this.userDataCheck.checkRoom ){
                    this.resetUserDataCheck();
                }
                this.pxlEnv.roomSceneList[checkRoom].userAvatarGroup
                //this.userDataCheck.curVal
                //this.userDataCheck.curVal+
            }
        };
    }
    resetUserDataCheck(){
        this.userDataCheck.active=true;
        this.userDataCheck.verse=this.pxlConnect.roomId;
        this.userDataCheck.next= this.pxlTimer.curMS + this.userDataCheck.rate;
        this.userDataCheck.curVal=0;
    }
    
	checkUserVideoStatus(curId){
        if(this.userAvatarSpacialData[curId]){
            if(this.userAvatarSpacialData[curId].vidObject){
                let curAvatar=this.userAvatarSpacialData[curId];
                let vidObj=curAvatar.vidObject;
                
                let setGeoVis= !(curAvatar.vidExists && !vidObj.paused);
                
                if( vidObj && !curAvatar.texture ){
                    this.userAvatarSpacialData[curId].texture = this.pxlUtils.getVideoTexture( vidObj );
                    this.userAvatarSpacialData[curId].vidExists=true;
                    this.userAvatarSpacialData[curId].vidEnabled= !curAvatar.videoObject.paused;
                    setGeoVis=curAvatar.videoObject.paused;
                }
                
                //let vidMesh = this.userAvatarSpacialData[curId].videoMesh;
                curAvatar.geoStandInActive = setGeoVis; // default to Avatar Stand In
                //vidMesh.material.uniforms.videoFeed.value = this.userAvatarSpacialData[id].texture;
            }
        }
	}

	userSetVideoStatus( curId, active, jmaData ){
		if( this.userAvatarSpacialData[curId] ){
            let curAvatar=this.userAvatarSpacialData[curId];
            if( curAvatar.verse == this.pxlConnect.roomId){
                //jmaData=this.pxlConnect.remoteTracks[ curId ];
                
                //active= active && jmaData.videoTexture && jmaData.videoPlaying;

                active=!jmaData.video.muted;
                this.userAvatarSpacialData[curId].vidExists=true;
                this.userAvatarSpacialData[curId].vidEnabled=active;
                //this.userAvatarSpacialData[curId].webCamBlend.x= ~~active;
                
                if(curAvatar.videoMtl.uniforms){
                    curAvatar.videoMtl.uniforms.videoActive.value= ~~active;
                    //curAvatar.videoMtl.uniforms.videoFeed.value=jmaData.videoTexture;
                }
                
                //this.userAvatarSpacialData[curId].vidEnabled = active;//!this.userAvatarSpacialData[curId].videoObject.paused;
                this.setWebcamAvatarVisibility( curId, active, true );
                //this.avatarUpdateList.push(curId);
                //this.avatarSpacialDataChanged = true;
                this.updateAvatarSpacialData([curId], false, true);
            }
		}
        // Only time this should hit is if the user changed verses
        // Meaning there should be a id swap event
        /*else{
            if(jmaData.videoTexture && jmaData.videoPlaying && jmaData.audioObject){
                let genData={};
                genData[curId]=this.defaultUserData;
                genData[curId].verse=this.pxlConnect.roomId;
                this.setAvatarPositions( genData );
            }
        }*/
	}
	userDataMsg(msg=null){
		if(msg.status){
			let val=msg.value;
            switch( val.type ){
                case "tmpId":
                    if(this.pxlUser.jmaUserId==null && !this.pxlUser.jmaTempUserIdActive ){
                        this.pxlSocket.socketUserId=val.value;
                        this.pxlUser.jmaUserId=val.value;
                        this.pxlUser.jitsiUserId=val.value;
                        this.pxlUser.jmaTempUserIdActive=true;
                    }
                    break;
                    
                    
                case "logIn":
                    this.pxlConnect.checkCreds(val);
                    break;
                    
                case "loadRoom":
                    if (val.hasOwnProperty('loadRoom')){
                        this.pxlEnv.setBootRoom( val.loadRoom );
                    }
                    
                    if( this.pxlUser.welcome == true && val.hasOwnProperty('welcome')){
                        this.userDataUpdateServer();
                    }else{
                        if(val.hasOwnProperty('proxAudio')){
                            this.proximityAudioChecked=true;
                            this.camFallOff=val.proxAudio;
                            this.updateAvatarSpacialData([],false,true);
                        }
                        if(val.hasOwnProperty('welcome')){
                            this.pxlUser.welcome=val.welcome;
                        }
                        //&=
                        if(false){
                        //&
                            if(val.hasOwnProperty('close')){
                                this.pxlGuiDraws.close=val.close;
                                if( val.close==false ){ // eslint-disable-next-line
                                    window.stop();
                                    this.pxlSocket.socket.disconnect();
                                    window.location.href="../exit";
                                }
                            }
                        //&=
                        }
                        //&
                        if(this.pxlEnv.pxlVideo && val.hasOwnProperty('streamState')){
                            this.pxlEnv.pxlVideo.streamState(val.streamState);
                        }
                        if( val.verse ){
                            this.curVerse=val.verse;
                            this.pxlConnect.loadVerse(this.curVerse);
                        }
                    }
                    break;
                    
                case "userTransList":
                    if(val.value){
                        let {id, verse, trans}= val.value;
                        if( trans[ verse ] ){
                            delete trans[ verse ][ id ];
                        }
                        this.appendVerseData( trans );
                    }
                    break;
                    
                case "verifyClientAvatars":
                    if(val.value){
                        let randGhostCheck=Math.floor( Math.random()*20000 );
                        setTimeout( ()=>{
                            this.verifyAvatarCheck=true;
                        }, randGhostCheck );
                    }
                    break;
                    
                case "userExitList":
                    if(Array.isArray(val.value)){
                        this.prepUserExit( val.value );
                    }
                    break;
                    
                case "userFailList":
                    //if( !this.pxlEnv.pxlDevice.mobile ){
                        if( !this.avatarVideoFailList.includes( val.value ) ){
                            this.avatarVideoFailList.push( val.value );
                        }
                    //}
                    break;
                    
                case "avatarSettings":
                    if(val.hasOwnProperty('proxAudio')){
                        this.proximityAudioChecked=true;
                        this.camFallOff=val.proxAudio;
                    }
                    this.updateAvatarSpacialData([],false,true);
                    break;
                    
                default:
                    break;
            }
            
            
		}
	}
	userDataRequest(type){
		if(type=="tmpId"){
            this.pxlConnect.logInRequest+=1;
			if(this.pxlUser.jmaUserId==null && !this.pxlUser.jmaTempUserIdActive ){
				this.pxlSocket.sendRequest("tmpId");
			}
		}else{
			this.pxlSocket.sendRequest(type);
		}
	}
	userChangeId(curId, newId){
        delete this.verseUserData[ curId ];
        if( this.userAvatarSpacialData[ curId ] && this.userAvatarSpacialData[ newId ] ){
            this.prepUserExit( curId );
            return;
        }else if( !this.userAvatarSpacialData[ curId ] ){
            return;
        }else if( curId != newId ){
            if( this.userAvatarSpacialData[ curId ] ){
                // ## User should exist, make sure their video is simply swapped
                //      The fail list seems kinda heavy, realistically
                this.userAvatarSpacialData[ newId ]={};
                Object.assign( this.userAvatarSpacialData[ newId ], this.userAvatarSpacialData[ curId ] );
                delete this.userAvatarSpacialData[ curId ];
                
                this.userAvatarSpacialData[ newId ].avatarGroup.name= newId;
                
                let failList=this.avatarVideoFailList.indexOf(curId);
                if( failList>-1){
                    this.avatarVideoFailList.splice( failList, 1);
                }
                
                if( !this.avatarVideoFailList.includes( newId ) ){
                    this.avatarVideoFailList.push( newId );
                }
                this.prepUserExit( curId );
            }else{
                this.idSwapFailList[newId]=curId;
                try{
                    if(curId.length > 10 && newId.length < 10 ){
                        this.jidOrphanList.push(newId);
                    }
                }catch(err){}
            }
            
            //this.pxlGuiDraws.userControlsSwap( curId, newId );
        }
	}
    userChangeName(curId, toName){
		let curAvatar=this.userAvatarSpacialData[ curId ];
        if( curAvatar ){
            name=this.pxlUtils.cleanBasic(toName);
            curAvatar.displayName=name;
            if(curAvatar.userNameGui){
                curAvatar.userNameGui.innerText=name;
                this.pxlGuiDraws.setUserControlVis(curId);
            }
        }
    }
    getAvatarData( curId ){
		let curAvatar=this.userAvatarSpacialData[ curId ];
        return curAvatar;
    }
    
    userDataChange(curId,type){
		if(type=="video"){
			let curAvatar=this.userAvatarSpacialData[ curId ];
			if(curAvatar){
				if( !curAvatar.vidExists && !this.pxlEnv.pxlDevice.mobile){
                    if( !this.avatarVideoFailList.includes( curId ) ){
                        this.avatarVideoFailList.push( curId );
                    }
				}
			}
		}
	}
	/*userLeftMonitor(checkId){
        console.log("user left monitor");
		setTimeout( ()=>{
			if( this.userAvatarSpacialData[ checkId ] ){
                this.prepUserExit( checkId );
			}
		}, 1000);
	}*/
    
    // Poor server... must have restarted suddenly
    userDataUpdateServer(){
        let ret={};
        ret['id']=this.pxlUser.jitsiUserId;
        ret['verse']=this.pxlConnect.roomId;
        ret['room']=this.pxlEnv.currentRoom;
        ret['fps']=parseInt(1/this.pxlTimer.msRunner.y);
        ret['audioZone']=this.pxlEnv.currentAudioZone;
        
        this.pxlSocket.updateServer(ret);
        //this.pxlEnv.pxlCamera.jogServerMemory();
        this.pxlEnv.pxlCamera.camUpdated=true;
        //this.pxlEnv.pxlCamera.jogServerMemory();
    }
    
    delayUserCheck(){ // Let the videos populate.. I guess
        setTimeout( ()=>{
            this.userDataRequest("userTransList");
            //this.userDataRequest("userExitList");
        }, 2000);        
    }
    
    userCountChange( curCount=null ){
		if( Number.isInteger( curCount ) ){
            this.curUserCount=curCount;
            //%=
            this.curUserCount+=this.fakeUserCount;
            //%
            
            let maxCount=Math.max( this.curUserCount, this.prevUserCount );
            let minCount=Math.min( this.curUserCount, this.prevUserCount );
            // ## Hmmmm, don't think this is needed
            /*let forceCheckAll= (this.prevUserCount != this.curUserCount) && 
                    ( maxCount >= this.curUserCount ) && ( minCount < this.curUserCount );
            
            if( forceCheckAll ){
                this.updateAvatarSpacialData( [], false, true );
            }*/
            this.prevUserCount=curCount;
        }
    }
    
    userElectJump(toVerse){
        if(toVerse!=""){
            if( toVerse != this.pxlConnect.roomId ){
                let delayJump=parseInt((Math.random()*.5)*5000);
                setTimeout( ()=>{
                    this.updateAvatarSpacialData( [], false, true );
                    if(this.usersInRange<2){
                        this.pxlGuiDraws.serverBalancingInit( toVerse );
                    }
                }, delayJump);
            }
        }
    }
    sendCluster(){
        if( this.proximityList.length > 0 ){
            let prox=[...this.proximityList];
            prox.push( this.pxlUser.jmaUserId );
            let data={list:this.proximityList};
            this.pxlSocket.sendCluster( data );
        }
    }
	
    async appendVerseData( verseData=null ){
        if( verseData ){
            let curVerse=this.pxlConnect.roomId;
            let curJid=this.pxlConnect.jmaUserId;
            
            let verseKeys=Object.keys( verseData );
            let curVerseEl=verseKeys.indexOf( curVerse );
            
            let varifiedData={};
            let failCheck=[];
            
            if( curVerseEl > -1 ){
                verseKeys.splice( curVerseEl, 1 );
                let curVerseKeys= Object.keys( verseData[curVerse] );
                curVerseKeys.forEach( (u)=>{
                    let curData=verseData[curVerse][u];
                    if( curData.pos != null && u != curJid ){
                        varifiedData[ u ]={};
                        Object.assign( varifiedData[ u ], curData );
                        failCheck.push( u );
                    }
                });
            }
            
            verseKeys.forEach( (v)=>{
                let curVerseKeys= Object.keys( verseData[v] );
                curVerseKeys.forEach( (u)=>{
                    let curData=verseData[v][u];
                    if( curData.pos != null && u != curJid ){
                        varifiedData[ u ]={};
                        Object.assign( varifiedData[ u ], curData );
                        failCheck.push( u );
                    }
                });
            });
            
            Object.assign( this.verseUserData, varifiedData );
            if( failCheck.length > 0 ){
                this.verifyAvatarList.push( ...failCheck );
                this.verifyAvatarCheck=true;
            }
            verseData={};
        }
    }
    appendTransList( userList=null ){
        if( userList != null ){
            Object.assign( this.verseUserData, userList );
        }
    }
    
    async checkTransList( userList=null, verify=false ){
        return new Promise( (resolve, reject)=>{
                this.runningUserDataUpdates=true;
                let userIds=Object.keys( this.verseUserData );

                if(userIds.length>0){
                    let genList={};
                    let valid=false;
                    let validCount=0;
                    let limit=10;
                    for( let x=0; x<userIds.length; ++x){
                        if( userIds[x] == this.pxlConnect.jmaUserId ){
                            delete this.verseUserData[ userIds[x] ]
                            continue;
                        }
                        let curCheck = this.verseUserData[ userIds[x] ];
                        
                        if( !curCheck.verse || !curCheck.pos ){
                            delete this.verseUserData[ userIds[x] ]
                            continue;
                        }
                        
                        genList[ userIds[x] ] = {};
                        Object.assign( genList[ userIds[x] ], curCheck);
                        valid=true;
                        validCount+=1;
                        
                        if( validCount >= limit ){
                            break;
                        }
                    }
                    
                    if(valid){
                        let aPosRet=this.setAvatarPositions( genList );
                        let avatarKeys= Object.keys( genList );
                        avatarKeys.forEach( (u)=>{
                            if( aPosRet[u] ){
                                if( aPosRet[u] == "false" ){
                                    if( !this.avatarVideoFailList.includes( u ) ){
                                        this.avatarVideoFailList.push( u );
                                    }
                                }else if( aPosRet[u] == "fail" ){
                                    return;
                                }
                            }
                            delete this.verseUserData[ u ]
                        });
                        //let avatarKeys= Object.keys( aPosRet ) );
                    }
                }
                resolve( true );
            }).catch( (err)=>{
                console.error( err );
            }).then( ()=>{
                this.runningUserDataUpdates=false;
            });
       // this.updateAvatarSpacialData( this.avatarUpdateList );
        //this.avatarSpacialDataChanged = false;
    }
                    
                    
    async setUserAudioDevice( curId ){
        if(this.userAvatarSpacialData[curId]){
			this.userAvatarSpacialData[curId].audioEnabled = !this.pxlConnect.remoteTracks[curId].audioObject.muted;
            this.userAvatarSpacialData[curId].audio = this.pxlConnect.remoteTracks[curId].audioObject;
            this.userAvatarSpacialData[curId].audio.volume = this.userAvatarSpacialData[curId].proximityBlender;
        }
    }
    async setUserAudioLevel( curId, curVol=0, curPan=0){
        if(this.userAvatarSpacialData[curId].audioEnabled){
            let audioCtx=false;
            if( this.pxlConnect.jmaActiveBinaural[curId] ){
                audioCtx=true;
            }
            if(audioCtx){
                this.pxlConnect.jmaActiveBinaural[curId].gainer.gain.value=curVol;
                this.pxlConnect.jmaActiveBinaural[curId].panner.pan.value=curPan;
            }else{
                if( this.userAvatarSpacialData[curId].audio ){
                    this.userAvatarSpacialData[curId].audio.volume=curVol;
                }else{
                    //this.failList
                    this.verifyAvatarCheck=true;
                    this.verifyAvatarList.push( curId );
                }
            }
        }
    }

    setAvatarProximityChange( curId, active, changeValid=true ){
        /*let curAvatar=curId;
        if( typeof(curAvatar) != "object" ){
            curAvatar = this.userAvatarSpacialData[curId];
            if( !curAvatar ){
                return false;
            }
        }*/
        this.pxlGuiDraws.setUserControlVis( curId, active );
        if( changeValid ){
            //curAvatar.geoStandInActive = !active;
            // Pause video for performance, if not being used in Environment
            
            if( active ){
                this.pxlEnv.userPlayMedia( curId );
            }else{
                this.pxlEnv.userPauseMedia( curId );
            }
        }
    }

    setWebcamAvatarVisibility( curId, active, force=false ){
        let curAvatar=curId;
        if( typeof(curAvatar) != "object" ){
            curAvatar = this.userAvatarSpacialData[curId];
            if( !curAvatar ){
                return false;
            }
        }
        if( active != curAvatar.geoStandInActive && !force){
            return false;
        }
        let userRemoteData=null;
        if( curAvatar.fake == false ){
            userRemoteData=this.pxlConnect.remoteTracks[curId];
            if( !userRemoteData ){
                active=false;
                force=true;
            }else{
                active = active && userRemoteData.videoPlaying;
            }
        }
        if( userRemoteData ){
            if( curAvatar.vidObject && userRemoteData.video){
                curAvatar.vidExists = true;
                curAvatar.vidEnabled = !userRemoteData.video.muted;
            }else{
                curAvatar.vidExists = false;
                //curAvatar.vidEnabled=false;
            }
            
            if( active ){
                active = curAvatar.vidExists && !userRemoteData.video.muted && curAvatar.verse==this.pxlConnect.roomId;
            }
        }
        if( active == curAvatar.geoStandInActive || force ){
            if(this.camFallOff){
                curAvatar.videoMesh.visible = active;
                curAvatar.geoStandInMesh.visible = !active;
            }else{
                curAvatar.videoMesh.visible = curAvatar.vidEnabled;
                curAvatar.geoStandInMesh.visible = !curAvatar.vidEnabled;
            }
            
            curAvatar.geoStandInActive = !active;
            // Pause video for performance, if not being used in Environment
            
            if( active ){
                this.pxlEnv.userPlayMedia( curId );
            }else{
                this.pxlEnv.userPauseMedia( curId );
            }
        }
    }


	// Primary class for distance based functions/settings
	updateAvatarSpacialData(userIds=[], setFullAudio=false, forceCheckAll=false ){
		//Check distance between camera and other avatars
        setFullAudio=false;
        if( this.runningSpacialUpdates ){
            if( userIds.length==0 || forceCheckAll ){
                this.runAllSpacialData=true;
                //this.avatarUpdateList.push( ...userIds );
                return false;
            }
        }
        return new Promise( (resolve, reject)=>{
            this.runAllSpacialData=false;
            if( userIds.length==0 || forceCheckAll ){
                userIds=Object.keys(this.userAvatarSpacialData);
                forceCheckAll=true;
                this.usersInRange=0;
                this.proximityList=[];
                this.avatarUpdateList=[];
                
                this.runningSpacialUpdates=true;
                
            }
            //let avatarKeys=Object.keys(this.avatarList);
            let curRoom=this.pxlEnv.currentRoom;
            //this.camFallOff=false;
            let proximityOff= this.noProximityRooms.includes( this.pxlConnect.roomId ) || this.camFallOff;
            if( proximityOff ){//|| (!this.camFallOff || this.curUserCount < this.userProxThresh)){
                let curVol=0;
                let curPan=0;
                for(let x=0; x<userIds.length; ++x){
                    let curId=userIds[x];
                    
                    //this.checkUserVideoStatus(curId);
                    let curAvatar = this.userAvatarSpacialData[curId];
                    if(!curAvatar){
                        continue;
                    }
                    if( !curAvatar.vidObject ){
                        curAvatar.vidExists=false;
                    }
                    
                    //curAvatar.avatarGroup.visible=true;
                    let vidActive=curAvatar.vidEnabled && curAvatar.vidExists && curAvatar.room == this.pxlEnv.currentRoom;
                    
                    
                    //if(this.userAvatarSpacialData[curId].audio){ this.userAvatarSpacialData[curId].audio.volume=1; }
                    //this.userAvatarSpacialData[curId].webCamBlend.x=0; // updates all avatar avatarBlend uniform values
                    
                    if( false && this.pxlConnect.jmaActiveBinaural[curId] ){
                        let relPos=curAvatar.avatarGroup.position.clone().sub( this.pxlEnv.pxlCamera.cameraPos );
                        let curCross=relPos.normalize().dot( this.pxlEnv.pxlCamera.cameraCross );
                        curPan=curCross;
                        curVol=1;
                    }
                    /* //if(!this.camFallOff){
                        if(curAvatar.room == this.pxlEnv.currentRoom){
                            let relPos=curAvatar.avatarGroup.position.clone().sub( this.pxlEnv.pxlCamera.cameraPos );
                            let dist=relPos.length();
                            curAvatar.distance=dist;
                            curAvatar.proximityStatus = dist < this.avatarToggleDist;
                            
                            if(dist > this.avatarToggleDist){
                                vidActive=false;
                            }
                        }else{
                            vidActive=false;
                            curAvatar.proximityStatus=false;
                        }
                    //} */
                    let userControlVis= this.pxlConnect.roomId == curAvatar.verse;
                    //if( curAvatar.proximityStatus != userControlVis ){
                    //    curAvatar.proximityStatus = userControlVis;
                        this.setAvatarProximityChange( curId, userControlVis, true );
                    //}
                    this.setWebcamAvatarVisibility( curId, vidActive );
                    this.setUserAudioLevel( curId, 1, 0 );
                }
            }else{
                let curVol=0;
                let curPan=0;
                let distStatus=false;
                for(let x=0; x<userIds.length; ++x){
                    
                    let audioCtx=false;
                    let curId=userIds[x];
                    
                    // ## remove this
                    if( curId.includes("tmp") ){continue;}
                    
                    //this.checkUserVideoStatus(curId);
                    let curAvatar = this.userAvatarSpacialData[curId];
                    if(!curAvatar){
                        continue;
                    }
                    
                    let relPos=curAvatar.avatarGroup.position.clone().sub( this.pxlEnv.pxlCamera.cameraPos );
                    let dist=relPos.length();
                    //curAvatar.avatarGroup.visible=true;
                    
                    let tmpProxStatus=dist < this.avatarToggleDist;
                    if(forceCheckAll && tmpProxStatus){
                        this.usersInRange+=1;
                    }
                    
                    let proxStatusChanged=tmpProxStatus != curAvatar.proximityStatus;
                    if( proxStatusChanged || forceCheckAll ){
                        this.userAvatarSpacialData[curId].proximityStatus = tmpProxStatus;
                        this.setAvatarProximityChange( curId, tmpProxStatus, proxStatusChanged );
                    }
                    
                    this.setProximityListEntry( curId, tmpProxStatus );
                        
                    if( !curAvatar.vidObject ){
                        this.userAvatarSpacialData[curId].vidExists=false;
                    }
                    
                    let audioEnabled = curAvatar.audioEnabled;
                    
                    
                    if(curAvatar.room == this.pxlEnv.currentRoom && ( curAvatar.vidExists || audioEnabled ) ){   
                        curAvatar.avatarGroup.visible= ( (curAvatar.audioZone == 2 || curAvatar.audioZone == null) && this.pxlEnv.currentAudioZone == 2) ? false : true;

                        distStatus=false;
                        
                        
                        this.userAvatarSpacialData[curId].distance=dist;
                        if( curAvatar.vidExists ){
                            this.setWebcamAvatarVisibility( curId, true );
                            /*
                            let vidEnabled = curAvatar.vidEnabled;
                            let geoStandInActive = curAvatar.geoStandInActive;
                            
                            if( geoStandInActive ){
                                continue;
                            }
                            
                            if( tmpProxStatus ) {
                                
                                //let distPerc= Math.min(1, dist/this.avatarToggleDist)*.9+.1;
                                //this.userAvatarSpacialData[curId].webCamBlend.x=distPerc;
                            }else{
                                this.setWebcamAvatarVisibility( curId, false );
                            }
                            */
                        }else{ // Video is inactive on the user's end -or- disabled on local end
                            this.setWebcamAvatarVisibility( curId, false );
                        }
                        
                        
                        if( setFullAudio ){
                            curVol=1;
                        }else{
                            curVol=(dist-this.avatarToggleMinDist) / (this.avatarToggleDist-this.avatarToggleMinDist);
                            curVol=1-Math.min(1, Math.max(0, curVol ) );
                            curVol*=curVol;
                        }
                        
                        /*if( false ){//this.pxlConnect.jmaActiveBinaural[curId] ){
                            audioCtx=true;
                            let curCross=relPos.normalize().dot( this.pxlEnv.pxlCamera.cameraCross );
                            curPan=curCross;
                        }*/
                        let audioMuted = curAvatar.audioMuted;
                        if( audioEnabled && !audioMuted && curAvatar.proximityBlender!=curVol ){
                            this.setUserAudioLevel( curId, curVol, curPan );
                        }
                        
                        this.userAvatarSpacialData[curId].proximityBlender=curVol;
                        
                    }else{
                // ## Split this out to only check other rooms one, so not to keep setting non existant users
                        //curAvatar.avatarGroup.visible=false;
                        this.userAvatarSpacialData[curId].proximityStatus=false;
                        
                        this.setWebcamAvatarVisibility( curId, false );
                        this.setUserAudioLevel( curId, 0, 0 );
                    }
                }
            }

            // Stand in code for spacial audio

            /*if(userIds.length==0){
                userIds=Object.keys(this.userAvatarSpacialData);
            }
            let avatarKeys=Object.keys(this.avatarList);
            for(let x=0; x<userIds.length; ++x){
                let curId=userIds[x];
            }*/
            this.avatarSpacialDataChanged=false;
            resolve(true);
        }).then( (resolve)=>{
            this.runningSpacialUpdates=false;
        }).catch( (err)=>{
                    console.log( err );
        });
	}

    async setProximityListEntry( curId, active=false){
        let inc=this.proximityList.indexOf( curId );
        if( active == true && inc<0 ){
            if( this.userAvatarSpacialData[curId] ){
                this.proximityList.push(curId);
            }
        }else if( inc>-1 ){
            this.proximityList.splice( inc, 1 );
        }
    }


	///////////////////////////////////////////////
	// userDataMsg is formatted as a dictionary sent over WebSocket from NodeJS -
	//  {
	//     jitsiId : [ [ userPos.x, userPos.y, userPos.z ], [ userRotation.x, userRotation.y, userRotation.z, userRotation.w ] ],
	//     ...	
	//  }
	
	// Stand in avatar should be loaded and added to a group containing webcam plane and stand in
	// Webcam plane & Stand In avatar should toggle visibility opposite of each other, toggle visibility based on distance in updateAvatarSpacialData()
	//
	// Create THREE.Group
	// Add existing webcam object to group
	// Add your geometry avatar
	// Add the group and your geo to the new userAvatarSpacialData[id] dict entry
	// Set up visibility as mentioned above
	setAvatarPositions(userDataMsg, vidTexture=null){
        //%=
		if(this.recordData){
			this.recordedData.push( userDataMsg );
		}
        //%
		let userDataKeys=Object.keys(userDataMsg);
        let ret={};

		for(let x=0; x<userDataKeys.length;++x){
			let id=userDataKeys[x];
			if( id!=this.pxlUser.jitsiUserId && id!="null" && id){// && this.pxlUser.jitsiUserId!=null){

                if( (!this.pxlEnv.posted && !this.avatarVideoFailList.includes(id)) || this.avatarGeo==null ){
                    this.avatarVideoFailList.push( id );
                    ret[id]="fail";
                    continue;
                }
				let tmpStatus=vidTexture ? true : false;
                
				let userPos=userDataMsg[id].pos;
				let userRot=userDataMsg[id].rot;
				let userName=userDataMsg[id].name;
				let userRoom=userDataMsg[id].room;
				let userAudioZone=userDataMsg[id].zone;
				let userJump=userDataMsg[id].jump;
				let userVerse=userDataMsg[id].verse;

                if( !userVerse ){
                    ret[id]="err";
                    continue;
                }
                //&=
				let userFPS=userDataMsg[id].fps;
                this.pxlConnect.onUpdateFPS( id, userFPS  );
                //&
                
				let userIds=Object.keys(this.userAvatarSpacialData);
				if(!userIds.includes(id)){
					// Find user Jitsi object
					let vParent=document.getElementById(id+"_mediaParent");
					if(!vParent){
						vParent=document.getElementById("participant_"+id);
					}
					let curVid, curAudio=null;
					let vidSet=false; // For video meta data changes
					let vidObj=null;
					let audioObject=null;
                    
                    //if( !this.pxlEnv.pxlDevice.mobile ){
                        if(vParent || vidTexture!=null){
                            if(vidTexture==null){
                                let jmaRemoteData=this.pxlConnect.remoteTracks[ id ];
                                if( jmaRemoteData ){
                                    vidObj = jmaRemoteData.videoObject;
                                    vidTexture = jmaRemoteData.videoTexture;
                                }
                                if( vidTexture==null && this.pxlEnv.remoteUserNameList.includes(id) ){
                                    vidObj=this.pxlEnv.remoteUserMediaList[ id ].videoObject;
                                    vidTexture=this.pxlEnv.remoteUserMediaList[ id ].videoTexture;
                                }
                            }else{
                                vidSet=true;
                            }
                        }
                        if( vidObj && !vidTexture ){
                            vidTexture=new THREE.VideoTexture(curVid[0]);
                            vidTexture.minFilter=THREE.LinearFilter;
                            vidTexture.magFilter=THREE.LinearFilter;
                            vidTexture.format=THREE.RGBFormat;
                        }
                    
                    
                        vidSet= vidTexture!=null;
                        
                        let audioTrackMuted=false;
                        if( this.pxlConnect.remoteTracks[ id ] ){ // Get remote audio Object and Mute Status
                            if( this.pxlConnect.remoteTracks[ id ].audio ){
                                audioTrackMuted=this.pxlConnect.remoteTracks[ id ].audio;
                                audioTrackMuted=audioTrackMuted.muted;
                            }
                            if( this.pxlConnect.remoteTracks[ id ].audioObject ){
                                audioObject=this.pxlConnect.remoteTracks[ id ].audioObject;
                            }
                        }else if(vParent){
                            // Get user audio object for distance/room controlling
                            audioObject=document.getElementById(id+"_audio");
                            if(!audioObject){
                                audioObject=null;
                            }
                        }
					//}
                    
                    if( audioObject ) {
                        audioObject.volume=0;
                    }
                    
					let playing= vidObj ? !vidObj.paused : false;
					if( (!vidSet || !playing) && !tmpStatus ){// && !this.pxlEnv.pxlDevice.mobile){
                        // ## This is not needed just return false
                        if( !this.avatarVideoFailList.includes( id ) ){
                            this.avatarVideoFailList.push( id );
                        }
					}
					if( tmpStatus ){
						vidSet=true;
						playing=true;
					}
				
                    let geoThreeColor=new THREE.Color( 0xffffff );
                    
                    let geoColor;
                    if( userVerse == this.pxlConnect.roomId ){
                        geoColor=[1,1,1];
                    }else{
                        geoColor=this.pxlUtils.stringToRgb( userVerse, .5, true );
                    }
                    geoThreeColor.r=geoColor[0];
                    geoThreeColor.g=geoColor[1];
                    geoThreeColor.b=geoColor[2];
                    

                    let displayName=this.defaultDisplayName;
                    if( id.length < 12 && this.pxlConnect.room){
                        let partList=this.pxlConnect.room.getParticipants();
                        for( let p=0; p<partList.length; ++p){
                            let curPart = partList[p];
                            let partId = curPart.getId();
                            if( partId == id ){
                                let partDispName=curPart.getDisplayName();
                                if( partDispName ){
                                    displayName=partDispName;
                                }
                                break;
                            }
                        }
                    }

					let curUserSpacialData={
                        displayName: userName || displayName,
                        userStatusGui:null,
                        userAudioGui:null,
                        userNameGui:null,
						parentObj:vParent,
						vidExists:vidSet,
						vidEnabled:playing,
						vidObject:vidObj,
						texture:vidTexture,
						texPixelSize:this.tPixSize,
						audio:audioObject,
						audioEnabled:audioObject!=null,
						audioMuted:audioTrackMuted, // User toggled mute on user
						audio3d:null,
                        fake:tmpStatus,
						avatarGroup:new THREE.Group(),
						videoMesh:null,
						videoMtl:null,
						//webCamBlend:new THREE.Vector2( ( vidSet ? 0 : 1 ) ,0),
						//avatarStandInMesh:null,
						geoStandInActive:!vidSet, // default to Avatar Stand In
						geoStandInMesh:null,
						geoStandInColor: geoThreeColor,
						pos:userPos,
						rot:userRot,
						room:userRoom,
						audioZone:userAudioZone,
						verse:userVerse,
						distance:0,
						proximityStatus:false,
						proximityBlender:0,
					};
					
					let mult=3;
					let res=[12.8*mult,7.2*mult];
					
					// OpenGL Shader Uniforms
					// Commented values are used in the Snap Chat filter version
					// But I've turned that off for now, needless math, and not promoted.

					
					if(vidTexture){
						vidTexture.wrapS = THREE.MirroredRepeatWrapping;
						vidTexture.wrapT = THREE.MirroredRepeatWrapping;
					}

					let greenScreenUniforms={
						time:{ value:this.pxlTimer.msRunner },
						colorMult:{ value:this.colorMult },
						audioMuted:{ type: 'f', value: ~~!audioTrackMuted },
						//resUV:{ value:this.tPixSize },
						cloudNoise:{type : 't',value : this.pxlEnv.cloud3dTexture },
						cloudNoise2:{type : 't',value : this.pxlEnv.softNoiseTexture },
						videoFeed:{type : 't',value : vidTexture},
						videoActive:{type : 'f',value : (vidSet ? 1.0 : 0.0 )},
						edgeFalloff:{type : 't',value : this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"avatarMaskMap.jpg")},
						mathFuncMap:{type: 't',value: this.pxlUtils.loadTexture(this.pxlUtils.assetRoot+"MathFuncs_512.jpg")},
						//webCamBlend:{value: curUserSpacialData.webCamBlend },
						proxDistance:{value: this.avatarToggleDist },
						diamondCol:{value: curUserSpacialData.geoStandInColor },
					};
					
					
					// Webcam plane material
					curUserSpacialData.videoMtl=new THREE.ShaderMaterial({
						uniforms:greenScreenUniforms,
						vertexShader:this.pxlShaders.avatarShaderVert(),
						fragmentShader:this.pxlShaders.avatarShaderFrag(),
						transparent:true,
						side:THREE.DoubleSide,
						depthTest:true,
						depthWrite:true
					});
			
            
					// Avatar diamonds stand in mesh
					let avatarStandInGeo = new THREE.OctahedronBufferGeometry(2, 0);
                    
					let avatarMtl = new THREE.MeshBasicMaterial( { color: geoThreeColor } );
					curUserSpacialData.geoStandInMesh=new THREE.Mesh(avatarStandInGeo, avatarMtl);
					curUserSpacialData.geoStandInMesh.visible = !playing;
					curUserSpacialData.geoStandInMesh.scale.y = 7; // Vert Shader scale adjust
                    //curUserSpacialData.geoStandInMesh.layers.set( 1 );
					
					curUserSpacialData.videoMesh=new THREE.Mesh( this.avatarGeo, curUserSpacialData.videoMtl);
					curUserSpacialData.videoMesh.visible = playing;
					curUserSpacialData.videoMesh.rotation.y=this.pxlUtils.degToRad(180);
                    //curUserSpacialData.videoMesh.layers.set( 1 );

					// Add green screen and avatar meshes to group
					curUserSpacialData.avatarGroup.add(curUserSpacialData.videoMesh);
					curUserSpacialData.avatarGroup.add(curUserSpacialData.geoStandInMesh);
                    
                    curUserSpacialData.avatarGroup.name=id;
                    if( this.pxlEnv.roomNameList.includes(userRoom) ){
                        this.pxlEnv.roomSceneList[userRoom].userAvatarGroup.add( curUserSpacialData.avatarGroup );
                    }
                    
                    curUserSpacialData.avatarGroup.visible = vidSet || id.length<12;
                    if( (userAudioZone==null || userAudioZone == 2) && this.pxlEnv.currentAudioZone == 2){
                        curUserSpacialData.avatarGroup.visible = false;
                    }
                    
                    /*
                    if(audioObject){
                        var audioTrack = new THREE.PositionalAudio( this.pxlEnv.listener );
                        audioTrack.setMediaElementSource(audioObject);
                        audioTrack.gain=1;
                        audioTrack.setRefDistance( 300 );
                        audioTrack.autoplay=true;

                        curUserSpacialData.audio3d=audioTrack;
                    }*/
                        
					this.userAvatarSpacialData[id]=curUserSpacialData;
                    if( !this.pxlEnv.pxlDevice.mobile ){
                        this.pxlGuiDraws.addUserControls( id, audioTrackMuted );  
                    }
                    ret[id]=vidSet+"";
                    if( !vidSet ){
                        curUserSpacialData.avatarGroup.position.set( ...userPos );
                        curUserSpacialData.avatarGroup.quaternion.set( ...userRot );
                        continue;
                    }
				}
                
                // ## This SHOULD always be true, was running into weird issues before
                //      Double check this shit!
				if( this.userAvatarSpacialData[id] !== undefined ){
                    this.userAvatarSpacialData[id].verse=userVerse;
                    
					if(userRoom != this.userAvatarSpacialData[id].room){
                        if( this.pxlEnv.roomNameList.includes(userRoom) ){
                            this.pxlEnv.roomSceneList[userRoom].userAvatarGroup.add( this.userAvatarSpacialData[id].avatarGroup );
                        }
                        
						this.userAvatarSpacialData[id].room=userRoom;
					}
                    
                    if( userPos && userRot ){
                        this.avatarUpdateList.push(id);
                        this.avatarSpacialDataChanged=true;
                        
                        /*if( this.pxlEnv.pxlAutoCam.curAvatar == id ){
                            this.userAvatarSpacialData[id].avatarGroup.position.add( new THREE.Vector3(...userPos) ).multiplyScalar( .5 );
                            this.userAvatarSpacialData[id].avatarGroup.quaternion.slerp( new THREE.Quaternion( ...userRot ), .5 );
                        }else{*/
                            this.userAvatarSpacialData[id].avatarGroup.position.set( ...userPos );
                            this.userAvatarSpacialData[id].avatarGroup.quaternion.set( ...userRot );
                        //}
                        //this.userAvatarSpacialData[id].avatarGroup.updateMatrix();
                        
                        this.userAvatarSpacialData[id].audioZone=userAudioZone;
                        
                        this.userAvatarSpacialData[id].avatarGroup.visible= userRoom == this.pxlEnv.currentRoom ;
                    }
				}
                
			}
		}
        return ret;
	}
    
	//%=
	fakeUserAdd( addTexture=false ){
		let newUserIt=parseInt((Math.random()+"").split(".")[1]).toString(16);
		
		let tEl=0;
		this.fakeUsers[ newUserIt ]=tEl;
		this.fakeUserCount+=1;

        this.curUserCount+=1;

		this.fakeUserKeys.push(newUserIt);
		
		let curDict={};
		curDict[ newUserIt ]=this.fakeUserTrack[tEl];
		
		this.setAvatarPositions( curDict, ( addTexture ? this.pxlEnv.remoteUserMediaList.jma_localMedia.videoTexture.clone() : null ) );
		
		this.pxlGuiDraws.setUserCount( this.pxlGuiDraws.userCountCur+1 );
	}
	fakeUserStep(){
		if(this.fakeUserCount>0){
			let curDict={};
			this.fakeUserKeys.forEach( (u)=>{
				let thresh=Math.random();
				if( thresh > .3 ){
					let tEl=(this.fakeUsers[u]+1)%this.fakeUserTrackCount;
					this.fakeUsers[ u ]=tEl;
					curDict[ u ]=this.fakeUserTrack[tEl];
				}
			});
			this.setAvatarPositions( curDict );
		}
	};
    fakeUserRemove(){
        if(this.fakeUserKeys.length>0){
            this.prepUserExit( this.fakeUserKeys.shift() );
            this.fakeUserCount=this.fakeUserKeys.length;
            
            this.curUserCount-=1;
            
            this.pxlGuiDraws.setUserCount( this.pxlGuiDraws.userCountCur-1 );
        }
    }
    //%
    
    
    async setUserMicMute( id, muteVal ){
        if( this.userAvatarSpacialData[id] ){
            this.userAvatarSpacialData[id].videoMtl.uniforms.audioMuted.value= muteVal ? 0 : 1; 
        }
    }
    
	async checkVideoStatus(id=null){
        if(!id){
            return true;
        }
		if( id.length > 12 ){
            if( !this.checkingUsers.includes(id) ){
                this.checkingUsers.push( id );
            }
            return true; // Seems like a Socket ID, meaning there is no Video object
		}
		let curUser=this.userAvatarSpacialData[id];

		let vidSet=false; // For video meta data changes
		if(curUser){
            if( curUser.verse != this.pxlConnect.roomId ){
                return true;
            }
            let jmaUser=this.pxlConnect.remoteTracks[id];
            let retVal=false;
            if(jmaUser ){
                this.userAvatarSpacialData[id].vidEnabled= jmaUser.videoPlaying;
                curUser.vidEnabled=jmaUser.videoPlaying; // Shouldn't be needed, just to be sure
                if( jmaUser.videoObject){
                    this.userAvatarSpacialData[id].vidObject=jmaUser.videoObject;
                    this.userAvatarSpacialData[id].vidExists=true;
                        
                    if( jmaUser.videoTexture ){
                        this.userAvatarSpacialData[id].vidEnabled = jmaUser.videoPlaying;
                        this.userAvatarSpacialData[id].vidSet=true;
                        this.userAvatarSpacialData[id].texture=jmaUser.videoTexture;

                        //this.userAvatarSpacialData[id].webCamBlend.x=1;
                        this.userAvatarSpacialData[id].videoMtl.uniforms.videoActive.value=1; 
                        if(curUser.videoMtl.uniforms.videoFeed.value){
                            let tmpTexture=curUser.videoMtl.uniforms.videoFeed.value;
                            this.userAvatarSpacialData[id].videoMtl.uniforms.videoFeed.value=null;
                            tmpTexture.dispose();
                        }
                        this.userAvatarSpacialData[id].videoMtl.uniforms.videoFeed.value=jmaUser.videoTexture;
                            
                        vidSet=true;
                    }
                    if(vidSet){
                        this.updateAvatarSpacialData([id]);
                    }
                    
                }
                
                this.updateAvatarSpacialData([id], false, false);
                this.setWebcamAvatarVisibility( id, jmaUser.videoPlaying, true );
            }else{
                vidSet = false; // Added back to list
            }
            
            if(!curUser.audio){
                let curAudio=document.getElementById( id+"_audio");
                let audioEnabled=false;
                //if( jmaUser.audioObject ){
                    //if( !this.pxlConnect.jmaActiveBinaural[id] && curAudio){
                    //    this.pxlConnect.buildRemoteAudioMixer( id, curAudio );
                    //}
                    //if( !this.pxlConnect.jmaActiveBinaural[id]){
                    //    this.userAvatarSpacialData[id].audio=jmaUser.audioObject;
                    //}
                    //audioEnabled=true;
                //}else{
                    // Get user audio object for distance/room controlling
                    if(curAudio){
                        this.userAvatarSpacialData[id].audio=curAudio;
                        curAudio.volume=0;
                        audioEnabled=true;
                    }
                //}
                
                this.userAvatarSpacialData[id].audioEnabled=audioEnabled;
                //vidSet= vidSet && audioEnabled;
                if( audioEnabled ){
                    this.updateAvatarSpacialData([id], false, false);
                }
                
                /*if(!curUser.audio && jmaUser.audio){
                    curUser.audio=jmaUser.audio;
                }*/
            }
		}
		return vidSet;
	}

	checkUserConnection(){
		
	}


    // Local user jumped verses, update verse avatar colors
    async updateAvatarColors( verseFrom, verseTo ){
        let userIds=Object.keys( this.userAvatarSpacialData );
        let avatarUpdate=[];
        
        userIds.forEach( (id)=>{
            let curAvatar=this.userAvatarSpacialData[id];
            curAvatar.proximityStatus=-1;
            curAvatar.vidExists=false;
            curAvatar.vidEnabled=false;
            curAvatar.videoMtl.uniforms.videoActive.value=0;
            curAvatar.videoMtl.uniforms.videoFeed.value=null;
            
            let fromColor=this.pxlUtils.stringToRgb( verseFrom, .5, true );
            let fromGuiColor=this.pxlUtils.stringToRgb( verseFrom, .3 );
            let fromHex=this.pxlUtils.rgbToHex( ...fromGuiColor );
            
            if( verseTo == curAvatar.verse ){
                avatarUpdate.push( id );
                if( !this.avatarVideoFailList.includes( id ) ){
                    this.avatarVideoFailList.push( id );
                }
                this.setWebcamAvatarVisibility( curAvatar, true, true );
                curAvatar.geoStandInColor.set( 1, 1, 1 );
                this.pxlGuiDraws.setUserControlColor( id, "#ffffff" );
            }else if( verseFrom == curAvatar.verse ){
                curAvatar.videoMtl.uniforms.videoActive.value=0;
                if( curAvatar.videoMtl.uniforms.videoFeed.value ){
                    curAvatar.videoMtl.uniforms.videoFeed.value.dispose();
                }
                curAvatar.videoMtl.uniforms.videoFeed.value=null;
                //avatarUpdate.push( id );
                this.setWebcamAvatarVisibility( curAvatar, false, true );
                
                curAvatar.geoStandInColor.setRGB( ...fromColor );
                curAvatar.geoStandInMesh.material.color.setRGB( ...fromColor );
                this.pxlGuiDraws.setUserControlColor( id, fromHex );
            }
        });
        
        /*if( avatarUpdate.length > 0 ){
            this.updateAvatarSpacialData([avatarUpdate], false, true);
        }*/
        this.updateAvatarSpacialData([], false, true);
        this.pxlConnect.jmaUserCountChange=true;
    }

    // Does this even run?  Seems only for when YOU jump
    async userVerseJump( msg ){
        let idTo=msg.idTo;
        let idFrom=msg.idFrom;
        
        let verseTo=msg.verseTo;
        let verseFrom=msg.verseFrom;
        let curVerse=this.pxlConnect.roomId;
        
        if( idTo == this.pxlUser.jitsiUserId ){
            this.updateAvatarColors( verseFrom, verseTo );
            return;
        }
        
        let fromCheck=this.userAvatarSpacialData.hasOwnProperty( idFrom );
        let toCheck=this.userAvatarSpacialData.hasOwnProperty( idTo );
        if( idFrom != idTo ){
            if( fromCheck && !toCheck ){
                this.userAvatarSpacialData[ idTo ] = {};
                Object.assign( this.userAvatarSpacialData[ idTo ], this.userAvatarSpacialData[ idFrom ]);
                this.pxlGuiDraws.userControlsSwap( idFrom, idTo );
                
                delete this.userAvatarSpacialData[ idFrom ];
                this.prepUserExit( idFrom );
            }else if( fromCheck && toCheck ){
                this.prepUserExit.push( idFrom );
                return;
            }
        }
            
        let userData=null;
        if(this.userAvatarSpacialData[ idTo ]){
            userData=idTo;
            this.userAvatarSpacialData[ userData ].verse=verseTo;
            this.userAvatarSpacialData[ userData ].videoObject=null;
            this.userAvatarSpacialData[ userData ].vidExists=false;
            this.userAvatarSpacialData[ userData ].vidEnabled=false;
            //this.userAvatarSpacialData[ userData ].webCamBlend.x=0;
            this.userAvatarSpacialData[ userData ].texture=null;
            this.userAvatarSpacialData[ userData ].geoStandInActive=true;
            this.userAvatarSpacialData[ userData ].audioObject=null;
            this.userAvatarSpacialData[ userData ].proximityStatus=-1;
            let curAvatar=this.userAvatarSpacialData[ userData ];
            
            let geoColor;
            if( verseTo == this.pxlConnect.roomId ){
                geoColor=[1,1,1];
                this.pxlGuiDraws.setUserControlColor( userData, "#ffffff" );
            }else{
                geoColor=this.pxlUtils.stringToRgb( verseTo, .5, true );
                let guiColor=this.pxlUtils.stringToRgb( verseTo, .3 );
                this.pxlGuiDraws.setUserControlColor( userData, this.pxlUtils.rgbToHex( ...guiColor ) );
            }
            
            this.userAvatarSpacialData[ userData ].geoStandInColor.setRGB( ...geoColor);
            this.userAvatarSpacialData[ userData ].geoStandInMesh.material.color.setRGB( ...geoColor );
                    
            this.userAvatarSpacialData[ userData ].videoMtl.uniforms.videoActive.value=0;
            if( this.userAvatarSpacialData[ userData ].videoMtl.uniforms.videoFeed.value ){
                this.userAvatarSpacialData[ userData ].videoMtl.uniforms.videoFeed.value.dispose();
            }
            this.userAvatarSpacialData[ userData ].videoMtl.uniforms.videoFeed.value=null;
            let userRoom=this.userAvatarSpacialData[ userData ].room;
            this.userAvatarSpacialData[ userData ].avatarGroup.visible= userRoom == this.pxlEnv.currentRoom ;
            this.userAvatarSpacialData[ userData ].avatarGroup.name= idTo;
        }
        
        this.pxlEnv.userRemoveRemoteData( idTo );
        this.pxlConnect.jmaUserCountChange=true;

        if( !this.avatarVideoFailList.includes( idTo ) ){
            this.avatarVideoFailList.push( idTo );
        }
        this.setWebcamAvatarVisibility( idTo, false, true );
        this.updateAvatarSpacialData([idTo], false, true);
    }

    async prepUserExit( curIds ){
        if( typeof curIds == "string" ){
            curIds=[curIds];
        }
        
        curIds.forEach( (curId)=>{
            let curCheck=this.userAvatarSpacialData[ curId ];
            if( curCheck && !this.exitUserList.includes( curId ) ){
                let group=curCheck.avatarGroup;
                group.visible=false;
                
                this.exitUserList.push( curId );
            }
        });
    }
    
    
	// ## exitUser
	// Dispose of group, webcam plane and avatar mesh and material
	async exitUserAvatar(msg){
		let uID= msg;
		let curUser=null;
        
        if(uID.id){
            this.prepUserExit( uID.id );
        }else{
            curUser=this.userAvatarSpacialData[uID];
		}
        
        let jmsVidEl= this.avatarVideoFailList.indexOf( uID );
        if( jmsVidEl>-1 ){
            this.avatarVideoFailList.splice( jmsVidEl, 1 );
        }
        
        if(curUser){
			if(curUser.disposing){
                return false;
			}
			curUser.disposing=true;
            
            let group=curUser.avatarGroup;
            group.visible=false;

            let groupContents=group.children;
            groupContents.forEach( (c)=>{
                c.visible=false;
                c.geometry.dispose();
                if(c.material.length){
                    c.material.forEach( (mtl)=>{
                        mtl.dispose();
                    });
                }else{
                    c.material.dispose();
                }
                c.parent.remove( c );
            } );
            if( group.parent ){
                group.parent.remove( group );
			}
            
			curUser.texture=null;
			curUser.audio=null;
            curUser.videoMesh.visible=false;
            try{
                curUser.videoMesh.dispose();
            }catch(err){}
            try{
                curUser.videoMtl.dispose();
            }catch(err){}
			//curUser.avatarStandInMesh=null;
			//curUser.avatarGroup=null;
            
            // Remove entry from proximity list
            this.setProximityListEntry( uID, false );
            
            await this.pxlGuiDraws.deleteUserControlVis( uID );
            
			this.userAvatarSpacialData[uID]={};
			
			delete this.userAvatarSpacialData[uID];
			
			this.pxlEnv.engine.renderLists.dispose();

		}
		this.joinSetCamStream=false;
        
        return false;
	}
}
