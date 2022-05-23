import { CategoriesRepository } from '../../repositories/categories/CategoriesRepository'
import { ListAllCategoriesController } from './listAllCategoriesController'
import { ListAllCategoriesUseCase } from './listAllCategoriesUseCase'

export default () => {
  const categoriesRepository = new CategoriesRepository()
  const listAllCategoriesUseCase = new ListAllCategoriesUseCase(categoriesRepository)
  const listAllCategoriesController = new ListAllCategoriesController(listAllCategoriesUseCase)

  return listAllCategoriesController
}
