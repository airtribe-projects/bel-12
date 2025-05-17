const {add} = require('../src/util.js');

// Group your test cases: Defines a test suite
describe("Test addtiion of 2 numbers", () => {

    test("Should add two positive numbers", () => {
        expect(add(1,2)).toBe(3);
    });
    test("Should add two negative numbers", () => {
        expect(add(-1,-2)).toBe(-3);
    });
    test("Should add a positive and a negative number", () => {
        expect(add(1,-2)).toBe(-1);
    });
    test("Should add two zero numbers", () => {
        expect(add(0,0)).toBe(0);
    });
    
    test("Should accept numbers only", () => {  
        expect(add(1, "Jay")).toBe(null);
    });

    test("Should accept numbers only", () => {  
        expect(add(1, "Jay")).toBe(null);
    });

    test("Should have 2 parameters", () => {  
        expect(add(1)).toBe(null);
        expect(add()).toBe(null);
    });

});