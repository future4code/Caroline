import * as admin from "firebase-admin"
import { UserGateway } from './../business/gateways/UserGateway';
import { Users } from './../business/entities/users';

 class UserDatabase implements UserGateway {
    async saveUser(signup: Users): Promise<void> {
   const newUser = {
       name: signup.getName(),
       email:signup.getEmail(),
       password_:signup.getPassword()
   }
  await admin.firestore().collection('cadastro').add(newUser)
  }

  public async getUserByEmail(email: string): Promise<Users> {
   const query = await admin.firestore().collection('cadastro').where('email', '==', email).get()
    
    const returnedUser = query.docs[0].data();
  if(!returnedUser) {
  throw new Error ("Not found")
  }
    return new Users (returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.password_);
  }

}
export default UserDatabase


