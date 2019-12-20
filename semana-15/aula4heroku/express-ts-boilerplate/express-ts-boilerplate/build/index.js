"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        user: "caroline",
        password: process.env.SENHA_BANCO,
        database: "caroline",
    }
});
console.log(process.env.SENHA_BANCO);
const app = express_1.default();
app.use(express_1.default.json());
app.post('/createUser', (req, res) => {
    const newUser = Object.assign({}, req.body);
    const query = connection('usuarios_lista').insert(newUser);
    query.then(result => {
        res.send(result);
    }).catch(e => {
        res.send(e);
    });
});
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
/*
const users = [
  {id :1},
  {nome: "J.K.Rowling"},
  {nickname: "J.K"},
  {email: "J.K@BOOKS.COM"},
  {data_de_nascimento: '1988-01-01'}
]

app.post('/createUser', (req: Request, res: Response) => {
  const newUser = {
    id: users.length + 1,
    nome: req.body.nome,
    nickname:req.body.nickname,
    email: req.body.email,
    data_de_nascimento: req.body.data_de_nascimento
  };
  users.push(newUser)
});
*/
