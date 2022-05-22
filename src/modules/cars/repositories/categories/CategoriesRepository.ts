import { Category } from 'src/modules/cars/entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  constructor () {
    this.categories = []
  }

  create ({ description, name }: ICreateCategoryDTO): Category[] {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
    })

    this.categories.push(category)

    return this.categories
  }

  all (): Category[] {
    return this.categories
  }

  findByName (name: string): Category | undefined {
    return this.categories.find(category => category.name === name)
  }
}

export { CategoriesRepository }
