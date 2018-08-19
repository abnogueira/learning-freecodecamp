# Diff Two Arrays

## Problem Description
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

### My Solution
```
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  let uniqueArr=newArr.concat(arr1).concat(arr2);
  uniqueArr=uniqueArr.filter((v, i, a) => a.indexOf(v) === i);
  for (let i=0; i<uniqueArr.length; i++){
      if (arr1.indexOf(uniqueArr[i])==-1 | arr2.indexOf(uniqueArr[i])==-1){
          newArr.push(uniqueArr[i]);
      }
  }
  return newArr;
}
```

**Code Explanation**:
First concatenate arrays from the input into another array `uniqueArr`, 
where the `.filter` method is applied to get an array with unique 
values (no repeated elements).
Then loop throw elements of `uniqueArr`, and if they are not present 
on at least one of the input arrays, that element will be added to `newArr`.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays).

### Basic Code Solution (FCC)
```
function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }
```

**Code Explanation**:
Read the comments in the code.

### Intermediate Code Solution (FCC)
```
function diffArray(arr1, arr2) {
      return arr1
        .concat(arr2)
        .filter(
            item => !arr1.includes(item) || !arr2.includes(item)
        )
    }
```

**Code Explanation**:
None

### Advanced Code Solution (FCC)
```
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}
```
**Code Explanation**:
None

### Discussion
My solution was worthy of the beginner level, using a .indexOf throw a loop
to be able to check for different elements between both input arrays.

I absolutely love the advanced level's solution, only uses .filter, .concat 
and .includes methods, and checks for each element of arr1 that is not 
included in arr2, and then will concatenate all the elements o arr2 that are 
not included in arr1.