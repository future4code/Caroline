import { SignUp } from '../entities/signup';
import {BcryptImplementation} from "../../services/bcrypto"

export interface SignUpGateway {
  saveUser (signup: SignUp) : Promise<void>;
  getUserByEmail(email: string): Promise<SignUp>;

} 