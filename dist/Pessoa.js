"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, cpf) {
        this._nome = nome;
        this._idade = idade;
        // Parametros opcionais
        if (cpf) {
            this._cpf = cpf;
        }
        else {
            this._cpf = "Não informado";
        }
    }
    ;
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
    ;
    get idade() {
        return this._idade;
    }
    set idade(v) {
        this._idade = v;
    }
    ;
    get cpf() {
        return this._cpf;
    }
    set cpf(v) {
        this._cpf = v;
    }
    ;
    toString() {
        return "Dados da pessoa: " + this.nome +
            ", " + this.idade + " anos. CPF: " +
            this.cpf + ".";
    }
    ;
}
exports.Pessoa = Pessoa;
;
//# sourceMappingURL=Pessoa.js.map