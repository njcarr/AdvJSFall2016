/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var label = document.querySelector('label');

var textField = document.querySelector('input[name="number"]');
var generateBtn = document.querySelector('input[name="generate"]');
//var generateBtn = document.querySelector('#button');

var divToAdd = document.querySelector('div');


var stacks = []; //rows
var items = []; //cols

generateBtn.addEventListener('click', generateGrid );



function randomNumber (min, max)
{
    return Math.floor (Math.random() * (max - min + 1)) + min;
}

function generateGrid()
{
    var gridSize = parseInt(textField.value, 10);
    var html = '';
    html += '<table class="randomGrid">';
    /* rows */
    for (var i = 0; i < gridSize; i++) 
    {
        html += '<tr>';
        /* cols */
        for (var j = 0; j < gridSize; j++)
        {
            items[j] = randomNumber(0, 100);
            if((items[j]%3) == 0){
            var results = '<td class="red">' + items[j] + '</td>';
            html += results;
        }
        if((items[j]%5) == 0){
            var results = '<td class="blue">' + items[j] + '</td>';
            html += results;
        }
        else{
            var results = '<td class="white">' + items[j] + '</td>';
            html += results;
        }
        }        
        //stacks.push(items.slice());
        html += '</tr>';
               
    }
    html += '</table>';
    divToAdd.innerHTML += html;    
}



//function generateGrid()
//{
//    var gridSize = parseInt(textField.value, 10);
//    
//    
//    /* rows */
//    for (var i = 0; i < gridSize; i++) 
//    {              
//        /* cols */
//        for (var j = 0; j < gridSize; j++)
//        {
//            items[j] = randomNumber(0, 100);
//        }
//        
//        stacks.push(items.slice());
//    }
//    divToAdd.innerHTML += '<table>';
//    for (var row in stacks)    {
//        divToAdd.innerHTML += '<tr>';
//       do{
//           
//       }
//    }
//
//}



//for(var i = 1; i < n; i++) {
//    document.body.innerHTML+='<div class="row">';
//
//    for(k = 0; k < n; k++) {
//        document.body.innerHTML+='<div class="gridsquare">' + (j++) + '</div>';
//    }


