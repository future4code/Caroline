  
import { Users } from '../entities/users';

export interface UserGateway {
  saveUser (signup: Users) : Promise<void>;
}