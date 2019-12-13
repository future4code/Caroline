import { Student } from './student';
import { Teacher } from './teacher';

export abstract class Mission {
    dataInicio: string
    dataFim: string
    profs: Teacher[]
    alunos: Student[]

    constructor (dataInicio:string, dataFim:string, profs:Teacher[], alunos:Student[]) { 
        this.dataInicio = dataInicio, 
        this.dataFim = dataFim, 
        this.profs = profs, 
        this.alunos = alunos 
    }

    
  }


