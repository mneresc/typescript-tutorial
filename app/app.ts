import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const negociacaoControler = new NegociacaoController();
const form = document.querySelector('.form');


form.addEventListener('submit', event => {
    event.preventDefault();
    negociacaoControler.adiciona();
})

const botaoImportar = document.querySelector('#botao-importar')
botaoImportar.addEventListener('click', event => {
    event.preventDefault();
    negociacaoControler.importar();
})
