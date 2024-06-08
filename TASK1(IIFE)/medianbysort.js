let arr4 = [11, 41, 51, 71];
let arr5 = [21, 61, 91, 81];
let arr6 = [...arr4, ...arr5];
const sort1 = (function () {
    for (let i = 0; i < arr6.length; i++) {
        for (let j = 0; j < arr6.length - 1 - i; j++) {
            if (arr6[j] > arr6[j + 1]) {
                [arr6[j], arr6[j + 1]] = [arr6[j + 1], arr6[j]];
            }
        }
    }
    return arr6
})()
console.log(sort1);
const median1 = Math.floor(arr6.length / 2);
console.log(arr6[median1])

