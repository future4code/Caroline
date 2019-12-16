import {JSONFileManager} from "./JSONFileManager";
import { Student, SaveStudent } from './student';
import { Teacher, SaveTeacher } from './teacher';
import { WebMission, SaveWebStudent } from './webmission';
import {MobileMission, SaveMobileStudent} from "./mobilemission"

const SalvaAluno = new  Student ( "Alanis", " alanis@songs.com ", " 10/11/1979");
const newStudents: SaveStudent = new SaveStudent();
newStudents.createStudent(SalvaAluno);
JSONFileManager.saveToJSON( newStudents);

const SalvaProf = new  Teacher ( "Goli", " Goli@goli,.com ", " 10/11/1979");
const newProfs: SaveTeacher = new SaveTeacher();
newProfs.createTeacher(SalvaProf);
JSONFileManager.saveToJSON( newProfs);

//onst SalvaAlunoWeb = new  WebMission ( "Alanis", " alanis@songs.com ", " 10/11/1979", " ", " ");
//const newWebStudents: SaveWebStudent = new SaveWebStudent();
//newWebStudents.createStudent(SalvaAlunoWeb);
//JSONFileManager.saveToJSON( newWebStudents);
