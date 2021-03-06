import {SignUp} from '../business/entities/SignUp'
import {SignUpGateway} from "../business/gateways/signUpGateway"
import knex from 'knex'

interface SignUpModel {
  id:string,
  name: string,
  email: string,
  age: number,
  password: string,
  }

  class SignUpEntityMapper {
    entityToModel(entity: SignUp): SignUpModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            age: entity. getAge(),
            password: entity.getPassword(),
        };
   }
}

  export class SignUpDatabase implements SignUpGateway {
    private connection: knex
    private SignUpEntityMapper: SignUpEntityMapper;
  
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'caroline',
          password: 'cb1764d745d86007cf0b9bdf1f8b0008',
          database: 'caroline'
        }
      })
      this.SignUpEntityMapper = new SignUpEntityMapper();
    }
  
    async saveUser(signup: SignUp): Promise<boolean> {
      try {
          await this.connection('filme').insert(this.SignUpEntityMapper.entityToModel(signup));
          return true;
      } catch (err) {
          console.log(err);
          return false;
      }
  }

  public async saveUser2(user: SignUp): Promise<void> {
    
  }
  public async getUserByEmail(email: string): Promise<SignUp> {
    const query= await this.connection.raw( ` value: SELECT * FROM SignUp WHERE email = "${email}";`
    );
    const returnedUser = query[0][0];
  if(!returnedUser) {
  throw new Error ("Not found")
  }
    return new SignUp (returnedUser.id,returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
  }

  public async getUserById(id: string): Promise<SignUp> {
    const query= await this.connection.raw( ` value: SELECT * FROM SignUp WHERE id = "${id}";`
    );
    const returnedUser = query[0][0];
  if(!returnedUser) {
  throw new Error ("Not found")
  }
    return new SignUp (returnedUser.id,returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
  }
}

/*
 public async geAllUsers(): Promise<SignUp> {
    const query= await this.connection.raw( ` value: SELECT * FROM SignUp; `);
    const returnedUserDB = await query;
    return returnedUserDB[0].map ((user: any) =>
    new SignUp (user.id, user.name,  user.email, user.age, user.password)
   );
}

   public async updatePassword(id: string, newPassword: string): Promise<void> {
    await this.connection.raw( ` value: UPDATE SignUp SET password = "${newPassword} "WHERE id = "${id}";`
    );
   }
*/
