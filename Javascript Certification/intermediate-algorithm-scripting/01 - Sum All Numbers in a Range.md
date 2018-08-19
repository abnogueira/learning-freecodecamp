# Sum All Numbers in a Range

## Problem Description
Create a program that will take an array of two numbers who are not necessarily
in order, and then add not just those numbers but any numbers in between. 
For example, [3,1] will be the same as 1+2+3 and not just 3+1.

## My Solution
```
function sumAll(arr) {
    var sortedArr=[], result=0;
    sortedArr=sortedArr.concat(arr).sort(function(a,b) {return a-b});
    for (let i=sortedArr[0]; i<=sortedArr[1]; i++){
        result+=i;
    }
    return result;
}
```

**Code Explanation**:
First create a copy of the original array (reason: functional programming - 
avoid changing the original input array) and sort it (from minor to bigger).
Then loop between the minor value and the biggest value, while incrementally 
adds each value.

Following solutions can be found in [here](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-sum-all-numbers-in-a-range/16083).

## Basic Code Solution (FCC)
```
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}
```

**Code Explanation**:
First create a variable to store the max number between two.
The same as before for the Smallest number.
We create a temporary variable to add the numbers.
Since the numbers might not be always in order, using `max()` and `min()` will help organize.

## Intermediate Code Solution (FCC)
```
function sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}
```

**Code Explanation**:
Firstly, we create a variable called sortedArr which sorts it from the lowest to the highest value.
firstNum is equal to the first number and lastNum is equal to the second number.
Next, using the Arithmetic Progression summing formula we let sum equal (lastNum - firstNum + 1) * (firstNum + lastNum) / 2.
Finally, we return sum.
The line var sortedArr = arr.sort((a,b) => a-b); is probably what will have you more confused. This would be the same as creating a function that returns a-b for the sort() which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.

## Advanced Code Solution (FCC)
```
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}
```

**Code Explanation**:
Creating a variable sum to store the sum of the elements.
Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.

## Discussion
My solution was worthy of the beginner level, using a `for` loop to be able to add
each value to the final variable. Secondly, the first two levels solutions were
not concerned about functional programming as I was, but that's ok.

More importantly, what did I learned with the solutions provided by FreeCodeCamp
guide? Didn't thought that I could have used the arithmetic progression summing
formula as in the intermediate solution. While the advanced solutions took 
advantage of the rest parameter (`...args`), find the minimum and maximum value
and then loop to incrementally add the values and voilá!