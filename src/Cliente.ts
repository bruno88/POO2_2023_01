import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    
    private _codCartao: number;

    constructor(nome: string, idade: number, codCartao: number, cpf?: string) {
        if (cpf) {
            super(nome, idade, cpf);
        } else {
            super(nome, idade);
        };

        this._codCartao = codCartao;
    };

    public get codCartao(): number {
        return this._codCartao;
    }

    public set codCartao(v: number) {
        this._codCartao = v;
    };

    public toString(): string {
        return "(Cliente) " + super.toString();
    }

    public testeAbstrato(): void {
        console.log("Aqui eu estou implementando os testes do Cliente");
        
    }
};