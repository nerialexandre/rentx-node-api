import { CategoriesRepository } from '../../repositories/categories/CategoriesRepository'
import { ImportCategoriesController } from './importCategoriesController'
import { ImportCategoriesUseCase } from './importCategoriesUseCase'

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
  const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)
  return importCategoriesController
}
