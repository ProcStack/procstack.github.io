// GUI Draws
//   document.body element & css management
//   Written by Kevin Edzenga; 2020, 2024
// -- -- -- -- -- --

import { GUIManager } from './GUIBase.js';
import { ShaderEditor } from './ShaderEditor.js';
/*import { HelpGui } from './pxlGui/HelpGui.js';
import { InfoGui } from './pxlGui/InfoGui.js';
import { SettingsGui } from './pxlGui/SettingsGui.js';*/


export class GUI extends GUIManager{
  constructor(verbose, projectTitle="Metal-Asylum", assetRoot="images/assets/", guiRoot="images/GUI/" ){
    super(verbose, projectTitle, assetRoot, guiRoot );
    
    this.verbose = verbose;

    // Dynamic Styles 
    this.lableBoxSize = 40; // Device Label Box Size
    this.optionWidthRound = 10;
    this.optionWidthAdd = 25;
    this.deviceOptionHeight = [0, 300]; // Device Option List Max-Height's
    
		this.ShaderEditor = null;
		
    // TODO : This is the loadable stage count
    //          Load js, load room, run room boot, await room environment load/setup, and run post-boot code.
    //          This should be a registration system, not hard coded
    //            As it would be better for loading status for multi-room systems
    //          Loader stages added to a promise/stage list during pre-boot, update max stage count here
    this.pxlLoaderTotal = 5;
    
    this.hudVisibility=true;
    
    this.camChoicesActive=false;
    //this.camChoicePrevObj=null;
    this.micChoicesActive=false;
    //this.micChoicePrevObj=null;
    
    // TODO : Move to function to prep dictionary for div lookup
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
    
    this.activeItem=null;
    
    this.actionPopUp=null;
    
    this.init();
  }
  
  setDependencies( pxlNav ){
    super.setDependencies( pxlNav );
    this.ShaderEditor = new ShaderEditor( pxlNav, this );
  }

  //  Runs
  init(){
    super.init();
  }
  
  // Runs post pxlNav load & boot
  //   All files have been requested & document elements prepped
  booted(){
    super.booted();
  }
    
  step(){
    super.step();
  }
  
	toggleShaderEditor(){
		this.ShaderEditor.toggleShaderEditor();
	}

  resize( e ){
    super.resize();
    if( this.ShaderEditor ){
      this.ShaderEditor.resize( e );
    }
  }
  
/////////////////////////////////////////////
// -- -- -- -- -- -- -- -- -- -- -- -- -- //
///////////////////////////////////////////



}
