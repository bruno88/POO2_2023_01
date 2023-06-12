"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const Ponto_1 = require("./Ponto");
class Circulo {
    constructor(pontoX, pontoY) {
        this._pontoI = pontoX;
        this._pontoF = pontoY;
    }
    get pontoI() {
        return this._pontoI;
    }
    set pontoI(novo) {
        this._pontoI = novo;
    }
    get pontoF() {
        return this._pontoF;
    }
    set pontoF(novo) {
        this._pontoF = novo;
    }
    calculaArea() {
        return Math.PI * Math.pow(this.getRaio(), 2);
    }
    calculaPerimetro() {
        return 2 * Math.PI * this.getRaio();
    }
    getRaio() {
        return Ponto_1.Ponto.getDistancia(this.pontoI, this.pontoF);
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=Circulo.js.map