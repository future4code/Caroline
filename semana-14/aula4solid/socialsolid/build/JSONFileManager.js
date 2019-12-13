"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeObjetcToFile(objectToSave) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 4));
    }
    getObjectFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
    static saveToJSON(objectToSave) {
        fs.writeFileSync("posts.json", JSON.stringify(objectToSave, null, 2));
    }
    getJSONContent() {
        return JSON.parse(fs.readFileSync("posts.json").toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map