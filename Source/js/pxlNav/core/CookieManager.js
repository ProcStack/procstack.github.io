/////////////////////////////////////
// pxlCookieManager -
//  Read, Write, Clear, a Check if cookie exist
//  Will prepend a given name to isolate cookies,
//    That said, cookies should be set per room
//    This way dynamic rooms can maintain
//       cookies between Jitsi rooms / Environments

export class CookieManager{
  constructor(prefix="pxlNav-", path="/", expiration=30){
    // Suffix name to help searching and avoid cookie name conflictions
    let prepPrepend= prefix.substring(-1)=="-" ? prefix : prefix+"-" ;
    this.prepend=prepPrepend; 
    
    // Days till expiration
    this.exp=expiration; 
    
    // Update this with the folder name from your domain
    this.path="path="+path; 
    
    // Do not edit this--
    //  This forces cookies to be removed when the expiration value
    //    is set prior to the current date
    this.deleteDate="expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    
    // If variables contain a ';'
    //   The variable will break the cookies for the site
    // Substitute ; with _%_
    this.sub="_%_";
  }
  // Read all document cookies
  pullData(){ 
    let cur=document.cookie;
  }
  // Set expiration date for the new cookie
  getExpiration(){ 
    let d=new Date();
    d.setTime( d.getTime() + (this.exp*24*60*60*1000) );
    return "expires="+d.toGMTString()+";";
  }
  // Convert given value to a string
  valueToString(val){ 
    let type=typeof(val);
    if( !isNaN(Number(val)) ){
      return val;
    }else if(type=="string"){
      return "'"+val+"'";
    }else if(type=="boolean"){
      return (val?"true":"false");
    }else if(val==null){ // null==undefined true; null===undefined false
      return "null";
    }else if(isNaN(Number(val))){
      return "NaN";
    }else{
      return val;
    }
  }
  // Convert a given variable to a string; account for arrays or not
  variableToString(arr){ 
    if(Array.isArray(arr)){
      let ret=arr.map((x)=>{
        if(Array.isArray(x)){
          return this.variableToString(x);
        }
        return this.valueToString(x);
      });
      return "["+ret.join(",")+"]";
    }else{
      return this.valueToString(arr);
    }
  }
  // Check if a cookie exists
  hasCookie(cName){ 
    return document.cookie.includes(this.prepend+cName);
  }
  // Read the value of the cookie; returns string
  readCookie(cName){ 
    if(this.hasCookie(cName)){
      let reg=new RegExp('(?='+this.prepend+cName+').*?((?=;)|(?=$))', 'g');
      
      let val=document.cookie.match(reg)[0].split("=")[1].replace(this.prepend,'').replace(this.sub,';');
      
      return val;
    }
    return null;
  }
  // Read the value of the cookie; returns rectified value
  parseCookie(cName){ 
    if(this.hasCookie(cName)){
      let reg=new RegExp('(?='+this.prepend+cName+').*?((?=;)|(?=$))', 'g');
      
      let val=document.cookie.match(reg)[0].split("=")[1].replace(this.prepend,'').replace(this.sub,';');
      
      if(val=="true"){
        val=true;
      }else if(val=="false"){
        val=false;
      }else if( parseInt(val)==val){
        val=parseInt(val);
      }else if( parseFloat(val)==val){
        val=parseFloat(val);
      }
      return val;
    }
    return null;
  }
  // Is the cookie value equal to a given input?
  isEqual(cName){ 
    if(this.hasCookie(cName)){
      return this.readCookie(cName) == this.variableToString(eval(cName));
    }
    return false;
  }
  // Read all cookie entries with the given suffix
  evalCookie(cName){ 
    if(cName){
      if(this.hasCookie(cName)){
        let reg=new RegExp('(?='+this.prepend+cName+').*?((?=;)|(?=$))', 'g');
        eval(document.cookie.match(reg)[0].replace(this.prepend,'').replace(this.sub,';'));
        return true;
      }
      return false;
    }else{
      let reg=new RegExp('(?='+this.prepend+').*?((?=;)|(?=$))', 'g');
      document.cookie.match(reg).forEach(e=>{eval(e.replace(this.prepend,'').replace(this.sub,';'))});
      return true;
    }
  }
  // Set cookie value; setCookie( string, variable )
  setCookie(cName, cData){ 
    cData=this.variableToString(cData);
    if(cData.replace) cData.replace(";",this.sub);
    document.cookie=this.prepend+cName+"="+cData+";"+this.getExpiration()+this.path;
  }
  
  // Add dictionary keys and values to cookies
  addDictionary(cDict){ 
    let cKeys=Object.keys(cDict);
    for(let x=0; x<cKeys.length;++x){
      let cData=cDict[ cKeys[x] ];
      cData=this.variableToString(cData);
      if(cData.replace) cData.replace(";",this.sub);
      document.cookie=this.prepend+cKeys[x]+"="+cData+";"+this.getExpiration()+this.path;
    }
  }
  // Parse Dict Values, Update if they exist
  //   Overwrites Input Dict
  // Returns if any items in the dict were set
  parseDict(cDict){
    let keys=Object.keys( cDict );
    let ret = false;
    keys.forEach( (k)=>{
      if(this.hasCookie(k)){
        cDict[k]=this.parseCookie(k);
        ret=true;
      }
    });
    return ret;
  }
  // Clear specific cookie entry
  clearCookie(cName){ 
    if(!cName){
      let reg=new RegExp('(?='+this.prepend+').*?(?==)', 'g');
      let curCookies=document.cookie.match(reg);
      curCookies.forEach(c=>{document.cookie=c+"=;"+this.deleteDate+this.path;});
    }else{
      if(typeof(cName)=="string"){
        cName=[cName];
      }
      cName.forEach(c=>{document.cookie=c+"=;"+this.deleteDate+this.path;});
    }
  }
}
