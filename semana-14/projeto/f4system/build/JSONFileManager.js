"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class JSONFileManager {
    static saveToJSON(objectToSave) {
        fs.writeFileSync("DadosGeraisF4.json", JSON.stringify(objectToSave, null, 2));
    }
    getJSONContent() {
        return JSON.parse(fs.readFileSync("DadosGeraisF4.json").toString());
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map