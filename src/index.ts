
// Trabalhando com async/await e Promises unicas

async function getCEPFromViaCEP(): Promise<Response> {
    // Para testar: coloque alguma letra a mais na URL abaixo e o fetch dará erro.
    const url = "https://viacep.com.br/ws/29650000/json/";
    const response = await fetch(url);
    return response.json();
}

// Chamando a função
getCEPFromViaCEP()
    .then((fromResolve: any) => { //Forçando o tipo desconhecido
        console.log(fromResolve) // Para melhor vermos o objeto
        console.log("CEP: " + fromResolve['cep']);
        console.log("Cidade: " + fromResolve['localidade']);
        // pega os dados, cria objeto, salva
        // (...)
    })
    .catch((fromReject) => console.error("Msg de erro: " +
        fromReject.name + ": " +
        fromReject.message));

// Trabalhando com async/await e Promises encadeadas

async function abrirArquivo(): Promise<string> {
    // Tenta abrir o arquivo e retorna um boolean pra sucesso ou fracasso
    return new Promise((resolve, reject) => {
        // Vamos tentar abrir um arquivo
        let isOpened: boolean = true;
        if (isOpened) {
            resolve("Abriu o arquivo");
        } else {
            reject("Não abriu o arquivo")
        }
    });
};

async function lerArquivo(): Promise<string> {
    // Tenta ler o arquivo aberto e retorna um boolean pra sucesso ou fracasso
    return new Promise((resolve, reject) => {
        // Vamos tentar ler o arquivo
        let isRead: boolean = true;
        if (isRead) {
            resolve("Leu o arquivo");
        } else {
            reject("Não leu o arquivo")
        }
    });
};

async function formatarArquivo(): Promise<string> {
    // Tenta formatar o arquivo e retorna um boolean pra sucesso ou fracasso
    // Logica: Primeiro eu abro o arquivo, depois leio, depois formato.
    return new Promise((resolve, reject) => {
        // Vamos tentar formatar o arquivo
        let isFormatted: boolean = true;
        if (isFormatted) {
            resolve("Formatou o arquivo");
        } else {
            reject("Não formatou o arquivo")
        }
    });
};

async function formatarDocumento(){
    await (abrirArquivo()
    .then(() => lerArquivo()
        .then(() => formatarArquivo()
            .then(() => console.log("Tudo foi realizado"))
            .catch((fromReject) => console.log(fromReject)))
        .catch((fromReject) => console.log(fromReject)))
    .catch((fromReject) => console.log(fromReject)));
}

formatarDocumento();
console.log("Quando isso vai ser impresso no console???");