import { Item } from './Item';


export abstract class Consumable extends Item {
  private consumed = false;

  isConsumed(): boolean {
    return this.consumed;
  }

  setConsumed(value: boolean) {
    this.consumed = value;
  }

  isSpoiled(): boolean {
    return this.spoiled;
  }

  constructor(name: string, value: number, weight: number, private spoiled: boolean) {
    super(name, value, weight);
  }

  eat(): string {
    return `You eat the ${this.getName()}.`;
  }

  use(): string {
    if (!this.consumed) {
      return this.eat() + (this.spoiled ? '\nYou feel seek.' : '');
    }

    return `There is nothing left of the ${this.getName()} to consume.`;
  }
}
