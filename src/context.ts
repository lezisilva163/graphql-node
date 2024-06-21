import { Request, Response } from "express";

export interface Context {
  req: Request;
  res: Response;
}

export const context = ({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Context => ({
  req,
  res,
});
