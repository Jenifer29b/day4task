 const newArray = [7, 3, 2, 5, 10];

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
         if (num % i === 0) return false;
     }
      return num !== 1;
 };
  
 const myPrimeArray = newArray.filter(isPrime);
 console.log(myPrimeArray); 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //function square(arr) {
   //return arr * arr
 //}
  //console.log(arr.map(square));

//function iseven (arr){
  // return arr % 2 == 0;
 //}
//let result = arr.filter(iseven)
  //console.log(result)
//

 // let num=[12,165,77089,9898,98909]
 // function isodd(num){
 //   return (num%2 !=0)
 // }
//  let number = num.map(isodd)
 // console.log(number)
 
//let arr = [12,13,14,1,5,16,17];
//function isodd (num){
  //return (num%2 !=0)
//}
 // console.log(arr.filter(isodd))
 