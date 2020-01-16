import { SignUp } from './../entities/SignUp';

export interface SignUpGateway {
  saveUser(signup: SignUp): Promise<boolean>
  getUserByEmail(email: string): Promise<SignUp>;
}