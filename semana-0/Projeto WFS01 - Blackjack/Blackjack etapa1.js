const sejaBemvindo = "Bem vindo ao jogo de Blackjack!"
console.log(sejaBemvindo);

function comprarCarta() {

  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]
  
  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
    
  }

  return carta
  
}

const rodada = confirm("Quer iniciar uma nova rodada?")
//usuário
const carta = comprarCarta(); 
const carta1 = comprarCarta(); 
//computador
const carta2 = comprarCarta(); 
const carta3 = comprarCarta(); 

if (rodada === false){
  console.log("O jogo acabou");
  } 

if (rodada === true ) {
    console.log("Usuário - Cartas: " +  carta.texto +  " " + carta1.texto + "  " + "Pontuação -", carta.valor +  carta1.valor)
    //console.log("Usuário - pontuação", carta.valor +  carta1.valor);
    //console.log(carta1.texto + carta1.valor); 
    console.log("Computador - Cartas: " + carta2.texto +  " " + carta3.texto + "  " + "Pontuação -", carta2.valor + carta3.valor);

if (carta.valor +  carta1.valor > carta2.valor + carta3.valor ){
    console.log("Usuário ganhou!");
  }
    else if (carta.valor +  carta1.valor < carta2.valor + carta3.valor ){console.log("Computador ganhou!");
  }
      else if (carta.valor +  carta1.valor === carta2.valor + carta3.valor ){console.log("Empate!");
  }
  
}




