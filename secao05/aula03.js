var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em javascript'
];
// definir uma função
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso)
    console.log(array)
}
//forEach na tradução seria "para cada". Para cada curso adicione a função imprimir
cursos.forEach(imprimir)

//utlização de uma função anônima (Lambda/callback) e template string
cursos.forEach(function(cursos,indice) {
    console.log(`${indice} - ${cursos}`)
})

// A forma como era declarada antes

for (var i = 0; i < cursos.length; i++){
    //console.log(i + ' - ' + cursos[i]);
}