//ANANOMYUS FUNCTION 

let arr1 = [1, 14, 15, 4, 16];
let arr2 = [11, 5, 13, 2, 3];
let arr3 = [...arr1, ...arr2];
const sort = function () {
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr3.length - 1 - i; j++) {
            if (arr3[j] > arr3[j + 1]) {
                [arr3[j], arr3[j + 1]] = [arr3[j + 1], arr3[j]];
            }
        }
    }
    return arr3
}
console.log(sort(arr3));
const median = Math.floor(arr3.length / 2);
console.log(arr3[median])


