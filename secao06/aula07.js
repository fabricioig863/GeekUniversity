//Funções Callbacks

const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em java',
    'Programação em Python',
    'Banco de dados',
    'Programação web com Django Framework',
    'Programação em Javascript'
]
function apresentar(curso,indice){
    // console.log(`${indice + 1} - ${curso}`)
}
// cursos.forEach(apresentar)

//Usando lambda
cursos.forEach(function(curso,indice){
    // console.log(`${indice} - ${curso}`)
})

// Usando Arrow

//cursos.forEach((curso,indice) => console.log(`${indice + 1} - ${curso}`))

/* Sempre que ocorre um evento na qual uma função é executada 
 diante desse evento, aqui está ocorrendo um callback */

 /* Callback nada mais é do que passar uma função como parâmetro, para outra função
que irá executar esta função, mediante um evento. Callback -> Executar de volta. */

const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

let menores = []

for (let p in precos){
    if(precos[p] < 50){
        menores.push(precos[p]);
    }
}
console.log(menores)

// for(let i = 0; i < precos.length; i++){
//     if(precos[i] < 50){
//         menores.push(precos[i]);
//     }
// }
//  console.log(menores)

menores = precos.filter(function(preco){
    return preco < 50
})

// console.log(menores)


menores = precos.filter(v1 => v1 < 50)
console.log(menores)