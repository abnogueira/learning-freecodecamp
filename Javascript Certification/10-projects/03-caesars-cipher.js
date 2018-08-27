function rot13(str) {
  let final='', extra=0;
  for (let i=0; i<str.length; i++){
    //console.log(str[i]+' > '+str[i].charCodeAt());
    if (str[i].charCodeAt()<65 | str[i].charCodeAt()>90){
      final=final.concat(str[i]);
    } else if (Number(str[i].charCodeAt())+13>90){
      extra=65+(str[i].charCodeAt()+13)-90-1;
      final=final.concat(String.fromCharCode(extra));
    }else{ //if(str[i].charCodeAt()+13<=90){
      final=final.concat(String.fromCharCode(str[i].charCodeAt()+13));
    }
  }
  return final;
}


//Test Cases
/*console.log(rot13("SERR PBQR PNZC")==="FREE CODE CAMP");
console.log(rot13("SERR CVMMN!")==="FREE PIZZA!");
console.log(rot13("SERR YBIR?")==="FREE LOVE?");
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")==="THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
*/