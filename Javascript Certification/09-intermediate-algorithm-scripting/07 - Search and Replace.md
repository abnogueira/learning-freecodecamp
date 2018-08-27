# Search and Replace

## Problem Description
Perform a search and replace on the sentence using the arguments 
provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word 
when you are replacing it. For example if you mean to replace the 
word "Book" with the word "dog", it should be replaced as "Dog".

### My Solution
```
function myReplace(str, before, after) {
  //1st: check if 'before' starts in CAPS and then transform 'after'
  //2nd: replace word
  function firstUpper(word){
    return /[A-Z]/.test(word[0]);
  }

  if (firstUpper(before)==true & firstUpper(after)==false){
    after=after.replace(after[0],after[0].toUpperCase());
  }
  return str.replace(before,after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

**Code Explanation**:
First let's check if is necessary to modify the 'after' to have the first
letter in upper case, that is done with firstUpper function. In case,
the first character of 'before' is in upper case and 'after' it is not,
then the first character of 'after' is modified; other case no 
modification is necessary.

Then, comes the easy part, replace the before word for the after word.
Remember that '.replace' does not replace all occurrences (unless you 
use /g), it only replaces the first occurrence.


Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace).

### Basic Code Solution (FCC)
```
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}
```

**Code Explanation**:
* Use indexOf() to find location of before in string.
* If first letter of before is capitalized, change first letter of after to uppercase.
* Replace before in the string with after.
* Return the new string.

### Intermediate Code Solution (FCC)
```
function myReplace(str, before, after) {
//Create a regular expression object
  var re = new RegExp(before,"gi");
//Check whether the first letter is uppercase or not
  if(/[A-Z]/.test(before[0])){
  //Change the word to be capitalized
    after = after.charAt(0).toUpperCase()+after.slice(1);
     }
     //Replace the original word with new one
  var  newStr =  str.replace(re,after);

 return newStr;
}
```

**Code Explanation**:
* In this solution, regular expression [A-Z] is used to check if character is uppercase.
* Create a new regular expression object, re.
* If first letter of before is capitalized, change the first letter of after to uppercase.
* Replace before with after in the string.
* Return the new string.

### Advanced Code Solution (FCC)
```
function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }

    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
}
```

**Code Explanation**:
* Both the before and after are passed as arguments to applyCasing().
* The function applyCasing() is used to change the case of respective 
characters in targetArr i.e., after in accordance with that of 
characters in sourceArr i.e., before.
* replace() is used to replace before with after, whose casing is same as before.

### Discussion
Finally, I remembered to use a function inside a function :)

My solution it is somewhere between basic to intermediate level solution.
I think the basic level solution is smoother than mine, since I thought to
change the 'after' word to be capitalized with a replace, when it was
simpler to use .splice. The intermediate solution used RegEx almost like
I do.

All solutions simplified when to apply the modification of the first 
character since they assume that if 'before' starts with a capitalized
character than 'after' should be changed; while I decided to do that 
only if 'after' first letter was not in upper case.

Looking to advanced level solution, you find it on point to solve the
problem, since all other solutions (including mine) only fullfil the
provided test cases, and assume that aren't upper case letter on the
rest of the string.