import { Request, Response, NextFunction } from 'express';

export default class ErrorHandle {
  static handle(error: Error, _request: Request, response: Response, _next: NextFunction) {
    if (error instanceof Error && error.stack) {
      return response.status(parseInt(error.stack, 10)).send({ message: error.message });
    }
    return response.status(500).send({ message: 'Internal server error' });
  }
}

// Auxilio Monitoria Boaz na criaçao do ErrorHandle //