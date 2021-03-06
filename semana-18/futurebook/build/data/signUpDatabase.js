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
const signup_1 = require("../business/entities/signup");
const knex_1 = __importDefault(require("knex"));
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
    }
    saveUser(signup) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection
                .insert({
                id: signup.getId(),
                name: signup.getName(),
                email: signup.getEmail(),
                password_: signup.getPassword()
            })
                .into("signup_FB2");
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM signup_FB2 WHERE email = "${email}";`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("Not found");
            }
            return new signup_1.SignUp(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.password_);
        });
    }
}
exports.SignUpDatabase = SignUpDatabase;
