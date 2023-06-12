import { ICalculavel } from "./ICalculavel";
import { Ponto } from "./Ponto";

export class Triangulo  implements ICalculavel, IConstruivel {
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
        return (this.getBase() * this.getAltura()) / 2;

    }
    calculaPerimetro(): number {
        return this.getAltura() + this.getBase() +
            Ponto.getDistancia(this.pontoI, this.pontoF); // Assumindo triangulo retângulos
    }

    getAltura(): number {
        return Math.abs(this.pontoF.Y - this.pontoI.Y);
    }

    getBase(): number {
        return Math.abs(this.pontoF.X - this.pontoI.X);
    }
    constroi(): void {
        throw new Error("Method not implemented."); // Como constrói?
    }  
}


