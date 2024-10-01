class Pessoa {
    #idade
    constructor(nome, idade) {
        this.nome = nome
        this.#idade = idade
    }

    get idade() {
        return this.#idade;
    }

    set idade(idadeNova) {
        return this.#idade = idadeNova;
    }
}

pessoa1 = new Pessoa("Isabella", 30);
pessoa1.idade = 20;

// Exercício 03:
