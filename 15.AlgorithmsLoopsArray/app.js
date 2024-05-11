
//task1
// let n = Number(prompt("ededi daxil edin:"));
// let count = 0; 
// while(n>=1){
//       n = n / 10;
//       count++;
// }
// console.log(count);



// task2
// let cumle = prompt("setri daxil edin:");
// let soz = cumle.split(",").length; 
// console.log(soz);


// task3
// let num1 = Number(prompt("ededi daxil edin:")); 
// let num2 = Number(prompt("quvvetin derecesini daxil edin:")); 
// console.log(Math.pow(num1, num2));


// task4
// let arr = [1,2,3,4,5,6,7,8]; 
// let sum = 0; 
// for (let i = 0; i <= arr.length; i++) {
//       sum = sum+i; 
// }
// console.log(sum/arr.length);


// task5 
// let arr = [1,2,3,4,5,6,7,8]; 
// min=arr[0]; 
// max= arr[0]; 
// for (let i = 0; i <= arr.length; i++) {
//       if(arr[i]<min){
//             min=arr[i];
//       }
//       if(arr[i]>max){
//             max=arr[i];
//       }
// }
// console.log((min+max)/2);


// task6
// let arr = [2,5,7,8,4,21,13,3,11];
// count=0; 
// for (let i = 0; i <= arr.length; i++) {
//       if(arr[i]==2){
//             count++;
//       }
//       else if(arr[i]%6==1 || arr[i]%6==5){
//             count++;
//       }
// }
// console.log(count);


// task7
// let n = Number(prompt("ededi daxil edin:")); 
// while(n >=1){
//       console.log(Math.round(n%10));
//       n/=10; 
// }


// task8
// let n = Number(prompt("ededi daxil edin:"));
// let sum = 0;
// let hasil = 1; 
// let count = 0;
// while(n>=1){
//       sum = sum+Math.floor(n%10);
//       hasil = hasil*Math.floor(n%10);
//       n/=10;
//       count++;
// }
// console.log("ededin toplami: "+ sum + " ededin reqemleri hasili: " + hasil + " ededi orta: " + sum/count);


// task9
// let n = Number(prompt("ededi daxil edin:"));
// let i= 0; 
// while(i<=n){
//       if(n%i==0){
//             for (let j = 0; j <= Math.sqrt(i); j++) {
//                   if(i%j==0){
//                         break; 
//                   }
//                   else{
//                         console.log(i);
//                   }
//             }
//       }
//       i++; 
// }


// task10
// let n = Number(prompt("ededi daxil edin:"));
// let i= 0; 
// let count =0; 
// while(i<=n){
//       if(n%i==0){
//             for (let j = 0; j <= Math.sqrt(i); j++) {
//                   if(i%j==0){
//                         break; 
//                   }
//                   else{
//                         count++;
//                   }
//             }
//       }
//       i++; 
// }
// console.log(count);


// task11
// let arr = [1,4,5,2,4,51,352,5,1,42]; 
// for (let i = 0; i < arr.length; i++) {
//       if(arr[i]%2!=0){
//             console.log(i);
//       }
// }


// task12
// let arr = [1,4,5,2,4,51,352,5,1,42]; 
// for (let i = 0; i < arr.length; i++) {
//       if(i%2!=0){
//             console.log(arr[i]);
//       }
// }

// task13
// let arr = [1,4,5,2,4,51,32,5,1,42]; 
// let max=0
// for (let i = 0; i < arr.length; i++) {
//       if(arr[i]%2==0){
//             if(arr[i]>max){
//                   max=arr[i];
//             }
//       }
// }
// console.log(max);


// task14
// let arr = [1,4,5,2,4,51,32,-6,5,1,42]; 
// let min = 0;
// for(let i = 0; i < arr.length; i++){
//       if(arr[i]<min){
//             min=i; 
//       }
// }
// console.log(min);



// task15
// let arr = [1,4,5,2,4,51,32,-6,5,1,42]; 
// let min = arr[0];
// let max = arr[0];
// for(let i = 0; i <= arr.length; i++){
//       if(arr[i]<min){
//             min=arr[i]; 
//       }
//       else if(arr[i]>max){
//             max=arr[i]; 
//       }
// }
// let a ; 
// a = min; 
// min = max; 
// max = a; 
// console.log(min , max);


// task16 (bu task yarida qaldi)
let arr = [1,4,5,2,4,51,32,5,1,42]; 
let min = arr[0];
let max = arr[0];
for(let i = 0; i <= arr.length; i++){
      if(arr[i]<min && arr[i]%2==0){
            min=arr[i]; 
      }
      else if(arr[i]>max && arr[i]%2!=0){
            max=arr[i]; 
      }
}
let a ; 
a = min; 
min = max; 
max = a; 
console.log(min , max);