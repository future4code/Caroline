"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    constructor(id, name, age, picture, password) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.picture = picture;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.name;
    }
    getPicture() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
}
exports.Users = Users;
