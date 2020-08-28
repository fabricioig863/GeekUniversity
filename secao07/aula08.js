//Herança
/*  Utilizar herança nada mais é do que termos uma classe base, e outra classe que vai ser 
 uma subclasse base. */

/* 
funcionários
    nome,
    sobrenome,
    email,
    cpf,
    função,
    registro

Clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

Funções
    descrição
    salário
*/

class Funcao{
    constructor(descricao,salario){
        this._descricao = descricao
        this._salario = salario
    }
    get descricao(){
        return this._descricao 
    }
    set decricao(descricao){
        this._descricao = descricao
    }
    get salario(){
        return this._salario
    }
    set salario(salario){
        this._salario = salario
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome
        this._email = email
        this._cpf = cpf
    }
    get nome(){
        return this._nome
    }
    set nome(nome){
        this._nome = nome
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(sobrenome){
        this._sobrenome = sobrenome
    }
    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }
    get cpf(){
        return this._cpf 
    }
    set cpf(cpf){
        this._cpf = cpf
    }
    //Métodos extras
    get nome_completo(){
        return this._nome + ' ' + this._sobrenome;
    }
    // transforma a string em um array onde cada elemento do array será as partes da string separadas por espaço.
    set nome_completo(nome_completo){
        nome_completo = nome_completo.split(' ') // espaço

        // Remove e retorna elemento da posicao 0 do array
        this._nome = nome_completo.shift();
        
        // Junta os elementos do array em uma string, separando cada elemento por espaço.
        this._sobrenome = nome_completo.join(' ');
    }

    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }

}
// A classe Funcionarios herda a classe Pessoa através do extends, isso se chama herança.
// A partir do momento que uma classe herda outra classe, sua nomenclatura muda, exemplo:
// Class Funcionario extends Pessoa - Estou dizendo que o funcionário é uma pessoa.
// Super classe no caso seria como a classe. Que neste caso se chama Pessoa, com ela não há necessidade de ter que     definir os gets e sets para os Funcinários novamente.
class Funcionarios extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }
    get funcao(){
        return this._funcao
    }
    set funcao(funcao){
        this._funcao = funcao
    }
    get registro(){
        return this._registro;
    }
    set registro(registro){
        this._registro = registro
    }
}
class Clientes extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda
    }
    get renda(){
        return this._renda
    }
    set renda(renda){
        this._renda = renda
    }
}

// const cliente01 = new Clientes('Aline', 'Mattos', 'alinemattos@gmail.com', '442.784.254-00', '7.000');
// const cliente02 = new Clientes('Pedro', 'Figueiredo', 'pedrofigueiredo@gmail.com', '445.785.666.21', '6.000');

// console.log(cliente01)
// console.log(cliente02)

// console.log(cliente01.nome_completo);
// console.log(cliente02.nome_completo);

// Chamando através do set

// cliente01.nome_completo = 'Miguel Oliveira'
// console.log(cliente01)

// cliente02.imprimir_dados()

const programador = new Funcao('Programador', 4899.48);
const suporte = new Funcao('Suporte', 2789.34)

// console.log(programador);
// console.log(suporte);

const f1 = new Funcionarios('Patricia', 'Silva', 'patricia@gmail.com', '488.555.222.22', programador, 'F90gg')
const f2 = new Funcionarios('João', 'Carlos', 'Joaocarlos@gamil.com', '422.555.888.22', suporte, 'F87ff')

console.table(f1)
// console.log(f1)
// console.log(f2)

// console.log(f1.funcao.descricao)

// f1.imprimir_dados()

const C1 = new Clientes('Fabricio', 'Ignacio', 'fabricioig863@gmail.com','442.714.090.00', 12.000)

console.log(C1)