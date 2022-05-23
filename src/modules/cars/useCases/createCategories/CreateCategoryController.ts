import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'
import { container } from 'tsyringe'

class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

      const result = await createCategoryUseCase.execute({ name, description })

      return response.status(201).send(result)
    } catch (error) {
      return response.status(400).json('error')
    }
  }
}

export { CreateCategoryController }
