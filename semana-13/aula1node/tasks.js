const fs = require('fs');
const taskName = process.argv[3];
const newTask = process.argv[4];


try {
fs.writeFileSync (taskName , newTask );
console.log("apenas teste", taskName , newTask )
} catch (err){
	console.error(err)
}