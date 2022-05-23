
import { ICategoriesRepository } from 'src/modules/cars/repositories/categories/ICategoriesRepository'
import { inject, injectable } from 'tsyringe'

interface IRequest{
  name: string;
  description:string;
}
@injectable()
class CreateCategoryUseCase {
  constructor (
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  async execute ({ name, description }: IRequest) {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw Error('Category already exists')
    }

    const category = await this.categoriesRepository.create({ name, description })
    return category
  }
}

export { CreateCategoryUseCase }
