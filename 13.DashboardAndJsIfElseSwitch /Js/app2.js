let a = Number(prompt(" ucbucagin tereflerini daxil edin:")); 
let b =Number( prompt()); 
let c = Number(prompt()); 
if(a==b && b == c){
      console.log("bu beraberterefli ucbucagdir");
}
else{
      if( a + b > c && a + c > b && b + c > a){
            console.log("bu beraberterefli ucbucag deyil");
      }
      else{
            console.log("bu ucbucag deyil");
      }
}