export class UserAccount {
    //atributos
    balance: number;
    cpf: string;
    name: string;
    age: number;
    //transactions: Transaction [];

    constructor(balance: number, cpf: string, name: string, age: number) {
        this.balance = balance,
        this.cpf = cpf,
        this.name = name,
        this.age = age
        //this.transactions = transactions
        
    }

    //métodos
    getBalance(): number{
        return this.balance;
    };
    addBalance(): void{
       
    };

    newUser(){
        console.log(`${this.name}, ${this.cpf},${this.age},${this.balance} `)
    }

    setIdade(age: number) {
        if (age < 18) {
            console.log("Você deve ser maior de idade!")
        } else {
            this.age = age
        }
    }

}

const useraccount1 = new  UserAccount ( 10,  "44488899951","Ching", 18);
const useraccount2 = new  UserAccount ( 500,  "8888888888","Leela", 22);

