# Wherefore art thou

## Problem Description
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value 
pairs (second argument). Each name and value pair of the source object 
has to be present in the object from the collection if it is to be 
included in the returned array.

### My Solution (based on Beginner Solution by FreeCodeCamp Guide)
```
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  const nameKeys=Object.keys(source);
  arr = collection.filter(function(obj){
    for (let i=0; i<nameKeys.length; i++){
      if(obj.hasOwnProperty(nameKeys[i])==false || obj[nameKeys[i]] !== source[nameKeys[i]]) {
        return false;
      }
    }
    return true;
  });
  // Only change code above this line
  return arr;
}
```

**Code Explanation**:
Since the properties (keys) names can be different and more than one, it is
necessary to save the name of each key of the `source` input.
Then the collection will be filtered based on objects. Each object should have 
inside the collection properties of the `source` and the correspondent field should
be equal of the field in the `source`.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou).

### Basic Code Solution (FCC)
```
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
```

**Code Explanation**:
* We filter through the array using .filter().
* Using a for loop we loop through each item in the object.
* We use a if statement to check if the object in the collection doesn’t have the * key and the property value doesn’t match the value in source.
* We return false if the above if statement is correct. Otherwise, we return true;

### Intermediate Code Solution (FCC)
```
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
```

**Code Explanation**:
* We filter through the collection using .filter().
* Next, we return a Boolean value for the .filter() method.
* Finally, we reduce to Boolean value to be returned for the .every() method.

### Advanced Code Solution (FCC)
```
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    return srcKeys
      .map(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce(function(a, b) {
        return a && b;
      });
  });
}
```
**Code Explanation**:
* We start by filtering through collection using Array.filter().
* Next, we map through all keys and return Boolean values based on the check conditions: both the key and its corresponding value must exist within the object we are filtering through.
* Then we reduce the mapped Boolean values to a single Boolean that indicates whether all srcKeys pass the conditions checked above.
* This single Boolean will be used to filter through the collection.

### Discussion
I was unable to complete this exercise on my own. The first time I tried to solve
I made two wrong assumptions: the name of the properties are the same to each test case (didn't look to test cases) and last, I assumed that
the result will contain every item that has at least one key equal to the source (not all as it should).

Looking at the solutions, I realize that some methods are
still a little obscure how they work, like it happens with filter and the 
functions inside it. I have to practice more with methods.