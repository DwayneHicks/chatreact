window.onload = function() {

    let setFocus = function(currTarg) {
      let inputArray = document.querySelectorAll(currTarg);
      for (let i = 0; i < inputArray.length; i++) {
        let textValue = inputArray[i].value;
        inputArray[i].addEventListener("focus", function(event) {
          delValueOnInput(textValue, event, i);
        }, false);
        inputArray[i].addEventListener("blur", function(event) {
          returnValueOnInput(textValue, event, i);
        }, false);
      }
      function delValueOnInput(textValue, event, i) {
        if (event.target == inputArray[i]) {
          if (event.target.value == textValue) {
            event.target.value = '';
          }
        }
        
      }
      function returnValueOnInput(textValue, event, i) {
        if (event.target == inputArray[i]) {
          if (event.target.value == '') {
            event.target.value = textValue;
          }
        }
      }
    }
    
    setFocus('.asideMessageTopBox__input');
    // setFocus('.globalSettings__input');
    // setFocus('.settingsSelect__input');
    // setFocus('.popup__input');
    setFocus('.inputTextChat');
    
    // set class when focus
    
    let setFocusClass = function(inputId, inputIdBox, nClass) {
    
      let inputTarg = document.getElementById(inputId);
      let inputTargBox = document.getElementById(inputId);
      inputTarg.addEventListener("focus", function(event) {
        this.parentElement.classList.add(nClass);
      }, false);
      inputTarg.addEventListener("blur", function(event) {
        this.parentElement.classList.remove(nClass);
      }, false);
    
    }
    
    if (document.getElementById('asideMessageTopBox__input')) {
      setFocusClass('asideMessageTopBox__input', 'asideMessageTopBox__inputBox', 'foc');
    }
    
    
    
    
    // Decorate select tag
    
    let decorateSelect = function() {
    
      var x, i, j, selElmnt, a, b, c;
    
    x = document.getElementsByClassName("globalSettingsSelect");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    
      // aaf = document.createElement("DIV");
      // aaf.setAttribute("class", "select-selected-wrapper");
      // aaf.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    
      // a.appendChild(aaf);
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        if (selElmnt.options[j].hasAttribute("disabled")) {
          c = document.createElement("DIV");
          c.classList.add('dis')
        } else if (selElmnt.options[j].classList.contains("checkbx")) {
          c = document.createElement("DIV");
          c.classList.add('check')
        } else {
          c = document.createElement("DIV");
        }
        
        c.innerHTML = selElmnt.options[j].innerHTML;
        
        c.addEventListener("click", function(e) {
          if(this.classList.contains('dis')) {
            e.stopPropagation();
          } else if (this.classList.contains('check')) {
            e.stopPropagation();
            if (this.classList.contains('mark')) {
              this.classList.remove('mark');
            } else {
              this.classList.add('mark');
            }
            
          } else {
              /*when an item is clicked, update the original select box,
              and the selected item:*/
              if (this.classList.contains('dis')) {
                return false;
              } else {
              var y, i, k, s, h;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              h = this.parentNode.previousSibling;
              for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
            }
          }
           
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      // x[i].addEventListener("click", function(e) {
      //   /*when the select box is clicked, close any other select boxes,
      //   and open/close the current select box:*/
      //   e.stopPropagation();
      //   closeAllSelect(this);
      //   this.childNodes[4].classList.toggle("select-hide");
      //   this.childNodes[3].classList.toggle("select-arrow-active");
      //   console.log('Привет!');
      // });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    
    }
    
    
    decorateSelect();
    
    
    
    
    // AddClassActivePopup
    
    let AddClass = function(bCur, pCur, xCur, cName) {
      let buttonCur = document.getElementById(bCur),
      buttonCur2 = document.getElementById(xCur),
      popupCur = document.getElementById(pCur);
    
      buttonCur.addEventListener("click", function(event) {
        if (buttonCur.classList.contains(cName)) {
          buttonCur.classList.remove(cName);
          popupCur.classList.remove(cName);
          buttonCur2.classList.remove(cName);
        } else {
          buttonCur.classList.add(cName);
          popupCur.classList.add(cName);
          buttonCur2.classList.add(cName);
        }
      }, false);
    }
    
    AddClass('tabStat__iconBtn', 'tabStat', 'asideChatWindow__topLine', 'active');
    
    
    // Set focus and adding class
    
    let addClassFocus = function(txtArea, nameCl) {
      let textArea = document.getElementById(txtArea);
      textArea.addEventListener("focus", function(event) {
        textArea.classList.add(nameCl)
      }, false);
      textArea.addEventListener("blur", function(event) {
        textArea.classList.remove(nameCl)
      }, false);
      
    }
    
    addClassFocus('inputTextChat', 'focus');
    
    // Init AddClassActive
    
    let initDrop = function(targBlock, classTargBlock, classNameAdded, closeBlock) {
      let targBox = document.querySelectorAll(targBlock);
          
      document.addEventListener('click', initClick, false);
      
      function initClick(event) {
        
        for (let i = 0; i < targBox.length; i++) {
          let relatedTarget = event.target;
          dropBox = targBox[i].querySelector(classTargBlock),
          closeBtn = targBox[i].querySelector(closeBlock);
          
          dropBox.classList.remove(classNameAdded);
          while (relatedTarget) {
            if (relatedTarget == targBox[i]) {
              dropBox.classList.add(classNameAdded);
            } else if (closeBtn !== undefined) {
              if (relatedTarget == closeBtn) {
                dropBox.classList.remove(classNameAdded);
                return;
              }
            }
            relatedTarget = relatedTarget.parentNode;
          }
    
        }
      }
    }
    
    initDrop('.asideChatWindow__btnDotted', '.asideChatWindow__dropBox', 'active');
    initDrop('.chatInput__btnDotted', '.chatInput__dropBox', 'active');
    initDrop('.message__btnDotted', '.message__dropBox', 'active');
    
    // Init AddClassButton
    
    let AddClassButton = function(idBtnTarg, idBtn, clName) {
      let idBtnTarget = document.getElementById(idBtnTarg);
      let idBtnDrop = document.getElementById(idBtn);
      idBtnTarget.addEventListener("click", function(event) {
        if (this.classList.contains(clName)) {
          this.classList.remove(clName);
          idBtnDrop.classList.remove(clName);
        } else {
          this.classList.add(clName)
          idBtnDrop.classList.add(clName)
        }
      }, false);
    }
    
    AddClassButton('btnEdit', 'chatDropEditMess', 'active');
    
    
    
    // Init vertical and horiz changing size smile's block
    
    let changeBlockSize = function(idBtnWidthTarg, idBtnHeightTarg, mainBox, clWidth, clHeight) {
      let btnWidthTarg = document.getElementById(idBtnWidthTarg);
      let btnHeightTarg = document.getElementById(idBtnHeightTarg);
    
      let mainContainer = document.getElementById(mainBox);
        
      btnWidthTarg.addEventListener("click", function(event) {
        if (this.classList.contains(clWidth)) {
          this.classList.remove(clWidth);
          mainContainer.classList.remove(clWidth);
          btnHeightTarg.classList.remove(clHeight);
          mainContainer.classList.remove(clHeight);
        } else {
          this.classList.add(clWidth);
          mainContainer.classList.add(clWidth);
          
          
        }
      }, false);
    
      
        btnHeightTarg.addEventListener("click", function(event) {
    
          if (btnWidthTarg.classList.contains(clWidth)) {
            if (this.classList.contains(clHeight)) {
              this.classList.remove(clHeight);
              mainContainer.classList.remove(clHeight);
            } else {
              this.classList.add(clHeight)
              mainContainer.classList.add(clHeight)
            }
          } else {
            btnHeightTarg.classList.remove(clHeight);
          }
    
          
        }, false);
      
    
      
    }
    
    
    changeBlockSize('btnArrow', 'btnSmile', 'chatInput__smileBox', 'width', 'height');
    
    };
    
    
    
    
    
    
    
    
    
    