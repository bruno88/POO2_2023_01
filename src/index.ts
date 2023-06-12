import { Banquinho } from "./Banquinho";
import { Bola } from "./Bola";
import { Cadeira } from "./Cadeira";
import { Circulo } from "./Circulo";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { ICalculavel } from "./ICalculavel";
import { Livro } from "./Livro";
import { Mesa } from "./Mesa";
import { NotaFiscal } from "./NotaFiscal";
import { Pessoa } from "./Pessoa";
import { Ponto } from "./Ponto";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";


//console.log("Hello World!");
//const pAna = new Funcionario("Ana", 21, "12345");
const pAna = new Cliente("Ana", 21, 789, "12345");
//const pBeto = new Pessoa("Beto", 39);
const pBeto = new Funcionario("Beto", 39, 11, 1500);
console.log(pAna.toString());
console.log(pBeto.toString());

// Caio com CPF opcional: atenção pro CPF no final.
const funcCaio = new Funcionario("Caio", 32, 44, 1400);
console.log(funcCaio.toString());

// Danilo com CPF opcional passado: atenção pro CPF no final.
const funcDanilo = new Funcionario("Danilo", 33, 45,
    2048.00, "91827656");
console.log(funcDanilo.toString());

console.log(funcCaio.getBonificacao()); // Sem parametro: default
console.log(funcCaio.getBonificacao(0.25)); // Com parametro

const cliEd = new Cliente("Ed", 25, 172617); // sem CPF
console.log(cliEd.toString());

const cliFabi = new Cliente("Fabi", 62, 191949, "1919191"); // com CPF
console.log(cliFabi.toString());

// Fazendo um teste de polimorfismo com 
// diversas instancias de Pessoa
const vetPessoas = [];
vetPessoas.push(pAna);
vetPessoas.push(pBeto);
vetPessoas.push(funcCaio);
vetPessoas.push(funcDanilo);
vetPessoas.push(cliEd);
vetPessoas.push(cliFabi);
const bola1 = new Bola(10);
//vetPessoas.push(bola1);

imprimePessoas(vetPessoas);

// Aplicação do polimorfismo
function imprimePessoas(vetor: Pessoa[]) {
    console.log("\n### Iniciando impressão de pessoas ###\n");

    // for each
    vetor.forEach(pessoa => {
        console.log(pessoa.toString());
    });
};


// Será que dá pra passar um vetor de
// pessoas com uma bola infiltrada?
const bola = new Bola(5);
vetPessoas.push(bola);
//console.log(bola);
//imprimePessoas(vetPessoas);

// Método estático na prática:
console.log(Funcionario.getNomeEmpresa());

// Mostrar aqui Pessoa como Classe abstrata

// Uso de interfaces

const cadeira1 = new Cadeira();
cadeira1.constroi();
const cadeira2 = new Cadeira();
const banquinho1 = new Banquinho();
const mesa1 = new Mesa();
const mesa2 = new Mesa();

//
constroiAlgo(cadeira1);
constroiAlgo(mesa2);


//let vetObjetos : IConstruivel[] = [];
let vetObjetos = [];
vetObjetos.push(cadeira1);
vetObjetos.push(mesa1);
vetObjetos.push(banquinho1);
vetObjetos.push(cadeira2);
vetObjetos.push(mesa2);
//vetObjetos.push(funcCaio);

// Forma 1
/*console.log("\n===== Iniciando construção dos Objetos =====");
vetObjetos.forEach(obj => {
    obj.constroi(); // Forma 1
    //constroiAlgo(obj); // Forma 2
});*/

constroiVarios(vetObjetos); // Forma 3

// Polimorfismo com Interface
function constroiAlgo(algo: IConstruivel) {
    algo.constroi();
};

// Polimorfismo com Interface
function constroiVarios(vetor: IConstruivel[]) {
    console.log("\n===== Iniciando construção dos Objetos =====");
    vetor.forEach(obj => {
        obj.constroi();
    });
};

const livro1 = new Livro('O Hobbit', 'J.R.R. Tolkien', 49.99);
const nf1 = new NotaFiscal(livro1, 10);

console.log('total para o livro: ' + nf1.livro.titulo + " = " + nf1.calculaTotal().toFixed(2));

// Exercício de figuras geometricas:

const ponto1 = new Ponto(2,4);
const ponto2 = new Ponto(6,2);
const ret1 = new Retangulo(ponto1, ponto2);
console.log("Dados do Retângulo:");

console.log(ret1.getAltura());
console.log(ret1.getLargura());
console.log(ret1.calculaArea());
console.log(ret1.calculaPerimetro());

const circulo1 = new Circulo(ponto1, ponto2);
console.log("Dados do Circulo:");
console.log(circulo1.getRaio());
console.log(circulo1.calculaArea());
console.log(circulo1.calculaPerimetro());

const ponto3 = new Ponto(3,5);
const ponto4 = new Ponto(4,2);
const triangulo1 = new Triangulo(ponto3, ponto4);
console.log("Dados do Triangulo:");
console.log(triangulo1.getAltura());
console.log(triangulo1.getBase());
console.log(triangulo1.calculaArea());
console.log(triangulo1.calculaPerimetro());

const vetFiguras: ICalculavel[] = [];

vetFiguras.push(ret1);
vetFiguras.push(circulo1);
vetFiguras.push(triangulo1);
//vetFiguras.push(funcCaio);

exibeDadosFigura();

function exibeDadosFigura():void{
    console.log("\n### Leitura das Figuras ###");
    
    vetFiguras.forEach(figura => {
        console.log("Dados do " + figura.constructor.name);
        console.log("Area: " + figura.calculaArea().toFixed(2));
        console.log("Perímetro: " + figura.calculaPerimetro().toFixed(2));
    });
}