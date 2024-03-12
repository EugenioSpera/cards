/* chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos. */

let cards = document.querySelector('.cards')

//faz a leitura de alguma informação(requisita)
fetch('jogadores-brasil.json')
//Captura a resposta de uma call function
//a função then sempre irá receber a resposta
// e irá armazená-la em uma variável
.then(resposta => resposta.json())
.then(dados => dados.forEach((jogador) => {


        // criar um card padrao
        let card = document.createElement('div')
        //da uma classe css para o elemento especificado
        card.classList.add('card')
        //cria um elemento filho dentro do elemento especificado
        cards.appendChild(card)

}))
