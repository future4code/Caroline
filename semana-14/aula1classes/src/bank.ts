import {UserAccount} from "./UserAccount"

export class Bank {
    //atributos
    accounts: UserAccount[];
   // fileManager: JSONFileManager;

    constructor() {
        this.accounts = []
    }

    //métodos
    createAccount(conta:UserAccount): void{
        this.accounts.push(conta)
    };
    //getAllAccounts(): UserAccount[];
    //getAccountByCpf(): UserAccount;
    //saveAccounts(): void{}
}