var nome; // Iça a declaração da variável 
console.log(nome); //Undefined - aqui ocorre o Hoisting (içamento)

nome = 'Geek'; // inicializando a variável 
console.log(nome);

console.log(idade + 4); //Nan - Not a Number

var idade = 23;

console.log(idade);