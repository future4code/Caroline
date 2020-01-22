import * as jwt from "jsonwebtoken"
import  {AuthGateway} from "../business/gateways/authGateway"


export class  JwtImplementation implements AuthGateway  {
    private static EXPIRES_IN = "1h"
private getJwtSecretKey (): string {
    if (!process.env.JWT_SECRET){
        throw new Error ("Missin JWT secret key")
    }
    return process.env.JWT_SECRET
}
generateToken(userId: string): string {
    const token = jwt.sign(
        { userId },
        this.getJwtSecretKey(),
        { expiresIn: JwtImplementation.EXPIRES_IN }
        )
        return   token
     } 
}

