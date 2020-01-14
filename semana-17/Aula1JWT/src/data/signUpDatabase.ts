import {SignUp} from '../business/entities/SignUp'
import {SignUpGateway} from "../business/gateways/signUpGateway"
import knex from 'knex'

interface SignUpModel {
    id:string;
    email: string;
    password: string; 
  }

  class SignUpEntityMapper {
    entityToModel(entity: SignUp): SignUpModel {
        return {
            id: entity.getId(),
            email: entity.getEmail(),
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
}