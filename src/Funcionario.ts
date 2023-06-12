import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa {
    private _matricula: number;
    private _salario!: number; // Apresentar a confirmação ao Compilador

    constructor(nome: string, idade: number, matricula: number,
        salario: number, cpf?: string) {
        if (cpf) {
            super(nome, idade, cpf);
        } else {
            super(nome, idade);
        };

        this._matricula = matricula;
        this.salario = salario;
    };

    public get matricula(): number {
        return this._matricula;
    }

    public set matricula(v: number) {
        this._matricula = v;
    };

    public get salario(): number {
        return this._salario;
    }

    public set salario(novoSalario: number) {
        if (novoSalario < 1320) {
            throw new Error("Salario abaixo do mínimo");
        } else {
            this._salario = novoSalario;
        }
        
    };

    // Exemplo de método estático
    public static getNomeEmpresa(): string {
        return "IFES Campus Santa Teresa";
    };

    public getBonificacao(percentual: number = 0.19): number {
        // OBS: Eu não preciso verificar se o 
        // percentual recebido é number, porque Typescript é tipado
        return this._salario * percentual;
    };

    // Sobrescrita de métodos
    public toString(): string {
        return super.toString() + "\nCód. Matrícula: "
            + this._matricula + " (R$ " + this._salario.toFixed(2) + ").";
    };

    public testeAbstrato(): void {
        console.log("Aqui eu estou implementando os testes do Funcionario");
        
    }
};