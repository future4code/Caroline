import {SignUp} from '../business/entities/signup'
import {SignUpGateway} from "../business/gateways/signupGateway"
import knex from 'knex'


export class SignUpDatabase implements SignUpGateway {
    private connection: knex
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
    }

     public async saveUser(signup: SignUp): Promise<void> {
            await this.connection
            .insert({
                id: signup.getId(),
                name: signup.getName(),
                email: signup.getEmail(),
                password_: signup.getPassword()
            })
            .into("signup_FB2");
        }


    public async getUserByEmail(email: string): Promise<SignUp> {
      const query= await this.connection.raw( `SELECT * FROM signup_FB2 WHERE email = "${email}";`
      );
      const returnedUser = query[0][0];
    if(!returnedUser) {
    throw new Error ("Not found")
    }
      return new SignUp (returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.password_);
    }

  }