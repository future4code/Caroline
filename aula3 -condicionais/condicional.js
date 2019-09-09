
  //EXERCÍCIO 1A
/*const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));
 if (numero1 > numero2){
   console.log(numero1)
   console.log(numero2)
 }
   else {
  console.log(numero2)
  console.log(numero1)
   }
 */

//EXERCÍCIO 1B
/*const numero1 = Number(prompt("Digite o primeiro número"));
const numero2 = Number(prompt("Digite o segundo número"));
const numero3 = Number(prompt("Digite o terceiro número"));
if (numero1 > numero2 ) {

}
if (numero2 > numero3){
  console.log(numero1)
  console.log(numero2)
  console.log(numero3)
}
if (numero2>numero1){

}
if (numero3>numero2){
  console.log(numero3)
  console.log(numero2)
  console.log(numero1)
}
*/
//repetir todas combinações

//EXERCÍCIO 2A
/* const animal = confirm("É um animal?");
if (animal === true) {
  console.log("É um animal.");
}
else {
  console.log("É uma pedra.");
}
const pelo = confirm("Tem pelo?");
 if (pelo === true) {
   const late = confirm("Late?");
    if (late === true) {
      console.log("É um cachorro.");
      }
       else {
      console.log("É um gato.");
    }
    }
   
 else {
   const voa = confirm("Voa?");
   if (voa === true){
    console.log("É um pássaro");
   }
   else {
     console.log("É um peixe");
   }
 } */

 //EXERCÍCIO 2b
 
 const animal = confirm("É um animal?");
if (animal === false) {
  const planta = confirm("Tem folha?");
  if (planta === true) {
    console.log("É uma planta");
  }
  if (planta === false) {
    console.log("É uma pedra");
  }

}
else {
if (animal === true) {
  console.log("É um animal.");
}


const pelo = confirm("Tem pelo?");
 if (pelo === true) {
   const late = confirm("Late?");
    if (late === true) {
      console.log("É um cachorro.");
      }
   
       else {
        const mia = confirm("Mia?");
        if (mia === true){
          console.log("É um gato.");
        }
        else if (mia === false){
          console.log(" É um rato");
        }
       }
     
    }
   
 else {
   const voa = confirm("Voa?");
   if (voa === true){
    console.log("É um pássaro");

   }
    else {
      const sapo = confirm ("É um anfíbio?");
      if (sapo === true) {
        console.log ("É um sapo");
      }
      else if (sapo === false) {
        console.log("É um peixe");
      }
    
   }
 } 
}



