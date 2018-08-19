# Spinal Tap Case

## Problem Description
Convert the given string to a lowercase sentence with words joined by dashes.

### My Solution
```
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  //Split words by spaces or UpperCases
  str=str.split(/(?=[A-Z]|\s+)/);
  //Remove spaces as words
  str=str.filter(function(item){
    if(item!==" "){
      return item;}
  });
  str=str.join("-");
  str=str.replace(/_|\s/g,'');
  return str.toLowerCase();
}
```

**Code Explanation**:
1. Split words by upper case letters or space, that goes into an array.
2. Remove the words that are space (" "), no letter characters on it.
3. Join the words with dashes; then replace any symbol or extra space; 
and finally transform all characters to lower case.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case).

### Basic Code Solution (FCC)
```
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}
```

**Code Explanation**:
* regex contains the regular expression '/\s+|_+/g', which will select all white spaces and underscores.
* The first 'replace()' puts a space before any encountered uppercase characters in the string **str** so that the spaces can be replaced by dashes later on.
* While returning the string, another 'replace()' replaces spaces and underscores with dashes using regex.

### Intermediate Code Solution (FCC)
```
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}
```

**Code Explanation**:
* Similar to the first solution, the first *replace()* puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
* Instead of using *replace()* here to replace whitespace and underscores with dashes, the string is *split()* on the regular expression */(?:_| )+/* and *join()*-ed on *-*.

### Advanced Code Solution (FCC)
```
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
```
**Code Explanation**:
* Split the string at one of the following conditions (converted to an array)
  * a whitespace character [\s] is encountered
  * underscore character [_] is encountered
  * or is followed by an uppercase letter [(?=[A-Z])]
* Join the array using a hyphen (-)
* Lowercase the whole resulting string

### Discussion
My solution is worthy a basic solution level, a complicated one. 
I was messy with RegEx, so I adapted what wasn't working by removing the
extra spaces and other symbols at the end.

Definitely, a good regular expression on the advanced solution, 
that can bring all the boys to the yard.