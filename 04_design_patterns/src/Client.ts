import { Gui } from './Gui';
import { Shipment } from './Shipment';


export class Client {
  constructor(private gui: Gui) {
    this.initializeGui();
  }

  initializeGui() {
    this.gui.on('send', this.onShip);
  }

  onShip(shipment: Shipment) {
    console.log(shipment.ship());
  }
}
