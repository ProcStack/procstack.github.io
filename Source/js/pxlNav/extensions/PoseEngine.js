
import { ExtensionBase } from './ExtensionBase.js';

const pxlPoseEngineList = [
  'MediaPipe'
  /*
  'PoseNet',
  'FaceEngine',
  'FaceMesh',
  'FaceNet',
  'HandEngine',
  'HandPose',
  'HandNet',
  'HandMesh'
  */
];

export class PoseEngine extends ExtensionBase {
  constructor(modelName) {
    this.active = false;
    this.verbose = false;


    switch (modelName) {
      case 'MediaPipe':
        this.model = new MediaPipePose(); // Google's model
        break;
      default:
        throw new Error("Unknown pose estimation '"+modelName+"' model");
    }
  }

  async estimatePose(input) {
    return await this.model.estimate(input);
  }
}