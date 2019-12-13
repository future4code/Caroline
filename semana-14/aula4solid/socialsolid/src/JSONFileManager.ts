import * as fs from 'fs';

export class JSONFileManager {
    private fileName: string;
    
    constructor(fileName: string){
        this.fileName = fileName;
    }
    writeObjetcToFile(objectToSave: object){
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 4));
    }
    getObjectFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }

    static saveToJSON(objectToSave: object) {
        fs.writeFileSync( "posts.json", JSON.stringify(objectToSave, null, 2))
    }

   getJSONContent() {
       return JSON.parse(fs.readFileSync("posts.json").toString())
    }
}
/*

*/