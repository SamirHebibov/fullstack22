let a = Number(prompt("birinci ededi daxil edin: "));
let b = Number(prompt("ikinci ededi daxil edin: "));
let c = Number(prompt("ucuncu ededi daxil edin: "));

if(a>=b && a>=c){
      if(b>=c){
            console.log(c + ", "  + b + ", "+ a) ;
      }
      else{
            console.log(b + ", "  + c + ", "+ a)
      }
}
else if(b>=a && b>=c){
      if(a>=c){
            console.log(c + ", "  + a + ", "+ b) ;
      }
      else{
            console.log(a + ", "  + c + ", "+ b)
      }
}
if(c>=b && c>=a){
      if(b>=a){
            console.log(a + ", "  + b + ", "+ c) ;
      }
      else{
            console.log(b + ", "  + a + ", "+ c)
      }
}