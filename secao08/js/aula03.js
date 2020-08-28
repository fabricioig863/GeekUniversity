function mostrarAlerta(){
    alert('O botão foi clicado!');
}

function mudarTexto(elemento){
    elemento.innerHTML = 'Eu estou avisando...';
}

function mudarCor(){
    let cores = ['green', 'red', 'magenta', 'purple', 'blue', 'yellow', 'black', 'orange']

    const numeros = Math.floor((Math.random() * cores.length) + 1);

    document.bgColor = cores[numeros];
}

function escreverTexto(input){
    let span = document.getElementById('texto');

    span.innerHTML = input.value
}