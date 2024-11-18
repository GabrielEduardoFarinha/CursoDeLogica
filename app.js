alert('bem vindo ao jogo');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// testando
while(chute != numeroSecreto) {
    chute = prompt('escolha um numero entre 1 e 30');
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
if(tentativas > 1){
    alert('acertouuuuu ' + numeroSecreto + ' com ' + tentativas + ' tentativas ');   
} else {
    alert('acertouuuuu ' + numeroSecreto + ' com ' + tentativas + ' tentativa ');
}