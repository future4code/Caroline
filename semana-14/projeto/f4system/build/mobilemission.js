"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MobileMission extends mission_1.Mission {
    constructor(dataInicio, dataFim, profs, alunos, turma) {
        super(dataInicio, dataFim, profs, alunos);
        this.turma = turma;
    }
    creatNewStudent(alunos) {
        return alunos;
    }
}
exports.MobileMission = MobileMission;
class SaveMobileStudent {
    constructor() {
        this.mobileAlunos = [];
    }
    createStudent(mobileAlunos) {
        this.mobileAlunos.push(mobileAlunos);
    }
    ;
}
exports.SaveMobileStudent = SaveMobileStudent;
//# sourceMappingURL=mobilemission.js.map