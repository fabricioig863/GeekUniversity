/*
    Utilizamos o map para realizar transformações em um array.
    Você tem um array com determinados valores, você utiliza o map, para mapear 
    os dados de um array e aplicar a transformação, gerando um array de mesmo 
    tamanho com os dados transformados.
*/
var valores = [2, 4, 8, 6, 10];

var dobro = valores.map(function(valor){
    return valor * 2
})

//console.log(dobro)

function dobrar(valor){
    return valor * 2
};

dobro = valores.map(dobrar);
//console.log(dobro)

//Encadeando maps para realizar múltiplas transformações
function somar_4(valor){
    return valor + 4
}

function dividir_por_5(valor){
    return valor / 5
}

var resultado = valores.map(dobrar).map(somar_4).map(dividir_por_5);
//console.log(resultado)

/*
    Diferença entre forEach e Map por mais parecidos que sejam a diferença se encontra no map onde ele pode retornar um array, já o forEach não pode. 

    Passo 1 -> dobrar os valores
    Passo 2 -> Somar 4 
    Passo 3 -> Dividir por 5
*/ 


