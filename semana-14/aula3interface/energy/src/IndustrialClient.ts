import {Client} from "./client"
import { Industry } from './industry';


class IndustrialClient extends Industry implements Client {
    
    constructor( public industryName: string,public industryNumber: string, cep: string) {
            super(industryName,industryNumber,cep);  
          }
          clientName: string;
          clientNumber: number;
          consumedEnergy: number;
    
    calculateBill(): number {
       return 100
    }
    
} 

const client1= new IndustrialClient("f5", "111155522222", "1230000");
console.log(client1)