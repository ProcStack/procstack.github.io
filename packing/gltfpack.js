const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to find all .gltf and .glb files recursively
function findGLTFFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            results = results.concat(findGLTFFiles(filePath));
        } else {
            if (file.endsWith('.gltf') || file.endsWith('.glb')) {
                results.push(filePath);
            }
        }
    }
    return results;
}

// Start scanning from the assets directory
const baseDir = path.join(__dirname, '..', 'docs', 'js', 'pxlRooms');

try {
    const files = findGLTFFiles(baseDir);
    
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
                const command = `.\\packing\\gltfpack -i "${file}" -o "${file}" -cc -kn -km -ke -c -tc -tp -ts 1.0 -v`;
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