import { isValidObjectId } from 'mongoose';
import { NextFunction, Request, Response } from 'express';

export default class IdChecker {
  static checkIdFormat(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (!isValidObjectId(request.params.id)) {
      return response.status(422).send({ message: 'Invalid mongo id' });
    }
    next();
  }
}
