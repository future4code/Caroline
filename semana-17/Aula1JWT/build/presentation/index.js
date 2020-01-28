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
const SignUpDatabase_1 = require("../data/SignUpDatabase");
const createSignUpUseCase_1 = require("../business/usecases/createSignUpUseCase");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createSignUpUseCase = new createSignUpUseCase_1.CreateSignUpUseCase(
        // new BcryptImplementation(),
        new SignUpDatabase_1.SignUpDatabase());
        const result = yield createSignUpUseCase.execute({
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({ errorMessage: err.message });
    }
}));
/*app.post('/signup', async (req: Request, res: Response)=> {
 try {
     const createSignUpUseCase = new CreateSignUpUseCase (
        // new BcryptImplementation(),
         new SignUpDatabase(),
     )
     const result = await createSignUpUseCase.execute ({
         id: req.body.id,
         name: req.body.name,
         email: req.body.email,
         age: req.body.age,
         password: req.body.password
    })
    res.status(200).send(result)
 } catch (err) {
    res.status(400).send({errorMessage: err.message});
 }
}
) */
exports.default = app;
