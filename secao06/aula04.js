//Funções com parâmetros váriáveis e valor padrão

function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma;
}

//console.log(somar()); // 0
//console.log(somar(2)); // 2
//console.log(somar(2,5)) // 7
//console.log(somar(5,3,9)) // 17
//console.log(somar(2,4,6,8,12,15)) // 32

function imprime_valores(num1,num2){
    for(let i in arguments){
        console.log(arguments[i])
    }
}
//imprime_valores();
//imprime_valores(4,6);
//imprime_valores(4,6,8);
//imprime_valores(3,6,8,12,44,56);

//Gambiarra 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3
}

//console.log(somar2()); // 6
//console.log(somar2(2)); // 7
//console.log(somar2(2,5)) // 10
//console.log(somar2(5,3,9)) // 17
//console.log(somar2(2,4,6,8,12,15)) // 12 porque ignora o restante

//console.log(somar2(0,0,0)); // Era pra retornar 0 porem retorna 6

//Gambiarra2

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1: num1;
    num2 = isNaN(num2) ? 2: num2;
    num3 = isNaN(num3) ? 3: num3;

    return num1 + num2 + num3;
}

//console.log(somar3()); // 6
// console.log(somar3(2)); // 7
// console.log(somar3(2,5)) // 10
// console.log(somar3(5,3,9)) // 17
// console.log(somar3(2,4,6,8,12,15)) // 12
// console.log(somar3(0,0,0)) // 0

//Forma recomendada 

function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

// console.log(somar4());
// console.log(somar4(2)); // 7
// console.log(somar4(2,5)) // 10
// console.log(somar4(5,3,9)) // 17
// console.log(somar4(2,4,6,8,12,15)) // 12
// console.log(somar4(0,0,0))// 0


// E com strings? o que o javascript retorna

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possivel efetuar a soma';
    }
}

// console.log(somar5()); // 6 
// console.log(somar5(2)); // 7
// console.log(somar5(2,5)) // 10
// console.log(somar5(5,3,9)) // 17
// console.log(somar5(2,4,6,8,12,15)) // 12
// console.log(somar5(0,0,0)) // 0

// console.log(somar5('a,b,c'))
// console.log(somar5(true,false,'b'))
// console.log(somar5(1,1));

