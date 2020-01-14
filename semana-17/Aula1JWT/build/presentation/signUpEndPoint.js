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
const createSignUpUseCase_1 = require("../business/usecases/createSignUpUseCase");
const SignUpDatabase_1 = require("../data/SignUpDatabase");
function createUsersEndPoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //const signUpID = generateRandomId();
        try {
            const CreateSignUpInput = {
                id: req.body.id,
                email: req.body.email,
                password: req.body.password,
            };
            const createFilms = new createSignUpUseCase_1.CreateSignUpUseCase(new SignUpDatabase_1.SignUpDatabase());
            const result = yield createFilms.execute(CreateSignUpInput);
            res.send({ result, success: true, message: 'Usuário criado com sucesso!' });
        }
        catch (e) {
            console.log(e);
            res.status(400).send("ocorreu um erro");
        }
    });
}
exports.createUsersEndPoint = createUsersEndPoint;
