const checkFive = require('./checkFive');

describe("CheckFiveTest", function() {
    
    test("Numbers less than 5 should return 'Num is less than 5.'", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    
    test("Numbers equal to 5 should return 'Num is equal to 5.'", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    test("Numbers greater than 5 should return 'Num is greater than 5.'", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");
    });
});
