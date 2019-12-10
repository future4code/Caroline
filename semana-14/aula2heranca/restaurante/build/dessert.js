"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook, slicesNumber) {
        super(price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    getSlicePrice() {
        return this.price / this.slicesNumber;
    }
    cook() {
        console.log("Baking Dessert");
    }
}
exports.Dessert = Dessert;
const boloDeLimao = new Dessert(30, 10, ["trigo", "açucar", "leite de coco", "óleo", "água", "limão"], 30, 10);
const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());
console.log(boloDeLimao.getSlicePrice());
console.log(boloDeLimao.getProfit());
console.log(boloDeLimao);
//# sourceMappingURL=dessert.js.map