import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
   private inputData: HTMLInputElement;
   private inputValor: HTMLInputElement;
   private inputQuantidade: HTMLInputElement;

   constructor() {
      this.inputData = document.querySelector('#data');
      this.inputValor = document.querySelector('#quantidade');
      this.inputQuantidade = document.querySelector('#valor');
   }

   adiciona(): void {
      const negociacao = this.criaNegociacao();
      console.log(negociacao);

      this.limparFormulario();

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