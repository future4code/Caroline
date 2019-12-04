"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fileName = '1.txt';
const readFilePromise = new Promise((resolve, reject) => {
    fs_1.readFile(fileName, (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        const fileContent = data.toString();
        resolve(fileContent);
    });
});
readFilePromise.then((content) => {
    console.log("Este é o conteúdo do arquivo", content);
}).catch(e => {
    console.error("Opa! Deu erro na Promise", e);
});
console.log("fileName");
//# sourceMappingURL=index.js.map