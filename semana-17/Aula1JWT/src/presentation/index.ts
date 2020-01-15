import express, {Request, Response} from 'express'
import {createUsersEndPoint} from '../presentation/signUpEndPoint'
import {BcryptImplementation} from "../services/bcrypt"
import {SignUpDatabase} from "../data/SignUpDatabase"
import {CreateSignUpUseCase} from "../business/usecases/createSignUpUseCase"


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response)=> {
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
) 

export default app