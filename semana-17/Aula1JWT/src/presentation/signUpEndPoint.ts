import {Request, Response} from 'express'
import {CreateSignUpUseCase, CreateSignUpInput} from "../business/usecases/createSignUpUseCase"
import { SignUpDatabase } from './../data/SignUpDatabase';
import { generateRandomId } from '../services/V4IdGenerator'

export async function createUsersEndPoint(req: Request, res: Response) {
    //const signUpID = generateRandomId();
      try {
          const CreateSignUpInput: CreateSignUpInput = {
            id: req.body.id,
            email: req.body.email,
            password: req.body.password,
          }
  
          const createFilms = new CreateSignUpUseCase(new SignUpDatabase() );
  
          const result = await createFilms.execute(CreateSignUpInput);
  
          res.send({result, success: true, message: 'Usuário criado com sucesso!'})
        } catch (e) {
          console.log(e)
          res.status(400).send("ocorreu um erro")
        }}