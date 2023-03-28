import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private readonly _energyType: EnergyType;
  private static instancescCount = 0;
  constructor(name: string) {
    super(name);
      
    this._energyType = 'mana';
      
    Necromancer.instancescCount += 1;

    Necromancer.createdArchetypeInstances();
  }
    
  override get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {    
    return Necromancer.instancescCount;
  }
}