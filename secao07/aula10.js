//Métodos de Instância e estáticos
class Carro{
    constructor(modelo){
        this._marca = Carro.retornar_marca();
        this._modelo = modelo
    }
    // Métodos de instancia
    get marca(){
        return this._marca
    }
    // Métodos de instancia
    get modelo(){
        return this._modelo 
    }
    // Métodos de instancia
    set modelo(modelo){
        this._modelo = modelo
    }
    // Métodos de instancia
    imprimir_dados(){
        console.log(`${this.marca} ${this.modelo}`);
    }
    // Utilizamos o método static
    static retornar_marca(){
        return 'Honda'
    }
}
// Métodos de instancia, serve para instanciar um objeto e então ter acesso a eles.
//const fit = new Carro('Fit')

//fit.imprimir_dados();

//console.log(fit.marca)

// Acessando a marca sem a necessidade de instanciar o objeto
console.log(Carro.retornar_marca());

// Faz acesso através da própria classe
// Objetc.defineProperty()

console.log(Math.random());

console.log(Math.PI)