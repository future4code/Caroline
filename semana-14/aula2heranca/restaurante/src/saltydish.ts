import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

const boboDePalmito = new SaltyDish(50, 20, ["palmito","aipim","azeite","cebola","tomate","alho","leite de coco"], 50);
const feijoada = new SaltyDish(100, 20, ["feijão"], 100);
console.log(feijoada.getProfit());
console.log(boboDePalmito.getProfit());