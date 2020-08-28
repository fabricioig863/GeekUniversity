// Declarando Métodos
class Pessoa {
    // Funções dentro de uma classe são chamadas de metódos.
    constructor(nome,sobrenome){ 
        this._nome = nome;
        this._sobrenome = sobrenome;
    } 
    // Utilizamos get e set para manipular os atributos, como nome e sobrenome
    get nome(){
        return this._nome;
    }
    set nome(){
        this._nome = this.nome
    }
    get sobrenome(){
        return this._sobrenome;
    }
    set sobrenome(){
        this._sobrenome = sobrenome
    }
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }
    comer(){
        console.log(`${this.nome} está comendo...`);
    }
    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda'; // Não tem o set porque o atributo é fixo
        this._modelo = modelo;
    }
    get marca(){        
        return this._marca 
    }
    get modelo(){
        return this._modelo
    }
    set modelo(){
        this._modelo = modelo
    }
    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}



