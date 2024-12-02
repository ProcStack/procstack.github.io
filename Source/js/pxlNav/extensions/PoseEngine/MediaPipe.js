export class MediaPipePlugin {
  constructor() {
    this.workerScriptUrl = "./PoseEngine_worker.js";
    this.worker = null;
    this.booted = false;
  }

  /**
   * Dynamically loads a script with progress tracking
   * @param {string} src - The URL of the script
   * @param {Function} onProgress - Callback for progress updates
   */
  static async loadScriptWithProgress(src, onProgress) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.responseType = "text";

      xhr.onprogress = (event) => {
        if (event.lengthComputable && typeof onProgress === "function") {
          const progress = Math.round((event.loaded / event.total) * 100);
          onProgress(progress);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const script = document.createElement("script");
          script.textContent = xhr.responseText;
          document.head.appendChild(script);
          resolve();
        } else {
          reject(new Error(`Failed to load script: ${src}`));
        }
      };

      xhr.onerror = () => reject(new Error(`Network error while loading: ${src}`));
      xhr.send();
    });
  }

  /**
   * Initializes the MediaPipe library and WebWorker
   * @param {Function} onProgress - Callback for script loading progress
   */
  async init(onProgress) {
    const mediaPipeUrl = "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js";

    try {
      // Load MediaPipe from CDN
      console.log("Loading MediaPipe...");
      await MediaPipePlugin.loadScriptWithProgress(mediaPipeUrl, onProgress);

      // Initialize WebWorker
      this.worker = new Worker(this.workerScriptUrl);
      this.booted = true;
      console.log("MediaPipe Plugin Initialized");
    } catch (error) {
      console.error("Error initializing MediaPipePlugin:", error);
    }
  }

  // -- -- --
  // Worker Helper Functions

  sendMessage(message) {
    if (!this.booted) {
      console.warn("MediaPipePlugin is not initialized.");
      return;
    }
    this.worker.postMessage(message);
  }

  onMessage(callback) {
    if (!this.worker) {
      console.warn("WebWorker not initialized.");
      return;
    }
    this.worker.onmessage = (event) => callback(event.data);
  }

  terminateWorker() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
      console.log("WebWorker terminated.");
    }
  }
}
