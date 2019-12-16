"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(nome, email, nascimento) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
    }
}
exports.Student = Student;
class SaveStudent {
    constructor() {
        this.alunos = [];
    }
    createStudent(alunos) {
        this.alunos.push(alunos);
    }
    ;
}
exports.SaveStudent = SaveStudent;
//# sourceMappingURL=student.js.map