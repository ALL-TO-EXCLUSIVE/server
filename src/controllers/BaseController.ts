// server/src/controllers/BaseController.ts
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

export class BaseController {
  protected prisma: PrismaClient;
  
  constructor() {
    this.prisma = new PrismaClient();
  }
  
  protected async handleRequest<T>(
    req: Request,
    res: Response,
    handler: () => Promise<T>
  ): Promise<Response> {
    try {
      const result = await handler();
      return res.json(result);
    } catch (error: any) {
      console.error(`Error in ${this.constructor.name}:`, error);
      
      // Handle Prisma-specific errors
      if (error.code === 'P2002') {
        const field = error.meta?.target?.[0] || 'field';
        return res.status(400).json({ 
          error: `A record with this ${field} already exists.` 
        });
      }
      
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Record not found' });
      }
      
      // Return appropriate status and message
      return res.status(error.status || 500).json({ 
        error: error.message || 'Internal Server Error' 
      });
    }
  }
}