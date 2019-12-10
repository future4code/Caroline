"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
exports.boboDePalmito = new SaltyDish(50, 20, ["palmito", "aipim", "azeite", "cebola", "tomate", "alho", "leite de coco"], 50);
exports.feijoada = new SaltyDish(100, 20, ["feijão"], 100);
console.log(exports.feijoada.getProfit());
console.log(exports.boboDePalmito.getProfit());
//# sourceMappingURL=saltydish.js.map