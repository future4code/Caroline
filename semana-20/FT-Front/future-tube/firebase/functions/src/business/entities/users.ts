export class Users {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password_: string,
     
    ) {

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

    public getPassword() {
        return this.password_;
    }
}