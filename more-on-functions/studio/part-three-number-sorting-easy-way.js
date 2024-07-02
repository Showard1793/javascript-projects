//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let nums4 = [5, 10, 2, 42];
let nums5 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums6 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

//Sort each array in decending order.

function findMinValue(arr){
    let minValue = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
        minValue = arr[i]; 
      }
    }
  
    return minValue;
  }

  function findMaxValue(arr){
    let maxValue = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > minValue) {
        minValue = arr[i]; 
      }
    }
  
    return minValue;
  }
 
 
 function sortArray (arr){
    let sortedArr = [];
    while (arr.length > 0){
   sortedArr.unshift(findMinValue(arr)) 
   arr.splice(arr.indexOf(findMinValue(arr)), 1);
    }
    return sortedArr;
 }
 
 console.log(sortArray(nums3));