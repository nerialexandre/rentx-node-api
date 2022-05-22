import { categoriesRepository } from '../../repositories'
import { ListAllCategoriesController } from './listAllCategoriesController'
import { ListAllCategoriesUseCase } from './listAllCategoriesUseCase'

const listAllCategoriesUseCase = new ListAllCategoriesUseCase(categoriesRepository)
const listAllCategoriesController = new ListAllCategoriesController(listAllCategoriesUseCase)

export { listAllCategoriesController }
