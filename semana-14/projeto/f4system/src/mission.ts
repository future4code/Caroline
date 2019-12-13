import { Student } from './student';
import { Teacher } from './teacher';

export abstract class Mission {
    dataInicio: string
    dataFim: string
    profs: Teacher[]
    alunos: Student[]
  }

  