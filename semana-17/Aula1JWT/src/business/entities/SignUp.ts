export class SignUp {
    constructor(
        private id: string,
        private email: string,
        private password: string,
    ) {
        if (password.length < 6) {
            throw new Error("Senha precisa ter no mínimo 6 caracteres, digite de novo");
        }
    }
    public getId(){
        return this.id;
    }
    public getEmail(){
        return this.email;
    }
    public getPassword() {
        return this.password;
    }
}