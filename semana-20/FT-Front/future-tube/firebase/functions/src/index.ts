import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import UserDatabase from "../src/data/userDatabase";
//import CreateSignUpUseCase from "../src/business/usecases/SignUpUC.";
//import {generateRandomId} from "../src/services/generateRandomId"
import UserDatabase from "./data/userDatabase";
import CreateSignUpUseCase from "./business/usecases/SignUpUC.";
import {generateRandomId}  from "./services/generateRandomId";

admin.initializeApp();

import express from 'express'
import cors from 'cors'


const app = express();

// Automatically allow cross-origin requests
app.use(cors());

app.post( '/signup', async (req, res) => {
try {
    const createSignUpUseCase = new CreateSignUpUseCase (
        new UserDatabase (),
        new generateRandomId()
    )

    const result = await createSignUpUseCase.execute ({
        name: req.body.name,
        email: req.body.email,
        password_: req.body.password_

   })
   res.status(200).send(result)
} catch (err) {
   res.status(400).send({errorMessage: err.message});
      }
    } 
)


export const FTapi= functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
