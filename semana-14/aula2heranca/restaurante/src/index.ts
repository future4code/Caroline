import {Dish} from "./dish"
import { boboDePalmito, feijoada} from './saltydish';
import {boloDeLimao,brigadeiro} from './dessert'


/*export class DishList extends Dish {
    constructor(
      list: string[],
    ) {
      super(price,cost,ingredients,timeToCook);
    }
  }*/

  //ou

  const DishList1 : Dish[]= [boboDePalmito, feijoada, boloDeLimao,brigadeiro]
  console.log(DishList1)
 