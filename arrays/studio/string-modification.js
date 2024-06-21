const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them 
//to the end.
//Hint - define another variable to hold the new string or reassign the new string to str. 
let sliceOfNumbers = (str.slice(0,3));
let slicedStr = str.slice(3,str.length);

let combinedStr = slicedStr + sliceOfNumbers;
console.log(combinedStr);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${str} is the original and ${combinedStr} is the modified`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
numberOfCharacters = input.question("How many letters should I slice and paste? ");
numberOfLetters = Number(numberOfCharacters);
sliceOfNumbers = (str.slice(0,numberOfLetters));
slicedStr = str.slice(numberOfLetters,str.length);

combinedStr = slicedStr + sliceOfNumbers;
console.log(combinedStr);

//3) Add validation to your code to deal with user inputs that are longer than the word.
// In such cases, default to moving 3 characters. Also, the template literal should note the
// error.

//If user enters too many letters
if (numberOfLetters > str.length) {
    sliceOfNumbers = (str.slice(0,3));
    slicedStr = str.slice(3,str.length)
    combinedStr = slicedStr + sliceOfNumbers;
    console.log(`You have entered ${numberOfLetters}. That is longer than the word. Defaulting to slice of 3 
    ${combinedStr}`)
//User enters valid number
} else { 
    sliceOfNumbers = (str.slice(0,numberOfLetters));
    slicedStr = str.slice(numberOfLetters,str.length);
    combinedStr = slicedStr + sliceOfNumbers;
    console.log(`${str} is the original and ${combinedStr} is the modified`);
}