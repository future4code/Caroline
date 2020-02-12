import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

import express from 'express'
import cors from 'cors'


const app = express();

// Automatically allow cross-origin requests
app.use(cors());





// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
   });
