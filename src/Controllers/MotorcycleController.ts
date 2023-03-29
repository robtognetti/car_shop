import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  request: Request;
  response: Response;
  next: NextFunction;
  service: MotorcycleService;

  constructor(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new MotorcycleService();
  }

  async create(): Promise<Response | undefined> {
    try {
      const newMotorcycle: IMotorcycle = this.request.body;
      const regMotorcycle = await this.service.create(newMotorcycle);
      return this.response.status(201).send(regMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycle() {
    try {
      const motorcycles = await this.service.getAllMotorcycle();
      if (motorcycles) {      
        return this.response.status(200).send(motorcycles);
      }
    } catch (error) {
      return this.response.status(404).send({ message: 'Motorcycles not found' });
    }
  }

  public async getById() {
    const { id } = this.request.params;
    if (!isValidObjectId(id)) {
      return this.response.status(422).send({ message: 'Invalid mongo id' });
    }
    try {
      const motorcycle = await this.service.getById(id);
      if (motorcycle) {
        return this.response.status(200).send(motorcycle);
      }
      if (!motorcycle) {
        return this.response.status(404).send({ message: 'Motorcycle not found' });
      }
    } catch (error) {
      return this.next(error);
    }
  }
}