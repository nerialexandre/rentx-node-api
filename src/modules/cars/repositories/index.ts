import { CategoriesRepository } from './categories/CategoriesRepository'
import { SpecificationsRepository } from './specification/SpecificationsRepository'

const categoriesRepository = new CategoriesRepository()
const specificationsRepository = new SpecificationsRepository()

export { categoriesRepository, specificationsRepository }
