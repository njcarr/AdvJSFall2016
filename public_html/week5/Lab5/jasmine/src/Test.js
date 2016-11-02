'use strict';

function getDollarAmount(str){
    if (typeof str !== 'string') return str;
    var arrayOfStrings = str.split(".");
    var dollar = arrayOfStrings[0];
    if ((dollar[0] === '0') && (dollar.length === 2)){ 
        
        dollar =  dollar.substring(1);
    }
    return dollar;
}

function getCentAmount(str){
    if (typeof str !== 'string') return str;
    var arrayOfStrings = str.split(".");
    var cents = arrayOfStrings[1];
    if ((cents[0] !== '0') && (cents.length === 1)){        
        cents = cents + "0";
    }
    if((cents.length > 2)){
         cents = cents.substring(0,2);       
    }
    if((cents[0] === '0') && (cents.length === 1)){
        cents = "0" + cents;
    }
    return cents;
}