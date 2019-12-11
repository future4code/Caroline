"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    constructor(industryName, industryNumber, cep) {
        super(industryName, industryNumber, cep);
        this.industryName = industryName;
        this.industryNumber = industryNumber;
    }
    calculateBill() {
        return 100;
    }
}
const client1 = new IndustrialClient("f5", "111155522222", "1230000");
console.log(client1);
//# sourceMappingURL=IndustrialClient.js.map