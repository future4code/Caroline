import {SignUpGateway} from "../gateways/signupGateway"
import {CryptoGateway} from "../gateways/cryptoGateway"
import {AuthGateway} from "../gateways/authGateway"

export class LoginUpUseCase {
 constructor(
     private SignUpGateway: SignUpGateway,
     private CryptoGateway: CryptoGateway,
     private AuthGateway: AuthGateway,
 ) {}
    async execute(login: LoginInput): Promise <LoginOutput>{
        const user = await this.SignUpGateway.getUserByEmail(login.email);
        const isPassWordRight = await this.CryptoGateway.compare(login.password, user.getPassword())
        if (isPassWordRight){
            throw new Error ("Email ou password inválidos!")
        }
        const token = this.AuthGateway.generateToken(user.getId())
        return {
            token
        }
    }
    
}

export interface LoginInput {
    email: string,
    password: string
}
export interface LoginOutput {
   token:string;
}