import {Client} from "./client"
import {Trade}  from "./trade"
class ComertialClient extends Trade implements Client {
    
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