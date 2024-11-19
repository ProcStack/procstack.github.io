
var audioStream=null;
var audioProcessor=null;
var audioEQ=[0,0,0,0];
var audioBPM=[0,0];


class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach(channel => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1
      }
    })
    return true
  }
}

registerProcessor('white-noise-processor', WhiteNoiseProcessor)





    let pbTime=process.playbackTime;
    // get the average for the first channel

      
    let threshold=document.getElementById("threshold");
    let tVal=threshold.value*.01 * 256;

    var freqData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(freqData);
    var freqArr=new Array(frequencyChannels).fill(0);
    let aggVolume=0;
    for (let x=0; x<freqData.length; ++x) {
        // draw each pixel with the specific color
        let fVal= freqData[x];
        if(!determineAmbientNoise){
            fVal= Math.max(0, fVal - ambientAgregate[x] );
            fVal=fVal>tVal ? fVal : 0;
        }
        freqArr[x]=fVal;
        aggVolume+=fVal;
        if(x>=frequencyChannels-1){ // Cap domain data
            break;
        }
    }
    var timeDomainData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(timeDomainData);
      
    drawFreqArray("audioCanvas_freq",freqArr);
    drawTimeArray("audioCanvas_time",timeDomainData);
    if(voiceRecording){
        if(detectVoice){
            if(aggVolume>0){
                
                document.getElementById("sayTheWord").innerText="... Listening ..."
                detectVoice=false;
                voiceKillTime=pbTime+voiceTimeLength;
                drawTrainingCanvas(freqArr,timeDomainData);
            }
        }else{
            if(pbTime>voiceKillTime){
                stopRecord();
            }else{
                drawTrainingCanvas(freqArr,timeDomainData);
            }
        }
    }
    if(determineAmbientNoise){
        if(pbTime>voiceKillTime){
            agregateAmbientData();
        }else{
            ambientDataArr.push(freqArr);
        }
    }





function agregateAmbientData(){
  determineAmbientNoise=false;
  let samplingLength=ambientDataArr.length;
  let ambientAverage=new Array(ambientDataArr[0].length).fill(0);
  let ambientMax=new Array(ambientDataArr[0].length).fill(0);
  for(let x=0; x<samplingLength; ++x){
    for(let c=0; c<ambientDataArr[x].length; ++c){
      let curVal=ambientDataArr[x][c];
      ambientAverage[c]+=curVal;
      ambientMax[c]=Math.max(ambientMax[c], curVal);
    }
  }
  for(let x=0; x<ambientAverage.length; ++x){
    ambientAverage[x]/=samplingLength;
  }
  ambientAgregate=ambientAverage;
  ambientAgregate=ambientMax;
  document.getElementById("ambientButton").value="Determine Ambiant Noise";
}

