"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(nome, idade, codCartao, cpf) {
        if (cpf) {
            super(nome, idade, cpf);
        }
        else {
            super(nome, idade);
        }
        ;
        this._codCartao = codCartao;
    }
    ;
    get codCartao() {
        return this._codCartao;
    }
    set codCartao(v) {
        this._codCartao = v;
    }
    ;
    toString() {
        return "(Cliente) " + super.toString();
    }
    testeAbstrato() {
        console.log("Aqui eu estou implementando os testes do Cliente");
    }
}
exports.Cliente = Cliente;
;
//# sourceMappingURL=Cliente.js.map