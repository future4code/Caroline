import { AuthGateway } from './../gateways/authGateway';
import { SignUpGateway } from './../gateways/signupGateway';

export class MakeFriendsUC {
    constructor (
        private authGateway : AuthGateway,
        private signUpGateway : SignUpGateway
    ) {}
    async execute (token: string): Promise <MakeFriendsOutput> {
        const userId = this.authGateway.getUserIdFromToken(token)
        const user = await this.signUpGateway.getUserById(userId)
        return {
            id: user.getId(),
            name: user.getName(),
            email:user.getEmail()
        }
    }
}
export interface MakeFriendsOutput {
    id: string;
    name: string;
    email: string;
}