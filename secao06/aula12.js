// Forma Literal ele executa porque joga a função acima durante a execução, isto só 
// funciona se a função for escrita de forma literal ou seja, sem simplificar como uma
// função anônima ou Arrow function.
console.log(somar(4,6))

function somar(n1,n2){
    return n1 + n2
}
