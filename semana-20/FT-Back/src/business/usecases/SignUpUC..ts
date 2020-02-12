import {Users} from '../entities/users'
import {UserGateway} from "../gateways/UserGateway"
import {GenerateRandomIdGateway} from "../gateways/generateRandomIdGateway"


export class CreateSignUpUseCase {
    constructor(
        private userGateway: UserGateway,
        private generateRandomIdGateway: GenerateRandomIdGateway,

    ) {}

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {

        const newUsers = new Users ( this.generateRandomIdGateway.generateId(), signup.name, signup.email,  signup.password_);
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
    name:string,
    email:string,
    password_: string,

}

export interface CreateSignUpOutput {
    message: string
}