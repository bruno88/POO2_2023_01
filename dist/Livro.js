"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, preco) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    ;
    get titulo() {
        return this._titulo;
    }
    set titulo(novo) {
        this._titulo = novo;
    }
    get autor() {
        return this._autor;
    }
    set autor(novo) {
        this._autor = novo;
    }
    get preco() {
        return this._preco;
    }
    set preco(novo) {
        this._preco = novo;
    }
    ;
}
exports.Livro = Livro;
;
//# sourceMappingURL=Livro.js.map