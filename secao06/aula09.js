let study = 'Global' // pode ser acessada globalmente no nosso projeto
// Closure da função imprimir
function imprimir(){
    console.log(study);
}
// Closure da função outra
function outra(){
    let study = 'local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(study) // Variaveis locais tem precendencias entre variavel global
}

outra(); 

let variavel = 'global';

function externa(){
    let variavel = 'Local'

    function interna(){
        return variavel; // Local
    }

    return interna;
}

let executa = externa();

console.log(executa()); // Local

/* 
    Estamos estudando Closures (contexto léxico de uma função)
    Linguagem de Programação chamada Clojure
    Chamamos de Closures o escopo que é criado quando uma função é declarada.
*/