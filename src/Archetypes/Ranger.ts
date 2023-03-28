import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private readonly _energyType: EnergyType;
  private static instancescCount = 0;
  constructor(name: string) {
    super(name);
      
    this._energyType = 'stamina';
      
    Ranger.instancescCount += 1;

    Ranger.createdArchetypeInstances();
  }
    
  override get energyType(): EnergyType {
    return this._energyType;
  }
    
  static createdArchetypeInstances(): number {    
    return Ranger.instancescCount;
  }
}