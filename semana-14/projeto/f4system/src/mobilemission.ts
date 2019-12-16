import {Mission} from "./mission"
import { Student } from './student';
import { Teacher } from './teacher';


export  class MobileMission extends Mission {
        turma: number
        constructor (dataInicio:string, dataFim:string, profs:Teacher[], alunos:Student[],turma: number){
            super(dataInicio,dataFim, profs,alunos)
            this.turma = turma
        }

        creatNewStudent(alunos:Student[]) {
            return alunos
        }
  }

  export class SaveMobileStudent {
    mobileAlunos: MobileMission[];
   // fileManager: JSONFileManager;

    constructor() {
        this.mobileAlunos = []
    }
    createStudent(mobileAlunos:MobileMission): void{
        this.mobileAlunos.push(mobileAlunos)
    };
}