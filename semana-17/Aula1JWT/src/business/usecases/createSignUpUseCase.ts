import {SignUp} from '../entities/SignUp'
import {SignUpGateway} from "../gateways/signUpGateway"
import  {CryptoGateway} from "../gateways/cryptoGateway"


export class CreateSignUpUseCase {
    private databaseGateway: SignUpGateway;
    private cryptoGateway: CryptoGateway;

    constructor(databaseGateway: SignUpGateway) {
        this.databaseGateway = databaseGateway;
    }

     async execute(signup: CreateSignUpInput ): Promise<CreateSignUpOutput> {
        const encryptedPassword = await this.cryptoGateway.encrypt(signup.password)
        await this.databaseGateway.saveUser(new SignUp(signup.id,
            signup.name, signup.email,signup.age, encryptedPassword
            )
        )
        return {
            message: "Usuário criado com sucesso!"
        }
        const newUsers = new SignUp (signup.id,signup.name, signup.email,signup.age, signup.password);

        const result = await this.databaseGateway.getUserByEmail(newUsers);

        return result;

    }
}

export interface CreateSignUpInput {
    id: string;
    name:string;
    email: string;
    age:number;
    password: string; 
}

export interface CreateSignUpOutput {
    message:string;
}
