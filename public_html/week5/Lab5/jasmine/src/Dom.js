'use strict';

function checkInput(selector) {
    var elem = document.querySelector(selector);
    var type = elem.type;
    if(type === 'number')
    {
        return true;
    }
    else
        return false;    
}


function checkText(selector){
    var elem = document.querySelector(selector);
    var textStyle = elem.style.textDecoration;
    return textStyle;
}

//function checkInput(selector){
//    var elem = document.querySelector(selector,);
//
//    if(elem.type === 'number')
//    {
//        return true;       
//    }
//    
//    else
//        return false;     
//}