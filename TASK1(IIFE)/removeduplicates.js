//IIFE FUNCTION


let arr1 = ["apple", "banana", "cherry", "mango", "apple"]
let unique1 = [];
const removeduplicate = (function () {
    for (let i = 0; i < arr1.length; i++) {
        if (unique1.indexOf(arr1[i]) === -1) {
            unique1.push(arr1[i])
        }
    }
    return unique1
})()
console.log(removeduplicate)

