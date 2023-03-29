import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  public id?: string;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean | undefined;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(data: IMotorcycle) {
    this.id = data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.status = data.status;
    this.buyValue = data.buyValue;
    this.category = data.category;
    this.engineCapacity = data.engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
}