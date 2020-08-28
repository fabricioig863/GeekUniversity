// Objetos vs JSON
/* 
    JSON - Javascript Object Notation
*/

// Objeto literal
const curso = {
    nome: 'Programação em Javascript',
    hora: 27,
    preco(){
        return this.hora * 0.67
    }
}
// console.log(curso); // Objeto Javascript
// console.log(curso.preco())
// console.log(typeof(curso))

//  JSON é um formato de texto, é bastante utilizado na comunicação entre sistemas.

//  Convertendo o objeto Javascript para JSON
//  Formato diferente de objeto para string, e as apas no json ficam entre aspas duplas ""
// const json = JSON.stringify(curso);
// console.log(json); //JSON
// console.log(typeof(json));

// // Convertendo de JSON para Objeto Javascript
// const obj = JSON.parse(json)
// console.log(obj);
// console.log(typeof(obj))

// Forma errada
// const json_errado = "{'nome': 'Programação em Javascript', 'preco': 27.99}";
// console.log(json_errado)
// console.log(typeof(json_errado))

// const novo_obj = JSON.parse(json_errado);
// console.log(json_errado)

/* Por mais que a nomenclatura seja classificada como uma notação de objetos javascript, 
ela não é um objeto javascript e sim uma notação própria. Se fosse, não teria a necessidade de utilizar o parse para transformar a string em objeto. 
*/
// Forma correta
// const json_corrigido = '{"nome": "Programação em Javascript", "preco": 27.99}';
// console.log(json_corrigido)
// console.log(typeof(json_corrigido))

// const novo_obj = JSON.parse(json_corrigido);
// console.log(json_corrigido)
// console.log(typeof(novo_obj))

const array = ['nome', 'sobrenome', 'numero'];

const json_convert = JSON.stringify(array)
console.log(typeof(json_convert))
console.log(json_convert)

const array_json = JSON.parse(json_convert)
console.log(typeof(array_json))
console.log(array_json)
