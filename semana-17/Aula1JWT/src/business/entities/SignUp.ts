export class SignUp {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private age: number,
        private password: string,
    ) {
        if (password.length < 6) {
            throw new Error("Senha precisa ter no mínimo 6 caracteres, digite de novo");
        }
    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
    public getEmail(){
        return this.email;
    }
    public getAge(){
        return this.age;
    }
    public getPassword() {
        return this.password;
    }
}