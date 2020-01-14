import {SignUp} from '../entities/SignUp'
import {SignUpGateway} from "../gateways/signUpGateway"

export class CreateSignUpUseCase {
    private databaseGateway: SignUpGateway;

    constructor(databaseGateway: SignUpGateway) {
        this.databaseGateway = databaseGateway;
    }

    public async execute(signup: CreateSignUpInput ) {
    
        const newUsers = new SignUp (signup.id, signup.email, signup.password);

        const result = await this.databaseGateway.saveUser(newUsers);

        return result;
    }
}

export interface CreateSignUpInput {
    id:string;
    email: string;
    password: string; 
}
