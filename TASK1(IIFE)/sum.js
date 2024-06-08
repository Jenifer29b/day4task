//IIFE FUNCTION
let sum = [21, 22, 23, 24, 25]
const add = (function () {
    function addition(a, b, c, d, e) {
        return ((a + b + c + d + e));
    }
    console.log(addition(...sum))
})()
console.log(add);