
     // ANONYMUS FUNCTION 
     //const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,30]; 
 
      // const isprime = function(num) {
        // if (num <= 1) return false;
        // for (let i = 2; i <= Math.sqrt(num); i++) {
          //   if (num % i === 0) {
           //      return false;
          //   }
        // }
        // return true;
     //}
 
     //const primeNumbers = numbers.filter(isprime);
    // console.log("Prime numbers in the array:", primeNumbers);

       // IIFE FUNCTION
       const number = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,30];
         const isprime = (function(){
            for (let i=2;i<=Math.sqrt(number);i++){
                if(number%i===0){
                    return false
                }else{
                    return true
                }
            }
             console.log(isprime(number))
         })() 
         


           
     