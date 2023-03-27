import Race from './Race';

export default class Halfling extends Race {
  private static instancescCount = 0;
  public override maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.instancescCount += 1;
    Halfling.createdRacesInstances();
  }

  static createdRacesInstances(): number {    
    return Halfling.instancescCount;
  }
}