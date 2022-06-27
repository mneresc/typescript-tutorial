import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacaoControler = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();
    negociacaoControler.adiciona();
})
