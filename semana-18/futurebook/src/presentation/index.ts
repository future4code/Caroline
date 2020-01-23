import express, {Request, Response} from 'express'
import {SignUpDatabase} from "../data/signUpDatabase"
import {CreateSignUpUseCase, CreateSignUpInput} from "../business/usecases/signupUsecase"
import {JwtImplementation} from "../services/jwt"
import {BcryptImplementation} from "../services/bcrypto"
import  {generateRandomId} from "../services/generateRandomId"
import {LoginUpUseCase} from "../business/usecases/loginUsecase"

const app = express()
app.use(express.json()) // Linha mágica (middleware)



app.post('/signup', async (req: Request, res: Response)=> {
 try {
        const createSignUpUseCase = new CreateSignUpUseCase (
            new SignUpDatabase (),
            new BcryptImplementation(),
            new generateRandomId (),
            new JwtImplementation()
            
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
   
app.post('/login', async (req: Request, res: Response)=> {
   try {
       const createLoginUseCase = new LoginUpUseCase (
            new SignUpDatabase(),
            new BcryptImplementation(),
            new JwtImplementation ()
       )
       const result = await createLoginUseCase.execute ({
           email: req.body.email,
           password: req.body.password
      })

      res.status(200).send(result)
   } catch (err) {
      res.status(400).send({errorMessage: err.message});
   }
  } 
)


export default app
