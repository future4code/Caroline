"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    constructor(id, name, age, password_, picture) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.password_ = password_;
        this.picture = picture;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getPassword() {
        return this.password_;
    }
    getPicture() {
        return this.picture;
    }
}
exports.Users = Users;
