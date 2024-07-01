//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let practice = function(myArg) {
    if (typeof myArg === "number") {
       return myArg * 3;
    }
    if (typeof myArg === "string"){
        return "ARRR";
    } else {
        return myArg;
    }
 }


 

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let transformation = function(myArr){
    let newArr = [];
        for (i = 0; i < myArr.length; i++){
        if (typeof myArr[i] === "number"){
            newArr[i] = myArr[i] * 3;
        } else if (typeof myArr[i] === "string"){
            newArr[i] = "ARRRR!";
        } else { newArr[i] =myArr[i];
        }
    }
    return newArr;
}
    
     console.log(transformation(arr));