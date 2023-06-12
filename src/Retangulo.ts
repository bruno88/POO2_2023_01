import { FiguraQuadrada } from "./FiguraQuadrada";
import { ICalculavel } from "./ICalculavel";
import { Ponto } from "./Ponto";

export class Retangulo extends FiguraQuadrada implements ICalculavel {
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

    calculaArea(): number {
        return this.getLargura() * this.getAltura();
    }
    calculaPerimetro(): number {
        return (
            (2 * this.getAltura()) +
            (2 * this.getLargura())
        )
    }

    getAltura(): number {
        return Math.abs(super.pontoF.Y - super.pontoI.Y);
    }

    getLargura(): number {
        return Math.abs(super.pontoF.X - super.pontoI.X);
    }

}