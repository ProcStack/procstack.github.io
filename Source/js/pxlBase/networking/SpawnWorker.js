var pieces = ['model1.ply', 'model2.ply', 'model3.ply'];
var workers = new Array(pieces.length);

var material = new THREE.MeshBasicMaterial({color: 0xe8ddcb});

for(let index = 0; index < pieces.length; index++) {
  spawnWorker(index);
}

function spawnWorker(index) {
  if(typeof(Worker) !== "undefined") {
      workers[index] = new Worker('worker.js');
    
      workers[index].addEventListener("message", function (event) {
          var dataBuffer = event.data.buffer;
          var vertices = new Float32Array(dataBuffer);
          var buffer = new THREE.BufferAttribute(vertices, 3);

          var geometry = new THREE.BufferGeometry();
          geometry.addAttribute('position',  buffer);
          geometry.computeVertexNormals();

          var child = new THREE.Mesh(geometry, material);
          child.castShadow = true;
          child.receiveShadow = true;
          child.geometry.verticesNeedUpdate = true;

          scene.add(child);
      }, false);

    workers[index].postMessage(pieces[index]);
  } else {
      console.log("Sorry, your browser does not support Web Workers...");
  }
}