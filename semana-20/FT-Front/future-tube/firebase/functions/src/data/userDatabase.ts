import * as admin from "firebase-admin"
import { UserGateway } from './../business/gateways/UserGateway';
import { Users } from './../business/entities/users';

export class UserDatabase implements UserGateway {
    async saveUser(signup: Users): Promise<void> {
   const newUser = {
       name: signup.getName,
       email:signup.getEmail,
       password_:signup.getPassword
   }
  await admin.firestore().collection('cadastro').add(newUser)
  }
}

/*public async saveUser(users: Users): Promise<void> {
    await this.connection
    .insert({
        id: users.getId(),
        name: users.getName(),
        password_: users.getPassword(),
    })
    .into("users");
}*/


