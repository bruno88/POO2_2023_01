export class Livro {
    private _titulo: string;
    private _autor: string;
    private _preco: number;

    constructor(titulo: string, autor: string, preco: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    };


    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(novo: string) {
        this._titulo = novo;
    }

    public get autor(): string {
        return this._autor;
    }

    public set autor(novo: string) {
        this._autor = novo;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(novo: number) {
        this._preco = novo;
    };
};