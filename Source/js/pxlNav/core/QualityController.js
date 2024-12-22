import { VERBOSE_LEVEL } from "./Enums.js";
import { Vector3 } from "../../libs/three/three.module.min.js";

export class QualityController{
  constructor( verbose, mobile=false, searchParms={}){
    this.pxlTimer=null;
    this.pxlCookie=null;
    this.pxlDevice=null;
    this.pxlEnv=null;
    this.msLog=0;
    this.prevMS=new Date().getTime()*.001;
    this.autoQuality=false;
    this.percent=1;
    this.verbose=verbose;
        
    this.screenResPerc=1;
    this.mBlurPercMult=mobile?.65:1;
    this.bloomPercMult=mobile?.65:1;
    this.bufferPercMult=1;//mobile?.3:.5,
    this.renderTargetScale=10; // ## Not implemented
    this.percentSteps=[.3,.45,.85];
    this.fpsCounter=new Vector3(30, 0, (new Date().getTime())*.001);; // [ Cur FPS, Frame Count Since Last FPS Check, Last FPS Sample Time ]
    this.countAtLevel=0,
    this.shiftRate=.01;
    this.moduleQualityList=[];
    
    this.qualityStep=-1;
    this.qualityMaxSteps=3;
    this.qualityStepValues=[ .25, .5, .75, 1 ];
    
    this.benchmarkStart=-1;
    this.benchmarkTime=-1;
    this.benchmarkRating=-1;
    this.benchmarkTimes=[9,17];
    
    this.setFromBenchmark=true;
    this.benchmarkQuality=1;
    this.benchmarkQualityRange=[.25, 1];
    
    this.settingsQualityChoice=null;
    this.detailLimitOverride= Object.keys(searchParms).includes("dlimit") ? searchParms["dlimit"] : 0;
    this.detailLimit= this.detailLimitOverride!=null ? this.detailLimitOverride : 0;
    
    // Default Quality Settings & Benchmark Settings
    //   Numbers or Booleans ONLY; or update GuiDraw.setRadioValues()
    // TODO : Movement settings shouldn't be on the Quality controller
    //          "Quality" should strictly remain Render Settings
    this.settings={
      leftRight:true, // Turn, Strafe
      mouse:true, // Drag, Point
      graphics:2, // Low, Medium, High, Custom
      resolution:1, // % Screen Size; [sW,sH] 
      fog:2, // Off, Medium, High
      bloom:true, // Unreal Bloom
      motion:false, // pxlNav Motion Blur // ## Implement
    };
    
    // Low Quality Settings
    this.settingsLow={
      resolution:.5,
      fog:0,
      bloom:false,
      motion:false,
    };
    // Medium Quality Settings
    this.settingsMedium={
      resolution:.75,
      fog:1,
      bloom:true,
      motion:false,
    };
    // High Quality Settings
    this.settingsHigh={
      resolution:1,
      fog:2,
      bloom:true,
      motion:false,
    };
    // Custom Quality Settings
    this.settingsCustom=null;
  }

  setDependencies( pxlNav ){
    this.pxlTimer=pxlNav.pxlTimer;
    this.pxlCookie=pxlNav.pxlCookie;
    this.pxlDevice=pxlNav.pxlDevice;
    this.pxlEnv=pxlNav.pxlEnv;
  }

  init(){
        
    if( this.detailLimitOverride!=null ){
        this.detailLimit = this.detailLimitOverride;
    }else{
        if(this.pxlCookie.hasCookie("detailLimit")){
            this.detailLimit=this.pxlCookie.parseCookie("detailLimit");
        }
    }
    
    if( this.verbose >= VERBOSE_LEVEL.INFO ){
      console.log( "Graphics Limiting is set to level ", this.detailLimit );
    }
    
    //parseDict sets the dict key values, returning true/false if keys missed
    this.setFromBenchmark = !this.pxlCookie.parseDict( this.settings );

    if(this.pxlCookie.hasCookie("leftRight")){
      this.settings.leftRight=this.pxlCookie.parseCookie("leftRight");
    }
    if(this.pxlCookie.hasCookie("mouse")){
      this.settings.mouse=this.pxlCookie.parseCookie("mouse");
    }
        let cookieEntries=Object.keys( this.settingsHigh );
    if(this.pxlCookie.hasCookie("qualitySetting")){
      let qualitySetting=this.pxlCookie.parseCookie("qualitySetting");
            this.settings.graphics=qualitySetting;
            this.settingsQualityChoice=qualitySetting;
    }
  }
  step(){
    this.mapFpsQualitCheck();
  }
  
