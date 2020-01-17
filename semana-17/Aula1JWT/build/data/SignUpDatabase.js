"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignUp_1 = require("../business/entities/SignUp");
const knex_1 = __importDefault(require("knex"));
class SignUpEntityMapper {
    entityToModel(entity) {
        return {
            id: entity.getId(),
            name: entity.getName(),
            email: entity.getEmail(),
            age: entity.getAge(),
            password: entity.getPassword(),
        };
    }
}
class SignUpDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'caroline',
                password: 'cb1764d745d86007cf0b9bdf1f8b0008',
                database: 'caroline'
            }
        });
        this.SignUpEntityMapper = new SignUpEntityMapper();
    }
    saveUser(signup) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection('filme').insert(this.SignUpEntityMapper.entityToModel(signup));
                return true;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    saveUser2(user) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(` value: SELECT * FROM SignUp WHERE email = "${email}";`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("Not found");
            }
            return new SignUp_1.SignUp(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(` value: SELECT * FROM SignUp WHERE id = "${id}";`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("Not found");
            }
            return new SignUp_1.SignUp(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.age, returnedUser.password);
        });
    }
}
exports.SignUpDatabase = SignUpDatabase;
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
