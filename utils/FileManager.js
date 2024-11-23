// File Manager
//   Kevin Edzenga; October 2021
//
// Recursively traverse directory structure to gather files
// File modification watcher -
//   FileManager.watchFiles( [FILE_LIST], callback )

const fs = require('fs');

class FileManager{
  constructor( entryDir ){
    this.lists = {}
  }
  async getFileListPromise( entryDir ){
    let tmpThis = this
    return new Promise( async (resolve, reject)=>{
      
      let foundFiles = tmpThis.getFileListingRecursive( entryDir )
      tmpThis.lists[entryDir] = foundFiles
      resolve()
    })
  }
  getFileListingRecursive( readDir ){
    let tmpThis = this
    let files = fs.readdirSync(readDir)
    let returnList = []
    
    for( let x=0; x<files.length; ++x){
      let file = files[x]
      let curPath = readDir + "/" + file
      let isDir = fs.statSync(curPath).isDirectory()
      if( isDir ){
        returnList.push( ...tmpThis.getFileListingRecursive( curPath ) )
      }else{
        returnList.push( curPath )
      }
    }
    return returnList
  }
  watchFiles( fileList, func ){
    fileList.forEach( (file)=>{
      this.watchFile( file, func )
    })
  }
  watchFile( file, func ){
    let watcher = fs.watchFile(file, function (stats) {
      console.log( `File Watcher; '${file}' Updated - ${stats.mtime}` );
      func(file, stats)
    })
  }
}

module.exports = FileManager