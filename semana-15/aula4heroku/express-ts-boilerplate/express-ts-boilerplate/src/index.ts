import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const connection = knex ({
	client: 'mysql',
	connection: {
	host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
	user: "caroline",
	password: "process.env.SENHA_BANCO",
	database:"caroline",
}
});

const app = express();
app.use(express.json())


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


app.post('/createUser', (req: Request, res: Response) => {
  const newUser = {
    ...req.body,
  };
  const query = connection('usuarios_lista').insert(newUser);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
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
