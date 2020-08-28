function somar(num1, num2){
    return num1 + num2
}
let resultado = somar(4,5)
//console.log(resultado)

const executar = somar;
//console.log(executar(10, 25))

//Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}
function faz_algo(num1, num2, funcao){
    return funcao(num1, num2)
}
//console.log(faz_algo(5,5, somar))
//console.log(faz_algo(8,3, subtrair))

// Exemplo 3

function outra(z){
    return z
}
//const ret = outra(subtrair);
//console.log(ret(8,2)) 

let valores = [1, 3.4, true, somar];

for (let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]))
}