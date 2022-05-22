import { Category } from '../../models/Category'
import { ICategoriesRepository } from '../../repositories/categories/ICategoriesRepository'

class ListAllCategoriesUseCase {
  constructor (private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async execute (): Promise<Category[]> {
    const allCategories = this.categoriesRepository.all()
    return allCategories
  }
}

export { ListAllCategoriesUseCase }
