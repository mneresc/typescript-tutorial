import { NegociacaoDoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegocicaoService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then((respose) => {
                return respose.json();
            })
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map((negociacao) => {
                    return new Negociacao(new Date(), negociacao.vezes, negociacao.montante);
                });
            })

    }
}