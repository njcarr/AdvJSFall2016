//****ADD CLASSES****
var label = document.querySelector('label');

var textField = document.querySelector('input[name="words"]');
var addTextBtn = document.querySelector('input[name="add"]');

var divToAdd = document.querySelector('div');


addTextBtn.addEventListener('click',addText ); //anything that the user does to interact with the page, 
                                               //When user clicks on button

function addText() {
      
    if ( textField.value.length ) {
        
        label.classList.remove('error');
        var result = '<p>' + textField.value + '</p>';
        divToAdd.innerHTML += result;
        
     } else {
        label.classList.add('error'); 
     }
    
}




