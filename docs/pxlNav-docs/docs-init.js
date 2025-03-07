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

    const matchRegSlash = /(\/)/;

    let navPages = document.body.getElementsByTagName("li");
    if( navPages.length > 0 ){
      [...navPages].forEach((e)=>{
        if( e.hasAttribute("data-type") ){
          return;
        }
        let a = e.children;
        if( a.length > 0 ){
          a = a[0];
          let matchSlash = a.innerText.match( matchRegSlash );
          if( matchSlash ){
            a.innerText = a.innerText.replace( matchRegSlash, ".");
          }
        }
      });
    }
    
    let pageHeader = document.body.getElementsByTagName("h1");
    if( pageHeader.length > 0 ){
      let matchSlash = pageHeader[0].innerText.match( matchRegSlash );
      if( matchSlash ){
        pageHeader[0].innerText = pageHeader[0].innerText.replace( matchRegSlash, ".");
      }
    }

    let methods = document.body.getElementsByTagName("h4");
    if( methods.length > 0 ){
      let header = document.getElementsByTagName('header');
      if( header.length > 0 ){
        header = header[0];
        
        const matchRegOct = /\w*(#)/;

        
        let headerHeader = header.getElementsByTagName('h2');
        if( headerHeader.length > 0 ){
          let matchSlash = headerHeader[0].innerText.match( matchRegSlash );
          if( matchSlash ){
            headerHeader[0].innerText = headerHeader[0].innerText.replace( matchRegSlash, ".");
          }
        }
  
        let methodAnchor = document.createElement('a');
        methodAnchor.href = "#Methods";
        header.appendChild(methodAnchor);
  
        // Add methods header
        let methodsHeader = document.createElement('h3');
        methodsHeader.innerText = "Method List";
        methodsHeader.name = "MethodList";
        header.appendChild(methodsHeader);
  
        let headerHeight = header.offsetHeight;
  
        // For anchors
        let methodNames = [];
  
  
        // Add anchor tag to method header
        [...methods].forEach((e)=>{
            
            // Gather anchor names
            let name = e.innerText.replace("(static)\n","").split("(")[0].split(":")[0].split("\n")[0];
            if( name.includes("#")){
              name = name.replace( matchRegOct, "");
            }
            if( name.includes("/") ){
              nameSplit = name.split(" ");
              name = [];
              nameSplit.forEach((e)=>{
                if( e.includes("/") ){
                  e = e.split("/")[1];
                }
                name.push(e);
              });
              name = name.join(" ");
            }

            methodNames.push(name);
            e.id = name;
  
            // Add ^Top link to each method
            let aTop = document.createElement('a');
            aTop.href = `#MethodList`;
            aTop.innerText = "^Top";
            // Scroll to top of page
            aTop.onclick = (e) => {
              window.scrollTo(0, headerHeight);
            };
  
            // Build grid template columns
            let match = e.innerHTML.match( matchRegOct );
            if( match){
              e.innerHTML = e.innerHTML.replace( matchRegOct, "");
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