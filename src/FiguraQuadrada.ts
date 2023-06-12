import { Ponto } from "./Ponto";

export abstract class FiguraQuadrada {
    private _pontoI: Ponto;
    private _pontoF: Ponto;

    constructor(pontoI: Ponto, pontoF: Ponto) {
        this._pontoI = pontoI;
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
    }
};