const op = process.argv[2];
const value1 = Number(process.argv[3]);
const value2 = Number(process.argv[4]);

if (op === "add"){
	console.log( value1 + value2);
} 

else if (op === "sub"){
	console.log( value1 - value2);
} 

else if (op === "mult"){
	console.log( value1 * value2);
} 

else if (op === "div"){
	console.log( value1 / value2);
} 

