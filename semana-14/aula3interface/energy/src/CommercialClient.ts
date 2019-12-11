import {Client} from "./client"
import {Trade}  from "./trade"


class ComertialClient extends Trade implements Client {
    
    constructor(  public name: string,public cnpj: string, cep: string) {
            super(name,cnpj,cep);  
          }
          clientName: string;
          clientNumber: number;
          consumedEnergy: number;
    
    calculateBill(): number {
       return this.consumedEnergy * 0.53
    }
    
} 

const client1= new ComertialClient("f4", "111155522222", "1230000");

console.log(client1)