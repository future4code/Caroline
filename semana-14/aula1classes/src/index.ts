import {UserAccount} from "./UserAccount"
import {Bank} from "./bank"
import {JSONFileManager} from "./JSONFileManager";

const useraccount1 = new  UserAccount ( 10,  "44488899951","Ching", 18);
const useraccount2 = new  UserAccount ( 500,  "8888888888","Leela", 22);


const novasContas: Bank = new Bank();
novasContas.createAccount(useraccount1);
novasContas.createAccount(useraccount2);

JSONFileManager.saveToJSON(novasContas);

const objetoSalvo = JSONFileManager.getJSONContent();

console.log(novasContas)
console.log(objetoSalvo)