import { logarTempoExeucao } from "../decorators/log-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { NegocicaoService } from "../services/negociacao-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
   private inputData: HTMLInputElement;
   private inputValor: HTMLInputElement;
   private inputQuantidade: HTMLInputElement;
   private negociacoes: Negociacoes = new Negociacoes();
   private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoes-view');
   private mensagemView: MensagemView = new MensagemView('#mensagem-view');
   private service = new NegocicaoService();
    


   constructor() {
      this.inputData = document.querySelector('#data');
      this.inputValor = document.querySelector('#quantidade');
      this.inputQuantidade = document.querySelector('#valor');

      this.negociacoesView.update(this.negociacoes);
   }

   @logarTempoExeucao()
   public adiciona(): void {
      const negociacao = this.criaNegociacao();
      if (!this.isDiaUtil(negociacao.data)) {
         this.mensagemView.update('Apenas negociações em dias úteis são aceias');
         return;
      }

      this.negociacoes.add(negociacao);
      this.atualizaView();
      this.limparFormulario();
   }


   public importar(): void {
      this.service.obterNegociacoes()
      .then((negociacoesHoje: Negociacao[]) => {
         for (let negociacao of negociacoesHoje) {
            this.negociacoes.add(negociacao);
         }
         this.negociacoesView.update(this.negociacoes)
      });
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

   private isDiaUtil(data: Date): boolean {
      return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
   }
}