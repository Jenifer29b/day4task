
//ANONYMUS FUNCTION

let str1 = "dad";
let str2 = "plain";

const palindrome = function (str) {
   let rev = str.split('').reverse().join('')
   if (str == rev) {
      return true
   } else {
      return false
   }
}
console.log(palindrome(str1));
console.log(palindrome(str2));


