import { isDev } from '../server';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', {
    message: err.message,
    stack: isDev ? err.stack : undefined,
  });

  if (err.name === 'PrismaClientKnownRequestError') {
    res.status(400).json({ 
      error: 'Database error',
      message: isDev ? err.message : 'An error occurred' 
    });
    return;
  }

  res.status(err.status || 500).json({
    error: 'Server error',
    message: isDev ? err.message : 'An internal server error occurred'
  });
};
