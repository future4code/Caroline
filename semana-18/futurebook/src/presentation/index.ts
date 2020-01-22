import express, {Request, Response} from 'express'
import {SignUpDatabase} from "../data/signUpDatabase"
import {CreateSignUpUseCase} from "../business/usecases/signupUsecase"
import {JwtImplementation} from "../services/jwt"
import {BcryptImplementation} from "../services/bcrypto"
import  {generateRandomId} from "../services/generateRandomId"

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response)=> {
    try {
        const createSignUpUseCase = new CreateSignUpUseCase (
            new BcryptImplementation(),
            new  JwtImplementation (),
            new SignUpDatabase(),
            new generateRandomId ()
        )
        const result = await createSignUpUseCase.execute ({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
       })
       res.status(200).send(result)
    } catch (err) {
       res.status(400).send({errorMessage: err.message});
    }
   } 
   )

