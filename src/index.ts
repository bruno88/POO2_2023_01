
// Trabalhando com async/await e Promises unicas

async function getCEPFromViaCEP(): Promise<Response> {
    // Para testar: coloque alguma letra a mais na URL abaixo e o fetch dará erro.
    const url = "https://viacep.com.br/ws/2528498/json/";
    const response = await fetch(url);
    return response.json();
}
/*
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
*/
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
            reject("Não formatou o arquivo");
        }
    });
};

async function formatarDocumento() {
    // Execução da função abrirArquivo de forma assíncrona
    await (abrirArquivo()
        // Caso bem sucedido ABERTURA, o retorno da função está no fromResolve
        .then((fromResolve) => {
            console.log(fromResolve);
            lerArquivo()
                // Caso bem sucedido LEITURA, o retorno da função está no fromResolve
                .then((fromResolve) => {
                    console.log(fromResolve);
                    formatarArquivo()
                        // Caso bem sucedida FORMATAÇÃO, o retorno da função está no fromResolve
                        .then((fromResolve) => {
                            console.log(fromResolve);
                            console.log("Tudo foi realizado")
                            // Caso mal sucedida FORMATAÇÃO, o retorno da função está no fromReject
                        }).catch((fromReject) => console.log(fromReject))
                    // Caso mal sucedida LEITURA, o retorno da função está no fromReject
                }).catch((fromReject) => console.log(fromReject))
            // Caso mal sucedida ABERTURA, o retorno da função está no fromReject
        }).catch((fromReject) => console.log(fromReject)));
}

formatarDocumento();
console.log("Quando isso vai ser impresso no console???");