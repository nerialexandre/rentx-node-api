import { CategoriesRepository } from './categories/CategoriesRepository'
import { SpecificationsRepository } from './specification/SpecificationsRepository'

const categoriesRepository = CategoriesRepository
const specificationsRepository = new SpecificationsRepository()

export { categoriesRepository, specificationsRepository }
