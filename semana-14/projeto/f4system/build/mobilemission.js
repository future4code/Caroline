"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MobileMission extends mission_1.Mission {
    constructor(dataInicio, dataFim, profs, alunos, patrono, turma) {
        super(dataInicio, dataFim, profs, alunos);
        this.turma = turma;
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=mobilemission.js.map