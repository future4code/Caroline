const fs = require('fs');
const taskName = process.argv[2];
const newTask = process.argv[3];


try {
fs.appendFileSync (taskName , newTask, 'utf8' );
console.log("Tarefa add" )
} catch (err){
	console.error(err)
}