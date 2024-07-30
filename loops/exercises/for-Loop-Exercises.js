/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a.
//Testing

for (let i = 0; i < 21; i++){
  console.log(i);
}
//b.
for (let i = 3; i <= 29; i += 3){
  console.log(i);
}
//c. 
for (let i = 12; i >= -14; i -= 2){
  console.log(i);
}
//d.
for (i = 48; i >= 20; i -= 3){
  console.log(i);
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
//a.
let str = "Launchcode";
let arr = [1,5,'LC101','blue',42]

for (i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
//b.
for (i = str.length; i >= 0; i--){
  console.log(str[i])
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let postiveArr = [];
  let negativeArr = [];

  console.log(array.sort());
  //Sort the array

  for (i = 0; i <= array.length; i++) {
    if (array[(i)] >= 0) {
      postiveArr.push(Number(array[i]));
    } else if (array[i] < 0) {
      negativeArr.push(Number(array[i]));
    }
  }

  console.log(postiveArr.sort());
  console.log(negativeArr.sort());