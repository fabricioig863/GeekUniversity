// Aprendendo a utilizar let e const
//var numero = 42;
//console.log(numero)

//numero = numero + 18
//console.log(numero)

// Let 

//let outro_numero = 42;
//console.log(outro_numero)

//outro_numero = outro_numero + 18;
//console.log(outro_numero)

// O let funciona tambem com string

//let nome = 'Geek'
//console.log(nome)

//nome = 'University'
//onsole.log(nome)

//for(var i = 0; i < 5; i++){
    //var valor = i * 3
    //console.log(valor)
//}

//console.log(valor)
//console.log(i)

//for(let i = 0; i < 5; i++){
    //let valor = i * 3;
    //console.log(valor)
//}

//console.log(valor)
//console.log(i)

///let numero = 80;
//console.log(numero)

//let numero = 32; // syntaxe error
//console.log(numero)

//Const 

const TAXA = 1.44;
//console.log(TAXA)

let res = 45 * TAXA
//console.log(res)

//TAXA = 5;
//console.log(TAXA)

// Diferença entre const e let vai depender do que você quer usar.
// O let varia mas não pode receber outro valor, já o const não pode receber valor algum.

//Constante Vs Mutação 
const curso = {nome: 'Programação em Javascript'}
console.log(curso.nome)

//Não posso alterar o valor de uma constante
//curso = 43; Erro!

//Podemos realizar mutação em dados contidos na constante

curso.nome = "Programação em Python"; //Mutação
console.log(curso);

/*
    Dicas de como declarar variáveis em Javascript:

    - A variavel poderá ser alterada? (vai variar?) se sim, use let
    - A variável será constante? (não vai variar?) se sim, use const
*/ 

const valor = 5;

for(let i = 0; i < valor; i++){
    console.log(valor - i);
}