import { Gui } from './Gui';
import { ShipmentInterface } from './Shipment';


export class Client {
  constructor(private gui: Gui) {
    this.initializeGui();
  }

  initializeGui() {
    this.gui.on('send', this.onShip);
  }

  onShip(shipment: ShipmentInterface) {
    console.log(shipment.ship());
  }
}
