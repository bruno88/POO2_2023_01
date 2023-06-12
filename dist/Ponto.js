"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto = void 0;
class Ponto {
    constructor(X, Y) {
        this._X = X;
        this._Y = Y;
    }
    get X() {
        return this._X;
    }
    set X(novo) {
        this._X = novo;
    }
    get Y() {
        return this._Y;
    }
    set Y(novo) {
        this._Y = novo;
    }
    static getDistancia(pontoA, pontoB) {
        return Math.sqrt(Math.pow((pontoB.X - pontoA.X), 2) +
            Math.pow((pontoB.Y - pontoA.Y), 2));
    }
}
exports.Ponto = Ponto;
//# sourceMappingURL=Ponto.js.map