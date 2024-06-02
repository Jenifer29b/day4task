const caps = (str) =>{
    return (str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
}
let str1 = "good morning"
 console.log(caps(str1))