import {User} from "./user"
import {Mission} from "./mission"

export class Student implements User {
    nome: string;
    email:string;
    nascimento:string;
    turma: Mission;

    constructor(nome: string,email:string, nascimento:string) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
    }    
}


