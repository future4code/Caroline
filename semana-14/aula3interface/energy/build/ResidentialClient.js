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
    }
}
//# sourceMappingURL=ResidentialClient.js.map