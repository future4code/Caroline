"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    constructor(balance, cpf, name, age) {
        this.balance = balance,
            this.cpf = cpf,
            this.name = name,
            this.age = age;
    }
    getBalance() {
        return this.balance;
    }
    ;
    addBalance() {
    }
    ;
    newUser() {
        console.log(`${this.name}, ${this.cpf},${this.age},${this.balance} `);
    }
    setIdade(age) {
        if (age < 18) {
            console.log("Você deve ser maior de idade!");
        }
        else {
            this.age = age;
        }
    }
}
exports.UserAccount = UserAccount;
const useraccount1 = new UserAccount(10, "44488899951", "Ching", 18);
const useraccount2 = new UserAccount(500, "8888888888", "Leela", 22);
//# sourceMappingURL=UserAccount.js.map