const fs = require('fs');
const taskName = process.argv[3];
const newTask = process.argv[4];


try {
fs.appendFileSync (taskName , newTask, 'utf8' );
console.log("Tarefa add" )
} catch (err){
	console.error(err)
}