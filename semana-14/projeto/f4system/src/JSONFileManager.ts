import * as fs from 'fs'

export class JSONFileManager {
  //  fileName: string
    //constructor(fileName: string) {
   //     this.fileName = fileName
   /// }

    static saveToJSON(objectToSave: object) {
        fs.writeFileSync( "DadosGeraisF4.json", JSON.stringify(objectToSave, null, 2))
    }

   getJSONContent() {
       return JSON.parse(fs.readFileSync("DadosGeraisF4.json").toString())
    }
} 