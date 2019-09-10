
const numero = 8;
 let chute;
do {
  chute = Number(prompt("Chute um número: "));
 if (chute > numero) alert("Acima");
 if (chute < numero) alert("Abaixo");
} while (chute !== numero);
alert ("Acertou!!");
