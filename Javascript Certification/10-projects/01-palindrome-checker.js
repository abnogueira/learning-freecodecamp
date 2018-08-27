function palindrome(str) {
  let newStr=str.replace(/[^\w]|_/gi,'').toLowerCase();
  let totalChar=0;

  //aux. calculations due to length size odd/even
  if(newStr.length%2!=0){ //odd
    totalChar=(newStr.length-1)/2;
  }else{
    totalChar=newStr.length/2;
  }

  //Checks
  let part2=newStr.slice(newStr.length-totalChar,newStr.length)
    .split('')
    .reverse()
    .join('');
  if(newStr.slice(0,totalChar)===part2){
    return true;
  }
  return false;
}

/*
//Test Cases
console.log(palindrome("eye")===true);
console.log(palindrome("_eye")===true);
console.log(palindrome("race car")===true);
console.log(palindrome("not a palindrome")===false);
console.log(palindrome("A man, a plan, a canal. Panama")===true);
console.log(palindrome("never odd or even")===true);
console.log(palindrome("nope") ===false); 
console.log(palindrome("almostomla")===false); 
console.log(palindrome("My age is 0, 0 si ega ym.")===true); 
console.log(palindrome("1 eye for of 1 eye.")===false); 
console.log(palindrome("0_0 (: /-\ :) 0-0") ===true); 
console.log(palindrome("five|\_/|four")===false);
*/