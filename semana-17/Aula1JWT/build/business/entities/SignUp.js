"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignUp {
    constructor(id, name, email, age, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        if (password.length < 6) {
            throw new Error("Senha precisa ter no mínimo 6 caracteres, digite de novo");
        }
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        return this.age;
    }
    getPassword() {
        return this.password;
    }
}
exports.SignUp = SignUp;
