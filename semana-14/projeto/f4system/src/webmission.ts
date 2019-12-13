import {Mission} from "./mission"
import { Student } from './student';
import { Teacher } from './teacher';

export  class WebMission extends Mission {
    patrono: string

        constructor (dataInicio:string, dataFim:string, profs:Teacher[], alunos:Student[], patrono:string){
            super(dataInicio,dataFim, profs,alunos)
            this.patrono = patrono
        }
    
        creatNewStudent(alunos:Student[]) {
            return alunos
        }
  }