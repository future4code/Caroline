"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignUp {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
        if (password.length < 6) {
            throw new Error("Senha precisa ter no mínimo 6 caracteres, digite de novo");
        }
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
}
exports.SignUp = SignUp;
