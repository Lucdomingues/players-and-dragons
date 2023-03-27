import Race from './Race';

export default class Orc extends Race {
  private static instancescCount = 0;
  public override maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.instancescCount += 1;
    Orc.createdRacesInstances();
  }

  static createdRacesInstances(): number {    
    return Orc.instancescCount;
  }
}