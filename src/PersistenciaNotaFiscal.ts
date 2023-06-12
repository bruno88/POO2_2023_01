import { NotaFiscal } from "./NotaFiscal";

export interface PersistenciaNotaFiscal {
    salvar(nota : NotaFiscal): void;
};