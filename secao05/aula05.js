/*
    Filter também é uma estrutura de repetição mais moderna que facilita trabalhar com coleções
    de dados exemplo: arrays.
*/

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0
}
//console.log(filtrar_pares(3)); // False
//console.log(filtrar_pares(8)); // True

function filtrar_impares(n){
    return n % 2 === 1;
}

function filtrar_multiplos_de_5(n){
    return n % 5 === 0 
}

var ret = numeros.filter(filtrar_pares);
//console.log(ret)

var ret = numeros.filter(filtrar_impares);
//console.log(ret)

var ret = numeros.filter(filtrar_multiplos_de_5);
//console.log(ret)

var alunos = [
    {nome: 'Pedro', nota:8.5},
    {nome: 'Kleopatra', nota:10},
    {nome: 'Carla', nota:7.0},
    {nome: 'Medusa', nota:8.0}
]
//console.log(alunos)

function notas_maiores_que_7(aluno){
    return aluno.nota >= 7
};

var filtrados = alunos.filter(notas_maiores_que_7);
console.log(filtrados);
console.log(filtrados.length);
