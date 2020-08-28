// let itexto = document.getElementById('produto')

// console.log(itexto)

let spans = document.getElementsByTagName('span');

// console.log(spans)

// let eles = document.getElementsByClassName('texto')

// console.log(eles)

// // Ler valores
// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// // Alterar valores
// spans[0].textContent = 'Javascript';
// // spans[1].innerHTML = 'Geek University';


// let span = document.getElementsByTagName('span')[0];

// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';

// busca todos os elementos pela tag
// let inp = document.querySelectorAll('input'); 

// busca todos os elementos pela classe, temos 3 elementos com a classe texto, porém ele devolve o primeiro que encontrar. 
// let eles = document.querySelectorAll('.texto'); 

// console.log(eles);

// let div1 = document.querySelector('#div1'); //Busca elemento pelo ID

// console.log(div1)

// let imp = document.querySelector('input[name=produto]');

// console.log(imp)

// Exemplo 1
// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.addEventListener('click', () => {
    alert(`Temos o texto ${inp.value}`)
})
