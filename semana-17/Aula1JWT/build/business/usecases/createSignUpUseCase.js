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
const SignUp_1 = require("../entities/SignUp");
class CreateSignUpUseCase {
    constructor(databaseGateway) {
        this.databaseGateway = databaseGateway;
    }
    execute(signup) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = yield this.cryptoGateway.encrypt(signup.password);
            yield this.databaseGateway.saveUser(new SignUp_1.SignUp(signup.id, signup.name, signup.email, signup.age, encryptedPassword));
            return {
                message: "Usuário criado com sucesso!"
            };
            const newUsers = new SignUp_1.SignUp(signup.id, signup.name, signup.email, signup.age, signup.password);
            const result = yield this.databaseGateway.getUserByEmail(signup.email);
            return result;
        });
    }
}
exports.CreateSignUpUseCase = CreateSignUpUseCase;
