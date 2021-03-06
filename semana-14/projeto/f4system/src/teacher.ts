import {User} from "./user"
import {Specialty} from "./specialty"

export class Teacher implements User {
    nome: string;
    email:string;
    nascimento:string;
    especialidade: Specialty;

    constructor(nome: string,email:string, nascimento:string) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
    }    
}
export class SaveTeacher {
    professores: Teacher[];
   // fileManager: JSONFileManager;

    constructor() {
        this.professores = []
    }
    createTeacher(professores:Teacher): void{
        this.professores.push(professores)
    };
}