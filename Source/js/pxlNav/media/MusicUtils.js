
export class MusicUtils{
  constructor( ){
    this.audioObject=null;
  }
}
/*
function getPeaksAtThreshold(data, threshold) {
  var peaksArray = [];
  var length = data.length;
  for(var i = 0; i < length;) {
    if (data[i] > threshold) {
      peaksArray.push(i);
      // Skip forward ~ 1/4s to get past this peak.
      i += 10000;
    }
    i++;
  }
  return peaksArray;
}
Filtering
How simple is it to transform our song with the Web Audio API? Here’s an example that passes the song through a low-pass filter and returns it.

// Create offline context
var offlineContext = new OfflineAudioContext(1, buffer.length, buffer.sampleRate);

// Create buffer source
var source = offlineContext.createBufferSource();
source.buffer = buffer;

// Create filter
var filter = offlineContext.createBiquadFilter();
filter.type = "lowpass";

// Pipe the song into the filter, and the filter into the offline context
source.connect(filter);
filter.connect(offlineContext.destination);

// Schedule the song to start playing at time:0
source.start(0);

// Render the song
offlineContext.startRendering()

// Act on the result
offlineContext.oncomplete = function(e) {
  // Filtered buffer!
  var filteredBuffer = e.renderedBuffer;
};




// Function used to return a histogram of peak intervals

function countIntervalsBetweenNearbyPeaks(peaks) {
  var intervalCounts = [];
  peaks.forEach(function(peak, index) {
    for(var i = 0; i < 10; i++) {
      var interval = peaks[index + i] - peak;
      var foundInterval = intervalCounts.some(function(intervalCount) {
        if (intervalCount.interval === interval)
          return intervalCount.count++;
      });
      if (!foundInterval) {
        intervalCounts.push({
          interval: interval,
          count: 1
        });
      }
    }
  });
  return intervalCounts;
}
*/