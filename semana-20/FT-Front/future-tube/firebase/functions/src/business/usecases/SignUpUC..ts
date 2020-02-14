import {Users} from '../entities/users'
import {UserGateway} from "../gateways/UserGateway"
import {GenerateRandomIdGateway} from "../gateways/generateRandomIdGateway"
import {CryptoGateway} from "../gateways/cryptoGateway"


 class CreateSignUpUseCase {
    constructor(
        private userGateway: UserGateway,
        private generateRandomIdGateway: GenerateRandomIdGateway,
        private cryptoGateway: CryptoGateway,


    ) {}

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {
        const encryptedPassword = await this.cryptoGateway.encrypt(signup.password_)
        const newUsers = new Users ( this.generateRandomIdGateway.generateId(), signup.name, signup.email, encryptedPassword);
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

export default CreateSignUpUseCase 