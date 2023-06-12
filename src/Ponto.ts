export class Ponto {
    private _X: number;
    private _Y: number;

    constructor(X: number, Y: number) {
        this._X = X;
        this._Y = Y;
    }

    public get X(): number {
        return this._X;
    }

    public set X(novo: number) {
        this._X = novo;
    }

    public get Y(): number {
        return this._Y;
    }

    public set Y(novo: number) {
        this._Y = novo;
    }

    public static getDistancia(pontoA: Ponto, pontoB: Ponto): number {
        return Math.sqrt(
            Math.pow((pontoB.X - pontoA.X), 2) +
            Math.pow((pontoB.Y - pontoA.Y), 2)
        );
    }
}