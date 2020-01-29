  
import {Users} from '../business/entities/users'
import {UserGateway} from "../business/gateways/UserGateway"
import knex from 'knex'


export class UsersDatabase implements UserGateway {
    private connection: knex
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-3-82-43-8.compute-1.amazonaws.com',
          user: 'caroline',
          password: '',
          database: 'astromach'
        }
      })
    }

     public async saveUser(users: Users): Promise<void> {
            await this.connection
            .insert({
                id: users.getId(),
                name: users.getName(),
                age: users.getAge(),
                password_: users.getPassword(),
                picture: users.getPicture()
            })
            .into("users");
        }
    }