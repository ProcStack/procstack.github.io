// CLI Site Builder; Standalone

  var neurousCSS = browserify({
    entries: ['source/style/Neurous.css'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });
  neurousCSS.on('update', runUglifyCSS);

  runBrowserify () {
    const {exec} = require("child_process")
    let inputFile = "source/js/Neurous.js"
    let outputFile = "Public/js/Neurous.min.js"
    let cmd = `browserify ${inputFile} | uglifyjs -cm --mangle toplevel > ${outputFile}`

    let startTime = Date.now()
    exec(cmd, (err)=>{
      let endTime = Date.now()
      let durationTime = endTime - startTime
      console.log("-- -- -- --")
      if(err){
        console.log("  Browserify -> Uglifyjs; Errored - ")
        console.log(err)
      }else{
        console.log(`  Browserify -> Uglifyjs; Completed Successfully - ${outputFile}`)
      }
      console.log(`  Elapsed Time : ${durationTime} ms`)
      console.log("-- -- -- --")
      
      getFileVersions("jsVersion") // Get updated bundle modified time
    })
  }
    
    
  runUglifyCSS () {
    let inputFileCSS = "source/style/Neurous.css"
    let outputFileCSS = "Public/style/Neurous.min.css"
    let cmdCSS = `uglifycss ${inputFileCSS} > ${outputFileCSS}`
    exec(cmdCSS, (err)=>{
      let endTime = Date.now()
      let durationTime = endTime - startTime
      console.log("-- -- -- --")
      if(err){
        console.log("  Uglifycss; Errored - ")
        console.log(err)
      }else{
        console.log(`  Uglifycss; Completed Successfully - ${outputFileCSS}`)
      }
      console.log(`  Elapsed Time : ${durationTime} ms`)
      console.log("-- -- -- --")
      
      getFileVersions("cssVersion") // Get updated bundle modified time
    })
    
  }
  
  runBrowserify()
  runUglifyCSS()