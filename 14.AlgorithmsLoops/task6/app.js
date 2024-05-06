let num1 = Number(prompt('1-ci ededi daxil edin:')); 
let num2 = Number(prompt('2-ci ededi daxil edin:')); 

while (num1 > num2) {
    num2 = Number(prompt('ikinci ededi yeniden daxil edin:')); 
}

console.log("cem:", num1 + num2);
