// pxlNav Animation Manager
// -- -- -- -- -- -- -- -- --
// Written by Kevin Edzenga; 2024

import * as THREE from "../../libs/three/three.module.js";

export class Animation{
  constructor( assetPath=null, msRunner=null ){
    this.pxlEnv = null;
    this.assetPath=assetPath;
    this.verbose = false;
    
    this.animInitEntry = {
      'rig' : null,
      'mesh' : null,
      'mixer' : null,
      'clips' : {},

      'state' : null,
      'hasConnection' : false,
      'prevTime' : -1,
      'connected' : [],
      'connections' : {}
    }
    
    this.objNames = [];
    this.objects = {};
    this.animMixer = {};
    this.msRunner=msRunner;
    this.clock = new THREE.Clock();
  }
  setDependencies( pxlEnv ){
    this.pxlEnv = pxlEnv;
  }
  log( msg ){
    if( this.verbose ){
      console.log( msg );
    }
  }
  initObject( animName, animFbx ){
    
    let animRoot = null;
    let bindObj = null;
    let runCount = animFbx.children.length;
    let x = 0;
    let checkList = [...animFbx.children];
    let meshCount = 0;
    let boneCount = 0;
    let SkinnedMeshCount = 0;
    let GroupCount = 0;
    while( x < runCount ){
      let c = checkList[x];
      switch( c.type ){
        case "Bone":
          ++boneCount;
          animRoot = c;
          break;
        case "Mesh":
          ++meshCount;
          c.visible = false;
          break;
        case "SkinnedMesh":
          ++SkinnedMeshCount;
          bindObj = c;
          break;
        case "Group":
          ++GroupCount;
          checkList = checkList.concat( c.children );
          runCount = checkList.length;
          break;
        default:
          break;
      }
      ++x;
    }

    let error = false;
    if( !animRoot ){
      this.log("Error, No Bone/Rig Root Found; Please move your rig to the scene's root. Grouped rigs aren't supported yet.");
      error = true;
    }
    if( !bindObj ){
      this.log("Error, No SkinnedMesh Found; Please ensure your rig has a mesh to animate.");
      error = true;
    }
    if( error ){
      console.log( "Unable to prepare '"+animName+"' for animation" );

      console.log( "Group Count: "+GroupCount );
      console.log( "Bone Root Found : "+(boneCount>0) );
      console.log( "Bone Count : "+boneCount );
      console.log( "Mesh Count: "+meshCount );
      console.log( "SkinnedMesh Count: "+SkinnedMeshCount );
      return;
    }


    if( !this.objNames.includes( animName ) ){
      this.objNames.push( animName );
      let outDict = Object.assign({}, this.animInitEntry);
      outDict[ 'rig' ] = animRoot;
      outDict[ 'mesh' ] = bindObj;
      this.animMixer[ animName ] = new THREE.AnimationMixer( animRoot );
      outDict[ 'mixer' ] = this.animMixer[ animName ];
      this.objects[ animName ] = outDict;

      let skinnedMaterial = new THREE.MeshStandardMaterial( { skinning: true } );
      skinnedMaterial.map = bindObj.material.map;

      bindObj.material = skinnedMaterial;
    }
  }
  
  addClips( animName, clipName, animFbx ){
    if( !this.objNames.includes( animName ) ){
      this.log("Error, '"+animName+"' not found in Animation Manager");
      return;
    }
    let clipNames = Object.keys( this.objects[ animName ][ 'clips' ] );
    if( clipNames.includes( clipName ) ){
      this.log("Warning, '"+clipName+"' already exists in '"+animName+"'");
    }
    let animMixer = this.animMixer[ animName ];
    //console.log(animFbx.animations);

    // TODO : Add support for objects to reuse animation sources

    let newClip = animMixer.clipAction( animFbx.animations[0] );
    this.objects[ animName ][ 'clips' ][ clipName ] = newClip;

  }

