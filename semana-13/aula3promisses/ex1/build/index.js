"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const fileName = '1.txt';
const fileName2 = '2.txt';
const allPromises = [fileName, fileName2].map(eachFile => {
    return new Promise((resolve, reject) => {
        fs.readFile(eachFile, () => {
        });
    });
});
Promise.all(allPromises).then((values) => {
    console.log(values);
    console.log('Done');
});
//# sourceMappingURL=index.js.map