import { Letter } from './Letter';
import { Oversized } from './Oversized';
import { Package } from './Package';
import { ShipmentInterface } from './Shipment';
import { ShipmentMarks } from './shipmentMarks';
import { ShipmentMarksDecorator } from './ShipmentMarksDecorator';


export class Gui {
  on(eventType: string, callback: (state: ShipmentInterface) => void) {
    const pckg = new ShipmentMarksDecorator(new Package({
      shipmentId: 0,
      toAddress: '700 Oak Street, Brockton MA',
      fromAddress: '66-4 Parkhurst Rd, Chelmsford MA ',
      toZipCode: '2301',
      fromZipCode: '1824',
      weight: 132,
      marks: [ShipmentMarks.Fragile, ShipmentMarks.ReturnReceiptRequested],
    }));

    setTimeout(() => {
      callback(pckg)
    }, 1000);

    const letter = new ShipmentMarksDecorator(new Letter({
      shipmentId: 0,
      toAddress: '780 Lynnway, Lynn MA',
      fromAddress: '70 Pleasant Valley Street, Methuen MA',
      toZipCode: '1905',
      fromZipCode: '1844',
      weight: 8,
      marks: [ShipmentMarks.DoNotLeave],
    }));

    setTimeout(() => {
      callback(letter)
    }, 2000);

    const oversized = new ShipmentMarksDecorator(new Oversized({
      shipmentId: 0,
      toAddress: '550 Providence Hwy, Walpole MA',
      fromAddress: '250 Rt 59, Airmont NY',
      toZipCode: '2081',
      fromZipCode: '10901',
      weight: 1300,
      marks: [ShipmentMarks.Fragile],
    }));

    setTimeout(() => {
      callback(oversized)
    }, 3000);
  }
}
