import { Category } from 'src/modules/cars/entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository'
import { getRepository, Repository } from 'typeorm'

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor () {
    this.repository = getRepository(Category)
  }

  async create ({ description, name }: ICreateCategoryDTO): Promise<Category> {
    try {
      const category = this.repository.create({
        description,
        name
      })

      await this.repository.save(category)

      return category
    } catch (error) {
      throw Error(error)
    }
  }

  async all (): Promise<Category[]> {
    const category = await this.repository.find()
    return category
  }

  async findByName (name: string): Promise<Category> | undefined {
    const category = await this.repository.findOne({
      where: { name }
    })
    return category
  }
}

export { CategoriesRepository }
