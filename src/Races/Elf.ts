import Race from './Race';

export default class Elf extends Race {
  private static instancescCount = 0;
  public override maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instancescCount += 1;
    Elf.createdRacesInstances();
  }

  get name(): string {
    return this.name;
  }

  set name(name: string) {
    this.name = name;
  }

  get dexterity(): number {
    return this.dexterity;
  }

  set dexterity(dexterity: number) {
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): number {    
    return Elf.instancescCount;
  }
}