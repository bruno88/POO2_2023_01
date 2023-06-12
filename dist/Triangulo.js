"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const Ponto_1 = require("./Ponto");
class Triangulo {
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
        return (this.getBase() * this.getAltura()) / 2;
    }
    calculaPerimetro() {
        return this.getAltura() + this.getBase() +
            Ponto_1.Ponto.getDistancia(this.pontoI, this.pontoF); // Assumindo triangulo retângulos
    }
    getAltura() {
        return Math.abs(this.pontoF.Y - this.pontoI.Y);
    }
    getBase() {
        return Math.abs(this.pontoF.X - this.pontoI.X);
    }
    constroi() {
        throw new Error("Method not implemented."); // Como constrói?
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=Triangulo.js.map