let idade = 18
const adulto = idade >= 18 ? "adulto" : "menor"
console.log(adulto)

function makeNegative(num){
    return - Math.abs(num)
}
console.log(makeNegative(0))
console.log(makeNegative(-2))
console.log(makeNegative(40000))