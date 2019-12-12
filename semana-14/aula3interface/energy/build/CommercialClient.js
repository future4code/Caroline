"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trade_1 = require("./trade");
class ComertialClient extends trade_1.Trade {
    constructor(name, cnpj, cep) {
        super(name, cnpj, cep);
        this.name = name;
        this.cnpj = cnpj;
    }
    calculateBill() {
        return 100;
    }
}
const client1 = new ComertialClient("f4", "111155522222", "1230000");
console.log(client1);
//# sourceMappingURL=CommercialClient.js.map