//Objetos e suas funções
const curso = {
    nome: 'Programação em Javascript',
    horas: 27,
    preco: 25.99
}
// Avalia qual o tipo de objeto
// console.log(typeof(curso))

// Chama somente os objetos 
// console.log(Object.keys(curso))

// Chama somente os valores do objeto declarado
// console.log(Object.values(curso))

// Chama todos os valores, dentro de um array
// console.log(Object.entries(curso))

// O mesmo esquema porém chama de forma diferente, chave e valor.
// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// })

// Object.entries(curso).forEach(([chave,valor]) => {
//     console.log(`${chave}: ${valor}`);
// })

// Define um atributo sem sofrer alteração
// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,
//     writable: false,
//     value: '07/12/2019'
// });

// curso.publicacao = '01/01/2020' // Não surte efeito 

// console.log(curso)

// console.log(curso.publicacao)

// const outro = {
//     nome: 'Fabricio',
//     Altura: 1.89
// }
// Object.defineProperty(outro, '', {
//     enumerable: true,
//     writable: false,
// })
// console.log(outro)

// Torna todos os objetos congelados, não permite reescrita
// Object.freeze(curso);

// curso.nome = 'Fabricio'

// console.log(curso);

const usuarios = [
    {nome: 'Aline matos', empresa:'Geek University'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Fabricio', empresa: 'Sony'}
]
console.table(usuarios)

console.table(curso)