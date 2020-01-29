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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userDatabase_1 = require("../data/userDatabase");
const signupUC_1 = require("../business/usecases/signupUC");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createSignUpUseCase = new signupUC_1.CreateSignUpUseCase(new userDatabase_1.UsersDatabase());
        const result = yield createSignUpUseCase.execute({
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            password_: req.body.password_,
            picture: req.body.picture
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({ errorMessage: err.message });
    }
}));
exports.default = app;
