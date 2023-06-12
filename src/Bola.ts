export class Bola {
    private _raio: number;

    constructor(raio: number) {
        this._raio = raio;
    }

    public get raio(): number {
        return this._raio;
    };

    public set raio(v: number) {
        this._raio = v;
    }
};