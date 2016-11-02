//
//describe("reverseString", function() {
//    
//    it("should take a string and reverse it", function() {
//        expect( reverseString('hello') ).toEqual('olleh');
//    });
//    
//    it("should return the value given if not a typeof String", function() {
//        expect( reverseString(null) ).toBe(null);
//        expect( reverseString(0) ).toEqual(0);
//    });
//
//});
//
//
//describe("getMaxOfArray", function() {
//    
//    it("should take an array of numbers and return the highest value", function() {
//        expect( getMaxOfArray([1,2,3]) ).toEqual(3);
//        expect( getMaxOfArray([1,2,3]) ).toBeGreaterThan(0);
//    });
//    
//    it("should return the value given if not a typeof Array", function() {
//        expect( getMaxOfArray(null) ).toBe(null);
//        expect( getMaxOfArray(0) ).toEqual(0);
//    });
//    
//    it("should return NaN If at least one of the arguments cannot be converted to a number.", function() {
//        expect( getMaxOfArray(['a','b','c']) ).toEqual(NaN);
//    });
//
//});

/*
describe("strUpper", function() {
    
    it("should take a string and return it in all uppercase", function() {
        expect( strUpper('hello') ).toEqual('HELLO');        
    });
    
    it("should return the value given if not a typeof Array", function() {
        expect( strUpper(null) ).toBe(null);
        expect( strUpper(0) ).toEqual(0);
    });
    
});
*/

describe("getDollarAmount", function(){
    
    it("should filter $10.03 to $10", function(){
        expect ( getDollarAmount('10.03') ).toEqual('10');
        expect ( getDollarAmount('01.03') ).toEqual('1');
    });
    it("should filter $0.03 to $0", function(){
        expect ( getDollarAmount('0.03') ).toEqual('0');
    });
    it("should filter $01.3 to $1", function(){
        expect ( getDollarAmount('01.03') ).toEqual('1');
    });
    it("should filter $9.99 to $9", function(){
        expect ( getDollarAmount('9.99') ).toEqual('9');
    });  
});


describe("getCentAmount", function(){
    
    it("should filter $10.03 to 03 cents", function(){
        expect ( getCentAmount('10.03') ).toEqual('03');                                                                
    });
    it("should filter $0.03 to 03 cents", function(){
        expect ( getCentAmount('0.03') ).toEqual('03');
    });
    it("should filter $0.3 to 30 cents", function(){
        expect ( getCentAmount('0.3') ).toEqual('30');
    });
    it("should filter $.3 to 30 cents", function(){
        expect ( getCentAmount('.3') ).toEqual('30');
    });
    it("should filter $.03 to 03 cents", function(){
        expect ( getCentAmount('.03') ).toEqual('03');
    });
    it("should filter $0.0 to 00 cents", function(){
        expect ( getCentAmount('0.0') ).toEqual('00');
    });
    it("should filter $0.00 to 00 cents", function(){
        expect ( getCentAmount('0.00') ).toEqual('00');
    });
    it("should filter $0.99 to 99 cents", function(){
        expect ( getCentAmount('0.99') ).toEqual('99');
    });
    it("should filter $0.001 to 00 cents", function(){
        expect ( getCentAmount('0.001') ).toEqual('00');
    });
    it("should filter $0.009 to 00 cents", function(){
        expect ( getCentAmount('0.009') ).toEqual('00');
    });
    
    
    
    
});