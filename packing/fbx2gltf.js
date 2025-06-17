// If you plan on using FBX2GLTF, you need to have the fbx2gltf executable in the packing directory.
//   You can download it from here -
//     https://github.com/facebookincubator/FBX2glTF
//   This module exists, but I haven't used it for this project -
//     https://www.npmjs.com/package/fbx2gltf


const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to find all .gltf and .glb files recursively
function findFBXFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(findFBXFiles(filePath));
        } else {
            if (file.endsWith('.fbx')) {
                results.push(filePath);
            }
        }
    }
    return results;
}

// Start scanning from the assets directory
const baseDir = path.join(__dirname, '..', 'docs', 'js', 'pxlRooms');

try {
    const files = findFBXFiles(baseDir);
    
    if (files.length === 0) {
        console.log('No .gltf or .glb files found.');
        return;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Process files sequentially
    let currentFileIndex = 0;

    function processNextFile() {
        if (currentFileIndex >= files.length) {
            rl.close();
            return;
        }

        const file = files[currentFileIndex];

        const shortName = "." + file.replace(__dirname, '');
        
        rl.question(`Do you want to process the file ${shortName}? (yes/no) `, (answer) => {
            if( ["yes","y"].includes(answer.toLowerCase()) ){
                console.log(`Processing file ${shortName}...`);
                //const env = Object.assign({}, process.env, { TOKTX_PATH: '.\\packing\\toktk.exe', shell: true });
                const env = { shell: true };
                const fileOutput = file.replace('.fbx', '.glb');
                //const command = `.\\packing\\fbx2gltf.exe  --binary --draco --verbose --input ${file} --output ${fileOutput}`;
                const command = `.\\packing\\fbx2gltf.exe  --binary --verbose --input ${file} --output ${fileOutput}`;
                exec(command, env, (err, stdout, stderr) => {
                    if( err ){
                        console.error(`Error processing file ${shortName}:`, err);
                    }else if( stderr ){
                        console.error(`Error output for file ${shortName}:`, stderr);
                    }else{
                        console.log(`Successfully processed file ${shortName}:`, stdout);
                    }
                    
                    currentFileIndex++;
                    processNextFile();
                });
            }else{
                console.log(`Skipping file ${shortName}`);
                currentFileIndex++;
                processNextFile();
            }
        });
    }

    processNextFile();

} catch (err) {
    console.error('Error scanning directory:', err);
}