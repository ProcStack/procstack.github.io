
// Extentions.js

const pxlAvailableEtxensions = [
  "PoseEngine" // Face & Body Pose Estimation; AI / Computer Vision
  /* -- To be converted into extensions --
  "WebCamera", // Web Camera; Media
  "Audio", // Audio Player; Media
  "Video", // Video Player; Media
  "MusicUtils", // Music Player; Utils
  "Networking", // Server Cross-Talk; WebSocket / WebRTC
  */
];

export class Extensions {
  constructor() {
    this.plugins = {};
    this.verbose = false;
  }

  // Use this to load and boot extensions
  //   Enabling ensures assets have been fully downloaded, parsed, and init();
  // Pass your `onFinishFn` as your callback function to run once extension is ready for use
  init( extName, onFinishFn, onErrorFn, forceReload = false ){
    if( !this.plugins[extName] || forceReload ){
      this.load( extName, (err, pluginInstance) => {
        if( err ){
          if( onErrorFn ){
            onErrorFn(err);
          }else if( this.verbose ){
            console.error(err);
          }
        }else{
          if( onFinishFn ){
            onFinishFn(pluginInstance);
          }
        }
      });
    }else{
      if( this.verbose ){
        console.log(`Extension ${extName} already booted, skipping...`);
      }
      if( onFinishFn ){
        onFinishFn( this.plugins[extName] );
      }
    }
  }

  async load( extName, callback ){
    if( pxlAvailableEtxensions.includes(extName) ){
      try {
        const module = await import(`./${extName}.js`);
        const pluginInstance = new module.default();
        try {
          this.boot(extName, pluginInstance);
        }catch( bootErr ){
          console.error(`Error (2) Booting extension '${extName}':`, bootErr);
        }
        if( callback ){
          callback( null, pluginInstance );
        }
      }catch( loadErr ){
        console.error(`Error (1) Importing / Parsing extension '${extName}':`, loadErr);
        if( callback ){
          callback( err, null );
        }
      }
    }else{
      const err = new Error(`Extension ${extName} not found`);
      console.error( err );
      if( callback ){
        callback( err, null );
      }
    }
  }


  // -- -- --
  
  start( name ){
    let curEtx = this.get(name);
    if( curEtx ){
      curEtx.start();
    }
  }
  pause( name ){
    let curEtx = this.get(name);
    if( curEtx ){
      curEtx.pause();
    }
  }
  stop( name ){
    let curEtx = this.get(name);
    if( curEtx ){
      curEtx.stop();
    }
  }
  // -- -- --

  status( name ){
    let curEtx = this.get(name);
    if( curEtx ){
      return curEtx.active;
    }else{
      return false;
    }
  }

  // -- -- --
  // -- -- --

  boot( name, pluginInstance ){
    this.plugins[name] = pluginInstance;
    pluginInstance.init();
  }

  get( name ){
    if( this.plugins[name] ){
      return this.plugins[name];
    }else{
      console.warn(`Extension ${name} not found`);
      return null;
    }
  }

  unload( name ){
    let curEtx = this.get(name);
    if( curEtx ){
      curEtx.destroy();
      delete this.plugins[name];
    }
  }
}