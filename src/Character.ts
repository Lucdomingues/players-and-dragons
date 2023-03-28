import { random } from './utils';

import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    public name: string,
  ) {
    this._dexterity = random;
    this._race = new Elf(this.name, this._dexterity);
    this._archetype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = random;
    this._defense = random;
    this._energy = { type_: this._archetype.energyType, amount: random };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += random;
    this._lifePoints += random;
    this._strength += random;
    this._dexterity += random;
    this._defense += random;
    this._energy.amount = 10;
    if (this.race.maxLifePoints < this._maxLifePoints) {
      this._maxLifePoints = 100;
    }
    if (this._lifePoints > this.race.maxLifePoints) {
      this._lifePoints = this.race.maxLifePoints;
    }
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    const condDamage = damage > 0 ? damage : 1;
    const life = this.lifePoints - condDamage;
    this._lifePoints = life <= 0 ? -1 : life;
    return this.lifePoints;
  }

  get race(): Race {
    return this._race;
  }

  set race(race: Race) {
    this._race = race;
  }
    
  get archetype(): Archetype {
    return this._archetype;
  }

  set archetype(archetype: Archetype) {
    this._archetype = archetype;
  }
    
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  get lifePoints(): number {
    return this._lifePoints;
  }
    
  get strength(): number {
    return this._strength;
  }
    
  get defense(): number {
    return this._defense;
  }
    
  get dexterity(): number {
    return this._dexterity;
  }
    
  get energy(): Energy {
    return { ...this._energy };
  }
}