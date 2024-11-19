
export class ShaderEditor {
  constructor( pxlCore, guiManager ){
    
    this.active = false;
    this.name = "GLSL Editor";
    this.type = "shaderGui";
    this.pxlCore = pxlCore;
    this.pxlEnv = pxlCore.pxlEnv;
		this.guiManager = guiManager;
    this.parent = null;
    this.gui = null;
    this.shaderEditorDisplay = null;
    this.children = {};
    
    this.uniformsObj = null;
    this.vertObj = null;
    this.fragObj = null;
    
    this.currentShader = null;
  }
  
  addSlider(parentObj, label, val, min, max, step, callback, args){
    if( typeof(parentObj) == "string" ){
      parentObj=document.getElementById( parentObj );
    }
    let sliderParent=document.createElement("div");
    sliderParent.style.display="grid";
    sliderParent.style.gridAutoFlow="column";
    sliderParent.style.alignItems="center";
    sliderParent.style.gridAutoColumns="max-content auto max-content";
    sliderParent.innerHTML="<div style='font-weight: 700; color: #ffffff; padding: 0px 5px;'>"+label+" : </div>";

    let slider=document.createElement("input");
    slider.type="range";
    slider.style.height="15px";
    slider.style.width="auto";
    slider.min=min;
    slider.max=max;
    slider.step=step;
    slider.value=val;
    sliderParent.appendChild( slider );
    
    let numberDisp=document.createElement("input");
    numberDisp.type="number";
    numberDisp.classList.add("gui_defaultInput");
    numberDisp.style.width="50px";
    numberDisp.style.height="10px";
    numberDisp.style.textAlign="center";
    numberDisp.style.padding="4px 5px 3px 5px";
    numberDisp.value=val;
    
    sliderParent.appendChild( numberDisp );
    numberDisp.onchange=(e)=>{
      slider.value=e.target.value;
    };
    
    slider.onchange=(e)=>{
      numberDisp.value=e.target.value;
      callback(e.target.value, ...args);
    };
    slider.oninput=(e)=>{
      numberDisp.value=e.target.value;
      callback(e.target.value, ...args);
    };
    
    parentObj.appendChild( sliderParent );
  }
  
  updateShaderTextFields( objRead=null ){
    let roomShader;
    let type="shaderGui";
    if( !objRead ){
      objRead= this.pxlEnv.currentRoom==this.pxlEnv.mainRoom ? this.currentShader : this.pxlEnv.roomSceneList[ this.pxlEnv.currentRoom ].getCurrentShader();
    }
    
    try{
      roomShader=this.pxlEnv.roomSceneList[ this.pxlEnv.currentRoom ].readShader(objRead);
    }catch(err){
      return;
    }
    
    let uniforms, vert, frag;
    uniforms=vert=frag="Unable To Load";
    
    
    try{
      roomShader.uniforms['sliders']={type:"v",value:this.pxlEnv.shaderSliderValues};

      uniforms=JSON.stringify( roomShader.uniforms );
      vert=roomShader.vertexShader;
      frag=roomShader.fragmentShader;
      //uniforms=uniforms.replace("{","{\n").replace("}","\n}").replace(",",",\n");
      //uniforms=Object.keys(  roomShader.uniforms );
      uniforms="";
      for( const x in roomShader.uniforms ){
        let curType ="float";
        let typeDict={
        "t":"sampler2D",
        "b":"bool",
        "i":"int",
        "f":"float",
        "v":"vec",
        "c":"vec",
        };
        curType = typeof(roomShader.uniforms[x].value)
        
        if( curType == "object"){
        curType=""
        if("image" in roomShader.uniforms[x].value){
          curType = "sampler2D";
        }else{
          curType = curType + "vec" + (Object.keys(roomShader.uniforms[x].value).length);
        }
        }else{
        if( typeDict.hasOwnProperty( roomShader.uniforms[x].type ) ){
          curType = roomShader.uniforms[x].type=="i" ? "i" : "";
        }
        if( typeDict.hasOwnProperty( roomShader.uniforms[x].type ) ){
          curType = typeDict[roomShader.uniforms[x].type];
        }
        }
        uniforms+= `uniform ${curType} ${x};   `;
      }
      
      vert=vert.replace(/[\t]/g, "  ");
      frag=frag.replace(/[\t]/g, "  ");
    }catch(err){}
    
    if( roomShader ){
      roomShader.needsUpdate=true;
      this.uniformsObj.value = uniforms;
      this.vertObj.value = vert;
      this.fragObj.value = frag;
    }
    

  }
  
