"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class WebMission extends mission_1.Mission {
    constructor(dataInicio, dataFim, profs, alunos, patrono) {
        super(dataInicio, dataFim, profs, alunos);
        this.patrono = patrono;
    }
}
exports.WebMission = WebMission;
class SaveWebStudent {
    constructor() {
        this.webalunos = [];
    }
    createStudent(webalunos) {
        this.webalunos.push(webalunos);
    }
    ;
}
exports.SaveWebStudent = SaveWebStudent;
//# sourceMappingURL=webmission.js.map