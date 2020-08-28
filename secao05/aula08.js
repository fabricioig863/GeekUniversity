// Template String

const idade = 8;
const nome = 'Geek'

//console.log(nome + ' tem ' + idade + ' anos ');

//console.log(`${nome} tem ${idade} anos`)

/*
    Em template strings usa-se a crase, e não aspas simples ou acento agudo
*/ 

function soma_3(idade){
    return idade + 3
}
console.log(`${nome} tem ${soma_3(idade)} anos`);




