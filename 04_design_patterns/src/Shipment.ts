import { AirEastShipper } from './shippers/AirEastShipper';
import { ChicagoSprintShipper } from './shippers/ChicagoSprintShipper';
import { PacificParcelShipper } from './shippers/PacificParcelShipper';
import { Shipper } from './shippers/shipper.interface';
import { State } from './State';


let id = 1;

export interface ShipmentInterface {
  ship(): string;

  getMarks(): string[];
}

export abstract class Shipment implements ShipmentInterface {
  protected shipper: Shipper;

  constructor(protected state: State) {
    this.setShipper();
  }

  private setShipper() {
    switch (this.state.fromZipCode ? this.state.fromZipCode[ 0 ] : null) {
      case '1':
      case '2':
      case '3':
        this.shipper = new AirEastShipper();
        break;
      case '4':
      case '5':
      case '6':
        this.shipper = new ChicagoSprintShipper();
        break;
      case '7':
      case '8':
      case '9':
        this.shipper = new PacificParcelShipper();
        break;
      default:
        this.shipper = new AirEastShipper();
        break;
    }
  }

  private static getShipmentId(): number {
    return id++;
  };

  protected abstract getCost(): number

  getMarks(): string[] {
    return this.state.marks;
  }

  ship(): string {
    const { shipmentId, fromAddress, fromZipCode, toAddress, toZipCode } = this.state;
    return `
    Id: ${shipmentId || Shipment.getShipmentId()}\n
    from ${fromAddress}, ${fromZipCode}\n
    to ${toAddress}, ${toZipCode}\n
    Cost: ${this.getCost()}`;
  }
}
