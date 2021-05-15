import { Shipment } from './Shipment';


export class Package extends Shipment {
  protected getCost(): number {
    return this.shipper.getCostForPackage(this.state.weight)
  }
}
