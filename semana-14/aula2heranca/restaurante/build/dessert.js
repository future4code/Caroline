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
exports.boloDeLimao = new Dessert(30, 10, ["trigo", "açucar", "leite de coco", "óleo", "água", "limão"], 30, 10);
exports.brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(exports.brigadeiro.getSlicePrice());
console.log(exports.brigadeiro.getProfit());
console.log(exports.boloDeLimao.getSlicePrice());
console.log(exports.boloDeLimao.getProfit());
console.log(exports.boloDeLimao);
//# sourceMappingURL=dessert.js.map