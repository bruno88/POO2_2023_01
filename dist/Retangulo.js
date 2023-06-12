"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
const FiguraQuadrada_1 = require("./FiguraQuadrada");
class Retangulo extends FiguraQuadrada_1.FiguraQuadrada {
    /*private _pontoI: Ponto;
    private _pontoF: Ponto;

    constructor(pontoI: Ponto, pontoF: Ponto) {
        this._pontoI = ponwtoI;
        this._pontoF = pontoF;
    }

    public get pontoI(): Ponto {
        return this._pontoI;
    }

    public set pontoI(novo: Ponto) {
        this._pontoI = novo;
    }

    public get pontoF(): Ponto {
        return this._pontoF;
    }

    public set pontoF(novo: Ponto) {
        this._pontoF = novo;
    }*/
    calculaArea() {
        return this.getLargura() * this.getAltura();
    }
    calculaPerimetro() {
        return ((2 * this.getAltura()) +
            (2 * this.getLargura()));
    }
    getAltura() {
        return Math.abs(super.pontoF.Y - super.pontoI.Y);
    }
    getLargura() {
        return Math.abs(super.pontoF.X - super.pontoI.X);
    }
}
exports.Retangulo = Retangulo;
//# sourceMappingURL=Retangulo.js.map