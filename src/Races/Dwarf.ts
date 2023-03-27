import Race from './Race';

export default class Dwarf extends Race {
  private static instancescCount = 0;
  public override maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instancescCount += 1;
    Dwarf.createdRacesInstances();
  }

  static createdRacesInstances(): number {    
    return Dwarf.instancescCount;
  }
}