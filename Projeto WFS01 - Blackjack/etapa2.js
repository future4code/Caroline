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

let rodada = confirm("Quer iniciar uma nova rodada?")
let maisCartas;


/* (TESTE SEM USAR ARRAYS-incompleto ainda)
//usuário
const carta = comprarCarta(); 
const carta1 = comprarCarta(); 
const cartaU = comprarCarta(); 
//computador
const carta2 = comprarCarta(); 
const carta3 = comprarCarta();
const cartaC = comprarCarta();  

let somaU = carta.valor + carta1.valor; 
let soma = carta.valor + carta1.valor + cartaU.valor;
let somaPc1 = carta2.valor + carta3.valor;
let somaPc2 = carta2.valor + carta3.valor + cartaC.valor;
       

if (rodada === false){
  console.log("O jogo acabou");
  } 

if (rodada === true ) {
 maisCartas = confirm ("Suas cartas são " +  carta.texto +  " " + carta1.texto + " . " + "A carta revelada do computador é" + " " + carta2.texto + " " + "Deseja comprar mais uma carta?" )

    if (maisCartas === true && soma > 21){

        alert("Suas cartas são " +  carta.texto +  " " + carta1.texto + " " + cartaU.texto + ". " + "Sua pontuação é" + soma + "." + " As cartas do computador são" + " " + carta2.texto + " " + carta2.texto + ". " +"A pontuação do computador é " + somaPc1 +" O computador ganhou!"  )

            if (maisCartas === true && soma <= 21) {
             alert("TESTE" )
          }
           //5b
            
    }
   else if (maisCartas === false  ){
               if (somaPc1 < somaU  ){
                          
                          alert("teste rac")
                }
                
              }

} */

//Usando arrays..
