import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private readonly _energyType: EnergyType;
  private static instancescCount = 0;
  constructor(name: string) {
    super(name);
      
    this._energyType = 'stamina';
      
    Warrior.instancescCount += 1;

    Warrior.createdArchetypeInstances();
  }
    
  override get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {    
    return Warrior.instancescCount;
  }
}