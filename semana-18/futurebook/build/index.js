"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_1 = __importDefault(require("./presentation"));
// Trecho do código responsável por inicializar todas as APIs
const server = presentation_1.default.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
/*import * as bcrypt from "bcryptjs"
const BCRYPT_SALT_ROUNDS = 10
const testess = async () => {
    const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
    console.log(salt)
    const password ="123teste"
    const encryptWord = await bcrypt.hash(password,salt )
    console.log(encryptWord)
    return encryptWord;
}
testess()
*/ 
