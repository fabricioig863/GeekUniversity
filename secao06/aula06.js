//Funções anônimas (Lambdas)

let numeros = [1, 2, 3, 5]

function dobrar(valor){
    return valor * 2
}
let res = numeros.map(dobrar)
// console.log(res)

let res2 = numeros.map(function(valor){
    return valor * 2
})
// console.log(res2)

function somar(v1,v2){
    return v1 + v2
}
let mostrar = function(n1,n2, calculo = somar){
    console.log(calculo(n1,n2))
}
mostrar(2,4) // 6
mostrar(6,9, somar) // 15
mostrar(3,6, function(n1,n2){
    return n1 + n2
}) // 9

mostrar(3,6,(valor1,valor2) => valor1 * valor2) 