export class Users {
    constructor(
        private id: string,
        private name: string,
        private age: string,
        private picture: string,
        private password: string,
    ) {

    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
     public getAge(){
        return this.name;
    }
    public getPicture(){
        return this.email;
    }

    public getPassword() {
        return this.password;
    }

}