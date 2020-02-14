import {UserGateway} from "../gateways/userGateway"
import {CryptoGateway} from "../gateways/cryptoGateway"
import {AuthGateway} from "../gateways/authGateway"

export class LoginUpUseCase {
 constructor(
     private UserGateway: UserGateway,
     private CryptoGateway: CryptoGateway,
     private AuthGateway: AuthGateway,
 ) {}
    async execute(login: LoginInput): Promise <LoginOutput>{
        const user = await this.UserGateway.getUserByEmail(login.email);
        const isPassWordRight = await this.CryptoGateway.compare(login.password_, user.getPassword())
        if (!isPassWordRight){
            throw new Error ("Email ou password inválidos!")
        }
        const token = this.AuthGateway.generateToken(user.getId())
        console.log('token: ', token)
        return {
            token
        }
    }
}

export interface LoginInput {
    email: string,
    password_: string
}
export interface LoginOutput {
   token:string;
} 