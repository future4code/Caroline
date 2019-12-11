import {Residence} from "./residence"
import {Client} from "./client"


class ResidentialCliente extends Residence implements Client {
    
constructor( public name: string, public cpf: string, cep: string) {
        super(cep,name,cpf);  
      }
      clientName: string;
      clientNumber: number;
      consumedEnergy: number;

calculateBill(): number {
   return 100
}

    
} 