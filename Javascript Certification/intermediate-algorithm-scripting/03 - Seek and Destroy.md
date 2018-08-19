# Seek and Destroy

## Problem Description
You will be provided with an initial array (the first argument 
in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the 
same value as these arguments.

Note: You have to use the 'arguments' object.

### My Solution (based on Beginner Solution by FreeCodeCamp Guide)
```
function destroyer(arr) {
    let finalArr=[];
    finalArr=finalArr.concat(arr);
    for (let i=1; i<arguments.length; i++){
        finalArr=finalArr.filter(item => item !== arguments[i]);
    };
    return finalArr;
}
```

**Code Explanation**:
* Copied the original array to 'finalArr'.
* Loop each argument element (the first one is the initial array),
and applied .filter method to get all the elements that were not
the same as the argument element.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy).

### Basic Code Solution (FCC)
```
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
```

**Code Explanation**:
1. Create an array of arguments using Array.prototype.slice.call() 
and store it in the variable args. We’ll use this to check against arr.
2. Start a basic for loop to iterate through arr. Nest another 
for loop inside the first, changing the integer variable j and 
arr to args. This second loop will iterate through args .
    * Within the second loop create an if statement, checking 
    strictly === that the current val of arr[i] is equal to args[j].
    * If the value at the current index is equal in both arrays, 
    use delete to remove it from arr.
3. Outside of the nested loops: return the modified array using 
the Boolean object as a filter for any nulls created by the delete operator.

### Intermediate Code Solution (FCC)
```
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
```

**Code Explanation**:
1. Declare a variable named args and set it equal to a new Array 
object from() the arguments passed into the function. On the same 
or next line, use the slice() method on args starting from the 
second index, 1. This separates the arguments used for filtering 
into their own array of args.
2. Return the filtered array, using includes() in the callback 
function to check if val is not in args; returning true to keep the 
value in the original array or false to remove it.


### Discussion
This problem was a little bit tricky since my first attempt I assumed
that were only 3 elements on input, then I generalized. I'll classified
my solution almost-intermediate level. Better than basic solution, but
not so simple as the intermediate solution.

Looking at the intermediate solution, I realize that could have used the
.includes method. How simple a solution can be by using .slice, .filter
and .includes.