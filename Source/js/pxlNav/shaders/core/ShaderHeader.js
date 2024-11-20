
///////////////////////////////////////////////////////////
// Header and Quality Information                       //
/////////////////////////////////////////////////////////

export function shaderHeader(){
  let ret=`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif
        `;
  /*if(pxlQuality.percent>.5){
    ret+=`
      #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
      #else
        precision mediump float;
      #endif
            `;
  }else if(pxlQuality.percent>.2){
    ret+=`
      precision mediump float;
            `;
  }else{
    ret+=`
      precision lowp float;
            `;
  }*/
    
  return ret;
}
