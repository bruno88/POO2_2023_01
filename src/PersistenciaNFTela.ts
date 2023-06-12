import { NotaFiscal } from "./NotaFiscal";
import { PersistenciaNotaFiscal } from "./PersistenciaNotaFiscal";

export class PersistenciaNFTela implements PersistenciaNotaFiscal{
    salvar(nota: NotaFiscal): void {
        console.log("Estou escrevendo em tela a minha NF " + nota.livro.titulo)
    }
}