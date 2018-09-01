function convertToRoman(num){
  let final='', nb=0, pos=0, nchar=num.toString().length;
  var db=({1000: 'M', 500:'D', 100:'C', 50:'L', 10:'X', 5:'V', 1:'I'});
  let arrNb=[1000,500,100,50,10,5,1];

  for (let j=nchar; j>0; j--){
      pos=j;
      //looking to num[j]*10^(pos-1)
      nb=Number(num.toString().slice(nchar-j,nchar-j+1))*Math.pow(10,pos-1);
      
      while (nb>0){
          // for each possible number
          for (let i=0; arrNb.length; i++){
              // Case of 1, 5, 10
              if (nb/arrNb[i]==1){
                  final+=db[arrNb[i]];
                  nb-=arrNb[i];
                  break;
              }
              // Case of 2, 3 & 6-8
              if (nb/arrNb[i]>1){
                  final+=db[arrNb[i]];
                  nb-=arrNb[i];
                  break;
              }
              // Case of 4, 9
              if ((nb+(Math.pow(10,pos-1)))/arrNb[i]==1){
                  final+=(db[arrNb[i]-nb]+db[arrNb[i]]);
                  nb-=arrNb[i];
                  break;
              }
          }
      }
  }
  return final;
}