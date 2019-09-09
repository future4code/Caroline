/*const idade = prompt ("Qual é sua idade?(ao final deste ano)");
const anoAtual =2019;
console.log("Ano do nascimento",anoAtual - idade);// Exercício 1
//console.log (365 * idade);
 const diasIdade = idade *365;
console.log("Idade em dias" + " " + diasIdade);
const horas = diasIdade * 24;
console.log("Idade em horas" + " " +  horas);
const segundos = horas *60 *60;
console.log("Idade em segundos" + " " +segundos);*/

//CÁLCULO IMC 

/*const peso = prompt ("Qual seu peso?");
const altura = prompt ("Qual sua altura?");
//const pesoAltura = peso / altura ;
//console.log ("Seu IMC é" + " " + pesoAltura * altura);
console.log ("Seu IMC é" + " " + peso / altura * altura); */



//EXERCÍCIO 1A

const couve = 2.00;
const feijao = 4.00;
const sabonete = 1.5;

const valorTotal =  couve + feijao + sabonete;

const produtos = ['Couve - 2.00','Feijao - 4.0 ', 'Sabonete - 1.5'];

console.log (produtos[0]);
console.log (produtos[1]);
console.log (produtos[2]);
console.log ('R$', valorTotal); */

//EXERCÍCIO 1B (2A)

const fahrenheit = prompt ("Qual a temperatura °F?");

const fahrenheit2 = fahrenheit - 32;

const kelvin = (fahrenheit2 * 5 / 9 + 273.15);
console.log ("Kelvin: " + kelvin);

const celsius = (fahrenheit2* 5 / 9);
console.log ("Celsius:" , celsius , " graus"); 

//EXERCÍCIO 2B

const primeiroNome = prompt ("Qual seu primeiro nome?");
const ultimoNome = prompt ("Qual seu ultimo nome?");

console.log ("Nome Completo:", primeiroNome,"", ultimoNome);

//EXERCÍCIO 2C


const rua = prompt ("Qual o nome da sua rua?");
const numero = prompt ("Qual o numero da sua residencia?");
const complemento = prompt ("Há algum complemento?");
const bairro = prompt ("Qual o nome do seu bairro?");
const cidade = prompt ("Qual o nome da sua cidade?");

console.log(rua, "," , numero, "-", complemento, "-", bairro,",", cidade);


//EXERCÍCIO 3A

/*const destrancada = confirm("A Casa está destrancada?");
const chave = confirm("Você tem a chave da casa?");

const consegueEntrarCasa = (destrancada === true) && (chave === true);

console.log(consegueEntrarCasa);*/
const destrancada = confirm("A Casa está destrancada?");
const chave = confirm("Você tem a chave da casa?");
if (destrancada == true || chave == true );
console.log (" vc consegue entrar em casa");

//exercícioB
const chuva = confirm("Está chovendo?");
const guardaChuva = confirm("Tem guarda-chuva?");

if (chuva == true && guardaChuva== true);
console.log("O usuário vai se molhar");


//sem IF não consegui fzr msm.

//EXERCÍCIO 4A
const salarioMin = prompt ("Qual o atual salario minimo?");
const consumoQuilowatts  = prompt ("Qual a quantidade de quilowatts consumida / residência ? ");

const valorCada = salarioMin / 5 ;

const pagamento = valorCada * consumoQuilowatts ;

const desconto = pagamento * 15 / 100;

console.log("O valor por cada quilowatts é ",valorCada);
console.log("O valor a ser pago por essa residência é ",pagamento);
console.log("O valor a ser pago com desconto de 15% é" ,pagamento - desconto);

