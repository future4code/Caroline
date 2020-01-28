import { AddressInfo } from 'net'
import app from './presentation'
import {CryptoGateway} from "../src/business/gateways/cryptoGateway"
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});




/*import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken";


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

const teste = async () => {
const jwtKey = process.env.JWT_SECRET || ""
console.log(process.env.JWT_SECRET)
const userId = "abcdef"
const token = jwt.sign (
    {
      userId
    }, 
    jwtKey, 
    {
      expiresIn: "1h"
    }
  )
  const jwtData = jwt.verify ( token, jwtKey) as CustomJwtObject

  console.log (token)
  console.log (token) 
  console.log(jwtData.userId);

}
teste(); 
interface CustomJwtObject {
  userId: string;
  iat:number
}*/