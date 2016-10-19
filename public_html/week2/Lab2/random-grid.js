/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var label = document.querySelector('label');

var textField = document.querySelector('input[name="number"]');
var generateBtn = document.querySelector('input[name="generate"]');

var divToAdd = document.querySelector('div');


var stacks = []; //rows
var items = []; //cols

generateBtn.addEventListener('click', generateGrid);



function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateGrid()
{
    var gridSize = parseInt(textField.value);
    var html = '';
    var numOfItems = gridSize * gridSize;
    var sum = 0;
    var average = '';
    html += '<table class="randomGrid">';
    /* rows */
    for (var i = 0; i < gridSize; i++)
    {
        html += '<tr>';
        /* cols */
        for (var j = 0; j < gridSize; j++)
        {
            items[j] = randomNumber(0, 100);
            if ((items[j] % 3) == 0) {
                html += '<td class="red">';

            } else  if ((items[j] % 5) == 0) {
                html += '<td class="blue">';

            } else {
                html += '<td class="white">';

            }
            sum += items[j];
            html += items[j];
            html += '</td>';
        }
        
        //stacks.push(items.slice());

        html += '</tr>';
        


    }
    html += '</table>';
    average += '<label>' + (sum / numOfItems) + '</label>';
    divToAdd.innerHTML += html;
    divToAdd.innerHTML += average;
    
}


