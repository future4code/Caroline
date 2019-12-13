"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    static saveToJSON(objectToSave) {
        fs.writeFileSync("contas.json", JSON.stringify(objectToSave, null, 2));
    }
    getJSONContent() {
        return JSON.parse(fs.readFileSync("contas.json").toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map