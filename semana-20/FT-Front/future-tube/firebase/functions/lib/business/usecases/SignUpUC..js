"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../entities/users");
class CreateSignUpUseCase {
    constructor(userGateway, generateRandomIdGateway) {
        this.userGateway = userGateway;
        this.generateRandomIdGateway = generateRandomIdGateway;
    }
    async execute(signup) {
        const newUsers = new users_1.Users(this.generateRandomIdGateway.generateId(), signup.name, signup.email, signup.password_);
        try {
            await this.userGateway.saveUser(newUsers);
        }
        catch (err) {
            console.log(err);
            throw new Error("Um erro ocorreu, tente novamente");
        }
        return {
            message: "Usuário criado com sucesso!"
        };
    }
}
exports.CreateSignUpUseCase = CreateSignUpUseCase;
//# sourceMappingURL=SignUpUC..js.map