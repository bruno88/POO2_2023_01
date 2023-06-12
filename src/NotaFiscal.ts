import { Livro } from "./Livro";

export class NotaFiscal {
    private _livro : Livro;
    private _qtd: number;

    constructor(livro: Livro, qtd:number){
        this._livro = livro;
        this._qtd = qtd;
    }

    public get livro(): Livro {
        return this._livro;
    }

    public set livro(novoLivro: Livro) {
        this._livro = novoLivro;
    };

    public get qtd(): number {
        return this._qtd;
    }

    public set qtd(novaQtd: number) {
        this._qtd = novaQtd;
    };

    public calculaTotal() : number {
        return this._livro.preco * this.qtd;
    }
};