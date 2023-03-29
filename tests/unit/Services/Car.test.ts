import * as sinon from 'sinon';

import { Model } from 'mongoose';

import { expect } from 'chai';

import CarService from '../../../src/Services/CarService';

import ICar from '../../../src/Interfaces/ICar';

import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('API return', function () {
  beforeEach(sinon.restore);
  it('new car', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: ICar = {
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'create').resolves(carOutput);
    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Create new motorcycle', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleOutput: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'create').resolves(motorcycleOutput);
    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Get all motorcycle', async function () {
    const motorcycleOutput: IMotorcycle[] = [{
      id: '6348513f34c397abcad040b2',
      model: 'Horn',
      year: 2005,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 600,
    }];

    sinon.stub(Model, 'find').resolves(motorcycleOutput);
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycle();

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Get every car', async function () {
    const carOutput: ICar[] = [{
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    }];

    sinon.stub(Model, 'find').resolves(carOutput);
    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(carOutput);
  });
});