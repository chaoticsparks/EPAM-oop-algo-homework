import { Shipment } from './Shipment';


export class Oversized extends Shipment {
  protected getCost(): number {
    return this.shipper.getCostForOversized(this.state.weight)
  }
}
