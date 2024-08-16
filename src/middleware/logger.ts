import { NextFunction } from 'express';

export const logger = (req: any, res: any, next: NextFunction) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')} ${req.originalUrl}`
  );
  next();
};


