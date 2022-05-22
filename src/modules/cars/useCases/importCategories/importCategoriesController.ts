import { ImportCategoriesUseCase } from './importCategoriesUseCase'
import { Request, Response } from 'express'

class ImportCategoriesController {
  constructor (private importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase
  }

  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request
      const result = await this.importCategoriesUseCase.execute(file)
      return response.json(result)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { ImportCategoriesController }
