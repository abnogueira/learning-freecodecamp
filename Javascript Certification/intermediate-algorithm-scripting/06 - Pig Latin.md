# Pig Latin

## Problem Description
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) 
of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

### My Solution
```
function translatePigLatin(str) {
  //1st: first letter a vowel
  //2nd: no vowels
  //3rd: starts with constant(s)
  if ((/[aeiou]/i).test(str[0])==true){
    return str.concat('way');
  }else if ((/[aeiou]/i).test(str)==false){
    return str.concat('ay');
  }else{
    const position=str.indexOf(str.match(/[aeiou]/));
    return str.slice(position) + str.slice(0,position) + 'ay';
  }
}
```

**Code Explanation**:
There are three scenarios: 
1. The first letter is a vowel, so it's only needed to concat 'way';
1. There are no vowels, so it's only needed to concat 'ay'. I needed to read the
description several times to understand, that is was only needed to concat 'ay'
and not 'way'.
1. Other cases, which translates into starting with consonant(s). In this case, I
get the ´position' of the first vowel, and with that information, I can build the 
answer. Concat from 'str'[from 'position' to the end of string] with first letters
from 'str'[from start to the position] and then added 'ay'.


Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin).

### Basic Code Solution (FCC)
```
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
```

**Code Explanation**:
* Make an empty string to hold your Pig Latin word.
* Assign your appropriate regular expression to a variable.
* If the first character is a vowel, just add way to end of string and return it.
* If the first character is not a vowel:
  * Find number of consonants before first vowel with help of 'indexOf()', 'match()' and regex.
  * Start Pig Latin string with first vowel till the end.
  * Add letters before first vowel to end of string.
  * 'substr()' is used for string manipulation here.
  * Add ay to end of string and return it.

### Intermediate Code Solution (FCC)
```
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}
```

**Code Explanation**:
* This is a declarative as well as recursive approach to this problem.
* 'check()' is a function which checks for first letter of string to be in the array of vowels, ['a','i','u','e','o'].
* In case of consonants, 'check()' calls itself on the next characters until finding the first vowel.
* It’ll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville’s would be 3.
* Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or "w" accordingly, and then "ay" regardless.

### Advanced Code Solution (FCC)
```
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonants to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}
```

**Code Explanation**:
* 'isConsonant()' is used to check if a character is a consonant.
* If first character is vowel, add way to end of string and return it.
* If first character is not a vowel:
  * Split string into array using 'split()'.
  * Push all consonants to end of array with help of 'shift()' and 'push()'.
  * Convert array to string using 'join()' and add ay to end of string. Return it.

### Discussion
Once again, my solution is worthy a beginner level, but I saved using a variable
with the final answer (instead I used several returns). The basic level solution
has cleaner if instructions.

The intermediate level is harder to understand than the advanced one, but I like
that you concatenate "ay" regardless the scenario. It is nice to develop a plan
based on a good pattern. Advanced solution used a function to check if is a vowel,
I still don't like to write functions inside functions, I'm not used to it.
