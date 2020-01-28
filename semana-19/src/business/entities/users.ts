export class Users {
    constructor(
        private id: string,
        private name: string,
        private age: number,
        private password_: string,
        private picture: string,
     
    ) {

    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }
     public getAge(){
        return this.age;
    }

    public getPassword() {
        return this.password_;
    }
    public getPicture(){
        return this.picture;
    }

}