import {JSONFileManager} from "./JSONFileManager";
import { Student, SaveStudent } from './student';
import { Teacher, SaveTeacher } from './teacher';

const SalvaAluno = new  Student ( );

const newStudents: SaveStudent = new SaveStudent();
newStudents.createStudent(SalvaAluno);


JSONFileManager.saveToJSON( newStudents);
