import {SignUp} from '../entities/signup'
import {SignUpGateway} from "../gateways/signupGateway"
import  {CryptoGateway} from "../gateways/cryptoGateway"
import { AuthGateway} from "../gateways/authGateway"
import {GenerateRandomIdGateway} from "../gateways/generateRandomIdGateway"

export class CreateSignUpUseCase {
    constructor(
        private signUpGateway: SignUpGateway,
        private cryptoGateway: CryptoGateway,
        private authGateway: AuthGateway,
        private generateRandomIdGateway: GenerateRandomIdGateway,
    ) {}

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {
        const encryptedPassword = await this.cryptoGateway.encrypt(signup.password)
      
        
        const newUsers = new SignUp ( this.generateRandomIdGateway.generateId(),signup.name, signup.email, encryptedPassword);
    
        try {
            await this.signUpGateway.saveUser(newUsers)

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
    email: string,
    password: string
}

export interface CreateSignUpOutput {
    message: string
}