    // ## Indended for a more universe "Quality Control" system
    //      But not implemented yet.
  attachModule( module=null ){
    if(module){
      this.moduleQualityList.push( module );
    }
  }
  
  startBenchmark(){
    this.pxlTimer.step();
    this.benchmarkStart=this.pxlTimer.curMS;
  }
  endBenchmark(){
    this.pxlTimer.step();
    let bDelta=this.pxlTimer.curMS-this.benchmarkStart;
    this.benchmarkTime=bDelta;
    
    this.benchmarkRating= 1-Math.min(1, Math.max(0, (bDelta-this.benchmarkTimes[0])/(this.benchmarkTimes[1]-this.benchmarkTimes[0]) ));
    
    // Set Benchmark Target Quality Percent to range; currently 25% to 100%
    this.benchmarkQuality= this.benchmarkRating*(this.benchmarkQualityRange[1]-this.benchmarkQualityRange[0]) + this.benchmarkQualityRange[0];
    
    //%=
    //console.log("Benchmark Timing - ",bDelta); 
    //console.log("Benchmark Rating - ",this.benchmarkRating);
    //console.log("Benchmark Quality - ", parseInt(this.benchmarkQuality*100), "%");
    //%
    
    let percStep=Math.min(1, Math.max(0, this.benchmarkRating ));
    percStep=Math.ceil( Math.max(.05,percStep)*this.qualityMaxSteps)-1;
    this.qualityStep=percStep;
    if( this.setFromBenchmark ){
      //%=
      let levelText=["Low","Medium","High"][this.qualityStep];
      //console.log( "Setting Benchmark to "+levelText+" quality.");
      //%
      this.setQualityLevel( this.qualityStep );
    }else{
            if(this.settingsQualityChoice==null){
                this.settingsQualityChoice=3;
            }
            
      this.settingsCustom={};
      let keys=Object.keys( this.settingsHigh ); // Just using this.settingsHigh reference for Keys
      keys.forEach( (k)=>{
        this.settingsCustom[k]=this.settings[k];
      });
    }
        
        this.setDependentSettings();
  }
  
    // ## This might be causing some issues with movement jittering
  mapFpsQualitCheck(){
    if( this.pxlTimer.curMS-this.fpsCounter.z > 1){
      this.fpsCounter.x= this.fpsCounter.y; //':new THREE.Vector3(30, 0, (new Date().getTime())), // [ Cur FPS, Time Since Last FPS Check, Last Sample Time ]
      this.fpsCounter.y=0;
      this.fpsCounter.z=this.pxlTimer.curMS;
      
      let dir=1;
      if(this.fpsCounter.x<15){
        dir=-1;
      }
      let toPerc=Math.min(1, Math.max(0, this.percent+this.shiftRate*dir));
      //datRenderResolutionSlider.setValue(toPerc);
      if(this.autoQuality){
        this.mapAutoQualityUpdate(toPerc, false);
      }
    }
    this.fpsCounter.y+=1;
    this.pxlTimer.prevMS=this.pxlTimer.curMS;
  }

  mapAutoQualityUpdate(percUpdate=null, force=false){
    // Core percentage updates via settings dict
    let percStep=Math.min(1, Math.max(0, percUpdate ));
    percStep=Math.ceil( Math.max(.05,percStep)*this.qualityMaxSteps)-1;
    this.qualityStep=percStep;
  }
  
  setGraphicsSettings( qualitySettings=null, graphicsPreset=3 ){
    if(qualitySettings==null){
      if(this.qualityStep==0){
        qualitySettings=this.settingsLow;
      }else if(this.qualityStep==1){
        qualitySettings=this.settingsMedium;
      }else if(this.qualityStep==2){
        qualitySettings=this.settingsHigh;
      }else{
        return;
      }
    }
    
    if(graphicsPreset==3){
      this.checkCustomDict();
    }
    
    let keys=Object.keys(qualitySettings);
    keys.forEach( (k)=>{
      this.setComponentQuality(k,qualitySettings[k]);
      this.settings[k]=qualitySettings[k];
      if(graphicsPreset==3){
        this.settingsCustom[k]=qualitySettings[k];
      }
    });
    
       // this.pxlEnv.mapRender(false);
    
    // ## I dunno, I need to set more settings per component
    //   Just set em all again!
    /*keys=Object.keys(this.settings);
    keys.forEach( (k)=>{
      if( !["leftRight","mouse","graphics"].includes(k) ){
        this.setComponentQuality(k,this.settings[k], false);
      }
    });*/
       // this.pxlEnv.mapRender(false);
    
    this.setDependentSettings();
    this.colliderPrevObjHit=null;
    
    if( graphicsPreset!=null ){
      this.settings.graphics=graphicsPreset;
    }
  }
  
