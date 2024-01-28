//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10';

let listaDENumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let = tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoNaTela('h1' , 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Parabéns Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('p', mensagemTentativas);
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O numero secreto é menor');
            } else {
                exibirTextoNaTela('p', 'O numero secreto é maior');
            } tentativas ++;  
            limparCampo(); 
        }
    }

function gerarNumeroAleatorio() {
    
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDENumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDENumerosSorteados = [];
}

   if (listaDENumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    }else{
        listaDENumerosSorteados.push(numeroEscolhido);
        console.log(listaDENumerosSorteados)
        return numeroEscolhido;
   };
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;  
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled',
    true)
}