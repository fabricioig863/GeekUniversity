//Instanciando Objetos
class Pessoa {
    // Funções dentro de uma classe são chamadas de metódos.
    constructor(nome,sobrenome){ 
        this._nome = nome;
        this._sobrenome = sobrenome;
    } 
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome
    }
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }
    comer(msg){
        console.log(`${this.nome} está comendo...${msg}`);
    }
    beber(msg){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...${msg}`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda'; // Não tem o set porque o atributo é fixo
        this._modelo = modelo;
    }   
    get marca(){        
        return this._marca 
    }
    get modelo(){
        return this._modelo
    }
    set modelo(modelo){
        this._modelo = modelo
        
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
    
}

/* 
    Objeto é uma coleção dinâmica de pares,chave e valor.
    A instanciação é um processo por meio do qual se realiza a cópia de um objeto (classe) existente. 
    Uma classe, a qual tem a função de determinar um tipo de dado, deve ser instanciada para que possamos utilizá-la.       
*/

// Instanciação de Objetos - Forma 1
// const curso = new Object();
// curso.nome = 'Programação em Javascript';
// curso.preco = 27.99;

// //console.log(curso)

// curso['Quantidade de alunos:'] = 99
// //console.log(curso)

// delete curso['Quantidade de alunos:']
// console.log(curso)

// Instanciação de Objetos - Forma 2

// const programa = {
//     nome: 'Photoshop',
//     preco: 899999,
//     fabricante: {
//         nome: 'Adobe',
//         contato: 'contact@adobe.com',
//         endereco: {
//             rua: 'Da paz, 45',
//             bairro: 'Nova Lima',
//             cidade: 'São Paulo'
//         },
//         filiais: [
//             {cidade: 'Rio de janeiro'},
//             {ciade: 'Recife'}
//         ]
//     }

// }
// console.log(programa.nome) // Photoshop
// console.log(programa.fabricante.endereco.rua) // Da paz, 45
// console.log(programa.fabricante.filiais.length) // Tamanho do array que é 2

// programa.nome = 'Playstation OS'
// console.log(programa.nome)

// console.log(programa)

// delete programa.fabricante.filiais; // deleta
// console.log(programa.fabricante.filiais) // undefined
// console.log(programa.fabricante.filiais.length) // ReferenceError

// Instanciação de Objetos - Forma 3

// const pessoa = {};
// console.log(typeof(pessoa));

// Instanciação de Objetos - Forma 4

// function Lampada(cor){
//     this.cor = cor;
// }
// const l1 = new Lampada('Branca') // Instanciando o objeto
// console.log(l1)

// console.log(typeof(l1));

// Instanciação de Objetos - Forma 5 - Objeto a partir de nossas classes

// const p1 = new Pessoa('Felicity','Sobrenome');
// // console.log(p1);
// // console.log(typeof(p1))
// // console.log(p1.nome); //função get
// // console.log(p1.sobrenome); //função gets

// p1.nome = 'Xuxa';
// // console.log(p1)

// p1.sobrenome = 'Meneguel'
// // console.log(p1);

// p1.falar('Vem aqui baixinho')
// p1.comer('Maça')
// p1.beber('Vinho')

const fit = new Carro('Fit');
fit.imprimir()

fit.modelo = 'fiat'
console.log(fit)

