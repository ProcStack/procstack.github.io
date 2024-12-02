import { ExtensionBase } from './ExtensionBase.js';

export class WebCamera extends ExtensionBase {
  constructor(){
    this.video = document.createElement('video');
    this.stream = null;
    this.isInitialized = false;
    this.active = false;
  }

  init(callback) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        this.stream = stream;
        this.video.srcObject = this.stream;
        this.video.play();
        this.isInitialized = true;
        console.log("WebCamera Initialized");
        if (callback) callback(null);
      })
      .catch((error) => {
        console.error("Error initializing WebCamera:", error);
        if (callback) callback(error);
      });
  }

  
  start(callback) {
    if (this.isInitialized) {
      this.active = true;
      console.log("WebCamera Started");
      if (callback) callback(null);
    } else {
      console.error("WebCamera is not initialized");
      if (callback) callback(new Error("WebCamera is not initialized"));
    }
  }

  pause(callback){
    this.stop(callback);
  }

  stop(callback) {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.video.srcObject = null;
      this.isInitialized = false;
      
      console.log("WebCamera Stopped");

      this.active = false;

      if (callback){
        callback(null);
      }
    } else {
      if (callback){
         callback(new Error("WebCamera is not initialized"));
      }
    }
  }
}