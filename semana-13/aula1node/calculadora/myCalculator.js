const op = process.argv[2];
const value1 = Number(process.argv[3]);
const value2 = Number(process.argv[4]);

if (op === "add"){
	console.log( `Resposta: ${value1 + value2}`);
} 

else if (op === "sub"){
	console.log( `Resposta: ${value1 - value2}`);
} 

else if (op === "mult"){
	console.log( `Resposta: ${value1 * value2}`);
} 

else if (op === "div"){
	console.log( `Resposta: ${value1 / value2}`));
} 