/*
//EXERCÍCIO 3 
const nome = prompt("Qual seu nome completo?");

const tipoJogo = prompt("Qual tipo de jogo? Digite IN para internacional ou digite NA para nacional");
  
  

const etapa = prompt("Qual etapa do jogo? digite SF ou DT ou FI");

const categoria = prompt("Qual a categoria do jogo? digite 1, 2, 3 ou 4");

const ingressos = prompt("Quantos ingressos deseja comprar?");

//INGRESSOS NACIONAIS -SEMIFINAIS - CATEGORIAS 1,2,3,4.

if (tipoJogo === "NA" && etapa === "SF" && categoria === "1" ){
  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Semifinais |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 1320 |" +

    
    "O valor total do(s) ingresso(s) é R$ " + 1320 * ingressos )
}
 
if (tipoJogo === "NA" && etapa === "SF" && categoria === "2" ){
  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Semifinais |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 880 |" +

    
    "O valor total do(s) ingresso(s) é R$ " + 880 * ingressos )
}

if (tipoJogo === "NA" && etapa === "SF" && categoria === "3" ){
  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Semifinais |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 550 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 550 * ingressos )
}

if (tipoJogo === "NA" && etapa === "SF" && categoria === "4" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Semifinais |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 220 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 220 * ingressos )
}

//INGRESSOS NACIONAIS -DECISÃO DO 3ºLUGAR - CATEGORIAS 1,2,3,4.


if (tipoJogo === "NA" && etapa === "DT" && categoria === "1" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Decisão do 3ºLugar |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 660 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 660 * ingressos )
}
 
if (tipoJogo === "NA" && etapa === "DT" && categoria === "2" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Decisão do 3ºLugar |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 440 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 440 * ingressos )
}

if (tipoJogo === "NA" && etapa === "DT" && categoria === "3" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Decisão do 3ºLugar |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 330 |" +
    
    "O valor total do(s) ingresso(s) é R$ "+ 330 * ingressos )
}

if (tipoJogo === "NA" && etapa === "DT" && categoria === "4" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "Decisão do 3ºLugar |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 170 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 170 * ingressos )
}

//INGRESSOS NACIONAIS -FINAL - CATEGORIAS 1,2,3,4.

if (tipoJogo === "NA" && etapa === "FI" && categoria === "1" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "FINAL |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 1980 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 1980 * ingressos )
}
 
if (tipoJogo === "NA" && etapa === "FI" && categoria === "2" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "FINAL |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 1320 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 1320 * ingressos )
}

if (tipoJogo === "NA" && etapa === "FI" && categoria === "3" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "FINAL |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 880 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 880 * ingressos )
}

if (tipoJogo === "NA" && etapa === "FI" && categoria === "4" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Nacional | " +
    "Etapa do jogo: " + "FINAL |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade: R$ 330 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 330 * ingressos )
}

//INGRESSOS INTERNACIONAIS -SEMIFINAIS - CATEGORIAS 1,2,3,4.

if (tipoJogo === "IN" && etapa === "SF" && categoria === "1" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Semifinal |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 1320 |" +
  "Valor do ingresso unidade em US$ 321.95 |" +
    
    "O valor total do(s) ingresso(s) é R$ " + 1320 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 321.95 * ingressos 
    
    )
}
 
if (tipoJogo === "IN" && etapa === "SF" && categoria === "2" ){
  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Semifinal |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 880 |" +
  "Valor do ingresso unidade em US$ 214.63 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 880 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 214.63 * ingressos  )
}

if (tipoJogo === "IN" && etapa === "SF" && categoria === "3" ){
  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Semifinal |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 550 |" +
  "Valor do ingresso unidade em US$ 134.15 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 550 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 134.15 * ingressos )
}

if (tipoJogo === "IN" && etapa === "SF" && categoria === "4" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Semifinal |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 220 |" +
  "Valor do ingresso unidade em US$ 53.65 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 220 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 53.65 * ingressos )
}

//INGRESSOS INTERNACIONAIS -DECISÃO DO 3ºLUGAR - CATEGORIAS 1,2,3,4.


if (tipoJogo === "IN" && etapa === "DT" && categoria === "1" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Decisão do 3ºlugar |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 660 |" +
  "Valor do ingresso unidade em US$ 160.98 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 660 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 160.98 * ingressos )
}
 
if (tipoJogo === "IN" && etapa === "DT" && categoria === "2" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Decisão do 3ºlugar |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 440 |" +
  "Valor do ingresso unidade em US$ 107.32 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 440 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 107.32 * ingressos)
}

if (tipoJogo === "IN" && etapa === "DT" && categoria === "3" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Decisão do 3ºlugar |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 330 |" +
  "Valor do ingresso unidade em US$ 80.49 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 330 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 80.49 * ingressos )
}

if (tipoJogo === "IN" && etapa === "DT" && categoria === "4" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Decisão do 3ºlugar |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 170 |" +
  "Valor do ingresso unidade em US$ 41.46 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 170 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 41.46 * ingressos)
}

//INGRESSOS INTERNACIONAIS -FINAL - CATEGORIAS 1,2,3,4.

if (tipoJogo === "IN" && etapa === "FI" && categoria === "1" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Final |" +
    "Categoria: " + "1 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 1980 |" +
  "Valor do ingresso unidade em US$ 482.96 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 1980 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 482.96 * ingressos)
}
 
if (tipoJogo === "IN" && etapa === "FI" && categoria === "2" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Final |" +
    "Categoria: " + "2 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 1320 |" +
  "Valor do ingresso unidade em US$ 321.95 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 1320 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 321.95 * ingressos )
}

if (tipoJogo === "IN" && etapa === "FI" && categoria === "3" ){
  console.log("Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Final |" +
    "Categoria: " + "3 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 880 |" +
  "Valor do ingresso unidade em US$ 214.63 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 880 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 214.63 * ingressos )
}

if (tipoJogo === "IN" && etapa === "FI" && categoria === "4" ){

  console.log( "Nome do cliente: " + nome + " | " + 
   "Tipo do jogo: " + "Internacional | " +
    "Etapa do jogo: " + "Final |" +
    "Categoria: " + "4 |" +
  "Quantidade de ingressos: " + ingressos + " | " +
  "Valor do ingresso unidade em R$: R$ 330 |" +
  "Valor do ingresso unidade em US$ 80.49 |" +
    
  "O valor do(s) ingresso(s) é R$ " + 330 * ingressos + " | " + "O valor total do(s) ingresso(s) em US$ é US$  " + 80.49 * ingressos)
}
*/