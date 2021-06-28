const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let contagem = 0;

function imprimirJogador() {

    if (contagem < jogadores.length) {
        console.log(jogadores[contagem]);
        contagem++;
    } else {
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(imprimirJogador, (10 / jogadores.length) * 1000);