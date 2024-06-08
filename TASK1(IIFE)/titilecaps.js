//IIFE FUNCTION
let n = "good morning"
const titlecaps = (function () {
    return (n.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
})()
console.log(titlecaps)