    reapplySettings(){
    let keys=Object.keys(this.settingsLow);
    keys.forEach( (k)=>{
      //this.setComponentQuality(k,this.settingsLow[k], false);
      //this.setComponentQuality(k,this.settingsHigh[k], false);
      this.setComponentQuality(k,this.settings[k], false);
    });
    this.setDependentSettings();
    }
    
  setQualityLevel(val){
        if( this.pxlDevice.mobile ){
            val=1;
        }
        
    this.setQualityCookie(val);
        
    if(val==0){
      this.setLowQuality();
    }else if(val==1){
      this.setMediumQuality();
    }else if(val==2){
      this.setHighQuality();
    }else if(val==3){
      this.setCustomQuality();
    }
  }    
  
  setLowQuality(){
    this.settingsQualityChoice=0;
    this.setGraphicsSettings(this.settingsLow, 0);
  }
  setMediumQuality(){
    this.settingsQualityChoice=1;
    this.setGraphicsSettings(this.settingsMedium, 1);
  }
  setHighQuality(){
    this.settingsQualityChoice=2;
    this.setGraphicsSettings(this.settingsHigh, 2);
  }
  setCustomQuality(){
    this.checkCustomDict();
    this.settingsQualityChoice=3;
    this.setGraphicsSettings( this.settingsCustom);
  }
  checkCustomDict(){
    if(this.settingsCustom==null){
      this.settingsCustom={};
      let sourceDict=this.settingsHigh;
      if(this.settingsQualityChoice){
        if(this.settingsQualityChoice==0){
          sourceDict= this.settingsLow ;
        }else if(this.settingsQualityChoice==1){
          sourceDict= this.settingsMedium ;
        }else if(this.settingsQualityChoice==2){
          sourceDict= this.settingsHigh ;
        }
      }
      Object.assign( this.settingsCustom, sourceDict );
    }
  }
  
    setQualityCookie(val){
    this.pxlCookie.setCookie( "qualitySetting", val );
    }
    
