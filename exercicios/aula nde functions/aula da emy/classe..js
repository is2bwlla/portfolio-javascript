class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    falar() {
        console.log(`${this.nome} esta falando...`)
    }
}

pessoa1 = new Pessoa("Isabella", "27", "444.555.222-99");
pessoa1.falar();

// exercício 01:
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    buzinar() {
        console.log("Bi... Bi...");
    }
}

carro1 = new Carro("Chrevrolet", "S10", "2013");
carro1.buzinar();

// Exercício 02:
class Livro {
    #autor
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo
        this.#autor = autor
        this.anoPublicacao = anoPublicacao
    }

    resumo() {
        console.log(`${this.titulo} é um livro do(a) autor(a) ${this.#autor} que foi publicado em ${this.anoPublicacao}`);
    }

    // Exercício 03:
    get autor() {
        return this.#autor;
    }

    set autor(novoAutor) {
        return this.#autor = novoAutor;
    }
}

livro1 = new Livro("Os dois morrem no final", "Adam Silveira", "2017")

livro1.autor = "Adam Moreira"
livro1.resumo()


// Exercício 04:
class contaBancaria {
    #saldo
    constructor(nome, saldo) {
        this.nome = nome
        this.#saldo = saldo
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        return this.#saldo = novoSaldo;
    }

    negativado() {
        if (this.#saldo < 0) {
            console.log("Saldo inválido.");
            return this.saldo;

        } else {
            console.log(`Saldo: ${this.#saldo}`);
        }
    }
}

pessoa4 = new contaBancaria("Isabella", 40)
pessoa4.negativado()


class dispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        if (!this.ligado) {
            this.ligado = true
            console.log("Dispositivo ligado.")
        } else {
            console.log("Dispositivo já está ligado.")
        }
    }
    desligar() {
        if (this.ligado) {
            this.ligado = false
            console.log("Dispositivo desligado.")
        } else {
            console.log("Dispositivo já está desligado.")
        }
    }

    falarTchau() {
        console.log("Tchau!")
    }
}

class Smartphone extends dispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
    falarTchau() {
        console.log("Oi!")
    }
}

celular1 = new Smartphone("samsung", "preto", "galaxy s10")
celular1.ligar()
celular1.desligar()
celular1.falarTchau()

dispositivo = new dispositivoEletronico("iphone", "branco", "13")
dispositivo.falarTchau()

// Exercício 05:
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

    exibirInformacoes() {
        console.log(`A gerente ${this.nome} está recebendo ${this.salario} no departamento ${this.departamento}`)
    }
}

gerente = new Gerente("Isabella", 1400, "Almoxarifado.")
gerente.exibirInformacoes()

