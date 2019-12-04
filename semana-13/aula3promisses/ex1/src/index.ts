import { readFile } from 'fs';

const fileName:string = '1.txt';

const readFilePromise = new Promise((resolve, reject) => {
  readFile(fileName, (err, data:Buffer) => {
    if(err){
      reject(err);
      return;
    }

    const fileContent = data.toString();
    resolve(fileContent)
  });
});

readFilePromise.then((content) => {
  console.log("Este é o conteúdo do arquivo", content)
}).catch(e => {
  console.error("Opa! Deu erro na Promise", e)
});


console.log("fileName")

