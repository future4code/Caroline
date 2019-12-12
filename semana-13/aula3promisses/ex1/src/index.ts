import { readFile } from 'fs';
const fs = require('fs')
const fileName:string = '1.txt';
const fileName2:string = '2.txt';


const allPromises = [ fileName, fileName2].map(eachFile => {
    return new Promise((resolve, reject) => {
        fs.readFile(eachFile, () => {
            
        })
    })
})

    Promise.all(allPromises).then((values: string[]) => {
            console.log(values)

        console.log('fimm')
    })





/*
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
});*/

/*

const promise1: Promise<string> = new Promise((resolve, reject) => {
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

const promise2: Promise<string> = new Promise((resolve, reject) => {
    const fileName2:string = '2.txt';
    const readFilePromise = new Promise((resolve, reject) => {
        readFile(fileName2, (err, data:Buffer) => {
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

const promise3: Promise<string> = new Promise((resolve, reject) => {
    const fileName3:string = '3.txt';
    const readFilePromise = new Promise((resolve, reject) => {
        readFile(fileName3, (err, data:Buffer) => {
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

Promise.all([promise1, promise2, promise3]).then((values: string[]) => {
  console.log(values)
})


*/

//console.log("fileName2")

