import { CategoriesRepository } from 'src/modules/cars/repositories/categories/CategoriesRepository'
import { ICategoriesRepository } from 'src/modules/cars/repositories/categories/ICategoriesRepository'
import { container } from 'tsyringe'

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
)
