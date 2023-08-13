import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

//interface for context
export interface AuthContext {
  req: Request;
  res: Response;
  getAuthUser(req: Request): Promise<JwtPayload | undefined>;
}