  buildShaderEditor(){
    let type="shaderGui";
    
    let shaderDiv=document.createElement( "div" );
    shaderDiv.id="guiShaderEditorBlock";
    shaderDiv.classList.add( "gui_shaderEditorBlockStyle" );
    shaderDiv.style.transition = "max-width .5s ease, opacity .8s, filter .8s";
    this.pxlEnv.pxlGuiDraws.prepPromptFader( shaderDiv );
    this.pxlEnv.pxlGuiDraws.guiWindows[type]={};
    this.pxlEnv.pxlGuiDraws.guiWindows[type].gui=shaderDiv;
    this.pxlEnv.pxlGuiDraws.guiWindows[type].active=false;
    this.gui = shaderDiv;
    
    let curRoom = this.pxlEnv.currentRoom;

    //let geoList = this.pxlEnv.geoList;
    let geoList = this.pxlEnv.roomSceneList[curRoom].geoList;
    let geoKeys=Object.keys( geoList );
    let objectShaderOptions="";
    geoKeys.forEach( (k)=>{
      if( ["Mesh","Points"].includes( geoList[k].type ) ){
        if(geoList[k].material.type == "ShaderMaterial" ){
          let curOpt=k.substring(0,1).toUpperCase()+k.substring(1,k.length);
          objectShaderOptions+="<option value='geo_" + k + "'>" + curOpt + "</option>";
        }
      }
    });

    let avatarSelected="";
    let fogSelected="selected";
    this.pxlEnv.pxlGuiDraws.guiWindows[type].currentShader="script_fog";

    let html=`
    <div id="gui_shaderEditorParent" class="gui_shaderEditorParentStyle">
      <div class="gui_shaderEditorHeaderBlock">
      <div class="gui_shaderEditorOptionBlock">
        <div class="gui_shaderEditorTitleBlock">
        <div class="gui_shaderEditorTitleParent">
            <div id="gui_shaderEditorTitle" clsss="gui_shaderEditorTitleStyle">GLSL Shader Editor</div>
            <div id="gui_shaderEditorHeaderList">
              <label for="shaderEditor_loadShader" style="font-size:.75em;">Edit Shader</label>
              <select name="shaderEditor_loadShader" id="shaderEditor_loadShader" class="pickerStyle">
                <option value="script_avatar" ${avatarSelected}>Avatar</option>
                <option value="script_fog" ${fogSelected}>Fog</option>
                <option value="script_dArrows">Direction Arrows</option>
                <option value="script_userScreens">User Screens</option>
                <option value="script_warpZonePortals">Warp Zone Portals</option>
                <option value="script_lizardking">Item; Lizard King</option>
                <option value="script_majorTom">Item; Major Tom</option>
                <option value="script_fractalSubstrate">Item; Fractal Substrate</option>
                <option value="script_fractalEcho">Item; Fractal Echo Pass</option>
                ${objectShaderOptions}
              </select>
            </div>
          </div>
        <div class="gui_shaderEditorHeaderLine"></div>
        </div>
        <div id="guiShaderUserSliders"></div>
        <span class="gui_shaderEditorFieldParentStyle" style='height:12px'>Uniforms -</span>
      </div>
      <div id="gui_shaderHeaderSpacer" class="gui_shaderHeaderSpacer">
        <span><span class="gui_boldText">Ctrl+Enter</span> - Update Shader on Material</span>
        <br><span>Returns use existing indent spacing type (Spaces  abs)</span>
        <br><span><span class="gui_boldText">Ctrl+D</span> - Duplicate current line</span>
        <br><span><span class="gui_boldText">Ctrl+K</span> - To Comment current/selected lines</span>
        <br><span><span class="gui_boldText">Ctrl+Shift+K</span> - To Uncomment current/selected lines</span>
        <br><span><span class="gui_boldText">Ctrl+NumPad {1,2,3}</span> - Add selection or '.0' into float(), vec2(), vec3() </span>
        <br><span><span class="gui_boldText">Ctrl+{Up,Down,Left,Right}</span> - Searches for selection in direction</span>
      </div>
      </div>
      
      
      <div id="guiShaderFieldParent" class="gui_shaderEditorFieldParentStyle">
      <textarea spellcheck="false" placeholder="Shader Uniforms" rows="3" id="shaderEditor_uniformInput" style="height:unset;" readonly></textarea>
      <span style='height:12px'>Vertex Shader -</span>
      <textarea spellcheck="false" placeholder="Vertex Shader" id="shaderEditor_vertInput"></textarea>
      <span style='height:12px'>Fragment Shader -</span>
      <textarea spellcheck="false" placeholder="Fragment Shader" id="shaderEditor_fragInput"></textarea>
      </div>
      <div id="shader_updateShader" class="shaderEditor_sendMessage">Update Shader</div>
    </div>
    `;
    shaderDiv.innerHTML=html;
    document.body.appendChild( shaderDiv );
    
    let shaderSliders=document.getElementById("guiShaderUserSliders");
    
    this.parentObj=shaderSliders;
      
    let peSliderValues=this.pxlEnv.shaderSliderValues;
    let sliderSetShader=(v, ...c)=>{
      peSliderValues[c[0]]=v;
    };
    
    shaderSliders.style.paddingBottom = "2px";
    this.addSlider(shaderSliders, "sliders.x", 0,-1,1, .01, sliderSetShader, ['x'])
    this.addSlider(shaderSliders, "sliders.y", 0,-5,5, .1, sliderSetShader, ['y'])
    this.addSlider(shaderSliders, "sliders.z", 0,-10,10, .1, sliderSetShader, ['z'])
    this.pxlEnv.pxlGuiDraws.guiWindows[type].shaderSliders=shaderSliders;
      
      
    this.children.shaderParentObj=document.getElementById("shaderEditor_uniformInput").parentNode;
    this.children.titleObj=document.getElementById("gui_shaderEditorTitle");
    this.children.uniformsObj=document.getElementById("shaderEditor_uniformInput");
    this.children.vertObj=document.getElementById("shaderEditor_vertInput");
    this.children.fragObj=document.getElementById("shaderEditor_fragInput");
    this.children.updateObj=document.getElementById("shader_updateShader");
    this.children.headSpacer=document.getElementById("gui_shaderHeaderSpacer");
    this.children.shaderList=document.getElementById("gui_shaderEditorHeaderList");
    this.children.shaderFieldParent=document.getElementById("guiShaderFieldParent");
    this.shaderEditorDisplay=document.getElementById("shaderEditorDisplay");
    let shaderPicker=document.getElementById("shaderEditor_loadShader");
    this.children.shaderSelect=shaderPicker;
    
    let tmpThis=this;
      
      shaderPicker.onchange=(s)=>{
        tmpThis.updateShaderTextFields( shaderPicker.value );
      };
      
      
    /*
      let shaderLinkList=this.pxlEnv.pxlGuiDraws.guiWindows[type].shaderList.children;
      for( let x=0; x<shaderLinkList.length; ++x){
        let l=shaderLinkList[x];
        let curShader=l.getAttribute('shader');
        l.onclick= (e)=>{
          tmpThis.updateShaderTextFields(curShader);
        };
      };*/
      
    
    this.children.updateObj.addEventListener("click", ()=>{
      let unisObj=document.getElementById("shaderEditor_uniformInput");
      let unis=unisObj.value;
      let vertObj=document.getElementById("shaderEditor_vertInput");
      let vert=vertObj.value;
      let fragObj=document.getElementById("shaderEditor_fragInput");
      let frag=fragObj.value;
      
      let stripper=document.createElement("div");
      stripper.innerHTML=unis;
      unis=stripper.innerText;
      stripper.innerHTML=vert;
      vert=stripper.innerText;
      stripper.innerHTML=frag;
      frag=stripper.innerText;
      
      tmpThis.pxlEnv.roomSceneList[ tmpThis.pxlEnv.currentRoom ].setShader( unis, vert, frag );
      //unisObj.blur();
      vertObj.blur();
      fragObj.blur();
      tmpThis.guiManager.pxlNavCanvas.focus();
    });
      
    this.children.vertObj.onfocus=(e)=>{ tmpThis.focusShaderMessage(e,'vertObj'); };
    this.children.vertObj.onkeydown=(e)=>{ tmpThis.keyShaderMessage(e); };
    this.children.vertObj.onmousedown=(e)=>{ tmpThis.mDownShaderMessage(e); };
    this.children.vertObj.onclick=(e)=>{ tmpThis.clickShaderMessage(e); };
    this.children.vertObj.ondblclick=(e)=>{ tmpThis.dblclickShaderMessage(e); };
    this.children.fragObj.onfocus=(e)=>{ tmpThis.focusShaderMessage(e,'fragObj'); };
    this.children.fragObj.onkeydown=(e)=>{ tmpThis.keyShaderMessage(e); };
    this.children.fragObj.onmousedown=(e)=>{ tmpThis.mDownShaderMessage(e); };
    this.children.fragObj.onclick=(e)=>{ tmpThis.clickShaderMessage(e); };
    this.children.fragObj.ondblclick=(e)=>{ tmpThis.dblclickShaderMessage(e); };
    this.mouseX=0;
    this.mouseY=0;
    this.prevSelectStart=0;
    this.prevSelectEnd=0;
  }
  mDownShaderMessage(e){
    this.mouseX=e.x;
    this.mouseY=e.y;
  }
  clickShaderMessage(e){
    if( !this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].dcActive ){
      // ## Not sure why this was needed, but must have been a patch for some jankie antibody gui works
      let dx=Math.abs( this.mouseX-e.x );
      let dy=Math.abs( this.mouseY-e.y );
      let desel=Math.max( dx,dy )<5;
      if(desel){
        let textObj=e.target;
        let posStart=textObj.selectionStart;
        let posEnd=textObj.selectionEnd;
        let pos=parseInt( (posStart+posEnd)*.5 );
        if(posStart!=posEnd){
          this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].prevSelectStart=posStart;
          this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].prevSelectEnd=posEnd;
        }
      }
    }
  }
  dblclickShaderMessage(e){
    let start=this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].prevSelectStart;
    let end=this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].prevSelectEnd;
    let textObj=e.target;
    
    let posStart=textObj.selectionStart;
    let posEnd=textObj.selectionEnd; 
    let textValue=textObj.value;
    let selectStr=textValue.substring(start, end+20 );
    let selectMatcher=selectStr.match(/[a-zA-Z0-9\.\_\[\]]+/);
    if( selectMatcher && !selectStr[0].match(/\n/)){
      end = start+selectMatcher[0].length;
    }
    textObj.setSelectionRange( start, end );
    
    // Prevent deselection of a whole line by triple clicking
    this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].dcActive=true;
    setTimeout( ()=>{
      this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].dcActive=false;
    },500);
  }
  keyShaderMessage(e){
    // Avoid held down keys
    if( e.repeat){ return false; }

    let keyHit=e.key;
    let keyCode=e.code;

    let shift=e.shiftKey;
    let ctrl=e.ctrlKey;
    let alt=e.altKey;
    let numPad=keyCode.includes("Numpad");
    let breaker = keyHit == "Enter" || keyHit == "Tab" || ( keyCode=="KeyD" && ctrl ) || ( keyCode=="KeyK" && ctrl ) || ( numPad && ctrl ) || ( keyCode.includes("Arrow") && ctrl);
    if( !breaker ){ return false; }
    
    e.preventDefault();

    let textObj=e.target;
    
    if( keyCode=="NumpadAdd" ){
      let cs=window.getComputedStyle(textObj);
      let csSize=parseFloat(cs.fontSize) + 2;
      textObj.style.fontSize = csSize;
      return false;
    }
    if( keyCode == "NumpadSubtract" ){
      let cs=window.getComputedStyle(textObj);
      let csSize=parseFloat(cs.fontSize) - 2;
      textObj.style.fontSize = csSize;
      return false;
    }

    let posStart=textObj.selectionStart;
    let posEnd=textObj.selectionEnd; 

    let textValue=textObj.value;
    if( keyCode.includes("Arrow") ){
      if( posStart == posEnd ){
        return false;
      }
      let searchStr=textValue.substring(posStart, posEnd );
      let reg, searchBin, cpos;
      if( keyCode=="ArrowUp" ){
        searchBin=textValue.substring( 0, posStart );
        posStart=searchBin.search( /.*$/ );


        keyCode="ArrowLeft";
      }else if( keyCode=="ArrowDown" ){
        searchBin=textValue.substring( posEnd, textValue.length );
        posEnd=searchBin.search( /\n/ ) + posEnd;

        keyCode="ArrowRight";
      }

      if( keyCode=="ArrowLeft" ){
        reg=new RegExp(searchStr+".*",'gm');
        searchBin=textValue.substring( 0, posStart );

        let mLineMatches= [...searchBin.matchAll( searchStr, "g" )];

        if( mLineMatches.length == 0){
          mLineMatches= [...textValue.matchAll( searchStr, "g" )];

          if( mLineMatches.length == 0){
            return false;
          }
        }
        cpos=mLineMatches.pop().index;
      }
      if( keyCode=="ArrowRight" ){
        reg=new RegExp(searchStr,'m');
        searchBin=textValue.substring( posEnd, textValue.length );

        let searchPos= reg.exec( searchBin );

        if( !searchPos ){
          searchPos= reg.exec( textValue );

          if( !searchPos ){
            return false;
          }
          cpos=searchPos.index;
        }else{
          cpos=searchPos.index + posEnd;
        }
      }
      
      if(cpos>-1){
        let cposEnd=cpos+searchStr.length;
        textObj.setSelectionRange( cpos, cposEnd );

        // Auto scroll to location of selection
        let taRect=textObj.getBoundingClientRect();
        let cs=window.getComputedStyle(textObj);
        let csFont=cs.font;
        let taSplitter=[textValue.slice(0,cpos),"<span id='tmpShaderPosition'>.</span>",textValue.slice(cpos)].join("");
        taSplitter=taSplitter.replace(/(?:\r\n|\r|\n)/g, "<br>");
        let tmpDiv=document.createElement("div");
        tmpDiv.style.position="fixed";
        tmpDiv.style.width=taRect.width;
        tmpDiv.style.height=taRect.height;
        tmpDiv.style.overflowY="scroll";
        tmpDiv.style.font=csFont;
        tmpDiv.innerHTML=taSplitter;
        document.body.appendChild( tmpDiv );
        let tmpSpan=tmpDiv.querySelector( "#tmpShaderPosition" );
        let spanOffsetTop=tmpSpan.offsetTop-200;
        document.body.removeChild( tmpDiv );
        textObj.scrollTo(0, spanOffsetTop);
      }

      return false;
    }
    

    if( keyHit=="Enter" && ctrl){
      this.children.updateObj.click();
      textObj.focus();
      textObj.setSelectionRange( posStart, posEnd );
      return false;
    }


    if(numPad){
      let curSel=textValue.substring( posStart, posEnd );
      let repStr=curSel;
      let hasSel=repStr.length > 0;
      let preBuffer=textValue.substr( posStart-1,1);

      preBuffer = /[\w|\d]/.test(preBuffer) && repStr.length==0 ? " " : ""; // Add a space if need be
      let postBuffer=textValue.substr( posEnd+1,1);
      postBuffer = /[\w|\d]/.test(postBuffer) && repStr.length==0 ? " " : ""; // Add a space if need be

      let postPos=posStart+preBuffer.length;
      if( keyCode=="Numpad1" ){
        let vType= "float(";
        postPos+=vType.length;
        repStr= hasSel ? repStr : ".0" ;
        repStr= vType+repStr+")";
      }else if( keyCode=="Numpad2" ){
        let vType= "vec2(";
        postPos+=vType.length;
        repStr= hasSel ? repStr : ".0, .0" ;
        repStr= vType+repStr+")";
      }else if( keyCode=="Numpad3" ){
        let vType= "vec3(";
        postPos+=vType.length;
        repStr= hasSel ? repStr : ".0, .0, .0" ;
        repStr= vType+repStr+")";
      }
      repStr= preBuffer+repStr+postBuffer;
      document.execCommand("insertText", false, repStr);
      
      if( !hasSel ){
        textObj.setSelectionRange( postPos, postPos );
      }

      return false;
    }
    
    let curPos=Math.min(posStart,posEnd);
    let prevValues=textValue.substr(0, curPos );
    if( keyCode=="KeyK" ){
      let searchSelection=false;
      let runMult=false;
      let cList=[];

      let newStart,origEnd,selection;
      if( posStart != posEnd ){
        newStart=prevValues.search( /.*$/ );
        origEnd=posEnd;
        selection=textValue.substring(newStart, posEnd );
        searchSelection=/\n/.test(selection); // Multi Line Check
      }

      if( !searchSelection){
        let strPos=prevValues.search( /[\S\w].*$/ );
        let forward=false;
        if( strPos == -1 ){ // Ugh...
          let futureValues=textValue.substring(curPos, textValue.length );

          strPos=futureValues.search( /(?:[^\s])/ );

          if( strPos == -1 ){ return false; }

          strPos+=curPos;
          forward=true;
        }

        let cStart=strPos;
        let cEnd= cStart;
        let cText= "";
        if( shift ){
          cEnd+=2;
          let ss=textValue.substr( cStart, 2 );

          if(ss!="//"){
            return false;
          }
          posStart-=2;
          posEnd-=2;
        }else{
          let ss=textValue.substr( cStart, 2 );

          if(ss=="//"){
            return false;
          }
          cText="//";
          posStart+=2;
          posEnd+=2;
        }
        textObj.setSelectionRange( cStart, cEnd );
        document.execCommand("insertText", false, cText);
        textObj.setSelectionRange( posStart, posEnd );

        return false;
      }

      if( searchSelection ){
        // Multi line selections where the last line has no selected text
        //   Find the text and add to range
        let futureValues=textValue.substring(origEnd, textValue.length );
        let newEnd=origEnd+futureValues.search( /\n./ );
        let selection=textValue.substring(newStart, newEnd );

        let selPush=shift ? -2 : 2;
        let mLineMatches= [...selection.matchAll( /[\S\w].*/g )];
        let insertList=[];
        let refStart=posStart-newStart;
        let refEnd=origEnd-newStart;

        mLineMatches.forEach( (m)=>{
          let mid=m.index;
          insertList.push( mid );
        });
        insertList=insertList.reverse(); // Edit text from back to begining
        insertList.forEach( (mid) => {
          let ss=selection.substr( mid, 2 );
          if(shift){
            if(ss!="//"){
              return;
            }

            selection=selection.substring(0,mid)+selection.substring(mid+2,selection.length);
          }else{
            if(ss=="//"){
              return;
            }
            selection=selection.substring(0,mid)+"//"+selection.substring(mid,selection.length);
          }
          posStart+= mid<refStart ? selPush : 0;
          posEnd+= mid<refEnd ? selPush : 0;
        });

        textObj.setSelectionRange( newStart, newEnd );
        document.execCommand("insertText", false, selection);
        textObj.setSelectionRange( posStart, posEnd );
        return false;
      }
      return false;
    }


    let prevValuesList=prevValues.split("\n");

    if( keyHit=="Enter" || keyHit=="Tab" ){
      let curLine=prevValuesList.pop();
      if( curLine.length == 0){
        curLine=prevValuesList.pop();
      }
      let spacer=curLine.replace(/[\S\w].*$/g, "");
      if(keyHit == "Tab"){
        spacer=spacer.length==0 ? " " : spacer.substr(0,1);
        if(spacer === " "){
          spacer="  ";
        }else{
          spacer="\t";
        }
      }else{
        spacer="\n"+spacer;
      }
      
      let inText=spacer;
      let cPosStart=posStart;
      let cPosEnd=posEnd;
      if( keyHit=="Tab" && posStart!=posEnd ){
        let curSel=textValue.substring( posStart, posEnd );
        curSel=curSel.split("\n");
        if( shift ){
          curSel=curSel.map( (s)=>{ return s=="" ? s : s.replace(spacer, "")});
        }else{
          curSel=curSel.map( (s)=>{ return s=="" ? s : spacer+s});
        }
        inText=curSel.join("\n");
        cPosEnd=cPosStart + inText.length;
      }else{
        cPosStart=cPosStart + inText.length;
        cPosEnd=cPosStart;
      }
      document.execCommand("insertText", false, inText);
      textObj.setSelectionRange( cPosStart, cPosEnd );
      return false;
    }

		if(keyCode=="KeyD" && ctrl){
      if( posStart == posEnd ){
        let textValueArray= textValue.split( "\n" );
        prevValuesList.pop()
        let prevCount=prevValuesList.length; 
        let curLine=textValueArray[ prevCount ];
        // ## Kind of a stupid way to find selection locations
        //    What ever, it works
        let retArr=[...prevValuesList, curLine];
        let retString=retArr.join("\n");
        let cursorPos=retString.length;
        curLine="\n" + curLine ;
        textObj.setSelectionRange(cursorPos, cursorPos);
        document.execCommand("insertText", false, curLine);

        cursorPos=curPos+curLine.length;
        textObj.setSelectionRange(cursorPos, cursorPos);
      }else{
        let selection=textValue.substring( posStart, posEnd );
        textObj.setSelectionRange(posEnd, posEnd);
        document.execCommand("insertText", false, selection);
        posEnd+=selection.length;
        textObj.setSelectionRange(posEnd, posEnd);
      }
    }
    return false;
  }
  //
  toggleShaderEditor( active=null ){
		if( !this.gui ){
			this.buildShaderEditor();
		}
		
		this.updateShaderList();
		this.updateShaderTextFields();
		
		active= active==null ? !this.active : active;
		this.active=active;
		this.guiManager.promptFader( this.gui, active );

		if(active){
			this.guiManager.pxlNavCanvas.addEventListener("mousedown", this.shaderFocusPxlCore);
		}else{
			this.guiManager.pxlNavCanvas.removeEventListener("mousedown", this.shaderFocuspxlCore);
		}
		
		setTimeout( ()=>{
			this.resizeShaderElements();
		},10);
  }
  updateShaderList(){
    let pulldown=this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"].shaderSelect;
    if( !pulldown ){
      console.log("No pulldown");
      console.log(this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"]);
      return;
    }
    let editables= this.pxlEnv.roomSceneList[ this.pxlEnv.currentRoom ].getShaderList();
    let pulldownVis="inline-block";
    if( editables ){
      let keys=Object.keys( editables );
      let html="";
      let getSelected=this.pxlEnv.roomSceneList[ this.pxlEnv.currentRoom ].getCurrentShader()
      keys.forEach( (k)=>{
        let sel= k==getSelected ? " selected" : "";
        html+=`<option value="${k}" ${sel}>${editables[k]}</option>`;
      });
      pulldown.innerHTML=html;
    }else{
      pulldownVis="none";
    }
    this.guiWindows.shaderGui.shaderList.style.display= pulldownVis;
    
  }
  
  shaderFocusPxlCore(){
    document.activeElement.blur()
    let fieldParent=document.getElementById("guiShaderEditorBlock");
    fieldParent.style.maxWidth="30vw";
    
    let titleText=document.getElementById("gui_shaderEditorTitle");
    if(titleText){
      //titleText.classList.remove("gui_shaderEditorTitleEditing");
      //titleText.style.transform="scale(.75)";
      titleText.style.fontSize="1em";
      titleText.style.paddingTop="8px";
    }
    
    let helpParent=document.getElementById("gui_shaderHeaderSpacer");
    if( helpParent ){
      helpParent.classList.remove("gui_shaderHeaderSpacerVisible");
      helpParent.style.removeProperty("width");
      helpParent.style.removeProperty("max-width");
    }
  }
  
  resizeShaderElements(){
		let bBarHeight= 0;
		if(this.hudBottomBar){
			bBarHeight = this.hudBottomBar.offsetHeight
		}
		
		let type=["shaderGui"];
		type.forEach( (t)=>{
			if(this.pxlEnv.pxlGuiDraws.guiWindows[t]){
			this.pxlEnv.pxlGuiDraws.guiWindows[t].gui.style.height=this.sH-bBarHeight;
					
			let vertTextTop = this.children.vertObj.getBoundingClientRect().top;
			let bHeight = this.children.updateObj.getBoundingClientRect().height;
			bHeight += 50;
			let pHeight =  this.sH - bHeight - vertTextTop;
			
			this.children.vertObj.style.maxHeight=pHeight*.4+"px";
			this.children.vertObj.displayHeight=pHeight*.4;
			this.children.fragObj.style.maxHeight=pHeight*.6+"px";
			this.children.fragObj.displayHeight=pHeight*.6;
			this.children.fieldBodyHeight=pHeight;
			}
		});
  }
	
  focusShaderMessage(e,area){
    let guiWindow=this.pxlEnv.pxlGuiDraws.guiWindows["shaderGui"];
    let vertSize = guiWindow.vertObj.displayHeight;
    let fragSize = guiWindow.fragObj.displayHeight;
    let minSize = Math.max(150, this.sH * .135);
    let sizeShift= guiWindow.fieldBodyHeight-minSize;
    
    vertSize= area=="vertObj" ? sizeShift : minSize;
    fragSize= area=="fragObj" ? sizeShift : minSize;
    guiWindow.vertObj.style.maxHeight=vertSize+"px";
    guiWindow.fragObj.style.maxHeight=fragSize+"px";
    guiWindow.gui.style.maxWidth="75vw";
    
    //guiWindow.titleObj.classList.add("gui_shaderEditorTitleEditing");
    //guiWindow.titleObj.style.transform="scale(1.5)";
    guiWindow.titleObj.style.fontSize="2em";
    guiWindow.titleObj.style.paddingTop="0px";
    guiWindow.headSpacer.classList.add("gui_shaderHeaderSpacerVisible");
    let hasInnerWidth = guiWindow.headSpacer.hasAttribute("innerWidth");
    if( !hasInnerWidth ){
      (async ()=>{
      let maxHelpWidth=0;
      let helpBlockChildren = guiWindow.headSpacer.children;
      for( const ch of helpBlockChildren ){
        maxHelpWidth = Math.max( maxHelpWidth, ch.getBoundingClientRect()['width'] );
      }
      guiWindow.headSpacer.setAttribute("innerWidth", maxHelpWidth)
      guiWindow.headSpacer.style.width=maxHelpWidth+"px";
      guiWindow.headSpacer.style.maxWidth=maxHelpWidth+"px";
      })();
    }else{
      let maxHelpWidth = guiWindow.headSpacer.getAttribute("innerWidth");
      guiWindow.headSpacer.style.width=maxHelpWidth+"px";
      guiWindow.headSpacer.style.maxWidth=maxHelpWidth+"px";
    }
  }
}