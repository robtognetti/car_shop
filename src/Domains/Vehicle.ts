import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id?: string;
  protected model: string;
  public year: number;
  public color: string;
  public status: boolean | undefined;
  public buyValue: number;

  constructor(infoVehicle: IVehicle) {
    this.id = infoVehicle.id;
    this.model = infoVehicle.model;
    this.year = infoVehicle.year;
    this.color = infoVehicle.color;
    this.status = infoVehicle.status;
    this.buyValue = infoVehicle.buyValue;
  }

  public getModel(): string {
    return this.model;
  }

  public setModel(model: string): void {
    this.model = model;
  }
}

export default Vehicle;