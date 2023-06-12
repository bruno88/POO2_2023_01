export abstract class Pessoa {
    //export class Pessoa {
    private _nome: string;
    private _idade: number;
    private _cpf: string;

    constructor(nome: string, idade: number, cpf?: string) {
        this._nome = nome;
        this._idade = idade;
        // Parametros opcionais
        if (cpf) {
            this._cpf = cpf;
        } else {
            this._cpf = "Não informado";
        }
    };

    public get nome(): string {
        return this._nome;
    }

    public set nome(v: string) {
        this._nome = v;
    };

    public get idade(): number {
        return this._idade;
    }

    public set idade(v: number) {
        this._idade = v;
    };

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(v: string) {
        this._cpf = v;
    };

    public toString() {
        return "Dados da pessoa: " + this.nome +
            ", " + this.idade + " anos. CPF: " +
            this.cpf + ".";
    };
    public abstract testeAbstrato() :void;
};