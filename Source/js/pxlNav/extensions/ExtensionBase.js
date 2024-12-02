export class ExtensionBase{
  constructor() {
    this.active = false;
    this.verbose = false;
    this.callbacks = {};
  }
  // -- -- --
  
  init(){
    // Initialize --
  }
  
  // -- -- --

  start() {
    this.active = true;
  }
  pause() {
    this.stop();
  }
  stop() {
    this.active = false;
  }
  
  // -- -- --

  subscribe( event, callback ){
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    this.callbacks[event].push( callback );
  }
  unsubscribe( event, callback ){
    if( this.callbacks[ event ] ) {
      this.callbacks[ event ] = this.callbacks[ event ].filter( fn => fn !== callback );
    }
  }
  emit( event, data ) {
    if( this.callbacks[event] ){
      this.callbacks[ event ].forEach( fn => fn(data) );
    }
  }

  // -- -- --

  destroy(){
    this.disable();
    // Clean up --
  }
}