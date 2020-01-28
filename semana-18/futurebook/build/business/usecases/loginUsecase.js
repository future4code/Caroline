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
class LoginUpUseCase {
    constructor(SignUpGateway, CryptoGateway, AuthGateway) {
        this.SignUpGateway = SignUpGateway;
        this.CryptoGateway = CryptoGateway;
        this.AuthGateway = AuthGateway;
    }
    execute(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.SignUpGateway.getUserByEmail(login.email);
            const isPassWordRight = yield this.CryptoGateway.compare(login.password, user.getPassword());
            if (!isPassWordRight) {
                throw new Error("Email ou password inválidos!");
            }
            const token = this.AuthGateway.generateToken(user.getId());
            console.log('token: ', token);
            return {
                token
            };
        });
    }
}
exports.LoginUpUseCase = LoginUpUseCase;
