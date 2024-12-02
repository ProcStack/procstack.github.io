// worker.js
self.onmessage = async (event) => {
  const { type, data } = event.data;

  switch (type) {
    case "processFrame":
      const pose = await poseModel.estimate(imageData);
      self.postMessage({ type: "result", pose });
      break;

    default:
      console.warn("Unknown message type:", type);
  }
};
