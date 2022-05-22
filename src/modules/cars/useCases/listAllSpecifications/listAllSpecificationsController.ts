import { ListAllSpecificationsUseCase } from './listAllSpecificationsUseCase'
import { Request, Response } from 'express'

class ListAllSpecificationsController {
  constructor (private listAllCategoriesUseCase: ListAllSpecificationsUseCase) {
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

export { ListAllSpecificationsController }
