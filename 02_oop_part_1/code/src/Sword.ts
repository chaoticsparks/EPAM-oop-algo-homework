import { Weapon } from './Weapon';


export class Sword extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }


  polish(): void {
    const increasedDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
    const maxDamageModifier = this.getBaseDamage() * 0.25;

    this.setDamageModifier(increasedDamageModifier > maxDamageModifier ? maxDamageModifier : increasedDamageModifier);
  }
}
