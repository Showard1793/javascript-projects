const whoWon = require("../RPS");

describe("whoWon function", function() {

    test("should return 'TIE!' when both players choose the same", function() {
        expect(whoWon('rock', 'rock')).toBe('TIE!');
        expect(whoWon('paper', 'paper')).toBe('TIE!');
        expect(whoWon('scissors', 'scissors')).toBe('TIE!');
    });

    test("should return 'Player 2 wins!' when player 2 wins", function() {
        expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
        expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
        expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
    });

    test("should return 'Player 1 wins!' when player 1 wins", function() {
        expect(whoWon('paper', 'rock')).toBe('Player 1 wins!');
        expect(whoWon('scissors', 'paper')).toBe('Player 1 wins!');
        expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
    });

    test("should return 'made an error' if a player enters something other than rock paper scissors", function(){
        expect(whoWon('banana','rock')).toBe(`Player 1 made an error`)
    })
});