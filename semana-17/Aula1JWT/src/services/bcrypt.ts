import * as bcrypt from "bcrypt"
import {CryptoGateway} from "../business/gateways/cryptoGateway"

export class  BcryptImplementation implements CryptoGateway  {
    private static BCRYPT_SALT_ROUNDS = 10

    async encrypt(word: string): Promise <string> {
        const salt = await bcrypt.genSalt( BcryptImplementation.BCRYPT_SALT_ROUNDS);
        const encryptWord = await bcrypt.hash(word,salt )
        return encryptWord;
    }

    async compare (word: string, hash: string): Promise <boolean> {
        return await bcrypt.compare(word, hash)
    }
}

