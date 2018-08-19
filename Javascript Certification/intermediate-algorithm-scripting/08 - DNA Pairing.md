# Search and Replace

## Problem Description
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
[Base pairs](https://en.wikipedia.org/wiki/Base_pair) 
are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]].
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### My Solution
```
function pairElement(str) {
  let baseP=[["A","T"],["C","G"],["G","C"],["T","A"]];
  let finalP=[];
  
  //match with baseP by first letter of (str and baseP[])
  for (let i=0; i<str.length; i++){
    finalP.push(baseP.find(elem => elem[0]==str[i]));
  };
  return finalP;
}
```

**Code Explanation**:
First let's create an array with all the base-pairs to be 
used later. Second, with a loop, each letter from *str* will be
paired with the first letter of each array inside the 
base-pairs array (*baseP*). With that find done, we push the
found array into *finalP*, the array with all DNA pairing done.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace).

### Basic Code Solution (FCC)
```
function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }
```

**Code Explanation**:
* The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
* Since we have to the original and the pair, I decided to take all four cases instead of the base two.
* Create an empty array and use the *search* function to push the right values to the array and return them.

### Intermediate Code Solution (FCC)
```
function pairElement(str) {
      //define a map object with all pair possibilities 
      var map = {T:'A', A:'T', G:'C', C:'G'};
      //split str into a char Array
      strArr = str.split('');
      //replace each Array item with a 2d Array using map
      for (var i=0;i<strArr.length;i++){
        strArr[i]=[strArr[i], map[strArr[i]]];
      }
     return strArr;
    }
```

**Code Explanation**:
* First define an object with all pair possibilities, this allows us to easily find by key or value.
* Split *str* into a characters array so we can use each letter to find its pair.
* Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.

### Discussion
My solution is an intermediate level, while the
intermediate freeCodeCamp solution is an advanced level. 
It was tricky to fully understand the problem, but after several
readings, I came up with a simple idea to solve it.
Creating the base-pairs that are used to write the DNA. Then,
with a loop we can push into the final array, the
piece of base-pairs, where the first letter is equal to
the character in *str*.

I like the basic solution due to use of *switch*, a simple idea,
but not mine. The advanced solution uses a map object, but it 
is necessary to transform a string into an array of characters.