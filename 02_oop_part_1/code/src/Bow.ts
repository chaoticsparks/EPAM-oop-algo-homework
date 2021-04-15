import { Weapon } from './Weapon';


export class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }


  polish(): void {
    const increasedDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;
    const increasedEffectiveDurability = this.getBaseDurability() + increasedDurabilityModifier;

    this.setDurabilityModifier(increasedEffectiveDurability > 1 ? 1 : increasedEffectiveDurability);
  }
}
