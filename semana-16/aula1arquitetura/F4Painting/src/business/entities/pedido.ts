import {Paper} from './Papel'
import {Frame} from './Moldura'
import {Client} from './cliente'

export class Pedido {
  id: string
  private paper: Paper
  private frame: Frame
  private client: Client

  constructor(id: string, paper: Paper, frame: Frame, client: Client) {
    this.paper = paper
    this.frame = frame
    this.client = client
  }

  public getId() {
    return this.id
  }

  public CalculatePaperPrice() {
    return this.paper.CalculatePrice()
  }

  public CalculateFramePrice() {
    return this.frame.CalculatePrice()
  }

  public CalculateTotalPricel() {
   //gi return this.paper.CalculatePrice() + this.frame.CalculatePrice()
  }
}
