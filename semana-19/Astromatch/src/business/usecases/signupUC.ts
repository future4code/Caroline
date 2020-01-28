import {Users} from '../entities/users'
import {UserGateway} from "../gateways/UserGateway"


export class CreateSignUpUseCase {
    constructor(
        private userGateway: UserGateway,

    ) {}

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {

        const newUsers = new Users ( signup.id, signup.name, signup.age, signup.password_, signup.picture);
        try {
            await this.userGateway.saveUser(newUsers)

        } catch (err) {
            console.log(err)
            throw new Error("Um erro ocorreu, tente novamente")
            
        }
        return {
            message: "Usuário criado com sucesso!"
        }
        

    }
}

export interface CreateSignUpInput {
    id: string,
    name:string,
    age: number,
    password_: string,
    picture: string
}

export interface CreateSignUpOutput {
    message: string
}