import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
   private inputData: HTMLInputElement;
   private inputValor: HTMLInputElement;
   private inputQuantidade: HTMLInputElement;
   private negociacoes: Negociacoes = new Negociacoes();
   private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view');
   private mensagemView: MensagemView = new MensagemView('#mensagem-view');

   constructor() {
      this.inputData = document.querySelector('#data');
      this.inputValor = document.querySelector('#quantidade');
      this.inputQuantidade = document.querySelector('#valor');

      this.negociacoesView.update(this.negociacoes);
   }

   public adiciona(): void {
      const negociacao = this.criaNegociacao();
      this.negociacoes.add(negociacao);
      this.limparFormulario();

      this.atualizaView();

   }

   private criaNegociacao(): Negociacao {
      const ext = /-/g
      const data = new Date(this.inputData.value.replace(ext, ','))
      return new Negociacao(
         data,
         parseInt(this.inputValor.value),
         parseFloat(this.inputQuantidade.value)
      );

   }

   private limparFormulario(): void {
      this.inputData.value = "";
      this.inputValor.value = "";
      this.inputQuantidade.value = "";
      this.inputData.focus();
   };

   private atualizaView(): void {
      this.negociacoesView.update(this.negociacoes);
      this.mensagemView.update('Negociação adicionada com sucesso');
   }
}