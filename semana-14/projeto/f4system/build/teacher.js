"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teacher {
    constructor(nome, email, nascimento) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
    }
}
exports.Teacher = Teacher;
class SaveTeacher {
    constructor() {
        this.professores = [];
    }
    createTeacher(professores) {
        this.professores.push(professores);
    }
    ;
}
exports.SaveTeacher = SaveTeacher;
//# sourceMappingURL=teacher.js.map