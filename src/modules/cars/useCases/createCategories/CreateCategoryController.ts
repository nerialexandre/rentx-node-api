import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  constructor (private createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase
  }

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body
      const result = await this.createCategoryUseCase.execute({ name, description })
      return response.status(201).send(result)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

export { CreateCategoryController }
