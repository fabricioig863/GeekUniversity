var alunos = [
    'Pedro',
    'Carlos',
    'Joao',
    'Augusto',
    'Fabricio'
];

function imprimir(aluno,indice){
    console.log(indice + ' - ' + aluno)
}

alunos.forEach(imprimir)

var numeros = [50, 45, 40, 85]

function pares (n){
    return n % 2 ===0
}

function impares (n){
    return n % 2 === 1
}

var resultado = numeros.map(pares)
console.log(resultado)

var ret = numeros.filter(pares)
console.log(ret)

var ret = numeros.filter(impares)
console.log(ret)

function impressao(valor){
    return valor % 2 === 1
};

var resto = idade.map(impressao)
console.log(resto)



