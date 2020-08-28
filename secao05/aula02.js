/*
    Arrays são containers de dados ou seja, é uma estrutura de dados da qual nos permite guardar vários  dados.
    
    Em javascript não existe tipos de dados em arrays como int, float boolean etc..
    
    Arrays em javascript são objetos, objetos indexados e o indice sempre começa em zero e o ultimo elemento -1. Onde n é o tamanho definido no array.

    array contendo 5 elementos -> n = 5

    // índices -> posição do elemento no array
    [0][1][2][3][4]

    //valores em um array
    [12]['Fabricio'][true][48][50]

    //Detalhes sobre arrays
    - Possuem tamanho infinito dependendo do tamanho da memória do seu computador, mas não tem uma limitação de quantidade pela linguagem* 
    - Podemos colocar qualquer tipo de dado, entretanto é melhor manter o mesmo tipo de dado para ficar mais facil sua utilização.
 */

// Forma 1
var alunos = new Array('Fabricio', 'Pedro', 'Gustavo', 'Camila', 'Sofia');
// var alunos = ['Fabricio', 'Pedro', 'Gustavo', 'Camila', 'Sofia']
//console.log(alunos);

// Forma 2 [Recomendada]
var notas = [1, 3, 5, 7, 9];
//console.log(notas);

// Criando um array vazio
var dados = [];
//console.log(dados)

//Fazendo um acesso ao valor de um índice
//console.log(notas[2])

//Alterando o valor a partir do índice
notas[2] = 12;
//console.log(notas) 

// Atenção ao acessar um valor com uma índice que não existe
notas[9] = 10; // Não existe!
//console.log(notas);

if(notas[5] == undefined){
    notas[5] = 54;
}

//console.log(notas[5]); // undefined
//console.log(notas[6]); // undefined
//console.log(notas[7]); // undefined
//console.log(notas[8]); // undefined
//console.log(notas[9]); // 10

//console.log(notas[5] == undefined) // true

//Inserindo elementos no final do array
var nomes = ['Fabricio', 'Pedro', 'João'];
//console.log(nomes)

nomes.push('Vanessa', 'Carlos', 'Camila', 'Juliana'); //Insere o valor no final do array
//console.log(nomes);

// para saber o tamanho do array
//console.log(nomes.length);
var tam = nomes.length;
//console.log(tam)

//Ordenar os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
//console.log(alunos)

//alunos.sort(); // Ordenando array de Strings 
//console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23.12];
//precos.sort(); //Não funciona, porque o metodo sort considera todos os valores como strings.
//console.log(precos)


var idades = [5, 1, 8, 12, 44, 78];
//console.log(idades)

idades.sort()
//console.log(idades) // Mesma atençao, não funciona.

precos.sort(function(a, b) {return a - b;});
//console.log(precos);


idades.sort(function(a,b) {return a - b;});
//console.log(idades)

// Deletando dados de um array 
delete idades[3];
//console.log(idades);

idades[3] = 12;
//console.log(idades);

idades.splice(3, 2); // A partir do índice 3, delete 1 elemento
//console.log(idades);

var numeros = [01, 02, 03, 04, 05]
//console.log(numeros)

numeros.splice(3, 1);
//console.log(numeros)

//console.log(numeros.length)

numeros.splice(3, 0, 56, 89); // A partir do índice 3, não delete nenhum, mas adicionamos 56, 89
//console.log(numeros)

//Iterar em um array
for(var i = 0; i < numeros.length; i++){
   // console.log(numeros[i]);
}

// Removendo elementos da última posição do array
//idades.pop(); // remove e retorna o último elemento de um array
//console.log(idades);

//var ret = idades.pop();
//console.log(ret);
//console.log(idades)

//Removendo o primeiro elemento de um array
var inteiros = [01, 02, 03, 04, 05]

//inteiros.shift() // remove e retorna o primeiro elemento de um array.
//console.log(inteiros)

//var ret = inteiros.shift();
//console.log(ret)
//console.log(inteiros)

// Inserindo elementos no ínicio de um array
inteiros.unshift(45)
console.log(inteiros)

// retorna um novo array a partir do índice informado 
//var novo = inteiros.slice(3)
//console.log(novo)

//var novo = inteiros.slice(1,4); // a partir do indice 1, pegue até o indice 3 sem incluí-lo
//console.log(novo)

var pares = [2, 10, 4, 12, 6, 8];
var impares = [3, 5, 7, 1, 13, 15];

var rest = pares.concat(impares); // concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest)

rest.sort(function(a,b){return a - b});
//console.log(rest);

// 4 x 4

//Arrays dentro de arrays
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/*
    [
        [ 1,  2,  3,  4], //linha 0
        [ 5,  6,  7,  8], // linha 1
        [ 9, 10, 11, 12], // linha 2
        [13, 14, 15, 16] // linha 3
    ]

*/

console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
console.log(tabuleiro[3][3]);// linha 3 coluna 3 -> 16

