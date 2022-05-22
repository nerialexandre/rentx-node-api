// import { categoriesRepository } from '../../repositories'
import { categoriesRepository } from '../../repositories'
import { ImportCategoriesController } from './importCategoriesController'
import { ImportCategoriesUseCase } from './importCategoriesUseCase'

const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase)
export { importCategoriesController }