  hasClip( animName, clipName ){
    if( this.objNames.includes( animName ) ){
      let clipNames = Object.keys( this.objects[ animName ][ 'clips' ] );
      return clipNames.includes( clipName );
    }
    return false;
  }

  getMixer( animName ){
    if( this.objNames.includes( animName ) ){
      return this.animMixer[ animName ];
    }
    return null;
  }

  getRig( animName ){
    if( this.objNames.includes( animName ) ){
      return this.objects[ animName ][ 'rig' ];
    }
    return null;
  }

  getMesh( animName ){
    if( this.objNames.includes( animName ) ){
      return this.objects[ animName ][ 'mesh' ];
    }
    return null;
  }

  playClip( animName, clipName ){
    if( this.objNames.includes( animName ) ){
      let clipNames = Object.keys( this.objects[ animName ][ 'clips' ] );
      if( clipNames.includes( clipName ) ){
        let clip = this.objects[ animName ][ 'clips' ][ clipName ];
        this.objects[ animName ][ 'state' ] = clipName ;
        this.objects[ animName ][ 'prevTime' ] = -1 ;
        this.objects[ animName ][ 'hasConnection' ] = this.objects[ animName ][ 'connected' ].includes( clipName );

        this.setWeight( animName, clipName, 1, true );

        clip.reset();
        clip.play();
      }
    }
  }
  setWeight( animName, clipName, weight, disableOthers=false ){
    if( this.objNames.includes( animName ) ){
      let clipNames = Object.keys( this.objects[ animName ][ 'clips' ] );
      if( clipNames.includes( clipName ) ){
        let clip = this.objects[ animName ][ 'clips' ][ clipName ];
        clip.enabled = true;
        clip.setEffectiveTimeScale( 1 );
        clip.setEffectiveWeight( weight );
        if( disableOthers ){
          clipNames.forEach( (clipKey)=>{
            if( clipKey != clipName ){
              let nonClip = this.objects[ animName ][ 'clips' ][ clipKey ];
              nonClip.enabled = false;
              nonClip.setEffectiveTimeScale( 1 );
              nonClip.setEffectiveWeight( 0 );
            }
          });
        }
      }
    }
  }

  setStateConnections( animName, stateConnections ){
    if( this.objNames.includes( animName ) ){
      let stateKeys = Object.keys( stateConnections );
      this.objects[ animName ][ 'connected' ] = stateKeys;
      this.objects[ animName ][ 'connections' ] = stateConnections;
    }
  }

  // -- -- --
  
  // Rudimentary State Machine Implementation
  // If the current state has 'connections',
  //   It'll random pick form those possible states
  // If no outgoing connections, it'll loop the current state
  step( animName ){
    if( this.objNames.includes( animName ) ){
      let hasConnection = this.objects[ animName ][ 'hasConnection' ];
      if( !hasConnection ){
        this.animMixer[ animName ].update( this.clock.getDelta() );
        return;
      }

      let curState = this.objects[ animName ][ 'state' ];
      if( curState ){ // Dunno why this would never be set when 'hasConnection' is set, sanity check
        let curClip = this.objects[ animName ][ 'clips' ][ curState ];
        let curTime = curClip.time;
        let prevTime = this.objects[ animName ][ 'prevTime' ];

        // Cycle loop check
        if( prevTime > curTime ){
          let nextStates = this.objects[ animName ][ 'connections' ][ curState ];
          let randState = nextStates[ Math.floor( Math.random() * nextStates.length ) ];
          this.playClip( animName, randState );
        }else{
          this.animMixer[ animName ].update( this.clock.getDelta() );
          this.objects[ animName ][ 'prevTime' ] = curTime;
        }
      }else{
        this.animMixer[ animName ].update( this.clock.getDelta() );
      }
    }
  }

  // -- -- -- 

  destroy( animName ){
    if( this.objNames.includes( animName ) ){
      this.animMixer[ animName ].stopAllAction();
      delete this.animMixer[ animName ];
      delete this.objects[ animName ];
      let idx = this.objNames.indexOf( animName );
      this.objNames.splice( idx, 1 );
    }
  }

}