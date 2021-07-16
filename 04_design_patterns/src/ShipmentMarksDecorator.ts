import { Shipment, ShipmentInterface } from './Shipment';
import { ShipmentMarks } from './shipmentMarks';

export class ShipmentMarksDecorator implements ShipmentInterface {
  private marksStringMap = {
    [ShipmentMarks.Fragile]: `**MARK FRAGILE**\n`,
    [ShipmentMarks.DoNotLeave]: `**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**\n`,
    [ShipmentMarks.ReturnReceiptRequested]: `**MARK RETURN RECEIPT REQUESTED**\n`,
  }
  constructor(private wrappee: Shipment) {}

  getMarks(): string[] {
    return this.wrappee.getMarks();
  }

  private combineMarksString(): string {
    return this.getMarks().map(mark => this.marksStringMap[mark]).join('')
  }

  ship(): string {
    return this.wrappee.ship() + `\n ${this.combineMarksString()}`;
  }
}
