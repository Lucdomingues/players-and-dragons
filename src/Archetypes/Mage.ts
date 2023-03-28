import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private readonly _energyType: EnergyType;
  private static instancescCount = 0;
  constructor(name: string) {
    super(name);
      
    this._energyType = 'mana';
      
    Mage.instancescCount += 1;

    Mage.createdArchetypeInstances();
  }
    
  override get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {    
    return Mage.instancescCount;
  }
}