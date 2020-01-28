import {SignUpGateway} from "../gateways/signUpGateway"
import {CryptoGateway} from "../gateways/cryptoGateway"
import {AuthGateway} from "../gateways/authGateway"

/*export class LoginUpUseCase {
 constructor(
     private SignUpGateway: SignUpGateway,
     private CryptoGateway: CryptoGateway,
     private AuthGateway: AuthGateway,

 ) {}

    async execute(email:string, password: string): Promise <LoginOutput>{
        const user = await this.SignUpGateway.saveUser(Signup);
        return {
            token:""
        }
    }
    
}


export interface LoginOutput {
   token:string;
}*/