import { ICalculavel } from "./ICalculavel";
import { Ponto } from "./Ponto";

export class Circulo implements ICalculavel {
    private _pontoI: Ponto;
    private _pontoF: Ponto;

    constructor(pontoX: Ponto, pontoY: Ponto) {
        this._pontoI = pontoX;
        this._pontoF = pontoY;
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
    }

    calculaArea(): number {
        return Math.PI * Math.pow(this.getRaio(), 2);
    }
    calculaPerimetro(): number {
        return 2 * Math.PI * this.getRaio();
    }

    getRaio(): number {
        return Ponto.getDistancia(this.pontoI, this.pontoF);
    }
}