  // Set values per specific setting change
  //   Render & Navigational Settings
  setComponentQuality( component, val, setCookie=true ){
    switch(component){
      case "leftRight":
        this.settings[component]=val;
        break;
        
      case "mouse":
        this.settings[component]=val;
        break;
        
      case "resolution":
        this.screenResPerc=val;
        this.pxlDevice.resizeRenderResolution();
        this.settings[component]=val;
        if( this.pxlEnv.geoList['snow'] && this.pxlEnv.geoList['snow'].material ){
            this.pxlEnv.geoList['snow'].material.uniforms.pointScale.value = this.pxlEnv.geoList['snow'].pBaseScale * val;
        }
        break;
        
      case "fog":
        this.pxlEnv.mapOverlayHeavyPass.enabled = val==2;
        this.pxlEnv.mapOverlayPass.enabled = val==1;
        this.pxlEnv.mapOverlaySlimPass.enabled = val==0;
                this.pxlEnv.mapBoxAAPass.enabled=val==2;
                this.pxlEnv.mapCrossAAPass.enabled=val==1;
                
        this.pxlEnv.portaluserScreenIntensity.x=1;
        //this.pxlEnv.pxlRenderSettings.mult=1;
        this.pxlEnv.userScreenIntensity.x = .65 ;
        this.pxlEnv.userScreenIntensity.y =  0 ;
                if(this.pxlEnv.geoList['HDRView']){
                    this.pxlEnv.geoList['HDRView'].material.uniforms.cdMult.value = val==0 ? .7 : .3;
                }
        this.settings[component]=val;
        break;
        
      case "bloom":
        this.pxlEnv.portaluserScreenIntensity.x = val ? .4 : 1;
        
        this.pxlEnv.mapGlowPass.enabled = val;
        this.pxlEnv.roomBloomPass.enabled = val;
        this.pxlEnv.roomGlowPass.enabled = val;
        
        this.pxlEnv.userScreenIntensity.x = val ? .65 : .8;
        this.pxlEnv.userScreenIntensity.y = val ? 0 : .8;
                if(this.pxlEnv.geoList['HDRView']){
                    this.pxlEnv.geoList['HDRView'].material.uniforms.cdMult.value = val==0 ? .7 : .3;
                }
        
        this.pxlEnv.mapMotionBlurPass.enabled=val;  
      
        this.settings[component]=val;
        break;
        
      case "motion":
        this.pxlEnv.mapMotionBlurPass.enabled=val;  
      
        this.settings[component]=val;
        break;
        
      default:
        //%=
        //console.error("No Setting Component Updated - ",component,": ",val);
        //%
        break;
    }
    if(setCookie){
      this.pxlCookie.setCookie( component, val );
    }
  }
  setDependentSettings(){
    let multVal=1;
    let portalIntensity=1;
        let circleGateBloom=0;
        let circleGateColor=.6;
    
        if( this.settings.fog==2 ){
          this.pxlEnv.mapMotionBlurPass.enabled=false;  
          this.pxlEnv.mapOverlayHeavyPass.enabled=true;
          this.pxlEnv.mapOverlayPass.enabled=false;
          this.pxlEnv.mapOverlaySlimPass.enabled=false;
        
                    this.pxlEnv.mapBoxAAPass.enabled=true;
                    this.pxlEnv.mapCrossAAPass.enabled=false;
          multVal=1.00;
          portalIntensity=.5;
                    
                    /*if( this.pxlEnv.geoList['skySemiSphere'] ){
                        this.pxlEnv.geoList["skySemiSphere"].material.uniforms.fogIntensity.value=1; // Post Process Fog
                    }*/
                    
        }else if( this.settings.fog==1 ){
          this.pxlEnv.mapMotionBlurPass.enabled=false;  
          this.pxlEnv.mapOverlayHeavyPass.enabled=false;
          this.pxlEnv.mapOverlayPass.enabled=true;
          this.pxlEnv.mapOverlaySlimPass.enabled=false;
                    
                    this.pxlEnv.mapBoxAAPass.enabled=false;
                    this.pxlEnv.mapCrossAAPass.enabled=true;
          multVal=1.15;
          portalIntensity=.5;
        }else{
          this.pxlEnv.mapMotionBlurPass.enabled=false;
          this.pxlEnv.mapOverlayPass.enabled=false;
          this.pxlEnv.mapOverlaySlimPass.enabled=true;
                    
                    this.pxlEnv.mapBoxAAPass.enabled=false;
                    this.pxlEnv.mapCrossAAPass.enabled=false;
          multVal=1.;
          portalIntensity=.4;
        }
        
        if( this.settings.bloom ){
          this.pxlEnv.mapGlowPass.enabled=true;  
          this.pxlEnv.roomBloomPass.enabled=true;  
          this.pxlEnv.roomGlowPass.enabled=true;  
          this.pxlEnv.userScreenIntensity.x=.65;
          this.pxlEnv.userScreenIntensity.y=0;
                    circleGateBloom=1;
                    circleGateColor=.25;
        }else{
          this.pxlEnv.mapGlowPass.enabled=false;
          this.pxlEnv.roomBloomPass.enabled=false;
          this.pxlEnv.roomGlowPass.enabled=false;
                    
                    this.pxlEnv.engine.setRenderTarget(this.pxlEnv.mapComposerGlow.renderTarget2);
                    this.pxlEnv.engine.clear();
                    this.pxlEnv.engine.setRenderTarget(this.pxlEnv.roomGlowPass.renderTarget2);
                    this.pxlEnv.engine.clear();
                    this.pxlEnv.engine.setRenderTarget(null);
                    
                    this.pxlEnv.userScreenIntensity.x=.8;
          this.pxlEnv.userScreenIntensity.y=0;
                    
          //multVal=1.0;
          portalIntensity=1;
                    circleGateBloom=0;
                    circleGateColor=.5;
        }
                let cGate=this.pxlEnv.geoList['Circular_Gate'];
        if( cGate ){
                    cGate.material.uniforms.bloomBoost.value=circleGateBloom;
                }
                
                if( this.pxlEnv.geoList['HDRView'] ){
                    this.pxlEnv.geoList['HDRView'].material.uniforms.cdMult.value= this.settings.bloom ? .3 : .7;
                }
                
                let cVid=this.pxlEnv.geoList['CirculateGateVideoSphere'];
        if( cVid ){
                    cVid.material.color.r=circleGateColor;
                    cVid.material.color.g=circleGateColor;
                    cVid.material.color.b=circleGateColor;
                }
                
        this.pxlEnv.portaluserScreenIntensity.x=portalIntensity;
        //this.pxlEnv.pxlRenderSettings.mult=multVal;
        this.pxlEnv.pxlCamera.colliderCurObjHit=null;
        //this.pxlEnv.setExposure(multVal);
  }
  
};