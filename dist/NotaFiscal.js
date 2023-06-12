"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
class NotaFiscal {
    constructor(livro, qtd) {
        this._livro = livro;
        this._qtd = qtd;
    }
    get livro() {
        return this._livro;
    }
    set livro(novoLivro) {
        this._livro = novoLivro;
    }
    ;
    get qtd() {
        return this._qtd;
    }
    set qtd(novaQtd) {
        this._qtd = novaQtd;
    }
    ;
    calculaTotal() {
        return this._livro.preco * this.qtd;
    }
}
exports.NotaFiscal = NotaFiscal;
;
//# sourceMappingURL=NotaFiscal.js.map