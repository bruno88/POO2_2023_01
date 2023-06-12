"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(nome, idade, matricula, salario, cpf) {
        if (cpf) {
            super(nome, idade, cpf);
        }
        else {
            super(nome, idade);
        }
        ;
        this._matricula = matricula;
        this.salario = salario;
    }
    ;
    get matricula() {
        return this._matricula;
    }
    set matricula(v) {
        this._matricula = v;
    }
    ;
    get salario() {
        return this._salario;
    }
    set salario(novoSalario) {
        if (novoSalario < 1320) {
            throw new Error("Salario abaixo do mínimo");
        }
        else {
            this._salario = novoSalario;
        }
    }
    ;
    // Exemplo de método estático
    static getNomeEmpresa() {
        return "IFES Campus Santa Teresa";
    }
    ;
    getBonificacao(percentual = 0.19) {
        // OBS: Eu não preciso verificar se o 
        // percentual recebido é number, porque Typescript é tipado
        return this._salario * percentual;
    }
    ;
    // Sobrescrita de métodos
    toString() {
        return super.toString() + "\nCód. Matrícula: "
            + this._matricula + " (R$ " + this._salario.toFixed(2) + ").";
    }
    ;
    testeAbstrato() {
        console.log("Aqui eu estou implementando os testes do Funcionario");
    }
}
exports.Funcionario = Funcionario;
;
//# sourceMappingURL=Funcionario.js.map