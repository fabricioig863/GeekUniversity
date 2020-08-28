// funções com parâmetro e retorno

function calcular_idade(ano_nascimento){
    const data = new Date(); // Gera a data atual

    const idade = data.getFullYear() - ano_nascimento
    return idade;
}

let ret = calcular_idade(1996)
console.log(ret)

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento

    console.log(idade);
}

calcular_idade2(1998)

const data = new Date();

//console.log('Data completa: ' + data);
//console.log('Ano: ' + data.getFullYear());
//console.log('Mês: ' + data.getMonth()); //) para janeiro e 1 para fevereiro

// Fique esperto sempre !!

function somar(num1,num2){
    return num1 + num2
}
console.log(somar(4,6)); // 10
console.log(somar(4)); // Nan - Not a number porque o segundo valor não foi definido
console.log(somar(5,8,10)); // Valor 10 não foi definido como parâmetro
