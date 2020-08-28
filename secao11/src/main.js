import { soma as somarMais, subtracao } from './helper';
import dobrar from './dobrar'; // Utiliza default
import quadrado, { metade, MEUPI } from './funcoes';

// Aqui podemos importar tudo porque o export é comum, não faz uso do default
import * as helpers from './helper'; 

console.log(somarMais(40, 2));
console.log(dobrar(5));
console.log(subtracao(40, 20));

console.log(quadrado(7))
console.log(metade(8))
console.log(MEUPI)
console.log(helpers.soma(5, 9));
console.log(helpers.subtracao(9, 4));
// document.querySelector('body').style.background = 'purple';