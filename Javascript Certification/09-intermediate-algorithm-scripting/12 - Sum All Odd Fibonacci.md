# Sum All Odd Fibonacci

## Problem Description
Given a positive integer **num**, return the sum of all odd Fibonacci numbers that are less than or equal to **num**.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, *sumFibs(10)* should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

### My Solution
```
function sumFibs(num){
  if (num==1){
    return 1;
  }
  
  //create list with all Fibonacci numbers until num
  var fList=[1,1], finalL=[1,1], addN=0;
  for (let i=2; i <= num; i++){
    addN=fList[i-1] + fList[i-2];
    if (addN<=num){
      fList.push(fList[i-1] + fList[i-2]);
      if (addN%2!=0){
        finalL.push(addN);
      }
    }else{
      break;
    }
  }
  //return the sum of all elements
  return finalL.reduce((a,b) => a+b,0);
}
```

**Code Explanation**:
1. Set condition for when **num** is equal to 1, return 1, because the first Fibonacci numbers are 0 and 1 (sum=1).
2. Set the initial numbers of the Fibonacci sequence: 
    * **fList** - an array with all fibonacci numbers lesser than **num**.
    * **finalL** - an array with all Fibonacci odd numbers lesser than **num**.
3. With a loop we can calculate the Fibonacci sequence numbers
and build at the same time **finalL**.
    * **addN** contains the calculated value of the next number
    in the Fibonacci sequence.
    * Check if **addN** is less or equal than **num**, if false the loop ends (*break*), otherwise if **addN** is an odd
    number (addN%2 != 0, meaning the rest of the division by 2 is not 0), it is added to **finalL** array.
4. With all odd Fibonacci numbers, let's sum them with *.reduce* method.


Following solutions can be found in [here](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci).

### Basic Code Solution (FCC)
```
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
```

**Code Explanation**:
Create a variable to keep record of the current and previous numbers along with the result that will be returned.
Use a while loop to make sure we do not go over the number given as parameter.
We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
Complete the Fibonacci circle by rotating getting the next number and swapping values after.
Return the result.

### Intermediate Code Solution (FCC)
```
function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}
```

**Code Explanation**:
* Create an array of fibonacci numbers till num.
* Use *reduce()* method to find the sum of odd members of array.
Return the sum.


### Discussion
My answer is a complicated one, it could be so simple, like 
the beginner solution. In order to calculate the next Fibonacci
number in the sequence, you only need the two previous ones. 
There was no need to keep them all, like I did in my solution.

The idea behind intermediate solution, is similar to mine, but
with improvements, only one array was necessary for the
Fibonacci sequence with numbers lesser than **num**. And the final step, with *.reduce* it is possible to keep only the odd
numbers and sum them.