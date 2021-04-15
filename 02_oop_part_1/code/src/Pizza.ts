import { Consumable } from './Consumable';


export class Pizza extends Consumable {
  private slicesEaten: number;

  constructor(private numberOfSlices: number, spoiled: boolean) {
    super('pizza', numberOfSlices, 300, spoiled);
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return `You eat a slice of pizza.`;
    } else {
      return '';
    }
  }
}
