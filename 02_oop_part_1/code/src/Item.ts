import { Comparable } from './Comparable';


let id = 0;

export abstract class Item implements Comparable<Item> {
  private readonly id: number;

  private static numberOfItems() {
    return id;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  getWeight(): number {
    return this.weight;
  }

  getName(): string {
    return this.name;
  }

  setValue(value: number): void {
    this.value = value;
  }

  setName(value: string): void {
    this.name = value;
  }

  setWeight(value: number): void {
    this.weight = value;
  }

  constructor(private name: string, private value: number, private weight: number) {
    this.id = id++;
  }

  compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
    }

    return this.value > other.value ? 1 : -1;
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
  }

  static reset(): void {
    id = 0;
  }

  abstract use(): void
}
