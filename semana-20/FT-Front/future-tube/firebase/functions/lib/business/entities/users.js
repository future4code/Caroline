"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Users {
    constructor(id, name, email, password_) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password_ = password_;
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
    getPassword() {
        return this.password_;
    }
}
exports.Users = Users;
//# sourceMappingURL=users.js.map