import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { ParamsDictionary } from 'express-serve-static-core';

export interface RequestWithFile extends Request {
  file?: Express.Multer.File;
  params: ParamsDictionary & {
    id?: string;
  };
}

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  role: string;
}