//IIFE FUNCTION

let str1 = "dad";
let str2 = "plain";

const palindrome = (function () {
    function isplaindrome(str) {
        let rev = str.split('').reverse().join('')
        if (str == rev) {
            return true
        } else {
            return false
        }
    }
    console.log(isplaindrome(str1));
    console.log(isplaindrome(str2));
})()
console.log(palindrome)
