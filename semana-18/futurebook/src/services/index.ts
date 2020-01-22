import express, {Request, Response} from 'express'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

//import * as bcrypt from "bcrypt"
import * as bcrypt from "bcryptjs"
import {CryptoGateway} from "../business/gateways/cryptoGateway"

export class  BcryptImplementation implements CryptoGateway  {
    private static BCRYPT_SALT_ROUNDS = 10

    async encrypt(word: string): Promise <string> {
        const salt = await bcrypt.genSalt( BcryptImplementation.BCRYPT_SALT_ROUNDS);
        console.log(salt)
        const encryptWord = await bcrypt.hash(word,salt )
        console.log(encryptWord)
        return encryptWord;  
    }
    async compare (word: string, hash: string): Promise <boolean> {
        return await bcrypt.compare(word, hash)
    }
   
}

export default app


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
