import * as admin from "firebase-admin"
import { UserGateway } from './../business/gateways/UserGateway';
import { Users } from './../business/entities/users';

 class UserDatabase implements UserGateway {
    async saveUser(signup: Users): Promise<void> {
   const newUser = {
       name: signup.getName,
       email:signup.getEmail,
       password_:signup.getPassword
   }
  await admin.firestore().collection('cadastro').add(newUser)
  }
}

export default UserDatabase


