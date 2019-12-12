import * as fs from 'fs'

export class JSONFileManager {
  //  fileName: string
    //constructor(fileName: string) {
   //     this.fileName = fileName
   /// }

    static saveToJSON(objectToSave: object) {
        fs.writeFileSync( "contas.json", JSON.stringify(objectToSave, null, 2))
    }

   getJSONContent() {
       return JSON.parse(fs.readFileSync("contas.json").toString())
    }
} 