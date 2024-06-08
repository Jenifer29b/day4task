//IIFE FUNCTION 
  
  
let arr=[11,12,13,14,15,16,17,18,19]
const odd = (function(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})()
