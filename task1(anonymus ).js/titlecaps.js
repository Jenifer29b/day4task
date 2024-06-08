//ANONYMUS FUNCTION

let name = "hello world"

const caps = function (n) {
  return (n.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
}
console.log(caps(name))





