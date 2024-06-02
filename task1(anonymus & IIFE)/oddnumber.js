  //ANONYMUS FUNCCTION

//let arr=[1,2,3,4,5,6,7,8,9]

//const odd = function(a){
 //   for(let i=0;i<a.length;i++){
   //     if(a[i]%2!=0){
     //       console.log(a[i])
       // }
   // }
//}
  //odd(arr)


 //IIFE FUNCTION 
  
  
  let arr=[11,12,13,14,15,16,17,18,19]
   const odd = (function(){
       for(let i=0;i<arr.length;i++){
           if(arr[i]%2!=0){
               console.log(arr[i])
           }
       }
   })()
   