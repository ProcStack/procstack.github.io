// Update the JSDoc + Docdash Template 
//   Written by Kevin Edzenga; 2025
// -- -- -- -- -- -- -- -- -- -- -- --
//   Add a Method Link List to the top to each method
//   Add `^Top` link to each method header
//
//  Concept From -
//    https://realworldjs.medium.com/automatic-documentation-for-javascript-projects-readme-jsdoc-mermaid-86b86be9b28d
//



/* eslint-disable */
function fixNavLinks(){
  return new Promise((resolve, reject) => {
    // find li elements to fix any Docdash issues
    let navObj = document.body.getElementsByTagName("nav");
    if( navObj.length > 0 ){
      navObj = navObj[0];
      let aTags = navObj.getElementsByTagName("a");
      [...aTags].forEach((e)=>{
        e.href = e.href.replace( "%252520", "%2520");
        if( e.innerText.includes("#") ){
          let innerHTML = e.innerHTML.replace( /\w*(#)/, ""); 
          e.innerHTML = innerHTML;
          let href = e.href;
          if( href.includes("#")){
            let splitHref = href.split("#");
            if( splitHref.length > 2 ){
              e.href = splitHref[0] + "#" + splitHref[2];
            }
          }
        }
      });
    }
    resolve();
  });
}

/* eslint-disable */
function gatherMethodList(){
  return new Promise((resolve, reject) => {

    let methods = document.body.getElementsByTagName("h4");
    if( methods.length > 0 ){
      let header = document.getElementsByTagName('header');
      if( header.length > 0 ){
        header = header[0];
        
        const matchReg = /\w*(#)/;
  
        let methodAnchor = document.createElement('a');
        methodAnchor.href = "#Methods";
        header.appendChild(methodAnchor);
  
        // Add methods header
        let methodsHeader = document.createElement('h3');
        methodsHeader.innerText = "Methods List";
        methodsHeader.name = "MethodsList";
        header.appendChild(methodsHeader);
  
        let headerHeight = header.offsetHeight;
  
        // For anchors
        let methodNames = [];
  
  
        // Add anchor tag to method header
        [...methods].forEach((e)=>{
            
            // Gather anchor names
            let name = e.innerText.replace("(static)\n","").split("(")[0].split(":")[0].split("\n")[0];
            if( name.includes("#")){
              name = name.replace( /\w*(#)/, "");
            }
            methodNames.push(name);
            e.id = name;
  
            // Add ^Top link to each method
            let aTop = document.createElement('a');
            aTop.href = `#MethodsList`;
            aTop.innerText = "^Top";
            // Scroll to top of page
            aTop.onclick = (e) => {
              window.scrollTo(0, headerHeight);
            };
  
            // Build grid template columns
            let match = e.innerHTML.match( matchReg );
            if( match){
              e.innerHTML = e.innerHTML.replace( matchReg, "");
            }
            let gridAutoColVal = Array( e.children.length ).fill('max-content').join(' ');
            gridAutoColVal += " auto";
            e.style.gridTemplateColumns = gridAutoColVal;
  
            e.appendChild(aTop);
          });
      
        // Add links to methods at top of page
        let methodLinks = methodNames.map((e)=>{return `<a href="#${e}">${e}</a>`});
        let methodLinksHTML = methodLinks.join(" | ");
        let methodLinksDiv = document.createElement('div');
        methodLinksDiv.classList.add('method-links');
        methodLinksDiv.innerHTML = methodLinksHTML;
        header.appendChild(methodLinksDiv);
  
      }
    }
    resolve();
  });
}

/* eslint-disable */
window.addEventListener("load", () => {
  fixNavLinks();
  gatherMethodList();
});