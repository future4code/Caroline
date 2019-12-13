import {Mission} from "./mission"
import { Student } from './student';
import { Teacher } from './teacher';


export  class MobileMission extends Mission {
        turma: number
        constructor (dataInicio:string, dataFim:string, profs:Teacher[], alunos:Student[], patrono:string,turma: number){
            super(dataInicio,dataFim, profs,alunos)
            this.turma = turma
        }

        creatNewStudent(alunos:Student[]) {
            return alunos
        }
  }