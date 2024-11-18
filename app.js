alert('bem vindo ao jogo');
let numeroMaximo = parseInt(Math.random() * 100 + 1);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// testando
while(chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 1 e ' + numeroMaximo);
    // acerto
    if(chute == numeroSecreto){
        break;
        
    } else {
        if(chute > numeroSecreto) {
            alert('o numero secreto é menor que ' + chute);
            } else{
                alert('o numero secreto é maior que ' + chute);
            }
            tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tentativa'
alert('acertouuuuu ' + numeroSecreto + ' com ' + tentativas + palavraTentativa);