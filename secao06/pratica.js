// function minha_idade(ano_nascimento){
//     const data = new Date()

//     const idade = data.getFullYear() - ano_nascimento
//     return(idade)
// }

// let ret = minha_idade(1996)
// console.log(ret)

const n = (num1,num2) => {
    return num1 * num2
}
// console.log(n(4,5))

const dobro = valor => valor * 2

let res = dobro(5)
// console.log(res)

// const msg = () => console.log("Evolua seu lado geek")
// msg()

function somar(v1,v2){
    return v1 + v2
}

let mostrar = function(n1,n2,calculo = somar){
    console.log(calculo(n1,n2));
}
mostrar(3,4);
mostrar(3,4,somar)
mostrar(3,4,function(n1,n2){
    return n1 + n2
})

mostrar(3,2,(valor1,valor2) => valor1 * valor2)


