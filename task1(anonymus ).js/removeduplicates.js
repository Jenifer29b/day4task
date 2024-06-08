//ANONYMUS FUNCTION

let arr = ["apple", "banana", "cherry", "mango", "apple"]
let unique = [];
const removeduplicates = function () {
    for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i])
        }
    }
    return unique
}
console.log(removeduplicates(arr))



