export class Videos {
    constructor(
        private id: string,
        private name: string,
        private url: string,
     
    ) {

    }
    public getId(){
        return this.id;
    }
    public getName(){
        return this.name;
    }

    public getUrl(){
        return this.url;
    }

}