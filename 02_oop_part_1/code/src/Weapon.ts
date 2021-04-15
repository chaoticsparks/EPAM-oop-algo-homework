import { Item } from './Item';


export abstract class Weapon extends Item {
  private damageModifier: number;
  private durabilityModifier: number;
  static MODIFIER_CHANGE_RATE = 0.05;

  getBaseDamage(): number {
    return this.baseDamage;
  }

  getDamageModifier(): number {
    return this.damageModifier;
  }

  getBaseDurability() {
    return this.baseDurability;
  }

  getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    return this.baseDurability + this.durabilityModifier;
  }

  setDamageModifier(value: number) {
    this.damageModifier = value;
  }

  setDurabilityModifier(value: number) {
    this.durabilityModifier = value;
  }

  constructor(
    name: string,
    private baseDamage: number,
    private baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
  }

  toString(): string {
    return `${super.toString()}, Damage: ${this.getDamage()
      .toFixed(2)}, Durability: ${+this.getDurability().toFixed(2) * 100}%`;
  }

  use(): string {
    if (this.getDurability() <= 0) {
      return `You can't use the hammer, it is broken.`;
    }
    const useStr = `You use the ${this.getName()}, dealing ${this.getDamage()
      .toFixed(2)} 30.47 points of damage`;
    this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

    const brokenText = this.getDurability() <= 0 ? `\nThe ${this.getName()} breaks` : '';

    return useStr + brokenText;
  }

  abstract polish(): void

}
