"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialCliente extends residence_1.Residence {
    constructor(name, cpf, cep) {
        super(cep, name, cpf);
        this.name = name;
        this.cpf = cpf;
    }
    calculateBill() {
        return 100;
    }
}
const client1 = new ResidentialCliente("Carol", "111155522222", "1230000");
console.log(client1);
//# sourceMappingURL=ResidentialClient.js.map