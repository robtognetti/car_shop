import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarModel from '../Models/CarModel';

export default class CarService {
  private model: CarModel;

  constructor() {
    this.model = new CarModel();
  }

  public async create(car: ICar): Promise<Car> {
    const createCar = await this.model.create(car);
    return new Car(createCar);
  }

  public async getAllCars() {
    const cars = await this.model.getAllCars();
    const totalCars = cars.map((car: ICar) => new Car(car));
    return totalCars;
  }

  public async updateCar(id: string, car: ICar) {
    const existCar = await this.model.updateCar(id, car);
    if (existCar) {
      return new Car(existCar);
    }
    if (!existCar) {
      return null;
    }
  }

  public async getById(id: string) {
    const car = await this.model.getById(id);
    if (car) {
      return new Car(car);
    }
    if (!car) {
      return false;
    }
  }
}
