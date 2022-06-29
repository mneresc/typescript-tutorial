import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                  ${
                    model.list().map((negociacao)=>{
                        return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                        `;
                    }).join('')
                  }
                </tbody>
            </table>
        
        
        
        `;
    }
}