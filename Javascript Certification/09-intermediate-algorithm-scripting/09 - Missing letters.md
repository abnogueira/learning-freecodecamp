# Search and Replace

## Problem Description
Find the missing letter in the passed letter range and 
return it.
If all letters are present in the range, return *undefined*.

### My Solution
```
function fearNotLetter(str) {
  let abc='abcdefghijklmnopqrstuvwxyz';
  let pieceABC=abc.slice(abc.indexOf(str[0]),abc.indexOf(str[str.length-1])+1);
 
  if (pieceABC==str){
    return undefined;
  }else{
    return pieceABC
    .split('').filter(function(item){
      return !str.includes(item);
      })
    .toString();
  }
}
```

**Code Explanation**:
* First create the base **abc** with all possible letters, 
that will be used for comparison later.
* Then extract a piece of **abc** into **pieceABC**, by using the .slice method, where:
    * *abc.indexOf(str[0])* gets the index in **abc** of the first letter of **str**;
    * *abc.indexOf(str[str.length-1])* gets the index of last letter of **str** in **abc**.
* In order to check if **str** has all the letters in the range,
let's compare the **pieceABC** with **str**, when equal,
undefined is returned (all the letters are there).
* In case some letter is missing, the letter that it's 
included **pieceABC** but not on **str**, is the answer.
I decided to avoid a *for* loop, but only came up with methods
that I can be used with arrays. So, transform the string 
**pieceABC** in to an array (*.split('')*), then by applying
*.filter()* the missing letter can be retrieved from pieceABC; and last action, transform the answer back to a string.

Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace).

### Basic Code Solution (FCC)
```
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");
```

**Code Explanation**:
* This solutions makes use of a *for* loop.
* Code of encountered character is stored in **code**.
* It is checked if code of current character is the expected
 one (no characters are skipped) by using the logic - *code of
 current character = code of first character + number of 
 iterations*.
* If a character is missing, the missing character is found and
the final string is returned.
* *undefined* is returned if there is no missing character in the string.

### Intermediate Code Solution (FCC)
```
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
```

**Code Explanation**:
* First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
* We turn the string to an array in order to map through it instead of using *for* and *while* loops.
* As we *map* through our letters’ character codes, we go comparing with the one that should be in that position.
* If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
* If not, the missing letter will be assigned to the *missing* variable, which will be returned after the map is finished.
* If there are no missing characters, return *undefined*.

### Advanced Code Solution (FCC)
```
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");
```

**Code Explanation**:
* A new string **allChars** is created.
* Create a regular expression **notChars** which selects everything except **str**.
* The *for* loop is used to add all the letters in the range to **allChars**.
* *match()* is used to strip off the **str** letters from the newly created string and it is returned.
If there are no missing characters, return undefined.

### Discussion
I have decided to avoid a *for* loop, to test my abilities to
think out of the box. In fact, having to transform into an array and back to a string later, is unnecessary with the right methods.

Looking to solutions provided in freeCodeCamp guide, I realized
that many methods were new to me.
* fromCharCode - returns a string created from the specified 
sequence of UTF-16 code units.
* charCodeAt - returns an integer between 0 and 65535 
representing the UTF-16 code unit at the given index.

Learning more about string methods is something that I need
to work on.