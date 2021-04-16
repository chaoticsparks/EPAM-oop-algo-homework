import { Item } from './Item';
import { ItemComparator } from './ItemComparator';


export class Inventory {
  private items: Item[] = [];

  addItem(item: Item) {
    this.items.push(item);
  }

  sort(): void
  sort(comparator: ItemComparator): void
  sort(comparator?: ItemComparator): void {
    this.items.sort(comparator?.compare || ((a, b) => a.getValue() - b.getValue()));
  }

  toString(): string {
    return this.items.join(', ');
  }
}
