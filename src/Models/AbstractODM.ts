import { 
  model,
  Model,
  models,
  Schema,
  UpdateQuery,
} from 'mongoose';

abstract class AbstractODM<T> {
  public model: Model<T>;
  schema: Schema;

  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model
      .create({ ...obj });
  }

  public async update(id: string, data: T): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, { ...data } as UpdateQuery<T>);
  }
}

export default AbstractODM;