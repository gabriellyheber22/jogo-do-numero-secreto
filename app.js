let listaDeNumerosSorteados = [];
let numeroLimite = 10;
exibeMensagemInicial();
let numeroSecreto = geraNumeroAleatorio();
let tentativa = 1;

function verificarChute() {
    let chute = document.querySelector('input').value; // pega o valor dentro do input
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = ` Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibeTextoNaTela('h1', 'ACERTO!!');
        exibeTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibeTextoNaTela('p', 'O numero secreto é menor!');
    } else {
        exibeTextoNaTela('p', 'O número secreto é maior!');
    }
    tentativa++;
    limpaCampo();
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}
function exibeMensagemInicial() {
    exibeTextoNaTela('h1', 'Jogo da Adivinhação');
    exibeTextoNaTela('p', 'Escolha um numero entre 1 a 10');
}



function geraNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosSorteados = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosSorteados == reiniciarJogo()) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function reiniciarJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limpaCampo();
    tentativa = 1;
    exibeMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




