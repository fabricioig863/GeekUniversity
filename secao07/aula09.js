// Sobrescrita de Método e Polimorfismo

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
// Class Funcionario extends Pessoa - Estou dizendo que o funcionário é uma pessoa
// super classe no caso seria como a classe. Que neste caso se chama Pessoa, com ela não há necessidade de ter que     definir os gets e sets para os Funcinários novamente.
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

    // Sobrescrita de método - Estamos sobrescrevendo um método existente na classe pai.
    imprimir_dados(){
        super.imprimir_dados();
        console.log(`Registro: ${this.registro} \nSalário: ${this.funcao.salario}`);
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

const prog = new Funcao('Programador', 5987.44);
const f1 = new Funcionarios('Paula', 'Fernandes', 'paula@gmail.com', '812.333.222.22', prog, 'G454');

f1.imprimir_dados();

const c1 = new Clientes('Pedro', 'Silveira', 'pedro@gmail.com', '455.555.555.22', 7.000);

// f1.imprimir_dados(); // Pessoa 
/* São a mesma pessoa, que estão utilizando o mesmo método, porem vão responder de formas diferentes */
c1.imprimir_dados(); // Pessoa

/* 
    Sobescrita de método - Overwriting 
  - Polimorfismo - Dois objetos do mesmo tipo tendo comportamentos diferentes.
*/