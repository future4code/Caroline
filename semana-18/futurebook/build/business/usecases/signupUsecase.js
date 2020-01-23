"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const signup_1 = require("../entities/signup");
class CreateSignUpUseCase {
    constructor(signUpGateway, cryptoGateway, generateRandomIdGateway, authGateway) {
        this.signUpGateway = signUpGateway;
        this.cryptoGateway = cryptoGateway;
        this.generateRandomIdGateway = generateRandomIdGateway;
        this.authGateway = authGateway;
    }
    execute(signup) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = yield this.cryptoGateway.encrypt(signup.password);
            const newUsers = new signup_1.SignUp(this.generateRandomIdGateway.generateId(), signup.name, signup.email, encryptedPassword);
            try {
                yield this.signUpGateway.saveUser(newUsers);
            }
            catch (err) {
                console.log(err);
                throw new Error("Um erro ocorreu, tente novamente");
            }
            return {
                message: "Usuário criado com sucesso!"
            };
        });
    }
}
exports.CreateSignUpUseCase = CreateSignUpUseCase;
