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
const signupUC_1 = require("../business/usecases/signupUC");
const userDatabase_1 = require("../data/userDatabase");
class ApiRouter {
    static handleRoute(path, event) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (path) {
                case "signup":
                    const createSignUpUseCase = new signupUC_1.CreateSignUpUseCase(new userDatabase_1.UsersDatabase());
                    const input = {
                        id: event.body.id,
                        name: event.body.name,
                        age: event.body.age,
                        password_: event.body.password_,
                        picture: event.body.picture
                    };
                    const result = yield createSignUpUseCase.execute(input);
                    return result;
                default:
                    throw new Error("Tente se cadastrar novamente!");
            }
        });
    }
}
exports.ApiRouter = ApiRouter;
