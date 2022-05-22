import { Request, Response, NextFunction } from 'express'

export default function LoggerMiddlewere (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.info(`${req.url} - ${req.method}`)
  return next()
}
