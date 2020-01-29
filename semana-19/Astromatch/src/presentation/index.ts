import express, {Request, Response} from 'express'
import {UsersDatabase} from "../data/userDatabase"
import {CreateSignUpUseCase} from '../business/usecases/signupUC'

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', async (req: Request, res: Response)=> {
    try {
           const createSignUpUseCase = new CreateSignUpUseCase (
               new UsersDatabase (),
           )
   
           const result = await createSignUpUseCase.execute ({
               id: req.body.id,
               name: req.body.name,
               age: req.body.age,
               password_: req.body.password_,
               picture: req.body.picture

          })
          res.status(200).send(result)
       } catch (err) {
          res.status(400).send({errorMessage: err.message});
       }
      } 
   )



export default app