// Declaramos os atributos
// Um método nada mais é do que uma função.
class Pessoa {
    constructor(nome,sobrenome){ // Constructor é um método
        this.nome = nome;
        this.sobrenome = sobrenome;
    } 
}

class Carro {
    constructor(modelo){
        this.marca = 'Honda';
        this.modelo = modelo;
    }
}

// No javascript tudo é público, para deixar privado um atributo sem poder acessa-lo, é necessário usar um nome.  
