// Function Express
const boaTarde = function(){
    console.log("Boa tarde")
}
boaTarde()

// Retorno de Função
function add(a, b){
    return a + b
}
const num = add(1,2)
console.log(num)

// Função como parâmetro
function exec(fn) {
    if(typeof fn == "function"){
        fn()
    } else {
        console.log("Texto errado")
    }
    
}

exec(boaTarde)
exec(23)

// Arrow function + Template string
const talk = (nome) => console.log(`Oi ${nome}, tudo bem?`)
talk("Diego")

// Iterables
const sumArray = (...array) => {
    let total = 0
    for(let value of array){
        total += value
    }
    return total
}

console.log(sumArray(3, 4, 5, 8, 12, 45))


const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))
