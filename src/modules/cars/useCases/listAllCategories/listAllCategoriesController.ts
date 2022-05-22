import { ListAllCategoriesUseCase } from './listAllCategoriesUseCase'
import { Request, Response } from 'express'

class ListAllCategoriesController {
  constructor (private listAllCategoriesUseCase: ListAllCategoriesUseCase) {
    this.listAllCategoriesUseCase = listAllCategoriesUseCase
  }

  public async handle (request: Request, response: Response): Promise<Response> | undefined {
    try {
      const categories = await this.listAllCategoriesUseCase.execute()
      return response.status(200).json(categories)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { ListAllCategoriesController }
