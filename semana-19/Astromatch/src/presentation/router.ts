import {CreateSignUpUseCase} from '../business/usecases/signupUC'
import {UsersDatabase} from "../data/userDatabase"


export class ApiRouter {
    public static async handleRoute(path: string, event: any): Promise<any> {
      switch (path) {
        case "signup":
          const createSignUpUseCase = new CreateSignUpUseCase(
            new UsersDatabase (),
          )
          const input = {
            id: event.body.id,
            name: event.body.name,
            age: event.body.age,
            password_: event.body.password_,
            picture: event.body.picture
          }
          const result = await createSignUpUseCase.execute (input)
          return result
        default:
          throw new Error("Tente se cadastrar novamente!");
      }
    }
  }
  