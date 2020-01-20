import { SignUp } from '../entities/signup';

export interface SignUpGateway {
  saveUser(signup: SignUp): Promise<boolean>;
} 