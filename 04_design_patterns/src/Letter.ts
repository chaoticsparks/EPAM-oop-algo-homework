import { Shipment } from './Shipment';


export class Letter extends Shipment {
  protected getCost(): number {
    return this.shipper.getCostForLetter(this.state.weight)
  }
}
