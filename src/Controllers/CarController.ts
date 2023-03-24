import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private request: Request;
  private response: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(request: Request, response: Response, next: NextFunction) {
    this.request = request;
    this.response = response;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.request.body.model,
      year: this.request.body.year,
      color: this.request.body.color,
      status: this.request.body.status || false,
      buyValue: this.request.body.buyValue,
      doorsQty: this.request.body.doorsQty,
      seatsQty: this.request.body.seatsQty,
    };
    try {
      const createCar = await this.service.create(car);
      return this.response.status(201).send(createCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.response.status(200).send(cars);
  }

  public async getById() {
    const { id } = this.request.params;
    try {
      const car = await this.service.getById(id);
      if (car) {
        return this.response.status(200).send(car);
      }
      if (!car) {
        return this.response.status(404).send({ message: 'Car not found' });
      }
    } catch (error) {
      return this.response.status(422).send({ message: 'Invalid mongo id' });
    }
  }

  public async updateCar() {
    try {
      const { id } = this.request.params;
      const car: ICar = this.request.body;
      const updateCar = await this.service.updateCar(id, car);
      if (!updateCar) {
        return this.response.status(404).send({ message: 'Car not found' });
      }
      if (updateCar) {
        this.response.status(200).send(updateCar);
      }
    } catch (error) {
      this.response.status(422).send({ message: 'Invalid mongo id' });
    }
  }
}