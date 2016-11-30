/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//function sandbox(tag, className){
//  var el;
//
//  beforeEach(function(){
//    el = document.createElement(tag);
//    //el.classList.Add(className);
//    el.type = 'number';
//    //el.innerHTML = html;
//    document.body.appendChild(el);
//  });

function sandbox1(tag, className, type){
  var el;

  beforeEach(function(){
    el = document.createElement(tag);
    el.classList.add(className);
    el.type = type;
    //el.innerHTML = html;
    document.body.appendChild(el);
  });

  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}

function sandbox2(tag, className, value){
  var el;

  beforeEach(function(){
    el = document.createElement(tag);
    el.classList.add(className);
    el.style.textDecoration = value;
    //el.innerHTML = html;
    document.body.appendChild(el);
  });

  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}



describe("input number only", function(){
  
  sandbox1('input', 'test', 'number');

  it('should return true if the input box value is only numeric', function(){
      var elemType = checkInput('input.test');
      expect( elemType ).toEqual(true);
      expect( elemType ).not.toEqual(false);
  });
});
  

describe("input number and string", function(){
    
   sandbox1('input', 'test', 'text');
   
   it('should return false if the input box is not all numeric', function(){
      var elemType = checkInput('input.test');
      expect(elemType).toEqual(false);
      expect(elemType).not.toEqual(true);      
   });   
});


describe("text decoration set", function(){
   sandbox2('p', 'test', 'overline');
   
   it("should match overline", function(){
      var elemType = checkText('p.test');
      expect(elemType).toEqual('overline');
   });
   
   it("should not match none", function(){
      var elemType = checkText('p.test');
      expect(elemType).not.toEqual('none');
   });
   
   it("should not match underline", function(){
      var elemType = checkText('p.test');
      expect(elemType).not.toEqual('underline');
   });
   
   it("should not match line-through", function(){
       var elemType = checkText('p.test');
       expect(elemType).not.toEqual('line-through');
   });       
});

describe("text-decoration not set", function(){
   sandbox2('p', 'test');
   
   it("should not match overline", function(){
      var elemType = checkText('p.test');
      expect(elemType).not.toEqual('overline');
   });
   
   it("should not match none", function(){
      var elemType = checkText('p.test');
      expect(elemType).not.toEqual('none');
   });
   
   it("should not match underline", function(){
      var elemType = checkText('p.test');
      expect(elemType).not.toEqual('underline');
   });
   
   it("should not match line-through", function(){
       var elemType = checkText('p.test');
       expect(elemType).not.toEqual('line-through');
   });
});


 
  
  

  
//});
//
//describe("getElementContent html", function(){
//  
//  sandbox('div', 'test', '<p>this is a test</p>');
//
//  it('it should find an element and return the innerHTML', function(){
//      var elemContent = getElementContent('div.test p');
//      expect( elemContent ).toEqual('this is a test');
//      expect( elemContent ).not.toEqual('this is a not test');
//  });
//  
// 
//  
//});