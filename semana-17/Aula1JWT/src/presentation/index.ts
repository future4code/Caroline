import express, {Request, Response} from 'express'
import {createUsersEndPoint} from '../presentation/signUpEndPoint'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/signup', createUsersEndPoint);

export default app