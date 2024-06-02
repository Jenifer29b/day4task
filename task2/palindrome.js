const palindrome = str =>{
    let rev = str.split('').reverse().join('')
     if (rev == str){
        return true
    } else {
        return false
    }
}
let str1 = "madam";
let str2 = "dad";
let str3 = "plain";
 console.log(palindrome(str1))
 console.log(palindrome(str2))
 console.log(palindrome(str3))