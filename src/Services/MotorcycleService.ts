import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private model: MotorcycleModel;

  constructor() {
    this.model = new MotorcycleModel();
  }

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const newMotorcycle = await this.model.create(motorcycle);
    return new Motorcycle(newMotorcycle);
  }

  public async getById(id: string) {
    const motorcycle = await this.model.model.findById(id);
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    if (!motorcycle) {
      return null;
    }
  }

  public async getAllMotorcycle() {
    const newMotorcycles = await this.model.model.find();
    if (newMotorcycles) {
      return newMotorcycles.map((newMotorcycle) => new Motorcycle(newMotorcycle));
    }
  }
}
export default MotorcycleService;