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
const signUpDatabase_1 = require("../data/signUpDatabase");
const signupUsecase_1 = require("../business/usecases/signupUsecase");
const jwt_1 = require("../services/jwt");
const bcrypto_1 = require("../services/bcrypto");
const generateRandomId_1 = require("../services/generateRandomId");
const loginUsecase_1 = require("../business/usecases/loginUsecase");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createSignUpUseCase = new signupUsecase_1.CreateSignUpUseCase(new signUpDatabase_1.SignUpDatabase(), new bcrypto_1.BcryptImplementation(), new generateRandomId_1.generateRandomId(), new jwt_1.JwtImplementation());
        const result = yield createSignUpUseCase.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({ errorMessage: err.message });
    }
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createLoginUseCase = new loginUsecase_1.LoginUpUseCase(new signUpDatabase_1.SignUpDatabase(), new bcrypto_1.BcryptImplementation(), new jwt_1.JwtImplementation());
        const result = yield createLoginUseCase.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ errorMessage: err.message });
    }
}));
exports.default = app;
