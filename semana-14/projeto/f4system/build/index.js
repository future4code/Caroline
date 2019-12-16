"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const student_1 = require("./student");
const teacher_1 = require("./teacher");
const SalvaAluno = new student_1.Student("Alanis", " alanis@songs.com ", " 10/11/1979");
const newStudents = new student_1.SaveStudent();
newStudents.createStudent(SalvaAluno);
JSONFileManager_1.JSONFileManager.saveToJSON(newStudents);
const SalvaProf = new teacher_1.Teacher("Goli", " Goli@goli,.com ", " 10/11/1979");
const newProfs = new teacher_1.SaveTeacher();
newProfs.createTeacher(SalvaProf);
JSONFileManager_1.JSONFileManager.saveToJSON(newProfs);
//# sourceMappingURL=index.js.map