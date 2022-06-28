import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
   private inputData: HTMLInputElement;
   private inputValor: HTMLInputElement;
   private inputQuantidade: HTMLInputElement;
   private negociacoes: Negociacoes = new Negociacoes();
   private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view');

   constructor() {
      this.inputData = document.querySelector('#data');
      this.inputValor = document.querySelector('#quantidade');
      this.inputQuantidade = document.querySelector('#valor');

      this.negociacoesView.update(this.negociacoes);
   }

   adiciona(): void {
      const negociacao = this.criaNegociacao();
      this.negociacoes.add(negociacao);
      this.limparFormulario();

      this.negociacoesView.update(this.negociacoes);

   }

   criaNegociacao(): Negociacao {
      const ext = /-/g
      const data = new Date(this.inputData.value.replace(ext, ','))
      return new Negociacao(
         data,
         parseInt(this.inputValor.value),
         parseFloat(this.inputQuantidade.value)
      );

   }

   limparFormulario(): void{
      this.inputData.value = "";
      this.inputValor.value = "";
      this.inputQuantidade.value = "";
      this.inputData.focus();
   };
}