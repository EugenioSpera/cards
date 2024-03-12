let cards = document.querySelector('.cards')

//faz a leitura de alguma informação(requesita) Ele todas as informações
fetch('jogadores-brasil.json')

//Joga a resposta dentro da variável "resposta" e converte para .json
.then(resposta => resposta.json())
//forEach é um laço de repetção, enquanto tiver informação ele vaoi trazer.
.then(dados => dados.forEach((jogador, indice) => {

    //criar um card padrao
    let card = document.createElement('div')
    //da uma classe css para o elemento especificado
    card.classList.add('card')
    
    //serve para criar um elemento filho dentro do elemento especificado
    cards.appendChild(card)


    //innerHTML = insere o conteudo dentro do HTML da tag
    card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4>
    `
    

}))

//console.log(jogador.nome)
//console.log(jogador.numero)